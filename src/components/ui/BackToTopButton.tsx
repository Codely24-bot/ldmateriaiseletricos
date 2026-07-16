import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-sky-100 bg-white text-brand-ocean shadow-[0_12px_26px_rgba(10,109,255,0.12)] transition hover:-translate-y-1 hover:border-brand-ocean hover:bg-sky-50"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
