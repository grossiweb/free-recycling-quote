import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const row1 = [
  { img: '/images/industry-retail.png', title: 'Retail', desc: 'Streamlined recycling for stores and retail operations.', href: '/industries/retail' },
  { img: '/images/industry-manufacturing.png', title: 'Manufacturing', desc: 'Custom solutions for production waste and materials.', href: '/industries/manufacturing' },
  { img: '/images/industry-distribution.png', title: 'Distribution & Logistics', desc: 'Efficient pallet and packaging recycling programs.', href: '/industries/distribution-logistics' },
]

const row2 = [
  { img: '/images/industry-construction.png', title: 'Construction', desc: 'Comprehensive waste management for job sites.', href: '/industries/construction' },
  { img: '/images/industry-schools.png', title: 'Schools & Government', desc: 'Reliable, compliant recycling for public institutions.', href: '/industries/schools-government' },
  { img: '/images/industry-other.png', title: 'Other Industries', desc: 'Flexible solutions for diverse business needs.', href: '/industries/other-industries' },
]

function IndustryCard({ img, title, desc, href }: { img: string; title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="flex flex-1 flex-col items-start bg-white pt-[3px] rounded-3xl w-full overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={500}
        height={296}
        className="w-full h-auto mb-4 sm:mb-5 md:mb-6 object-cover aspect-video"
      />
      <div className="flex items-start mb-4 sm:mb-5 md:mb-6 2xl:mb-[30px] gap-4 sm:gap-5 px-4">
        <div className="bg-[#4BE576] w-2 h-4 rounded-tr-lg rounded-br-lg flex-shrink-0 mt-1" />
        <div className="flex flex-col items-start gap-1.5 min-w-0">
          <span className="text-[#111112] text-base sm:text-lg md:text-xl 2xl:text-[26px] font-bold">
            {title}
          </span>
          <span className="text-[#686767] text-sm sm:text-base 2xl:text-[19px]">
            {desc}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function IndustriesSection() {
  return (
    <div className="flex flex-col items-center self-stretch bg-neutral-50 py-10 sm:py-14 md:py-16 2xl:py-[120px] px-4 sm:px-6 md:px-8 rounded-tl-[64px] rounded-tr-[64px]">
      <div className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12 2xl:mb-[94px] gap-3">
        <span className="text-[#1F1E1E] text-3xl sm:text-4xl md:text-5xl font-bold">
          Industries We Serve
        </span>
        <span className="text-[#686767] text-base sm:text-lg md:text-xl 2xl:text-[26px] text-center px-4 sm:px-0">
          We support companies of all sizes with clear, dependable recycling solutions.
        </span>
      </div>
      <div className="flex flex-col self-stretch max-w-[1584px] mx-auto gap-4 sm:gap-5 md:gap-6 2xl:gap-10">
        <div className="flex flex-col sm:flex-col md:flex-row items-center self-stretch gap-4 sm:gap-5 md:gap-6 2xl:gap-[30px]">
          {row1.map((item) => <IndustryCard key={item.title} {...item} />)}
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row items-center self-stretch gap-4 sm:gap-5 md:gap-6 2xl:gap-[30px]">
          {row2.map((item) => <IndustryCard key={item.title} {...item} />)}
        </div>
      </div>
    </div>
  )
}
