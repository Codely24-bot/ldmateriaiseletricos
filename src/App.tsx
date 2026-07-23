import { useEffect, useState } from "react";
import { About } from "./components/sections/About";
import { Benefits } from "./components/sections/Benefits";
import { Categories } from "./components/sections/Categories";
import { DepartmentPage } from "./components/sections/DepartmentPage";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Hero } from "./components/sections/Hero";
import { Professionals } from "./components/sections/Professionals";
import { ProductsPage } from "./components/sections/ProductsPage";
import { QuoteForm } from "./components/sections/QuoteForm";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ConsultantMascot } from "./components/ui/ConsultantMascot";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

function getDepartmentFromUrl() {
  return new URLSearchParams(window.location.search).get("departamento");
}

function getPageFromUrl() {
  return new URLSearchParams(window.location.search).get("pagina");
}

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [activePage, setActivePage] = useState<string | null>(() =>
    typeof window === "undefined" ? null : getPageFromUrl(),
  );
  const [activeDepartmentId, setActiveDepartmentId] = useState<string | null>(() =>
    typeof window === "undefined" ? null : getDepartmentFromUrl(),
  );

  useEffect(() => {
    const syncRoute = () => {
      setActiveDepartmentId(getDepartmentFromUrl());
      setActivePage(getPageFromUrl());
    };
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const navigateToDepartment = (departmentId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete("pagina");
    url.searchParams.set("departamento", departmentId);
    url.hash = "";
    window.history.pushState({}, "", `${url.pathname}${url.search}`);
    setActiveDepartmentId(departmentId);
    setActivePage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProducts = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("departamento");
    url.searchParams.set("pagina", "produtos");
    url.hash = "";
    window.history.pushState({}, "", `${url.pathname}${url.search}`);
    setActiveDepartmentId(null);
    setActivePage("produtos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHome = (sectionId?: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete("departamento");
    url.searchParams.delete("pagina");
    url.hash = "";
    window.history.pushState({}, "", url.pathname);
    setActiveDepartmentId(null);
    setActivePage(null);

    if (sectionId) {
      window.setTimeout(() => scrollToSection(sectionId), 40);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelection = (categoryId: string) => {
    navigateToDepartment(categoryId);
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header
        activeDepartmentId={activeDepartmentId}
        activePage={activePage}
        onNavigateDepartment={navigateToDepartment}
        onNavigateProducts={navigateToProducts}
        onNavigateHome={navigateHome}
      />
      <main>
        {activeDepartmentId ? (
          <DepartmentPage departmentId={activeDepartmentId} onNavigateHome={navigateHome} />
        ) : activePage === "produtos" ? (
          <ProductsPage />
        ) : (
          <>
            <Hero
              onPrimaryClick={navigateToProducts}
              onQuoteClick={() => scrollToSection("orcamento")}
            />
            <Categories onSelectCategory={handleCategorySelection} />
            <Benefits />
            <QuoteForm />
            <About />
            <Professionals />
            <FinalCTA onQuoteClick={() => scrollToSection("orcamento")} />
          </>
        )}
      </main>
      <Footer />
      <ConsultantMascot />
      <WhatsAppButton />
    </div>
  );
}
