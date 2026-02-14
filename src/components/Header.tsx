'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="OneClickAI"
            width={180}
            height={50}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/reviews" className="text-sm font-medium text-gray-500 hover:text-[#4361ee] transition-colors">Reviews</Link>
          <Link href="/compare/chatgpt-vs-claude" className="text-sm font-medium text-gray-500 hover:text-[#4361ee] transition-colors">Compare</Link>
          <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-[#4361ee] transition-colors">Blog</Link>
          <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-[#4361ee] transition-colors">About</Link>
          <Link href="/newsletter" className="rounded-lg bg-[#4361ee] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3651d4] transition-colors">Newsletter</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/reviews" className="text-sm font-medium text-gray-500" onClick={() => setIsOpen(false)}>Reviews</Link>
            <Link href="/compare/chatgpt-vs-claude" className="text-sm font-medium text-gray-500" onClick={() => setIsOpen(false)}>Compare</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-500" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="/about" className="text-sm font-medium text-gray-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/newsletter" className="rounded-lg bg-[#4361ee] px-4 py-2 text-center text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>Newsletter</Link>
          </div>
        </div>
      )}
    </header>
  );
}
