import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `About ${COMPANY_NAME} | Trusted Recycling Solutions`,
  description: 'Learn about our mission, values, and commitment to sustainable recycling for businesses. Founded in 2005 in Fort Worth, TX.',
  alternates: { canonical: `${SITE_URL}/about` },
}

const subPages = [
  { title: 'Our Story', desc: 'How we grew from a local Fort Worth operation to a nationwide recycling solutions provider.', href: '/about/our-story', icon: 'history' },
  { title: 'Why Choose Us', desc: 'What sets us apart — certified network, nationwide coverage, and zero-waste commitment.', href: '/about/why-choose-us', icon: 'stars' },
  { title: 'ESG & Sustainability', desc: 'Our approach to environmental, social, and governance responsibility.', href: '/about/esg', icon: 'eco' },
  { title: 'Our Impact', desc: 'The measurable difference we make — tons diverted, cities served, and growing.', href: '/about/our-impact', icon: 'trending_up' },
  { title: 'Certifications', desc: 'R2, e-Stewards, ISO 14001, and more. The standards that back our work.', href: '/about/certifications', icon: 'verified' },
]

const impactCards = [
  { label: 'Environmental', color: '#2DB446', desc: 'Reducing landfill waste, improving recycling efficiency, and supporting circular material flow. Over 500,000 tons diverted and counting.' },
  { label: 'Social', color: '#3b82f6', desc: 'Supporting communities through local employment, responsible material handling, and transparent reporting that creates lasting social benefits.' },
  { label: 'Governance', color: '#8b5cf6', desc: 'Clear documentation, compliance standards, and ethical business practices. Built for companies that need verifiable accountability.' },
]

const whyCards = [
  { icon: 'history', title: '25+ Years Experience', desc: 'Deep industry knowledge built over decades of hands-on work.' },
  { icon: 'public', title: 'Nationwide Support', desc: 'Service coverage across all 50 states through our partner network.' },
  { icon: 'description', title: 'ESG Reporting', desc: 'Pre-formatted data and certified documentation for your reports.' },
  { icon: 'gavel', title: 'Compliance Knowledge', desc: 'We know the regulations so you don\'t have to worry about them.' },
  { icon: 'bolt', title: 'Fast Response', desc: 'Most programs up and running within 1\u20132 weeks of assessment.' },
  { icon: 'tune', title: 'Tailored Programs', desc: 'Every program is custom-designed for your waste streams and volumes.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-5xl md:text-4xl sm:text-3xl font-extrabold mb-3">
            About {COMPANY_NAME}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-7">
            Trusted recycling solutions backed by experience, accountability, and measurable impact.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold mb-4">Our Story</h2>
          <p className="text-base text-[#525252] leading-[1.7] mb-4">{COMPANY_NAME} was founded with a clear mission: make it easier for businesses to recycle responsibly. Over the years, we&apos;ve built a nationwide network of processing partners and developed programs that serve companies across every industry &mdash; from single-location retailers to multi-site manufacturing operations.</p>
          <p className="text-base text-[#525252] leading-[1.7] mb-4">What sets us apart is our focus on accountability. Every pickup comes with certified documentation. Every program is designed around your specific waste streams. And every relationship is built on transparency, reliability, and measurable results.</p>
          <p className="text-base text-[#525252] leading-[1.7]">Today, we&apos;ve helped divert over 500,000 tons of materials from landfills, serving hundreds of businesses with recycling programs that are built to last.</p>
        </div>
      </section>

      {/* Explore About Sub-Pages */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Learn More About Us</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">Dive deeper into our story, values, and what makes us different.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((page) => (
              <Link key={page.href} href={page.href} className="p-7 bg-white border border-[#ebebeb] rounded-xl transition-all hover:border-[#2DB446] hover:-translate-y-1 hover:shadow-md group">
                <span className="material-symbols-outlined text-[32px] text-[#2DB446] mb-3">{page.icon}</span>
                <h3 className="text-[16px] font-bold mb-2">{page.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-3">{page.desc}</p>
                <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Our Impact</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">We measure our success by the environmental, social, and governance outcomes we deliver.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactCards.map((card) => (
              <div key={card.label} className="p-8 rounded-xl bg-white border border-[#ebebeb]">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: card.color }} />
                  {card.label}
                </h4>
                <p className="text-sm text-[#525252] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Why Choose Us</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">What makes {COMPANY_NAME} different.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map((card) => (
              <div key={card.title} className="text-center p-7 border border-[#ebebeb] rounded-xl bg-white transition-colors hover:border-[#2DB446]">
                <span className="material-symbols-outlined text-[32px] text-[#2DB446] mb-3">{card.icon}</span>
                <h4 className="text-[15px] font-bold mb-1">{card.title}</h4>
                <p className="text-[13px] text-[#525252] leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
