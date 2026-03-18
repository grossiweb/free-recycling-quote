import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Videos | ${COMPANY_NAME}`,
  description: 'Educational videos about our recycling processes, program setup, and sustainability best practices.',
  alternates: { canonical: `${SITE_URL}/resources/videos` },
}

export default function VideosPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Videos', href: '/resources/videos' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Videos
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto">
            Watch our educational videos about recycling processes and sustainability programs.
          </p>
        </div>
      </section>

      {/* Placeholder */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-[64px] text-[#2DB446]/40 mb-4">play_circle</span>
            <p className="text-lg text-[#525252] mb-6">Videos coming soon. Check back for educational recycling content.</p>
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2DB446] hover:gap-3 transition-all">
              Browse All Resources <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
