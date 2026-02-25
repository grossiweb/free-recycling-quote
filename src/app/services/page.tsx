import React from 'react'
import HubPageTemplate from '@/components/shared/HubPageTemplate'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Recycling Services',
  description: 'Comprehensive recycling services for businesses — pallet recycling, business programs, material solutions, consumer take-back programs, and collection events.',
}

const serviceItems = [
  {
    title: 'Pallet Recycling',
    desc: 'Full-circle pallet management — pickup, repair, and responsible recycling for wooden and plastic pallets.',
    href: '/services/pallet-recycling',
    icon: '📦',
  },
  {
    title: 'Business Recycling Programs',
    desc: 'Tailored recycling programs designed around your business size, materials, and sustainability goals.',
    href: '/services/business-recycling-programs',
    icon: '🏢',
  },
  {
    title: 'Material Recycling Solutions',
    desc: 'End-to-end material recovery for metals, paper, plastics, electronics, and more.',
    href: '/services/material-recycling-solutions',
    icon: '♻️',
  },
  {
    title: 'Consumer Take Back Programs',
    desc: 'In-store and mail-in take-back programs to help your customers responsibly recycle products.',
    href: '/services/consumer-take-back-programs',
    icon: '🔄',
  },
  {
    title: 'Collection Events',
    desc: 'One-day or ongoing collection events for communities, retailers, and corporate campuses.',
    href: '/services/collection-events',
    icon: '📅',
  },
]

export default async function ServicesPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/services/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}

  return (
    <HubPageTemplate
      heading="Our Recycling Services"
      subheading="What We Do"
      intro="We provide end-to-end recycling services that help businesses reduce waste, meet sustainability goals, and stay compliant — all with zero disruption to your operations."
      items={serviceItems}
      wpContent={wpContent}
    />
  )
}
