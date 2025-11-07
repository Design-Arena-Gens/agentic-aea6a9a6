import { resourceStack } from "@/lib/data";
import Link from "next/link";

export function ResourceStack() {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface/90 p-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Stack Arsenal</p>
          <h2 className="font-heading text-3xl">Free tools powering the agent swarm</h2>
        </div>
        <p className="max-w-2xl text-white/60">
          Only zero-cost or freemium tools with API hooks, perfect for scaling without burn.
          Each item links to curated setup docs and automation blueprints.
        </p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {resourceStack.map((category) => (
          <div
            key={category.category}
            className="rounded-3xl border border-white/10 bg-black/30 p-6"
          >
            <p className="font-heading text-xl text-accent">{category.category}</p>
            <div className="mt-4 space-y-4">
              {category.items.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 p-4">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="font-heading text-lg text-white transition hover:text-accent"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-2 text-sm text-white/60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
