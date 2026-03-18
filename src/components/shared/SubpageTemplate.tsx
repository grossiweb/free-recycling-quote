import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FinalCTA from '@/components/shared/FinalCTA'
import type { HeroData } from '@/lib/types'

interface SubpageTemplateProps {
  title: string
  category?: string
  categoryHref?: string
  intro?: string
  featuredImage?: { sourceUrl: string; altText: string }
  heroData?: HeroData
  children?: React.ReactNode
}

export default function SubpageTemplate({
  title,
  category,
  categoryHref,
  intro,
  featuredImage,
  heroData,
  children,
}: SubpageTemplateProps) {
  const subtitleText = heroData?.subtitle || category
  const descText = heroData?.description || intro

  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px]" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          {category && categoryHref && (
            <nav className="text-sm text-[#737373] mb-6">
              <Link href="/" className="hover:text-[#2DB446] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href={categoryHref} className="hover:text-[#2DB446] transition-colors capitalize">
                {subtitleText || category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#1a1a1a]">{title}</span>
            </nav>
          )}

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[44px] md:text-[36px] sm:text-[28px] font-extrabold leading-[1.12] mb-4">
                {title}
              </h1>
              {descText && (
                <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-8 mx-auto lg:mx-0">
                  {descText}
                </p>
              )}
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
                  Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
                  Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
                </Link>
              </div>
            </div>

            {featuredImage ? (
              <div className="flex-shrink-0 max-w-[480px] w-full">
                <Image
                  src={featuredImage.sourceUrl}
                  alt={featuredImage.altText || title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.12)] w-full h-auto"
                />
              </div>
            ) : (
              <div className="flex-shrink-0 max-w-[480px] w-full rounded-2xl h-[300px] lg:h-[360px] bg-gradient-to-br from-[#e8f5eb] to-[rgba(45,180,70,.15)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[80px] text-[#2DB446]/30">recycling</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      {children || (
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-[28px] font-extrabold mb-4">Overview</h2>
            <p className="text-base text-[#525252] leading-[1.7] mb-8">
              Our expert team provides comprehensive {title.toLowerCase()} solutions tailored to your
              business needs. We handle everything from initial assessment to program implementation
              and ongoing support.
            </p>

            <h2 className="text-[28px] font-extrabold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { num: '1', title: 'Free Assessment', desc: 'We evaluate your recycling needs at no cost.' },
                { num: '2', title: 'Custom Program Design', desc: 'We create a plan that fits your operations.' },
                { num: '3', title: 'Implementation', desc: 'We set up collection, pickup, and reporting.' },
                { num: '4', title: 'Ongoing Support', desc: 'We provide regular reporting and adjustments.' },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 p-5 bg-[#f7f7f7] rounded-xl border border-[#ebebeb]">
                  <div className="w-10 h-10 rounded-full bg-[#2DB446] text-white text-base font-bold flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-[#525252] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[28px] font-extrabold mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: 'delete_sweep', text: 'Zero landfill commitment' },
                { icon: 'verified', text: 'Certified and compliant processing' },
                { icon: 'description', text: 'Detailed reporting for ESG documentation' },
                { icon: 'schedule', text: 'Flexible pickup scheduling' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 rounded-lg border border-[#ebebeb] transition-all hover:border-[#2DB446]">
                  <span className="material-symbols-outlined text-xl text-[#2DB446]">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  )
}
