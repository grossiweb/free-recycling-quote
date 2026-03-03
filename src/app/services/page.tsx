import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WpContent from '@/components/shared/WpContent'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Recycling Services',
  description: 'Comprehensive recycling services for businesses — pallet recycling, business programs, material solutions, consumer take-back programs, and collection events.',
}

const serviceCards = [
  {
    title: 'Pallet Recycling',
    desc: 'Recover, repair, and recycle wooden and plastic pallets. We handle pickup, sorting, and processing so you can reduce waste and recover value from used pallets.',
    href: '/services/pallet-recycling',
    icon: 'pallet',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    alt: 'Stacked wooden pallets in warehouse',
  },
  {
    title: 'Business Recycling Programs',
    desc: 'Custom-designed recycling programs for your organization. We assess your waste streams, design the program, handle logistics, and provide compliance reporting.',
    href: '/services/business-recycling-programs',
    icon: 'apartment',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    alt: 'Modern office with recycling practices',
  },
  {
    title: 'Material Recycling Solutions',
    desc: 'End-to-end recycling for electronics, metals, plastics, paper, and more. We match your materials with the right processing facilities for maximum recovery.',
    href: '/services/material-recycling-solutions',
    icon: 'recycling',
    img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=80',
    alt: 'Material recycling sorting conveyor',
  },
  {
    title: 'Consumer Take Back Programs',
    desc: 'Help your customers return end-of-life products responsibly. We design branded take-back programs with collection logistics and certified processing.',
    href: '/services/consumer-take-back-programs',
    icon: 'swap_horiz',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    alt: 'Consumer product return and recycling',
  },
  {
    title: 'Collection Events',
    desc: 'Organized recycling events for communities, campuses, and corporate locations. We bring the equipment, manage the logistics, and handle all processing.',
    href: '/services/collection-events',
    icon: 'event',
    img: 'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?w=600&q=80',
    alt: 'Community recycling collection event',
  },
]

const steps = [
  { num: 1, title: 'Share Your Needs', desc: 'Tell us about your materials, volumes, and locations. We\u2019ll assess your waste streams and identify recycling opportunities.' },
  { num: 2, title: 'We Design the Program', desc: 'Our team builds a custom recycling plan with the right containers, pickup schedules, and processing partners for your business.' },
  { num: 3, title: 'Pickup + Reporting', desc: 'We handle all pickups on schedule and provide documentation including weight reports, diversion rates, and ESG-ready data.' },
]

const esgFeatures = [
  { icon: 'description', title: 'Certified Documentation', desc: 'Weight tickets, certificates of recycling, and chain-of-custody records for every pickup.' },
  { icon: 'monitoring', title: 'Diversion Tracking', desc: 'Real-time dashboards showing your waste diversion rates, material breakdowns, and environmental savings.' },
  { icon: 'gavel', title: 'Compliance Ready', desc: 'Documentation meets EPA, state, and industry-specific regulatory requirements out of the box.' },
  { icon: 'volunteer_activism', title: 'ESG Report Data', desc: 'Pre-formatted data exports designed to plug directly into your annual ESG and sustainability reports.' },
]

const faqs = [
  { q: 'What types of businesses do you work with?', a: 'We work with businesses of all sizes across every industry \u2014 from single-location retail stores to multi-site manufacturing operations. Our programs are custom-designed to fit your specific waste streams and volume.' },
  { q: 'How quickly can you set up a recycling program?', a: 'Most programs are up and running within 1\u20132 weeks of our initial assessment. For simple material pickups, we can often schedule service within a few business days.' },
  { q: 'Do you provide documentation for ESG reporting?', a: 'Yes. Every pickup includes weight tickets and certificates of recycling. We also provide monthly and annual summary reports with diversion rates, CO\u2082 savings calculations, and data formatted for ESG report integration.' },
  { q: 'What materials can you recycle?', a: 'We handle a wide range including electronics, metals, paper, plastics, pallets, textiles, batteries, chemicals, organics, light bulbs, and hazardous materials. If you\u2019re unsure about a specific material, contact us and we\u2019ll advise.' },
  { q: 'Is there a minimum volume requirement?', a: 'No strict minimums \u2014 we tailor our services to your needs. Whether you have a one-time cleanout or need recurring weekly pickups, we can design a cost-effective solution.' },
  { q: 'What areas do you serve?', a: 'We provide nationwide service across the United States. Our network of processing partners allows us to support businesses in any location, including multi-site operations with locations in different states.' },
]

