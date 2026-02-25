'use client'
import React, { useState } from 'react'
import type { Metadata } from 'next'

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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100">
      <button
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#1F1E1E] font-semibold text-base pr-8">{q}</span>
        <svg
          className={`w-5 h-5 text-[#4BE576] flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-[#686767] text-base leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#686767] text-xl max-w-2xl mx-auto">
            Everything you need to know about our recycling programs and services.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </div>
  )
}
