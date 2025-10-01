import Image from 'next/image';
import { trends } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Calendar, User } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = trends.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Dorset Creative Ltd Trends`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return trends.map((post) => ({
    slug: post.slug,
  }));
}

export default function TrendPostPage({ params }: Props) {
  const post = trends.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter max-w-3xl mx-auto">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-md text-muted-foreground mt-6">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative h-64 md:h-96 w-full max-w-5xl mx-auto mb-8 rounded-lg overflow-hidden">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.imageHint}
                priority
            />
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert prose-headings:font-headline prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
}
