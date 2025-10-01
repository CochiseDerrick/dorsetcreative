import { Users, Lightbulb, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Dorset Creative Ltd',
  description: 'Learn about our mission, values, and the talented team at Dorset Creative Ltd.',
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            About Dorset Creative Ltd
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of designers, developers, and strategists dedicated to fostering growth, creativity, and connection through exceptional digital experiences.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <TrendingUp className="mx-auto h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Growth</h2>
              <p className="text-muted-foreground">
                We empower businesses by creating impactful digital solutions that drive sustainable growth and deliver measurable results.
              </p>
            </div>
            <div className="space-y-4">
              <Lightbulb className="mx-auto h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Creativity</h2>
              <p className="text-muted-foreground">
                We believe in the power of creative thinking and innovation to build beautiful and functional products that users love.
              </p>
            </div>
            <div className="space-y-4">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold">Connection</h2>
              <p className="text-muted-foreground">
                Our process is collaborative and user-centric. We build long-lasting partnerships with our clients to create meaningful connections with their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
