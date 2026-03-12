"use client";

type RunButtonProps = {
  onRun: () => void;
  onReset: () => void;
  onCopy: () => void;
  onClearOutput: () => void;
  copyLabel: string;
  resetLabel: string;
  statusLabel: string;
};

export function RunButton({
  onRun,
  onReset,
  onCopy,
  onClearOutput,
  copyLabel,
  resetLabel,
  statusLabel,
}: RunButtonProps) {
  return (
    <div className="rounded-[1.5rem] border border-border bg-surface-strong p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Editor Actions
          </p>
          <p className="mt-2 text-sm text-muted">{statusLabel}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onRun}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Run Code
          </button>
          <button
            type="button"
            onClick={onCopy}
            className="rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/30"
          >
            {copyLabel}
          </button>
          <button
            type="button"
            onClick={onClearOutput}
            className="rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/30"
          >
            Clear Output
          </button>
          <button
            type="button"
            onClick={onReset}
            className="rounded-full border border-border bg-background/70 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/30"
          >
            {resetLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
