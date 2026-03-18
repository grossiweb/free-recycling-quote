import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'

export const metadata: Metadata = {
  title: `Blog Post | ${COMPANY_NAME}`,
  description: 'Read the latest recycling insights and sustainability tips for businesses.',
  alternates: { canonical: `${SITE_URL}/resources/blog` },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  await params
  notFound()
}
