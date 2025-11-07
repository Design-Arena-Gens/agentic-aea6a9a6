export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Agentic Global Employee • Built for unstoppable founders.</p>
        <p>
          Automation blueprints synced via Notion + GitHub. Status:{" "}
          <span className="text-accent">Operational</span>
        </p>
      </div>
    </footer>
  );
}
