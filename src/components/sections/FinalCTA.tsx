import { ArrowRight, MessageCircleMore } from "lucide-react";
import { buildGenericMessage } from "../../utils/whatsapp";
import { Reveal } from "../ui/Reveal";

type FinalCTAProps = {
  onQuoteClick: () => void;
};

export function FinalCTA({ onQuoteClick }: FinalCTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] border border-brand-line bg-[linear-gradient(135deg,#0a6dff_0%,#08172a_58%,#050b14_100%)] px-6 py-12 shadow-glow md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,213,74,0.2),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.12),transparent_16%),radial-gradient(circle_at_80%_80%,rgba(242,78,61,0.16),transparent_18%)]" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-yellow">Chamada final</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              Seu projeto começa com os materiais certos
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-100/90 md:text-lg">
              Conte com a LD Materiais Elétricos para encontrar qualidade, variedade e atendimento
              rápido.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#ffe17d]"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={buildGenericMessage("Olá! Quero falar agora com a LD Materiais Elétricos.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <MessageCircleMore className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

