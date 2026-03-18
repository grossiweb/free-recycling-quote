import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f5eb]/60 via-[#f0faf2]/40 to-white">
      {/* Background image (hands with recyclables) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[960px] mx-auto px-6 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 text-center">
        {/* Main heading */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-[1.15] text-[#1a1a1a] mb-0">
          Recycling that helps businesses build a{' '}
          <span className="relative inline-block">
            more sustainable future
            {/* Green underline */}
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 sm:-bottom-3 w-[60%] sm:w-[70%]">
              <Image
                src="/images/hero-underline.png"
                alt=""
                width={400}
                height={12}
                className="w-full h-auto"
                aria-hidden="true"
              />
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 sm:mt-10 text-[15px] sm:text-[17px] md:text-[19px] text-[#525252] leading-[1.65] max-w-[640px] mx-auto font-semibold">
          Get quick, dependable recycling solutions for end-of-life products, materials, and business waste &mdash; with guidance you can trust.
        </p>

        {/* CTA card */}
        <div className="mt-8 sm:mt-10 inline-block bg-[#f7f7f7]/90 backdrop-blur-sm rounded-2xl px-8 sm:px-12 py-6 sm:py-8 shadow-[0_2px_16px_rgba(0,0,0,.06)]">
          <p className="text-[14px] sm:text-[15px] text-[#525252] font-medium mb-2">
            Get Started Recycling Today!
          </p>
          <a
            href="tel:8179465655"
            className="text-[24px] sm:text-[28px] md:text-[32px] font-extrabold text-[#2DB446] hover:text-[#1a8a34] transition-colors"
          >
            817-946-5655
          </a>
        </div>
      </div>
    </section>
  )
}
