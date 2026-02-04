import { tools } from '@/data/tools';
import { reviewContent } from '@/data/reviews';
import { notFound } from 'next/navigation';
import RatingStars from '@/components/RatingStars';
import ProsCons from '@/components/ProsCons';
import AffiliateButton from '@/components/AffiliateButton';
import PricingBadge from '@/components/PricingBadge';
import Link from 'next/link';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review 2026 \u2014 Honest Analysis, Pricing & ROI`,
    description: `${tool.name}: ${tool.tagline} Rating: ${tool.rating}/5. In-depth review with real-world testing, pricing breakdown, pros/cons, and who it's best for.`,
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const sections = reviewContent[tool.slug] || [];
  const similarTools = tools.filter((t) => t.slug !== tool.slug && t.category.some((c) => tool.category.includes(c))).slice(0, 3);

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Affiliate Disclosure */}
        <p className="text-xs text-gray-400 mb-6">This review contains affiliate links. We may earn a commission at no extra cost to you. <Link href="/affiliate-disclosure" className="underline hover:text-gray-600">Learn more</Link></p>

        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#4361ee]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/reviews" className="hover:text-[#4361ee]">Reviews</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl shrink-0">
            {tool.category[0] === 'writing' ? '\u270d\ufe0f' : tool.category[0] === 'coding' ? '\ud83d\udcbb' : tool.category[0] === 'design' ? '\ud83c\udfa8' : tool.category[0] === 'automation' ? '\u26a1' : tool.category[0] === 'research' ? '\ud83d\udd0d' : '\ud83d\udcc8'}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tool.name} Review</h1>
            <p className="text-gray-600 text-lg mb-3">{tool.tagline}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <RatingStars rating={tool.rating} />
              <span className="text-gray-500">|</span>
              <PricingBadge pricing={tool.pricing[1] || tool.pricing[0]} />
              <span className="text-gray-500">|</span>
              <span className="text-sm text-gray-500">Updated {tool.reviewDate}</span>
            </div>
          </div>
          <AffiliateButton url={tool.affiliateUrl} name={`Try ${tool.name}`} className="shrink-0" />
        </div>

        {/* Quick Verdict */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-2">\ud83c\udfaf Quick Verdict</h2>
          <p className="text-gray-700">{tool.verdict}</p>
        </div>

        {/* Table of Contents */}
        {sections.length > 0 && (
          <nav className="bg-gray-50 rounded-xl p-5 mb-10">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">In This Review</h3>
            <ul className="space-y-1.5">
              {sections.map((section, i) => (
                <li key={i}>
                  <a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-[#4361ee] hover:text-[#3651d4] text-sm">
                    {section.heading}
                  </a>
                </li>
              ))}
              <li><a href="#pricing" className="text-[#4361ee] hover:text-[#3651d4] text-sm">Pricing</a></li>
              <li><a href="#features" className="text-[#4361ee] hover:text-[#3651d4] text-sm">Key Features</a></li>
              <li><a href="#pros-cons" className="text-[#4361ee] hover:text-[#3651d4] text-sm">Pros & Cons</a></li>
            </ul>
          </nav>
        )}

        {/* Review Content Sections */}
        {sections.map((section, i) => (
          <section key={i} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {section.content.split('\n\n').map((paragraph, j) => (
                <p key={j} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {/* Mid-article CTA */}
        {sections.length > 0 && (
          <div className="bg-gray-50 border rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900">Ready to try {tool.name}?</p>
              <p className="text-sm text-gray-500">See current pricing and start your free trial.</p>
            </div>
            <AffiliateButton url={tool.affiliateUrl} name={`Get ${tool.name}`} size="sm" />
          </div>
        )}

        {/* Pricing */}
        <section id="pricing" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tool.pricing.map((p) => (
              <div key={p.plan} className="bg-white border rounded-xl p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 font-medium mb-1">{p.plan}</div>
                <div className="text-2xl font-bold">{p.price}</div>
                <div className="text-sm text-gray-500">/{p.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {tool.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">\u2713</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <div id="pros-cons">
          <ProsCons pros={tool.pros} cons={tool.cons} />
        </div>

        {/* Best For */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Best For</h2>
          <div className="flex flex-wrap gap-2">
            {tool.bestFor.map((use) => (
              <span key={use} className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
                {use}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#1a1a2e] text-white rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold mb-3">Ready to try {tool.name}?</h2>
          <p className="text-gray-300 mb-6">Join millions of professionals already using {tool.name} to supercharge their workflow.</p>
          <AffiliateButton url={tool.affiliateUrl} name={`Try ${tool.name} Free`} size="lg" />
        </div>

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Similar Tools to Compare</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {similarTools.map((t) => (
                <Link key={t.slug} href={`/reviews/${t.slug}`} className="border rounded-xl p-4 hover:shadow-md transition-shadow block">
                  <h3 className="font-semibold mb-1">{t.name}</h3>
                  <RatingStars rating={t.rating} size="sm" />
                  <p className="text-sm text-gray-600 mt-2">{t.tagline.slice(0, 80)}...</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
