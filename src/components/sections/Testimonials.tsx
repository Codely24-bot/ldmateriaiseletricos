import { Quote, Star } from "lucide-react";
import { testimonials } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Depoimentos"
        title="Percepcao de confianca para apoiar a decisao do cliente"
        description="Os depoimentos abaixo sao demonstrativos e devem ser substituidos por avaliacoes reais da empresa. A estrutura ja esta pronta para cards ou evolucao futura para carrossel."
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.06}>
            <article className="h-full rounded-[30px] border border-sky-100 bg-white p-6 shadow-[0_16px_34px_rgba(10,109,255,0.06)]">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ocean/10 text-brand-ocean">
                  <Quote className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1 text-brand-ocean">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">"{testimonial.quote}"</p>
              <div className="mt-6 border-t border-sky-100 pt-5">
                <p className="font-display text-xl font-semibold text-slate-950">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
