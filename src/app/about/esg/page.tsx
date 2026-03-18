import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `ESG & Sustainability | ${COMPANY_NAME}`,
  description: `Learn about ${COMPANY_NAME}'s environmental commitments, circular economy approach, and carbon reduction goals. ESG reporting made easy for your business.`,
  alternates: { canonical: `${SITE_URL}/about/esg` },
}

const pillars = [
  {
    title: 'Environmental',
    color: '#2DB446',
    icon: 'forest',
    points: [
      'Zero-landfill commitment across all material streams',
      'Carbon footprint tracking and reduction reporting',
      'Water and energy conservation through efficient processing',
      'Support for circular economy initiatives',
    ],
  },
  {
    title: 'Social',
    color: '#3b82f6',
    icon: 'groups',
    points: [
      'Local job creation through our partner network',
      'Community engagement and education programs',
      'Fair labor practices across all operations',
      'Transparent reporting and stakeholder communication',
    ],
  },
  {
    title: 'Governance',
    color: '#8b5cf6',
    icon: 'gavel',
    points: [
      'Ethical business practices and compliance standards',
      'Third-party audited recycling processes',
      'Data privacy and security protections',
      'Clear chain-of-custody documentation',
    ],
  },
]

export default function ESGPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-16 text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'ESG & Sustainability', href: '/about/esg' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            ESG &amp; Sustainability
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">
            Our commitment to environmental responsibility, social impact, and governance excellence drives everything we do.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Our ESG Pillars</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12">We measure our performance across three core dimensions of sustainability.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-8 border border-[#ebebeb] rounded-xl bg-white">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: `${pillar.color}15` }}>
                  <span className="material-symbols-outlined text-[28px]" style={{ color: pillar.color }}>{pillar.icon}</span>
                </div>
                <h3 className="text-[20px] font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: pillar.color }} />
                  {pillar.title}
                </h3>
                <ul className="space-y-3">
                  {pillar.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[#525252]">
                      <span className="material-symbols-outlined text-lg mt-0.5 shrink-0" style={{ color: pillar.color }}>check</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold text-center mb-5">Circular Economy Approach</h2>
          <p className="text-base text-[#525252] leading-[1.7] mb-5 text-center">
            We believe in keeping materials in the economy for as long as possible. Our circular economy approach ensures that every material we collect is given a second life &mdash; whether through recycling, refurbishment, reuse, or energy recovery.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: 'recycling', title: 'Recycle', desc: 'Materials processed into raw commodities for manufacturing' },
              { icon: 'autorenew', title: 'Reuse', desc: 'Functional items refurbished and returned to service' },
              { icon: 'bolt', title: 'Recover', desc: 'Non-recyclable materials converted to clean energy' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-white border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-[32px] text-[#2DB446] mb-3">{item.icon}</span>
                <h4 className="text-[15px] font-bold mb-1">{item.title}</h4>
                <p className="text-[13px] text-[#525252]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon Reduction */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold text-center mb-5">Carbon Reduction</h2>
          <p className="text-base text-[#525252] leading-[1.7] text-center mb-8">
            Every ton of material we divert from landfill reduces greenhouse gas emissions. We track and report carbon savings for every client, providing the data you need for your own sustainability reporting.
          </p>
          <div className="p-8 bg-[#e8f5eb] rounded-xl text-center">
            <p className="text-sm font-bold text-[#2DB446] uppercase tracking-wider mb-2">Need ESG Reporting Help?</p>
            <h3 className="text-[20px] font-bold mb-3">We Make ESG Reporting Easy</h3>
            <p className="text-sm text-[#525252] mb-5 max-w-[440px] mx-auto">Get pre-formatted sustainability data and certified documentation designed for your ESG reports.</p>
            <Link href="/challenges/esg-reporting" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2DB446] text-white font-semibold text-[14px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5">
              Learn About ESG Reporting
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
