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
        <div className="relative overflow-hidden rounded-[36px] border border-sky-100 bg-[linear-gradient(135deg,#f8fbff_0%,#e9f4ff_28%,#d8ebff_100%)] px-6 py-12 shadow-[0_18px_40px_rgba(10,109,255,0.08)] md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(10,109,255,0.08),transparent_16%),radial-gradient(circle_at_80%_80%,rgba(72,179,255,0.12),transparent_18%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-ocean">
              Chamada final
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              Seu projeto comeca com os materiais certos
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Conte com a LD Materiais Eletricos para encontrar qualidade, variedade e atendimento
              rapido.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={onQuoteClick}
                className="glow-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold"
              >
                Solicitar orcamento
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={buildGenericMessage("Ola! Quero falar agora com a LD Materiais Eletricos.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-100 bg-white px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-brand-ocean hover:text-brand-ocean"
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
