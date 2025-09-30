import { Users, Eye, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Dorset Creative Hub',
  description: 'Learn about our mission, values, and the talented team at Dorset Creative Hub.',
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            About Dorset Creative Hub
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and strategists dedicated to building exceptional digital experiences.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Eye className="mx-auto h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses by creating beautiful, functional, and impactful digital solutions that drive growth and deliver measurable results.
              </p>
            </div>
            <div className="space-y-4">
              <Zap className="mx-auto h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Our Values</h2>
              <p className="text-muted-foreground">
                We believe in collaboration, innovation, and integrity. We are committed to transparency and building long-lasting partnerships with our clients.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Our Approach</h2>
              <p className="text-muted-foreground">
                Our process is data-driven and user-centric. We combine creative thinking with strategic analysis to deliver products that users love and businesses need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
