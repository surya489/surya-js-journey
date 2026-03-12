import type { Concept } from "@/types/concept";

export const thisKeywordConcept: Concept = {
  slug: "this-keyword",
  title: "This Keyword",
  summary:
    "The value of `this` depends on how a function is called, not where it was written.",
  description:
    "In JavaScript, `this` is determined by invocation context. Method calls usually bind `this` to the owning object, standalone functions often default differently depending on strict mode, and arrow functions capture `this` lexically from the surrounding scope.",
  difficulty: "Intermediate",
  category: "Functions",
  keyPoints: [
    "`this` is set at call time for regular functions.",
    "Arrow functions do not create their own `this`.",
    "`bind`, `call`, and `apply` let you control invocation context.",
  ],
  commonMistakes: [
    "Assuming `this` always points to the object where the function was defined.",
    "Using arrow functions for object methods without considering lexical `this`.",
    "Losing `this` when passing methods as callbacks.",
  ],
  expectedOutput: ["Surya"],
  relatedConcepts: ["closure", "hoisting"],
  exampleCode: `const user = {
  name: "Surya",
  printName() {
    console.log(this.name);
  },
};

user.printName();`,
};
