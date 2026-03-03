import React from 'react'
import ContactForm from '@/components/shared/ContactForm'
import WpContent from '@/components/shared/WpContent'
import FinalCTA from '@/components/shared/FinalCTA'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Schedule a Pickup',
  description: 'Tell us about your materials and preferred schedule — we\'ll handle the rest.',
}

export default async function SchedulePickupPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/schedule-pickup/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}
  const heroData = await fetchHeroDataByUri('/schedule-pickup/')

  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            {heroData.subtitle || 'Schedule a Pickup'}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto">
            {heroData.description || 'Tell us about your materials and preferred schedule \u2014 we\u2019ll handle the rest.'}
          </p>
        </div>
      </section>

      {wpContent && (
        <section className="py-8 bg-white">
          <div className="max-w-[900px] mx-auto px-6">
            <WpContent html={wpContent} />
          </div>
        </section>
      )}

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
                  <p className="text-sm text-[#525252] leading-relaxed">Most pickups can be scheduled within 2\u20133 business days.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">phone</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Prefer to call?</h4>
                  <a href="tel:8179465655" className="text-sm font-semibold text-[#1a1a1a]">817-946-5655</a>
                  <p className="text-xs text-[#737373] mt-1">Mon\u2013Fri, 8am\u20136pm CT</p>
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
