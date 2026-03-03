import type { HeroData } from './types'

const WORDPRESS_API_URL =
  process.env.WORDPRESS_API_URL ||
  'https://wordpress-706211-6239132.cloudwaysapps.com/graphql'

const HERO_QUERY_BY_SLUG = `
  query GetHeroBySlug($slug: String!) {
    pages(where: { name: $slug }) {
      nodes {
        heroSection {
          heroSubtitle
          heroDescription
          heroBackgroundType
          heroBackgroundImage {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

const HERO_QUERY_BY_URI = `
  query GetHeroByUri($id: ID!) {
    page(id: $id, idType: URI) {
      heroSection {
        heroSubtitle
        heroDescription
        heroBackgroundType
        heroBackgroundImage {
          sourceUrl
          altText
        }
      }
    }
  }
`

function parseHeroSection(hero: any): HeroData {
  if (!hero) return {}

  const data: HeroData = {}

  if (hero.heroSubtitle) data.subtitle = hero.heroSubtitle
  if (hero.heroDescription) data.description = hero.heroDescription

  if (hero.heroBackgroundType && ['gradient', 'image', 'dark'].includes(hero.heroBackgroundType)) {
    data.backgroundType = hero.heroBackgroundType as HeroData['backgroundType']
  }

  const img = hero.heroBackgroundImage
  if (img?.sourceUrl) {
    data.backgroundImage = { sourceUrl: img.sourceUrl, altText: img.altText || '' }
  }

  return data
}

/**
 * Fetch hero section ACF data for a page by slug.
 * Uses its own GraphQL query so it never breaks the main content fetch.
 * Returns empty object if ACF is not installed or fields are empty.
 */
export async function fetchHeroData(slug: string): Promise<HeroData> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: HERO_QUERY_BY_SLUG, variables: { slug } }),
      next: { revalidate: 60 },
    })
    if (!res.ok) return {}
    const json = await res.json()
    const hero = json.data?.pages?.nodes?.[0]?.heroSection
    return parseHeroSection(hero)
  } catch {
    return {}
  }
}

/**
 * Fetch hero section ACF data for a page by URI (e.g. "/services/").
 * Used by hub pages that fetch by URI instead of slug.
 */
export async function fetchHeroDataByUri(uri: string): Promise<HeroData> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: HERO_QUERY_BY_URI, variables: { id: uri } }),
      next: { revalidate: 60 },
    })
    if (!res.ok) return {}
    const json = await res.json()
    const hero = json.data?.page?.heroSection
    return parseHeroSection(hero)
  } catch {
    return {}
  }
}
