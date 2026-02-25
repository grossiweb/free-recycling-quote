import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, message, materials, pickupDate, address, type } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // Try Gravity Forms if configured
    const gfBaseUrl = process.env.GRAVITY_FORMS_BASE_URL
    const gfFormId = process.env.GRAVITY_FORMS_FORM_ID
    const gfUser = process.env.GRAVITY_FORMS_API_USERNAME
    const gfPass = process.env.GRAVITY_FORMS_API_PASSWORD

    if (gfBaseUrl && gfFormId && gfUser && gfPass) {
      const formBody: Record<string, string> = {
        '1': name,
        '2': email,
        '3': phone || '',
        '4': company || '',
        '5': [
          type === 'pickup' ? `SCHEDULE PICKUP REQUEST` : `QUOTE REQUEST`,
          address ? `Address: ${address}` : '',
          pickupDate ? `Pickup Date: ${pickupDate}` : '',
          materials ? `Materials: ${materials}` : '',
          message ? `Notes: ${message}` : '',
        ].filter(Boolean).join('\n'),
      }

      const credentials = Buffer.from(`${gfUser}:${gfPass}`).toString('base64')
      const gfRes = await fetch(`${gfBaseUrl}/wp-json/gf/v2/forms/${gfFormId}/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify({ input_values: formBody }),
      })

      if (gfRes.ok) {
        return NextResponse.json({ success: true })
      }
    }

    // Fallback: log to console (replace with email service in production)
    console.log('Contact form submission:', { name, email, phone, company, message, materials, type })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
