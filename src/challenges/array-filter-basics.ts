import type { Challenge } from "@/types/challenge";

export const arrayFilterBasicsChallenge: Challenge = {
  slug: "array-filter-basics",
  title: "Filter active lessons",
  summary:
    "Use `filter` to keep only the values that match a condition.",
  prompt:
    "Finish the filter callback so the final output becomes `2,3`.",
  hints: [
    "Return a condition from the callback.",
    "Keep only lesson numbers greater than `1`.",
    "The final log already joins the result for you.",
  ],
  starterCode: `const lessons = [1, 2, 3];
const activeLessons = lessons.filter((lesson) => {
  // your code here
});

console.log(activeLessons.join(","));`,
  expectedOutcome: ["2,3"],
  difficulty: "Beginner",
  conceptSlugs: ["arrays-and-methods", "callbacks"],
  estimatedMinutes: 7,
};
