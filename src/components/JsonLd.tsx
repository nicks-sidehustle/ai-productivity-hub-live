export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OneClickAI',
    url: 'https://oneclickai.io',
    logo: 'https://oneclickai.io/logo.png',
    description: 'Your trusted guide to AI productivity tools. Honest reviews, real ROI analysis, and implementation guides.',
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ProductReviewJsonLd({
  name, description, rating, reviewBody, price, currency = 'USD', url,
}: {
  name: string; description: string; rating: number; reviewBody: string; price: string; currency?: string; url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: rating, bestRating: 5 },
      author: { '@type': 'Organization', name: 'OneClickAI' },
      reviewBody,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      bestRating: 5,
      ratingCount: 1,
    },
    offers: {
      '@type': 'Offer',
      price: price.replace('$', ''),
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ArticleJsonLd({
  title, description, publishDate, url,
}: {
  title: string; description: string; publishDate: string; url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishDate,
    author: { '@type': 'Organization', name: 'OneClickAI' },
    publisher: {
      '@type': 'Organization',
      name: 'OneClickAI',
      logo: { '@type': 'ImageObject', url: 'https://oneclickai.io/logo.png' },
    },
    url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
