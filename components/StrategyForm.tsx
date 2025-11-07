"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  capital: z.number().min(0).max(5000000),
  focus: z.enum(["dropshipping", "affiliate", "freelancing", "info"]),
  hoursPerDay: z.number().min(1).max(16),
  risk: z.enum(["low", "balanced", "aggressive"])
});

type FormValues = z.infer<typeof schema>;

export function StrategyForm() {
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      capital: 500000,
      focus: "dropshipping",
      hoursPerDay: 5,
      risk: "balanced"
    }
  });

  const playbookMap: Record<FormValues["focus"], string[]> = useMemo(
    () => ({
      dropshipping: [
        "Activate supplier crawler + margin analyzer to refresh SKU shortlist daily.",
        "Launch tri-market storefront sync (Amazon, Flipkart, Meesho) backed by Sumtracker.",
        "Deploy paid ad guardrails: ₹{budget} daily with auto kill-switch at 2x CPA."
      ],
      affiliate: [
        "Generate 30 faceless video scripts/day; auto-produce via D-ID pipeline.",
        "Syndicate to YouTube Shorts, Instagram Reels, and Facebook Reels with queued captions.",
        "Route high-intent leads into WhatsApp broadcast & email journeys for warm conversions."
      ],
      freelancing: [
        "Scrape 200 leads/day from Product Hunt launches with enrichment via Clearbit proxy.",
        "AI proposal engine builds ROI narrative and dynamic pricing per lead quality.",
        "Delivery bot outputs weekly analytics, Loom walkthroughs, and upsell prompts."
      ],
      info: [
        "Research top 20 high-demand Play Store/Kindle niches using intelligence feeds.",
        "Auto-generate 15-chapter structure, draft, and design in Canva bulk workflows.",
        "Launch via Gumroad + Shopify digital + affiliate co-marketing bundles."
      ]
    }),
    []
  );

  const onSubmit = (values: FormValues) => {
    const transformed = playbookMap[values.focus].map((line) =>
      line.replace("{budget}", Math.round(values.capital * 0.05).toLocaleString("en-IN"))
    );

    const velocity = values.hoursPerDay >= 8 ? "hyper" : values.hoursPerDay >= 5 ? "fast" : "steady";
    const guardrail =
      values.risk === "low"
        ? "Focus on cashflow-positive SKUs; reinvest only 40% profits."
        : values.risk === "balanced"
        ? "Split profits 60/40 between reinvestment and reserve; monitor CAC daily."
        : "Reinvest 80% profits for 6 weeks; stack influencer co-marketing to widen moat.";

    setRecommendations([
      `Recommended execution velocity: ${velocity.toUpperCase()}.`,
      ...transformed,
      guardrail
    ]);
    toast.success("Strategy calibrated. Deploy the swarm!");
  };

  return (
    <div className="relative rounded-3xl border border-accent/60 bg-black/30 p-8">
      <Toaster position="bottom-right" />
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">AI Navigator</p>
          <h3 className="font-heading text-2xl">Personalized 15-day sprint</h3>
        </div>
        <p className="max-w-md text-sm text-white/60">
          Feed in your constraints, get agent deployment plan, budget allocation, and risk
          guardrails automatically.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <Field label="Working Capital (₹)">
          <input
            type="number"
            className={clsx(
              "w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent",
              errors.capital && "border-red-400"
            )}
            step={50000}
            {...register("capital", { valueAsNumber: true })}
          />
        </Field>
        <Field label="Primary Growth Pod">
          <select
            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
            {...register("focus")}
          >
            <option value="dropshipping">Dropshipping</option>
            <option value="affiliate">Affiliate Marketing</option>
            <option value="freelancing">Freelancing Agency</option>
            <option value="info">Info Products & Ebooks</option>
          </select>
        </Field>
        <Field label="Commitment (hrs/day)">
          <input
            type="number"
            className={clsx(
              "w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent",
              errors.hoursPerDay && "border-red-400"
            )}
            min={1}
            max={16}
            {...register("hoursPerDay", { valueAsNumber: true })}
          />
        </Field>
        <Field label="Risk Appetite">
          <select
            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
            {...register("risk")}
          >
            <option value="low">Low</option>
            <option value="balanced">Balanced</option>
            <option value="aggressive">Aggressive</option>
          </select>
        </Field>
        <div className="md:col-span-2 lg:col-span-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Calibrate Growth Command
          </button>
        </div>
      </form>

      <AnimatePresence>
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="font-heading text-lg text-accent">Launch Sequence</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {recommendations.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-2 text-sm text-white/70">
      <span className="block text-xs uppercase tracking-[0.3em] text-white/50">{label}</span>
      {children}
    </label>
  );
}
