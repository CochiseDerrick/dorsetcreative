import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ContactForm from '@/components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dorset Creative Ltd',
  description: 'Get in touch with Dorset Creative Ltd for web design, app development, or SEO projects in Dorset, England. Call us at 07831 708077.',
  openGraph: {
    title: 'Contact Dorset Creative Ltd',
    description: 'Get in touch for a project quote or inquiry in Dorset, England.',
  },
  twitter: {
    title: 'Contact Dorset Creative Ltd',
    description: 'Get in touch for a project quote or inquiry in Dorset, England.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Dorset Creative Ltd',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Flat 1, 25 Old Coach Mews',
    'addressLocality': 'Poole',
    'addressRegion': 'Dorset',
    'postalCode': 'BH14 0LB',
    'addressCountry': 'GB'
  },
  'telephone': '+447831708077',
  'email': 'support@dorsetcreative.online',
  'url': 'https://dorsetcreative.online/contact',
  'image': 'https://dorsetcreative.online/og-image.png',
  'description': 'Web design and app development agency in Dorset, England.',
};


export default function ContactPage() {
  return (
    <div className="bg-background">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:support@dorsetcreative.online" className="hover:text-primary">support@dorsetcreative.online</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p>07831 708077</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p>Flat 1, 25 Old Coach Mews, Poole, Dorset, BH14 0LB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
