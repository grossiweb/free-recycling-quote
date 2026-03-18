import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { resolveIntersection, getAllIntersectionParams } from '@/lib/data/resolvers'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import type { Location, Material, Industry } from '@/lib/types'
import ServiceLocationTemplate from '@/components/templates/ServiceLocationTemplate'
import ServiceMaterialTemplate from '@/components/templates/ServiceMaterialTemplate'
import ServiceIndustryTemplate from '@/components/templates/ServiceIndustryTemplate'

export const revalidate = 3600

type Props = {
  params: Promise<{ serviceSlug: string; secondSlug: string }>
}

export async function generateStaticParams() {
  return getAllIntersectionParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, secondSlug } = await params
  const resolution = resolveIntersection(serviceSlug, secondSlug)
  if (!resolution) return {}

  const { type, service, entity } = resolution
  let title = ''
  let description = ''
  const path = `/${serviceSlug}/${secondSlug}`

  switch (type) {
    case 'location': {
      const loc = entity as Location
      title = `${service.name} in ${loc.name} | Free Quotes & Pickup`
      description = `Free ${service.name.toLowerCase()} in ${loc.name}. Certified pickup, competitive pricing, and compliance documentation. Get a quote in 24 hours.`
      break
    }
    case 'material': {
      const mat = entity as Material
      title = `${mat.name} Recycling | ${service.name}`
      description = `Professional ${mat.name.toLowerCase()} recycling through our ${service.name.toLowerCase()} service. Free quotes, certified processing, and compliance documentation.`
      break
    }
    case 'industry': {
      const ind = entity as Industry
      title = `${service.name} for ${ind.name} | ${COMPANY_NAME}`
      description = `${service.name} solutions tailored for the ${ind.name.toLowerCase()} industry. Compliance documentation, certified recycling, and free quotes.`
      break
    }
  }

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: { title, description, url: `${SITE_URL}${path}` },
  }
}

export default async function IntersectionPage({ params }: Props) {
  const { serviceSlug, secondSlug } = await params
  const resolution = resolveIntersection(serviceSlug, secondSlug)
  if (!resolution) notFound()

  const { type, service, entity, junction } = resolution

  switch (type) {
    case 'location':
      return <ServiceLocationTemplate service={service} location={entity as Location} junction={junction} />
    case 'material':
      return <ServiceMaterialTemplate service={service} material={entity as Material} junction={junction} />
    case 'industry':
      return <ServiceIndustryTemplate service={service} industry={entity as Industry} junction={junction} />
    default:
      notFound()
  }
}
