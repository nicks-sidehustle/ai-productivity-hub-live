import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { blogContent } from '@/data/blog-content';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import EmailCapture from '@/components/EmailCapture';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const content = blogContent[slug] || '';
  const paragraphs = content.trim().split('\n').filter(Boolean);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        publishDate={post.publishDate}
        url={`https://oneclickai.io/blog/${post.slug}`}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://oneclickai.io' },
        { name: 'Blog', url: 'https://oneclickai.io/blog' },
        { name: post.title, url: `https://oneclickai.io/blog/${post.slug}` },
      ]} />

      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-sm text-blue-300">
            <Link href="/blog" className="hover:text-white">&larr; Blog</Link>
          </div>
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-blue-200">{post.category}</span>
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>{post.author}</span>
            <span>&middot;</span>
            <span>{post.publishDate}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((p, i) => {
            const trimmed = p.trim();
            if (trimmed.startsWith('## ')) {
              return <h2 key={i} className="mb-4 mt-10 text-2xl font-bold text-text">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={i} className="mb-3 mt-8 text-xl font-bold text-text">{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- ')) {
              return <li key={i} className="ml-6 text-text-muted">{trimmed.replace('- ', '')}</li>;
            }
            if (!trimmed) return null;
            return <p key={i} className="mb-4 leading-relaxed text-text-muted" dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.+?)\*\*/g, '<strong class="text-text">$1</strong>') }} />;
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-surface-alt p-8">
          <EmailCapture />
        </div>

        <div className="mt-8 rounded-xl bg-surface-alt p-4">
          <p className="text-xs leading-relaxed text-text-muted">
            <strong>Disclosure:</strong> This article contains affiliate links. We may earn a commission if you make a purchase through our links, at no additional cost to you.
            <Link href="/affiliate-disclosure" className="ml-1 text-accent hover:underline">Learn more</Link>
          </p>
        </div>
      </article>
    </>
  );
}
