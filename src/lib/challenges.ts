import { challenges } from "@/challenges";

export function getAllChallenges() {
  return challenges;
}

export function getChallengeBySlug(slug: string) {
  return challenges.find((challenge) => challenge.slug === slug);
}

export function getChallengeSlugs() {
  return challenges.map((challenge) => ({ slug: challenge.slug }));
}

export function getChallengesByConceptSlug(slug: string) {
  return challenges.filter((challenge) => challenge.conceptSlugs.includes(slug));
}
