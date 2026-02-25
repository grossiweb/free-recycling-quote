import React from 'react'
import HubPageTemplate from '@/components/shared/HubPageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Materials We Recycle',
  description: 'We recycle electronics, metal, paper, plastic, cell phones, textiles, chemicals, batteries, light bulbs, pallets, and more.',
}

const materialItems = [
  { title: 'Electronics', desc: 'Certified e-waste recycling for computers, TVs, printers, and all electronic devices.', href: '/materials/electronics', icon: '💻' },
  { title: 'Metal', desc: 'Scrap metal recovery for ferrous and non-ferrous metals from any source.', href: '/materials/metal', icon: '🔩' },
  { title: 'Paper', desc: 'Paper and cardboard recycling with chain-of-custody documentation.', href: '/materials/paper', icon: '📄' },
  { title: 'Plastic', desc: 'Plastic recycling across all resin types — film, rigid, and mixed plastics.', href: '/materials/plastic', icon: '♻️' },
  { title: 'Cell Phones', desc: 'Certified mobile device recycling and data destruction services.', href: '/materials/cell-phones', icon: '📱' },
  { title: 'Clothing / Textile', desc: 'Textile reuse and recycling to divert clothing and fabric from landfill.', href: '/materials/clothing-textile', icon: '👕' },
  { title: 'Organics', desc: 'Composting and organic waste diversion programs for food and green waste.', href: '/materials/organics', icon: '🌿' },
  { title: 'Chemicals', desc: 'Safe, compliant chemical waste collection and disposal services.', href: '/materials/chemicals', icon: '🧪' },
  { title: 'Vehicle', desc: 'End-of-life vehicle recycling and parts recovery programs.', href: '/materials/vehicle', icon: '🚗' },
  { title: 'Junk', desc: 'Mixed junk removal with maximum material sorting and diversion.', href: '/materials/junk', icon: '🗑️' },
  { title: 'Pallets', desc: 'Wooden and plastic pallet pickup, repair, and recycling.', href: '/materials/pallets', icon: '📦' },
  { title: 'Light Bulbs', desc: 'Mercury-safe fluorescent and LED bulb recycling for compliance.', href: '/materials/light-bulbs', icon: '💡' },
  { title: 'Batteries', desc: 'All battery chemistries — alkaline, lithium, lead-acid, and more.', href: '/materials/batteries', icon: '🔋' },
  { title: 'Dumpster Rental', desc: 'Flexible dumpster rental with responsible material sorting.', href: '/materials/dumpster-rental', icon: '🚛' },
  { title: 'Hazardous Materials', desc: 'Licensed hazardous waste collection, transport, and disposal.', href: '/materials/hazardous-materials', icon: '⚠️' },
]

export default async function MaterialsPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/materials/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}

  return (
    <HubPageTemplate
      heading="Materials We Recycle"
      subheading="What We Accept"
      intro="From electronics to hazardous waste, we handle a comprehensive range of materials with certified, responsible processing and zero landfill commitment."
      items={materialItems}
      wpContent={wpContent}
    />
  )
}
