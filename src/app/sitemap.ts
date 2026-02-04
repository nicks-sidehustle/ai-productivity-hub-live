import type { MetadataRoute } from 'next';
import { tools } from '@/data/tools';
import { blogPosts } from '@/data/blog';
import { comparisons } from '@/data/comparisons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oneclickai.io';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/newsletter`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const reviewPages = tools.map((tool) => ({
    url: `${baseUrl}/reviews/${tool.slug}`,
    lastModified: new Date(tool.reviewDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const comparePages = comparisons.map((comp) => ({
    url: `${baseUrl}/compare/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...reviewPages, ...blogPages, ...comparePages];
}