export default async function ServicesPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/services/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}
  const heroData = await fetchHeroDataByUri('/services/')

  return (
    <div>
      {/* Hero */}
      <section className="pt-[140px] pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5eb] rounded-full text-[13px] font-semibold text-[#2DB446] mb-6">
                <span className="material-symbols-outlined text-base">verified</span>
                Trusted by 500+ Businesses
              </div>
              <h1 className="text-[48px] md:text-[38px] sm:text-[30px] font-extrabold leading-[1.12] mb-4">
                {heroData.subtitle || 'Recycling Services Built for Your Business'}
              </h1>
              <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-8 mx-auto lg:mx-0">
                {heroData.description || 'From pallet recovery to full-scale recycling programs, we provide enterprise-grade solutions with ESG-ready documentation and measurable environmental impact.'}
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
            <div className="relative flex-shrink-0 max-w-[480px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
                alt="Recycling facility with sorted materials"
                width={800}
                height={600}
                className="rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.12)] w-full h-auto"
                priority
              />
              <div className="absolute bottom-[-16px] left-6 lg:left-[-16px] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,.08)] px-4 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#2DB446] text-2xl">eco</span>
                <div>
                  <strong className="text-lg font-extrabold block leading-none">92%</strong>
                  <span className="text-xs text-[#737373]">Recovery Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {wpContent && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-6">
            <WpContent html={wpContent} />
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Our Services</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Comprehensive recycling solutions designed to reduce waste, lower costs, and support your ESG goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Link key={card.href} href={card.href} className="group rounded-2xl overflow-hidden border border-[#ebebeb] bg-white transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,.12)] hover:-translate-y-1">
                <div className="h-[220px] overflow-hidden">
                  <Image src={card.img} alt={card.alt} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-[#e8f5eb] rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl text-[#2DB446]">{card.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4">{card.desc}</p>
                  <span className="text-sm font-semibold text-[#2DB446] inline-flex items-center gap-1">
                    Learn More <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">How It Works</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Getting started is simple. Three steps to a cleaner, more efficient operation.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[44px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-[2px] border-t-2 border-dashed border-[#ebebeb]" />
            {steps.map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-[88px] h-[88px] rounded-full bg-[#2DB446] text-white text-[32px] font-extrabold flex items-center justify-center mx-auto mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed max-w-[300px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Block */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-[28px] font-extrabold mb-4">ESG-Ready Reporting &amp; Compliance Support</h2>
              <p className="text-base text-[#525252] leading-relaxed mb-6">
                Every pickup comes with certified documentation. We make it easy to track your environmental impact and report to stakeholders with confidence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {esgFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-3 p-4 bg-[#f7f7f7] rounded-xl border border-[#ebebeb] transition-all hover:border-[#2DB446] hover:shadow-[0_2px_12px_rgba(45,180,70,.08)]">
                    <span className="material-symbols-outlined text-[22px] text-[#2DB446] mt-0.5 flex-shrink-0">{feat.icon}</span>
                    <div>
                      <strong className="block text-sm font-bold mb-0.5">{feat.title}</strong>
                      <span className="text-[13px] text-[#525252] leading-snug">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 max-w-[440px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                alt="Business professional reviewing sustainability report"
                width={600}
                height={400}
                className="rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,.08)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about our recycling services.
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
