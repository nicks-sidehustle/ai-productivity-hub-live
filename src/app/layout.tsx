import type { Metadata } from 'next';
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
  description: 'Honest, ROI-focused reviews of AI productivity tools. Compare ChatGPT, Claude, Notion AI, and 50+ more to find the right tools for your business.',
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
      <body className="min-h-screen flex flex-col">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
