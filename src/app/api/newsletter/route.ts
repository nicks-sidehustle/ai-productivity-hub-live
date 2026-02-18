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

    // Add contact to Brevo list
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [16], // OneclickAI list
        updateEnabled: true,
        attributes: {
          SOURCE: 'oneclickai',
        },
      }),
    });

    const isNew = response.ok || response.status === 204;
    const data = await response.json().catch(() => null);
    const isDuplicate = data?.code === 'duplicate_parameter';

    if (!isNew && !isDuplicate) {
      console.error('Brevo API error:', data);
      return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 });
    }

    // Send welcome email via Brevo transactional API
    if (isNew) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify({
            sender: { name: 'OneClickAI', email: 'nicks.sidehustle.2024@gmail.com' },
            to: [{ email }],
            subject: 'Welcome to the Weekly AI Tool Briefing \u{1F389}',
            htmlContent: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                <div style="text-align: center; margin-bottom: 32px;">
                  <div style="display: inline-block; background: #4361ee; color: white; width: 48px; height: 48px; line-height: 48px; border-radius: 12px; font-size: 24px; font-weight: bold;">1</div>
                  <h1 style="margin: 16px 0 0; color: #1a1a2e; font-size: 24px;">OneClickAI</h1>
                </div>
                <h2 style="color: #1a1a2e; font-size: 22px; text-align: center;">Welcome aboard! \u{1F680}</h2>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                  Thanks for subscribing to the <strong>Weekly AI Tool Briefing</strong>. Every Tuesday, you'll get:
                </p>
                <ul style="color: #4b5563; font-size: 16px; line-height: 1.8; padding-left: 20px;">
                  <li>\u{1F4CA} <strong>New tool reviews</strong> with honest, data-driven analysis</li>
                  <li>\u{1F4B0} <strong>Deal alerts</strong> on AI tool discounts and free trials</li>
                  <li>\u{1F4A1} <strong>Productivity tips</strong> to get more from your AI subscriptions</li>
                  <li>\u{1F3AF} <strong>ROI insights</strong> so you know which tools are worth it</li>
                </ul>
                <div style="text-align: center; margin: 32px 0;">
                  <a href="https://oneclickai.io/reviews" style="display: inline-block; background: #4361ee; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">Browse Our Latest Reviews</a>
                </div>
                <p style="color: #9ca3af; font-size: 13px; text-align: center; margin-top: 40px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                  You're receiving this because you subscribed at <a href="https://oneclickai.io" style="color: #4361ee;">oneclickai.io</a>.<br>
                  <a href="https://oneclickai.io/unsubscribe" style="color: #9ca3af;">Unsubscribe</a>
                </p>
              </div>
            `,
          }),
        });
      } catch (emailErr) {
        // Don't fail the subscription if welcome email fails
        console.error('Welcome email error:', emailErr);
      }
    }

    if (isDuplicate) {
      return NextResponse.json({ success: true, message: 'You are already subscribed!' });
    }

    return NextResponse.json({ success: true, message: 'Successfully subscribed! Check your inbox for a welcome email.' });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
