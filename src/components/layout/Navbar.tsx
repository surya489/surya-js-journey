"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/concepts", label: "Concepts" },
  { href: "/playground", label: "Playground" },
  { href: "/challenges", label: "Challenges" },
  { href: "/visualizer", label: "Visualizer" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="rounded-[1.75rem] border border-border bg-surface px-5 py-4 shadow-[var(--shadow)] backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
            Surya JS Journey
          </p>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-foreground">
            Learn JavaScript by exploring concepts and code.
          </h1>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  pathname === item.href
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-surface-strong text-muted hover:border-accent/30 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
