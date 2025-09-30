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
import { Button } from '@/components/ui/button';
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
import { Badge } from '@/components/ui/badge';
import { projects, services, testimonials } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = getPlaceholderImage('hero-background');
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 p-4 space-y-4 md:space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
              Crafting Digital Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Innovative web design, powerful app development, and strategic SEO to elevate your brand.
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
              {featuredProjects.map((project) => {
                const projectImage = getPlaceholderImage(project.imageId);
                return (
                  <Card key={project.id} className="overflow-hidden group">
                    <div className="relative h-60">
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={projectImage.imageHint}
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
              <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
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
