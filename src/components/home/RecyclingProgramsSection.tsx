import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecyclingProgramsSection() {
  return (
    <div className="flex flex-col md:flex-row items-start self-stretch bg-neutral-50 overflow-hidden gap-4 md:gap-0">
      <div
        className="flex flex-col md:flex-1 min-w-0 items-start bg-cover bg-center pt-8 sm:pt-12 md:pt-20 2xl:pt-[174px] pl-4 sm:pl-8 md:pl-10 2xl:pl-[167px] pr-4 md:pr-6 mt-0 md:mt-10 2xl:mt-[87px] w-full px-4 sm:px-6 md:px-0"
        style={{ backgroundImage: "url('/images/programs-bg.png')" }}
      >
        <div className="flex flex-col items-start mb-10 sm:mb-16 md:mb-20 2xl:mb-[260px] gap-5 md:gap-8 2xl:gap-12">
          <div className="flex flex-col items-start gap-3 md:gap-4 2xl:gap-[18px]">
            <span className="text-[#686767] text-sm sm:text-base md:text-lg font-bold">
              Recycling Programs Designed for Your Business
            </span>
            <span className="text-[#1F1E1E] text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold w-full max-w-[630px]">
              Every business has different recycling needs. We review your materials, explain what can be recycled, and design a simple, reliable program that works for you.
            </span>
          </div>
          <Link
            href="/services"
            className="flex flex-col items-start bg-[#4BE576] text-left py-3 md:py-[15px] px-6 sm:px-8 md:px-10 2xl:px-[62px] rounded-[40px] border-0"
          >
            <span className="text-[#1E1E1E] text-sm sm:text-base font-bold">
              Learn More
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[55%] md:flex-shrink-0 md:mt-10 2xl:mt-[53px]">
        <Image
          src="/images/programs-image.png"
          alt="Recycling Programs"
          width={959}
          height={789}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
