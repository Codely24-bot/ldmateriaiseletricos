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
import { departmentImages } from "../../data/departmentImages";
import { categories } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const icons = [Cable, Plug, Shield, Lightbulb, CircuitBoard, Wrench, Repeat, Package, BadgePercent, Factory];

type CategoriesProps = {
  onSelectCategory: (categoryId: string) => void;
};

export function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-24">
      <SectionHeading
        eyebrow="Categorias"
        title="Encontre tudo o que voce precisa"
        description="Cada categoria recebe uma apresentacao clara, com imagem, descricao e acesso direto ao departamento."
      />

      <div className="no-scrollbar mt-6 flex gap-3 overflow-x-auto pb-2 md:hidden">
        {categories.map((category) => (
          <button
            key={`chip-${category.id}`}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            className="shrink-0 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_10px_22px_rgba(10,109,255,0.06)] transition hover:border-brand-ocean hover:text-brand-ocean"
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = icons[index];
          const categoryImage = departmentImages[category.id];

          return (
            <Reveal key={category.id} delay={index * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-sky-100 bg-white shadow-[0_16px_34px_rgba(10,109,255,0.06)] transition hover:-translate-y-1 hover:border-brand-ocean md:rounded-[28px]">
                <div className="relative h-40 overflow-hidden border-b border-sky-100 md:h-48">
                  <img
                    src={categoryImage}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/92 text-brand-ocean shadow-lg md:left-5 md:top-5 md:h-14 md:w-14">
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                </div>

                <div className="flex h-full flex-col p-4 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-slate-950 md:text-2xl">
                      {category.name}
                    </h3>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-ocean md:hidden">
                      Categoria
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{category.details}</p>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    className="brand-button-muted mt-5 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold md:mt-6 md:w-fit"
                  >
                    Ver departamento
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
