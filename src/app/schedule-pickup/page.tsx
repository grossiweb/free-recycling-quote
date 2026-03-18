import React from 'react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ContactForm from '@/components/shared/ContactForm'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_PHONE } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Schedule a Pickup | Recycling Quotes',
  description: 'Tell us about your materials and preferred schedule — we\'ll handle the rest. Schedule a recycling pickup today.',
  alternates: { canonical: `${SITE_URL}/schedule-pickup` },
}

export default function SchedulePickupPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Schedule Pickup', href: '/schedule-pickup' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Schedule a Pickup
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto">
            Tell us about your materials and preferred schedule &mdash; we&apos;ll handle the rest.
          </p>
        </div>
      </section>

      {/* Pickup Grid */}
      <section className="pt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[60px] items-start">
            {/* Form */}
            <div className="p-9 border border-[#ebebeb] rounded-2xl bg-white">
              <h2 className="text-[22px] font-bold mb-6">Pickup Request Form</h2>
              <ContactForm type="pickup" />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">schedule</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Quick Turnaround</h4>
                  <p className="text-sm text-[#525252] leading-relaxed">Most pickups can be scheduled within 2&ndash;3 business days.</p>
                </div>
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
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">verified</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">What Happens Next</h4>
                  <p className="text-sm text-[#525252] leading-relaxed">We&apos;ll review your request and confirm pickup details within 1 business day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
