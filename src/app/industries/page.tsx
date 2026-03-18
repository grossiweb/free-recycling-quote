import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getTopLevelIndustries } from '@/lib/data/industries'
import { services } from '@/lib/data/services'
import { materials } from '@/lib/data/materials'
import { SITE_URL } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Industries We Serve | Recycling Quotes',
  description: 'Tailored recycling solutions for construction, manufacturing, retail, healthcare, offices, logistics, automotive, food services, education, government, and more.',
  alternates: { canonical: `${SITE_URL}/industries` },
}

const topIndustries = getTopLevelIndustries()

const outcomes = [
  { icon: 'delete_sweep', title: 'Waste Diversion', desc: 'Keep 90%+ of materials out of landfills.' },
  { icon: 'speed', title: 'Operational Efficiency', desc: 'Streamlined pickups and simpler workflows.' },
  { icon: 'description', title: 'ESG Documentation', desc: 'Certified reports for stakeholder confidence.' },
  { icon: 'gavel', title: 'Compliance Support', desc: 'Meet EPA and state regulatory requirements.' },
  { icon: 'location_on', title: 'Multi-Location', desc: 'Nationwide coverage for all your facilities.' },
]

const faqs = [
  { q: 'Do you work with businesses in my industry?', a: 'We serve organizations across every major industry sector. Our recycling programs are custom-designed based on your specific waste streams, volumes, and regulatory requirements rather than a one-size-fits-all approach.' },
  { q: 'Can you handle industry-specific compliance requirements?', a: 'Yes. Our team understands regulations including HIPAA, OSHA, EPA RCRA, SOX, NIST, and industry-specific standards. We provide all necessary documentation for audits and compliance reporting.' },
  { q: 'Do you serve multi-site operations?', a: 'Absolutely. We coordinate recycling programs across multiple facilities with centralized billing, consolidated reporting, and a single account manager for consistency.' },
  { q: 'What kind of reporting do you provide?', a: 'Every client receives weight tickets and certificates of recycling per pickup. We also provide monthly summaries, quarterly reviews, and annual reports formatted for ESG disclosure and sustainability reporting.' },
  { q: 'How do I get started with an industry recycling program?', a: 'Contact us for a free waste assessment. We will visit your facility, analyze your waste streams, and design a program that maximizes diversion and minimizes cost within your industry context.' },
]

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-4xl sm:text-[28px] font-extrabold leading-[1.12] mb-4">
            Industries We Serve
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-8 leading-[1.65]">
            We partner with businesses of every size, providing clear, dependable recycling solutions tailored to your industry.
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

      {/* Industry Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Recycling Solutions by Industry</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Each industry creates unique waste &mdash; and we design programs to handle it all.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topIndustries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.fullPath}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-xl text-[#2DB446]">{ind.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{ind.name}</h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-4 line-clamp-3">{ind.description}</p>
                <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                  Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Common Outcomes</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            What our industry clients typically achieve after partnering with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {outcomes.map((o) => (
              <div key={o.title} className="text-center p-7 bg-white rounded-xl border border-[#ebebeb] transition-all hover:border-[#2DB446] hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-[28px] text-[#2DB446] mb-3">{o.icon}</span>
                <h4 className="text-sm font-bold mb-1">{o.title}</h4>
                <p className="text-xs text-[#525252] leading-snug">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crosslinks */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-12">Related Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-5">Popular Materials</h3>
              {materials.filter(m => m.depth === 1 && m.isActive).slice(0, 6).map((mat) => (
                <Link key={mat.slug} href={`/materials/${mat.fullPath}`} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-[#ebebeb] mb-2 text-sm font-semibold transition-all hover:border-[#2DB446] hover:bg-[#e8f5eb]">
                  <span className="material-symbols-outlined text-lg text-[#2DB446]">{mat.icon}</span>
                  {mat.name}
                </Link>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-5">Popular Services</h3>
              {services.filter(s => s.isActive).slice(0, 6).map((svc) => (
                <Link key={svc.slug} href={`/services/${svc.slug}`} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-[#ebebeb] mb-2 text-sm font-semibold transition-all hover:border-[#2DB446] hover:bg-[#e8f5eb]">
                  <span className="material-symbols-outlined text-lg text-[#2DB446]">{svc.icon}</span>
                  {svc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about industry recycling programs.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href="/industries/faqs" className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All Industry FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
