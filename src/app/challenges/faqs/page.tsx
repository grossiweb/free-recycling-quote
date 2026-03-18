import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: `Recycling Challenges FAQs | ${COMPANY_NAME}`,
  description: 'Frequently asked questions about common recycling challenges including e-waste compliance, waste diversion, ESG reporting, hazardous waste, and cost reduction.',
  alternates: { canonical: `${SITE_URL}/challenges/faqs` },
}

const faqs = [
  { q: 'How do you assess which challenges apply to my business?', a: 'We start with a free waste assessment that analyzes your current waste streams, hauling contracts, compliance obligations, and sustainability goals to reveal specific challenges and opportunities.' },
  { q: 'Can you address multiple challenges simultaneously?', a: 'Yes. Our programs are designed holistically. Improving waste diversion often reduces costs, generates ESG data, and improves compliance posture at the same time.' },
  { q: 'How quickly can I see results after starting a program?', a: 'Most clients see measurable improvements within the first 30-60 days. Cost savings, improved diversion rates, and compliance documentation are typically available from the very first pickup.' },
  { q: 'Do I need to overhaul my entire waste management setup?', a: 'Not necessarily. We can complement existing arrangements by focusing on specific material streams or challenges. Many clients start with one area and expand as they see results.' },
  { q: 'What if my specific challenge is not listed on your site?', a: 'Contact us. We handle a wide range of recycling and waste management challenges beyond what is listed. Our team can assess your specific situation and recommend tailored solutions.' },
  { q: 'How do you stay current with changing regulations?', a: 'Our compliance team monitors federal, state, and local regulatory changes continuously. We proactively notify affected clients and adjust programs to maintain compliance.' },
  { q: 'What documentation do you provide to prove challenges are being addressed?', a: 'Every service includes weight tickets, certificates of recycling, and compliance documentation. Monthly and annual reports demonstrate progress against key metrics.' },
  { q: 'Can you help with challenges across multiple locations?', a: 'Yes. We coordinate multi-site programs with consistent standards, centralized reporting, and a single account manager regardless of how many locations are involved.' },
  { q: 'What makes your approach different from standard waste haulers?', a: 'We focus specifically on recycling optimization, compliance, and documentation rather than just waste collection. Our programs are designed around solving business challenges, not just moving material.' },
  { q: 'How do I get started?', a: 'Contact us for a free waste assessment. We will visit your facility, analyze your situation, and present a clear plan addressing your specific challenges with transparent pricing.' },
]

export default function ChallengesHubFaqsPage() {
  return (
    <div>
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Challenges', href: '/challenges' }, { label: 'FAQs', href: '/challenges/faqs' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
            Recycling Challenges &mdash; FAQs
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.65]">
            Common questions about the recycling challenges businesses face and how we help solve them.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
