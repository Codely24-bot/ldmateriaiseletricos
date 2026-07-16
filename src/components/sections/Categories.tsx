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
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-24 md:px-6">
      <SectionHeading
        eyebrow="Categorias"
        title="Encontre tudo o que voce precisa"
        description="Cada categoria recebe uma apresentacao clara, com imagem, descricao e acesso direto ao departamento."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = icons[index];
          const categoryImage = departmentImages[category.id];

          return (
            <Reveal key={category.id} delay={index * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-[0_16px_34px_rgba(10,109,255,0.06)] transition hover:-translate-y-1 hover:border-brand-ocean">
                <div className="relative h-48 overflow-hidden border-b border-sky-100">
                  <img
                    src={categoryImage}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute left-5 top-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/92 text-brand-ocean shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="flex h-full flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-slate-950">{category.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{category.details}</p>
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    className="mt-6 inline-flex w-fit rounded-full border border-sky-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-ocean hover:text-brand-ocean"
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
