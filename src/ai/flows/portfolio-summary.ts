// src/ai/flows/portfolio-summary.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personalized portfolio summary.
 *
 * - generatePortfolioSummary -  A function that generates a personalized portfolio summary based on visitor interests.
 * - PortfolioSummaryInput - The input type for the generatePortfolioSummary function.
 * - PortfolioSummaryOutput - The return type for the generatePortfolioSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSummaryInputSchema = z.object({
  visitorProfile: z
    .string()
    .optional()
    .describe('A description of the visitor and their interests.'),
});
export type PortfolioSummaryInput = z.infer<typeof PortfolioSummaryInputSchema>;

const PortfolioSummaryOutputSchema = z.object({
  summary: z.string().describe('A personalized portfolio summary.'),
});
export type PortfolioSummaryOutput = z.infer<typeof PortfolioSummaryOutputSchema>;

export async function generatePortfolioSummary(
  input: PortfolioSummaryInput
): Promise<PortfolioSummaryOutput> {
  return portfolioSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSummaryPrompt',
  input: {schema: PortfolioSummaryInputSchema},
  output: {schema: PortfolioSummaryOutputSchema},
  prompt: `You are an AI assistant specializing in creating personalized portfolio summaries.

  Based on the visitor's profile, generate a concise and engaging summary of Anish Kumar's portfolio, highlighting the most relevant skills and experiences.

  Visitor Profile: {{visitorProfile}}

  Portfolio Summary:`,
});

const portfolioSummaryFlow = ai.defineFlow(
  {
    name: 'portfolioSummaryFlow',
    inputSchema: PortfolioSummaryInputSchema,
    outputSchema: PortfolioSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
