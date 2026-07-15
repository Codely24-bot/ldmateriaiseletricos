import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  MessageCircleMore,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  categories,
  companyInfo,
  departmentCatalog,
  featuredProducts,
  navigation,
  topHighlights,
} from "../../data/siteContent";
import { buildGenericMessage } from "../../utils/whatsapp";

type HeaderProps = {
  activeDepartmentId: string | null;
  activePage: string | null;
  onNavigateDepartment: (departmentId: string) => void;
  onNavigateProducts: () => void;
  onNavigateHome: (sectionId?: string) => void;
};

function Brand() {
  return (
    <div className="flex items-center gap-3 text-left">
      <img
        src="/logo-real.jpeg"
        alt={companyInfo.name}
        className="h-12 w-12 rounded-2xl object-cover object-center shadow-glow"
      />
      <div>
        <p className="font-display text-lg font-semibold tracking-[0.3em] text-white">LD</p>
        <p className="text-sm font-medium text-slate-300">{companyInfo.name}</p>
      </div>
    </div>
  );
}

type DepartmentsMegaMenuProps = {
  activeDepartmentId: string | null;
  onNavigateDepartment: (departmentId: string) => void;
};

function DepartmentsMegaMenu({
  activeDepartmentId,
  onNavigateDepartment,
}: DepartmentsMegaMenuProps) {
  const [hoveredDepartmentId, setHoveredDepartmentId] = useState<string>(
    activeDepartmentId ?? departmentCatalog[0]?.id ?? "",
  );

  const activeDepartment =
    departmentCatalog.find((item) => item.id === hoveredDepartmentId) ?? departmentCatalog[0];
  const relatedProducts = featuredProducts
    .filter((product) => product.categoryId === activeDepartment.id)
    .slice(0, 4);

  return (
    <div className="group relative">
      <div className="inline-flex cursor-default items-center gap-3 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-slate-950 transition group-hover:bg-[#ffe17d]">
        Todos os departamentos
        <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
      </div>

      <div className="pointer-events-none absolute left-0 top-full z-50 mt-3 w-[860px] max-w-[calc(100vw-3rem)] opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-[18px] border border-brand-line bg-[#0a1322] shadow-[0_22px_60px_rgba(2,10,28,0.6)]">
          <div className="grid grid-cols-[0.84fr_1.16fr]">
            <div className="max-h-[34rem] overflow-y-auto border-r border-brand-line bg-[#0b1628] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-yellow">
                Departamentos
              </p>
              <div className="mt-3 grid gap-1">
                {categories.map((category) => {
                  const isActive = category.id === activeDepartment.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onMouseEnter={() => setHoveredDepartmentId(category.id)}
                      onFocus={() => setHoveredDepartmentId(category.id)}
                      onClick={() => onNavigateDepartment(category.id)}
                      className={`rounded-xl border px-3 py-2 text-left transition ${
                        isActive
                          ? "border-brand-line bg-[#172338]"
                          : "border-[#101c31] bg-[#0f182a] hover:border-brand-line hover:bg-[#152033]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-display text-[15px] font-semibold text-white">
                            {category.name}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#0c1525] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-sky">
                    {activeDepartment.name}
                  </p>
                  <h3 className="mt-1 max-w-xl font-display text-xl font-semibold text-white">
                    {activeDepartment.heroTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateDepartment(activeDepartment.id)}
                  className="shrink-0 rounded-full border border-brand-line px-3 py-1.5 text-xs font-semibold text-white transition hover:border-brand-yellow hover:text-brand-yellow"
                >
                  Ver todo departamento
                </button>
              </div>

              <div className="mt-4 grid grid-cols-[0.9fr_1.1fr] gap-4">
                <div className="rounded-[16px] border border-brand-line bg-[#101b2d] p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-yellow">
                    Subcategorias
                  </p>
                  <div className="mt-3 grid gap-1">
                    {activeDepartment.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        type="button"
                        onClick={() => onNavigateDepartment(activeDepartment.id)}
                        className="flex items-center justify-between rounded-xl border border-[#152238] bg-[#0d1728] px-3 py-2 text-left text-sm font-medium text-slate-100 transition hover:border-brand-line hover:bg-[#162133]"
                      >
                        <span>{subcategory}</span>
                        <ChevronRight className="h-4 w-4 text-slate-500" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[16px] border border-brand-line bg-[#101b2d] p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-sky">
                    Produtos relacionados
                  </p>
                  <div className="mt-3 grid gap-1">
                  {relatedProducts.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => onNavigateDepartment(activeDepartment.id)}
                        className="rounded-xl border border-[#152238] bg-[#0d1728] px-3 py-2 text-left transition hover:border-brand-line hover:bg-[#162133]"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-sky">
                          {product.category}
                        </p>
                        <p className="mt-1 font-display text-[15px] font-semibold text-white">
                          {product.name}
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-sm">
                          <span className="text-slate-300">{product.price}</span>
                          <span className="text-emerald-400">{product.availability}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header({
  activeDepartmentId,
  activePage,
  onNavigateDepartment,
  onNavigateProducts,
  onNavigateHome,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleNavigationClick = (href: string) => {
    if (href === "#produtos") {
      onNavigateProducts();
      setOpen(false);
      return;
    }

    onNavigateHome(href.replace("#", ""));
    setOpen(false);
  };

  return (
    <header
      id="inicio"
      className="sticky top-0 z-50 border-y border-brand-line bg-slate-950/95 backdrop-blur"
    >
      <div className="hidden border-b border-brand-line lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2.5 text-xs md:px-6">
          <div className="flex items-center justify-center gap-6 text-slate-300">
            {topHighlights.map((item) => (
              <span key={item} className="whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex items-center gap-4 lg:gap-6">
          <button type="button" onClick={() => onNavigateHome()}>
            <Brand />
          </button>

          <label className="hidden flex-1 items-center gap-3 rounded-full border border-brand-line bg-white px-5 py-3 shadow-card lg:flex">
            <Search className="h-5 w-5 text-brand-ocean" />
            <input
              type="text"
              placeholder="O que você procura em materiais elétricos?"
              className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
              aria-label="Buscar no catálogo"
            />
          </label>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <a
              href={buildGenericMessage("Olá! Quero ajuda para comprar na loja online da LD Materiais Elétricos.")}
              target="_blank"
              rel="noreferrer"
              className="glow-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
            >
              <MessageCircleMore className="h-4 w-4" />
              Atendimento
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-brand-yellow hover:text-brand-yellow"
            >
              <ShoppingCart className="h-4 w-4" />
              Carrinho
            </button>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <label className="mt-4 flex items-center gap-3 rounded-full border border-brand-line bg-white px-4 py-3 shadow-card lg:hidden">
          <Search className="h-5 w-5 text-brand-ocean" />
          <input
            type="text"
            placeholder="Buscar produtos"
            className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
            aria-label="Buscar produtos"
          />
        </label>
      </div>

      <div className="hidden border-t border-brand-line lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-3 md:px-6">
          <DepartmentsMegaMenu
            activeDepartmentId={activeDepartmentId}
            onNavigateDepartment={onNavigateDepartment}
          />
          <nav className="flex flex-nowrap items-center gap-7 overflow-x-auto whitespace-nowrap text-sm">
            {navigation.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigationClick(item.href)}
                className={`font-semibold transition hover:text-brand-yellow ${
                  item.href === "#produtos" && activePage === "produtos"
                    ? "text-brand-yellow"
                    : "text-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="border-t border-brand-line bg-slate-950/95 p-6 shadow-card backdrop-blur lg:hidden"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-5 border-b border-brand-line pb-5">
                <button type="button" onClick={() => handleNavigationClick("#inicio")}>
                  <Brand />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigationClick(item.href)}
                    className="rounded-2xl border border-transparent px-4 py-3 text-left text-base font-semibold text-slate-100 transition hover:border-brand-line hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="mt-6 rounded-[24px] border border-brand-line bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow">
                  Departamentos
                </p>
                <div className="mt-4 grid gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => {
                        onNavigateDepartment(category.id);
                        setOpen(false);
                      }}
                      className="rounded-2xl border border-transparent px-4 py-3 text-left text-sm font-semibold text-slate-100 transition hover:border-brand-line hover:bg-white/5"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href={buildGenericMessage("Olá! Quero ajuda para comprar na loja online da LD Materiais Elétricos.")}
                target="_blank"
                rel="noreferrer"
                className="glow-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
              >
                <MessageCircleMore className="h-4 w-4" />
                Atendimento
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
