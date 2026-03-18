import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import type { Service, Material, ServiceLocation, ServiceMaterial, ServiceIndustry, BreadcrumbItem } from '@/lib/types'
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '@/lib/types'
import {
  getServicesForMaterial,
  getLocationsForService,
} from '@/lib/data/resolvers'

interface ServiceMaterialTemplateProps {
  service: Service
  material: Material
  junction: ServiceLocation | ServiceMaterial | ServiceIndustry
}

export default function ServiceMaterialTemplate({ service, material, junction }: ServiceMaterialTemplateProps) {
  const relatedServices = getServicesForMaterial(material.slug)
  const locations = getLocationsForService(service.slug)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: service.name, href: `/services/${service.slug}` }, { label: material.name, href: `/${service.slug}/${material.slug}` }] satisfies BreadcrumbItem[]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {material.name} Recycling
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
            About {material.name} Recycling
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl">
            {material.description} Our {service.name.toLowerCase()} program provides a complete solution
            for {material.name.toLowerCase()} recycling, from initial assessment through pickup, processing,
            and certification. We ensure your {material.name.toLowerCase()} materials are handled in full
            compliance with all applicable regulations and diverted from landfills through responsible
            recycling channels. Every pickup includes documentation for your records, helping you meet
            sustainability targets and regulatory requirements.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href={`/services/${service.slug}`}
              className="text-primary font-semibold hover:underline"
            >
              Learn more about {service.name} &rarr;
            </Link>
            <Link
              href={`/materials/${material.fullPath}`}
              className="text-primary font-semibold hover:underline"
            >
              All about {material.name} recycling &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Accepted Items Section */}
      {material.acceptedItems && material.acceptedItems.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Accepted Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {material.acceptedItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4"
                >
                  <span className="text-primary font-bold text-lg">&#10003;</span>
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="py-16 px-4 border-t-4 border-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10 text-center">
            How {material.name} Recycling Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-gray-600">
                Describe the type and volume of {material.name.toLowerCase()} you need recycled. We will
                provide a free estimate tailored to your specific materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
              <p className="text-gray-600">
                We arrange pickup at your location with proper containers and equipment for safe
                handling of {material.name.toLowerCase()}.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Certificate</h3>
              <p className="text-gray-600">
                Receive a Certificate of Recycling documenting the compliant processing of your
                {' '}{material.name.toLowerCase()} materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              Services for {material.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relService) => (
                <Link
                  key={relService.slug}
                  href={`/${relService.slug}/${material.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{relService.icon}</div>
                  <h3 className="font-semibold text-[#1a1a1a] group-hover:text-primary transition-colors">
                    {relService.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{relService.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations Section */}
      {locations.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
              {material.name} Recycling Locations
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">
            Frequently Asked Questions About {material.name} Recycling
          </h2>
          {/* FAQ accordion will be rendered here */}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Free {material.name} Recycling Quote
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Ready to recycle your {material.name.toLowerCase()}? Contact us today for a free, no-obligation
            quote and start diverting waste from landfills.
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
