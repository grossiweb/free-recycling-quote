import { SITE_URL } from '@/lib/types'

const SHARDS = [
  'static', 'services', 'materials', 'industries',
  'locations', 'challenges', 'resources',
  'service-location', 'service-material',
  'service-industry', 'triple', 'campaigns',
]

export async function GET() {
  const now = new Date().toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SHARDS.map(shard => `  <sitemap>
    <loc>${SITE_URL}/sitemaps/${shard}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
