import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const materials = [
  { label: 'Electronics', img: '/images/material-electronics.png', href: '/materials/electronics' },
  { label: 'Metal', img: '/images/material-metal.png', href: '/materials/metal' },
  { label: 'Paper', img: '/images/material-paper.png', href: '/materials/paper' },
  { label: 'Plastic', img: '/images/material-plastic.png', href: '/materials/plastic' },
  { label: 'Textiles', img: '/images/material-textiles.png', href: '/materials/clothing-textile' },
  { label: 'Hazardous Materials', img: '/images/material-hazardous.png', href: '/materials/hazardous-materials' },
  { label: 'Cell Phones', img: '/images/material-cellphones.png', href: '/materials/cell-phones' },
  { label: 'Organics', img: '/images/material-organics.png', href: '/materials/organics' },
  { label: 'Chemicals', img: '/images/material-chemicals.png', href: '/materials/chemicals' },
  { label: 'Pallets', img: '/images/material-pallets.png', href: '/materials/pallets' },
  { label: 'Light Bulbs', img: '/images/material-lightbulbs.png', href: '/materials/light-bulbs' },
  { label: 'Batteries', img: '/images/material-batteries.png', href: '/materials/batteries' },
]

const services = [
  { label: 'Junk Removal', img: '/images/service-junk.png', href: '/services/junk-removal' },
  { label: 'Dumpster Rental', img: '/images/service-dumpster.png', href: '/services/dumpster-rental' },
  { label: 'Product Destruction', img: '/images/service-destruction.png', href: '/services/product-destruction' },
  { label: 'Shredding Service', img: '/images/service-shredding.png', href: '/services/shredding-service' },
  { label: 'Waste to energy', img: '/images/service-waste-energy.png', href: '/services/waste-to-energy' },
  { label: 'Janitorial Service', img: '/images/service-janitorial.png', href: '/services/janitorial-service' },
]

function IconCard({ label, img, href }: { label: string; img: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center aspect-square bg-white rounded-2xl border border-solid border-[#00000026] gap-2 sm:gap-3 p-3 sm:p-4"
      style={{ boxShadow: '0px 7px 12px #0509070D' }}
    >
      <Image
        src={img}
        alt={label}
        width={81}
        height={81}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 2xl:w-[81px] 2xl:h-[81px] object-contain"
      />
      <span className="font-display text-[#686767] text-[11px] sm:text-xs md:text-sm 2xl:text-[18px] font-medium text-center leading-tight">
        {label}
      </span>
    </Link>
  )
}

export default function MaterialsSection() {
  const row1 = materials.slice(0, 6)
  const row2 = materials.slice(6, 12)

  return (
    <div className="flex flex-col items-center self-stretch bg-white pt-10 sm:pt-14 md:pt-16 2xl:pt-[120px] px-4 sm:px-6 lg:px-10 2xl:px-[168px]">
      <span className="font-display text-[#151515] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 2xl:mb-[52px]">
        Materials We Recycle
      </span>
      <div className="flex flex-col self-stretch mb-10 sm:mb-12 md:mb-14 2xl:mb-[138px] gap-3 sm:gap-4 md:gap-5 2xl:gap-[30px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 2xl:gap-6 self-stretch">
          {row1.map((m) => <IconCard key={m.href} {...m} />)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 2xl:gap-6 self-stretch">
          {row2.map((m) => <IconCard key={m.href} {...m} />)}
        </div>
      </div>

      <span className="font-display text-[#151515] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
        Expert Services
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 2xl:gap-6 items-center self-stretch mb-10 sm:mb-14 md:mb-16 2xl:mb-[181px]">
        {services.map((s) => <IconCard key={s.href} {...s} />)}
      </div>
    </div>
  )
}
