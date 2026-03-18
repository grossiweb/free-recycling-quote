'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export interface AccordionLocation {
  slug: string
  name: string
  href: string
}

export interface AccordionCountry {
  code: string
  name: string
  flag: string
  locations: AccordionLocation[]
}

interface LocationAccordionProps {
  countries: AccordionCountry[]
  /** Optional: which country to open by default (country code) */
  defaultOpen?: string
  /** Optional: columns for the location grid (default 4) */
  columns?: 3 | 4 | 5
}

export default function LocationAccordion({
  countries,
  defaultOpen,
  columns = 4,
}: LocationAccordionProps) {
  const [openCountry, setOpenCountry] = useState<string | null>(defaultOpen ?? null)

  const colClass =
    columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : columns === 5
        ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
        : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'

  return (
    <div className="w-full space-y-3">
      {countries.map((country) => {
        const isOpen = openCountry === country.code
        return (
          <div
            key={country.code}
            className="border border-[#e5e7eb] rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-md"
          >
            {/* Accordion trigger */}
            <button
              onClick={() => setOpenCountry(isOpen ? null : country.code)}
              className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-[#f9fafb] transition-colors duration-200 cursor-pointer border-none text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {country.flag}
                </span>
                <div>
                  <span className="text-lg font-bold text-[#1a1a1a]">
                    {country.name}
                  </span>
                  <span className="ml-3 text-sm font-medium text-[#6b7280]">
                    {country.locations.length} {country.locations.length === 1 ? 'location' : 'locations'}
                  </span>
                </div>
              </div>
              <span
                className={`material-symbols-outlined text-xl text-[#6b7280] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              >
                expand_more
              </span>
            </button>

            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-all duration-400 ease-out ${isOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 pb-6 pt-2 bg-[#f9fafb] border-t border-[#e5e7eb]">
                <div className={`grid ${colClass} gap-2`}>
                  {country.locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.href}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-[#374151] hover:bg-white hover:text-[#2DB446] hover:shadow-sm transition-all duration-200 group"
                    >
                      <span className="material-symbols-outlined text-base text-[#9ca3af] group-hover:text-[#2DB446] transition-colors">
                        location_on
                      </span>
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
