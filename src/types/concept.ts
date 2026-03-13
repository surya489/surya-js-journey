export type ConceptDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ConceptCategory =
  | "Core JavaScript"
  | "Functions"
  | "Async JavaScript"
  | "Browser Internals"
  | "Performance"
  | "Data Handling"
  | "Browser Events";

export type Concept = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  difficulty: ConceptDifficulty;
  category: ConceptCategory;
  keyPoints: string[];
  commonMistakes: string[];
  expectedOutput: string[];
  relatedConcepts: string[];
  exampleCode: string;
};
