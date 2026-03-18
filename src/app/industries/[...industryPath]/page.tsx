import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { industries, getIndustryByPath, getChildIndustries } from '@/lib/data/industries'
import { getChallengesForIndustry } from '@/lib/data/challenges'
import { getServicesForIndustry } from '@/lib/data/resolvers'
import { materials } from '@/lib/data/materials'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export function generateStaticParams() {
  const params: Array<{ industryPath: string[] }> = []
  for (const i of industries.filter((i) => i.isActive)) {
    params.push({ industryPath: i.fullPath.split('/') })
    params.push({ industryPath: [...i.fullPath.split('/'), 'faqs'] })
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ industryPath: string[] }> }): Promise<Metadata> {
  const { industryPath } = await params
  const isFaq = industryPath[industryPath.length - 1] === 'faqs'
  const actualPath = isFaq ? industryPath.slice(0, -1) : industryPath
  const industry = getIndustryByPath(actualPath)
  if (!industry) return {}
  if (isFaq) {
    return {
      title: `${industry.name} Recycling FAQ | ${COMPANY_NAME}`,
      description: `Frequently asked questions about recycling for the ${industry.name.toLowerCase()} industry.`,
      alternates: { canonical: `${SITE_URL}/industries/${industry.fullPath}/faqs` },
    }
  }
  return {
    title: `${industry.name} Recycling Solutions | ${COMPANY_NAME}`,
    description: industry.description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/industries/${industry.fullPath}` },
  }
}

function getIndustryFaqs(name: string): Array<{ q: string; a: string }> {
  return [
    { q: `What recycling services do you offer for ${name.toLowerCase()}?`, a: `We provide comprehensive recycling programs tailored to the ${name.toLowerCase()} sector including waste stream analysis, custom container placement, scheduled pickups, and full compliance documentation.` },
    { q: `Do you understand ${name.toLowerCase()} industry regulations?`, a: `Yes. Our team has experience with industry-specific regulatory requirements and provides all documentation needed for audits, compliance reporting, and sustainability disclosures.` },
    { q: `Can you handle multiple locations in the ${name.toLowerCase()} sector?`, a: `Absolutely. We coordinate recycling programs across multiple facilities with centralized billing, consolidated reporting, and a single point of contact.` },
    { q: `What waste streams do you handle for ${name.toLowerCase()} businesses?`, a: `We handle all recyclable waste streams common in ${name.toLowerCase()} operations including metals, electronics, paper, plastics, hazardous materials, and specialized waste. Our team designs the program around your specific outputs.` },
    { q: `How quickly can you set up service for our ${name.toLowerCase()} facility?`, a: `Most programs are operational within 1-2 weeks of our initial assessment. For complex multi-site deployments, we typically complete rollout within 4-6 weeks.` },
    { q: `What ROI can ${name.toLowerCase()} organizations expect?`, a: `Most clients see 20-40% reduction in total waste management costs through optimized hauling, reduced contamination penalties, and commodity rebates on recyclable materials.` },
  ]
}

export default async function IndustryPage({ params }: { params: Promise<{ industryPath: string[] }> }) {
  const { industryPath } = await params
  const isFaq = industryPath[industryPath.length - 1] === 'faqs'
  const actualPath = isFaq ? industryPath.slice(0, -1) : industryPath
  const industry = getIndustryByPath(actualPath)
  if (!industry || !industry.isActive) notFound()

  const faqs = getIndustryFaqs(industry.name)

  // FAQ sub-page
  if (isFaq) {
    return (
      <div>
        <section className="pt-0 pb-10 text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <nav className="text-sm text-[#737373] mb-6">
              <Link href="/industries" className="hover:text-[#2DB446]">Industries</Link>
              <span className="mx-2">/</span>
              <Link href={`/industries/${industry.fullPath}`} className="hover:text-[#2DB446]">{industry.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-[#1a1a1a] font-semibold">FAQs</span>
            </nav>
            <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">{industry.name} Recycling — FAQ</h1>
            <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">Common questions about recycling for the {industry.name.toLowerCase()} industry.</p>
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

  const children = getChildIndustries(industry.slug)
  const challenges = getChallengesForIndustry(industry.slug)
  const relatedServices = getServicesForIndustry(industry.slug)

  // Parent and siblings
  const parentIndustry = industry.parentSlug
    ? industries.find(i => i.slug === industry.parentSlug && i.isActive)
    : null
  const siblings = industry.parentSlug
    ? industries.filter(i => i.parentSlug === industry.parentSlug && i.slug !== industry.slug && i.isActive)
    : []

  // Breadcrumbs
  const breadcrumbs: Array<{ label: string; href: string }> = [{ label: 'Industries', href: '/industries' }]
  const pathParts = industry.fullPath.split('/')
  for (let i = 0; i < pathParts.length - 1; i++) {
    const partPath = pathParts.slice(0, i + 1).join('/')
    const ancestor = industries.find(ind => ind.fullPath === partPath)
    if (ancestor) breadcrumbs.push({ label: ancestor.name, href: `/industries/${ancestor.fullPath}` })
  }

  // Related materials (top-level only, limited)
  const topMaterials = materials.filter(m => m.depth === 1 && m.isActive).slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-sm text-[#737373] mb-6 flex-wrap">
            {breadcrumbs.map((bc, i) => (
              <span key={bc.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="material-symbols-outlined text-xs">chevron_right</span>}
                <Link href={bc.href} className="hover:text-[#2DB446] transition-colors">{bc.label}</Link>
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-[#1a1a1a] font-semibold">{industry.name}</span>
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                {industry.name} Recycling Solutions
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-4 mx-auto lg:mx-0">
                {industry.description}
              </p>
              {industry.complianceNotes && (
                <p className="text-sm text-[#737373] mb-8 mx-auto lg:mx-0 max-w-[520px]">
                  <span className="font-semibold">Compliance:</span> {industry.complianceNotes}
                </p>
              )}
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
                <span className="material-symbols-outlined text-[100px] text-[#2DB446]">{industry.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Industries */}
      {children.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">{industry.name} Sectors</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Specialized recycling solutions for specific {industry.name.toLowerCase()} sectors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {children.map((child) => (
                <Link key={child.slug} href={`/industries/${child.fullPath}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{child.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{child.name}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4 line-clamp-3">{child.description}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges */}
      {challenges.length > 0 && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Challenges in {industry.name}</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Common recycling challenges faced by {industry.name.toLowerCase()} organizations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.slice(0, 3).map((ch) => (
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
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Recommended Services</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Services commonly used by {industry.name.toLowerCase()} organizations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc) => (
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

      {/* Materials */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Common Materials</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Material types commonly recycled from {industry.name.toLowerCase()} operations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {topMaterials.map((mat) => (
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

      {/* Case Studies Placeholder */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <span className="material-symbols-outlined text-[48px] text-[#2DB446] mb-4">auto_stories</span>
            <h2 className="text-[28px] font-extrabold mb-3">Success Stories from {industry.name}</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-7">
              See how organizations in the {industry.name.toLowerCase()} sector have reduced waste costs, improved diversion rates, and strengthened their sustainability programs with our help.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Request a Case Study <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Siblings */}
      {parentIndustry && siblings.length > 0 && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Other {parentIndustry.name} Sectors</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Explore related sectors under <Link href={`/industries/${parentIndustry.fullPath}`} className="text-[#2DB446] font-semibold hover:underline">{parentIndustry.name}</Link>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siblings.map((sib) => (
                <Link key={sib.slug} href={`/industries/${sib.fullPath}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{sib.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{sib.name}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4 line-clamp-2">{sib.description}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about recycling in the {industry.name.toLowerCase()} sector.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href={`/industries/${industry.fullPath}/faqs`} className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
