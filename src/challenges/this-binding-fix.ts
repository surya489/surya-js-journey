import type { Challenge } from "@/types/challenge";

export const thisBindingFixChallenge: Challenge = {
  slug: "this-binding-fix",
  title: "Fix a lost this binding",
  summary:
    "Repair a method callback so it logs the correct object value instead of losing context.",
  prompt:
    "Update the code so the `showName` callback still logs `Surya` when passed to `setTimeout`. You can use `bind`, a wrapper function, or another correct approach.",
  hints: [
    "The callback loses its object context when passed directly.",
    "Use `bind` or wrap the method call in another function.",
    "The final output should still come from `showName`.",
  ],
  starterCode: `const user = {
  name: "Surya",
  showName() {
    console.log(this.name);
  },
};

setTimeout(user.showName, 0);`,
  expectedOutcome: ["Surya"],
  difficulty: "Intermediate",
  conceptSlugs: ["this-keyword"],
  estimatedMinutes: 8,
};
