import type { Challenge } from "@/types/challenge";

export const scopeShadowingChallenge: Challenge = {
  slug: "scope-shadowing",
  title: "Fix a scope shadowing bug",
  summary:
    "Correct a function so it logs the local value first and the outer value second without mixing the two scopes.",
  prompt:
    "Update the function so the first log prints `inner` and the second log prints `outer`. Keep both values available and do not change the final two `console.log` calls.",
  hints: [
    "Use a local variable inside the function for the inner value.",
    "The outer value should still exist outside the function.",
    "Do not overwrite the outer variable globally.",
  ],
  starterCode: `const label = "outer";

function showLabels() {
  // add the local variable here
  console.log(label);
}

showLabels();
console.log(label);`,
  expectedOutcome: ["inner", "outer"],
  difficulty: "Beginner",
  conceptSlugs: ["scope", "variables-declarations"],
  estimatedMinutes: 8,
};
