import { ChevronRight, MessageCircleMore } from "lucide-react";
import { departmentImages } from "../../data/departmentImages";
import { featuredProducts } from "../../data/featuredProducts";
import { departmentCatalog } from "../../data/siteContent";
import { buildGenericMessage } from "../../utils/whatsapp";
import { ProductCard } from "../ui/ProductCard";
import { Reveal } from "../ui/Reveal";

type DepartmentPageProps = {
  departmentId: string;
  onNavigateHome: (sectionId?: string) => void;
};

export function DepartmentPage({ departmentId, onNavigateHome }: DepartmentPageProps) {
  const department = departmentCatalog.find((item) => item.id === departmentId) ?? departmentCatalog[0];
  const products = featuredProducts.filter((product) => product.categoryId === department.id);
  const departmentImage = departmentImages[department.id];

  return (
    <section className="min-h-[calc(100vh-12rem)] bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="rounded-[34px] border border-sky-100 bg-white p-8 shadow-[0_20px_40px_rgba(10,109,255,0.06)]">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <button
              type="button"
              onClick={() => onNavigateHome()}
              className="transition hover:text-brand-ocean"
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="text-brand-ocean">{department.name}</span>
          </div>

          <div className="mt-6 grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
            <div>
              <span className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-ocean">
                Departamento
              </span>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                {department.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {department.heroText}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {department.subcategories.map((subcategory) => (
                  <span
                    key={subcategory}
                    className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {subcategory}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-white">
                <img
                  src={departmentImage}
                  alt={department.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="rounded-[28px] border border-sky-100 bg-sky-50/70 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-brand-ocean">
                  Atendimento do departamento
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                  Fale com a equipe sobre {department.name.toLowerCase()}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Esta pagina esta pronta para operar como categoria real da loja, com banner em
                  PNG e produtos locais para os destaques principais.
                </p>
                <a
                  href={buildGenericMessage(`Ola! Quero atendimento para o departamento ${department.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button mt-6 inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-semibold"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  Pedir atendimento
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-ocean">
                Itens do departamento
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-950">
                Produtos em destaque de {department.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigateHome("categorias")}
              className="rounded-full border border-sky-100 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-ocean hover:text-brand-ocean"
            >
              Voltar para categorias
            </button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {products.length > 0 ? (
              products.map((product, index) => (
                <Reveal key={product.id} delay={index * 0.05}>
                  <ProductCard {...product} />
                </Reveal>
              ))
            ) : (
              <div className="rounded-[28px] border border-sky-100 bg-white p-8 text-slate-600 lg:col-span-2 xl:col-span-3">
                Ainda nao ha produtos cadastrados para este departamento.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
