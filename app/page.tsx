import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { GrowthTargets } from "@/components/GrowthTargets";
import { AutomationBlueprint } from "@/components/AutomationBlueprint";
import { QuickActions } from "@/components/QuickActions";
import { ExecutionTimeline } from "@/components/ExecutionTimeline";
import { ResourceStack } from "@/components/ResourceStack";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StrategyForm } from "@/components/StrategyForm";

export default function Home() {
  return (
    <div className="bg-background">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <section id="mission">
          <Hero />
        </section>
        <section id="targets">
          <GrowthTargets />
        </section>
        <section id="automation">
          <AutomationBlueprint />
        </section>
        <section id="launch">
          <StrategyForm />
        </section>
        <section id="actions">
          <QuickActions />
        </section>
        <section id="timeline">
          <ExecutionTimeline />
        </section>
        <section id="stack">
          <ResourceStack />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}
