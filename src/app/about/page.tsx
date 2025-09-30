import Image from 'next/image';
import { Users, Eye, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { teamMembers } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
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

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              The creative minds behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = getPlaceholderImage(member.imageId);
              return (
                <Card key={member.name} className="text-center">
                  <CardHeader>
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <Image
                        src={memberImage.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                        data-ai-hint={memberImage.imageHint}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                    <CardDescription className="text-primary">{member.role}</CardDescription>
                    <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
