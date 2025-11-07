import { quickActions } from "@/lib/data";

export function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface/80 p-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Execution Pods</p>
          <h2 className="font-heading text-3xl">Mission-critical growth wizards</h2>
        </div>
        <p className="max-w-2xl text-white/60">
          Pick a revenue lever, press launch. Each mission bundles tech stack, SOPs, and AI
          prompts to execute without human bottlenecks.
        </p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {quickActions.map((action) => (
          <div
            key={action.title}
            className="rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-accent/70 hover:shadow-glow"
          >
            <p className="font-heading text-xl">{action.title}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {action.steps.map((step) => (
                <li key={step} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-accent/80">
              Stack: {action.tools.join(" · ")}
            </div>
            <p className="mt-4 text-sm text-primary/80">{action.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
