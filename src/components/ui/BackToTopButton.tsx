import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-line bg-slate-950/85 text-white shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-brand-sky hover:text-brand-yellow"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

