"use client";

import { executionSprints } from "@/lib/data";
import { motion } from "framer-motion";

export function ExecutionTimeline() {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface/70 p-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Diwali Countdown</p>
          <h2 className="font-heading text-3xl">15-day hypergrowth sprint</h2>
        </div>
        <p className="max-w-2xl text-white/60">
          Each phase has daily checklists, automation triggers, and KPI guardrails. Plug
          into ClickUp or Notion and let the control tower orchestrate.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {executionSprints.map((sprint) => (
          <motion.div
            key={sprint.phase}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-black/30 p-6"
          >
            <div className="text-xs uppercase tracking-[0.4em] text-white/50">
              {sprint.phase}
            </div>
            <p className="font-heading text-2xl">{sprint.name}</p>
            <p className="mt-2 text-sm text-white/70">{sprint.focus}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {sprint.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
