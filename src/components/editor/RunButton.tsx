"use client";

function ActionIcon({
  kind,
}: {
  kind: "run" | "copy" | "clear" | "reset";
}) {
  if (kind === "run") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-current"
        aria-hidden="true"
      >
        <path d="M7 5.5v13l10-6.5-10-6.5Z" />
      </svg>
    );
  }

  if (kind === "copy") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="10" height="10" rx="2" />
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1" />
      </svg>
    );
  }

  if (kind === "clear") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 7h16" />
        <path d="M9.5 3.5h5L16 7H8l1.5-3.5Z" />
        <path d="M6.5 7 7.4 19a2 2 0 0 0 2 1.8h5.2a2 2 0 0 0 2-1.8L17.5 7" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11a8 8 0 1 0 2 5.3" />
      <path d="M20 4v7h-7" />
    </svg>
  );
}

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
    <div className="rounded-[1.4rem] border border-border bg-surface-strong p-4 sm:p-5 md:rounded-[1.5rem]">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-5">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-accent uppercase">
            Editor Actions
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted">{statusLabel}</p>
        </div>

        <div className="overlay-surface rounded-[1.1rem] border border-border p-2.5 md:rounded-[1.2rem]">
          <div className="flex flex-wrap gap-2 sm:justify-start lg:justify-end">
            <button
              type="button"
              onClick={onRun}
              aria-label="Run code"
              title="Run code"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-strong"
            >
              <ActionIcon kind="run" />
            </button>
            <button
              type="button"
              onClick={onCopy}
              aria-label={copyLabel}
              title={copyLabel}
              className="overlay-surface-strong inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent/30"
            >
              <ActionIcon kind="copy" />
            </button>
            <button
              type="button"
              onClick={onClearOutput}
              aria-label="Clear output"
              title="Clear output"
              className="overlay-surface-strong inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent/30"
            >
              <ActionIcon kind="clear" />
            </button>
            <button
              type="button"
              onClick={onReset}
              aria-label={resetLabel}
              title={resetLabel}
              className="overlay-surface-strong inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent/30"
            >
              <ActionIcon kind="reset" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
