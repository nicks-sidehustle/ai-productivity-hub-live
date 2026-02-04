import type { Metadata } from 'next';
import EmailCapture from '@/components/EmailCapture';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newsletter — Weekly AI Tool Briefing',
  description: 'Subscribe to the OneClickAI newsletter. Get weekly reviews, deals, and productivity tips for AI tools — delivered every Tuesday.',
};

export default function NewsletterPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://oneclickai.io' },
        { name: 'Newsletter', url: 'https://oneclickai.io/newsletter' },
      ]} />

      <section className="bg-primary px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-white">The Weekly AI Tool Briefing</h1>
          <p className="mb-4 text-xl text-blue-200">
            Join thousands of professionals who get our weekly roundup of AI tool reviews, deals, and productivity strategies.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-xl">
          <div className="mb-12 rounded-2xl border border-border p-8">
            <EmailCapture />
          </div>

          <div className="space-y-8">
            <h2 className="text-center text-2xl font-bold text-text">What You Will Get</h2>
            <div className="grid gap-6">
              {[
                { icon: '\ud83d\udcca', title: 'New Reviews', desc: 'In-depth reviews of the latest AI tools, published every week.' },
                { icon: '\ud83d\udcb0', title: 'Deal Alerts', desc: 'Exclusive discounts and limited-time offers on AI tools.' },
                { icon: '\ud83d\udca1', title: 'Productivity Tips', desc: 'Actionable strategies to get more out of your AI subscriptions.' },
                { icon: '\ud83c\udfaf', title: 'ROI Insights', desc: 'Data-driven analysis of which tools deliver the best return.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-xl bg-surface-alt p-6">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="mb-1 font-bold text-text">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-text-muted">Delivered every Tuesday. No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
}
