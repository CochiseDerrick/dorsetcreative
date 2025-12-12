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
  title: 'Portfolio | Award-Winning Web & App Projects | Dorset Creative Ltd',
  description: 'See real client results: Explore our award-winning portfolio of web design, app development, and AI-powered projects for businesses in Dorset, the UK, and worldwide.',
  openGraph: {
    title: 'Portfolio | Award-Winning Web & App Projects | Dorset Creative Ltd',
    description: 'See real client results: Explore our award-winning portfolio of web design, app development, and AI-powered projects for businesses in Dorset, the UK, and worldwide.',
    url: 'https://dorsetcreative.online/portfolio',
    images: [
      {
        url: 'https://dorsetcreative.online/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dorset Creative Ltd Portfolio',
      },
      {
        url: 'https://images.unsplash.com/photo-1517694712202-1428bc64c2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3NTkyNjA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 800,
        alt: 'lovetovisit.com project screenshot',
      },
      {
        url: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcm9ud29yayUyMHRvb2xzfGVufDB8fHx8fDE3NTkyNjEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 800,
        alt: 'ironawe.uk project screenshot',
      },
      {
        url: 'https://images.unsplash.com/photo-1544699049-5e1a3843a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRleHR8ZW58MHx8fHwxNzU5MjYxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 800,
        alt: 'thedhammapada.co.uk project screenshot',
      },
      {
        url: 'https://dressright.co.uk/assets/cover.webp',
        width: 1200,
        height: 800,
        alt: 'dressright.co.uk project screenshot',
      },
    ],
    type: 'website',
    siteName: 'Dorset Creative Ltd',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Award-Winning Web & App Projects | Dorset Creative Ltd',
    description: 'See real client results: Explore our award-winning portfolio of web design, app development, and AI-powered projects for businesses in Dorset, the UK, and worldwide.',
    images: [
      'https://dorsetcreative.online/og-image.png',
      'https://images.unsplash.com/photo-1517694712202-1428bc64c2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3NTkyNjA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcm9ud29yayUyMHRvb2xzfGVufDB8fHx8fDE3NTkyNjEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1544699049-5e1a3843a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRleHR8ZW58MHx8fHwxNzU5MjYxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://dressright.co.uk/assets/cover.webp',
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'portfolio',
    'web design case studies',
    'app development projects',
    'AI projects',
    'Dorset Creative portfolio',
    'digital agency work',
    'award-winning websites',
    'UK web agency',
  ],
  alternates: {
    canonical: 'https://dorsetcreative.online/portfolio',
  },
};

export default function PortfolioPage() {

  const projects = [
    {
      id: '1',
      title: 'lovetovisit.com',
      description: 'The UK leading events and ticketing platform with a focus on user experience.',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-1428bc64c2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3NTkyNjA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'website screenshot',
      tags: ['Web Design', 'Next.js', 'E-commerce'],
      url: 'https://lovetovisit.com'
    },
    {
      id: '2',
      title: 'ironawe.uk',
      description: 'A powerful e-commerce store for a blacksmith selling custom ironwork.',
      imageUrl: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcm9ud29yayUyMHRvb2xzfGVufDB8fHx8fDE3NTkyNjEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'ironwork tools',
      tags: ['E-commerce', 'Web Design', 'Blacksmith'],
      url: 'https://ironawe.uk'
    },
    {
      id: '3',
      title: 'thedhammapada.co.uk',
      description: 'A serene and thoughtful website presenting the ancient Buddhist text, The Dhammapada.',
      imageUrl: 'https://images.unsplash.com/photo-1544699049-5e1a3843a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRleHR8ZW58MHx8fHwxNzU5MjYxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'buddhist text',
      tags: ['Web Design', 'Content', 'Spirituality'],
      url: 'https://thedhammapada.co.uk'
    },
    {
      id: '4',
      title: 'dressright.co.uk',
      description: 'AI-powered fashion advisor for instant outfit checks, style tips, and dress code guidance. Users can describe their outfit or upload a photo, specify the event, and get immediate feedback and recommendations.',
      imageUrl: 'https://dressright.co.uk/assets/cover.webp',
      imageHint: 'AI fashion advice app',
      tags: ['AI', 'Web App', 'Fashion', 'Next.js'],
      url: 'https://dressright.co.uk'
    },
  ];

  const images = [Love, Iron, Dhamma, projects[3].imageUrl];

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
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  aria-label={`View project: ${project.title}`}
                  tabIndex={0}
                >
                  <Card className="overflow-hidden group flex flex-col h-full cursor-pointer">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={images[i]}
                        alt={`${project.title} – ${project.description} (${project.imageHint})`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={i === 0}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
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
                </a>
              );
            })}
          </div>
        </div>
      </section>
      {/* Related Content Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore More</h2>
          <p className="mb-6 text-muted-foreground">See our <a href="/services" className="text-primary underline hover:no-underline">services</a> or <a href="/contact" className="text-primary underline hover:no-underline">contact us</a> to discuss your project.</p>
        </div>
      </section>
    </div>
  );
}
