import type { Concept } from "@/types/concept";

export const eventDelegationConcept: Concept = {
  slug: "event-delegation",
  title: "Event Delegation",
  summary:
    "Event delegation handles events from many child elements by attaching one listener to a common parent.",
  description:
    "Because browser events bubble up the DOM, a parent element can listen for clicks from its children and decide what to do based on the event target. This pattern reduces repeated listeners, works well for dynamic content, and is a standard frontend technique every JavaScript developer should know.",
  difficulty: "Intermediate",
  category: "Browser Events",
  keyPoints: [
    "Delegation works because events bubble from child elements to ancestors.",
    "One listener on a parent can manage many child interactions.",
    "`event.target` and `closest()` are common tools for delegated handlers.",
  ],
  commonMistakes: [
    "Attaching delegation to an element that does not actually receive the bubbled event.",
    "Using `event.target` directly without checking whether it matches the intended child.",
    "Forgetting that not every browser event bubbles.",
  ],
  expectedOutput: ["Clicked lesson-2"],
  relatedConcepts: ["callbacks", "event-loop", "scope"],
  exampleCode: `const fakeEvent = {
  target: {
    closest(selector) {
      if (selector === "[data-id]") {
        return {
          dataset: { id: "lesson-2" },
        };
      }

      return null;
    },
  },
};

function handleListClick(event) {
  const item = event.target.closest("[data-id]");

  if (item) {
    console.log(\`Clicked \${item.dataset.id}\`);
  }
}

handleListClick(fakeEvent);`,
};
