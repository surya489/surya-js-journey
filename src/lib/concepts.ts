import { concepts } from "@/concepts";

export function getAllConcepts() {
  return concepts;
}

export function getConceptBySlug(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}

export function getConceptSlugs() {
  return concepts.map((concept) => ({ slug: concept.slug }));
}

export function getRelatedConcepts(slugs: string[]) {
  return concepts.filter((concept) => slugs.includes(concept.slug));
}
