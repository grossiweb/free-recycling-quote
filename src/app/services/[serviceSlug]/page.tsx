import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { services, getServiceBySlug } from '@/lib/data/services'
import { getChallengesForService } from '@/lib/data/challenges'
import {
  getIndustriesForService,
  getMaterialsForService,
  getLocationsForService,
} from '@/lib/data/resolvers'
import LocationAccordion, { type AccordionCountry } from '@/components/shared/LocationAccordion'
import {
  eRecyclingCountries,
  getERecyclingLocationsByCountry,
} from '@/lib/data/electronics-recycling-locations'
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
    title: `${service.name} Services | ${COMPANY_NAME}`,
    description: service.description.slice(0, 160),
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
  }
}

const defaultSteps: Record<string, Array<{ num: number; title: string; desc: string }>> = {
  'core-recycling': [
    { num: 1, title: 'Request a Quote', desc: 'Share details about your material type, estimated volume, and pickup location so we can prepare an accurate quote.' },
    { num: 2, title: 'Site Assessment', desc: 'Our team evaluates your facility, recommends container sizes, and designs an efficient collection schedule.' },
    { num: 3, title: 'Scheduled Pickup', desc: 'We arrive on schedule with the right equipment, collect your materials, and transport them to certified processors.' },
    { num: 4, title: 'Processing & Reporting', desc: 'Materials are sorted, processed, and recycled. You receive weight tickets, certificates, and diversion reports.' },
  ],
  'equipment-logistics': [
    { num: 1, title: 'Tell Us What You Need', desc: 'Describe the type of project, materials involved, and your preferred timeline so we can match you with the right solution.' },
    { num: 2, title: 'Equipment Delivery', desc: 'We deliver the appropriate containers or dispatch our crew to your location at the scheduled time.' },
    { num: 3, title: 'Collection & Sorting', desc: 'Materials are collected and sorted on-site or at our facility to maximize recycling and diversion rates.' },
    { num: 4, title: 'Disposal & Documentation', desc: 'Everything is processed responsibly and you receive full documentation of materials diverted and disposed.' },
  ],
  specialized: [
    { num: 1, title: 'Compliance Review', desc: 'We assess your materials against federal and state regulations to determine the appropriate handling protocols.' },
    { num: 2, title: 'Secure Collection', desc: 'Licensed technicians collect your materials using compliant packaging, labeling, and transportation methods.' },
    { num: 3, title: 'Certified Processing', desc: 'Materials are processed at permitted facilities using methods that meet or exceed regulatory standards.' },
    { num: 4, title: 'Chain-of-Custody Records', desc: 'You receive certificates of destruction or recycling, manifest documentation, and compliance-ready reports.' },
  ],
  programs: [
    { num: 1, title: 'Discovery & Assessment', desc: 'We audit your current waste streams, contracts, and diversion rates to identify opportunities for improvement.' },
    { num: 2, title: 'Program Design', desc: 'Our team designs a custom program with container placement, signage, training materials, and vendor coordination.' },
    { num: 3, title: 'Launch & Training', desc: 'We deploy the program, train your staff, and begin scheduled collections with clear communication channels.' },
    { num: 4, title: 'Ongoing Optimization', desc: 'Monthly reporting, quarterly reviews, and continuous program adjustments ensure sustained performance gains.' },
  ],
}

