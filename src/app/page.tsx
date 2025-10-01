import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Palette,
  PenTool,
  Quote,
  Search,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {Badge} from '@/components/ui/badge';
import {services, testimonials} from '@/lib/data';
import Love from '../assets/lovetovisit.png';
import Iron from '../assets/ironawe.png';
import Dhamma from '../assets/dhamma.png';
export default function Home() {
  const featuredProjects = [
    {id: '1', title: 'lovetovisit.com', description: 'The UK’s leading events and ticketing platform with a focus on user experience.', imageUrl: 'https://images.unsplash.com/photo-1517694712202-1428bc64c2b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3NTkyNjA3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'website screenshot', tags: ['Web Design', 'Next.js', 'E-commerce']},
    {id: '2', title: 'ironawe.uk', description: 'A powerful e-commerce store for a blacksmith selling custom ironwork.', imageUrl: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpcm9ud29yayUyMHRvb2xzfGVufDB8fHx8fDE3NTkyNjEwODF8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'ironwork tools', tags: ['E-commerce', 'Web Design', 'Blacksmith']},
    {id: '3', title: 'thedhammapada.co.uk', description: 'A serene and thoughtful website presenting the ancient Buddhist text, The Dhammapada.', imageUrl: 'https://images.unsplash.com/photo-1544699049-5e1a3843a41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHRleHR8ZW58MHx8fHwxNzU5MjYxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'buddhist text', tags: ['Web Design', 'Content', 'Spirituality']},
  ];

  const heroImageUrl = "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxhYnN0cmFjdCUyMHRlY2h8ZW58MHx8fHwxNzU5MjE3OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080";
  const heroImageHint = "abstract tech";

  const images = [Love, Iron, Dhamma];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src={heroImageUrl}
            alt="Abstract background for hero section"
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImageHint}
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 p-4 space-y-4 md:space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Crafting Digital Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Growth, Creativity, and Connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services">
                  Our Services <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                We provide a comprehensive suite of digital services to help your business thrive online.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
                <Card key={service.id} className="text-center flex flex-col">
                  <CardHeader>
                    <div className="mx-auto bg-primary text-primary-foreground p-4 rounded-full w-fit">
                      {service.id === 'web-design' && <PenTool size={32} />}
                      {service.id === 'app-dev' && <Code size={32} />}
                      {service.id === 'seo' && <Search size={32} />}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="text-2xl font-semibold mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button asChild variant="link">
                      <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                A glimpse into our passion for creating beautiful and functional digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, i) => {
                return (
                  <Card key={project.id} className="overflow-hidden group">
                    <div className="relative h-60">
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
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
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
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/portfolio">
                  Explore All Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="ai-tool-promo" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4">
                <Badge variant="default" className="bg-accent text-accent-foreground">New Tool</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Style Suggestions</h2>
                <p className="text-muted-foreground md:text-lg">
                  Leverage the power of artificial intelligence to refine your website's design and code. Get instant, expert-level feedback to ensure your project meets the highest standards of quality and style.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/ai-tool">
                    Try The AI Tool <Palette className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center items-center bg-primary/10 p-8 rounded-lg">
                <Palette size={120} className="text-primary" />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md-text-4xl font-bold">What Our Clients Say</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                We're proud to have partnered with amazing businesses.
              </p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
              aria-roledescription="carousel"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col h-full">
                        <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                          <Quote className="w-8 h-8 text-primary mb-4" />
                          <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
