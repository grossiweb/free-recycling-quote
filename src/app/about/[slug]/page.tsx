import React from 'react'
import { notFound } from 'next/navigation'
import SubpageTemplate from '@/components/shared/SubpageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_CONTENT_BY_SLUG } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

const aboutMeta: Record<string, { title: string; intro: string }> = {
  'our-story': { title: 'Our Story', intro: 'How we became a leading recycling solutions provider for businesses nationwide.' },
  'why-choose-us': { title: 'Why Choose Us', intro: 'What sets us apart — certified processes, zero landfill commitment, and dedicated support.' },
  'esg-sustainability': { title: 'ESG & Sustainability', intro: 'Our approach to environmental, social, and governance reporting for your business.' },
  'our-impact': { title: 'Our Impact', intro: 'The measurable difference we make — tons diverted, gallons saved, emissions reduced.' },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = aboutMeta[slug]
  return { title: meta?.title || 'About', description: meta?.intro || '' }
}

export async function generateStaticParams() {
  return Object.keys(aboutMeta).map((slug) => ({ slug }))
}

export default async function AboutSubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const localMeta = aboutMeta[slug]
  let content = '', featuredImage = undefined

  try {
    const data = await getWordPressData<any>(GET_CONTENT_BY_SLUG, { slug })
    const page = data?.pages?.nodes?.[0]
    if (page) { content = page.content || ''; featuredImage = page.featuredImage?.node }
  } catch {}

  if (!localMeta && !content) notFound()

  return (
    <SubpageTemplate
      title={localMeta?.title || slug.replace(/-/g, ' ')}
      category="About"
      categoryHref="/about"
      intro={localMeta?.intro}
      content={content}
      featuredImage={featuredImage}
    />
  )
}
