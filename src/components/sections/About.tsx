import { aboutImage } from "../../data/departmentImages";
import { aboutHighlights, companyInfo } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
        <Reveal>
          <div className="glass-panel electric-border overflow-hidden rounded-[36px] p-5">
            <img
              src={aboutImage}
              alt="Linha de materiais eletricos e estrutura de loja"
              className="h-full w-full rounded-[28px] object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <SectionHeading
            eyebrow="Sobre a empresa"
            title="Energia, qualidade e confianca para cada projeto"
            description="A LD Materiais Eletricos trabalha para oferecer produtos de qualidade e solucoes para instalacoes eletricas residenciais, comerciais e industriais. Nosso compromisso e proporcionar um atendimento proximo, agil e seguro para cada cliente."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-sky-100 bg-white p-5 shadow-[0_16px_34px_rgba(10,109,255,0.06)]"
              >
                <h3 className="font-display text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] border border-sky-100 bg-sky-50/60 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-ocean">
              Contato institucional
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {companyInfo.address}
              <br />
              {companyInfo.email}
              <br />
              {companyInfo.phoneDisplay}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
