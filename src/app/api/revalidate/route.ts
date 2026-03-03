import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Map page slugs to their parent routes for nested page revalidation
const PARENT_ROUTES: Record<string, string> = {
  // Services subpages
  'pallet-recycling': '/services',
  'business-recycling-programs': '/services',
  'material-recycling-solutions': '/services',
  'consumer-take-back-programs': '/services',
  'collection-events': '/services',
  'junk-removal': '/services',
  'dumpster-rental': '/services',
  'product-destruction': '/services',
  'shredding-service': '/services',
  'waste-to-energy': '/services',
  'janitorial-service': '/services',
  // Industries subpages
  'retail': '/industries',
  'manufacturing': '/industries',
  'distribution-logistics': '/industries',
  'construction': '/industries',
  'schools-government': '/industries',
  'other-industries': '/industries',
  // Materials subpages
  'electronics': '/materials',
  'metal': '/materials',
  'paper': '/materials',
  'plastic': '/materials',
  'cell-phones': '/materials',
  'clothing-textile': '/materials',
  'organics': '/materials',
  'chemicals': '/materials',
  'vehicle': '/materials',
  'junk': '/materials',
  'pallets': '/materials',
  'light-bulbs': '/materials',
  'batteries': '/materials',
  'hazardous-materials': '/materials',
  // About subpages
  'our-story': '/about',
  'why-choose-us': '/about',
  'esg-sustainability': '/about',
  'our-impact': '/about',
  // Resources subpages
  'blog': '/resources',
  'faq': '/resources',
  'videos': '/resources',
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { post_type, post_name, uri } = body
    const revalidated: string[] = []

    if (post_type === 'post') {
      revalidatePath(`/resources/blog/${post_name}`)
      revalidatePath('/resources/blog')
      revalidated.push(`/resources/blog/${post_name}`, '/resources/blog')
    } else if (post_type === 'page') {
      // If WordPress sends the full URI, use it directly
      if (uri) {
        const cleanUri = uri.replace(/^\/|\/$/g, '')
        revalidatePath(`/${cleanUri}`)
        revalidated.push(`/${cleanUri}`)
      }

      // Also resolve using the parent route map
      const parent = PARENT_ROUTES[post_name]
      if (parent) {
        revalidatePath(`${parent}/${post_name}`)
        revalidatePath(parent)
        revalidated.push(`${parent}/${post_name}`, parent)
      } else {
        // Top-level page (services, industries, materials, about, contact, etc.)
        revalidatePath(`/${post_name}`)
        revalidated.push(`/${post_name}`)
      }
    }

    // Always revalidate home
    revalidatePath('/')
    revalidated.push('/')

    return NextResponse.json({ revalidated: true, paths: revalidated, timestamp: Date.now() })
  } catch {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
