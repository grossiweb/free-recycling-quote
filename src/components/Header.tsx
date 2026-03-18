'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Services',
    href: '/services',
    mega: true,
    children: [
      { label: 'Scrap Metal Recycling', href: '/services/scrap-metal-recycling' },
      { label: 'Electronics Recycling', href: '/services/electronics-recycling' },
      { label: 'Pallet Recycling', href: '/services/pallet-recycling' },
      { label: 'Cardboard & Paper Recycling', href: '/services/cardboard-paper-recycling' },
      { label: 'Plastic Recycling', href: '/services/plastic-recycling' },
      { label: 'Dumpster Rental', href: '/services/dumpster-rental' },
      { label: 'Junk Removal', href: '/services/junk-removal' },
      { label: 'Hazardous Waste Disposal', href: '/services/hazardous-waste-disposal' },
      { label: 'Product Destruction', href: '/services/product-destruction' },
      { label: 'Shredding Services', href: '/services/shredding-services' },
      { label: 'Business Recycling Programs', href: '/services/business-recycling-programs' },
      { label: 'Waste Audits & Consulting', href: '/services/waste-audits-consulting' },
      { label: 'Material Recycling Solutions', href: '/services/material-recycling-solutions' },
      { label: 'Collection Events', href: '/services/collection-events' },
      { label: 'Take-Back Programs', href: '/services/take-back-programs' },
    ],
  },
  {
    label: 'Materials',
    href: '/materials',
    mega: true,
    children: [
      { label: 'Metals', href: '/materials/metals' },
      { label: 'Electronics', href: '/materials/electronics' },
      { label: 'Paper & Cardboard', href: '/materials/paper-cardboard' },
      { label: 'Plastics', href: '/materials/plastics' },
      { label: 'Pallets', href: '/materials/pallets' },
      { label: 'Hazardous Materials', href: '/materials/hazardous-materials' },
      { label: 'Textiles', href: '/materials/textiles' },
      { label: 'Organics', href: '/materials/organics' },
      { label: 'Vehicles', href: '/materials/vehicles' },
      { label: 'Junk & Bulky Items', href: '/materials/junk' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    mega: true,
    children: [
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Offices', href: '/industries/offices' },
      { label: 'Logistics', href: '/industries/logistics' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Banking & Finance', href: '/industries/banking-finance' },
      { label: 'Food Services', href: '/industries/food-services' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Property Management', href: '/industries/property-management' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Government', href: '/industries/government' },
    ],
  },
  {
    label: 'Challenges',
    href: '/challenges',
    children: [
      { label: 'E-Waste Compliance', href: '/challenges/ewaste-compliance' },
      { label: 'Waste Diversion', href: '/challenges/waste-diversion' },
      { label: 'ESG Reporting', href: '/challenges/esg-reporting' },
      { label: 'Hazardous Waste', href: '/challenges/hazardous-waste' },
      { label: 'Cost Reduction', href: '/challenges/cost-reduction' },
      { label: 'Program Setup', href: '/challenges/program-setup' },
      { label: 'Supply Chain Sustainability', href: '/challenges/supply-chain-sustainability' },
      { label: 'C&D Waste Compliance', href: '/challenges/cd-waste-compliance' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Videos', href: '/resources/videos' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Why Choose Us', href: '/about/why-choose-us' },
      { label: 'Certifications', href: '/about/certifications' },
      { label: 'ESG & Sustainability', href: '/about/esg' },
      { label: 'Our Impact', href: '/about/our-impact' },
    ],
  },
  { label: 'Contact', href: '/contact', children: [] },
]

const mobileMenuItems = [
  {
    label: 'Services',
    children: [
      { label: 'Scrap Metal Recycling', href: '/services/scrap-metal-recycling', icon: 'inventory_2', color: 'grn' },
      { label: 'Electronics Recycling', href: '/services/electronics-recycling', icon: 'devices', color: 'blu' },
      { label: 'Pallet Recycling', href: '/services/pallet-recycling', icon: 'pallet', color: 'org' },
      { label: 'Cardboard & Paper', href: '/services/cardboard-paper-recycling', icon: 'description', color: 'tea' },
      { label: 'Plastic Recycling', href: '/services/plastic-recycling', icon: 'water_bottle', color: 'blu' },
      { label: 'Dumpster Rental', href: '/services/dumpster-rental', icon: 'delete', color: 'pur' },
      { label: 'Junk Removal', href: '/services/junk-removal', icon: 'local_shipping', color: 'org' },
      { label: 'Hazardous Waste', href: '/services/hazardous-waste-disposal', icon: 'warning', color: 'red' },
      { label: 'Product Destruction', href: '/services/product-destruction', icon: 'delete_forever', color: 'red' },
      { label: 'Shredding Services', href: '/services/shredding-services', icon: 'content_cut', color: 'pur' },
      { label: 'Business Programs', href: '/services/business-recycling-programs', icon: 'apartment', color: 'grn' },
      { label: 'Waste Audits', href: '/services/waste-audits-consulting', icon: 'assessment', color: 'blu' },
      { label: 'Material Solutions', href: '/services/material-recycling-solutions', icon: 'recycling', color: 'grn' },
      { label: 'Collection Events', href: '/services/collection-events', icon: 'event', color: 'tea' },
      { label: 'Take-Back Programs', href: '/services/take-back-programs', icon: 'swap_horiz', color: 'pur' },
    ],
  },
  {
    label: 'Materials',
    children: [
      { label: 'Metals', href: '/materials/metals', icon: 'inventory_2', color: 'grn' },
      { label: 'Electronics', href: '/materials/electronics', icon: 'devices', color: 'blu' },
      { label: 'Paper & Cardboard', href: '/materials/paper-cardboard', icon: 'description', color: 'org' },
      { label: 'Plastics', href: '/materials/plastics', icon: 'water_bottle', color: 'blu' },
      { label: 'Pallets', href: '/materials/pallets', icon: 'pallet', color: 'pur' },
      { label: 'Hazardous Materials', href: '/materials/hazardous-materials', icon: 'warning', color: 'red' },
      { label: 'Textiles', href: '/materials/textiles', icon: 'checkroom', color: 'tea' },
      { label: 'Organics', href: '/materials/organics', icon: 'compost', color: 'grn' },
      { label: 'Vehicles', href: '/materials/vehicles', icon: 'directions_car', color: 'org' },
      { label: 'Junk & Bulky Items', href: '/materials/junk', icon: 'delete', color: 'pur' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Construction', href: '/industries/construction', icon: 'construction', color: 'org' },
      { label: 'Manufacturing', href: '/industries/manufacturing', icon: 'factory', color: 'pur' },
      { label: 'Retail', href: '/industries/retail', icon: 'storefront', color: 'grn' },
      { label: 'Healthcare', href: '/industries/healthcare', icon: 'local_hospital', color: 'red' },
      { label: 'Offices', href: '/industries/offices', icon: 'apartment', color: 'blu' },
      { label: 'Logistics', href: '/industries/logistics', icon: 'local_shipping', color: 'tea' },
      { label: 'Automotive', href: '/industries/automotive', icon: 'directions_car', color: 'org' },
      { label: 'Banking & Finance', href: '/industries/banking-finance', icon: 'account_balance', color: 'pur' },
      { label: 'Food Services', href: '/industries/food-services', icon: 'restaurant', color: 'red' },
      { label: 'Hospitality', href: '/industries/hospitality', icon: 'hotel', color: 'blu' },
      { label: 'Property Management', href: '/industries/property-management', icon: 'real_estate_agent', color: 'grn' },
      { label: 'Education', href: '/industries/education', icon: 'school', color: 'tea' },
      { label: 'Government', href: '/industries/government', icon: 'account_balance', color: 'org' },
    ],
  },
  {
    label: 'Challenges',
    children: [
      { label: 'E-Waste Compliance', href: '/challenges/ewaste-compliance', icon: 'security', color: 'red' },
      { label: 'Waste Diversion', href: '/challenges/waste-diversion', icon: 'compost', color: 'grn' },
      { label: 'ESG Reporting', href: '/challenges/esg-reporting', icon: 'monitoring', color: 'blu' },
      { label: 'Hazardous Waste', href: '/challenges/hazardous-waste', icon: 'warning', color: 'red' },
      { label: 'Cost Reduction', href: '/challenges/cost-reduction', icon: 'savings', color: 'org' },
      { label: 'Program Setup', href: '/challenges/program-setup', icon: 'assignment', color: 'pur' },
      { label: 'Supply Chain', href: '/challenges/supply-chain-sustainability', icon: 'hub', color: 'tea' },
      { label: 'C&D Waste', href: '/challenges/cd-waste-compliance', icon: 'foundation', color: 'org' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', href: '/resources/blog', icon: 'article', color: 'grn' },
      { label: 'FAQ', href: '/resources/faq', icon: 'help', color: 'blu' },
      { label: 'Videos', href: '/resources/videos', icon: 'play_circle', color: 'pur' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'Our Story', href: '/about/our-story', icon: 'auto_stories', color: 'grn' },
      { label: 'Why Choose Us', href: '/about/why-choose-us', icon: 'thumb_up', color: 'blu' },
      { label: 'Certifications', href: '/about/certifications', icon: 'verified', color: 'tea' },
      { label: 'ESG & Sustainability', href: '/about/esg', icon: 'eco', color: 'grn' },
      { label: 'Our Impact', href: '/about/our-impact', icon: 'monitoring', color: 'org' },
    ],
  },
]

const iconColorMap: Record<string, string> = {
  grn: 'bg-[rgba(45,180,70,.1)] text-[#2DB446]',
  org: 'bg-[rgba(245,158,11,.1)] text-[#f59e0b]',
  blu: 'bg-[rgba(59,130,246,.1)] text-[#3b82f6]',
  pur: 'bg-[rgba(139,92,246,.1)] text-[#8b5cf6]',
  tea: 'bg-[rgba(20,184,166,.1)] text-[#14b8a6]',
  red: 'bg-[rgba(239,68,68,.1)] text-[#ef4444]',
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-[#ebebeb] h-[64px] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo - bigger */}
          <Link href="/" className="z-[1100] flex-shrink-0">
            <Image src="/images/logo.png" alt="Recycling Quotes" width={200} height={46} className="w-32 sm:w-36 md:w-44 lg:w-48 h-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-0.5 list-none">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-0.5 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200
                    ${isActive(item.href) ? 'text-[#2DB446] font-semibold' : 'text-[#404040] hover:text-[#1a1a1a] hover:bg-[#f7f7f7]'}`}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:rotate-180">expand_more</span>
                  )}
                </Link>
                {item.children.length > 0 && (
                  <div className={`absolute top-[calc(100%+12px)] ${(item as any).mega ? 'left-1/2 -translate-x-1/2 min-w-[420px] p-4' : 'left-1/2 -translate-x-1/2 min-w-[220px] p-3'} translate-y-2 bg-[#1b2a1b] rounded-xl opacity-0 invisible pointer-events-none transition-all duration-250 shadow-xl z-[100] group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5`}>
                    <div className={(item as any).mega ? 'grid grid-cols-2 gap-x-2' : ''}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-[13px] font-medium text-white/70 rounded-lg transition-colors duration-200 hover:bg-[#243324] hover:text-white whitespace-nowrap"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 z-[1100]">
            <a href="tel:8179465655" className="hidden xl:block text-[14px] font-semibold text-[#1a1a1a] mr-1 whitespace-nowrap">
              817-946-5655
            </a>
            <Link href="/contact" className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#2DB446] text-white font-semibold text-[13px] rounded-full transition-all duration-200 hover:bg-[#1a8a34] hover:-translate-y-px whitespace-nowrap">
              Get a Quote
            </Link>
            <button
              className="xl:hidden flex items-center justify-center w-11 h-11 bg-transparent border-none z-[1100] cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <div className={`relative w-6 h-0.5 transition-colors duration-200 ${mobileOpen ? 'bg-transparent' : 'bg-[#1a1a1a]'}`}>
                <span className={`absolute left-0 w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? 'top-0 rotate-45' : '-top-[7px]'}`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${mobileOpen ? 'top-0 -rotate-45' : 'top-[7px]'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1040] backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <nav className={`fixed top-0 right-0 bottom-0 w-full max-w-[400px] bg-white z-[1050] transform transition-transform duration-350 ease-out overflow-y-auto pt-20 shadow-[-4px_0_32px_rgba(0,0,0,.12)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden`}
        style={{ display: 'block' }}
      >
        <div className="px-6">
          {mobileMenuItems.map((section) => (
            <div key={section.label} className="border-b border-[#ebebeb] last:border-b-0">
              <button
                className="flex items-center justify-between w-full py-4 text-base font-semibold text-[#1a1a1a] cursor-pointer select-none bg-transparent border-none"
                onClick={() => setOpenAccordion(openAccordion === section.label ? null : section.label)}
              >
                {section.label}
                <span className={`material-symbols-outlined text-xl text-[#737373] transition-all duration-300 ${openAccordion === section.label ? 'rotate-180 text-[#2DB446]' : ''}`}>
                  expand_more
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-out ${openAccordion === section.label ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="pb-4">
                  {section.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-3 py-2.5 px-3 -mx-3 rounded-lg transition-colors duration-150 active:bg-[#f7f7f7]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base ${iconColorMap[child.color]}`}>
                        <span className="material-symbols-outlined">{child.icon}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#1a1a1a]">
                        {child.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="border-b border-[#ebebeb]">
            <Link
              href="/contact"
              className="flex items-center py-4 text-base font-semibold text-[#1a1a1a]"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-3">
          <Link
            href="/contact"
            className="text-center py-3.5 px-6 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Get a Quote
          </Link>
          <a
            href="tel:8179465655"
            className="flex items-center justify-center gap-2 py-3.5 px-6 border border-[#ebebeb] rounded-full text-[15px] font-semibold text-[#1a1a1a]"
          >
            <span className="material-symbols-outlined text-lg">phone</span>
            817-946-5655
          </a>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-[64px]" />
    </>
  )
}
