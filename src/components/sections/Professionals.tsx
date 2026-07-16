import { BriefcaseBusiness, MessageCircleMore } from "lucide-react";
import { professionalAudiences } from "../../data/siteContent";
import { buildConsultantMessage } from "../../utils/whatsapp";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Professionals() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(72,179,255,0.12),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(10,109,255,0.1),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="grid gap-8 rounded-[36px] border border-sky-100 bg-white p-8 shadow-[0_20px_40px_rgba(10,109,255,0.06)] xl:grid-cols-[1fr_0.95fr] xl:items-center">
            <div>
              <SectionHeading
                eyebrow="Parceiros de obra e manutencao"
                title="Condicoes especiais para profissionais e empresas"
                description="Fale com nossa equipe e consulte condicoes para compras recorrentes, grandes quantidades e projetos especiais. A comunicacao ja foi pensada para funcionar bem com eletricistas, construtoras, sindicos e equipes de manutencao."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                {professionalAudiences.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-sky-100 bg-sky-50/70 p-6">
              <div className="inline-flex rounded-2xl bg-brand-ocean/10 p-3 text-brand-ocean">
                <BriefcaseBusiness className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-slate-950">
                Atendimento para compras recorrentes
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                O site direciona esse perfil de cliente para um contato comercial mais consultivo,
                ideal para listas maiores, cronogramas de obra e negociacoes por volume.
              </p>
              <a
                href={buildConsultantMessage()}
                target="_blank"
                rel="noreferrer"
                className="glow-button mt-6 inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-semibold"
              >
                <MessageCircleMore className="h-5 w-5" />
                Falar com um consultor
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
