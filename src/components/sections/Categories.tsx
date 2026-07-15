import {
  BadgePercent,
  Cable,
  CircuitBoard,
  Factory,
  Lightbulb,
  Package,
  Plug,
  Repeat,
  Shield,
  Wrench,
} from "lucide-react";
import { categories } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Cable, Plug, Shield, Lightbulb, CircuitBoard, Wrench, Repeat, Package, BadgePercent, Factory];

type CategoriesProps = {
  onSelectCategory: (categoryId: string) => void;
};

export function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Categorias"
        title="Encontre tudo o que você precisa"
        description="A vitrine foi estruturada para facilitar a consulta por linha de produto e levar o visitante rapidamente para os itens de maior interesse."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={category.id} delay={index * 0.04}>
              <article className="group flex h-full flex-col rounded-[28px] border border-brand-line bg-white/5 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:border-brand-sky hover:bg-white/7">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow/12 text-brand-yellow">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{category.details}</p>
                <button
                  type="button"
                  onClick={() => onSelectCategory(category.id)}
                  className="mt-6 inline-flex w-fit rounded-full border border-brand-line px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-yellow hover:text-brand-yellow"
                >
                  Ver departamento
                </button>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
