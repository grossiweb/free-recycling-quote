import React from 'react'
import Link from 'next/link'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/70">
      <div className="max-w-[1200px] mx-auto px-6 pt-[60px] pb-7">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-extrabold text-white mb-2">recycling quotes</h4>
            <p className="text-sm leading-relaxed max-w-[260px]">Quick, Fair, and Recycling for a Sustainable Future.</p>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">Contact Us</h5>
            <a href="tel:8179465655" className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">817-946-5655</a>
            <a href="mailto:jorge@recyclingquotes.com" className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">jorge@recyclingquotes.com</a>
            <span className="block text-sm text-white/55">Fort Worth, TX</span>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">Quick Links</h5>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">Social</h5>
            <a href="#" className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">Facebook</a>
            <Link href="/terms" className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">Terms Of Use</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-white/35">
          <span>&copy; Copyright 2025 Recycling Quotes all rights reserved.</span>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white/50 text-sm hover:bg-[#2DB446] hover:text-white transition-colors">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white/50 text-sm hover:bg-[#2DB446] hover:text-white transition-colors">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
