import { NextRequest, NextResponse } from 'next/server'

const WP_GRAPHQL_URL =
  process.env.WORDPRESS_API_URL ||
  'https://wordpress-706211-6239132.cloudwaysapps.com/graphql'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ errors: [{ message: 'GraphQL proxy error' }] }, { status: 500 })
  }
}
