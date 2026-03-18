import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import LocationAccordion, { type AccordionCountry } from '@/components/shared/LocationAccordion'
import type { Service, Location, ServiceLocation, ServiceMaterial, ServiceIndustry, BreadcrumbItem } from '@/lib/types'
import { COMPANY_PHONE, COMPANY_PHONE_TEL, SITE_URL, COMPANY_NAME } from '@/lib/types'
import {
  getMaterialsForService,
  getIndustriesForService,
  getSiblingServiceLocations,
} from '@/lib/data/resolvers'
import {
  eRecyclingCountries,
  getERecyclingLocationsByCountry,
  getERecyclingLocationBySlug,
} from '@/lib/data/electronics-recycling-locations'

interface ServiceLocationTemplateProps {
  service: Service
  location: Location
  junction: ServiceLocation | ServiceMaterial | ServiceIndustry
}

export default function ServiceLocationTemplate({ service, location, junction }: ServiceLocationTemplateProps) {
  const materials = getMaterialsForService(service.slug)
  const industries = getIndustriesForService(service.slug)
  const siblings = getSiblingServiceLocations(service.slug, location.slug)
  const eRecLoc = getERecyclingLocationBySlug(location.slug)
  const geoKeywords = eRecLoc?.geoKeywords ?? []

  const faqs = [
    { q: `How much does ${service.name.toLowerCase()} cost in ${location.name}?`, a: `Pricing for ${service.name.toLowerCase()} in ${location.name} depends on material type, volume, and pickup frequency. Many items qualify for free recycling or rebates. Contact us for a free, no-obligation quote specific to your ${location.name} area needs.` },
    { q: `Do you offer pickup for ${service.name.toLowerCase()} in ${location.name}?`, a: `Yes. We offer scheduled recurring pickups and on-demand collection throughout the ${location.name} metropolitan area${geoKeywords.length > 0 ? ` including ${geoKeywords.slice(0, 3).join(', ')}` : ''}. Our local fleet ensures reliable, on-time service.` },
    { q: `What areas near ${location.name} do you serve?`, a: `Our ${service.name.toLowerCase()} service covers the entire ${location.name} metro area${geoKeywords.length > 0 ? ` including ${geoKeywords.join(', ')}` : ''}. If you are outside these areas, contact us and we will find a solution for you.` },
    { q: `How quickly can I start ${service.name.toLowerCase()} service in ${location.name}?`, a: `Most businesses in ${location.name} can begin receiving service within 3-5 business days of their initial assessment. Simple pickups can often be scheduled within 1-2 days.` },
    { q: `What certifications do your ${location.name} recyclers hold?`, a: `Our processing partners serving the ${location.name} area maintain R2, e-Stewards, ISO 14001, and state-level environmental permits as applicable. We provide certification documentation upon request.` },
    { q: `Do you provide documentation for ${service.name.toLowerCase()} in ${location.name}?`, a: `Every pickup includes weight tickets and certificates of recycling. We also provide monthly summaries and annual reports for ESG and compliance reporting.` },
  ]

  // Build nearby locations accordion for this service
  const accordionCountries: AccordionCountry[] = eRecyclingCountries.map((country) => {
    const locs = getERecyclingLocationsByCountry(country.slug)
    return {
      code: country.slug,
      name: country.name,
      flag: country.flag,
      locations: locs.map((l) => ({
        slug: l.slug,
        name: l.name,
        href: `/${service.slug}/${l.slug}`,
      })),
    }
  })

  return (
    <div>
      {/* Hero */}
      <section className="pt-5 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name, href: `/services/${service.slug}` }, { label: location.name, href: `/${service.slug}/${location.slug}` }] satisfies BreadcrumbItem[]} />
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5eb] rounded-full text-[13px] font-semibold text-[#2DB446] mb-6">
                <span className="material-symbols-outlined text-base">{service.icon}</span>
                {service.name}
              </div>
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                {service.name} in {location.name}
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-4 mx-auto lg:mx-0">
                {junction.contentAngle || `Professional ${service.name.toLowerCase()} services for businesses and organizations in the ${location.name}, ${location.state || location.region} metropolitan area. Certified processing, competitive pricing, and compliance documentation included.`}
              </p>
              <p className="text-sm text-[#737373] mb-8 mx-auto lg:mx-0 max-w-[520px]">
                <span className="material-symbols-outlined text-sm align-middle mr-1">call</span>
                Call us: <a href={COMPANY_PHONE_TEL} className="text-[#2DB446] font-semibold hover:underline">{COMPANY_PHONE}</a>
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
                  Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
                  Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 max-w-[440px] w-full">
              <div className="bg-[#e8f5eb] rounded-2xl p-12 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-[#2DB446]">{service.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[28px] font-extrabold mb-6">About {service.name} in {location.name}</h2>
            <p className="text-base text-[#525252] leading-[1.75] mb-4">
              Our {service.name.toLowerCase()} services in {location.name} provide businesses and organizations with reliable, compliant recycling solutions tailored to local needs. Whether you are a small office or a large-scale operation, we connect you with certified recycling partners in the {location.name} area to ensure your materials are handled responsibly and in full compliance with local and federal regulations.
            </p>
            <p className="text-base text-[#525252] leading-[1.75] mb-4">
              From pickup scheduling to certificate of recycling documentation, our {location.name} {service.name.toLowerCase()} program covers the full lifecycle of your recyclable materials. We work with facilities across the {location.state || location.region} region to maximize diversion rates and minimize your environmental footprint.
            </p>
            {geoKeywords.length > 0 && (
              <p className="text-base text-[#525252] leading-[1.75]">
                Our service area covers the greater {location.name} region including {geoKeywords.join(', ')}, and surrounding communities. No matter where you are in the metro, we can schedule convenient pickup times that work for your operation.
              </p>
            )}
            <div className="flex flex-wrap gap-6 mt-6 text-sm">
              <Link href={`/services/${service.slug}`} className="text-[#2DB446] font-semibold hover:underline inline-flex items-center gap-1">
                Learn more about {service.name} <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link href={`/locations/${location.countryCode}/${location.slug}`} className="text-[#2DB446] font-semibold hover:underline inline-flex items-center gap-1">
                All services in {location.name} <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">How {service.name} Works in {location.name}</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            A straightforward process from first contact to certified recycling.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            <div className="hidden md:block absolute top-[44px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[2px] border-t-2 border-dashed border-[#ebebeb]" />
            {[
              { num: 1, title: 'Request a Quote', desc: `Share details about your ${service.name.toLowerCase()} needs in ${location.name}. We provide a free quote within 24 hours.` },
              { num: 2, title: 'Site Assessment', desc: `Our team evaluates your ${location.name} facility, recommends solutions, and designs an efficient collection schedule.` },
              { num: 3, title: 'Scheduled Pickup', desc: `We arrive on schedule with the right equipment, collect your materials, and transport them to certified processors.` },
              { num: 4, title: 'Processing & Reporting', desc: `Materials are sorted, processed, and recycled. You receive weight tickets, certificates, and diversion reports.` },
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

      {/* Materials We Handle */}
      {materials.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Materials We Handle in {location.name}</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Common material types processed through our {service.name.toLowerCase()} service in the {location.name} area.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {materials.map((material) => (
                <Link key={material.slug} href={`/materials/${material.fullPath}`} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                  <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{material.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#404040] text-center">{material.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries We Serve */}
      {industries.length > 0 && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Industries We Serve in {location.name}</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Our {service.name.toLowerCase()} service is trusted by organizations across these sectors in {location.name}.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <Link key={industry.slug} href={`/industries/${industry.fullPath}`} className="flex flex-col items-center gap-3 p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                  <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{industry.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#404040] text-center">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services in this City */}
      {siblings.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Other Recycling Services in {location.name}</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Beyond {service.name.toLowerCase()}, we offer these additional services in the {location.name} area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siblings.map(({ service: siblingService }) => (
                <Link key={siblingService.slug} href={`/${siblingService.slug}/${location.slug}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{siblingService.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{siblingService.name}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4 line-clamp-3">{siblingService.tagline}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    {siblingService.name} in {location.name} <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service in Other Locations */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">{service.name} in Other Cities</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-10 leading-relaxed">
            We provide {service.name.toLowerCase()} in 96+ metropolitan areas across 4 countries.
          </p>
          <LocationAccordion
            countries={accordionCountries}
            defaultOpen={eRecLoc?.countrySlug ?? 'united-states'}
            columns={4}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about {service.name.toLowerCase()} in {location.name}.
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
