export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'anthropic-cowork-what-it-means-for-your-business',
    title: 'The $285 Billion AI Shakeup: What Anthropic Cowork Means for Your Business',
    excerpt: 'A single AI launch just wiped out $285B in software stocks. Here is what the Claude Cowork revolution actually means for small and mid-sized businesses — and how to adapt.',
    category: 'Analysis',
    author: 'OneClickAI Team',
    publishDate: '2026-02-06',
    readTime: '10 min read',
    featured: true,
  },
  {
    slug: 'top-10-ai-tools-small-business-2026',
    title: 'Top 10 AI Tools for Small Business Owners in 2026',
    excerpt: 'Cut through the hype. These are the AI tools that actually deliver ROI for small businesses.',
    category: 'Guides',
    author: 'OneClickAI Team',
    publishDate: '2026-01-28',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'how-to-calculate-roi-ai-tool-subscriptions',
    title: 'How to Calculate ROI on AI Tool Subscriptions',
    excerpt: 'Stop guessing whether your AI subscriptions are worth it. Use our framework to calculate the real return on every AI tool you pay for.',
    category: 'Strategy',
    author: 'OneClickAI Team',
    publishDate: '2026-01-22',
    readTime: '8 min read',
    featured: true,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
