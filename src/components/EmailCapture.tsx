'use client';

import { useState } from 'react';

export default function EmailCapture({ variant = 'default' }: { variant?: 'default' | 'hero' | 'footer' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('You\'re in! Check your inbox for a welcome email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  const isHero = variant === 'hero';
  const isFooter = variant === 'footer';

  return (
    <div className={isFooter ? '' : 'text-center'}>
      {!isFooter && (
        <>
          <h3 className={`font-bold ${isHero ? 'text-3xl text-white mb-4' : 'text-2xl text-gray-900 mb-3'}`}>
            Subscribe & Enter Our Monthly AI Tools Giveaway!
          </h3>
          <p className={`mb-6 ${isHero ? 'text-lg text-blue-100' : 'text-gray-500'}`}>
            Get exclusive reviews, deals, and productivity tips — plus a chance to win premium AI tool subscriptions every month. No spam, unsubscribe anytime.
          </p>
        </>
      )}

      {status === 'success' ? (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800 font-medium">
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`flex gap-3 ${isFooter ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row justify-center max-w-md mx-auto'}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-[#4361ee] focus:outline-none focus:ring-2 focus:ring-[#4361ee]/20"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-[#4361ee] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#3651d4] disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">{message}</p>
      )}
    </div>
  );
}
