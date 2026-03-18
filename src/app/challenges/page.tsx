import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getAllActiveChallenges } from '@/lib/data/challenges'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: `Recycling Challenges We Solve | ${COMPANY_NAME}`,
  description: 'We help businesses overcome e-waste compliance, waste diversion, ESG reporting, hazardous waste, cost reduction, and other recycling challenges.',
  alternates: { canonical: `${SITE_URL}/challenges` },
}

const challenges = getAllActiveChallenges()

const faqs = [
  { q: 'How do you assess which challenges apply to my business?', a: 'We start with a free waste assessment that analyzes your current waste streams, hauling contracts, compliance obligations, and sustainability goals. This reveals the specific challenges and opportunities for your organization.' },
  { q: 'Can you address multiple challenges simultaneously?', a: 'Yes. Our programs are designed holistically. Improving waste diversion often reduces costs, generates ESG data, and improves compliance posture simultaneously.' },
  { q: 'How quickly can I see results?', a: 'Most clients see measurable improvements within the first 30-60 days. Cost savings, improved diversion rates, and compliance documentation are typically available from the very first pickup.' },
  { q: 'Do I need to change my entire waste management setup?', a: 'Not necessarily. We can complement existing arrangements by focusing on specific material streams or challenges. Many clients start with one area and expand as they see results.' },
  { q: 'What if my challenge is not listed here?', a: 'Contact us. We handle a wide range of recycling and waste management challenges beyond what is listed. Our team can assess your specific situation and recommend solutions.' },
]

export default function ChallengesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Challenges', href: '/challenges' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-4xl sm:text-[28px] font-extrabold leading-[1.12] mb-4">
            Recycling Challenges We Solve
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[560px] mx-auto mb-8 leading-[1.65]">
            Every business faces unique recycling obstacles. We help you overcome them with proven programs, reliable service, and clear documentation.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
            Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Common Business Challenges</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Click any challenge to learn how we help organizations address it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((ch) => (
              <Link key={ch.slug} href={`/challenges/${ch.slug}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl text-[#2DB446]">{ch.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{ch.name}</h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-4 line-clamp-3">{ch.description}</p>
                <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about addressing recycling challenges.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href="/challenges/faqs" className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All Challenge FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
