import { growthTargets } from "@/lib/data";

export function GrowthTargets() {
  return (
    <section className="space-y-6 rounded-3xl border border-white/10 bg-surface/70 p-10 backdrop-blur">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Revenue Compass</p>
          <h2 className="font-heading text-3xl">North-star automation outcomes</h2>
        </div>
        <p className="max-w-xl text-white/60">
          Aggressive yet achievable targets benchmarked against top 1% Indian solopreneurs.
          Each pod is supported by AI agents, compliance checklists, and reinvestment loops.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {growthTargets.map((target) => (
          <div
            key={target.label}
            className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 transition hover:border-accent/60 hover:shadow-glow"
          >
            <p className="text-sm text-white/50">{target.label}</p>
            <p className="font-heading text-2xl text-white">{target.target}</p>
            <p className="text-xs text-accent/80">Timeline: {target.timeline}</p>
            <p className="mt-4 text-sm text-white/70">{target.automation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
