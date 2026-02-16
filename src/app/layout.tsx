import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrganizationJsonLd } from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://oneclickai.io'),
  title: {
    default: 'OneClickAI — Find the Perfect AI Tools for Your Workflow',
    template: '%s | OneClickAI',
  },
  description: 'Honest, ROI-focused reviews of AI productivity tools. Compare ChatGPT, Claude, Copilot, and more AI tools to find the right ones for your business.',
  openGraph: {
    type: 'website',
    siteName: 'OneClickAI',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="impact-site-verification" content="0f9cc5f9-dbf7-4525-bede-01582140f155" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NS7WCWRVJX" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-NS7WCWRVJX");
        `}</Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
