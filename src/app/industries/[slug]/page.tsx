import React from 'react'
import { notFound } from 'next/navigation'
import SubpageTemplate from '@/components/shared/SubpageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_CONTENT_BY_SLUG } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

const industriesMeta: Record<string, { title: string; intro: string }> = {
  'retail': { title: 'Retail Recycling', intro: 'Streamlined recycling programs for stores and retail chains — from electronics to packaging.' },
  'manufacturing': { title: 'Manufacturing Recycling', intro: 'Custom solutions for production waste, scrap metal, packaging, and process materials.' },
  'distribution-logistics': { title: 'Distribution & Logistics Recycling', intro: 'Efficient pallet and packaging recycling programs for warehouses and distribution centers.' },
  'construction': { title: 'Construction Waste Recycling', intro: 'Comprehensive waste management for job sites — materials diversion and reporting.' },
  'schools-government': { title: 'Schools & Government Recycling', intro: 'Reliable, compliant recycling programs for public institutions and municipalities.' },
  'other-industries': { title: 'Recycling for Other Industries', intro: 'Flexible custom recycling programs for healthcare, hospitality, food service, and beyond.' },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = industriesMeta[slug]
  return { title: meta?.title || 'Industry', description: meta?.intro || '' }
}

export async function generateStaticParams() {
  return Object.keys(industriesMeta).map((slug) => ({ slug }))
}

export default async function IndustrySubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const localMeta = industriesMeta[slug]
  let content = '', featuredImage = undefined

  try {
    const data = await getWordPressData<any>(GET_CONTENT_BY_SLUG, { slug })
    const page = data?.pages?.nodes?.[0] || data?.posts?.nodes?.[0]
    if (page) { content = page.content || ''; featuredImage = page.featuredImage?.node }
  } catch {}

  if (!localMeta && !content) notFound()

  return (
    <SubpageTemplate
      title={localMeta?.title || slug.replace(/-/g, ' ')}
      category="Industries"
      categoryHref="/industries"
      intro={localMeta?.intro}
      content={content}
      featuredImage={featuredImage}
    />
  )
}
