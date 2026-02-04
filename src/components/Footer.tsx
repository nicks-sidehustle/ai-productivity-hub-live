import Link from 'next/link';
import EmailCapture from './EmailCapture';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#1a1a2e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4361ee] text-lg font-bold text-white">1</div>
              <span className="text-xl font-bold">OneClickAI</span>
            </div>
            <p className="text-sm leading-relaxed text-blue-200">
              Your trusted guide to AI productivity tools. Honest reviews, real ROI analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/reviews" className="text-sm text-blue-200 hover:text-white transition-colors">All Reviews</Link></li>
              <li><Link href="/compare/chatgpt-vs-claude" className="text-sm text-blue-200 hover:text-white transition-colors">Comparisons</Link></li>
              <li><Link href="/blog" className="text-sm text-blue-200 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/newsletter" className="text-sm text-blue-200 hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">Categories</h4>
            <ul className="space-y-2.5">
              <li><Link href="/reviews?category=writing" className="text-sm text-blue-200 hover:text-white transition-colors">Writing Tools</Link></li>
              <li><Link href="/reviews?category=coding" className="text-sm text-blue-200 hover:text-white transition-colors">Coding Tools</Link></li>
              <li><Link href="/reviews?category=design" className="text-sm text-blue-200 hover:text-white transition-colors">Design Tools</Link></li>
              <li><Link href="/reviews?category=automation" className="text-sm text-blue-200 hover:text-white transition-colors">Automation Tools</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">Stay Updated</h4>
            <EmailCapture variant="footer" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-blue-300">&copy; 2026 OneClickAI.io &mdash; Your trusted guide to AI productivity tools</p>
          <div className="flex gap-6">
            <Link href="/affiliate-disclosure" className="text-sm text-blue-300 hover:text-white transition-colors">Affiliate Disclosure</Link>
            <Link href="/about" className="text-sm text-blue-300 hover:text-white transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
