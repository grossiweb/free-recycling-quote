import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Blog | ${COMPANY_NAME}`,
  description: 'Industry insights, case studies, and recycling tips to help your business build a more sustainable future.',
  alternates: { canonical: `${SITE_URL}/resources/blog` },
}

const blogPosts = [
  {
    slug: 'sustainable-recycling-for-businesses',
    title: 'Journey Into Sustainable Recycling for Businesses',
    excerpt: 'How forward-thinking companies are rethinking waste management to build circular supply chains and reduce environmental impact.',
    date: 'March 10, 2026',
    category: 'Sustainability',
  },
  {
    slug: 'esg-reporting-guide',
    title: 'ESG Reporting: What Your Stakeholders Want to See',
    excerpt: 'A practical guide to environmental metrics and sustainability data that investors, customers, and regulators expect in your reports.',
    date: 'February 28, 2026',
    category: 'ESG',
  },
  {
    slug: 'reducing-waste-disposal-costs',
    title: 'Reducing Waste Disposal Costs for Manufacturers',
    excerpt: 'Practical strategies that help manufacturing operations cut waste disposal costs while improving sustainability outcomes.',
    date: 'February 15, 2026',
    category: 'Cost Savings',
  },
  {
    slug: 'electronics-recycling-compliance',
    title: 'Electronics Recycling Compliance: What You Need to Know',
    excerpt: 'Understanding federal and state regulations for responsible e-waste disposal and how to stay compliant.',
    date: 'January 30, 2026',
    category: 'Compliance',
  },
  {
    slug: 'zero-waste-office-guide',
    title: 'The Complete Guide to a Zero-Waste Office',
    excerpt: 'Step-by-step strategies for eliminating waste from your office operations, from paper to electronics.',
    date: 'January 15, 2026',
    category: 'Guides',
  },
  {
    slug: 'pallet-recycling-benefits',
    title: 'Why Pallet Recycling Makes Business Sense',
    excerpt: 'The economic and environmental benefits of recycling pallets instead of sending them to landfill.',
    date: 'December 20, 2025',
    category: 'Materials',
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Blog', href: '/resources/blog' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Blog
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto">
            Recycling insights, sustainability tips, and industry news for businesses.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col bg-white rounded-xl border border-[#ebebeb] overflow-hidden hover:shadow-md hover:-translate-y-[3px] transition-all">
                <div className="bg-gradient-to-br from-[#e8f5eb] to-[rgba(45,180,70,.15)] h-48 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-[#2DB446]/30">article</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[1px] text-[#2DB446]">{post.category}</span>
                    <span className="text-xs text-[#737373]">{post.date}</span>
                  </div>
                  <h2 className="text-[16px] font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-[#525252] leading-relaxed flex-1 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/resources/blog/${post.slug}`} className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
