import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — OneClickAI',
  description: 'Privacy policy for OneClickAI. Learn how we handle your data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

      <div className="prose prose-lg max-w-none space-y-6">
        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
          <p>When you visit OneClickAI, we may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Usage data:</strong> Pages visited, time spent, referral source, and device type via analytics tools.</li>
            <li><strong>Email address:</strong> Only if you voluntarily subscribe to our newsletter.</li>
            <li><strong>Cookies:</strong> We use essential cookies for site functionality and analytics cookies to understand traffic patterns.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To improve site content and user experience</li>
            <li>To send newsletters (only with your consent; unsubscribe anytime)</li>
            <li>To analyze traffic and optimize content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3">Third-Party Services</h2>
          <p>We use the following third-party services that may collect data:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vercel Analytics:</strong> For traffic analysis. <a href="https://vercel.com/docs/analytics/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Vercel&apos;s Privacy Policy</a></li>
            <li><strong>Brevo (email):</strong> For newsletter delivery. <a href="https://www.brevo.com/legal/privacypolicy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener">Brevo&apos;s Privacy Policy</a></li>
            <li><strong>Affiliate networks:</strong> When you click affiliate links, the merchant or network may place cookies for conversion tracking.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3">Affiliate Links &amp; Advertising</h2>
          <p>This site contains affiliate links. When you click these links and make a purchase, we may earn a commission at no additional cost to you. See our <a href="/affiliate-disclosure" className="text-blue-600 hover:underline">Affiliate Disclosure</a> for more details.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You can opt out of analytics tracking using browser extensions or Do Not Track settings.</li>
            <li>You can unsubscribe from emails at any time via the link in each email.</li>
            <li>You can request deletion of your data by contacting us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
          <p>Questions about this policy? Email us at <a href="mailto:nicks.sidehustle.2024@gmail.com" className="text-blue-600 hover:underline">nicks.sidehustle.2024@gmail.com</a>.</p>
        </section>
      </div>
    </main>
  );
}
