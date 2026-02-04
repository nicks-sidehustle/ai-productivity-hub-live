import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return NextResponse.json({ error: 'Newsletter service is temporarily unavailable.' }, { status: 500 });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
        attributes: {
          SOURCE: 'oneclickai',
        },
      }),
    });

    if (response.ok || response.status === 204) {
      return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
    }

    const data = await response.json().catch(() => null);

    if (data?.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true, message: 'You are already subscribed!' });
    }

    console.error('Brevo API error:', data);
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
