import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { locations, getLocationBySlug } from '@/lib/data/locations'
import { getServicesInLocation } from '@/lib/data/resolvers'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { SITE_URL, COMPANY_NAME, COMPANY_PHONE, COMPANY_PHONE_TEL } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

const countryNames: Record<string, string> = {
  usa: 'United States',
  canada: 'Canada',
  uk: 'United Kingdom',
  australia: 'Australia',
}

export function generateStaticParams() {
  return locations
    .filter((l) => l.isActive)
    .map((l) => ({ countryCode: l.countryCode, metroSlug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ countryCode: string; metroSlug: string }> }): Promise<Metadata> {
  const { countryCode, metroSlug } = await params
  const location = getLocationBySlug(metroSlug)
  if (!location || location.countryCode !== countryCode) return {}
  return {
    title: `Recycling Services in ${location.name} | ${COMPANY_NAME}`,
    description: `Business recycling services in ${location.name}, ${location.state || location.region}. Pickup, processing, and documentation for all recyclable materials.`,
    alternates: { canonical: `${SITE_URL}/locations/${countryCode}/${location.slug}` },
  }
}

export default async function MetroPage({ params }: { params: Promise<{ countryCode: string; metroSlug: string }> }) {
  const { countryCode, metroSlug } = await params
  const location = getLocationBySlug(metroSlug)
  if (!location || !location.isActive || location.countryCode !== countryCode) notFound()

  const availableServices = getServicesInLocation(metroSlug)
  const countryName = countryNames[countryCode] || countryCode.toUpperCase()

  const faqs = [
    { q: `What recycling services do you offer in ${location.name}?`, a: `We offer a full range of recycling services in ${location.name} including scrap metal, electronics, paper and cardboard, plastics, pallets, hazardous waste, shredding, and more. Our service covers the entire ${location.name} metropolitan area.` },
    { q: `Do you provide pickup service in ${location.name}?`, a: `Yes. We offer scheduled recurring pickups and on-demand collection throughout the ${location.name} metro area. Our local fleet ensures reliable, on-time service.` },
    { q: `How quickly can you start service in ${location.name}?`, a: `Most businesses in ${location.name} can begin receiving service within 3-5 business days of their initial assessment. Simple pickups can often be scheduled within 1-2 days.` },
    { q: `Do you serve businesses of all sizes in ${location.name}?`, a: `Yes. From single-location shops to large facilities and multi-site operations across the ${location.name} metro, we scale our service to match your needs.` },
    { q: `What documentation do you provide for ${location.name} area pickups?`, a: `Every pickup includes weight tickets and certificates of recycling. We also provide monthly summaries and annual reports for ESG and compliance reporting.` },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: countryName, href: `/locations/${countryCode}` }, { label: location.name, href: `/locations/${countryCode}/${metroSlug}` }] satisfies BreadcrumbItem[]} />

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                Recycling Services in {location.name}
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-4 mx-auto lg:mx-0">
                Comprehensive business recycling programs serving the {location.name}, {location.state || location.region} metropolitan area. From scrap metal and electronics to full-scale waste diversion programs, we handle it all with certified documentation.
              </p>
              <p className="text-sm text-[#737373] mb-8 mx-auto lg:mx-0 max-w-[520px]">
                <span className="material-symbols-outlined text-sm align-middle mr-1">call</span>
                Call us: <a href={COMPANY_PHONE_TEL} className="text-[#2DB446] font-semibold hover:underline">{COMPANY_PHONE}</a>
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
                <span className="material-symbols-outlined text-[100px] text-[#2DB446]">location_on</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services */}
      {availableServices.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Available Services in {location.name}</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Recycling services currently available in the {location.name} metropolitan area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableServices.map((svc) => (
                <Link key={svc.slug} href={`/${svc.slug}/${location.slug}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{svc.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{svc.name}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4">{svc.tagline}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    {svc.name} in {location.name} <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services Link */}
      {availableServices.length === 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[720px] mx-auto text-center">
              <span className="material-symbols-outlined text-[48px] text-[#2DB446] mb-4">build</span>
              <h2 className="text-[28px] font-extrabold mb-3">Services Coming Soon</h2>
              <p className="text-base text-[#525252] leading-relaxed mb-7">
                We are expanding our service coverage in {location.name}. Contact us to discuss your recycling needs and we will find a solution.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
                View All Services <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about recycling services in {location.name}.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
