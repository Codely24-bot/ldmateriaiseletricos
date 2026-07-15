import { categories, featuredProducts } from "../../data/siteContent";
import { Reveal } from "../ui/Reveal";
import { ProductCard } from "../ui/ProductCard";
import { SectionHeading } from "../ui/SectionHeading";

type FeaturedProductsProps = {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
};

export function FeaturedProducts({ selectedCategory, onCategoryChange }: FeaturedProductsProps) {
  const visibleProducts = featuredProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ? true : product.categoryId === selectedCategory;
    return matchesCategory;
  });

  return (
    <section id="produtos" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Vitrine da loja"
          title="Produtos em destaque com leitura de e-commerce"
          description="Mantive os itens como demonstrativos, mas a vitrine agora segue uma linguagem mais próxima de loja online: busca, filtros, preço, disponibilidade e CTA de compra."
          tone="light"
        />

        <div className="mt-10 rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(6,18,38,0.08)]">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onCategoryChange("all")}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                selectedCategory === "all"
                  ? "bg-brand-ocean text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-800 hover:border-brand-ocean hover:text-brand-ocean"
              }`}
            >
              Todas as categorias
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.id)}
                className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                  selectedCategory === category.id
                    ? "bg-brand-ocean text-white"
                    : "border border-slate-200 bg-slate-50 text-slate-800 hover:border-brand-ocean hover:text-brand-ocean"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.05}>
                <ProductCard {...product} />
              </Reveal>
            ))
          ) : (
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-8 text-slate-600 lg:col-span-2 xl:col-span-3">
              Nenhum produto demonstrativo encontrado para os filtros atuais. Ajuste a busca ou
              selecione outra categoria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
