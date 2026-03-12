import { asyncAwaitRefactorChallenge } from "@/challenges/async-await-refactor";
import { closureCounterChallenge } from "@/challenges/closure-counter";
import { debounceWrapperChallenge } from "@/challenges/debounce-wrapper";
import { eventLoopOrderChallenge } from "@/challenges/event-loop-order";
import { fixPromiseChainChallenge } from "@/challenges/fix-promise-chain";
import { thisBindingFixChallenge } from "@/challenges/this-binding-fix";

export const challenges = [
  closureCounterChallenge,
  eventLoopOrderChallenge,
  fixPromiseChainChallenge,
  asyncAwaitRefactorChallenge,
  debounceWrapperChallenge,
  thisBindingFixChallenge,
];
