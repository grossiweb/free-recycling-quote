import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'

export const metadata: Metadata = {
  title: `About | ${COMPANY_NAME}`,
  description: `Learn more about ${COMPANY_NAME}.`,
  alternates: { canonical: `${SITE_URL}/about` },
}

export default async function AboutSubpage({ params }: { params: Promise<{ slug: string }> }) {
  await params
  notFound()
}
