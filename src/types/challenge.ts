import type { ConceptDifficulty } from "@/types/concept";

export type Challenge = {
  slug: string;
  title: string;
  summary: string;
  prompt: string;
  hints: string[];
  starterCode: string;
  expectedOutcome: string[];
  difficulty: ConceptDifficulty;
  conceptSlugs: string[];
  estimatedMinutes: number;
};
