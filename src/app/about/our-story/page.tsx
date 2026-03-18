import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Our Story | ${COMPANY_NAME}`,
  description: `Founded in 2005 in Fort Worth, TX, ${COMPANY_NAME} has grown from a local recycling operation to a nationwide provider. Our mission: making recycling accessible for every business.`,
  alternates: { canonical: `${SITE_URL}/about/our-story` },
}

const milestones = [
  { year: '2005', title: 'Founded in Fort Worth, TX', desc: 'Started as a local recycling service helping small businesses in the Dallas-Fort Worth area manage their recyclable materials.' },
  { year: '2010', title: 'Expanded Across Texas', desc: 'Grew our partner network to serve businesses across all major Texas metros, adding electronics and metals recycling capabilities.' },
  { year: '2015', title: 'Went Nationwide', desc: 'Launched our nationwide partner network, enabling service across all 50 states with certified recycling facilities.' },
  { year: '2018', title: 'ESG Reporting Launch', desc: 'Introduced comprehensive ESG reporting tools to help businesses track and communicate their environmental impact.' },
  { year: '2020', title: 'Zero-Waste Commitment', desc: 'Achieved our zero-landfill goal, ensuring every material collected is recycled, reused, or converted to energy.' },
  { year: '2024', title: '500,000 Tons Diverted', desc: 'Reached a major milestone: over half a million tons of materials diverted from landfills through our programs.' },
]

export default function OurStoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-16 text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Our Story', href: '/about/our-story' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Our Story
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">
            From a local Fort Worth operation to a nationwide recycling solutions provider serving businesses across America.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold mb-5">How It All Started</h2>
          <p className="text-base text-[#525252] leading-[1.7] mb-5">
            {COMPANY_NAME} was founded in 2005 in Fort Worth, Texas, with a straightforward idea: businesses should have easy, affordable access to responsible recycling services. At the time, most recycling programs were designed for municipalities, not businesses. Commercial operations were left to figure it out on their own.
          </p>
          <p className="text-base text-[#525252] leading-[1.7] mb-5">
            We saw the gap and built a bridge. Starting with a handful of local partners and a commitment to doing things right, we began helping businesses in the Dallas-Fort Worth area recycle their electronics, metals, paper, and plastics.
          </p>
          <h2 className="text-[28px] font-extrabold mb-5 mt-12">Growing Nationwide</h2>
          <p className="text-base text-[#525252] leading-[1.7] mb-5">
            As demand grew, so did our network. We expanded first across Texas, then to neighboring states, and eventually built a nationwide network of certified recycling partners. Today, we serve businesses in all 50 states, handling everything from single pickups to ongoing multi-site recycling programs.
          </p>
          <p className="text-base text-[#525252] leading-[1.7] mb-5">
            Our growth has always been driven by a single principle: make recycling accessible for every business, regardless of size or location. Whether you&apos;re a small retailer with occasional recyclables or a manufacturer generating tons of material each week, we build a program that fits.
          </p>
          <h2 className="text-[28px] font-extrabold mb-5 mt-12">Our Mission</h2>
          <p className="text-base text-[#525252] leading-[1.7]">
            Making recycling accessible for every business. We believe that responsible waste management shouldn&apos;t require a dedicated team or deep expertise. Our job is to handle the complexity &mdash; logistics, compliance, documentation, partner management &mdash; so you can focus on running your business while knowing your materials are being recycled the right way.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[#2DB446]/20" />
            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 relative">
                  <div className="relative z-10 w-[46px] h-[46px] shrink-0 rounded-full bg-[#2DB446] text-white flex items-center justify-center text-sm font-bold">
                    {m.year.slice(2)}
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-bold text-[#2DB446] uppercase tracking-wider mb-1">{m.year}</p>
                    <h3 className="text-[16px] font-bold mb-1">{m.title}</h3>
                    <p className="text-sm text-[#525252] leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[28px] font-extrabold mb-3">Ready to Be Part of Our Story?</h2>
          <p className="text-base text-[#525252] mb-8 max-w-[480px] mx-auto">Join hundreds of businesses that trust {COMPANY_NAME} for their recycling needs.</p>
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
            Get Your Free Quote
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
