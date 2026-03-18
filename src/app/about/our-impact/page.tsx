import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Our Impact | ${COMPANY_NAME}`,
  description: `See the measurable environmental impact of ${COMPANY_NAME}: 500K+ tons diverted, 200+ cities served, and growing. Track our progress toward a zero-waste future.`,
  alternates: { canonical: `${SITE_URL}/about/our-impact` },
}

const stats = [
  { value: '500,000+', label: 'Lbs Diverted from Landfill', icon: 'delete_sweep', suffix: '' },
  { value: '200+', label: 'Cities Served Nationwide', icon: 'location_city', suffix: '' },
  { value: '1,000+', label: 'Customers Served', icon: 'handshake', suffix: '' },
  { value: '20+', label: 'Years in Business', icon: 'calendar_month', suffix: '' },
]

const impactAreas = [
  {
    title: 'Landfill Diversion',
    desc: 'Over half a million tons of recyclable materials diverted from landfills and given a second life through responsible processing.',
    icon: 'recycling',
    stat: '100%',
    statLabel: 'Zero landfill commitment',
  },
  {
    title: 'Carbon Savings',
    desc: 'Every ton of material recycled saves significant greenhouse gas emissions compared to virgin material production and landfill decomposition.',
    icon: 'co2',
    stat: 'Millions',
    statLabel: 'Lbs CO2 avoided annually',
  },
  {
    title: 'Resource Conservation',
    desc: 'Recycled materials reduce the need for mining, logging, and petroleum extraction, conserving natural resources for future generations.',
    icon: 'water_drop',
    stat: 'Billions',
    statLabel: 'Gallons of water saved',
  },
  {
    title: 'Economic Value',
    desc: 'Many recyclable materials have commodity value. Our programs help businesses turn waste streams into revenue opportunities.',
    icon: 'payments',
    stat: 'Revenue',
    statLabel: 'Generated for clients',
  },
]

export default function OurImpactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-16 text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Our Impact', href: '/about/our-impact' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Our Impact
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">
            Real numbers. Real results. Here&apos;s the measurable difference we&apos;re making for businesses and the environment.
          </p>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-8 border border-[#ebebeb] rounded-xl bg-white">
                <span className="material-symbols-outlined text-[36px] text-[#2DB446] mb-3">{stat.icon}</span>
                <p className="text-[32px] lg:text-[40px] font-extrabold text-[#1a1a1a] leading-tight">{stat.value}</p>
                <p className="text-sm text-[#525252] font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Where We Make a Difference</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12">Our impact extends across environmental, economic, and community dimensions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area) => (
              <div key={area.title} className="p-8 bg-white border border-[#ebebeb] rounded-xl flex gap-5">
                <div className="w-14 h-14 rounded-full bg-[#e8f5eb] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px] text-[#2DB446]">{area.icon}</span>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold mb-2">{area.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-3">{area.desc}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#2DB446]">{area.stat}</span>
                    <span className="text-xs text-[#737373]">{area.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[28px] font-extrabold mb-3">Add to Our Impact</h2>
          <p className="text-base text-[#525252] mb-8 max-w-[480px] mx-auto">Every business that joins our program contributes to a cleaner, more sustainable future.</p>
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
            Start Your Recycling Program
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
