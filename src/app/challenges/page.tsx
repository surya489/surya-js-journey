import { ChallengeSearch } from "@/components/challenge/ChallengeSearch";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import { getAllChallenges } from "@/lib/challenges";
import { getAllConcepts } from "@/lib/concepts";

export default function ChallengesPage() {
  const concepts = getAllConcepts();
  const challenges = getAllChallenges();

  return (
    <LayoutWrapper concepts={concepts}>
      <div className="space-y-8">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Challenges
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.02]">
            Practice JavaScript with targeted exercises.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Work through focused exercises tied to the concepts in the platform.
            Each challenge includes a prompt, starter code, and expected
            outcome so you can practice deliberately.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Total Challenges</p>
            <p className="mt-2 text-3xl font-black text-accent">{challenges.length}</p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Estimated Time</p>
            <p className="mt-2 text-base leading-7 text-muted">
              Most challenges can be completed in 8 to 12 minutes.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-surface-strong p-4">
            <p className="text-sm font-semibold text-foreground">Workflow</p>
            <p className="mt-2 text-base leading-7 text-muted">
              Read the brief, solve in the editor, then validate your output.
            </p>
          </div>
        </div>

        <ChallengeSearch challenges={challenges} />
      </div>
    </LayoutWrapper>
  );
}
