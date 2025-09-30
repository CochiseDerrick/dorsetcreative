'use server';

import { z } from 'zod';
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

  try {
    const result = await getAiStyleSuggestions(validatedFields.data);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    return {
      success: false,
      error: 'Failed to generate suggestions. Please try again later.',
    };
  }
}
