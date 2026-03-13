import type { Concept } from "@/types/concept";

export const scopeConcept: Concept = {
  slug: "scope",
  title: "Scope",
  summary:
    "Scope determines where variables are visible and which parts of your code can access them.",
  description:
    "JavaScript uses lexical scope, which means variable access depends on where code is written, not where a function is called. You work with global scope, function scope, and block scope. Understanding scope is essential because closures, shadowing, and accidental global leaks all come from how variables are resolved.",
  difficulty: "Beginner",
  category: "Core JavaScript",
  keyPoints: [
    "Variables declared inside a block with `let` or `const` stay inside that block.",
    "Functions can read variables from outer scopes unless a closer name shadows them.",
    "Lexical scope is decided when code is written, not when it later runs.",
  ],
  commonMistakes: [
    "Assuming `var` behaves like block-scoped `let` or `const`.",
    "Reusing the same variable name and forgetting an inner declaration shadows the outer one.",
    "Creating globals accidentally by assigning undeclared variables in sloppy code.",
  ],
  expectedOutput: ["inner", "outer"],
  relatedConcepts: ["closure", "hoisting", "execution-context"],
  exampleCode: `const label = "outer";

function showScope() {
  const label = "inner";
  console.log(label);
}

showScope();
console.log(label);`,
};
