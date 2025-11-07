"use client";

import { automationNodes } from "@/lib/data";
import { motion } from "framer-motion";

const categories = ["Input", "Process", "AI Engine", "Output", "Monitor"] as const;

export function AutomationBlueprint() {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface/70 p-10 backdrop-blur">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Stack Blueprint</p>
          <h2 className="font-heading text-3xl">Plug-and-play AI automation fabric</h2>
        </div>
        <p className="max-w-2xl text-white/60">
          Engineered around free/oss orchestrators like Activepieces, Windmill, and N8N.
          Each node maps to ready-to-import workflows covering sourcing, content, commerce,
          fulfillment, and finance.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category}
            className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/20 p-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{category}</p>
            </div>
            <div className="space-y-4">
              {automationNodes
                .filter((node) => node.category === category)
                .map((node, index) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="font-heading text-lg">{node.label}</p>
                    <p className="text-sm text-white/70">{node.description}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
