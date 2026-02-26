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
    <footer className="flex flex-col self-stretch bg-[#303030]">
      {/* Main footer content */}
      <div className="flex flex-col lg:flex-row items-start self-stretch px-6 sm:px-10 md:px-14 2xl:px-[120px] py-10 sm:py-14 md:py-16 2xl:py-[80px] gap-10 lg:gap-0">

        {/* Brand column — wide */}
        <div className="flex flex-col items-start gap-5 lg:w-[38%] 2xl:w-[35%] flex-shrink-0 lg:pr-10">
          <Link href="/">
            <Image
              src="/images/footer-logo.png"
              alt="Recycling Quote"
              width={180}
              height={82}
              className="w-36 sm:w-44 2xl:w-[180px] h-auto object-contain"
            />
          </Link>
          <span className="text-white text-sm sm:text-base leading-relaxed max-w-[260px]">
            Waste Not, Want Not Recycling for a Sustainable Future.
          </span>
        </div>

        {/* Right 3 columns */}
        <div className="flex flex-col sm:flex-row items-start flex-1 gap-8 sm:gap-0 sm:justify-between">

          {/* Contact Us */}
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <span className="font-display text-white text-base sm:text-lg 2xl:text-[20px] font-bold">
              Contact Us
            </span>
            <div className="flex flex-col items-start gap-3 2xl:gap-4">
              <div className="flex items-center gap-3">
                <Image src="/images/icon-phone.png" alt="" width={28} height={28} className="w-6 h-6 2xl:w-7 2xl:h-7 object-contain flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">817-946-5655</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/images/icon-email.png" alt="" width={28} height={28} className="w-6 h-6 2xl:w-7 2xl:h-7 object-contain flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">xyz@freerecyclingquotes.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/images/icon-location.png" alt="" width={28} height={28} className="w-6 h-6 2xl:w-7 2xl:h-7 object-contain flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">Fort Worth, TX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <span className="font-display text-white text-base sm:text-lg 2xl:text-[20px] font-bold">
              Quick Links
            </span>
            <div className="flex flex-col items-start gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white text-sm sm:text-base hover:text-[#4BE576] transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <span className="font-display text-white text-base sm:text-lg 2xl:text-[20px] font-bold">
              Social
            </span>
            <div className="flex flex-col items-start gap-2 sm:gap-3">
              <span className="text-white text-sm sm:text-base">Newsletter</span>
              <Link href="/terms" className="text-white text-sm sm:text-base hover:text-[#4BE576] transition-colors">
                Term Of Use
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center self-stretch bg-[#222222] py-4 sm:py-5 px-6 sm:px-10 md:px-14 2xl:px-[120px] gap-3 sm:gap-0">
        <span className="text-white text-xs sm:text-sm font-bold text-center sm:text-left">
          © Copyright 2023 Recycling Quote all right reserved
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <Image src="/images/social-fb.png" alt="Facebook" width={29} height={29} className="w-7 h-7 object-contain" />
          <Image src="/images/social-tw.png" alt="Twitter" width={29} height={29} className="w-7 h-7 object-contain" />
        </div>
      </div>
    </footer>
  )
}
