import React from 'react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ContactForm from '@/components/shared/ContactForm'
import FinalCTA from '@/components/shared/FinalCTA'
import Link from 'next/link'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME, COMPANY_PHONE } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Get a Free Recycling Quote | ${COMPANY_NAME}`,
  description: 'Request a free, no-obligation recycling quote for your business. Certified recycling, nationwide service, and 24-hour response guaranteed.',
  alternates: { canonical: `${SITE_URL}/get-a-quote` },
}

const trustBadges = [
  { icon: 'request_quote', title: 'Free Quotes', desc: 'No-obligation assessment for your business' },
  { icon: 'verified', title: 'Certified Recycling', desc: 'R2 and e-Stewards certified partners' },
  { icon: 'public', title: 'Nationwide Service', desc: 'Coverage across all 50 states' },
  { icon: 'schedule', title: '24-Hour Response', desc: 'Get your quote within one business day' },
]

export default function GetAQuotePage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Get a Quote', href: '/get-a-quote' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Get a Free Recycling Quote
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">
            Tell us about your materials and we&apos;ll provide a customized recycling program with transparent pricing.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="pb-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="text-center p-5 border border-[#ebebeb] rounded-xl bg-white">
                <span className="material-symbols-outlined text-[28px] text-[#2DB446] mb-2">{badge.icon}</span>
                <h3 className="text-[14px] font-bold mb-1">{badge.title}</h3>
                <p className="text-[12px] text-[#525252]">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pt-6 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[60px] items-start">
            {/* Form */}
            <div className="p-9 border border-[#ebebeb] rounded-2xl bg-white">
              <h2 className="text-[22px] font-bold mb-6">Request Your Free Quote</h2>
              <ContactForm type="quote" />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5">
              <div className="p-6 bg-[#f0faf2] border border-[#d4edda] rounded-xl">
                <h3 className="text-[16px] font-bold text-[#1a1a1a] mb-3">What to Expect</h3>
                <ul className="space-y-3 text-sm text-[#525252]">
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-[#2DB446] text-lg mt-0.5">check_circle</span>
                    Free assessment of your materials and volumes
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-[#2DB446] text-lg mt-0.5">check_circle</span>
                    Custom recycling program recommendation
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-[#2DB446] text-lg mt-0.5">check_circle</span>
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex gap-2">
                    <span className="material-symbols-outlined text-[#2DB446] text-lg mt-0.5">check_circle</span>
                    Compliance documentation included
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">phone</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Prefer to call?</h4>
                  <a href={`tel:${COMPANY_PHONE.replace(/-/g, '')}`} className="text-sm font-semibold text-[#1a1a1a]">{COMPANY_PHONE}</a>
                  <p className="text-xs text-[#737373] mt-1">Mon&ndash;Fri, 8am&ndash;6pm CT</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">timer</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Fast Response</h4>
                  <p className="text-sm text-[#525252] leading-relaxed">Most quotes delivered within 24 hours of submission.</p>
                </div>
              </div>

              <Link href="/how-it-works" className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl hover:border-[#2DB446] transition-colors group">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">info</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">How It Works</h4>
                  <p className="text-sm text-[#525252] leading-relaxed">Learn about our simple 3-step process.</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1 mt-1">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
