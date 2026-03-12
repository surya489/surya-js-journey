import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/concepts", label: "Concepts" },
  { href: "/playground", label: "Playground" },
  { href: "/challenges", label: "Challenges" },
];

export function Navbar() {
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

        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-border bg-surface-strong px-4 py-2 text-sm font-semibold text-muted transition-colors hover:border-accent/30 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
