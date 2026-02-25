import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore our recycling resources — blog articles, FAQs, educational videos, and guides for businesses.',
}

const sections = [
  {
    title: 'Blog',
    desc: 'Industry insights, case studies, and recycling tips to help your business build a more sustainable future.',
    href: '/resources/blog',
    icon: '📝',
  },
  {
    title: 'FAQ',
    desc: 'Answers to the most common questions about our recycling services, pricing, and processes.',
    href: '/resources/faq',
    icon: '❓',
  },
  {
    title: 'Videos',
    desc: 'Educational videos and walkthroughs showing our recycling processes and program setup.',
    href: '/resources/videos',
    icon: '🎥',
  },
]

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-6">
            Knowledge Center
          </h1>
          <p className="text-[#686767] text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to understand recycling, build better programs, and stay compliant.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-neutral-50 hover:bg-emerald-50 rounded-2xl p-10 transition-colors border border-transparent hover:border-[#4BE576]"
              >
                <span className="text-5xl mb-6">{s.icon}</span>
                <h2 className="text-[#111112] text-2xl font-bold mb-3 group-hover:text-[#4BE576] transition-colors">
                  {s.title}
                </h2>
                <p className="text-[#686767] text-base leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[#4BE576] font-bold text-sm">
                  Explore {s.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
