import React from 'react'
import { notFound } from 'next/navigation'
import { getWordPressData } from '@/lib/wordpress'
import { GET_CONTENT_BY_SLUG, GET_PAGE, GET_ALL_PAGES } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import SubpageTemplate from '@/components/shared/SubpageTemplate'

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const data = await getWordPressData<any>(GET_ALL_PAGES)
    return (data?.pages?.nodes || [])
      .filter((page: any) => page.slug && page.slug !== 'home')
      .map((page: any) => ({
        slug: page.uri
          ? page.uri.split('/').filter(Boolean)
          : [page.slug],
      }))
  } catch {
    return []
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug: slugParts } = await params
  const slug = slugParts[slugParts.length - 1] // last segment

  let content = null
  let featuredImage = undefined
  let title = ''

  try {
    const data = await getWordPressData<any>(GET_CONTENT_BY_SLUG, { slug })
    const page = data?.pages?.nodes?.[0]
    const post = data?.posts?.nodes?.[0]
    if (page) { content = page.content || ''; title = page.title; featuredImage = page.featuredImage?.node }
    else if (post) { content = post.content || ''; title = post.title; featuredImage = post.featuredImage?.node }
  } catch {}

  if (!title && !content) {
    try {
      const fullSlug = slugParts.join('/')
      const data = await getWordPressData<any>(GET_PAGE, { id: `/${fullSlug}/`, idType: 'URI' })
      if (data?.page) {
        content = data.page.content || ''
        title = data.page.title || ''
        featuredImage = data.page.featuredImage?.node
      }
    } catch {}
  }
  const heroData = await fetchHeroDataByUri(`/${slugParts.join('/')}/`)

  if (!title) notFound()

  return (
    <SubpageTemplate
      title={title}
      content={content || undefined}
      featuredImage={featuredImage}
      heroData={heroData}
    />
  )
}
