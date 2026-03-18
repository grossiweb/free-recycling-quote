import React from 'react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import FinalCTA from '@/components/shared/FinalCTA'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME, COMPANY_EMAIL } from '@/lib/types'
import type { BreadcrumbItem } from '@/lib/types'

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_NAME}`,
  description: `Read the ${COMPANY_NAME} privacy policy. Learn how we collect, use, and protect your personal information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
}

export default function PrivacyPage() {
  return (
    <div>
      <section className="pt-5 pb-10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy' }] satisfies BreadcrumbItem[]} />
          <h1 className="text-[44px] md:text-4xl sm:text-[28px] font-extrabold mb-3">
            Privacy Policy
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
              {COMPANY_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our website visitors and clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">1. Information We Collect</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you submit a form or contact us.</li>
              <li><strong>Business Information:</strong> Material types, volumes, locations, and other details related to your recycling needs.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and pages visited on our site.</li>
              <li><strong>Cookies and Tracking:</strong> Data collected through cookies, web beacons, and similar technologies.</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li>Provide, operate, and maintain our recycling services</li>
              <li>Process and respond to your quote requests and inquiries</li>
              <li>Send you service-related communications and updates</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
              <li>Analyze usage trends to enhance site functionality</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">3. Data Security</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include SSL encryption, secure data storage, access controls, and regular security audits. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li><strong>Essential Cookies:</strong> Required for basic site functionality such as navigation and form submissions.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve our content and services.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.</li>
            </ul>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">5. Third-Party Sharing</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li><strong>Service Providers:</strong> Trusted partners who help us operate our business, such as payment processors, email services, and analytics providers.</li>
              <li><strong>Recycling Partners:</strong> Certified recycling facilities in our network who fulfill your service requests.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation.</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">6. Your Rights</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-[#525252] mb-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">7. Data Retention</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, it is securely deleted or anonymized.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              Our services are intended for businesses and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">9. Changes to This Policy</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-[22px] font-bold text-[#1a1a1a] mt-10 mb-4">10. Contact Us</h2>
            <p className="text-base text-[#525252] leading-relaxed mb-2">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
