import React from 'react'
import Link from 'next/link'
import WpContent from '@/components/shared/WpContent'
import FinalCTA from '@/components/shared/FinalCTA'
import FAQAccordion from '@/components/shared/FAQAccordion'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Materials We Recycle',
  description: 'We recycle electronics, metal, paper, plastic, cell phones, textiles, chemicals, batteries, light bulbs, pallets, and more.',
}

const materialCards = [
  { title: 'Electronics', href: '/materials/electronics', icon: 'devices' },
  { title: 'Metal', href: '/materials/metal', icon: 'iron' },
  { title: 'Paper', href: '/materials/paper', icon: 'description' },
  { title: 'Plastic', href: '/materials/plastic', icon: 'water_bottle' },
  { title: 'Cell Phones', href: '/materials/cell-phones', icon: 'smartphone' },
  { title: 'Clothing / Textile', href: '/materials/clothing-textile', icon: 'checkroom' },
  { title: 'Organics', href: '/materials/organics', icon: 'compost' },
  { title: 'Chemicals', href: '/materials/chemicals', icon: 'science' },
  { title: 'Vehicle', href: '/materials/vehicle', icon: 'directions_car' },
  { title: 'Junk', href: '/materials/junk', icon: 'delete' },
  { title: 'Pallets', href: '/materials/pallets', icon: 'pallet' },
  { title: 'Light Bulbs', href: '/materials/light-bulbs', icon: 'lightbulb' },
  { title: 'Batteries', href: '/materials/batteries', icon: 'battery_full' },
  { title: 'Dumpster Rental', href: '/materials/dumpster-rental', icon: 'dumpster' },
  { title: 'Hazardous Materials', href: '/materials/hazardous-materials', icon: 'warning' },
]

const faqs = [
  { q: 'What happens to my materials after pickup?', a: 'Materials are transported to certified processing facilities where they are sorted, processed, and recycled according to EPA standards. You receive a certificate of recycling for every pickup.' },
  { q: 'Do you handle hazardous materials?', a: 'Yes. We have certified handling processes for hazardous waste, chemicals, and batteries. All hazardous materials are processed in full compliance with federal and state regulations.' },
  { q: 'Can I mix different materials in one pickup?', a: 'In most cases, yes. We sort and separate materials at our facilities. For hazardous items, separate containment may be required \u2014 we will advise during scheduling.' },
  { q: 'How do I know what category my waste falls under?', a: 'Not sure? Just describe your materials when you contact us and we will classify them and recommend the right recycling approach for your business.' },
]

export default async function MaterialsPage() {
  let wpContent = ''
  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/materials/', idType: 'URI' })
    wpContent = data?.page?.content || ''
  } catch {}
  const heroData = await fetchHeroDataByUri('/materials/')

  return (
    <div>
      {/* Hero */}
      <section className="pt-[140px] pb-[60px] text-center" style={{ background: 'linear-gradient(165deg, #fff 60%, #e8f5eb 100%)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-[48px] md:text-4xl sm:text-[28px] font-extrabold leading-[1.12] mb-4">
            {heroData.subtitle || 'Materials We Recycle'}
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto mb-8 leading-[1.65]">
            {heroData.description || 'We accept and responsibly process a wide range of business waste materials \u2014 with certified handling and documentation for every pickup.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
            </Link>
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

      {/* Materials Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">All Accepted Materials</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Click any material to learn about our recycling process, compliance handling, and pickup options.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {materialCards.map((card) => (
              <Link key={card.href} href={card.href} className="flex flex-col items-center gap-3 p-7 sm:p-6 rounded-xl border border-[#ebebeb] bg-white transition-all hover:border-[#2DB446] hover:shadow-[0_4px_16px_rgba(45,180,70,.1)] hover:-translate-y-[3px]">
                <div className="w-12 h-12 bg-[#e8f5eb] rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px] text-[#2DB446]">{card.icon}</span>
                </div>
                <span className="text-sm font-semibold text-[#404040] text-center">{card.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto text-center">
            <span className="material-symbols-outlined text-[48px] text-[#2DB446] mb-4">shield</span>
            <h2 className="text-[28px] font-extrabold mb-3">Not Sure If Your Material Is Accepted?</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-7">
              Some materials &mdash; especially hazardous waste, chemicals, and batteries &mdash; require special handling for safety and regulatory compliance. Contact us and we&apos;ll advise on the best approach for your specific materials.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Contact Us <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] font-extrabold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-[#737373] text-center max-w-[560px] mx-auto mb-12 leading-relaxed">
            Common questions about material recycling.
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
