import { MetadataRoute } from 'next'
import { getWordPressData } from '@/lib/wordpress'
import { GET_ALL_PAGES, GET_POSTS } from '@/lib/queries'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://freerecyclingquote.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    '/services',
    '/services/pallet-recycling',
    '/services/business-recycling-programs',
    '/services/material-recycling-solutions',
    '/services/consumer-take-back-programs',
    '/services/collection-events',
    '/industries',
    '/industries/retail',
    '/industries/manufacturing',
    '/industries/distribution-logistics',
    '/industries/construction',
    '/industries/schools-government',
    '/industries/other-industries',
    '/materials',
    '/materials/electronics',
    '/materials/metal',
    '/materials/paper',
    '/materials/plastic',
    '/materials/cell-phones',
    '/materials/clothing-textile',
    '/materials/organics',
    '/materials/chemicals',
    '/materials/batteries',
    '/materials/light-bulbs',
    '/materials/pallets',
    '/materials/hazardous-materials',
    '/resources',
    '/resources/blog',
    '/resources/faq',
    '/resources/videos',
    '/about',
    '/about/our-story',
    '/about/why-choose-us',
    '/about/esg-sustainability',
    '/about/our-impact',
    '/contact',
    '/schedule-pickup',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  // Dynamic blog posts from WP
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const data = await getWordPressData<any>(GET_POSTS, { first: 200 })
    blogRoutes = (data?.posts?.nodes || []).map((post: any) => ({
      url: `${BASE_URL}/resources/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch {}

  return [...staticRoutes, ...blogRoutes]
}
