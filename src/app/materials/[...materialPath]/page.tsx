import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { materials, getMaterialByPath, getChildMaterials } from '@/lib/data/materials'
import { getChallengesForMaterial } from '@/lib/data/challenges'
import { getServicesForMaterial } from '@/lib/data/resolvers'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export function generateStaticParams() {
  const params: Array<{ materialPath: string[] }> = []
  for (const m of materials.filter((m) => m.isActive)) {
    params.push({ materialPath: m.fullPath.split('/') })
    // Also generate FAQ paths
    params.push({ materialPath: [...m.fullPath.split('/'), 'faqs'] })
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ materialPath: string[] }> }): Promise<Metadata> {
  const { materialPath } = await params
  const isFaq = materialPath[materialPath.length - 1] === 'faqs'
  const actualPath = isFaq ? materialPath.slice(0, -1) : materialPath
  const material = getMaterialByPath(actualPath)
  if (!material) return {}
  if (isFaq) {
    return {
      title: `${material.name} Recycling FAQ | ${COMPANY_NAME}`,
      description: `Frequently asked questions about ${material.name.toLowerCase()} recycling.`,
      alternates: { canonical: `${SITE_URL}/materials/${material.fullPath}/faqs` },
    }
  }
  return {
    title: `${material.name} Recycling | ${COMPANY_NAME}`,
    description: material.description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/materials/${material.fullPath}` },
  }
}

function getMaterialFaqs(name: string, hasChildren: boolean): Array<{ q: string; a: string }> {
  if (hasChildren) {
    return [
      { q: `What types of ${name.toLowerCase()} do you recycle?`, a: `We recycle all common types of ${name.toLowerCase()} found in commercial and industrial settings. Browse the sub-categories on this page to see specific material types we accept.` },
      { q: `How is ${name.toLowerCase()} recycling priced?`, a: `Pricing depends on the specific material type, grade, volume, and market conditions. Some materials generate rebates while others have processing fees. Contact us for a custom quote.` },
      { q: `Do you pick up ${name.toLowerCase()} for recycling?`, a: `Yes. We provide scheduled and on-demand pickup service for all material types. Our fleet handles everything from small loads to full truckloads.` },
      { q: `What documentation do I receive?`, a: `Every pickup includes weight tickets, certificates of recycling, and processing confirmation. Monthly and annual summaries are available for compliance and ESG reporting.` },
      { q: `Is there a minimum volume for ${name.toLowerCase()} recycling?`, a: `No strict minimums. We design service plans that match your volume, whether you have a small occasional load or ongoing high-volume streams.` },
      { q: `How do I prepare ${name.toLowerCase()} for pickup?`, a: `Preparation requirements vary by material type. In most cases, basic separation from other waste streams is sufficient. We provide guidance on preparation when you schedule service.` },
    ]
  }
  return [
    { q: `What specific items fall under ${name.toLowerCase()}?`, a: `We accept a range of items in this category. See the accepted items list above for common examples. If your specific item is not listed, contact us and we will advise.` },
    { q: `How is ${name.toLowerCase()} processed after collection?`, a: `After pickup, ${name.toLowerCase()} is transported to a certified processing facility where it is sorted, cleaned, and processed for recycling or proper disposal according to all applicable regulations.` },
    { q: `Can ${name.toLowerCase()} be mixed with other materials?`, a: `In most cases, we prefer source-separated loads for maximum recovery value. However, we can handle mixed loads and sort at our facility when needed.` },
    { q: `Do you pay for ${name.toLowerCase()} scrap?`, a: `For commodity-grade materials, we offer competitive rebates based on current market rates. Processing fees may apply for materials requiring specialized handling.` },
    { q: `What certifications apply to ${name.toLowerCase()} recycling?`, a: `Our processing partners hold relevant certifications including R2, e-Stewards, ISO 14001, and state permits as applicable to this material type.` },
  ]
}

export default async function MaterialPage({ params }: { params: Promise<{ materialPath: string[] }> }) {
  const { materialPath } = await params
  const isFaq = materialPath[materialPath.length - 1] === 'faqs'
  const actualPath = isFaq ? materialPath.slice(0, -1) : materialPath
  const material = getMaterialByPath(actualPath)
  if (!material || !material.isActive) notFound()

  // FAQ sub-page
  if (isFaq) {
    const children = getChildMaterials(material.slug).filter(c => c.isActive)
    const faqs = getMaterialFaqs(material.name, children.length > 0)
    return (
      <div>
        <section className="pt-0 pb-10 text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <nav className="text-sm text-[#737373] mb-6">
              <Link href="/materials" className="hover:text-[#2DB446]">Materials</Link>
              <span className="mx-2">/</span>
              <Link href={`/materials/${material.fullPath}`} className="hover:text-[#2DB446]">{material.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-[#1a1a1a] font-semibold">FAQs</span>
            </nav>
            <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">{material.name} Recycling — FAQ</h1>
            <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto">Common questions about {material.name.toLowerCase()} recycling.</p>
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

  const children = getChildMaterials(material.slug).filter(c => c.isActive)
  const hasChildren = children.length > 0
  const challenges = getChallengesForMaterial(material.slug)
  const relatedServices = getServicesForMaterial(material.slug)
  const faqs = getMaterialFaqs(material.name, hasChildren)

  // Find parent and siblings
  const parentMaterial = material.parentSlug
    ? materials.find(m => m.slug === material.parentSlug && m.isActive)
    : null
  const siblings = material.parentSlug
    ? materials.filter(m => m.parentSlug === material.parentSlug && m.slug !== material.slug && m.isActive)
    : []

  // Build breadcrumbs
  const breadcrumbs: Array<{ label: string; href: string }> = [{ label: 'Materials', href: '/materials' }]
  const pathParts = material.fullPath.split('/')
  for (let i = 0; i < pathParts.length - 1; i++) {
    const partPath = pathParts.slice(0, i + 1).join('/')
    const ancestor = materials.find(m => m.fullPath === partPath)
    if (ancestor) breadcrumbs.push({ label: ancestor.name, href: `/materials/${ancestor.fullPath}` })
  }

  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-[#737373] mb-6 flex-wrap">
            {breadcrumbs.map((bc, i) => (
              <span key={bc.href} className="flex items-center gap-1.5">
                {i > 0 && <span className="material-symbols-outlined text-xs">chevron_right</span>}
                <Link href={bc.href} className="hover:text-[#2DB446] transition-colors">{bc.label}</Link>
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-[#1a1a1a] font-semibold">{material.name}</span>
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                {material.name} Recycling
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-8 mx-auto lg:mx-0">
                {material.description}
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
                <span className="material-symbols-outlined text-[100px] text-[#2DB446]">{material.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Types (parent materials) */}
      {hasChildren && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">{material.name} Sub-Types</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              We recycle all types of {material.name.toLowerCase()}. Select a specific type for details.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {children.sort((a, b) => a.sortOrder - b.sortOrder).map((child) => (
                <Link key={child.slug} href={`/materials/${child.fullPath}`} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                  <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{child.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#404040] text-center">{child.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Accepted Items (leaf materials) */}
      {material.acceptedItems && material.acceptedItems.length > 0 && (
        <section className={hasChildren ? 'py-20 bg-[#f7f7f7]' : 'py-20'}>
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Accepted Items</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Common {material.name.toLowerCase()} items we collect and process.
            </p>
            <div className="max-w-[700px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
              {material.acceptedItems.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#ebebeb]">
                  <span className="material-symbols-outlined text-lg text-[#2DB446]">check_circle</span>
                  <span className="text-sm font-medium text-[#404040]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recycling Process (leaf materials) */}
      {!hasChildren && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">How {material.name} Recycling Works</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Our process ensures maximum material recovery and full regulatory compliance.
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              <div className="hidden md:block absolute top-[44px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[2px] border-t-2 border-dashed border-[#ebebeb]" />
              {[
                { num: 1, title: 'Collection', desc: `We pick up your ${material.name.toLowerCase()} using appropriate containers and vehicles.` },
                { num: 2, title: 'Sorting & Grading', desc: 'Materials are inspected, sorted by type and grade, and prepared for processing.' },
                { num: 3, title: 'Processing', desc: 'Certified facilities process materials through cleaning, shredding, melting, or other methods.' },
                { num: 4, title: 'Documentation', desc: 'You receive weight tickets, certificates, and diversion reports for compliance.' },
              ].map((step) => (
                <div key={step.num} className="text-center relative">
                  <div className="w-[88px] h-[88px] rounded-full bg-[#2DB446] text-white text-[32px] font-extrabold flex items-center justify-center mx-auto mb-5 relative z-10">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed max-w-[260px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Related Services</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Services that handle {material.name.toLowerCase()} recycling.
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

      {/* Challenges */}
      {challenges.length > 0 && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Related Challenges</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Common recycling challenges related to {material.name.toLowerCase()}.
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

      {/* Parent / Siblings (for leaf materials) */}
      {parentMaterial && siblings.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Other {parentMaterial.name} Types</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Explore related material categories under <Link href={`/materials/${parentMaterial.fullPath}`} className="text-[#2DB446] font-semibold hover:underline">{parentMaterial.name}</Link>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {siblings.sort((a, b) => a.sortOrder - b.sortOrder).map((sib) => (
                <Link key={sib.slug} href={`/materials/${sib.fullPath}`} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                  <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{sib.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#404040] text-center">{sib.name}</span>
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
            Common questions about {material.name.toLowerCase()} recycling.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href={`/materials/${material.fullPath}/faqs`} className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
