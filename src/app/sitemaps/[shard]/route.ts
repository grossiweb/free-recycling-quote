import { SITE_URL } from '@/lib/types'
import { services } from '@/lib/data/services'
import { materials } from '@/lib/data/materials'
import { industries } from '@/lib/data/industries'
import { locations } from '@/lib/data/locations'
import { challenges } from '@/lib/data/challenges'
import { getAllApprovedServiceLocations } from '@/lib/data/service-locations'
import { getAllApprovedServiceMaterials } from '@/lib/data/service-materials'
import { getAllApprovedServiceIndustries } from '@/lib/data/service-industries'
import { getAllApprovedTriples } from '@/lib/data/service-industry-locations'

type SitemapEntry = { url: string; changefreq: string; priority: number }

function buildSitemapXml(entries: SitemapEntry[]): string {
  const now = new Date().toISOString()
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `  <url>
    <loc>${SITE_URL}${e.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n')}
</urlset>`
}

function getShardEntries(shard: string): SitemapEntry[] {
  switch (shard) {
    case 'static':
      return [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.6 },
        { url: '/about/our-story', changefreq: 'monthly', priority: 0.5 },
        { url: '/about/why-choose-us', changefreq: 'monthly', priority: 0.5 },
        { url: '/about/esg', changefreq: 'monthly', priority: 0.5 },
        { url: '/about/our-impact', changefreq: 'monthly', priority: 0.5 },
        { url: '/about/certifications', changefreq: 'monthly', priority: 0.6 },
        { url: '/contact', changefreq: 'monthly', priority: 0.8 },
        { url: '/get-a-quote', changefreq: 'monthly', priority: 0.8 },
        { url: '/how-it-works', changefreq: 'monthly', priority: 0.6 },
        { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
        { url: '/terms', changefreq: 'yearly', priority: 0.3 },
      ]
    case 'services':
      return [
        { url: '/services', changefreq: 'weekly', priority: 0.9 },
        ...services.filter(s => s.isActive).flatMap(s => [
          { url: `/services/${s.slug}`, changefreq: 'weekly', priority: 0.9 },
          { url: `/services/${s.slug}/faqs`, changefreq: 'monthly', priority: 0.6 },
        ]),
      ]
    case 'materials':
      return [
        { url: '/materials', changefreq: 'weekly', priority: 0.8 },
        { url: '/materials/faqs', changefreq: 'monthly', priority: 0.5 },
        ...materials.filter(m => m.isActive).map(m => ({
          url: `/materials/${m.fullPath}`,
          changefreq: m.depth === 1 ? 'weekly' : 'monthly',
          priority: m.depth === 1 ? 0.8 : 0.7,
        })),
      ]
    case 'industries':
      return [
        { url: '/industries', changefreq: 'weekly', priority: 0.8 },
        { url: '/industries/faqs', changefreq: 'monthly', priority: 0.5 },
        ...industries.filter(i => i.isActive).map(i => ({
          url: `/industries/${i.fullPath}`,
          changefreq: i.depth === 1 ? 'weekly' : 'monthly',
          priority: i.depth === 1 ? 0.8 : 0.7,
        })),
      ]
    case 'locations':
      return [
        { url: '/locations', changefreq: 'monthly', priority: 0.7 },
        ...['usa', 'canada', 'uk', 'australia'].map(c => ({ url: `/locations/${c}`, changefreq: 'monthly', priority: 0.7 })),
        ...locations.filter(l => l.isActive).map(l => ({
          url: `/locations/${l.countryCode}/${l.slug}`,
          changefreq: 'monthly',
          priority: 0.7,
        })),
      ]
    case 'challenges':
      return [
        { url: '/challenges', changefreq: 'weekly', priority: 0.8 },
        { url: '/challenges/faqs', changefreq: 'monthly', priority: 0.6 },
        ...challenges.filter(c => c.isActive).flatMap(c => [
          { url: `/challenges/${c.slug}`, changefreq: 'weekly', priority: 0.8 },
          { url: `/challenges/${c.slug}/faqs`, changefreq: 'monthly', priority: 0.6 },
        ]),
      ]
    case 'resources':
      return [
        { url: '/resources', changefreq: 'weekly', priority: 0.6 },
        { url: '/resources/blog', changefreq: 'daily', priority: 0.6 },
        { url: '/resources/faq', changefreq: 'monthly', priority: 0.6 },
        { url: '/resources/videos', changefreq: 'monthly', priority: 0.4 },
      ]
    case 'service-location':
      return getAllApprovedServiceLocations().map(sl => ({
        url: `/${sl.serviceSlug}/${sl.locationSlug}`,
        changefreq: 'monthly',
        priority: 0.8,
      }))
    case 'service-material':
      return getAllApprovedServiceMaterials().map(sm => ({
        url: `/${sm.serviceSlug}/${sm.materialSlug}`,
        changefreq: 'monthly',
        priority: 0.7,
      }))
    case 'service-industry':
      return getAllApprovedServiceIndustries().map(si => ({
        url: `/${si.serviceSlug}/${si.industrySlug}`,
        changefreq: 'monthly',
        priority: 0.7,
      }))
    case 'triple':
      return getAllApprovedTriples().map(t => ({
        url: `/${t.serviceSlug}/${t.industrySlug}/${t.locationSlug}`,
        changefreq: 'monthly',
        priority: 0.7,
      }))
    case 'campaigns':
      return []
    default:
      return []
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ shard: string }> }
) {
  const { shard } = await params
  const entries = getShardEntries(shard)

  if (entries.length === 0) {
    return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: { 'Content-Type': 'application/xml' },
    })
  }

  return new Response(buildSitemapXml(entries), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
