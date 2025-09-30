'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Lightbulb, Loader2, ServerCrash, ThumbsUp, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateStyleSuggestions } from '@/lib/actions';
import type { AiStyleSuggestionsOutput } from '@/ai/flows/ai-style-suggestions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const FormSchema = z.object({
  projectDescription: z.string().min(20, {
    message: 'Please provide a more detailed project description (at least 20 characters).',
  }),
  stylePreferences: z.string().min(20, {
    message: 'Please provide more details on your style preferences (at least 20 characters).',
  }),
});

export default function AiToolForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiStyleSuggestionsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectDescription: '',
      stylePreferences: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);

    const response = await generateStyleSuggestions(data);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      setError(response.error || 'An unknown error occurred.');
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error || 'Failed to generate suggestions.',
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Generate Suggestions</CardTitle>
          <CardDescription>
            Fill out the form below and let our AI analyze your project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'A modern e-commerce site for a sustainable fashion brand, targeting young adults...'"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe your website or application. What is its purpose? Who is the target audience?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stylePreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Style Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'Minimalist design, with a neutral color palette, sans-serif fonts, and a focus on clean, grid-based layouts...'"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Mention any preferences for colors, typography, layout, or overall aesthetic.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Generate Suggestions'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Our AI is thinking... this may take a moment.</p>
        </div>
      )}

      {error && (
        <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="animate-in fade-in-50">
          <CardHeader>
            <CardTitle>AI Analysis Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {result.adherenceToHighStandards ? (
                <Alert>
                    <ThumbsUp className="h-4 w-4" />
                    <AlertTitle>High Standards Met!</AlertTitle>
                    <AlertDescription>
                        {result.justification}
                    </AlertDescription>
                </Alert>
            ) : (
              <div className="space-y-4">
                 <Alert>
                    <Lightbulb className="h-4 w-4" />
                    <AlertTitle>Suggestions for Improvement</AlertTitle>
                    <AlertDescription>
                        {result.justification}
                    </AlertDescription>
                </Alert>
                <ul className="space-y-3 list-none p-0">
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