function getServiceFaqs(serviceName: string, category: string): Array<{ q: string; a: string }> {
  const baseFaqs: Record<string, Array<{ q: string; a: string }>> = {
    'core-recycling': [
      { q: `How much does ${serviceName.toLowerCase()} cost?`, a: 'Pricing depends on material type, volume, contamination level, and pickup frequency. In many cases we can offer rebates on commodity-grade materials. Request a quote for a detailed estimate tailored to your operation.' },
      { q: `What volumes of material do you accept for ${serviceName.toLowerCase()}?`, a: 'We handle everything from single-load pickups to ongoing high-volume contracts. There are no strict minimums, and we scale our equipment and scheduling to match your throughput.' },
      { q: `Do you provide pickup service for ${serviceName.toLowerCase()}?`, a: 'Yes. We offer scheduled recurring pickups as well as on-demand collection. Our fleet includes flatbeds, roll-offs, and box trucks depending on material type and volume.' },
      { q: `What certifications do your ${serviceName.toLowerCase()} facilities hold?`, a: 'Our processing partners maintain R2, e-Stewards, ISO 14001, and state-level environmental permits as applicable. We provide documentation of all certifications upon request.' },
      { q: `Can I get paid for my recyclable materials?`, a: 'For commodity-grade materials like metals, cardboard, and certain plastics, we offer competitive rebates based on current market pricing. We provide transparent grading and weight verification.' },
      { q: `How do you handle contaminated loads?`, a: 'We sort and separate materials at our facilities to minimize contamination impact. If a load requires special handling we will advise you before processing and provide guidance on improving source separation.' },
    ],
    'equipment-logistics': [
      { q: `What sizes of containers are available?`, a: 'We offer roll-off containers from 10 to 40 cubic yards, front-load dumpsters from 2 to 8 cubic yards, and specialized containers for specific material types. Our team recommends the right size based on your project.' },
      { q: `How quickly can you deliver equipment?`, a: 'Standard delivery is within 1-2 business days. For urgent projects we offer same-day or next-day delivery in most metro areas.' },
      { q: `What happens to materials after removal?`, a: 'Our crews sort everything on-site or at our transfer facility. Recyclables are sent to certified processors, donatable items go to charity partners, and only the remainder goes to landfill.' },
      { q: `Do you charge by weight or by load?`, a: 'Pricing varies by service type. Dumpster rentals typically include a weight allowance with overage fees. Junk removal is usually priced per load or per cubic yard. We provide transparent quotes upfront.' },
      { q: `Can you handle construction debris and renovation waste?`, a: 'Yes. We handle C&D materials including drywall, lumber, concrete, roofing, and mixed debris. We sort for maximum diversion and provide waste diversion reports for LEED and green building compliance.' },
      { q: `Do you serve multi-site operations?`, a: 'Absolutely. We coordinate service across multiple locations with centralized billing, reporting, and account management for national and regional operations.' },
    ],
    specialized: [
      { q: `What regulations govern ${serviceName.toLowerCase()}?`, a: 'Depending on the material type, applicable regulations include EPA RCRA, OSHA standards, state environmental laws, NAID AAA certification requirements, and DOT transportation rules. Our team ensures full compliance with all applicable standards.' },
      { q: `Do you provide certificates of destruction?`, a: 'Yes. Every job includes a detailed certificate of destruction or disposal with serial numbers, weight data, and processing method documentation for your compliance records.' },
      { q: `Can you perform on-site witnessed processing?`, a: 'Yes. We offer on-site witnessed destruction for sensitive materials including documents, hard drives, products, and branded items. Your representative can observe the entire process.' },
      { q: `What is your chain-of-custody process?`, a: 'From pickup to final processing, materials are tracked with barcode scanning, GPS-monitored transport, and facility check-in logging. You receive a complete chain-of-custody report with every job.' },
      { q: `How do you handle emergency or urgent requests?`, a: 'We offer priority response for urgent situations including spill cleanup, emergency disposal, and time-sensitive destruction jobs. Contact us directly and we will mobilize within hours when needed.' },
      { q: `Are your drivers and technicians licensed?`, a: 'Yes. All personnel handling hazardous or regulated materials hold the required federal and state licenses, certifications, and training documentation. We maintain current records and can provide verification upon request.' },
    ],
    programs: [
      { q: `How long does it take to implement a new program?`, a: 'Most programs go from assessment to full operation within 2-4 weeks. Complex multi-site rollouts may take 6-8 weeks depending on scope and the number of locations involved.' },
      { q: `Do you provide employee training?`, a: 'Yes. We provide on-site training sessions, printed signage, and digital training materials to ensure staff understand the program and participate effectively. Training is included at no extra charge.' },
      { q: `What reporting do program clients receive?`, a: 'Monthly reports include weight data, diversion rates, cost summaries, and trend analysis. We also provide quarterly executive summaries and annual reports formatted for ESG disclosure.' },
      { q: `Can you work with our existing waste hauler?`, a: 'Yes. We can complement your current hauling arrangements or manage the entire program including vendor coordination. We are vendor-agnostic and focused on optimizing your results.' },
      { q: `What ROI can we expect from a recycling program?`, a: 'Most clients see 20-40% reduction in total waste management costs within the first year through optimized hauling contracts, reduced contamination, and commodity rebates on recyclable materials.' },
      { q: `Do you support zero-waste-to-landfill goals?`, a: 'Yes. We have helped multiple clients achieve 90%+ diversion rates and true zero-waste certification. Our consulting services include gap analysis, vendor sourcing, and ongoing program management toward this goal.' },
    ],
  }
  return baseFaqs[category] || baseFaqs['core-recycling']
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const { serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)
  if (!service || !service.isActive) notFound()

  const challenges = getChallengesForService(serviceSlug)
  const relatedIndustries = getIndustriesForService(serviceSlug)
  const relatedMaterials = getMaterialsForService(serviceSlug)
  const relatedLocations = getLocationsForService(serviceSlug)
  const steps = defaultSteps[service.category] || defaultSteps['core-recycling']
  const faqs = getServiceFaqs(service.name, service.category)

  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name, href: `/services/${serviceSlug}` }] satisfies BreadcrumbItem[]} />
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5eb] rounded-full text-[13px] font-semibold text-[#2DB446] mb-6">
                <span className="material-symbols-outlined text-base">{service.icon}</span>
                {service.category === 'core-recycling' ? 'Core Recycling' : service.category === 'equipment-logistics' ? 'Equipment & Logistics' : service.category === 'specialized' ? 'Specialized' : 'Programs'}
              </div>
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                {service.name} Services
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-8 mx-auto lg:mx-0">
                {service.description}
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
            <h2 className="text-[28px] font-extrabold mb-6">About Our {service.name} Service</h2>
            <p className="text-base text-[#525252] leading-[1.75] mb-4">
              {service.description} Our team works directly with your facility to understand volumes, material composition, and scheduling requirements so we can deliver a solution that fits seamlessly into your operations.
            </p>
            <p className="text-base text-[#525252] leading-[1.75]">
              Whether you are managing a one-time project or need ongoing recurring service, our {service.name.toLowerCase()} program adapts to your needs. We provide transparent pricing, reliable pickups, and comprehensive documentation for every job. {relatedMaterials.length > 0 && (
                <>We handle materials including {relatedMaterials.slice(0, 3).map((m, i) => (
                  <span key={m.slug}>{i > 0 && (i === relatedMaterials.slice(0, 3).length - 1 ? ', and ' : ', ')}<Link href={`/materials/${m.fullPath}`} className="text-[#2DB446] font-semibold hover:underline">{m.name.toLowerCase()}</Link></span>
                ))}{relatedMaterials.length > 3 ? ', and more' : ''}.</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">How {service.name} Works</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            A straightforward process from first contact to certified recycling.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            <div className="hidden md:block absolute top-[44px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[2px] border-t-2 border-dashed border-[#ebebeb]" />
            {steps.map((step) => (
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

      {/* Challenges */}
      {challenges.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Challenges We Solve</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Common business problems that {service.name.toLowerCase()} directly addresses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.slice(0, 3).map((challenge) => (
                <Link key={challenge.slug} href={`/challenges/${challenge.slug}`} className="group p-6 rounded-2xl border border-[#ebebeb] bg-white transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{challenge.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{challenge.name}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4 line-clamp-3">{challenge.description}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries Served */}
      {relatedIndustries.length > 0 && (
        <section className="py-20 bg-[#f7f7f7]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Industries We Serve</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Our {service.name.toLowerCase()} service is trusted by organizations across these sectors.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedIndustries.map((industry) => (
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

      {/* Related Materials */}
      {relatedMaterials.length > 0 && (
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[32px] font-extrabold text-center mb-3">Materials We Handle</h2>
            <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
              Common material types processed through our {service.name.toLowerCase()} service.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {relatedMaterials.map((material) => (
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

      {/* Locations Accordion */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">{service.name} by City</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-10 leading-relaxed">
            We provide {service.name.toLowerCase()} in 96+ metropolitan areas across 4 countries. Select your country to find service in your city.
          </p>
          <LocationAccordion
            countries={eRecyclingCountries.map((country) => {
              const locs = getERecyclingLocationsByCountry(country.slug)
              return {
                code: country.slug,
                name: country.name,
                flag: country.flag,
                locations: locs.map((l) => ({
                  slug: l.slug,
                  name: l.name,
                  href: `/${serviceSlug}/${l.slug}`,
                })),
              } satisfies AccordionCountry
            })}
            defaultOpen="united-states"
            columns={4}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about our {service.name.toLowerCase()} service.
          </p>
          <div className="max-w-[800px] mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
          <div className="text-center mt-8">
            <Link href={`/services/${serviceSlug}/faqs`} className="text-sm font-semibold text-[#2DB446] hover:underline inline-flex items-center gap-1">
              View All FAQs <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
