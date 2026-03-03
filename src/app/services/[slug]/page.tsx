import React from 'react'
import { notFound } from 'next/navigation'
import SubpageTemplate from '@/components/shared/SubpageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

const servicesMeta: Record<string, { title: string; intro: string }> = {
  'pallet-recycling': {
    title: 'Pallet Recycling',
    intro: 'Full-circle pallet management — pickup, repair, and responsible recycling for wooden and plastic pallets.',
  },
  'business-recycling-programs': {
    title: 'Business Recycling Programs',
    intro: 'Tailored recycling programs designed around your business size, materials, and sustainability goals.',
  },
  'material-recycling-solutions': {
    title: 'Material Recycling Solutions',
    intro: 'End-to-end material recovery for metals, paper, plastics, electronics, and more.',
  },
  'consumer-take-back-programs': {
    title: 'Consumer Take Back Programs',
    intro: 'In-store and mail-in take-back programs to help your customers responsibly recycle products.',
  },
  'collection-events': {
    title: 'Collection Events',
    intro: 'One-day or ongoing collection events for communities, retailers, and corporate campuses.',
  },
  'junk-removal': {
    title: 'Junk Removal',
    intro: 'Fast, responsible junk removal for businesses and residences with maximum material diversion.',
  },
  'dumpster-rental': {
    title: 'Dumpster Rental',
    intro: 'Flexible dumpster rental with responsible sorting and material recovery.',
  },
  'product-destruction': {
    title: 'Product Destruction',
    intro: 'Secure, certified product destruction services to protect your brand and meet compliance requirements.',
  },
  'shredding-service': {
    title: 'Shredding Service',
    intro: 'On-site and off-site document and product shredding with certificate of destruction.',
  },
  'waste-to-energy': {
    title: 'Waste to Energy',
    intro: 'Converting non-recyclable waste into usable energy — maximizing diversion from landfill.',
  },
  'janitorial-service': {
    title: 'Janitorial Service',
    intro: 'Green janitorial services integrated with your recycling program for a cleaner workplace.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = servicesMeta[slug]
  return {
    title: meta?.title || 'Service',
    description: meta?.intro || '',
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesMeta).map((slug) => ({ slug }))
}

export default async function ServiceSubpage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const localMeta = servicesMeta[slug]

  let content = ''
  let featuredImage = undefined

  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: `/services/${slug}/`, idType: 'URI' })
    const page = data?.page
    if (page) {
      content = page.content || ''
      featuredImage = page.featuredImage?.node
    }
  } catch {}
  const heroData = await fetchHeroDataByUri(`/services/${slug}/`)

  if (!localMeta && !content) {
    notFound()
  }

  return (
    <SubpageTemplate
      title={localMeta?.title || slug.replace(/-/g, ' ')}
      category="Services"
      categoryHref="/services"
      intro={localMeta?.intro}
      content={content}
      featuredImage={featuredImage}
      heroData={heroData}
    />
  )
}
