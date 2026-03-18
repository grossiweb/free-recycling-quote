import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { resolveTriple, getAllTripleParams } from '@/lib/data/resolvers'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'
import TripleTemplate from '@/components/templates/TripleTemplate'

export const revalidate = 3600

type Props = {
  params: Promise<{ serviceSlug: string; secondSlug: string; thirdSlug: string }>
}

export async function generateStaticParams() {
  return getAllTripleParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, secondSlug, thirdSlug } = await params
  const resolution = resolveTriple(serviceSlug, secondSlug, thirdSlug)
  if (!resolution) return {}

  const { service, industry, location } = resolution
  const title = `${service.name} for ${industry.name} in ${location.name} | ${COMPANY_NAME}`
  const description = `${service.name} solutions for ${industry.name.toLowerCase()} businesses in ${location.name}. Local expertise, compliance documentation, and free quotes.`
  const path = `/${serviceSlug}/${secondSlug}/${thirdSlug}`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: { title, description, url: `${SITE_URL}${path}` },
  }
}

export default async function TriplePage({ params }: Props) {
  const { serviceSlug, secondSlug, thirdSlug } = await params
  const resolution = resolveTriple(serviceSlug, secondSlug, thirdSlug)
  if (!resolution) notFound()

  return (
    <TripleTemplate
      service={resolution.service}
      industry={resolution.industry}
      location={resolution.location}
      junction={resolution.junction}
    />
  )
}
