import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import type { Concept } from "@/types/concept";

type LayoutWrapperProps = {
  concepts: Concept[];
  children: ReactNode;
};

export function LayoutWrapper({ concepts, children }: LayoutWrapperProps) {
  return (
    <main className="min-h-screen px-3 py-4 md:px-6 md:py-6 xl:px-8 xl:py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <Navbar />

        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <Sidebar concepts={concepts} />
          <section className="rounded-[1.75rem] border border-border bg-surface p-5 shadow-[var(--shadow)] backdrop-blur md:p-8">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
