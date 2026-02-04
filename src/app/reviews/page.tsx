import { tools, categories } from '@/data/tools';
import ToolCard from '@/components/ToolCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tool Reviews',
  description: 'Honest, in-depth reviews of the best AI productivity tools. Compare features, pricing, and ROI to find the perfect tools for your workflow.',
};

export default function ReviewsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Tool Reviews</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Honest reviews with ROI analysis. Every tool tested in real workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <span className="bg-[#4361ee] text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">All Tools</span>
          {categories.map((cat) => (
            <span key={cat.slug} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors">
              {cat.icon} {cat.name}
            </span>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
