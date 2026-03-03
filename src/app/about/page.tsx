import React from 'react'
import Link from 'next/link'
import WpContent from '@/components/shared/WpContent'
import FinalCTA from '@/components/shared/FinalCTA'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission, values, and commitment to sustainable recycling for businesses.',
}

const impactCards = [
  { label: 'Environmental', color: '#2DB446', desc: 'Reducing landfill waste, improving recycling efficiency, and supporting circular material flow. Over 500,000 tons diverted and counting.' },
  { label: 'Social', color: '#3b82f6', desc: 'Supporting communities through local employment, responsible material handling, and transparent reporting that creates lasting social benefits.' },
  { label: 'Governance', color: '#8b5cf6', desc: 'Clear documentation, compliance standards, and ethical business practices. Built for companies that need verifiable accountability.' },
]

const whyCards = [
  { icon: 'history', title: '25+ Years Experience', desc: 'Deep industry knowledge built over decades of hands-on work.' },
  { icon: 'public', title: 'Nationwide Support', desc: 'Service coverage across all 50 states through our partner network.' },
  { icon: 'description', title: 'ESG Reporting', desc: 'Pre-formatted data and certified documentation for your reports.' },
  { icon: 'gavel', title: 'Compliance Knowledge', desc: 'We know the regulations so you don\'t have to worry about them.' },
  { icon: 'bolt', title: 'Fast Response', desc: 'Most programs up and running within 1\u20132 weeks of assessment.' },
  { icon: 'tune', title: 'Tailored Programs', desc: 'Every program is custom-designed for your waste streams and volumes.' },
]

const team = [
  { icon: 'person', title: 'CEO', desc: 'Bio placeholder \u2014 add when available' },
  { icon: 'engineering', title: 'Operations Director', desc: 'Bio placeholder \u2014 add when available' },
  { icon: 'support_agent', title: 'Client Success', desc: 'Bio placeholder \u2014 add when available' },
]

export default async function AboutPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/about/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}
  const heroData = await fetchHeroDataByUri('/about/')

  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] pb-[60px] text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-5xl md:text-4xl sm:text-3xl font-extrabold mb-3">
            {heroData.subtitle ? heroData.subtitle : 'About Recycling Quotes'}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-7">
            {heroData.description || 'Trusted recycling solutions backed by experience, accountability, and measurable impact.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get a Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {wpContent && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-6">
            <WpContent html={wpContent} />
          </div>
        </section>
      )}

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-[720px] mx-auto px-6">
          <h2 className="text-[28px] font-extrabold mb-4">Our Story</h2>
          <p className="text-base text-[#525252] leading-[1.7] mb-4">Recycling Quotes was founded with a clear mission: make it easier for businesses to recycle responsibly. Over the years, we&apos;ve built a nationwide network of processing partners and developed programs that serve companies across every industry &mdash; from single-location retailers to multi-site manufacturing operations.</p>
          <p className="text-base text-[#525252] leading-[1.7] mb-4">What sets us apart is our focus on accountability. Every pickup comes with certified documentation. Every program is designed around your specific waste streams. And every relationship is built on transparency, reliability, and measurable results.</p>
          <p className="text-base text-[#525252] leading-[1.7]">Today, we&apos;ve helped divert over 500,000 tons of materials from landfills, serving hundreds of businesses with recycling programs that are built to last.</p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Our Impact</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">We measure our success by the environmental, social, and governance outcomes we deliver.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactCards.map((card) => (
              <div key={card.label} className="p-8 rounded-xl bg-white border border-[#ebebeb]">
                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: card.color }} />
                  {card.label}
                </h4>
                <p className="text-sm text-[#525252] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Why Choose Us</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">What makes Recycling Quotes different.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCards.map((card) => (
              <div key={card.title} className="text-center p-7 border border-[#ebebeb] rounded-xl transition-colors hover:border-[#2DB446]">
                <span className="material-symbols-outlined text-[32px] text-[#2DB446] mb-3">{card.icon}</span>
                <h4 className="text-[15px] font-bold mb-1">{card.title}</h4>
                <p className="text-[13px] text-[#525252] leading-snug">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Leadership Team</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">Placeholder &mdash; add real team photos and bios when ready.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px] mx-auto">
            {team.map((t) => (
              <div key={t.title} className="text-center p-8 bg-white rounded-xl border border-[#ebebeb]">
                <div className="w-20 h-20 rounded-full bg-[#e8f5eb] flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[32px] text-[#2DB446]">{t.icon}</span>
                </div>
                <h4 className="text-base font-bold mb-0.5">{t.title}</h4>
                <span className="text-[13px] text-[#737373]">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
