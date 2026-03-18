import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Resources | ${COMPANY_NAME}`,
  description: 'Insights, guides, and answers to help your business recycle smarter. Browse our blog, videos, and FAQs.',
  alternates: { canonical: `${SITE_URL}/resources` },
}

const resourceCards = [
  { tag: 'Blog', icon: 'article', title: 'Journey Into Sustainable Recycling', desc: 'How businesses are rethinking waste management for a circular economy.', href: '/resources/blog' },
  { tag: 'Blog', icon: 'public', title: 'ESG Reporting: What Your Stakeholders Want to See', desc: 'A practical guide to environmental metrics that matter.', href: '/resources/blog' },
  { tag: 'Video', icon: 'play_circle', title: 'How Pallet Recycling Works', desc: 'A behind-the-scenes look at our pallet recovery and processing facility.', href: '/resources/videos' },
  { tag: 'Blog', icon: 'trending_down', title: 'Reducing Waste Disposal Costs for Manufacturers', desc: 'Practical strategies that cut costs while improving sustainability.', href: '/resources/blog' },
  { tag: 'FAQ', icon: 'help', title: 'Top 10 Questions About Business Recycling', desc: 'Answers to the most common questions we hear from new clients.', href: '/resources/faq' },
  { tag: 'Video', icon: 'play_circle', title: 'Inside Our Material Sorting Facility', desc: 'See how we process and sort mixed recyclable materials.', href: '/resources/videos' },
]

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Resources
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto mb-8">
            Insights, guides, and answers to help your business recycle smarter.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Link href="/resources" className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#2DB446] text-white border border-[#2DB446]">All</Link>
            <Link href="/resources/blog" className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#ebebeb] text-[#404040] hover:bg-[#f7f7f7] transition-colors">Blog</Link>
            <Link href="/resources/videos" className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#ebebeb] text-[#404040] hover:bg-[#f7f7f7] transition-colors">Videos</Link>
            <Link href="/resources/faq" className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#ebebeb] text-[#404040] hover:bg-[#f7f7f7] transition-colors">FAQs</Link>
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCards.map((card, i) => (
              <Link key={i} href={card.href} className="rounded-xl overflow-hidden border border-[#ebebeb] transition-all duration-300 hover:shadow-md hover:-translate-y-[3px] group">
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#e8f5eb] to-[rgba(45,180,70,.15)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-[#2DB446]/40">{card.icon}</span>
                </div>
                <div className="p-5">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[1px] text-[#2DB446] mb-2">{card.tag}</span>
                  <h3 className="text-base font-bold mb-1.5">{card.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-3.5">{card.desc}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    Read More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
