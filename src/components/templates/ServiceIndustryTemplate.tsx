import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import type { Service, Industry, ServiceLocation, ServiceMaterial, ServiceIndustry, BreadcrumbItem } from '@/lib/types'
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '@/lib/types'
import {
  getMaterialsForService,
  getLocationsForService,
} from '@/lib/data/resolvers'
import { getChallengesForService } from '@/lib/data/challenges'

interface ServiceIndustryTemplateProps {
  service: Service
  industry: Industry
  junction: ServiceLocation | ServiceMaterial | ServiceIndustry
}

export default function ServiceIndustryTemplate({ service, industry, junction }: ServiceIndustryTemplateProps) {
  const challenges = getChallengesForService(service.slug)
  const materials = getMaterialsForService(service.slug)
  const locations = getLocationsForService(service.slug)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: service.name, href: `/services/${service.slug}` }, { label: industry.name, href: `/${service.slug}/${industry.slug}` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.name} for {industry.name}
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
            {service.name} for the {industry.name} Industry
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-4xl">
            {industry.description} Our {service.name.toLowerCase()} solutions are specifically designed for
            the {industry.name.toLowerCase()} sector, addressing the unique waste streams, compliance
            requirements, and operational constraints your organization faces. We partner with certified
            facilities to ensure every material is processed responsibly and in full regulatory compliance.
          </p>
          {industry.complianceNotes && (
            <div className="bg-green-50 border-l-4 border-primary rounded-r-lg p-4 mb-6 max-w-4xl">
              <p className="text-sm font-semibold text-[#1a1a1a] mb-1">Compliance Note</p>
              <p className="text-sm text-gray-700">{industry.complianceNotes}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href={`/services/${service.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              Learn more about {service.name} &rarr;
            </Link>
            <Link
              href={`/industries/${industry.fullPath}`}
              className="text-primary font-semibold hover:underline"
            >
              More about {industry.name} recycling &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      {challenges.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              Challenges We Solve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challenges.map((challenge) => (
                <Link
                  key={challenge.slug}
                  href={`/challenges/${challenge.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{challenge.icon}</span>
                    <div>
                      <h3 className="font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors">
                        {challenge.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{challenge.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Materials Section */}
      {materials.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              Materials We Handle
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <Link
                  key={material.slug}
                  href={`/materials/${material.fullPath}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{material.icon}</div>
                  <h3 className="font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{material.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations Section */}
      {locations.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              Available Locations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {locations.slice(0, 12).map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${service.slug}/${loc.slug}`}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-sm transition-all text-center group"
                >
                  <span className="font-medium text-[#1a1a1a] group-hover:text-primary transition-colors">
                    {loc.name}
                  </span>
                  {loc.state && (
                    <span className="block text-xs text-gray-500 mt-1">{loc.state}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Frequently Asked Questions About {service.name} for {industry.name}
          </h2>
          {/* FAQ accordion will be rendered here */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free {service.name} Quote for {industry.name}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Serving the {industry.name.toLowerCase()} industry with tailored recycling solutions.
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
