import { faq } from "@/lib/data";

export function FAQ() {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface/70 p-10">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Assurance</p>
          <h2 className="font-heading text-3xl">Operational clarity before you launch</h2>
        </div>
        <p className="max-w-2xl text-white/60">
          The automation HQ is built for founders who demand lightning-fast execution with
          airtight compliance. These are the questions we solved repeatedly.
        </p>
      </div>
      <div className="mt-8 space-y-4">
        {faq.map((item) => (
          <details
            key={item.question}
            className="group rounded-3xl border border-white/10 bg-black/30 p-6"
          >
            <summary className="cursor-pointer list-none text-lg font-medium text-white transition group-open:text-accent">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-white/60">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
