import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    // Revalidate based on post type
    const { post_type, post_name } = body

    if (post_type === 'post') {
      revalidatePath(`/resources/blog/${post_name}`)
      revalidatePath('/resources/blog')
    } else if (post_type === 'page') {
      revalidatePath(`/${post_name}`)
    }

    // Always revalidate home
    revalidatePath('/')

    return NextResponse.json({ revalidated: true, timestamp: Date.now() })
  } catch {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
