import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div
      className="flex flex-col items-center self-stretch bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-28 2xl:py-[216px] gap-0.5 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <span className="text-[#1F1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-[58px] font-bold text-center w-full max-w-[991px] px-4 sm:px-6 lg:px-[39px]">
        Recycling that helps businesses build a more sustainable future
      </span>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start mb-4 sm:mb-6 md:mb-9">
          <Image
            src="/images/hero-underline.png"
            alt=""
            width={469}
            height={4}
            className="w-32 sm:w-60 lg:w-[469px] h-1 self-end object-fill"
          />
        </div>
        <span className="text-[#686767] text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-center w-full max-w-[845px] mb-4 sm:mb-6 md:mb-[35px] px-4 sm:px-6">
          Get quick, dependable recycling solutions for end-of-life products, materials, and business waste — with guidance you can trust.
        </span>
        <a
          href="tel:8179465655"
          className="flex flex-col items-center bg-[#F8F8F8] text-left py-4 md:py-[23px] px-6 sm:px-10 md:px-16 2xl:px-[130px] gap-2 rounded-2xl border-0"
        >
          <span className="text-[#707070] text-sm sm:text-base md:text-lg 2xl:text-xl">
            Get Started Recycling Today!
          </span>
          <span className="text-[#499E62] text-base sm:text-xl md:text-2xl 2xl:text-[29px] font-bold">
            817-946-5655
          </span>
        </a>
      </div>
    </div>
  )
}
