import type { Challenge } from "@/types/challenge";

export const debounceWrapperChallenge: Challenge = {
  slug: "debounce-wrapper",
  title: "Complete a debounce wrapper",
  summary:
    "Finish a debounce helper so repeated calls only run the latest callback after the delay.",
  prompt:
    "Implement the missing debounce logic. The wrapped function should only log once after rapid calls stop. Keep `timerId` private and make sure each new call cancels the previous timeout.",
  hints: [
    "Call `clearTimeout(timerId)` before creating a new timeout.",
    "Use `setTimeout` to delay the function call.",
    "Pass the latest arguments through to `fn`.",
  ],
  starterCode: `function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    // your code here
  };
}

const logSearch = debounce((term) => {
  console.log(term);
}, 200);

logSearch("debounce ready");`,
  expectedOutcome: ["debounce ready"],
  difficulty: "Intermediate",
  conceptSlugs: ["debounce", "closure"],
  estimatedMinutes: 12,
};
