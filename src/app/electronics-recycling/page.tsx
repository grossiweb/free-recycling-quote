import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import LocationAccordion, { type AccordionCountry } from '@/components/shared/LocationAccordion'
import JsonLd from '@/components/shared/JsonLd'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import {
  eRecyclingCountries,
  getERecyclingLocationsByCountry,
  getERecyclingLocationCount,
  getERecyclingCountryCount,
} from '@/lib/data/electronics-recycling-locations'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Electronics Recycling Services Near You | Certified E-Waste Recycling',
  description:
    'Find certified electronics recycling services in your city. R2 & e-Stewards certified e-waste recycling across the United States, Canada, United Kingdom, and Australia. Free quotes available.',
  alternates: { canonical: `${SITE_URL}/electronics-recycling` },
  openGraph: {
    title: 'Electronics Recycling Services Near You | Certified E-Waste Recycling',
    description: 'Find certified electronics recycling services in your city across 4 countries and 96+ metro areas.',
    url: `${SITE_URL}/electronics-recycling`,
  },
}

const faqs = [
  {
    question: 'What electronics can be recycled?',
    answer:
      'Most electronics can be recycled including computers, laptops, monitors, servers, networking equipment, mobile phones, tablets, printers, copiers, TVs, and other consumer electronics. Batteries and peripherals are also accepted at most locations.',
  },
  {
    question: 'Is electronics recycling free?',
    answer:
      'Many electronics recycling programs are free for common items like computers and phones. Some items such as CRT monitors, TVs, and certain hazardous electronics may incur a small processing fee. Contact us for a free quote specific to your items and volume.',
  },
  {
    question: 'How do you ensure data is securely destroyed?',
    answer:
      'We follow NIST 800-88 data destruction guidelines. All storage media undergoes either certified data wiping with verification or physical destruction via shredding. You receive a Certificate of Data Destruction documenting compliance.',
  },
  {
    question: 'What certifications should an electronics recycler have?',
    answer:
      'Look for R2 (Responsible Recycling) and e-Stewards certifications, which are the two recognized standards for electronics recycling. Also look for ISO 14001 for environmental management and NAID AAA for data destruction.',
  },
  {
    question: 'Do you offer pickup services for e-waste?',
    answer:
      'Yes, we offer free pickup for qualifying volumes in most service areas. For smaller quantities, drop-off options are available. We can also arrange scheduled recurring pickups for businesses generating regular e-waste streams.',
  },
  {
    question: 'What happens to recycled electronics?',
    answer:
      'Electronics are sorted, tested, and either refurbished for reuse or dismantled for material recovery. Valuable materials like copper, gold, palladium, and rare earth metals are extracted and returned to the manufacturing supply chain, keeping them out of landfills.',
  },
]

