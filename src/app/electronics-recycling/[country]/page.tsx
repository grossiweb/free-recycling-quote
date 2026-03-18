import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import JsonLd from '@/components/shared/JsonLd'
import FinalCTA from '@/components/shared/FinalCTA'
import {
  eRecyclingCountries,
  getERecyclingCountryBySlug,
  getERecyclingLocationsByCountry,
} from '@/lib/data/electronics-recycling-locations'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ country: string }>
}

export async function generateStaticParams() {
  return eRecyclingCountries.map((c) => ({ country: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params
  const countryData = getERecyclingCountryBySlug(country)
  if (!countryData) return {}

  const title = `Electronics Recycling in ${countryData.name} | ${COMPANY_NAME}`
  const desc = `Find certified electronics recycling services across ${countryData.name}. Browse all metro areas with R2 & e-Stewards certified e-waste recycling, data destruction, and IT asset recovery.`

  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE_URL}/electronics-recycling/${country}` },
  }
}

export default async function ElectronicsRecyclingCountryPage({ params }: PageProps) {
  const { country } = await params
  const countryData = getERecyclingCountryBySlug(country)
  if (!countryData) notFound()

  const locations = getERecyclingLocationsByCountry(country)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Electronics Recycling in ${countryData.name}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Electronics Recycling',
    areaServed: { '@type': 'Country', name: countryData.name },
  }

  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white pt-0 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Electronics Recycling', href: '/electronics-recycling' },
              { label: countryData.name, href: `/electronics-recycling/${country}` },
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4">
            Electronics Recycling in{' '}
            <span className="text-[#2DB446]">{countryData.name}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mb-6">
            Browse {locations.length} service locations across {countryData.name} for certified electronics recycling,
            e-waste disposal, and IT asset recovery.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center px-8 py-4 bg-[#2DB446] text-white font-bold rounded-full hover:bg-[#249A3A] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Location grid */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8">
            All {countryData.name} Locations ({locations.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/electronics-recycling/${country}/${loc.slug}`}
                className="flex items-center gap-3 p-4 bg-[#f7f7f7] rounded-xl border border-[#e5e7eb] hover:shadow-md hover:border-[#2DB446]/30 transition-all group"
              >
                <span className="material-symbols-outlined text-[#9ca3af] group-hover:text-[#2DB446] text-xl">
                  location_on
                </span>
                <div>
                  <div className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#2DB446]">{loc.name}</div>
                  <div className="text-xs text-[#6b7280]">{loc.displayName}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other countries */}
      <section className="py-16 px-6 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            Electronics Recycling in Other Countries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {eRecyclingCountries
              .filter((c) => c.slug !== country)
              .map((c) => {
                const count = getERecyclingLocationsByCountry(c.slug).length
                return (
                  <Link
                    key={c.slug}
                    href={`/electronics-recycling/${c.slug}`}
                    className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#e5e7eb] hover:shadow-md hover:border-[#2DB446]/30 transition-all group"
                  >
                    <span className="text-3xl">{c.flag}</span>
                    <div>
                      <div className="text-base font-bold text-[#1a1a1a] group-hover:text-[#2DB446]">{c.name}</div>
                      <div className="text-sm text-[#6b7280]">{count} locations</div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
