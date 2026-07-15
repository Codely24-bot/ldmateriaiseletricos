import { companyInfo, aboutHighlights } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
        <Reveal>
          <div className="glass-panel electric-border rounded-[36px] p-5 shadow-card">
            <img
              src="/storefront-showcase.svg"
              alt="Ilustração institucional da LD Materiais Elétricos"
              className="w-full rounded-[28px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <SectionHeading
            eyebrow="Sobre a empresa"
            title="Energia, qualidade e confiança para cada projeto"
            description="A LD Materiais Elétricos trabalha para oferecer produtos de qualidade e soluções para instalações elétricas residenciais, comerciais e industriais. Nosso compromisso é proporcionar um atendimento próximo, ágil e seguro para cada cliente."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[26px] border border-brand-line bg-white/5 p-5 shadow-card"
              >
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] border border-brand-line bg-slate-950/70 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-sky">Contato institucional</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
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

