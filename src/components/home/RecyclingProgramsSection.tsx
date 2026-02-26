import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function RecyclingProgramsSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch self-stretch overflow-hidden bg-white">
      {/* Left content panel */}
      <div
        className="flex flex-col md:w-[42%] lg:w-[40%] flex-shrink-0 items-start justify-center bg-cover bg-center px-6 sm:px-10 md:px-10 lg:px-14 2xl:px-[100px] py-10 sm:py-14 md:py-16 2xl:py-[120px] gap-5 2xl:gap-8"
        style={{ backgroundImage: "url('/images/programs-bg.png')" }}
      >
        <span className="text-[#686767] text-[10px] sm:text-xs uppercase tracking-widest font-medium">
          Recycling Programs Designed for Your Business
        </span>
        <span className="font-display text-[#1F1E1E] text-xl sm:text-2xl md:text-[22px] lg:text-3xl 2xl:text-[36px] font-bold leading-snug">
          Every business has different recycling needs. We review your materials, explain what can be recycled, and design a simple, reliable program that works for you.
        </span>
        <Link
          href="/services"
          className="inline-flex items-center bg-[#4BE576] text-[#1E1E1E] text-sm sm:text-base font-bold py-3 px-7 sm:px-8 rounded-full hover:brightness-95 transition"
        >
          Learn More
        </Link>
      </div>

      {/* Right image panel */}
      <div className="flex-1 min-h-[280px] sm:min-h-[360px] md:min-h-0">
        <Image
          src="/images/programs-image.png"
          alt="Recycling Programs"
          width={959}
          height={789}
          className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
        />
      </div>
    </div>
  )
}
