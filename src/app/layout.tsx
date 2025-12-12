import type {Metadata} from 'next';
import './globals.css';
import {cn} from '@/lib/utils';
import {Toaster} from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://dorsetcreative.online'),
  title: {
    default: 'Dorset Creative Ltd | Web Design & App Development in Dorset, UK',
    template: '%s | Dorset Creative Ltd',
  },
  description: 'Expert web design, app development, and SEO services in Dorset, England. Dorset Creative Ltd builds beautiful, functional digital experiences to help your business grow.',
  openGraph: {
    title: 'Dorset Creative Ltd | Web Design & App Development',
    description: 'Expert web design, app development, and SEO services in Dorset, England. We build beautiful, functional digital experiences.',
    url: 'https://dorsetcreative.online',
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

  // Organization structured data
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Dorset Creative Ltd',
    'url': 'https://dorsetcreative.online',
    'logo': 'https://dorsetcreative.online/og-image.png',
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '+44-1202-123456',
      'contactType': 'sales',
      'email': 'sales@dorsetcreative.online',
      'areaServed': 'GB',
      'availableLanguage': ['English']
    }],
    'sameAs': [
      'https://www.linkedin.com/company/dorsetcreative',
      'https://twitter.com/dorsetcreative'
    ]
  };

  // Website structured data
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Dorset Creative Ltd',
    'url': 'https://dorsetcreative.online',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://dorsetcreative.online/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Breadcrumb structured data (homepage only)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://dorsetcreative.online/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Portfolio',
        'item': 'https://dorsetcreative.online/portfolio'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Services',
        'item': 'https://dorsetcreative.online/services'
      }
    ]
  };

  // Project structured data (for main portfolio projects)
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Portfolio Projects',
    'itemListElement': [
      {
        '@type': 'CreativeWork',
        'position': 1,
        'name': 'lovetovisit.com',
        'url': 'https://lovetovisit.com',
        'description': 'The UK leading events and ticketing platform with a focus on user experience.',
        'image': 'https://images.unsplash.com/photo-1517694712202-1428bc64c2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3NTkyNjA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        '@type': 'CreativeWork',
        'position': 2,
        'name': 'ironawe.uk',
        'url': 'https://ironawe.uk',
        'description': 'A powerful e-commerce store for a blacksmith selling custom ironwork.',
        'image': 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcm9ud29yayUyMHRvb2xzfGVufDB8fHx8fDE3NTkyNjEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        '@type': 'CreativeWork',
        'position': 3,
        'name': 'thedhammapada.co.uk',
        'url': 'https://thedhammapada.co.uk',
        'description': 'A serene and thoughtful website presenting the ancient Buddhist text, The Dhammapada.',
        'image': 'https://images.unsplash.com/photo-1544699049-5e1a3843a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRleHR8ZW58MHx8fHwxNzU5MjYxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        '@type': 'CreativeWork',
        'position': 4,
        'name': 'dressright.co.uk',
        'url': 'https://dressright.co.uk',
        'description': 'AI-powered fashion advisor for instant outfit checks, style tips, and dress code guidance.',
        'image': 'https://dressright.co.uk/assets/cover.webp'
      }
    ]
  };

  // Service structured data (for main services)
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Services',
    'itemListElement': [
      {
        '@type': 'Service',
        'position': 1,
        'name': 'Web Design',
        'description': 'We create stunning, user-centric websites that are both beautiful and functional, ensuring a seamless user experience across all devices.'
      },
      {
        '@type': 'Service',
        'position': 2,
        'name': 'App Development',
        'description': 'From concept to launch, we build intuitive and powerful mobile applications for iOS and Android that engage users and drive growth.'
      },
      {
        '@type': 'Service',
        'position': 3,
        'name': 'SEO Optimization',
        'description': 'Boost your online visibility and drive organic traffic with our data-driven SEO strategies, tailored to your business goals.'
      }
    ]
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        {/* Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(orgJsonLd)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(projectJsonLd)}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceJsonLd)}} />
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
          'flex flex-col min-h-screen overflow-x-hidden'
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
