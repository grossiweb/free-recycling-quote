'use client'
import React, { useState } from 'react'

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`bg-white rounded-xl mb-3 border overflow-hidden transition-colors ${isOpen ? 'border-[#2DB446]' : 'border-[#ebebeb]'}`}>
      <button
        className={`flex items-center justify-between w-full px-6 py-5 text-left text-base font-semibold cursor-pointer select-none transition-colors ${isOpen ? 'text-[#2DB446]' : 'text-[#1a1a1a]'}`}
        onClick={onToggle}
      >
        <span className="pr-4">{q}</span>
        <span className={`material-symbols-outlined text-[22px] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2DB446]' : 'text-[#737373]'}`}>
          expand_more
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-[350ms]"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="px-6 pb-5 text-[15px] text-[#525252] leading-[1.65]">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      {faqs.map((faq, i) => (
        <FAQItem
          key={i}
          q={faq.q}
          a={faq.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </>
  )
}
