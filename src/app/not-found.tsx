import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-extrabold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-text">Page Not Found</h2>
      <p className="mb-8 text-text-muted">The page you are looking for does not exist or has been moved.</p>
      <div className="flex gap-4">
        <Link href="/" className="rounded-lg bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover transition-colors">Go Home</Link>
        <Link href="/reviews" className="rounded-lg border border-border px-6 py-3 font-semibold text-text hover:bg-surface-alt transition-colors">Browse Reviews</Link>
      </div>
    </section>
  );
}
