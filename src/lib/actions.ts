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

  if (process.env.GOOGLE_AI_API_KEY === 'your_google_ai_api_key_here') {
    console.error('Google AI API key is still placeholder value');
    return {
      success: false,
      error: 'AI service configuration is incomplete. Please contact support.',
    };
  }

  try {
    console.log('Calling AI service with data:', {
      projectDescriptionLength: validatedFields.data.projectDescription.length,
      stylePreferencesLength: validatedFields.data.stylePreferences.length,
    });
    console.log('Using API key:', process.env.GOOGLE_AI_API_KEY ? `${process.env.GOOGLE_AI_API_KEY.substring(0, 10)}...` : 'NOT SET');
    
    const result = await getAiStyleSuggestions(validatedFields.data);
    console.log('AI service returned successfully:', {
      hasResult: !!result,
      hasSuggestions: result?.suggestions?.length > 0,
      adherenceToHighStandards: result?.adherenceToHighStandards,
    });
    return {success: true, data: result};
  } catch (error) {
    console.error('AI Suggestion Error:', error);
    
    // More detailed error handling
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
      type: error?.constructor?.name,
      apiKeyPresent: !!process.env.GOOGLE_AI_API_KEY,
    });
    
    // Return more specific error messages based on error type
    if (errorMessage.includes('API key')) {
      return {
        success: false,
        error: 'Invalid API key configuration. Please contact support.',
      };
    }
    
    if (errorMessage.includes('quota') || errorMessage.includes('limit')) {
      return {
        success: false,
        error: 'API usage limit reached. Please try again later.',
      };
    }
    
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your connection and try again.',
      };
    }
    
    return {
      success: false,
      error: `Failed to generate suggestions: ${errorMessage}`,
    };
  }
}
