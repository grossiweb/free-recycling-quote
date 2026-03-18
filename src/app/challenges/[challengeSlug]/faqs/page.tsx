import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { challenges, getChallengeBySlug } from '@/lib/data/challenges'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export function generateStaticParams() {
  return challenges
    .filter((c) => c.isActive)
    .map((c) => ({ challengeSlug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ challengeSlug: string }> }): Promise<Metadata> {
  const { challengeSlug } = await params
  const challenge = getChallengeBySlug(challengeSlug)
  if (!challenge) return {}
  return {
    title: `${challenge.name} FAQs | ${COMPANY_NAME}`,
    description: `Frequently asked questions about ${challenge.name.toLowerCase()} and how we help businesses address it.`,
    alternates: { canonical: `${SITE_URL}/challenges/${challenge.slug}/faqs` },
  }
}

export default async function ChallengeFaqsPage({ params }: { params: Promise<{ challengeSlug: string }> }) {
  const { challengeSlug } = await params
  const challenge = getChallengeBySlug(challengeSlug)
  if (!challenge || !challenge.isActive) notFound()

  const faqs = [
    { q: `What causes ${challenge.name.toLowerCase()} challenges?`, a: `This challenge typically arises from regulatory complexity, lack of specialized infrastructure, insufficient internal expertise, and the absence of a structured program to address the issue systematically.` },
    { q: `How does your approach address ${challenge.name.toLowerCase()}?`, a: `We start with a thorough assessment, design a tailored program, implement it with proper equipment and training, and provide ongoing monitoring and optimization to ensure sustained results.` },
    { q: `What ROI can I expect from solving this challenge?`, a: `Most clients see significant cost reduction, compliance improvement, and operational efficiency gains within the first 90 days. Specific returns depend on your current situation and volumes.` },
    { q: `How quickly can you help resolve this issue?`, a: `Initial improvements are typically visible within 2-4 weeks. Full program maturity for complex challenges usually takes 3-6 months of sustained optimization.` },
    { q: `Do you provide documentation proving the challenge is addressed?`, a: `Yes. Every aspect of our service includes certified documentation suitable for regulatory compliance, audits, and stakeholder reporting.` },
    { q: `Can you handle this challenge across multiple facilities?`, a: `Absolutely. We coordinate multi-site programs with consistent standards, centralized reporting, and a single point of contact for all locations.` },
    { q: `What happens if we are already non-compliant?`, a: `We can help you remediate existing compliance gaps while building a program that prevents future issues. Our team has experience with corrective action plans.` },
    { q: `Do you offer ongoing support or just initial setup?`, a: `We provide ongoing program management including regular pickups, monthly reporting, quarterly reviews, and continuous optimization. We are a long-term partner.` },
    { q: `What industries face this challenge most often?`, a: `This challenge affects organizations across many sectors, though some face heightened exposure due to regulatory requirements or material types. Contact us to discuss your situation.` },
    { q: `How do I get started?`, a: `Contact us for a free assessment. We will evaluate your current situation, identify specific risks and opportunities, and recommend a clear path forward with transparent pricing.` },
    { q: `Can you complement our existing waste management vendor?`, a: `Yes. We can work alongside your current vendor to specifically target this challenge area without disrupting existing arrangements.` },
    { q: `What if our challenge is more complex than typical?`, a: `We handle atypical situations regularly. Our consulting team can design custom solutions for complex scenarios including multi-material streams, multi-jurisdictional compliance, and large-scale operations.` },
  ]

  return (
    <div>
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Challenges', href: '/challenges' }, { label: challenge.name, href: `/challenges/${challengeSlug}` }, { label: 'FAQs', href: `/challenges/${challengeSlug}/faqs` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
            {challenge.name} &mdash; FAQs
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.65]">
            Common questions about addressing {challenge.name.toLowerCase()}.
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
