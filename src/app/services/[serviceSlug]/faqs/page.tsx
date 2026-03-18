import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { services, getServiceBySlug } from '@/lib/data/services'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export function generateStaticParams() {
  return services
    .filter((s) => s.isActive)
    .map((s) => ({ serviceSlug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }): Promise<Metadata> {
  const { serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  if (!service) return {}
  return {
    title: `${service.name} FAQs | ${COMPANY_NAME}`,
    description: `Frequently asked questions about ${service.name.toLowerCase()} services. Learn about pricing, processes, and compliance.`,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}/faqs` },
  }
}

function getAllServiceFaqs(serviceName: string): Array<{ q: string; a: string }> {
  return [
    { q: `How much does ${serviceName.toLowerCase()} cost?`, a: `Pricing depends on material type, volume, pickup frequency, and your location. We provide custom quotes after a brief assessment of your needs. In many cases, commodity-value materials generate rebates that offset or eliminate service fees.` },
    { q: `What volumes do you handle?`, a: `We service everything from single one-time pickups to ongoing high-volume contracts processing hundreds of tons per month. There are no strict minimums, and we scale our approach to match your throughput.` },
    { q: `Do you provide pickup service?`, a: `Yes. We offer scheduled recurring pickups and on-demand collection. Our fleet includes flatbeds, roll-offs, box trucks, and specialized vehicles depending on material type.` },
    { q: `What certifications do your facilities hold?`, a: `Our processing partners maintain R2, e-Stewards, ISO 14001, and applicable state environmental permits. We verify all certifications and can provide documentation upon request.` },
    { q: `Do you provide ESG and compliance documentation?`, a: `Every job includes weight tickets and certificates of recycling. We also provide monthly summaries, annual reports with diversion rates and CO2 savings, and data formatted for ESG disclosure frameworks.` },
    { q: `How fast can you start service?`, a: `Simple pickups can often be scheduled within a few business days. Full program implementations typically take 1-2 weeks from initial assessment to first pickup.` },
    { q: `Do you serve multiple locations?`, a: `Yes. We coordinate service across multiple facilities with centralized billing, consolidated reporting, and a single point of contact for national and regional operations.` },
    { q: `What areas do you cover?`, a: `We provide service across the United States through our network of processing partners. We also serve select markets in Canada, the UK, and Australia.` },
    { q: `Can you work with our existing waste hauler?`, a: `Yes. We can complement your current waste management arrangements or manage the full program. We are vendor-agnostic and focused on optimizing your results.` },
    { q: `What happens if my materials are contaminated?`, a: `We sort and separate materials at our facilities to minimize contamination impact. If special handling is required, we advise you before processing and provide guidance on improving source separation to reduce future issues.` },
  ]
}

export default async function ServiceFaqsPage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  if (!service || !service.isActive) notFound()

  const faqs = getAllServiceFaqs(service.name)

  return (
    <div>
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name, href: `/services/${serviceSlug}` }, { label: 'FAQs', href: `/services/${serviceSlug}/faqs` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
            {service.name} &mdash; Frequently Asked Questions
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.65]">
            Everything you need to know about our {service.name.toLowerCase()} services.
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
