import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircleMore,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
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

type BrandProps = {
  compact?: boolean;
};

function Brand({ compact = false }: BrandProps) {
  return (
    <div className={`flex items-center text-left ${compact ? "gap-3" : "gap-4"}`}>
      <img
        src="/logo-real.jpeg"
        alt={companyInfo.name}
        className={`rounded-[22px] border border-sky-100 object-cover object-center shadow-[0_12px_30px_rgba(10,109,255,0.14)] ${
          compact ? "h-12 w-12" : "h-16 w-16 sm:h-20 sm:w-20"
        }`}
      />
      <div className="min-w-0">
        <p
          className={`font-display font-bold uppercase leading-none text-brand-ocean ${
            compact
              ? "text-[1.05rem] tracking-[0.24em]"
              : "text-[1.35rem] tracking-[0.28em] sm:text-[1.55rem]"
          }`}
        >
          <span>L</span>
          <span className="mx-1 tracking-normal text-brand-red">&amp;</span>
          <span>D</span>
        </p>
        <p className={`mt-1 truncate font-medium text-slate-600 ${compact ? "text-[11px]" : "text-xs sm:text-sm"}`}>
          {companyInfo.name}
        </p>
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
      <div className="brand-button-muted inline-flex cursor-default items-center gap-3 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] shadow-[0_10px_24px_rgba(7,17,31,0.18)]">
        Todos os departamentos
        <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
      </div>

      <div className="pointer-events-none absolute left-0 top-full z-50 mt-3 w-[860px] max-w-[calc(100vw-3rem)] opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-[18px] border border-sky-100 bg-white shadow-[0_22px_60px_rgba(10,109,255,0.14)]">
          <div className="grid grid-cols-[0.84fr_1.16fr]">
            <div className="max-h-[34rem] overflow-y-auto border-r border-sky-100 bg-sky-50/70 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-ocean">
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
                          ? "border-sky-200 bg-white"
                          : "border-transparent bg-transparent hover:border-sky-100 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-display text-[15px] font-semibold text-slate-950">
                            {category.name}
                          </p>
                        </div>
                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.32em] text-brand-ocean">
                    {activeDepartment.name}
                  </p>
                  <h3 className="mt-1 max-w-xl font-display text-xl font-semibold text-slate-950">
                    {activeDepartment.heroTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateDepartment(activeDepartment.id)}
                  className="brand-button-muted shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold"
                >
                  Ver todo departamento
                </button>
              </div>

              <div className="mt-4 grid grid-cols-[0.9fr_1.1fr] gap-4">
                <div className="rounded-[16px] border border-sky-100 bg-sky-50/60 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-ocean">
                    Subcategorias
                  </p>
                  <div className="mt-3 grid gap-1">
                    {activeDepartment.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        type="button"
                        onClick={() => onNavigateDepartment(activeDepartment.id)}
                        className="flex items-center justify-between rounded-xl border border-transparent bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:border-sky-100 hover:bg-sky-50"
                      >
                        <span>{subcategory}</span>
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[16px] border border-sky-100 bg-sky-50/60 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-ocean">
                    Produtos relacionados
                  </p>
                  <div className="mt-3 grid gap-1">
                    {relatedProducts.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => onNavigateDepartment(activeDepartment.id)}
                        className="rounded-xl border border-transparent bg-white px-3 py-2 text-left transition hover:border-sky-100 hover:bg-sky-50"
                      >
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ocean">
                            {product.category}
                          </p>
                          <p className="mt-1 font-display text-[15px] font-semibold text-slate-950">
                            {product.name}
                          </p>
                          <div className="mt-1 flex items-center gap-3 text-sm">
                            <span className="text-slate-500">{product.price}</span>
                            <span className="text-emerald-600">{product.availability}</span>
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

const mobileShortcuts = [
  { label: "Departamentos", action: "departments" },
  { label: "Produtos", action: "products" },
  { label: "Orcamento", action: "orcamento" },
  { label: "Contato", action: "contato" },
] as const;

export function Header({
  activeDepartmentId,
  activePage,
  onNavigateDepartment,
  onNavigateProducts,
  onNavigateHome,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavigationClick = (href: string) => {
    if (href === "#produtos") {
      onNavigateProducts();
      closeMenu();
      return;
    }

    onNavigateHome(href.replace("#", ""));
    closeMenu();
  };

  const handleMobileShortcut = (action: (typeof mobileShortcuts)[number]["action"]) => {
    if (action === "departments") {
      setOpen(true);
      return;
    }

    if (action === "products") {
      onNavigateProducts();
      closeMenu();
      return;
    }

    onNavigateHome(action);
    closeMenu();
  };

  return (
    <>
      <header className="sticky top-0 z-[90] border-y border-sky-100 bg-white/95 backdrop-blur">
        <div className="lg:hidden border-b border-brand-night bg-brand-night text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] md:px-6">
            <span>Loja online LD</span>
            <a
              href={buildGenericMessage("Ola! Quero ajuda para comprar na loja online da LD Materiais Eletricos.")}
              target="_blank"
              rel="noreferrer"
              className="text-sky-200 transition hover:text-white"
            >
              Compre pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="hidden border-b border-sky-100 lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-2.5 text-xs md:px-6">
            <div className="flex items-center justify-center gap-6 text-slate-500">
              {topHighlights.map((item) => (
                <span key={item} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 lg:py-4">
          <div className="hidden items-center gap-4 lg:flex lg:gap-6">
            <button type="button" onClick={() => onNavigateHome()}>
              <Brand />
            </button>

            <label className="flex flex-1 items-center gap-3 rounded-full border border-sky-100 bg-slate-50 px-5 py-3 shadow-[0_10px_24px_rgba(10,109,255,0.06)]">
              <Search className="h-5 w-5 text-brand-ocean" />
              <input
                type="text"
                placeholder="O que voce procura em materiais eletricos?"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                aria-label="Buscar no catalogo"
              />
            </label>

            <div className="ml-auto flex items-center gap-3">
              <a
                href={buildGenericMessage("Ola! Quero ajuda para comprar na loja online da LD Materiais Eletricos.")}
                target="_blank"
                rel="noreferrer"
                className="glow-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
              >
                <MessageCircleMore className="h-4 w-4" />
                Atendimento
              </a>
              <button
                type="button"
                className="brand-button-muted inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold"
              >
                <ShoppingCart className="h-4 w-4" />
                Carrinho
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpen((value) => !value)}
                className="brand-icon-button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-3"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="text-xs font-bold uppercase tracking-[0.18em]">Menu</span>
              </button>

              <button type="button" onClick={() => onNavigateHome()} className="min-w-0 flex-1">
                <Brand compact />
              </button>

              <a
                href={buildGenericMessage("Ola! Quero ajuda para comprar na loja online da LD Materiais Eletricos.")}
                target="_blank"
                rel="noreferrer"
                aria-label="Atendimento"
                className="brand-icon-button inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
              >
                <MessageCircleMore className="h-5 w-5" />
              </a>

              <button
                type="button"
                aria-label="Carrinho"
                className="brand-icon-button inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>

            <label className="mt-3 flex items-center gap-3 rounded-[20px] border border-sky-100 bg-slate-50 px-4 py-3 shadow-[0_12px_26px_rgba(10,109,255,0.08)]">
              <Search className="h-5 w-5 text-brand-ocean" />
              <input
                type="text"
                placeholder="Digite o que voce procura"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                aria-label="Buscar produtos"
              />
            </label>

            <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-1">
              {mobileShortcuts.map((shortcut) => (
                <button
                  key={shortcut.action}
                  type="button"
                  onClick={() => handleMobileShortcut(shortcut.action)}
                  className="shrink-0 rounded-2xl border border-sky-100 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_10px_22px_rgba(10,109,255,0.06)] transition hover:border-brand-ocean hover:text-brand-ocean"
                >
                  {shortcut.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden border-t border-sky-100 lg:block">
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
                  className={`font-semibold transition hover:text-brand-ocean ${
                    item.href === "#produtos" && activePage === "produtos"
                      ? "text-brand-ocean"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[190] bg-slate-950/35 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed right-0 top-0 z-[200] flex h-full w-full max-w-[24rem] flex-col border-l border-sky-100 bg-white shadow-[0_24px_60px_rgba(7,17,31,0.24)] lg:hidden"
            >
              <div className="border-b border-sky-100 px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <Brand compact />
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Fechar menu"
                    className="brand-icon-button inline-flex h-10 w-10 items-center justify-center rounded-2xl"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <label className="mt-4 flex items-center gap-3 rounded-[20px] border border-sky-100 bg-slate-50 px-4 py-3">
                  <Search className="h-5 w-5 text-brand-ocean" />
                  <input
                    type="text"
                    placeholder="Buscar produtos"
                    className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    aria-label="Buscar produtos no menu"
                  />
                </label>
              </div>

              <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-5">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleMobileShortcut("products")}
                    className="rounded-[22px] border border-sky-100 bg-sky-50/70 px-4 py-4 text-left"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ocean">
                      Loja
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Ver produtos</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMobileShortcut("orcamento")}
                    className="rounded-[22px] border border-sky-100 bg-sky-50/70 px-4 py-4 text-left"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-ocean">
                      Pedido
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">Solicitar orcamento</p>
                  </button>
                </div>

                <div className="mt-6 rounded-[28px] border border-sky-100 bg-white">
                  <div className="border-b border-sky-100 px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-ocean">
                      Departamentos
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Navegacao rapida no estilo catalogo mobile.
                    </p>
                  </div>

                  <div className="grid gap-2 p-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => {
                          onNavigateDepartment(category.id);
                          closeMenu();
                        }}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                          activeDepartmentId === category.id
                            ? "border-brand-ocean bg-sky-50 text-brand-ocean"
                            : "border-transparent bg-slate-50 text-slate-800 hover:border-sky-100 hover:bg-white"
                        }`}
                      >
                        <span>{category.name}</span>
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {navigation.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavigationClick(item.href)}
                      className="rounded-2xl border border-sky-100 bg-white px-4 py-3 text-left text-base font-semibold text-slate-800 transition hover:border-brand-ocean hover:text-brand-ocean"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-[28px] border border-sky-100 bg-brand-night px-4 py-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-200">
                    Atalhos
                  </p>
                  <div className="mt-4 grid gap-3">
                    <button
                      type="button"
                      onClick={() => handleNavigationClick("#contato")}
                      className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-left text-sm font-semibold"
                    >
                      <MapPin className="h-4 w-4 text-sky-200" />
                      Nossas informacoes
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-left text-sm font-semibold"
                    >
                      <UserRound className="h-4 w-4 text-sky-200" />
                      Minha conta
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-sky-100 px-5 py-4">
                <a
                  href={buildGenericMessage("Ola! Quero ajuda para comprar na loja online da LD Materiais Eletricos.")}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  Atendimento
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
