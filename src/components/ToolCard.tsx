import Link from 'next/link';
import type { AITool } from '@/data/tools';
import RatingStars from './RatingStars';
import PricingBadge from './PricingBadge';
import AffiliateButton from './AffiliateButton';

export default function ToolCard({ tool }: { tool: AITool }) {
  const mainPricing = tool.pricing.find((p) => p.price !== '$0') || tool.pricing[0];

  return (
    <div className="group flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[#4361ee]/30">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl font-bold text-[#4361ee]">
          {tool.name.charAt(0)}
        </div>
        <PricingBadge pricing={mainPricing} />
      </div>

      <Link href={`/reviews/${tool.slug}`} className="mb-2">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4361ee] transition-colors">{tool.name}</h3>
      </Link>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{tool.tagline}</p>

      <div className="mb-4">
        <RatingStars rating={tool.rating} size="sm" />
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {tool.category.map((cat) => (
          <span key={cat} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 capitalize">
            {cat}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          href={`/reviews/${tool.slug}`}
          className="flex-1 rounded-lg border px-4 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Read Review
        </Link>
        <AffiliateButton url={tool.affiliateUrl} name="Try It" size="sm" className="flex-1" />
      </div>
    </div>
  );
}
