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
        title="Por que escolher a LD Materiais Elétricos?"
        description="A proposta do site é mostrar uma empresa sólida, preparada para orientar a compra e responder com velocidade, sem perder clareza comercial."
        align="center"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={benefit.title} delay={index * 0.05}>
              <article className="rounded-[28px] border border-brand-line bg-white/5 p-6 text-center shadow-card backdrop-blur">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow/12 text-brand-yellow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{benefit.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

