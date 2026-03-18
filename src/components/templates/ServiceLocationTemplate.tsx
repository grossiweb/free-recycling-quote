import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import type { Service, Material, Industry, Location, ServiceLocation, ServiceMaterial, ServiceIndustry, BreadcrumbItem } from '@/lib/types'
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '@/lib/types'
import {
  getMaterialsForService,
  getIndustriesForService,
  getSiblingServiceLocations,
} from '@/lib/data/resolvers'

interface ServiceLocationTemplateProps {
  service: Service
  location: Location
  junction: ServiceLocation | ServiceMaterial | ServiceIndustry
}

export default function ServiceLocationTemplate({ service, location, junction }: ServiceLocationTemplateProps) {
  const materials = getMaterialsForService(service.slug)
  const industries = getIndustriesForService(service.slug)
  const siblings = getSiblingServiceLocations(service.slug, location.slug)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: service.name, href: `/services/${service.slug}` }, { label: location.name, href: `/${service.slug}/${location.slug}` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.name} in {location.name}
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
            {service.name} Services in {location.name}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            Our {service.name.toLowerCase()} services in {location.name} provide businesses and organizations
            with reliable, compliant recycling solutions tailored to local needs. Whether you are a small
            office or a large-scale operation, we connect you with certified recycling partners in the{' '}
            {location.name} area to ensure your materials are handled responsibly and in full compliance
            with local and federal regulations. From pickup scheduling to certificate of recycling
            documentation, our {location.name} {service.name.toLowerCase()} program covers the full lifecycle
            of your recyclable materials. We work with facilities across the {location.region} region to
            maximize diversion rates and minimize your environmental footprint.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href={`/services/${service.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              Learn more about our {service.name} services &rarr;
            </Link>
            <Link
              href={`/locations/${location.countryCode}/${location.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              See all recycling services in {location.name} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Handled Section */}
      {materials.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Materials We Handle</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <Link
                  key={material.slug}
                  href={`/materials/${material.fullPath}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{material.icon}</div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{material.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries in City Section */}
      {industries.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              Industries We Serve in {location.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.fullPath}`}
                  className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                >
                  <span className="text-2xl">{industry.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{industry.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Services in City Section */}
      {siblings.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              Other Services in {location.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siblings.map(({ service: siblingService }) => (
                <Link
                  key={siblingService.slug}
                  href={`/${siblingService.slug}/${location.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{siblingService.icon}</div>
                  <h3 className="font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors">
                    {siblingService.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{siblingService.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-16 px-4 border-t-4 border-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-gray-600">
                Tell us about your {service.name.toLowerCase()} needs in {location.name}. We will provide a
                free, no-obligation quote within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
              <p className="text-gray-600">
                Choose a convenient date and time. Our certified team in the {location.name} area will
                arrive on schedule with the right equipment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Certificate</h3>
              <p className="text-gray-600">
                Receive a Certificate of Recycling confirming compliant disposal, suitable for your
                records and compliance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Frequently Asked Questions About {service.name} in {location.name}
          </h2>
          {/* FAQ accordion will be rendered here */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free {service.name} Quote in {location.name}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to get started? Contact us today for a free, no-obligation quote for {service.name.toLowerCase()} services
            in {location.name}.
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
