'use server';

/**
 * @fileOverview Provides AI-driven style suggestions for web design and code.
 *
 * - getAiStyleSuggestions -  A function that generates style suggestions based on project descriptions and style preferences.
 * - AiStyleSuggestionsInput - The input type for the getAiStyleSuggestions function.
 * - AiStyleSuggestionsOutput - The return type for the getAiStyleSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiStyleSuggestionsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the website or application project.'),
  stylePreferences: z
    .string()
    .describe(
      'Specific style preferences or guidelines to consider, such as color schemes, typography, and layout principles.'
    ),
});
export type AiStyleSuggestionsInput = z.infer<typeof AiStyleSuggestionsInputSchema>;

const AiStyleSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'An array of AI-driven suggestions for design and code style improvements.'
    ),
  justification: z
    .string()
    .describe(
      'A detailed justification for each suggestion, explaining why it is recommended and how it aligns with the project description and style preferences.'
    ),
  adherenceToHighStandards: z
    .boolean()
    .describe(
      'Indicates whether the current design already adheres to high standards, suggesting that no significant changes are warranted.'
    ),
});
export type AiStyleSuggestionsOutput = z.infer<typeof AiStyleSuggestionsOutputSchema>;

export async function getAiStyleSuggestions(
  input: AiStyleSuggestionsInput
): Promise<AiStyleSuggestionsOutput> {
  return aiStyleSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiStyleSuggestionsPrompt',
  input: {schema: AiStyleSuggestionsInputSchema},
  output: {schema: AiStyleSuggestionsOutputSchema},
  prompt: `You are an AI-powered web design and code style expert. Analyze the provided project description and style preferences to suggest improvements.

Project Description: {{{projectDescription}}}
Style Preferences: {{{stylePreferences}}}

Consider factors like usability, visual appeal, and code maintainability. Provide specific, actionable suggestions with clear justifications.
If the design already adheres to high standards, indicate that no significant changes are warranted.

Output your response as an array of suggestions, a detailed justification for each suggestion, and a boolean indicating whether the design already adheres to high standards.
`,
});

const aiStyleSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiStyleSuggestionsFlow',
    inputSchema: AiStyleSuggestionsInputSchema,
    outputSchema: AiStyleSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
