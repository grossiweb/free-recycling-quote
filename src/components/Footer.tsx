import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Blogs', href: '/resources/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="flex flex-col self-stretch bg-[#303030] pt-8 sm:pt-10 md:pt-12 2xl:pt-[94px] gap-6 sm:gap-8 2xl:gap-[49px]">
      <div className="flex flex-col md:grid md:grid-cols-4 justify-between items-start self-stretch max-w-[1594px] mx-auto gap-6 sm:gap-8 md:gap-0 px-4 sm:px-6 md:px-8 2xl:px-0">

        {/* Brand column */}
        <div className="flex flex-col shrink-0 items-start pr-0 md:pr-6 2xl:pr-[41px] gap-4 md:gap-5 2xl:gap-[30px]">
          <Link href="/">
            <Image
              src="/images/footer-logo.png"
              alt="Free Recycling Quote"
              width={158}
              height={72}
              className="w-28 h-auto md:w-[140px] 2xl:w-[158px] object-fill"
            />
          </Link>
          <span className="text-white text-sm sm:text-base md:text-lg w-full sm:w-[280px]">
            Waste Not, Want Not Recycling for a Sustainable Future.
          </span>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col shrink-0 items-start gap-3 md:gap-4 2xl:gap-5">
          <span className="text-white text-base sm:text-lg md:text-xl 2xl:text-[22px] font-bold">
            Contact Us
          </span>
          <div className="flex flex-col items-start gap-3 2xl:gap-[15px]">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Image src="/images/icon-phone.png" alt="" width={32} height={32} className="w-6 h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8 object-fill flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg">817-946-5655</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Image src="/images/icon-email.png" alt="" width={32} height={32} className="w-6 h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8 object-fill flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg">xyz@freerecyclingquotes.com</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Image src="/images/icon-location.png" alt="" width={32} height={32} className="w-6 h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8 object-fill flex-shrink-0" />
              <span className="text-white text-sm sm:text-base md:text-lg">Fort Worth, TX</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col shrink-0 items-start gap-3 md:gap-4 2xl:gap-5">
          <span className="text-white text-base sm:text-lg md:text-xl 2xl:text-[22px] font-bold">
            Quick Links
          </span>
          <div className="flex flex-col items-start gap-2 sm:gap-2.5">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white text-sm sm:text-base md:text-lg hover:text-[#4BE576] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col shrink-0 items-start gap-3 md:gap-4 2xl:gap-5">
          <span className="text-white text-base sm:text-lg md:text-xl 2xl:text-[22px] font-bold">
            Social
          </span>
          <div className="flex flex-col items-start gap-2 sm:gap-2.5">
            <span className="text-white text-sm sm:text-base md:text-lg">Newsletter</span>
            <Link href="/terms" className="text-white text-sm sm:text-base md:text-lg hover:text-[#4BE576] transition-colors">
              Term Of Use
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center self-stretch bg-[#222222] py-4 sm:py-5 2xl:py-[29px] px-4 sm:px-8 md:px-10 2xl:px-[164px] gap-3 md:gap-0">
        <span className="text-white text-xs sm:text-sm md:text-base 2xl:text-lg font-bold text-center md:text-left">
          © Copyright 2023 RecyclingQuote all right reserved
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <Image src="/images/social-fb.png" alt="Facebook" width={29} height={29} className="w-6 h-6 md:w-7 md:h-7 2xl:w-[29px] 2xl:h-[29px] object-fill" />
          <Image src="/images/social-tw.png" alt="Twitter" width={29} height={29} className="w-6 h-6 md:w-7 md:h-7 2xl:w-[29px] 2xl:h-[29px] object-fill" />
        </div>
      </div>
    </footer>
  )
}
