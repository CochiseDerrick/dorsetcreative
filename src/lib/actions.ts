'use server';

import {z} from 'zod';
import {
  getAiStyleSuggestions,
  AiStyleSuggestionsInput,
  AiStyleSuggestionsOutput,
} from '@/ai/flows/ai-style-suggestions';

const FormSchema = z.object({
  projectDescription: z.string().min(10, {
    message: 'Project description must be at least 10 characters.',
  }),
  stylePreferences: z.string().min(10, {
    message: 'Style preferences must be at least 10 characters.',
  }),
});

type SuggestionsResult = {
  success: boolean;
  data?: AiStyleSuggestionsOutput;
  error?: string;
};

export async function generateStyleSuggestions(
  data: AiStyleSuggestionsInput
): Promise<SuggestionsResult> {
  const validatedFields = FormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid input. Please check your fields.',
    };
  }

  // Check if Google AI API key is configured
  if (!process.env.GOOGLE_AI_API_KEY) {
    console.error('Missing GOOGLE_AI_API_KEY environment variable');
    return {
      success: false,
      error: 'AI service is not configured. Please contact support.',
    };
  }

  try {
    console.log('Calling AI service with data:', validatedFields.data);
    const result = await getAiStyleSuggestions(validatedFields.data);
    console.log('AI service returned:', result);
    return {success: true, data: result};
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    
    // More detailed error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error details:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return {
      success: false,
      error: 'Failed to generate suggestions. Please try again later.',
    };
  }
}
