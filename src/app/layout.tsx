import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://dorsetcreative.com'),
  title: {
    default: 'Dorset Creative Ltd | Web Design & App Development in Dorset, UK',
    template: '%s | Dorset Creative Ltd',
  },
  description: 'Expert web design, app development, and SEO services in Dorset, England. Dorset Creative Ltd builds beautiful, functional digital experiences to help your business grow.',
  openGraph: {
    title: 'Dorset Creative Ltd | Web Design & App Development',
    description: 'Expert web design, app development, and SEO services in Dorset, England. We build beautiful, functional digital experiences.',
    url: 'https://dorsetcreative.com',
    siteName: 'Dorset Creative Ltd',
    images: [
      {
        url: '/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Dorset Creative Ltd Logo and Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dorset Creative Ltd | Web Design & App Development',
    description: 'Expert web design, app development, and SEO services in Dorset, England. We build beautiful, functional digital experiences.',
    images: ['/og-image.png'], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ['web design dorset', 'app development poole', 'seo england', 'next.js developer uk', 'digital agency dorset'],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'h-full bg-background font-body antialiased',
          'flex flex-col'
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
