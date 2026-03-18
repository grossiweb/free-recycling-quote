import React from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Our Certifications | ${COMPANY_NAME}`,
  description: `${COMPANY_NAME} partners hold R2, e-Stewards, ISO 14001, ISO 9001, EPA, and NAID AAA certifications. Learn what each certification means for your business.`,
  alternates: { canonical: `${SITE_URL}/about/certifications` },
}

const certifications = [
  {
    name: 'R2 (Responsible Recycling)',
    icon: 'verified',
    description: 'R2 is the leading global standard for electronics recyclers. It ensures responsible handling of used electronics through proper data destruction, environmental management, and worker health and safety practices. R2-certified facilities meet rigorous requirements for tracking materials through the recycling chain.',
    why: 'Guarantees your electronics are processed by facilities that meet the highest industry standards for environmental responsibility and data security.',
  },
  {
    name: 'e-Stewards',
    icon: 'shield',
    description: 'e-Stewards certification represents the gold standard for ethical electronics recycling. It prohibits the export of hazardous e-waste to developing countries and requires the highest level of environmental and social accountability. e-Stewards certified recyclers undergo rigorous third-party audits.',
    why: 'Ensures your e-waste never ends up in landfills or gets exported to countries without proper processing infrastructure.',
  },
  {
    name: 'ISO 14001',
    icon: 'eco',
    description: 'ISO 14001 is the international standard for environmental management systems. Certified organizations demonstrate a systematic approach to managing environmental impacts, reducing waste, and improving resource efficiency. It requires continuous improvement in environmental performance.',
    why: 'Confirms our partners maintain comprehensive environmental management systems that are regularly audited and continuously improved.',
  },
  {
    name: 'ISO 9001',
    icon: 'workspace_premium',
    description: 'ISO 9001 is the world&apos;s most recognized quality management standard. It ensures organizations consistently provide products and services that meet customer and regulatory requirements. Certified organizations demonstrate effective processes, documentation, and continuous improvement.',
    why: 'Ensures consistent service quality, reliable documentation, and a commitment to meeting your requirements every time.',
  },
  {
    name: 'EPA Compliant',
    icon: 'policy',
    description: 'Full compliance with all U.S. Environmental Protection Agency regulations for waste handling, transport, and processing. This includes adherence to RCRA (Resource Conservation and Recovery Act) requirements, proper hazardous waste management, and accurate reporting to federal and state environmental agencies.',
    why: 'Protects your business from regulatory liability by ensuring all materials are handled in full compliance with federal environmental law.',
  },
  {
    name: 'NAID AAA',
    icon: 'lock',
    description: 'NAID AAA Certification is the most widely recognized certification for data destruction. It verifies that organizations handling sensitive information meet strict security standards for physical and digital media destruction. Certified companies undergo unannounced audits to ensure ongoing compliance.',
    why: 'Provides the highest assurance that sensitive business data on retired electronics and media is completely and irreversibly destroyed.',
  },
]

export default function CertificationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-0 pb-16 text-center bg-gradient-to-br from-white via-white to-[#e8f5eb]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Certifications', href: '/about/certifications' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Our Certifications
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[560px] mx-auto">
            We partner exclusively with certified recycling facilities. Every certification listed here represents a commitment to responsible, audited, and accountable recycling.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-8 border border-[#ebebeb] rounded-xl bg-white hover:border-[#2DB446] transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#e8f5eb] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px] text-[#2DB446]">{cert.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold">{cert.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-[#525252] leading-relaxed mb-4">{cert.description}</p>
                <div className="p-4 bg-[#f7faf8] rounded-lg border border-[#e8f5eb]">
                  <p className="text-xs font-bold text-[#2DB446] uppercase tracking-wider mb-1">Why It Matters</p>
                  <p className="text-sm text-[#525252] leading-relaxed">{cert.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-[28px] font-extrabold mb-4">Your Compliance, Our Responsibility</h2>
          <p className="text-base text-[#525252] leading-relaxed mb-8">
            When you work with {COMPANY_NAME}, you get full documentation and chain-of-custody records for every pickup. Our certifications are your assurance that materials are handled properly from collection to final processing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2DB446] text-white font-semibold text-[15px] rounded-full transition-all hover:bg-[#1a8a34] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,180,70,.3)]">
              Get a Certified Quote
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link href="/about/why-choose-us" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#2DB446] text-[#2DB446] font-semibold text-[15px] rounded-full transition-all hover:bg-[#2DB446] hover:text-white hover:-translate-y-0.5">
              Why Choose Us
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