export default function ElectronicsRecyclingHub() {
  const totalLocations = getERecyclingLocationCount()
  const totalCountries = getERecyclingCountryCount()

  // Build accordion data
  const accordionCountries: AccordionCountry[] = eRecyclingCountries.map((country) => {
    const locs = getERecyclingLocationsByCountry(country.slug)
    return {
      code: country.slug,
      name: country.name,
      flag: country.flag,
      locations: locs.map((l) => ({
        slug: l.slug,
        name: l.name,
        href: `/electronics-recycling/${country.slug}/${l.slug}`,
      })),
    }
  })

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: SITE_URL,
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Electronics Recycling',
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Electronics Recycling',
    areaServed: eRecyclingCountries.map((c) => ({
      '@type': 'Country',
      name: c.name,
    })),
    description: 'Certified electronics recycling and e-waste disposal services for businesses and individuals.',
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
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-[#1a1a1a] text-white pt-5 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Electronics Recycling', href: '/electronics-recycling' },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Electronics Recycling Services <span className="text-[#2DB446]">Near You</span>
          </h1>
          <p className="text-lg text-white/70 max-w-3xl mb-8">
            Find certified electronics recycling and e-waste disposal services in {totalLocations}+ metro areas across{' '}
            {totalCountries} countries. R2 and e-Stewards certified. Data destruction included. Free quotes for businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center px-8 py-4 bg-[#2DB446] text-white font-bold text-base rounded-full hover:bg-[#249A3A] transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8179465655"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold text-base rounded-full hover:border-white/60 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">phone</span>
              817-946-5655
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f7f7f7] py-8 px-6 border-b border-[#ebebeb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-[#2DB446]">{totalLocations}+</div>
            <div className="text-sm font-medium text-[#6b7280] mt-1">Service Locations</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#2DB446]">{totalCountries}</div>
            <div className="text-sm font-medium text-[#6b7280] mt-1">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#2DB446]">R2 + e-Stewards</div>
            <div className="text-sm font-medium text-[#6b7280] mt-1">Certified Partners</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-[#2DB446]">100%</div>
            <div className="text-sm font-medium text-[#6b7280] mt-1">Data Destruction</div>
          </div>
        </div>
      </section>

      {/* Location Accordion */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-3 text-center">
            Find Electronics Recycling in Your Area
          </h2>
          <p className="text-center text-[#6b7280] mb-10 max-w-2xl mx-auto">
            Select your country to browse available service locations. Each location page includes local service details,
            accepted electronics, nearby recyclers, and a free quote form.
          </p>
          <LocationAccordion countries={accordionCountries} defaultOpen="united-states" columns={4} />
        </div>
      </section>

      {/* What We Recycle */}
      <section className="py-16 px-6 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-10 text-center">
            Electronics We Accept for Recycling
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: 'computer', label: 'Computers & Laptops' },
              { icon: 'dns', label: 'Servers & Networking' },
              { icon: 'smartphone', label: 'Mobile Phones & Tablets' },
              { icon: 'monitor', label: 'Monitors & Displays' },
              { icon: 'print', label: 'Printers & Copiers' },
              { icon: 'battery_full', label: 'Batteries & UPS Systems' },
              { icon: 'cable', label: 'Cables & Peripherals' },
              { icon: 'tv', label: 'TVs & AV Equipment' },
              { icon: 'medical_services', label: 'Medical Electronics' },
              { icon: 'point_of_sale', label: 'POS & Payment Terminals' },
              { icon: 'security', label: 'Security Equipment' },
              { icon: 'solar_power', label: 'Solar Panels & Inverters' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e5e7eb] hover:shadow-md hover:border-[#2DB446]/30 transition-all"
              >
                <span className="material-symbols-outlined text-[#2DB446] text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-[#1a1a1a]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-12 text-center">
            How Electronics Recycling Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Request a Quote',
                desc: 'Tell us what electronics you need recycled, your location, and volume. Get a free, no-obligation quote within 24 hours.',
                icon: 'request_quote',
              },
              {
                step: 2,
                title: 'We Collect & Process',
                desc: 'Schedule a free pickup or drop off your items. All data-bearing devices undergo certified data destruction with a verifiable chain of custody.',
                icon: 'local_shipping',
              },
              {
                step: 3,
                title: 'Certificate & Reporting',
                desc: 'Receive a Certificate of Recycling and Data Destruction for compliance. Detailed weight and material reports for your ESG program.',
                icon: 'verified',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#2DB446] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold mb-10 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: 'apartment', label: 'Corporate Offices', href: '/industries/offices' },
              { icon: 'local_hospital', label: 'Healthcare', href: '/industries/healthcare' },
              { icon: 'school', label: 'Education', href: '/industries/education' },
              { icon: 'account_balance', label: 'Banking & Finance', href: '/industries/banking-finance' },
              { icon: 'storefront', label: 'Retail', href: '/industries/retail' },
              { icon: 'factory', label: 'Manufacturing', href: '/industries/manufacturing' },
              { icon: 'gavel', label: 'Government', href: '/industries/government' },
              { icon: 'local_shipping', label: 'Logistics', href: '/industries/logistics' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#2DB446]/40 transition-all group"
              >
                <span className="material-symbols-outlined text-[#2DB446] text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-white/80 group-hover:text-white">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links: Related Services */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            Related Recycling Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: 'Scrap Metal Recycling', href: '/services/scrap-metal-recycling' },
              { label: 'Product Destruction', href: '/services/product-destruction' },
              { label: 'Shredding Services', href: '/services/shredding-services' },
              { label: 'Hazardous Waste Disposal', href: '/services/hazardous-waste-disposal' },
              { label: 'Business Recycling Programs', href: '/services/business-recycling-programs' },
              { label: 'Take-Back Programs', href: '/services/take-back-programs' },
              { label: 'Waste Audits & Consulting', href: '/services/waste-audits-consulting' },
              { label: 'Pallet Recycling', href: '/services/pallet-recycling' },
            ].map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[#e5e7eb] text-sm font-medium text-[#374151] hover:border-[#2DB446] hover:text-[#2DB446] transition-colors"
              >
                <span className="material-symbols-outlined text-base text-[#9ca3af]">arrow_forward</span>
                {svc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f7f7f7]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-8 text-center">
            Electronics Recycling FAQ
          </h2>
          <FAQAccordion faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </>
  )
}
