import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About OneClickAI — Our Mission & Methodology',
  description: 'Learn about OneClickAI, our review methodology, and our mission to help professionals find the best AI tools for their workflow.',
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://oneclickai.io' },
        { name: 'About', url: 'https://oneclickai.io/about' },
      ]} />

      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white">About OneClickAI</h1>
          <p className="text-lg text-blue-200">Your trusted advisor for AI productivity tools.</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-text">Our Mission</h2>
            <p className="mb-4 leading-relaxed text-text-muted">
              The AI tool landscape is overwhelming. New products launch weekly, pricing changes constantly, and marketing hype makes it impossible to separate signal from noise.
            </p>
            <p className="mb-4 leading-relaxed text-text-muted">
              OneClickAI exists to solve this problem. We provide honest, ROI-focused reviews of AI productivity tools so that busy professionals, small business owners, and freelancers can make confident decisions about which tools deserve their time and money.
            </p>
            <p className="leading-relaxed text-text-muted">
              We believe the right AI tools can transform how you work — but only if you choose wisely and implement strategically. That is where we come in.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-text">Our Review Methodology</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Real-World Testing',
                  desc: 'Every tool we review is tested in actual business workflows for a minimum of two weeks. We do not rely on press releases or feature lists.',
                },
                {
                  title: 'ROI Analysis',
                  desc: 'Each review includes a practical cost-benefit analysis. We calculate the real value a tool delivers relative to its cost.',
                },
                {
                  title: 'Transparent Ratings',
                  desc: 'Our ratings are based on a consistent framework: value for money, ease of use, feature depth, reliability, and support quality.',
                },
                {
                  title: 'Regular Updates',
                  desc: 'AI tools evolve rapidly. We update our reviews when significant changes occur — new features, pricing changes, or model updates.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-surface-alt p-6">
                  <h3 className="mb-2 text-lg font-bold text-text">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-text">How We Make Money</h2>
            <p className="mb-4 leading-relaxed text-text-muted">
              Transparency matters to us. OneClickAI earns revenue through affiliate commissions — when you click a link on our site and purchase a tool, we may receive a commission at no extra cost to you.
            </p>
            <p className="leading-relaxed text-text-muted">
              Importantly, affiliate relationships never influence our rankings or reviews. We recommend tools based on their merit, not their commission rates. If a tool is not good, we say so — even if it has a generous affiliate program.
            </p>
            <p className="mt-4">
              <Link href="/affiliate-disclosure" className="text-accent font-medium hover:underline">Read our full affiliate disclosure &rarr;</Link>
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
