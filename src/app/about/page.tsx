import React from 'react'
import Link from 'next/link'
import HubPageTemplate from '@/components/shared/HubPageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and commitment to zero-landfill recycling for businesses.',
}

const aboutItems = [
  { title: 'Our Story', desc: 'How we became a leading recycling solutions provider for businesses nationwide.', href: '/about/our-story', icon: '📖' },
  { title: 'Why Choose Us', desc: 'What sets us apart — certified processes, zero landfill commitment, and dedicated support.', href: '/about/why-choose-us', icon: '⭐' },
  { title: 'ESG & Sustainability', desc: 'Our approach to environmental, social, and governance reporting for your business.', href: '/about/esg-sustainability', icon: '🌱' },
  { title: 'Our Impact', desc: 'The measurable difference we make — tons diverted, gallons saved, emissions reduced.', href: '/about/our-impact', icon: '📊' },
]

export default async function AboutPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/about/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}

  return (
    <HubPageTemplate
      heading="About Recycling Quote"
      subheading="Who We Are"
      intro="We're on a mission to make responsible recycling accessible and simple for every business — with zero landfill commitment and full transparency."
      items={aboutItems}
      ctaText="Contact Us"
      ctaHref="/contact"
      wpContent={wpContent}
    />
  )
}
