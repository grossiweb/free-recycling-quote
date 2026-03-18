import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { materials } from '@/lib/data/materials'
import { services } from '@/lib/data/services'
import { SITE_URL } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Materials We Recycle | Recycling Quotes',
  description: 'We recycle metals, electronics, paper, plastics, pallets, hazardous materials, textiles, organics, vehicles, and more. Certified processing with full documentation.',
  alternates: { canonical: `${SITE_URL}/materials` },
}

const topLevelMaterials = materials
  .filter((m) => m.depth === 1 && m.isActive)
  .sort((a, b) => a.sortOrder - b.sortOrder)

const faqs = [
  { q: 'What happens to my materials after pickup?', a: 'Materials are transported to certified processing facilities where they are sorted, processed, and recycled according to EPA standards. You receive a certificate of recycling for every pickup.' },
  { q: 'Do you handle hazardous materials?', a: 'Yes. We have certified handling processes for hazardous waste, chemicals, and batteries. All hazardous materials are processed in full compliance with federal and state regulations.' },
  { q: 'Can I mix different materials in one pickup?', a: 'In most cases, yes. We sort and separate materials at our facilities. For hazardous items, separate containment may be required \u2014 we will advise during scheduling.' },
  { q: 'How do I know what category my waste falls under?', a: 'Not sure? Just describe your materials when you contact us and we will classify them and recommend the right recycling approach for your business.' },
  { q: 'Do you pay for recyclable materials?', a: 'For commodity-grade materials like scrap metal, clean cardboard, and certain plastics, we offer competitive rebates based on current market pricing with transparent weight verification.' },
  { q: 'What documentation do you provide?', a: 'Every pickup includes weight tickets and certificates of recycling. We also provide monthly summaries and annual reports formatted for ESG and sustainability reporting.' },
]

export default function MaterialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-[60px] text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Materials', href: '/materials' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-4xl sm:text-[28px] font-extrabold leading-[1.12] mb-4">
            Materials We Recycle
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-8 leading-[1.65]">
            We accept and responsibly process a wide range of business waste materials with certified handling and documentation for every pickup.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">All Accepted Materials</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Click any material to learn about our recycling process, compliance handling, and pickup options.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {topLevelMaterials.map((mat) => (
              <Link key={mat.slug} href={`/materials/${mat.fullPath}`} className="flex flex-col items-center gap-3 p-7 sm:p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{mat.icon}</span>
                </div>
                <span className="text-sm font-semibold text-[#404040] text-center">{mat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cross-Link */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Related Services</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Our recycling services handle these materials and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.filter(s => s.isActive).slice(0, 6).map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className="flex items-center gap-3 p-5 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)]">
                <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl text-[#2DB446]">{svc.icon}</span>
                </div>
                <div>
                  <span className="text-sm font-bold block">{svc.name}</span>
                  <span className="text-xs text-[#737373]">{svc.tagline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <span className="material-symbols-outlined text-[48px] text-[#2DB446] mb-4">shield</span>
            <h2 className="text-[28px] font-extrabold mb-3">Not Sure If Your Material Is Accepted?</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-7">
              Some materials &mdash; especially hazardous waste, chemicals, and batteries &mdash; require special handling for safety and regulatory compliance. Contact us and we&apos;ll advise on the best approach for your specific materials.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Contact Us <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about material recycling.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href="/materials/faqs" className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All Material FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
