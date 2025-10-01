import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import type { Project } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Portfolio | Dorset Creative Hub',
  description: 'Explore our portfolio of website designs and application developments.',
};

export default function PortfolioPage() {
    const projects: Project[] = [
    { id: '1', title: 'lovetovisit.com', description: 'The UK’s leading events and ticketing platform with a focus on user experience.', imageUrl: 'https://picsum.photos/seed/1/600/400', imageHint: 'website screenshot', tags: ['Web Design', 'Next.js', 'E-commerce'] },
    { id: '2', title: 'Fintech Mobile App', description: 'A secure and intuitive mobile banking application for a new generation.', imageUrl: 'https://images.unsplash.com/photo-1542641728-6ca359b085f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNzU5MjU4NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'mobile app', tags: ['App Development', 'iOS', 'Android'] },
    { id: '3', title: 'Innovate SaaS', description: 'A comprehensive dashboard for a B2B software-as-a-service product.', imageUrl: 'https://images.unsplash.com/photo-1653933686802-86d21b59b03b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3NTkyNTA5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'dashboard ui', tags: ['Web Design', 'UI/UX', 'Dashboard'] },
    { id: '4', title: 'Globe Corp Website', description: 'A full redesign of a multinational corporation\'s online presence.', imageUrl: 'https://images.unsplash.com/photo-1633365087123-b3f2c305769a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjB3ZWJzaXRlfGVufDB8fHx8fDE3NTkyNDkxNDF8MA&ixlibrb-4.1.0&q=80&w=1080', imageHint: 'corporate website', tags: ['Web Design', 'Corporate', 'CMS'] },
    { id: '5', title: 'Connect Social', description: 'A new social media platform designed to connect local communities.', imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8fHwxNzU5MjUzMzM3fDA&ixlibrb-4.1.0&q=80&w=1080', imageHint: 'social media', tags: ['App Development', 'Web Design', 'Social Media'] },
    { id: '6', title: 'Voyage Booking', description: 'A streamlined booking system for a luxury travel agency.', imageUrl: 'https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0cmF2ZWwlMjBib29raW5nfGVufDB8fHx8MTc1OTIzNTY1MXww&ixlibrb-4.1.0&q=80&w=1080', imageHint: 'travel booking', tags: ['Web Design', 'Booking System', 'API Integration'] },
  ];

  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of our passion for creating beautiful, functional, and user-centric digital experiences.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              return (
                <Card key={project.id} className="overflow-hidden group flex flex-col">
                  <div className="relative h-60 w-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={project.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                  </CardContent>
                  <CardContent>
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
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
