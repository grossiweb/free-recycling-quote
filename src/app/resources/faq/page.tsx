import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FAQAccordion from '@/components/shared/FAQAccordion'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${COMPANY_NAME}`,
  description: 'Frequently asked questions about our recycling programs and services. Find answers about materials, pricing, compliance, and more.',
  alternates: { canonical: `${SITE_URL}/resources/faq` },
}

const faqs = [
  { q: 'What types of businesses do you work with?', a: 'We work with businesses of all sizes — from small retailers to large manufacturers, distributors, schools, government agencies, and construction companies.' },
  { q: 'How do I get a free recycling quote?', a: 'Simply fill out our contact form or call 817-946-5655. We\'ll assess your materials and provide a free, no-obligation quote within 24 hours.' },
  { q: 'What materials do you accept?', a: 'We accept electronics, metal, paper, plastic, cell phones, textiles, organics, chemicals, batteries, light bulbs, pallets, vehicles, and hazardous materials.' },
  { q: 'Do you guarantee zero landfill?', a: 'Yes. We are committed to zero landfill diversion. All materials are either recycled, reused, or converted to energy — nothing goes to landfill.' },
  { q: 'How does pickup scheduling work?', a: 'Use our online Schedule Pickup form or call us directly. We offer flexible scheduling including same-week pickups for urgent needs.' },
  { q: 'Do you provide ESG/sustainability reporting?', a: 'Yes. We provide detailed diversion reports, certificates of recycling, and ESG-ready documentation to support your sustainability goals.' },
  { q: 'Are your recycling processes certified?', a: 'Yes. We use certified recycling partners and comply with all state and federal environmental regulations.' },
  { q: 'What is the cost of your services?', a: 'Costs vary by material type, volume, and frequency. Many materials — like metals and electronics — can generate revenue. Contact us for a free assessment.' },
]

const faqCategories = [
  { title: 'Electronics Recycling', href: '/services/electronics-recycling', icon: 'devices' },
  { title: 'Metal Recycling', href: '/services/metal-recycling', icon: 'build' },
  { title: 'Paper & Cardboard', href: '/services/paper-recycling', icon: 'description' },
  { title: 'Compliance & Certifications', href: '/about/certifications', icon: 'verified' },
  { title: 'ESG Reporting', href: '/about/esg', icon: 'assessment' },
  { title: 'How It Works', href: '/how-it-works', icon: 'info' },
]

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'FAQ', href: '/resources/faq' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">
            Everything you need to know about our recycling programs and services.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold text-center mb-3">Browse by Topic</h2>
          <p className="text-base text-[#737373] text-center max-w-[480px] mx-auto mb-10">Find detailed information about specific recycling services and topics.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {faqCategories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="flex items-center gap-3 p-5 bg-white border border-[#ebebeb] rounded-xl hover:border-[#2DB446] transition-colors group">
                <span className="material-symbols-outlined text-[24px] text-[#2DB446]">{cat.icon}</span>
                <span className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#2DB446] transition-colors">{cat.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-[28px] font-extrabold mb-3">Still Have Questions?</h2>
          <p className="text-base text-[#525252] mb-8">Our team is happy to help. Reach out and we&apos;ll get back to you within one business day.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Contact Us
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
