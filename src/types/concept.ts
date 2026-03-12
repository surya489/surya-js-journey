export type ConceptDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ConceptCategory =
  | "Functions"
  | "Async JavaScript"
  | "Browser Internals"
  | "Performance";

export type Concept = {
  slug: string;
  title: string;
  description: string;
  exampleCode: string;
  difficulty: ConceptDifficulty;
  category: ConceptCategory;
};
