import React from 'react'
import Link from 'next/link'

interface SubItem {
  title: string
  desc: string
  href: string
  icon?: string
}

interface HubPageTemplateProps {
  heading: string
  subheading?: string
  intro?: string
  items: SubItem[]
  ctaText?: string
  ctaHref?: string
  wpContent?: string
}

export default function HubPageTemplate({
  heading,
  subheading,
  intro,
  items,
  ctaText = 'Get a Free Quote',
  ctaHref = '/contact',
  wpContent,
}: HubPageTemplateProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          {subheading && (
            <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">
              {subheading}
            </p>
          )}
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-6">{heading}</h1>
          {intro && (
            <p className="text-[#686767] text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-10">
              {intro}
            </p>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={ctaHref} className="btn-primary">
              {ctaText}
            </Link>
            <Link href="/schedule-pickup" className="btn-secondary">
              Schedule Pickup
            </Link>
          </div>
        </div>
      </section>

      {/* WordPress content (if any) */}
      {wpContent && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <div className="wp-content" dangerouslySetInnerHTML={{ __html: wpContent }} />
          </div>
        </section>
      )}

      {/* Sub-items grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col bg-neutral-50 hover:bg-emerald-50 rounded-2xl p-8 transition-colors border border-transparent hover:border-[#4BE576]"
              >
                {item.icon && <span className="text-4xl mb-4">{item.icon}</span>}
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-[#4BE576] w-1.5 h-5 rounded-full flex-shrink-0 mt-1" />
                  <h3 className="text-[#111112] text-xl font-bold group-hover:text-[#4BE576] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#686767] text-base leading-relaxed ml-4">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#4BE576] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-[#1E1E1E] text-3xl lg:text-4xl font-black mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#1E1E1E]/70 text-lg mb-8">
            Contact us today for a free recycling assessment and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#1E1E1E] text-white font-bold px-10 py-4 rounded-full hover:bg-[#303030] transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center justify-center border-2 border-[#1E1E1E] text-[#1E1E1E] font-bold px-10 py-4 rounded-full hover:bg-[#1E1E1E] hover:text-white transition"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
