import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Why Choose ${COMPANY_NAME} | Certified Recycling Solutions`,
  description: `Discover what sets ${COMPANY_NAME} apart: largest certified network, nationwide coverage, compliance documentation, ESG reporting, and zero-waste commitment.`,
  alternates: { canonical: `${SITE_URL}/about/why-choose-us` },
}

const differentiators = [
  {
    icon: 'hub',
    title: 'Largest Certified Network',
    desc: 'We maintain the largest network of certified recycling partners in the country. Every facility in our network holds R2, e-Stewards, or equivalent certifications, ensuring your materials are processed to the highest standards.',
  },
  {
    icon: 'public',
    title: 'Nationwide Coverage',
    desc: 'From coast to coast, we serve businesses in all 50 states. No matter where your facilities are located, we can build a recycling program that covers every site with consistent quality and documentation.',
  },
  {
    icon: 'description',
    title: 'Compliance Documentation',
    desc: 'Every pickup comes with a Certificate of Recycling and detailed chain-of-custody documentation. Stay audit-ready with compliance records that meet federal, state, and industry-specific requirements.',
  },
  {
    icon: 'assessment',
    title: 'ESG Reporting',
    desc: 'We provide pre-formatted sustainability data and metrics designed for ESG reports. Track your environmental impact with accurate diversion rates, carbon savings, and material recovery data.',
  },
  {
    icon: 'eco',
    title: 'Zero-Waste Commitment',
    desc: 'We are committed to zero landfill diversion. Every material we collect is recycled, reused, repurposed, or converted to energy. Nothing we handle ends up in a landfill.',
  },
  {
    icon: 'support_agent',
    title: 'Dedicated Account Support',
    desc: 'Every client gets a dedicated account manager who understands your business. From program design to ongoing optimization, you always have a single point of contact.',
  },
]

export default function WhyChooseUsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-16 text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Why Choose Us', href: '/about/why-choose-us' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Why Choose {COMPANY_NAME}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">
            The difference is in the details. Here&apos;s what sets us apart from every other recycling provider.
          </p>
        </div>
      </section>

      {/* Differentiator Cards */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="p-8 border border-[#ebebeb] rounded-xl bg-white hover:border-[#2DB446] transition-colors">
                <div className="w-14 h-14 rounded-full bg-[#e8f5eb] flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[28px] text-[#2DB446]">{item.icon}</span>
                </div>
                <h3 className="text-[18px] font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500K+', label: 'Tons Diverted' },
              { value: '200+', label: 'Cities Served' },
              { value: '25+', label: 'Years Experience' },
              { value: '100%', label: 'Zero Landfill' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[36px] font-extrabold text-[#2DB446]">{stat.value}</p>
                <p className="text-sm text-[#525252] font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[28px] font-extrabold mb-3">Experience the Difference</h2>
          <p className="text-base text-[#525252] mb-8 max-w-[480px] mx-auto">Get a free assessment and see why businesses across America choose {COMPANY_NAME}.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get Your Free Quote
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="/about/certifications" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              View Certifications
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
