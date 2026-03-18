import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `How Recycling Quotes Works | ${COMPANY_NAME}`,
  description: 'Our simple 3-step process: request a quote, schedule pickup, and receive your recycling certificate. Get started with free, no-obligation quotes.',
  alternates: { canonical: `${SITE_URL}/how-it-works` },
}

const steps = [
  {
    number: 1,
    title: 'Request a Quote',
    description: 'Tell us about your materials and volumes. We accept electronics, metals, paper, plastics, pallets, and dozens of other recyclable materials.',
    details: [
      'Fill out our simple online form or call us directly',
      'Describe your material types and estimated volumes',
      'Let us know your location and any compliance requirements',
      'Receive a customized quote within 24 hours',
    ],
    icon: 'request_quote',
    cta: { text: 'Get Your Free Quote', href: '/get-a-quote' },
  },
  {
    number: 2,
    title: 'Schedule Pickup',
    description: 'We coordinate all logistics and bring the right equipment to your location. No heavy lifting on your end.',
    details: [
      'Choose a pickup date that works for your schedule',
      'We provide containers, bins, and equipment as needed',
      'Our certified team handles all loading and transport',
      'Flexible scheduling including recurring pickups',
    ],
    icon: 'local_shipping',
    cta: { text: 'Schedule a Pickup', href: '/schedule-pickup' },
  },
  {
    number: 3,
    title: 'Get Certificate & Rewards',
    description: 'Receive official recycling certificates and track your environmental impact with detailed reporting.',
    details: [
      'Certificate of Recycling for every pickup',
      'Detailed weight and diversion reporting',
      'ESG-ready documentation for sustainability reports',
      'Track your cumulative environmental impact over time',
    ],
    icon: 'workspace_premium',
    cta: { text: 'Learn About Our Impact', href: '/about/our-impact' },
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-16 text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How It Works', href: '/how-it-works' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            How Recycling Quotes Works
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-8">
            Our simple 3-step process makes business recycling easy, compliant, and rewarding.
          </p>
          <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
            Get Started Free
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => (
              <div key={step.number} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                {/* Visual */}
                <div className={`flex flex-col items-center ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-[#e8f5eb] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[48px] text-[#2DB446]">{step.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#2DB446] text-white flex items-center justify-center text-lg font-extrabold">
                      {step.number}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block w-px h-20 bg-gradient-to-b from-[#2DB446] to-transparent mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <p className="text-sm font-bold text-[#2DB446] uppercase tracking-wider mb-2">Step {step.number}</p>
                  <h2 className="text-[28px] font-extrabold mb-3">{step.title}</h2>
                  <p className="text-base text-[#525252] leading-relaxed mb-5">{step.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-[#525252]">
                        <span className="material-symbols-outlined text-[#2DB446] text-lg mt-0.5 shrink-0">check_circle</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link href={step.cta.href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#2DB446] hover:gap-3 transition-all">
                    {step.cta.text}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[32px] font-extrabold mb-3">Why Businesses Choose Us</h2>
          <p className="text-base text-[#737373] max-w-[520px] mx-auto mb-10">
            Trusted by hundreds of businesses for reliable, certified recycling programs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'verified', label: 'Certified Partners' },
              { icon: 'eco', label: 'Zero Landfill' },
              { icon: 'description', label: 'Full Documentation' },
              { icon: 'support_agent', label: 'Dedicated Support' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-5">
                <span className="material-symbols-outlined text-[32px] text-[#2DB446]">{item.icon}</span>
                <span className="text-sm font-semibold text-[#1a1a1a]">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get Your Free Quote Today
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
