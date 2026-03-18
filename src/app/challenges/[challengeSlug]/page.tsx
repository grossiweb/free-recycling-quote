import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { challenges, getChallengeBySlug } from '@/lib/data/challenges'
import { getServiceBySlug } from '@/lib/data/services'
import { getIndustryBySlug } from '@/lib/data/industries'
import { getMaterialBySlug } from '@/lib/data/materials'
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
    title: `${challenge.name} | ${COMPANY_NAME}`,
    description: challenge.description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/challenges/${challenge.slug}` },
  }
}

function getChallengeFaqs(name: string, slug: string): Array<{ q: string; a: string }> {
  const faqSets: Record<string, Array<{ q: string; a: string }>> = {
    'ewaste-compliance': [
      { q: 'What e-waste regulations apply to my business?', a: 'Federal regulations include EPA RCRA and state-specific e-waste laws. If you handle personal data, NIST 800-88 data destruction standards apply. Our team assesses which regulations apply to your situation.' },
      { q: 'How do you ensure data is securely destroyed?', a: 'We follow NIST 800-88 guidelines including degaussing, overwriting, and physical destruction. All drives receive a certificate of destruction with serial numbers documented.' },
      { q: 'What are the penalties for improper e-waste disposal?', a: 'EPA fines range from $25,000 to $50,000 per violation. Data breach liability can cost millions. State penalties vary and can include facility closure orders.' },
      { q: 'Do you handle both IT and consumer electronics?', a: 'Yes. We process enterprise IT equipment, consumer electronics, and industrial electronic waste through R2-certified facilities.' },
      { q: 'Can you perform on-site data destruction?', a: 'Yes. Our mobile shredding units can destroy hard drives and media on-site with witnessed processing and immediate certificate issuance.' },
      { q: 'What certifications do your e-waste facilities hold?', a: 'Our partners maintain R2, e-Stewards, ISO 14001, and NAID AAA certifications. We verify all certifications annually.' },
      { q: 'How do you track chain of custody for electronics?', a: 'Every device is barcoded at pickup, GPS-tracked during transport, scanned at facility intake, and individually processed with serial number documentation.' },
      { q: 'Do you provide audit-ready documentation?', a: 'Yes. All documentation is formatted for regulatory audits including manifests, certificates, serial number lists, and processing method records.' },
      { q: 'Can you handle large IT refresh projects?', a: 'Absolutely. We regularly process thousands of devices for enterprise IT refresh projects with dedicated project management and accelerated timelines.' },
      { q: 'What happens to recovered materials from electronics?', a: 'Precious metals, copper, aluminum, and plastics are separated and sent to commodity markets. Circuit boards go to specialized smelters for precious metal recovery.' },
    ],
    'waste-diversion': [
      { q: 'What is a realistic diversion rate target?', a: 'With a structured program, most organizations can achieve 75-90% diversion. Best-in-class programs reach 95%+ through comprehensive material capture and alternative disposal methods.' },
      { q: 'How do you measure waste diversion?', a: 'We weigh all pickups and track material disposition. Your diversion rate is calculated as recycled weight divided by total waste weight, reported monthly with trend analysis.' },
      { q: 'What materials count toward diversion?', a: 'Recycled, composted, reused, and donated materials all count. Only materials sent to landfill or incineration without energy recovery are excluded.' },
      { q: 'How do you reduce contamination in recycling streams?', a: 'Through proper signage, staff training, container placement optimization, and regular contamination audits. We typically reduce contamination by 60-70% in the first quarter.' },
      { q: 'Can you help with LEED waste diversion requirements?', a: 'Yes. We provide documentation formatted for LEED MRc2 credits and can help you meet the 50%, 75%, or 95% diversion thresholds.' },
      { q: 'What does a zero-waste-to-landfill certification require?', a: 'TRUE Zero Waste certification requires 90%+ diversion along with upstream reduction efforts, policy changes, and third-party verification. We guide clients through the entire process.' },
      { q: 'How long does it take to significantly improve diversion rates?', a: 'Most organizations see a 20-30% improvement within 60 days. Reaching 85%+ typically takes 6-12 months of sustained program optimization.' },
      { q: 'Do you handle hard-to-recycle materials?', a: 'Yes. Our network includes specialty processors for materials like electronics, hazardous waste, textiles, and organics that standard recyclers cannot handle.' },
      { q: 'What role does employee training play?', a: 'Employee participation is the single biggest factor. Programs with training achieve 85% participation versus 40% without. We provide on-site and digital training materials.' },
      { q: 'How do you handle special event waste diversion?', a: 'We plan and staff waste stations for events with real-time sorting, clear signage, and post-event diversion reports. Event diversion rates of 80%+ are typical.' },
    ],
    'esg-reporting': [
      { q: 'What ESG frameworks do your reports support?', a: 'Our reporting aligns with GRI, SASB, CDP, TCFD, and UN SDG frameworks. We format data to plug directly into the most common disclosure templates.' },
      { q: 'How do you calculate CO2 savings from recycling?', a: 'We use EPA WARM model factors to calculate greenhouse gas reductions per material type and weight. These calculations are accepted by major ESG reporting frameworks.' },
      { q: 'What data do you provide for Scope 3 emissions reporting?', a: 'We provide waste-related emissions data including methane avoidance from landfill diversion, embodied energy savings from recycling, and transportation emissions from pickups.' },
      { q: 'How often do you provide ESG data?', a: 'Monthly data exports are standard. We also provide quarterly executive summaries and annual reports formatted for your specific disclosure requirements.' },
      { q: 'Can you help us set science-based targets?', a: 'Our waste audit and consulting team helps organizations establish baseline measurements and set achievable waste reduction targets aligned with SBTi guidance.' },
      { q: 'Do you integrate with ESG reporting software?', a: 'We provide data in standard formats (CSV, Excel, API) that integrate with major ESG platforms including Workiva, Enablon, and Sphera.' },
      { q: 'How do you verify recycling claims?', a: 'Every load is weighed at certified scales. Processing facilities provide certificates of recycling. We maintain chain-of-custody records from pickup through final disposition.' },
      { q: 'What happens if our reporting requirements change?', a: 'Our team monitors evolving disclosure standards and adjusts reporting formats accordingly. We proactively notify clients of new requirements that affect their data needs.' },
      { q: 'Can you provide historical data for trend analysis?', a: 'Yes. We maintain complete records for all clients and can generate historical trend reports for year-over-year comparisons and target tracking.' },
      { q: 'Do investors accept your documentation?', a: 'Yes. Our reports are used by publicly traded companies, PE-backed firms, and organizations subject to SEC climate disclosure requirements.' },
    ],
  }

  return faqSets[slug] || [
    { q: `What causes ${name.toLowerCase()} challenges for businesses?`, a: `${name} challenges typically arise from regulatory complexity, lack of specialized knowledge, insufficient infrastructure, and the absence of a structured program to address the issue systematically.` },
    { q: `How does your approach address ${name.toLowerCase()}?`, a: `We start with a thorough assessment, design a tailored program, implement it with proper equipment and training, and provide ongoing monitoring and optimization to ensure sustained results.` },
    { q: `What ROI can I expect from solving this challenge?`, a: `Most clients see significant cost reduction, compliance improvement, and operational efficiency gains within the first 90 days. Specific returns depend on your current situation and volumes.` },
    { q: `How quickly can you help resolve this issue?`, a: `Initial improvements are typically visible within 2-4 weeks. Full program maturity for complex challenges usually takes 3-6 months.` },
    { q: `Do you provide documentation proving the challenge is addressed?`, a: `Yes. Every aspect of our service includes certified documentation suitable for regulatory compliance, audits, and stakeholder reporting.` },
    { q: `Can you handle this challenge across multiple facilities?`, a: `Absolutely. We coordinate multi-site programs with consistent standards, centralized reporting, and a single point of contact.` },
    { q: `What happens if we are already non-compliant?`, a: `We can help you remediate existing compliance gaps while building a program that prevents future issues. Our team has experience with corrective action plans and regulatory responses.` },
    { q: `Do you offer ongoing support or just initial setup?`, a: `We provide ongoing program management including regular pickups, monthly reporting, quarterly reviews, and continuous optimization. We are a long-term partner, not a one-time vendor.` },
    { q: `What industries face this challenge most often?`, a: `This challenge affects organizations across many sectors, though some industries face heightened exposure due to regulatory requirements, material types, or stakeholder expectations. Contact us to discuss your specific situation.` },
    { q: `How do I get started?`, a: `Contact us for a free assessment. We will evaluate your current situation, identify specific risks and opportunities, and recommend a clear path forward with transparent pricing.` },
  ]
}

export default async function ChallengePage({ params }: { params: Promise<{ challengeSlug: string }> }) {
  const { challengeSlug } = await params
  const challenge = getChallengeBySlug(challengeSlug)
  if (!challenge || !challenge.isActive) notFound()

  const relatedServices = challenge.relatedServiceSlugs
    .map(slug => getServiceBySlug(slug))
    .filter((s) => s && s.isActive)
  const relatedIndustries = challenge.relatedIndustrySlugs
    .map(slug => getIndustryBySlug(slug))
    .filter((i) => i && i.isActive)
  const relatedMaterials = challenge.relatedMaterialSlugs
    .map(slug => getMaterialBySlug(slug))
    .filter((m) => m && m.isActive)

  const faqs = getChallengeFaqs(challenge.name, challenge.slug)
  const impactEntries = challenge.impactStats ? Object.entries(challenge.impactStats) : []

  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Challenges', href: '/challenges' }, { label: challenge.name, href: `/challenges/${challengeSlug}` }] satisfies BreadcrumbItem[]} />

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                {challenge.name}
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[560px] leading-[1.65] mb-8 mx-auto lg:mx-0">
                {challenge.description}
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
                  Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
                  Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 max-w-[360px] w-full">
              <div className="bg-[#e8f5eb] rounded-2xl p-12 flex items-center justify-center">
                <span className="material-symbols-outlined text-[100px] text-[#2DB446]">{challenge.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      {impactEntries.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">The Problem at Scale</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Key data points that illustrate why this challenge matters.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {impactEntries.map(([label, value]) => (
                <div key={label} className="text-center p-6 bg-[#f7f7f7] rounded-xl border border-[#ebebeb]">
                  <strong className="block text-xl font-extrabold text-[#2DB446] mb-2">{value}</strong>
                  <span className="text-sm text-[#525252]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why It's Hard */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[28px] font-extrabold mb-6">Why This Challenge Persists</h2>
            <p className="text-base text-[#525252] leading-[1.75] mb-4">
              Many organizations struggle with {challenge.name.toLowerCase()} because it requires specialized knowledge, regulatory awareness, and operational infrastructure that most businesses do not have in-house. Without a dedicated program, companies often default to the most convenient disposal method rather than the most effective one.
            </p>
            <p className="text-base text-[#525252] leading-[1.75]">
              The consequences compound over time: missed regulatory deadlines, accumulating liability, lost commodity value, and growing stakeholder pressure. The longer an organization waits to address these issues, the more expensive and disruptive the eventual solution becomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach (Services) */}
      {relatedServices.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">How We Solve It</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Our services that directly address {challenge.name.toLowerCase()}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc) => svc && (
                <Link key={svc.slug} href={`/services/${svc.slug}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{svc.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{svc.name}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4">{svc.tagline}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Considerations */}
      {relatedIndustries.length > 0 && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Industries Most Affected</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Sectors where {challenge.name.toLowerCase()} has the greatest impact.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedIndustries.map((ind) => ind && (
                <Link key={ind.slug} href={`/industries/${ind.fullPath}`} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                  <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{ind.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#404040] text-center">{ind.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Materials */}
      {relatedMaterials.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Related Materials</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Material types most connected to this challenge.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedMaterials.map((mat) => mat && (
                <Link key={mat.slug} href={`/materials/${mat.fullPath}`} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                  <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{mat.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#404040] text-center">{mat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about {challenge.name.toLowerCase()}.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href={`/challenges/${challengeSlug}/faqs`} className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
