import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import type { Service, Industry, Location, ServiceIndustryLocation, BreadcrumbItem } from '@/lib/types'
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '@/lib/types'

interface TripleTemplateProps {
  service: Service
  industry: Industry
  location: Location
  junction: ServiceIndustryLocation
}

export default function TripleTemplate({ service, industry, location, junction }: TripleTemplateProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: service.name, href: `/services/${service.slug}` }, { label: industry.name, href: `/${service.slug}/${industry.slug}` }, { label: location.name, href: `/${service.slug}/${industry.slug}/${location.slug}` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.name} for {industry.name} in {location.name}
          </h1>
          {junction.contentAngle && (
            <p className="text-lg text-gray-300 max-w-3xl mb-8">
              {junction.contentAngle}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
            <Link
              href="/schedule-pickup"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">
            {service.name} for {industry.name} in {location.name}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            {junction.contentAngle} Our team provides specialized {service.name.toLowerCase()} solutions
            for {industry.name.toLowerCase()} organizations in the {location.name} area. We understand the
            unique waste management challenges faced by the {industry.name.toLowerCase()} sector in this
            region and connect you with certified local recycling partners to ensure full regulatory
            compliance and maximum diversion rates.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href={`/services/${service.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              About {service.name} &rarr;
            </Link>
            <Link
              href={`/industries/${industry.fullPath}`}
              className="text-primary font-semibold hover:underline"
            >
              {industry.name} recycling solutions &rarr;
            </Link>
            <Link
              href={`/locations/${location.countryCode}/${location.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              Recycling in {location.name} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Related Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`/${service.slug}/${location.slug}`}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors mb-2">
                {service.name} in {location.name}
              </h3>
              <p className="text-sm text-gray-600">
                View all {service.name.toLowerCase()} services available in {location.name} across all industries.
              </p>
            </Link>
            <Link
              href={`/${service.slug}/${industry.slug}`}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
            >
              <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors mb-2">
                {service.name} for {industry.name}
              </h3>
              <p className="text-sm text-gray-600">
                Explore {service.name.toLowerCase()} solutions tailored for the {industry.name.toLowerCase()} industry nationwide.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Frequently Asked Questions
          </h2>
          {/* FAQ accordion will be rendered here */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free {service.name} Quote for {industry.name} in {location.name}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Specialized recycling solutions for {industry.name.toLowerCase()} organizations in {location.name}.
            Contact us today for a free, no-obligation quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href={COMPANY_PHONE_TEL}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Call {COMPANY_PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
