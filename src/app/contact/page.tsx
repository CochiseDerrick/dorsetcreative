import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Dorset Creative Hub',
  description: 'Get in touch with Dorset Creative Hub for a project quote or inquiry.',
};

export default function ContactPage() {
  return (
    <div className="bg-background">
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
                      <a href="mailto:hello@dorsetcreative.com" className="hover:text-primary">hello@dorsetcreative.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 mt-1 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office</h3>
                      <p>123 Creative Lane, Dorset, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>We typically respond within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" />
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Your Message" className="min-h-[150px]" />
                    <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
