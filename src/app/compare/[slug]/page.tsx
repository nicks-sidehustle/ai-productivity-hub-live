import { comparisons } from '@/data/comparisons';
import { tools } from '@/data/tools';
import { notFound } from 'next/navigation';
import AffiliateButton from '@/components/AffiliateButton';
import RatingStars from '@/components/RatingStars';
import Link from 'next/link';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  if (!comparison) return {};
  return {
    title: comparison.title,
    description: comparison.description,
  };
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  if (!comparison) notFound();

  const toolA = tools.find((t) => t.slug === comparison.tool1Slug);
  const toolB = tools.find((t) => t.slug === comparison.tool2Slug);
  if (!toolA || !toolB) notFound();

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#4361ee]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Compare</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{comparison.title}</h1>
        <p className="text-gray-600 text-lg mb-10">{comparison.description}</p>

        {/* Quick Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[toolA, toolB].map((tool) => (
            <div key={tool.slug} className="bg-white border-2 rounded-2xl p-6 text-center hover:border-[#4361ee] transition-colors">
              <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
              <RatingStars rating={tool.rating} />
              <p className="text-gray-600 my-4">{tool.tagline}</p>
              <p className="text-2xl font-bold mb-4">{tool.pricing[1]?.price || tool.pricing[0]?.price}<span className="text-sm text-gray-500 font-normal">/{tool.pricing[1]?.period || tool.pricing[0]?.period}</span></p>
              <AffiliateButton url={tool.affiliateUrl} name={`Try ${tool.name}`} />
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1a1a2e] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{toolA.name}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">{toolB.name}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.features.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.tool1}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{row.tool2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Which Should You Choose?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Choose {toolA.name} if you...</h3>
              <ul className="space-y-2">
                {comparison.bestFor.tool1.map((use) => (
                  <li key={use} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500">\u2713</span> {use}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Choose {toolB.name} if you...</h3>
              <ul className="space-y-2">
                {comparison.bestFor.tool2.map((use) => (
                  <li key={use} className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-500">\u2713</span> {use}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold mb-2">\ud83c\udfaf Our Verdict</h2>
          <p className="text-gray-700">{comparison.verdict}</p>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Still deciding?</h2>
          <p className="text-gray-600 mb-6">Both tools offer free tiers. Try them yourself and see which fits your workflow best.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AffiliateButton url={toolA.affiliateUrl} name={`Try ${toolA.name}`} />
            <AffiliateButton url={toolB.affiliateUrl} name={`Try ${toolB.name}`} variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}
