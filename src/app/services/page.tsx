import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {services} from '@/lib/data';
import {Check, Code, PenTool, Search} from 'lucide-react';
import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Web Design, App Development & SEO | Dorset Creative Ltd',
  description: 'Discover our full range of digital services: bespoke web design, mobile app development, and advanced SEO strategies. Dorset Creative Ltd helps your business grow online with expert solutions tailored to your needs.',
  openGraph: {
    title: 'Services | Web Design, App Development & SEO | Dorset Creative Ltd',
    description: 'Discover our full range of digital services: bespoke web design, mobile app development, and advanced SEO strategies. Dorset Creative Ltd helps your business grow online with expert solutions tailored to your needs.',
    url: 'https://dorsetcreative.online/services',
    images: [
      {
        url: 'https://dorsetcreative.online/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dorset Creative Ltd Services',
      },
    ],
    type: 'website',
    siteName: 'Dorset Creative Ltd',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Web Design, App Development & SEO | Dorset Creative Ltd',
    description: 'Discover our full range of digital services: bespoke web design, mobile app development, and advanced SEO strategies. Dorset Creative Ltd helps your business grow online with expert solutions tailored to your needs.',
    images: ['https://dorsetcreative.online/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'web design dorset',
    'app development poole',
    'seo services',
    'digital agency dorset',
    'mobile app development',
    'SEO optimization',
    'UK web agency',
  ],
  alternates: {
    canonical: 'https://dorsetcreative.online/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a complete suite of digital services designed to elevate your brand and accelerate your growth, from our base in Dorset, England.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => (
            <section key={service.id} id={service.id} className="scroll-mt-20">
              <div className="text-center mb-12">
                <div className="mx-auto bg-primary text-primary-foreground p-4 rounded-full w-fit mb-4">
                  {service.id === 'web-design' && <PenTool size={32} />}
                  {service.id === 'app-dev' && <Code size={32} />}
                  {service.id === 'seo' && <Search size={32} />}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                <p className="mt-2 text-muted-foreground md:text-lg max-w-2xl mx-auto">{service.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {service.pricingTiers.map((tier) => (
                  <Card key={tier.name} className={`flex flex-col ${tier.name === 'Pro' || tier.name === 'Full-Featured' ? 'border-primary border-2 shadow-lg' : ''}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <CardDescription className="text-3xl font-bold text-foreground">{tier.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      {/* Related Content Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">See Our Work</h2>
          <p className="mb-6 text-muted-foreground">Check out our <a href="/portfolio" className="text-primary underline hover:no-underline">portfolio</a> or <a href="/contact" className="text-primary underline hover:no-underline">get in touch</a> for a free consultation.</p>
        </div>
      </section>
    </div>
  );
}
