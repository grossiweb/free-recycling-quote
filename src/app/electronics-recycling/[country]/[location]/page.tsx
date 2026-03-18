import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import JsonLd from '@/components/shared/JsonLd'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import {
  eRecyclingCountries,
  eRecyclingLocations,
  getERecyclingCountryBySlug,
  getERecyclingLocationBySlug,
  getERecyclingLocationsByCountry,
  getNearbyLocations,
} from '@/lib/data/electronics-recycling-locations'
import { SITE_URL, COMPANY_NAME, COMPANY_PHONE } from '@/lib/types'

export const revalidate = 3600

interface PageProps {
  params: Promise<{ country: string; location: string }>
}

export async function generateStaticParams() {
  const params: { country: string; location: string }[] = []
  for (const country of eRecyclingCountries) {
    const locs = getERecyclingLocationsByCountry(country.slug)
    for (const loc of locs) {
      params.push({ country: country.slug, location: loc.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, location: locationSlug } = await params
  const loc = getERecyclingLocationBySlug(locationSlug)
  const countryData = getERecyclingCountryBySlug(country)
  if (!loc || !countryData) return {}

  const title = `Electronics Recycling in ${loc.name} | Certified E-Waste Recycling ${loc.region}`
  const desc = `Find certified electronics recycling services in ${loc.displayName}. R2 & e-Stewards certified e-waste disposal, data destruction, and IT asset recovery. Free pickup and quotes for businesses in the ${loc.name} metro area.`

  return {
    title,
    description: desc,
    alternates: { canonical: `${SITE_URL}/electronics-recycling/${country}/${locationSlug}` },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/electronics-recycling/${country}/${locationSlug}`,
    },
  }
}

// Generate unique content angles per location
function getLocalContent(locationName: string, state: string, geoKeywords: string[], industries: string[]) {
  const nearby = geoKeywords.slice(0, 4).join(', ')
  const topIndustry = industries[0] || 'business'

  return {
    intro: `${locationName} businesses and residents generate significant volumes of electronic waste each year. From corporate IT departments upgrading equipment to households replacing consumer electronics, the demand for certified e-waste recycling in the ${locationName} metro area continues to grow. Our network of R2 and e-Stewards certified recycling partners serves the greater ${locationName} area including ${nearby}.`,

    whyLocal: `The ${locationName}, ${state} region has specific e-waste regulations that require proper handling and disposal of electronics. As the ${topIndustry} sector is a major driver of the local economy, businesses here generate substantial volumes of IT equipment, networking hardware, and end-of-life electronics that must be recycled responsibly. Our local partners understand ${state} environmental regulations and provide fully compliant recycling solutions.`,

    dataDestruction: `Data security is a critical concern for ${locationName} businesses. Every data-bearing device collected in the ${locationName} area undergoes certified data destruction following NIST 800-88 guidelines. Whether you need on-site shredding or secure transport to a certified facility, we provide a documented chain of custody and a Certificate of Data Destruction for your compliance records.`,

    businessServices: `For ${locationName} businesses, we offer scheduled pickup programs, bulk recycling events, and ongoing IT asset disposition (ITAD) services. Whether you are a small office in ${geoKeywords[0] || locationName} or a large enterprise in downtown ${locationName}, our flexible service options scale to meet your needs. Volume discounts are available for recurring pickups.`,
  }
}

export default async function ElectronicsRecyclingLocationPage({ params }: PageProps) {
  const { country, location: locationSlug } = await params
  const loc = getERecyclingLocationBySlug(locationSlug)
  const countryData = getERecyclingCountryBySlug(country)

  if (!loc || !countryData || loc.countrySlug !== country) {
    notFound()
  }

  const nearbyLocs = getNearbyLocations(locationSlug)
  const siblingLocs = getERecyclingLocationsByCountry(country)
    .filter((l) => l.slug !== locationSlug)
    .slice(0, 12)

  const content = getLocalContent(loc.name, loc.state, loc.geoKeywords, loc.industries)

  // FAQs unique to this location
  const faqs = [
    {
      question: `Where can I recycle electronics in ${loc.name}?`,
      answer: `${COMPANY_NAME} connects you with certified electronics recyclers serving the ${loc.displayName} area. We partner with R2 and e-Stewards certified facilities to ensure responsible recycling. Call ${COMPANY_PHONE} or request a free quote online to get started.`,
    },
    {
      question: `Is electronics recycling free in ${loc.name}?`,
      answer: `Many items are accepted at no cost in the ${loc.name} area, including computers, laptops, and phones. Some items like CRT monitors and certain hazardous electronics may have a small processing fee. Business bulk pickups often qualify for free service based on volume.`,
    },
    {
      question: `Do you offer pickup for e-waste in ${loc.name}?`,
      answer: `Yes, we offer free pickup services throughout the ${loc.name} metro area including ${loc.geoKeywords.slice(0, 3).join(', ')}. Minimum quantities may apply for free pickup. For smaller volumes, local drop-off locations are available.`,
    },
    {
      question: `What types of electronics do you recycle in ${loc.name}?`,
      answer: `We recycle all types of electronics in ${loc.name} including computers, laptops, servers, networking equipment, monitors, phones, tablets, printers, copiers, TVs, batteries, UPS systems, medical electronics, point-of-sale systems, and more.`,
    },
    {
      question: `How is data destroyed during electronics recycling in ${loc.name}?`,
      answer: `All data-bearing devices collected in the ${loc.name} area undergo certified data destruction per NIST 800-88 standards. Options include software wiping with verification or physical destruction via shredding. A Certificate of Data Destruction is provided for every job.`,
    },
    {
      question: `Are ${loc.name} electronics recyclers certified?`,
      answer: `Our recycling partners serving ${loc.name} hold R2 (Responsible Recycling) and/or e-Stewards certifications. These are the two nationally recognized standards for responsible electronics recycling, ensuring environmental compliance and data security.`,
    },
    {
      question: `What ${loc.state} regulations apply to e-waste in ${loc.name}?`,
      answer: `${loc.state} has specific regulations governing the disposal and recycling of electronic waste. Businesses are required to use certified recyclers for proper disposal. Our partners are fully compliant with all ${loc.state} environmental regulations and can help you navigate reporting requirements.`,
    },
    {
      question: `Can I recycle old computers and servers in ${loc.name}?`,
      answer: `Absolutely. Computers, servers, and enterprise IT equipment are among the most commonly recycled items in ${loc.name}. We handle everything from individual desktop PCs to entire data center decommissions. Hard drives are securely destroyed and valuable materials are recovered.`,
    },
  ]

  // Schema markup
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/electronics-recycling/${country}/${locationSlug}/#business`,
    name: `${COMPANY_NAME} - Electronics Recycling ${loc.name}`,
    description: `Certified electronics recycling and e-waste disposal services in ${loc.displayName}`,
    url: `${SITE_URL}/electronics-recycling/${country}/${locationSlug}`,
    telephone: COMPANY_PHONE,
    areaServed: {
      '@type': 'City',
      name: loc.name,
      containedInPlace: {
        '@type': loc.countrySlug === 'united-states' ? 'State' : 'AdministrativeArea',
        name: loc.state,
      },
    },
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    priceRange: 'Free - $$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Electronics Recycling in ${loc.name}`,
    provider: { '@id': `${SITE_URL}/electronics-recycling/${country}/${locationSlug}/#business` },
    serviceType: 'Electronics Recycling',
    areaServed: { '@type': 'City', name: loc.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electronics Recycling Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer & Laptop Recycling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Server & Networking Recycling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Destruction Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Asset Disposition (ITAD)' } },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Electronics Recycling', item: `${SITE_URL}/electronics-recycling` },
      { '@type': 'ListItem', position: 3, name: countryData.name, item: `${SITE_URL}/electronics-recycling/${country}` },
      { '@type': 'ListItem', position: 4, name: loc.name, item: `${SITE_URL}/electronics-recycling/${country}/${locationSlug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white pt-5 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Electronics Recycling', href: '/electronics-recycling' },
              { label: countryData.name, href: `/electronics-recycling/${country}` },
              { label: loc.name, href: `/electronics-recycling/${country}/${locationSlug}` },
            ]}
          />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 leading-tight">
            Electronics Recycling in <span className="text-[#2DB446]">{loc.name}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mb-6">
            Certified e-waste recycling and IT asset disposition services for businesses and residents in{' '}
            {loc.displayName}. R2 & e-Stewards certified. Free pickup available.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center px-8 py-4 bg-[#2DB446] text-white font-bold text-base rounded-full hover:bg-[#249A3A] transition-colors"
            >
              Get a Free Quote in {loc.name}
            </Link>
            <a
              href="tel:8179465655"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-base rounded-full hover:border-white/60 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">phone</span>
              {COMPANY_PHONE}
            </a>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#2DB446] text-base">verified</span> R2 Certified</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#2DB446] text-base">verified</span> e-Stewards Certified</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#2DB446] text-base">lock</span> NIST 800-88 Data Destruction</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[#2DB446] text-base">local_shipping</span> Free Pickup Available</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-4">
                E-Waste Recycling Services in {loc.displayName}
              </h2>
              <p className="text-[#4b5563] leading-relaxed mb-6">{content.intro}</p>

              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Why {loc.name} Needs Responsible E-Waste Recycling
              </h3>
              <p className="text-[#4b5563] leading-relaxed mb-6">{content.whyLocal}</p>

              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Certified Data Destruction in {loc.name}
              </h3>
              <p className="text-[#4b5563] leading-relaxed mb-6">{content.dataDestruction}</p>

              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Business Electronics Recycling in {loc.name}
              </h3>
              <p className="text-[#4b5563] leading-relaxed">{content.businessServices}</p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick contact card */}
              <div className="bg-[#f7f7f7] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-4">Quick Contact</h3>
                <a
                  href="tel:8179465655"
                  className="flex items-center gap-3 mb-4 text-[#2DB446] font-bold text-lg hover:text-[#249A3A]"
                >
                  <span className="material-symbols-outlined">phone</span>
                  {COMPANY_PHONE}
                </a>
                <Link
                  href="/get-a-quote"
                  className="block text-center py-3 bg-[#2DB446] text-white font-bold rounded-full hover:bg-[#249A3A] transition-colors"
                >
                  Request Free Quote
                </Link>
              </div>

              {/* Service areas */}
              <div className="bg-[#f7f7f7] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Areas We Serve Near {loc.name}</h3>
                <ul className="space-y-1.5">
                  {loc.geoKeywords.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <span className="material-symbols-outlined text-[#2DB446] text-sm">check</span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-[#f7f7f7] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Our Certifications</h3>
                <ul className="space-y-2">
                  {['R2 Responsible Recycling', 'e-Stewards', 'ISO 14001', 'NAID AAA'].map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <span className="material-symbols-outlined text-[#2DB446] text-sm">verified</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronics accepted */}
      <section className="py-16 px-6 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            Electronics We Recycle in {loc.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Desktop Computers', 'Laptops & Notebooks', 'Servers & Racks', 'Networking Equipment',
              'Monitors & Displays', 'Mobile Phones', 'Tablets & iPads', 'Printers & Copiers',
              'Scanners', 'UPS & Battery Backup', 'Cables & Wiring', 'Hard Drives & SSDs',
              'TVs & Flat Screens', 'Audio/Video Equipment', 'Medical Devices', 'POS Terminals',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-[#e5e7eb] text-sm font-medium text-[#374151]"
              >
                <span className="material-symbols-outlined text-[#2DB446] text-base">check_circle</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top industries in this location */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            Industries We Serve in {loc.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {loc.industries.map((ind) => {
              const industryLabels: Record<string, { label: string; icon: string }> = {
                construction: { label: 'Construction', icon: 'construction' },
                manufacturing: { label: 'Manufacturing', icon: 'factory' },
                retail: { label: 'Retail', icon: 'storefront' },
                healthcare: { label: 'Healthcare', icon: 'local_hospital' },
                offices: { label: 'Corporate Offices', icon: 'apartment' },
                logistics: { label: 'Logistics & Warehousing', icon: 'local_shipping' },
                automotive: { label: 'Automotive', icon: 'directions_car' },
                'banking-finance': { label: 'Banking & Finance', icon: 'account_balance' },
                'food-services': { label: 'Food Services', icon: 'restaurant' },
                hospitality: { label: 'Hospitality', icon: 'hotel' },
                'property-management': { label: 'Property Management', icon: 'real_estate_agent' },
                education: { label: 'Education', icon: 'school' },
                government: { label: 'Government', icon: 'account_balance' },
              }
              const meta = industryLabels[ind] || { label: ind, icon: 'business' }
              return (
                <Link
                  key={ind}
                  href={`/industries/${ind}`}
                  className="flex flex-col items-center gap-3 p-6 bg-[#f7f7f7] rounded-xl border border-[#e5e7eb] hover:shadow-md hover:border-[#2DB446]/30 transition-all text-center group"
                >
                  <span className="material-symbols-outlined text-3xl text-[#2DB446]">{meta.icon}</span>
                  <span className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#2DB446]">{meta.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nearby locations */}
      {nearbyLocs.length > 0 && (
        <section className="py-16 px-6 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 text-center">
              Electronics Recycling Near {loc.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {nearbyLocs.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/electronics-recycling/${nearby.countrySlug}/${nearby.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e5e7eb] hover:shadow-md hover:border-[#2DB446]/30 transition-all group"
                >
                  <span className="material-symbols-outlined text-[#9ca3af] group-hover:text-[#2DB446] text-xl">location_on</span>
                  <div>
                    <div className="text-sm font-bold text-[#1a1a1a] group-hover:text-[#2DB446]">{nearby.name}</div>
                    <div className="text-xs text-[#6b7280]">{nearby.displayName}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            Electronics Recycling FAQ — {loc.name}
          </h2>
          <FAQAccordion faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
        </div>
      </section>

      {/* More locations in this country */}
      <section className="py-16 px-6 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            More Electronics Recycling Locations in {countryData.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {siblingLocs.map((sib) => (
              <Link
                key={sib.slug}
                href={`/electronics-recycling/${country}/${sib.slug}`}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-[#374151] hover:bg-white hover:text-[#2DB446] hover:shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base text-[#9ca3af]">location_on</span>
                {sib.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/electronics-recycling"
              className="inline-flex items-center gap-2 text-[#2DB446] font-bold hover:underline"
            >
              View All Locations
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </>
  )
}
