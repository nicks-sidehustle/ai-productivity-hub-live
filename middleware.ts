import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const affiliateLinks: Record<string, string> = {
  'chatgpt': 'https://chat.openai.com/',
  'claude': 'https://claude.ai/',
  'notion': 'https://www.notion.so/',
  'copilot': 'https://github.com/features/copilot',
  'midjourney': 'https://www.midjourney.com/',
  'perplexity': 'https://www.perplexity.ai/',
  'grammarly': 'https://www.grammarly.com/',
  'zapier': 'https://zapier.com/',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith('/go/')) return NextResponse.next();

  const slug = pathname.replace('/go/', '').toLowerCase();
  const destination = affiliateLinks[slug];

  if (!destination) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const url = new URL(destination);
  
  // Preserve UTM params
  request.nextUrl.searchParams.forEach((value, key) => {
    if (key.startsWith('utm_')) url.searchParams.set(key, value);
  });

  return NextResponse.redirect(url, { status: 302 });
}

export const config = {
  matcher: '/go/:slug*',
};
