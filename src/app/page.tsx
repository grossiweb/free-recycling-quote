import React from 'react'
import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import ImpactsSection from '@/components/home/ImpactsSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import MaterialsSection from '@/components/home/MaterialsSection'
import RecyclingProgramsSection from '@/components/home/RecyclingProgramsSection'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Free Recycling Quotes | Electronics, Metal, Paper, Plastic & More',
  description: 'Get free recycling quotes for electronics, metal, paper, plastic, pallets, and hazardous materials. Nationwide pickup service since 2005.',
  alternates: { canonical: SITE_URL },
}

const challenges = [
  { title: 'E-Waste Compliance', desc: 'Navigate complex e-waste regulations with certified recycling and data destruction.', href: '/challenges/ewaste-compliance', icon: 'security' },
  { title: 'ESG Reporting', desc: 'Get audit-ready recycling documentation for your sustainability reports.', href: '/challenges/esg-reporting', icon: 'monitoring' },
  { title: 'Cost Reduction', desc: 'Reduce waste management costs by 20-40% with optimized recycling programs.', href: '/challenges/cost-reduction', icon: 'savings' },
]

const blogPosts = [
  { title: 'How to Start a Business Recycling Program', excerpt: 'A step-by-step guide to launching an effective recycling program at your organization.', href: '/resources/blog', date: '2026-01-15' },
  { title: 'E-Waste Regulations: What Businesses Need to Know', excerpt: 'Understanding federal and state e-waste disposal requirements for commercial operations.', href: '/resources/blog', date: '2026-02-01' },
  { title: 'The Hidden Value in Your Scrap Metal', excerpt: 'How businesses can generate revenue from production scrap and end-of-life metal assets.', href: '/resources/blog', date: '2026-02-15' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MaterialsSection />
      <RecyclingProgramsSection />

      {/* How It Works */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">How It Works</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Getting started is simple. Three steps to a cleaner, more efficient operation.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div className="hidden md:block absolute top-[44px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-[2px] border-t-2 border-dashed border-[#ebebeb]" />
            {[
              { num: 1, title: 'Request a Quote', desc: 'Tell us about your materials, volumes, and locations. We assess your waste streams and identify recycling opportunities.' },
              { num: 2, title: 'Schedule Pickup', desc: 'We coordinate logistics, bring the right equipment, and handle all pickups on your preferred schedule.' },
              { num: 3, title: 'Get Certificate & Rewards', desc: 'Receive recycling certificates, weight reports, diversion data, and ESG-ready documentation after every pickup.' },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-[88px] h-[88px] rounded-full bg-[#2DB446] text-white text-[32px] font-extrabold flex items-center justify-center mx-auto mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed max-w-[300px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5">
              Get Started <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <IndustriesSection />
      <ImpactsSection />

      {/* Challenges Callout */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Recycling Challenges We Solve</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Whatever your waste management problem, we have a certified solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <Link key={c.href} href={c.href} className="group p-6 border border-[#ebebeb] rounded-2xl bg-white transition-all hover:shadow-lg hover:-translate-y-1 hover:border-[#2DB446]">
                <div className="w-12 h-12 bg-[#e8f5eb] rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#2DB446]">{c.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-3">{c.desc}</p>
                <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/challenges" className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1 hover:underline">
              View All Challenges <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Latest Insights</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Expert guides, industry news, and recycling best practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.href} className="group bg-white rounded-2xl border border-[#ebebeb] overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="h-[180px] bg-gradient-to-br from-[#e8f5eb] to-[#d5f0dc] flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-[#2DB446]/40">article</span>
                </div>
                <div className="p-6">
                  <time className="text-xs text-[#737373] mb-2 block">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  <h3 className="text-base font-bold mb-2 group-hover:text-[#2DB446] transition-colors">{post.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/resources/blog" className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1 hover:underline">
              View All Articles <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
