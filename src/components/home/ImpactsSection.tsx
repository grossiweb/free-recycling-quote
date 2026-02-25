import React from 'react'
import Image from 'next/image'

const impacts = [
  {
    img: '/images/impact-environmental.png',
    title: 'Environmental',
    desc: "We maximize your company's recycling efforts to reduce environmental impact, including climate risks, emissions, and resource use.",
  },
  {
    img: '/images/impact-social.png',
    title: 'Social',
    desc: 'Our recycling solutions help companies build trust with stakeholders, employees, and communities while addressing health, safety, labor practices, and human rights.',
  },
  {
    img: '/images/impact-governance.png',
    title: 'Governance',
    desc: 'We ensure recycling programs are transparent, compliant, and accountable. We support documented oversight and responsible recycling practices.',
  },
]

const stats = [
  { value: '500,000+', label: 'Tons Diverted' },
  { value: '1.2M', label: 'Gallons Water Preserved' },
  { value: '92%', label: 'Material Recovery Rate' },
  { value: 'Zero', label: 'Landfill Commitment' },
]

export default function ImpactsSection() {
  return (
    <div className="flex flex-col items-center self-stretch bg-white py-10 sm:py-14 md:py-16 2xl:py-[120px] px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-[162px]">
      <span className="text-[#1F1E1E] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 2xl:mb-[94px]">
        Impacts We Make
      </span>
      <div className="flex flex-col md:flex-row items-stretch self-stretch max-w-[1584px] mb-6 sm:mb-10 md:mb-14 xl:mb-20 mx-auto gap-4 sm:gap-6">
        {impacts.map((impact) => (
          <div key={impact.title} className="flex flex-1 flex-col items-start">
            <div className="self-stretch bg-[#4BE576] h-[51px] mb-[3px] rounded-2xl" />
            <div className="flex items-center mb-4 sm:mb-6 2xl:mb-[26px] gap-4 sm:gap-[18px] px-4">
              <Image
                src={impact.img}
                alt={impact.title}
                width={74}
                height={74}
                className="w-14 h-14 sm:w-16 sm:h-16 2xl:w-[74px] 2xl:h-[74px] flex-shrink-0 object-fill"
              />
              <span className="text-[#1F1E1E] text-lg sm:text-xl 2xl:text-[22px] font-bold">
                {impact.title}
              </span>
            </div>
            <span className="text-[#686767] text-base sm:text-lg 2xl:text-[21px] px-4 leading-relaxed">
              {impact.desc}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 self-stretch bg-neutral-50 max-w-[1584px] py-8 sm:py-10 md:py-12 2xl:py-[68px] px-4 sm:px-8 md:px-10 2xl:px-[97px] mx-auto rounded-3xl gap-4 sm:gap-6 md:gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-3">
            <span className="text-[#0B0B0B] text-2xl sm:text-3xl md:text-4xl 2xl:text-[47px] font-bold">
              {s.value}
            </span>
            <span className="text-[#686767] text-base sm:text-lg 2xl:text-xl text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
