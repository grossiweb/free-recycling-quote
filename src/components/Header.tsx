'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Pallet Recycling', href: '/services/pallet-recycling' },
      { label: 'Business Recycling', href: '/services/business-recycling' },
      { label: 'Material Solutions', href: '/services/material-solutions' },
      { label: 'Take Back Programs', href: '/services/take-back' },
      { label: 'Collection Events', href: '/services/collection-events' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
      { label: 'Distribution', href: '/industries/distribution' },
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Schools & Gov', href: '/industries/schools-gov' },
    ],
  },
  {
    label: 'Materials',
    href: '/materials',
    children: [
      { label: 'Electronics', href: '/materials/electronics' },
      { label: 'Metal', href: '/materials/metal' },
      { label: 'Plastic', href: '/materials/plastic' },
      { label: 'Paper', href: '/materials/paper' },
      { label: 'View All \u2192', href: '/materials' },
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
      { label: 'ESG & Sustainability', href: '/about/esg' },
      { label: 'Our Impact', href: '/about/impact' },
    ],
  },
  { label: 'Contact', href: '/contact', children: [] },
]

const mobileMenuItems = [
  {
    label: 'Services',
    children: [
      { label: 'Pallet Recycling', href: '/services/pallet-recycling', icon: 'pallet', color: 'grn' },
      { label: 'Business Recycling', href: '/services/business-recycling', icon: 'apartment', color: 'org' },
      { label: 'Material Solutions', href: '/services/material-solutions', icon: 'recycling', color: 'blu' },
      { label: 'Take Back Programs', href: '/services/take-back', icon: 'swap_horiz', color: 'pur' },
      { label: 'Collection Events', href: '/services/collection-events', icon: 'event', color: 'tea' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Retail', href: '/industries/retail', icon: 'storefront', color: 'grn' },
      { label: 'Manufacturing', href: '/industries/manufacturing', icon: 'factory', color: 'org' },
      { label: 'Construction', href: '/industries/construction', icon: 'construction', color: 'pur' },
    ],
  },
  {
    label: 'Materials',
    children: [
      { label: 'Electronics', href: '/materials/electronics', icon: 'devices', color: 'grn' },
      { label: 'Plastic', href: '/materials/plastic', icon: 'water_bottle', color: 'blu' },
      { label: 'View All', href: '/materials', icon: 'arrow_forward', color: 'grn', highlight: true },
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
      { label: 'ESG & Sustainability', href: '/about/esg', icon: 'eco', color: 'tea' },
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
      <header className={`fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-[#ebebeb] h-[72px] transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-extrabold text-lg text-[#1a1a1a] z-[1100]">
            <div className="w-9 h-9 bg-[#2DB446] rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <div className="leading-none">recycling</div>
              <div className="text-xs font-semibold text-[#737373] leading-none">quotes</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-colors duration-200
                    ${isActive(item.href) ? 'text-[#2DB446] font-semibold' : 'text-[#404040] hover:text-[#1a1a1a] hover:bg-[#f7f7f7]'}`}
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:rotate-180">expand_more</span>
                  )}
                </Link>
                {item.children.length > 0 && (
                  <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 translate-y-2 bg-[#1b2a1b] rounded-xl p-3 min-w-[200px] opacity-0 invisible pointer-events-none transition-all duration-250 shadow-xl z-[100] group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 before:content-[''] before:absolute before:-top-4 before:left-0 before:right-0 before:h-5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-white/70 rounded-lg transition-colors duration-200 hover:bg-[#243324] hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4 z-[1100]">
            <a href="tel:8179465655" className="hidden lg:block text-[15px] font-semibold text-[#1a1a1a] mr-2 whitespace-nowrap">
              817-946-5655
            </a>
            <Link href="/contact" className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#2DB446] text-white font-semibold text-sm rounded-full transition-all duration-200 hover:bg-[#1a8a34] hover:-translate-y-px whitespace-nowrap">
              Get a Quote
            </Link>
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 bg-transparent border-none z-[1100] cursor-pointer"
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
      <nav className={`fixed top-0 right-0 bottom-0 w-full max-w-[380px] bg-white z-[1050] transform transition-transform duration-350 ease-out overflow-y-auto pt-20 shadow-[-4px_0_32px_rgba(0,0,0,.12)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
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
                      <span className={`text-sm font-semibold ${child.highlight ? 'text-[#2DB446]' : 'text-[#1a1a1a]'}`}>
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
      <div className="h-[72px]" />
    </>
  )
}
