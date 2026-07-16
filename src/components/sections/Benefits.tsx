import { Headphones, Layers3, ShieldCheck, Zap } from "lucide-react";
import { benefits } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [ShieldCheck, Headphones, Layers3, Zap];

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Diferenciais"
        title="Por que escolher a LD Materiais Eletricos?"
        description="A proposta do site e mostrar uma empresa solida, preparada para orientar a compra e responder com velocidade, sem perder clareza comercial."
        align="center"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={benefit.title} delay={index * 0.05}>
              <article className="rounded-[28px] border border-sky-100 bg-white p-6 text-center shadow-[0_16px_34px_rgba(10,109,255,0.06)]">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ocean/10 text-brand-ocean">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
