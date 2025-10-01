import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import type {Metadata} from 'next';
import Love from '../../assets/lovetovisit.png';
import Iron from '../../assets/ironawe.png';
import Dhamma from '../../assets/dhamma.png';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of website design and application development projects for clients in Dorset, England, and beyond.',
  openGraph: {
    title: 'Portfolio | Dorset Creative Ltd',
    description: 'Explore our portfolio of website and app development projects.',
  },
  twitter: {
    title: 'Portfolio | Dorset Creative Ltd',
    description: 'Explore our portfolio of website and app development projects.',
  },
};

export default function PortfolioPage() {
  const projects = [
    {id: '1', title: 'lovetovisit.com', description: 'The UK’s leading events and ticketing platform with a focus on user experience.', imageUrl: 'https://images.unsplash.com/photo-1517694712202-1428bc64c2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3NTkyNjA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'website screenshot', tags: ['Web Design', 'Next.js', 'E-commerce']},
    {id: '2', title: 'ironawe.uk', description: 'A powerful e-commerce store for a blacksmith selling custom ironwork.', imageUrl: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcm9ud29yayUyMHRvb2xzfGVufDB8fHx8fDE3NTkyNjEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'ironwork tools', tags: ['E-commerce', 'Web Design', 'Blacksmith']},
    {id: '3', title: 'thedhammapada.co.uk', description: 'A serene and thoughtful website presenting the ancient Buddhist text, The Dhammapada.', imageUrl: 'https://images.unsplash.com/photo-1544699049-5e1a3843a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRleHR8ZW58MHx8fHwxNzU5MjYxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'buddhist text', tags: ['Web Design', 'Content', 'Spirituality']},
  ];

  const images = [Love, Iron, Dhamma];

  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of our passion for creating beautiful, functional, and user-centric digital experiences for businesses in Dorset and worldwide.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => {
              return (
                <Card key={project.id} className="overflow-hidden group flex flex-col">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={images[i]}
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
