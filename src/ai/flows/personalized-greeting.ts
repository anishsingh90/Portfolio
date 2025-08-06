'use server';

/**
 * @fileOverview Generates a personalized greeting for visitors based on their inferred profile.
 *
 * - generatePersonalizedGreeting - A function that generates the personalized greeting.
 * - PersonalizedGreetingInput - The input type for the generatePersonalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the generatePersonalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  visitorProfile: z
    .string()
    .optional()
    .describe(
      'A description of the visitor, including their interests, profession, and goals.'
    ),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('A personalized greeting for the visitor.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function generatePersonalizedGreeting(
  input: PersonalizedGreetingInput
): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `You are an AI assistant specializing in creating personalized greetings for website visitors.

  Based on the visitor profile, generate a short and engaging greeting message that welcomes them to the portfolio and highlights relevant aspects of Anish Kumar's experience in blockchain development.

  Visitor Profile: {{#if visitorProfile}}{{{visitorProfile}}}{{else}}A generic visitor interested in blockchain technology{{/if}}
  Greeting: `,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
