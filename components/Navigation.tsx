import Link from "next/link";

const links = [
  { label: "Mission Control", href: "#mission" },
  { label: "Automation Fabric", href: "#automation" },
  { label: "Launch Sprints", href: "#timeline" },
  { label: "Stacks", href: "#stack" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl text-white">
          Agentic HQ
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="rounded-full border border-accent/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-accent transition hover:bg-accent/20"
          href="#launch"
        >
          Launch
        </a>
      </div>
    </header>
  );
}
