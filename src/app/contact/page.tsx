import React from 'react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import ContactForm from '@/components/shared/ContactForm'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Recycling Quote',
  description: 'Get in touch for a free recycling assessment and custom quote for your business. Call 817-946-5655 or fill out our form for a response within 24 hours.',
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <div>
      <section className="pt-0 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Contact Us
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto">
            Get in touch for a free recycling assessment and custom quote for your business.
          </p>
        </div>
      </section>

      <section className="pt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[60px] items-start">
            <div className="p-9 border border-[#ebebeb] rounded-2xl bg-white">
              <h2 className="text-[22px] font-bold mb-6">Request a Quote</h2>
              <ContactForm type="quote" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">phone</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Phone</h4>
                  <a href="tel:8179465655" className="text-sm text-[#525252]">817-946-5655</a>
                </div>
              </div>
              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">mail</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Email</h4>
                  <a href="mailto:jorge@recyclingquotes.com" className="text-sm text-[#525252]">jorge@recyclingquotes.com</a>
                </div>
              </div>
              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">location_on</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Location</h4>
                  <p className="text-sm text-[#525252]">Fort Worth, TX</p>
                  <p className="text-xs text-[#737373] mt-1">Serving businesses nationwide</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 border border-[#ebebeb] rounded-xl">
                <span className="material-symbols-outlined text-2xl text-[#2DB446] mt-0.5">schedule</span>
                <div>
                  <h4 className="text-[15px] font-bold mb-1">Response Time</h4>
                  <p className="text-sm text-[#525252]">Quotes within 24 hours</p>
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
