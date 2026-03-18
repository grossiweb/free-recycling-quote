import React from 'react'
import Link from 'next/link'
import FinalCTA from '@/components/shared/FinalCTA'
import type { HeroData } from '@/lib/types'

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
  heroData?: HeroData
  children?: React.ReactNode
}

export default function HubPageTemplate({
  heading,
  subheading,
  intro,
  items,
  ctaText = 'Get a Quote',
  ctaHref = '/contact',
  heroData,
  children,
}: HubPageTemplateProps) {
  const subtitleText = heroData?.subtitle || subheading
  const descText = heroData?.description || intro

  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-[60px] text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {subtitleText && (
            <p className="text-sm font-bold uppercase tracking-[1px] text-[#737373] mb-3">
              {subtitleText}
            </p>
          )}
          <h1 className="text-[48px] md:text-4xl sm:text-[28px] font-extrabold leading-[1.12] mb-4">{heading}</h1>
          {descText && (
            <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-8 leading-[1.65]">
              {descText}
            </p>
          )}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={ctaHref} className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              {ctaText} <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional content */}
      {children}

      {/* Sub-items grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-7 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]"
              >
                {item.icon && <span className="text-3xl mb-3 block">{item.icon}</span>}
                <h3 className="text-base font-bold mb-2 group-hover:text-[#2DB446] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-3">{item.desc}</p>
                <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
