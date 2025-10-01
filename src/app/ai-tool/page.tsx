import { Palette } from 'lucide-react';
import type { Metadata } from 'next';
import AiToolForm from './ai-tool-form';

export const metadata: Metadata = {
    title: 'AI Style Suggestions Tool',
    description: 'Use our free AI-powered tool to get instant design and code style suggestions for your web project. Improve your website with expert feedback from Dorset Creative Ltd.',
    openGraph: {
        title: 'AI Style Suggestions Tool | Dorset Creative Ltd',
        description: 'Use our AI-powered tool to get design and code style suggestions for your project.',
    },
    twitter: {
        title: 'AI Style Suggestions Tool | Dorset Creative Ltd',
        description: 'Use our AI-powered tool to get design and code style suggestions for your project.',
    }
};

export default function AiToolPage() {
  return (
    <div className="bg-background">
      <header className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Palette className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            AI-Powered Style Suggestions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant, expert-level feedback on your web project. Fill in the details below to get started.
          </p>
        </div>
      </header>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <AiToolForm />
        </div>
      </section>
    </div>
  );
}
