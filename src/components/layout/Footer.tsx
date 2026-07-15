import { Building2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo, footerQuickLinks } from "../../data/siteContent";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-brand-line bg-[#040811]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.75fr_0.9fr]">
        <div>
          <img
            src="/logo-real.jpeg"
            alt={companyInfo.name}
            className="h-20 w-auto rounded-[28px] border border-white/10 object-cover object-center shadow-card"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Site institucional criado para apresentar materiais elétricos, fortalecer a confiança
            comercial e transformar visitas em pedidos de orçamento.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-brand-yellow" />
              <span>
                {companyInfo.phoneDisplay} | WhatsApp {companyInfo.whatsappDisplay}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-brand-yellow" />
              <span>{companyInfo.email}</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-brand-yellow" />
              <span>{companyInfo.address}</span>
            </p>
            <p className="flex items-start gap-3">
              <Clock3 className="mt-1 h-4 w-4 text-brand-yellow" />
              <span>{companyInfo.hours}</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-white">Links rápidos</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <a href="#inicio" className="transition hover:text-brand-yellow">
              Início
            </a>
            <a href="#produtos" className="transition hover:text-brand-yellow">
              Produtos
            </a>
            <a href="#categorias" className="transition hover:text-brand-yellow">
              Categorias
            </a>
            <a href="#sobre" className="transition hover:text-brand-yellow">
              Sobre nós
            </a>
            <a href="#orcamento" className="transition hover:text-brand-yellow">
              Orçamento
            </a>
            <a href="#contato" className="transition hover:text-brand-yellow">
              Contato
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-white">Categorias e políticas</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {footerQuickLinks.map((item) => (
              <p key={item} className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-brand-yellow" />
                <span>{item}</span>
              </p>
            ))}
            <a
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="pt-2 transition hover:text-brand-yellow"
            >
              Instagram: {companyInfo.instagram}
            </a>
            <a href="#contato" className="transition hover:text-brand-yellow">
              Política de privacidade
            </a>
            <a href="#contato" className="transition hover:text-brand-yellow">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 LD Materiais Elétricos. Todos os direitos reservados.</p>
          <p>Estrutura pronta para futuras integrações e atualização da logo oficial.</p>
        </div>
      </div>
    </footer>
  );
}
