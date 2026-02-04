import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'OneClickAI affiliate disclosure. Learn how we make money and how it affects (and doesn\'t affect) our reviews.',
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://oneclickai.io' },
        { name: 'Affiliate Disclosure', url: 'https://oneclickai.io/affiliate-disclosure' },
      ]} />

      <section className="bg-primary px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-white">Affiliate Disclosure</h1>
          <p className="text-lg text-blue-200">Full transparency about how we earn revenue.</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <div className="space-y-6 text-text-muted leading-relaxed">
          <p>
            <strong className="text-text">Last updated:</strong> January 2026
          </p>

          <h2 className="text-xl font-bold text-text pt-4">How We Make Money</h2>
          <p>
            OneClickAI.io is a participant in various affiliate marketing programs. This means that when you click on links to products and services on our site and make a purchase, we may receive a commission. This commission comes at no additional cost to you.
          </p>

          <h2 className="text-xl font-bold text-text pt-4">What This Means for Our Reviews</h2>
          <p>
            We want to be completely transparent: affiliate commissions are how we keep this site running. However, we are committed to maintaining editorial integrity:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-text">Our rankings are not for sale.</strong> We do not accept payment to rank a tool higher or give it a better review score.</li>
            <li><strong className="text-text">We review tools we genuinely believe in.</strong> If a tool has a generous affiliate program but poor quality, we will not recommend it.</li>
            <li><strong className="text-text">We disclose affiliate relationships.</strong> Pages containing affiliate links are clearly marked.</li>
            <li><strong className="text-text">Our opinions are our own.</strong> Affiliate partners do not review or approve our content before publication.</li>
          </ul>

          <h2 className="text-xl font-bold text-text pt-4">Affiliate Programs We Participate In</h2>
          <p>
            We participate in affiliate programs from various AI and SaaS companies. These may include, but are not limited to, programs offered by OpenAI, Anthropic, Notion, GitHub, Zapier, Grammarly, Midjourney, Perplexity, and others.
          </p>
          <p>
            We are also a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
          </p>

          <h2 className="text-xl font-bold text-text pt-4">FTC Compliance</h2>
          <p>
            In accordance with the Federal Trade Commission&apos;s guidelines on endorsements and testimonials (16 CFR Part 255), this disclosure is provided to ensure full transparency about the material connections between OneClickAI.io and the products and services we review.
          </p>

          <h2 className="text-xl font-bold text-text pt-4">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or review process, please contact us at contact@oneclickai.io.
          </p>
        </div>
      </article>
    </>
  );
}
