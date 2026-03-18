import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import { locations } from '@/lib/data/locations'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'
import type { Metadata } from 'next'

export const revalidate = 3600

const countryNames: Record<string, string> = {
  usa: 'United States',
  canada: 'Canada',
  uk: 'United Kingdom',
  australia: 'Australia',
}

const validCodes = ['usa', 'canada', 'uk', 'australia']

export function generateStaticParams() {
  return validCodes.map((code) => ({ countryCode: code }))
}

export async function generateMetadata({ params }: { params: Promise<{ countryCode: string }> }): Promise<Metadata> {
  const { countryCode } = await params
  const name = countryNames[countryCode]
  if (!name) return {}
  return {
    title: `Recycling Services in ${name} | ${COMPANY_NAME}`,
    description: `Find recycling services in major cities across ${name}. We provide pickup, processing, and documentation for businesses of all sizes.`,
    alternates: { canonical: `${SITE_URL}/locations/${countryCode}` },
  }
}

export default async function CountryPage({ params }: { params: Promise<{ countryCode: string }> }) {
  const { countryCode } = await params
  if (!validCodes.includes(countryCode)) notFound()

  const countryName = countryNames[countryCode]
  const metros = locations
    .filter((l) => l.countryCode === countryCode && l.isActive)
    .sort((a, b) => (a.populationRank ?? 999) - (b.populationRank ?? 999))

  if (metros.length === 0) notFound()

  // Group by state/region
  const byRegion: Record<string, typeof metros> = {}
  for (const m of metros) {
    const region = m.state || m.region || 'Other'
    if (!byRegion[region]) byRegion[region] = []
    byRegion[region].push(m)
  }
  const regionKeys = Object.keys(byRegion).sort()

  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Locations', href: '/locations' }, { label: countryName, href: `/locations/${countryCode}` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
            Recycling Services in {countryName}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[560px] leading-[1.65] mb-8">
            We provide business recycling services across {metros.length} metropolitan areas in {countryName}. Select a city to see available services.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
            Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* All Metros */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">All Service Areas</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            {metros.length} metropolitan areas across {countryName}.
          </p>
          {regionKeys.map((region) => (
            <div key={region} className="mb-10 last:mb-0">
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">{region}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {byRegion[region].map((loc) => (
                  <Link key={loc.slug} href={`/locations/${countryCode}/${loc.slug}`} className="px-4 py-3 rounded-lg border border-[#ebebeb] bg-white text-sm font-semibold text-center transition-all hover:border-[#2DB446] hover:bg-[#e8f5eb]">
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
