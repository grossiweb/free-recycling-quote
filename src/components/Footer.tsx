import React from 'react'
import Link from 'next/link'

const serviceLinks = [
  { label: 'Scrap Metal Recycling', href: '/services/scrap-metal-recycling' },
  { label: 'Electronics Recycling', href: '/services/electronics-recycling' },
  { label: 'Pallet Recycling', href: '/services/pallet-recycling' },
  { label: 'Dumpster Rental', href: '/services/dumpster-rental' },
  { label: 'Junk Removal', href: '/services/junk-removal' },
  { label: 'All Services', href: '/services' },
]

const materialLinks = [
  { label: 'Metals', href: '/materials/metals' },
  { label: 'Electronics', href: '/materials/electronics' },
  { label: 'Paper & Cardboard', href: '/materials/paper-cardboard' },
  { label: 'Plastics', href: '/materials/plastics' },
  { label: 'Pallets', href: '/materials/pallets' },
  { label: 'All Materials', href: '/materials' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Certifications', href: '/about/certifications' },
  { label: 'Our Impact', href: '/about/our-impact' },
  { label: 'Blog', href: '/resources/blog' },
  { label: 'FAQ', href: '/resources/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Locations', href: '/locations' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/70">
      <div className="max-w-[1200px] mx-auto px-6 pt-[60px] pb-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-extrabold text-white mb-2">Recycling Quotes</h4>
            <p className="text-sm leading-relaxed max-w-[300px] mb-4">Nationwide recycling services network providing free quotes for electronics, metal, paper, plastic, pallets, and hazardous materials recycling since 2005.</p>
            <div className="flex flex-col gap-2">
              <a href="tel:8179465655" className="text-sm text-white/55 hover:text-[#2DB446] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-base">phone</span> 817-946-5655
              </a>
              <a href="mailto:jorge@recyclingquotes.com" className="text-sm text-white/55 hover:text-[#2DB446] transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span> jorge@recyclingquotes.com
              </a>
              <span className="text-sm text-white/55 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span> Fort Worth, TX
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">Services</h5>
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Materials */}
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">Materials</h5>
            {materialLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[13px] font-bold uppercase tracking-[1px] text-white mb-4">Company</h5>
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-white/55 mb-2.5 hover:text-[#2DB446] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-white/35">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Recycling Quotes. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/recyclingquotes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white/50 text-sm hover:bg-[#2DB446] hover:text-white transition-colors">f</a>
            <a href="https://www.linkedin.com/company/recyclingquotes" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center text-white/50 text-sm hover:bg-[#2DB446] hover:text-white transition-colors">in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
