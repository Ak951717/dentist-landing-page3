import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, date, message } = body

    if (!name || !email || !phone || !date) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('[Appointment] New appointment request:', {
      name,
      email,
      phone,
      date,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment request received. We will contact you shortly.',
        data: {
          name,
          email,
          date,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Appointment] Error:', error)
    return NextResponse.json(
      { error: 'Failed to process appointment request' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Appointment endpoint. Use POST to submit appointment requests.' },
    { status: 200 }
  )
}
