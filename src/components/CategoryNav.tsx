import Link from 'next/link';
import { categories } from '@/data/tools';

export default function CategoryNav() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/reviews?category=${cat.slug}`}
          className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-[#4361ee]/30 hover:shadow-md"
        >
          <span className="text-3xl">{cat.icon}</span>
          <span className="text-sm font-semibold text-gray-900">{cat.name}</span>
        </Link>
      ))}
    </div>
  );
}
