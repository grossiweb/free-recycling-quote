import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="pt-[140px] pb-[60px] bg-gradient-to-br from-white via-white to-[#e8f5eb]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5eb] rounded-full text-[13px] font-semibold text-[#2DB446] mb-6">
              <span className="material-symbols-outlined text-base">verified</span>
              R2 & e-Stewards Certified Network
            </div>
            <h1 className="text-[42px] md:text-[36px] sm:text-[28px] font-extrabold leading-[1.12] mb-4">
              Free Recycling Quotes for Every Business
            </h1>
            <p className="text-[17px] text-[#525252] max-w-[520px] leading-[1.65] mb-8 mx-auto lg:mx-0">
              Get certified recycling for electronics, metals, paper, plastics, pallets, and hazardous materials. Nationwide pickup, compliance documentation, and ESG-ready reporting since 2005.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
                Get a Quote <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link href="/schedule-pickup" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
                Schedule a Pickup <span className="material-symbols-outlined text-lg">calendar_month</span>
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-xs text-[#737373]">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[#2DB446] text-sm">check_circle</span> Free Quotes</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[#2DB446] text-sm">check_circle</span> Certified Recycling</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[#2DB446] text-sm">check_circle</span> Nationwide</span>
            </div>
          </div>
          <div className="relative flex-shrink-0 max-w-[480px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
              alt="Recycling facility with sorted materials ready for processing"
              width={800}
              height={600}
              className="rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,.12)] w-full h-auto"
              priority
            />
            <div className="absolute bottom-[-16px] left-6 lg:left-[-16px] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,.08)] px-4 py-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#2DB446] text-2xl">eco</span>
              <div>
                <strong className="text-lg font-extrabold block leading-none">500+</strong>
                <span className="text-xs text-[#737373]">Businesses Served</span>
              </div>
            </div>
            <div className="absolute top-4 right-[-8px] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,.08)] px-4 py-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-[#2DB446] text-2xl">recycling</span>
              <div>
                <strong className="text-lg font-extrabold block leading-none">92%</strong>
                <span className="text-xs text-[#737373]">Recovery Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
