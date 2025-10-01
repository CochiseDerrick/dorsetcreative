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

export const metadata: Metadata = {
  title: 'Portfolio | Dorset Creative Hub',
  description: 'Explore our portfolio of website designs and application developments.',
};

export default function PortfolioPage() {
    const projects = [
      { id: '1', title: 'lovetovisit.com', description: 'The UK’s leading events and ticketing platform with a focus on user experience.', imageUrl: 'https://picsum.photos/seed/lovetovisit/600/400', imageHint: 'website screenshot', tags: ['Web Design', 'Next.js', 'E-commerce'] },
      { id: '2', title: 'ironawe.uk', description: 'A powerful e-commerce store for a blacksmith selling custom ironwork.', imageUrl: 'https://picsum.photos/seed/ironawe/600/400', imageHint: 'ironwork tools', tags: ['E-commerce', 'Web Design', 'Blacksmith'] },
      { id: '3', title: 'thedhammapada.co.uk', description: 'A serene and thoughtful website presenting the ancient Buddhist text, The Dhammapada.', imageUrl: 'https://picsum.photos/seed/dhammapada/600/400', imageHint: 'buddhist text', tags: ['Web Design', 'Content', 'Spirituality'] },
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
