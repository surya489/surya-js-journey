import type { Concept } from "@/types/concept";

export const variablesDeclarationsConcept: Concept = {
  slug: "variables-declarations",
  title: "Variables: var, let, const",
  summary:
    "JavaScript variables can be declared with `var`, `let`, or `const`, and each one has different scope and reassignment behavior.",
  description:
    "Modern JavaScript primarily uses `let` and `const`. `let` allows reassignment, while `const` prevents rebinding the variable name. `var` is older, function-scoped, and behaves differently with hoisting, so understanding the distinction is important for reading legacy code and avoiding scope bugs.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "`let` and `const` are block-scoped.",
    "`const` prevents rebinding but does not make object contents immutable.",
    "`var` is function-scoped and has different hoisting behavior from `let` and `const`.",
  ],
  commonMistakes: [
    "Assuming `const` makes arrays or objects deeply immutable.",
    "Using `var` in new code and introducing scope confusion.",
    "Reassigning a `const` and expecting it to work like `let`.",
  ],
  expectedOutput: ["1", "2", "3"],
  relatedConcepts: ["scope", "hoisting", "objects"],
  exampleCode: `var count = 1;
let score = 2;
const total = 3;

console.log(count);
console.log(score);
console.log(total);`,
};
