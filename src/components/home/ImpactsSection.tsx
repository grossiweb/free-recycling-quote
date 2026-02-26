import React from 'react'
import Image from 'next/image'

const impacts = [
  {
    img: '/images/environmental.gif',
    title: 'Environmental',
    desc: "We maximize your company's recycling efforts to reduce environmental impact, including climate risks, emissions, and resource use.",
  },
  {
    img: '/images/social.gif',
    title: 'Social',
    desc: 'Our recycling solutions help companies build trust with stakeholders, employees, and communities while addressing health, safety, labor practices, and human rights.',
  },
  {
    img: '/images/governance.gif',
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
      <span className="font-display text-[#1F1E1E] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 2xl:mb-[60px] text-center">
        Impacts We Make
      </span>
      <div className="flex flex-col md:flex-row items-stretch self-stretch max-w-[1584px] mb-8 sm:mb-10 md:mb-14 2xl:mb-20 mx-auto gap-5 sm:gap-6">
        {impacts.map((impact) => (
          <div
            key={impact.title}
            className="flex flex-1 flex-col bg-white rounded-xl border border-gray-200 overflow-hidden"
            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
          >
            {/* Green top line */}
            <div className="w-full bg-[#4BE576] h-[2px]" />
            {/* Card content */}
            <div className="flex flex-col p-5 sm:p-6 2xl:p-8 gap-4 2xl:gap-6 flex-1">
              {/* Icon + Title row */}
              <div className="flex items-center gap-3">
                <Image
                  src={impact.img}
                  alt={impact.title}
                  width={40}
                  height={40}
                  unoptimized
                  className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 object-contain"
                />
                <span className="text-[#1F1E1E] text-base sm:text-lg 2xl:text-[18px] font-bold">
                  {impact.title}
                </span>
              </div>
              {/* Description */}
              <span className="text-[#686767] text-sm sm:text-base 2xl:text-[15px] leading-relaxed">
                {impact.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-stretch self-stretch bg-neutral-50 max-w-[1584px] py-8 sm:py-10 md:py-12 2xl:py-[68px] mx-auto rounded-2xl w-full divide-x divide-gray-200">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center gap-2 flex-1 px-3 sm:px-6 md:px-8">
            <span className="text-[#0B0B0B] text-xl sm:text-2xl md:text-3xl 2xl:text-[47px] font-bold text-center">
              {s.value}
            </span>
            <span className="text-[#686767] text-xs sm:text-sm md:text-base text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
