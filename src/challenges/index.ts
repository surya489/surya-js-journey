import { asyncAwaitRefactorChallenge } from "@/challenges/async-await-refactor";
import { arrayFilterBasicsChallenge } from "@/challenges/array-filter-basics";
import { arrowTransformChallenge } from "@/challenges/arrow-transform";
import { closureCounterChallenge } from "@/challenges/closure-counter";
import { debounceWrapperChallenge } from "@/challenges/debounce-wrapper";
import { destructureProfileChallenge } from "@/challenges/destructure-profile";
import { eventLoopOrderChallenge } from "@/challenges/event-loop-order";
import { fixPromiseChainChallenge } from "@/challenges/fix-promise-chain";
import { functionReturnChallenge } from "@/challenges/function-return";
import { nullishDefaultsChallenge } from "@/challenges/nullish-defaults";
import { optionalThemeReadChallenge } from "@/challenges/optional-theme-read";
import { referenceMutationChallenge } from "@/challenges/reference-mutation";
import { scopeShadowingChallenge } from "@/challenges/scope-shadowing";
import { spreadRestMergeChallenge } from "@/challenges/spread-rest-merge";
import { thisBindingFixChallenge } from "@/challenges/this-binding-fix";
import { tryCatchParseChallenge } from "@/challenges/try-catch-parse";
import { variablesFixChallenge } from "@/challenges/variables-fix";

export const challenges = [
  variablesFixChallenge,
  functionReturnChallenge,
  arrowTransformChallenge,
  destructureProfileChallenge,
  spreadRestMergeChallenge,
  optionalThemeReadChallenge,
  nullishDefaultsChallenge,
  tryCatchParseChallenge,
  scopeShadowingChallenge,
  closureCounterChallenge,
  arrayFilterBasicsChallenge,
  eventLoopOrderChallenge,
  fixPromiseChainChallenge,
  asyncAwaitRefactorChallenge,
  referenceMutationChallenge,
  debounceWrapperChallenge,
  thisBindingFixChallenge,
];
