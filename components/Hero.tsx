"use client";

import { motion } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const metrics = [
  { label: "AI Agents Deployed", value: "142", trend: "+27 last week" },
  { label: "Automation Coverage", value: "93%", trend: "Ops handled by bots" },
  { label: "Cashflow Velocity", value: "12.4x", trend: "vs traditional teams" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/80 p-10 shadow-glow backdrop-blur">
      <div className="absolute inset-0 bg-grid-glow opacity-70" />
      <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">
            Agentic Global Operating System
          </span>
          <h1 className="font-heading text-4xl leading-tight md:text-6xl">
            Launch automated Indian businesses at scale with a single AI command
          </h1>
          <p className="text-lg text-white/70">
            Architected for founders who want Rochan Shankar-style scale without teams. We
            assemble AI-native playbooks across dropshipping, affiliate, freelance, and
            knowledge products—as a plug-and-play growth operating system. 15 days to go
            before Diwali? Consider it handled.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-primary/80">
              <RocketLaunchIcon className="h-5 w-5" />
              Initiate Diwali Blitz Mode
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-white/60 hover:text-white">
              Download Automation Blueprint
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-black/30 p-6">
          <div>
            <p className="font-heading text-lg text-accent">
              15-Day Crorepati Command Center
            </p>
            <p className="text-sm text-white/60">
              Structured weekly sprints, revenue scorecards, and instant agent deployment.
            </p>
          </div>
          <div className="grid gap-4">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-white/60">{metric.label}</p>
                <p className="font-heading text-3xl">{metric.value}</p>
                <p className="text-xs text-accent">{metric.trend}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-white/50">
            All metrics auto-sync to Notion + Data Studio dashboards via free automation
            stack.
          </p>
        </div>
      </div>
    </section>
  );
}
