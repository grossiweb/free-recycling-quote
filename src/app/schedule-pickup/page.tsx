import React from 'react'
import ContactForm from '@/components/shared/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Pickup',
  description: 'Schedule a free recycling pickup for your business. We offer flexible scheduling including same-week service.',
}

const steps = [
  { step: '1', title: 'Fill Out the Form', desc: 'Tell us what materials you have and your preferred pickup date.' },
  { step: '2', title: 'We Confirm', desc: 'We\'ll confirm your pickup within 24 hours and send you a reminder.' },
  { step: '3', title: 'We Arrive', desc: 'Our team arrives on schedule and handles all collection.' },
  { step: '4', title: 'You Get a Report', desc: 'Receive a diversion certificate and ESG-ready report.' },
]

export default function SchedulePickupPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">Get Started</p>
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-6">
            Schedule a Pickup
          </h1>
          <p className="text-[#686767] text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to recycle? Schedule a free pickup and we&apos;ll take care of the rest — collection, sorting, reporting, and diversion.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-[#4BE576] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1E1E1E] font-black text-xl">
                  {s.step}
                </div>
                <h3 className="text-[#1F1E1E] font-bold mb-2">{s.title}</h3>
                <p className="text-[#686767] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div>
              <h2 className="text-[#1F1E1E] text-2xl lg:text-3xl font-black mb-8">
                What We Pick Up
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  'Electronics', 'Metal Scrap', 'Paper & Cardboard',
                  'Plastic', 'Pallets', 'Batteries',
                  'Light Bulbs', 'Cell Phones', 'Textiles',
                  'Chemicals', 'Organics', 'Hazardous Waste',
                ].map((m) => (
                  <div key={m} className="flex items-center gap-2 text-sm text-[#686767]">
                    <svg className="w-4 h-4 text-[#4BE576] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {m}
                  </div>
                ))}
              </div>

              <div className="bg-[#4BE576]/10 border border-[#4BE576] rounded-2xl p-6">
                <h3 className="text-[#1F1E1E] font-bold text-lg mb-2">Or Call Us Directly</h3>
                <a href="tel:8179465655" className="text-[#499E62] text-2xl font-black block mb-1">
                  817-946-5655
                </a>
                <p className="text-[#686767] text-sm">Mon–Fri 8am–6pm. Same-day quotes available.</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-[#1F1E1E] text-xl font-bold mb-6">Schedule Your Pickup</h2>
              <ContactForm type="pickup" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
