import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WpContent from '@/components/shared/WpContent'
import FinalCTA from '@/components/shared/FinalCTA'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'We provide tailored recycling solutions for retail, manufacturing, distribution, construction, schools, government, and more.',
}

const industryCards = [
  { title: 'Retail', desc: 'Streamlined recycling for stores, packaging, and retail operations.', href: '/industries/retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
  { title: 'Manufacturing', desc: 'Custom solutions for production waste, scrap materials, and byproducts.', href: '/industries/manufacturing', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80' },
  { title: 'Distribution & Logistics', desc: 'Efficient pallet, packaging, and shipping material recycling.', href: '/industries/distribution-logistics', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80' },
  { title: 'Construction', desc: 'Comprehensive waste management for job sites and demolition.', href: '/industries/construction', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { title: 'Schools & Government', desc: 'Reliable, consistent recycling for public institutions.', href: '/industries/schools-government', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80' },
  { title: 'Other Industries', desc: 'Flexible solutions for healthcare, hospitality, and more.', href: '/industries/other-industries', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
]

const outcomes = [
  { icon: 'delete_sweep', title: 'Waste Diversion', desc: 'Keep 90%+ of materials out of landfills.' },
  { icon: 'speed', title: 'Operational Efficiency', desc: 'Streamlined pickups and simpler workflows.' },
  { icon: 'description', title: 'ESG Documentation', desc: 'Certified reports for stakeholder confidence.' },
  { icon: 'gavel', title: 'Compliance Support', desc: 'Meet EPA and state regulatory requirements.' },
  { icon: 'location_on', title: 'Multi-Location', desc: 'Nationwide coverage for all your facilities.' },
]

const crossMaterials = [
  { href: '/materials/electronics', icon: 'devices', label: 'Electronics' },
  { href: '/materials/metal', icon: 'iron', label: 'Metal' },
  { href: '/materials/paper', icon: 'description', label: 'Paper' },
  { href: '/materials/plastic', icon: 'water_bottle', label: 'Plastic' },
  { href: '/materials/pallets', icon: 'pallet', label: 'Pallets' },
  { href: '/materials/batteries', icon: 'battery_full', label: 'Batteries' },
]

const crossServices = [
  { href: '/services/pallet-recycling', icon: 'pallet', label: 'Pallet Recycling' },
  { href: '/services/business-recycling-programs', icon: 'apartment', label: 'Business Recycling' },
  { href: '/services/material-recycling-solutions', icon: 'recycling', label: 'Material Solutions' },
  { href: '/services/collection-events', icon: 'event', label: 'Collection Events' },
  { href: '/schedule-pickup', icon: 'local_shipping', label: 'Schedule a Pickup' },
]

export default async function IndustriesPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/industries/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}
  const heroData = await fetchHeroDataByUri('/industries/')

  return (
    <div>
      {/* Hero */}
      <section className="pt-[140px] pb-[60px] text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #eef6ff 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[48px] md:text-4xl sm:text-[28px] font-extrabold leading-[1.12] mb-4">
            {heroData.subtitle || 'Industries We Serve'}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-8 leading-[1.65]">
            {heroData.description || 'We partner with businesses of every size \u2014 providing clear, dependable recycling solutions tailored to your industry.'}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
            Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </section>

      {wpContent && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-6">
            <WpContent html={wpContent} />
          </div>
        </section>
      )}

      {/* Industry Cards Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Recycling Solutions by Industry</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Each industry creates unique waste &mdash; and we design programs to handle it all.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCards.map((card) => (
              <Link key={card.href} href={card.href} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-[13px] opacity-85 leading-snug">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Common Outcomes</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            What our industry clients typically achieve after partnering with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {outcomes.map((o) => (
              <div key={o.title} className="text-center p-7 bg-white rounded-xl border border-[#ebebeb] transition-all hover:border-[#2DB446] hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-[28px] text-[#2DB446] mb-3">{o.icon}</span>
                <h4 className="text-sm font-bold mb-1">{o.title}</h4>
                <p className="text-xs text-[#525252] leading-snug">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crosslinks */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-12">Related Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-5">Popular Materials</h3>
              {crossMaterials.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-[#ebebeb] mb-2 text-sm font-semibold transition-all hover:border-[#2DB446] hover:bg-[#e8f5eb]">
                  <span className="material-symbols-outlined text-lg text-[#2DB446]">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-5">Popular Services</h3>
              {crossServices.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-[#ebebeb] mb-2 text-sm font-semibold transition-all hover:border-[#2DB446] hover:bg-[#e8f5eb]">
                  <span className="material-symbols-outlined text-lg text-[#2DB446]">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
