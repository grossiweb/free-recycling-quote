import React from 'react'
import ContactForm from '@/components/shared/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Quote',
  description: 'Contact us for a free recycling assessment and quote. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-6">
            Get a Free Recycling Quote
          </h1>
          <p className="text-[#686767] text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Tell us about your materials and waste streams. We&apos;ll assess your needs and provide a free, no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-[#1F1E1E] text-2xl lg:text-3xl font-black mb-8">
                Let&apos;s Start a Conversation
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4BE576]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#4BE576]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1F1E1E] mb-1">Phone</p>
                    <a href="tel:8179465655" className="text-[#686767] hover:text-[#4BE576] transition-colors">
                      817-946-5655
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4BE576]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#4BE576]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1F1E1E] mb-1">Email</p>
                    <a href="mailto:info@freerecyclingquote.com" className="text-[#686767] hover:text-[#4BE576] transition-colors">
                      info@freerecyclingquote.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-[#1F1E1E] font-bold text-lg mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'Response within 24 business hours',
                    'Free, no-obligation assessment',
                    'Custom program designed for your needs',
                    'Flexible scheduling and pickup options',
                    'Detailed ESG reporting included',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#686767] text-sm">
                      <svg className="w-5 h-5 text-[#4BE576] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <ContactForm type="quote" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
