import Link from 'next/link';
import ToolCard from '@/components/ToolCard';
import CategoryNav from '@/components/CategoryNav';
import EmailCapture from '@/components/EmailCapture';
import TrustBadges from '@/components/TrustBadges';
import ROICalculator from '@/components/ROICalculator';
import { getFeaturedTools } from '@/data/tools';
import { blogPosts } from '@/data/blog';

export default function HomePage() {
  const featuredTools = getFeaturedTools();

  return (
    <>
      {/* Hero */}
      <section className="bg-primary px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find the Perfect AI Tools<br className="hidden sm:block" /> for Your Workflow
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-blue-200 sm:text-xl">
            Cut through the hype. We test and review AI productivity tools so you can make confident decisions that actually improve your bottom line.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/reviews" className="rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-accent-hover transition-all">
              Browse All Reviews
            </Link>
            <Link href="/compare/chatgpt-vs-claude" className="rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all">
              Compare Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-b border-border bg-surface-alt px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <TrustBadges />
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-text">Browse by Category</h2>
            <p className="text-text-muted">Find the right AI tool for your specific needs.</p>
          </div>
          <CategoryNav />
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-surface-alt px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold text-text">Top-Rated AI Tools</h2>
              <p className="text-text-muted">Our highest-rated picks across all categories.</p>
            </div>
            <Link href="/reviews" className="hidden text-sm font-semibold text-accent hover:underline sm:block">View all &rarr;</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-text">How We Review AI Tools</h2>
            <p className="text-lg text-text-muted">Our reviews are built on a transparent methodology, not sponsorships.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: '01', title: 'Real-World Testing', desc: 'We use each tool in actual business workflows for at least 2 weeks before reviewing.' },
              { step: '02', title: 'ROI Analysis', desc: 'Every review includes a cost-benefit analysis so you know the real value, not just features.' },
              { step: '03', title: 'Honest Verdicts', desc: 'No sponsored rankings. Our revenue comes from affiliate links, but our opinions are our own.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">{item.step}</div>
                <h3 className="mb-2 text-lg font-bold text-text">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-surface-alt px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <ROICalculator />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="mb-3 text-3xl font-bold text-text">Latest from the Blog</h2>
              <p className="text-text-muted">Guides, strategies, and insights for AI-powered productivity.</p>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-accent hover:underline sm:block">All posts &rarr;</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:shadow-lg hover:border-accent/30">
                <span className="mb-3 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent">{post.category}</span>
                <h3 className="mb-3 text-xl font-bold text-text group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span>{post.publishDate}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-primary px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <EmailCapture variant="hero" />
        </div>
      </section>
    </>
  );
}
