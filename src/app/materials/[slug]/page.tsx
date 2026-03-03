import React from 'react'
import { notFound } from 'next/navigation'
import SubpageTemplate from '@/components/shared/SubpageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

const materialsMeta: Record<string, { title: string; intro: string }> = {
  'electronics': { title: 'Electronics Recycling', intro: 'Certified e-waste recycling for computers, TVs, printers, and all electronic devices.' },
  'metal': { title: 'Metal Recycling', intro: 'Scrap metal recovery for ferrous and non-ferrous metals from any source.' },
  'paper': { title: 'Paper Recycling', intro: 'Paper and cardboard recycling with chain-of-custody documentation.' },
  'plastic': { title: 'Plastic Recycling', intro: 'Plastic recycling across all resin types — film, rigid, and mixed plastics.' },
  'cell-phones': { title: 'Cell Phone Recycling', intro: 'Certified mobile device recycling and data destruction services.' },
  'clothing-textile': { title: 'Clothing & Textile Recycling', intro: 'Textile reuse and recycling to divert clothing and fabric from landfill.' },
  'organics': { title: 'Organics Recycling', intro: 'Composting and organic waste diversion programs for food and green waste.' },
  'chemicals': { title: 'Chemical Waste Recycling', intro: 'Safe, compliant chemical waste collection and disposal services.' },
  'vehicle': { title: 'Vehicle Recycling', intro: 'End-of-life vehicle recycling and parts recovery programs.' },
  'junk': { title: 'Junk Recycling', intro: 'Mixed junk removal with maximum material sorting and diversion.' },
  'pallets': { title: 'Pallet Recycling', intro: 'Wooden and plastic pallet pickup, repair, and recycling.' },
  'light-bulbs': { title: 'Light Bulb Recycling', intro: 'Mercury-safe fluorescent and LED bulb recycling for compliance.' },
  'batteries': { title: 'Battery Recycling', intro: 'All battery chemistries — alkaline, lithium, lead-acid, and more.' },
  'dumpster-rental': { title: 'Dumpster Rental', intro: 'Flexible dumpster rental with responsible material sorting.' },
  'hazardous-materials': { title: 'Hazardous Materials Recycling', intro: 'Licensed hazardous waste collection, transport, and disposal.' },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = materialsMeta[slug]
  return { title: meta?.title || 'Material', description: meta?.intro || '' }
}

export async function generateStaticParams() {
  return Object.keys(materialsMeta).map((slug) => ({ slug }))
}

export default async function MaterialSubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const localMeta = materialsMeta[slug]
  let content = '', featuredImage = undefined

  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: `/materials/${slug}/`, idType: 'URI' })
    const page = data?.page
    if (page) { content = page.content || ''; featuredImage = page.featuredImage?.node }
  } catch {}
  const heroData = await fetchHeroDataByUri(`/materials/${slug}/`)

  if (!localMeta && !content) notFound()

  return (
    <SubpageTemplate
      title={localMeta?.title || slug.replace(/-/g, ' ')}
      category="Materials"
      categoryHref="/materials"
      intro={localMeta?.intro}
      content={content}
      featuredImage={featuredImage}
      heroData={heroData}
    />
  )
}
