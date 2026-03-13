import type { Concept } from "@/types/concept";

export const modulesConcept: Concept = {
  slug: "modules",
  title: "Modules",
  summary:
    "Modules let you split JavaScript into reusable files with explicit exports and imports.",
  description:
    "Modern JavaScript uses ES modules to organize code across files. A module can export functions, objects, or constants, and other modules can import only what they need. Modules improve maintainability, clarity, and reuse as applications grow.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "Named exports and default exports are imported differently.",
    "Modules create their own file scope.",
    "Breaking code into modules improves reuse and readability.",
  ],
  commonMistakes: [
    "Mixing up named and default import syntax.",
    "Assuming variables from one file are globally available in another.",
    "Creating modules without a clear responsibility and making the structure harder to navigate.",
  ],
  expectedOutput: ["loadLesson", "default export available"],
  relatedConcepts: ["functions", "scope", "objects"],
  exampleCode: `const namedExport = "loadLesson";
const hasDefaultExport = true;

console.log(namedExport);
console.log(hasDefaultExport ? "default export available" : "missing");`,
};
