import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Blog — AI Productivity Guides & Strategies',
  description: 'Expert guides, strategies, and insights for getting the most out of AI tools in your business.',
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://oneclickai.io' },
        { name: 'Blog', url: 'https://oneclickai.io/blog' },
      ]} />

      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white">Blog</h1>
          <p className="text-lg text-blue-200">Guides, strategies, and insights for AI-powered productivity.</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border border-border bg-surface p-8 transition-all hover:shadow-lg hover:border-accent/30">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">{post.category}</span>
                  <span className="text-xs text-text-muted">{post.readTime}</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-text group-hover:text-accent transition-colors">{post.title}</h2>
                <p className="mb-4 leading-relaxed text-text-muted">{post.excerpt}</p>
                <div className="text-sm text-text-muted">
                  <span>{post.author}</span> &middot; <span>{post.publishDate}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
