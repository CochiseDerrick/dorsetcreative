import {Palette, AlertCircle} from 'lucide-react';
import type {Metadata} from 'next';
import AiToolForm from './ai-tool-form';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

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
  const isConfigured = !!process.env.GOOGLE_AI_API_KEY && process.env.GOOGLE_AI_API_KEY !== 'your_google_ai_api_key_here';

  return (
    <div className="bg-background w-full overflow-x-hidden">
      <header className="py-12 md:py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Palette className="mx-auto h-12 md:h-16 w-12 md:w-16 text-primary mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter">
            AI-Powered Style Suggestions
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant, expert-level feedback on your web project powered by Google AI. Fill in the details below to get started.
          </p>
        </div>
      </header>

      <section className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          {!isConfigured && (
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Configuration Required</AlertTitle>
              <AlertDescription>
                The AI tool requires a Google AI API key to function. Please contact support to enable this feature.
              </AlertDescription>
            </Alert>
          )}
          <AiToolForm isDisabled={!isConfigured} />
        </div>
      </section>
    </div>
  );
}