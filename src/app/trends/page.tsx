import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { trends } from '@/lib/data';
import { Calendar, User, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Trends | Dorset Creative Hub',
  description: 'Insights, tips, and industry news related to web design and app development.',
};

export default function TrendsPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Latest Trends
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in web design, app development, and SEO.
          </p>
        </div>
      </header>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {trends.length === 0 ? (
            <div className="text-center text-muted-foreground">
              <p>We are currently fetching the latest trends. Please check back shortly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trends.map((post) => {
                return (
                  <Card key={post.slug} className="flex flex-col">
                    <CardHeader className="p-0">
                      <Link href={`/trends/${post.slug}`}>
                        <div className="relative h-60 w-full">
                          <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover rounded-t-lg"
                            data-ai-hint={post.imageHint}
                          />
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="pt-6 flex-grow">
                      <CardTitle className="text-xl font-semibold mb-2 leading-tight">
                        <Link href={`/trends/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                      </div>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="p-0 h-auto">
                          <Link href={`/trends/${post.slug}`}>
                              Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
