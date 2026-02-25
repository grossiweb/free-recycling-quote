import React from 'react'
import HubPageTemplate from '@/components/shared/HubPageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'We provide tailored recycling solutions for retail, manufacturing, distribution, construction, schools, government, and more.',
}

const industryItems = [
  { title: 'Retail', desc: 'Streamlined recycling programs for stores and retail chains — from electronics to packaging.', href: '/industries/retail', icon: '🏪' },
  { title: 'Manufacturing', desc: 'Custom solutions for production waste, scrap metal, packaging, and process materials.', href: '/industries/manufacturing', icon: '🏭' },
  { title: 'Distribution & Logistics', desc: 'Efficient pallet and packaging recycling programs for warehouses and distribution centers.', href: '/industries/distribution-logistics', icon: '🚚' },
  { title: 'Construction', desc: 'Comprehensive waste management for job sites — materials diversion, dumpster rental, and reporting.', href: '/industries/construction', icon: '🏗️' },
  { title: 'Schools & Government', desc: 'Reliable, compliant recycling programs for public institutions, municipalities, and educational campuses.', href: '/industries/schools-government', icon: '🏫' },
  { title: 'Other Industries', desc: 'Flexible, custom recycling programs for healthcare, hospitality, food service, and beyond.', href: '/industries/other-industries', icon: '🔧' },
]

export default async function IndustriesPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/industries/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}

  return (
    <HubPageTemplate
      heading="Industries We Serve"
      subheading="Who We Work With"
      intro="We support companies of all sizes with clear, dependable recycling solutions tailored to your specific industry and waste streams."
      items={industryItems}
      wpContent={wpContent}
    />
  )
}
