"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { SmoothNavigation } from "@/components/layout/SmoothNavigation";
import type { Concept } from "@/types/concept";

type LayoutWrapperProps = {
  concepts: Concept[];
  children: ReactNode;
};

export function LayoutWrapper({ concepts, children }: LayoutWrapperProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  return (
    <main className="min-h-screen px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 xl:px-8 xl:py-8">
      <Suspense fallback={null}>
        <SmoothNavigation />
      </Suspense>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <Navbar
          concepts={concepts}
          onMenuToggle={() => setMobileSidebarOpen((current) => !current)}
        />

        <div
          className={`fixed inset-0 z-40 bg-stone-950/45 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
            mobileSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setMobileSidebarOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`fixed inset-y-3 left-3 z-50 w-[min(20rem,calc(100vw-1.5rem))] xl:hidden ${
            mobileSidebarOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`h-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mobileSidebarOpen ? "translate-x-0" : "-translate-x-[110%]"
            }`}
          >
            <Sidebar mobile onClose={() => setMobileSidebarOpen(false)} />
          </div>
        </div>

        <div className="grid items-start gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <div className="hidden xl:sticky xl:top-8 xl:block">
            <Sidebar />
          </div>
          <section className="surface-raise min-w-0 rounded-[1.5rem] border border-border bg-surface p-4 shadow-[var(--shadow)] backdrop-blur sm:p-5 md:p-6 xl:rounded-[1.75rem] xl:p-8">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
