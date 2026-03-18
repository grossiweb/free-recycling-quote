import React from 'react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME, COMPANY_EMAIL } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Terms of Service | ${COMPANY_NAME}`,
  description: `Read the ${COMPANY_NAME} terms of service. Understand your rights and obligations when using our recycling services and website.`,
  alternates: { canonical: `${SITE_URL}/terms` },
}

export default function TermsPage() {
  return (
    <div>
      <section className="pt-5 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service', href: '/terms' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Terms of Service
          </h1>
          <p className="text-[17px] text-[#525252] max-w-[480px] mx-auto">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-lg max-w-none text-[#333] leading-[1.8]">

            <p className="text-base text-[#525252] leading-relaxed mb-8">
              Welcome to {COMPANY_NAME}. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              By accessing our website at {SITE_URL} or engaging our recycling services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">2. Service Description</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">
              {COMPANY_NAME} provides commercial recycling services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li>Recycling quote generation and program assessment</li>
              <li>Material pickup scheduling and coordination</li>
              <li>Certified recycling and material processing through our partner network</li>
              <li>Recycling certificates and compliance documentation</li>
              <li>ESG and sustainability reporting support</li>
            </ul>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              Service availability, pricing, and terms may vary based on your location, material types, and volumes.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">3. User Obligations</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">When using our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li>Provide accurate and complete information about your materials and business</li>
              <li>Comply with all applicable local, state, and federal laws regarding waste disposal and recycling</li>
              <li>Ensure that materials presented for recycling do not contain prohibited or hazardous substances not disclosed in advance</li>
              <li>Prepare materials for pickup according to agreed-upon guidelines</li>
              <li>Use our website and services only for lawful purposes</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">4. Quotes and Pricing</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              Quotes provided through our website or by our team are estimates based on the information you provide. Final pricing may vary based on actual material types, weights, and conditions assessed at the time of pickup. Quotes are valid for 30 days unless otherwise specified.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">5. Limitation of Liability</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              To the fullest extent permitted by law, {COMPANY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">6. Intellectual Property</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of {COMPANY_NAME} or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">7. Termination</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services ceases immediately. Any outstanding obligations, including payment for services rendered, shall survive termination.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">8. Indemnification</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              You agree to indemnify and hold harmless {COMPANY_NAME}, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, your violation of these terms, or your violation of any third-party rights.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">9. Governing Law</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Tarrant County, Texas.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">10. Changes to Terms</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Your continued use of our services following any changes constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">11. Contact</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-2">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-base text-[#525252] leading-relaxed">
              Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-[#2DB446] font-semibold hover:underline">{COMPANY_EMAIL}</a>
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  )
}
