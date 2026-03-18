import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import LocationAccordion, { type AccordionCountry } from '@/components/shared/LocationAccordion'
import FinalCTA from '@/components/shared/FinalCTA'
import { locations, countryMeta, getCountryCodes, getLocationsByCountry } from '@/lib/data/locations'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: `Where We Operate | ${COMPANY_NAME}`,
  description:
    'Recycling services in 96+ major metropolitan areas across the United States, Canada, UK, and Australia. Find services near you.',
  alternates: { canonical: `${SITE_URL}/locations` },
}

export default function LocationsPage() {
  const countryCodes = getCountryCodes()

  // Build accordion data
  const accordionCountries: AccordionCountry[] = countryCodes.map((code) => {
    const meta = countryMeta[code]
    const locs = getLocationsByCountry(code)
    return {
      code,
      name: meta.name,
      flag: meta.flag,
      locations: locs.map((l) => ({
        slug: l.slug,
        name: l.name,
        href: `/locations/${code}/${l.slug}`,
      })),
    }
  })

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-0 pb-[60px] text-center"
        style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs
            items={
              [
                { label: 'Home', href: '/' },
                { label: 'Locations', href: '/locations' },
              ] satisfies BreadcrumbItem[]
            }
          />
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Where We Operate
          </h1>
          <p className="text-lg text-[#525252] max-w-[620px] mx-auto mb-8 leading-relaxed">
            Our recycling services are available in {locations.length}+ major metropolitan areas across the United
            States, Canada, the United Kingdom, and Australia.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]"
          >
            Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Location Accordion */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-3 text-center">
            Browse Locations by Country
          </h2>
          <p className="text-center text-[#6b7280] mb-10 max-w-2xl mx-auto">
            Click a country below to see all available service locations. Each location links to a dedicated page with
            local service details and a free quote form.
          </p>
          <LocationAccordion countries={accordionCountries} defaultOpen="usa" columns={4} />
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <span className="material-symbols-outlined text-[48px] text-[#2DB446] mb-4">location_on</span>
            <h2 className="text-[28px] font-extrabold mb-3">Don&apos;t See Your City?</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-7">
              Our service network extends beyond the cities listed here. Contact us with your location and we&apos;ll
              let you know how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]"
            >
              Contact Us <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
