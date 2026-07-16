import { Building2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo, footerQuickLinks } from "../../data/siteContent";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-sky-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.75fr_0.9fr]">
        <div>
          <img
            src="/logo-real.jpeg"
            alt={companyInfo.name}
            className="h-20 w-auto rounded-[28px] border border-sky-100 object-cover object-center shadow-[0_12px_30px_rgba(10,109,255,0.08)]"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
            Site institucional criado para apresentar materiais eletricos, fortalecer a confianca
            comercial e transformar visitas em pedidos de orcamento.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-brand-ocean" />
              <span>
                {companyInfo.phoneDisplay} | WhatsApp {companyInfo.whatsappDisplay}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-brand-ocean" />
              <span>{companyInfo.email}</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-brand-ocean" />
              <span>{companyInfo.address}</span>
            </p>
            <p className="flex items-start gap-3">
              <Clock3 className="mt-1 h-4 w-4 text-brand-ocean" />
              <span>{companyInfo.hours}</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-slate-950">Links rapidos</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            <a href="#inicio" className="transition hover:text-brand-ocean">
              Inicio
            </a>
            <a href="#produtos" className="transition hover:text-brand-ocean">
              Produtos
            </a>
            <a href="#categorias" className="transition hover:text-brand-ocean">
              Categorias
            </a>
            <a href="#sobre" className="transition hover:text-brand-ocean">
              Sobre nos
            </a>
            <a href="#orcamento" className="transition hover:text-brand-ocean">
              Orcamento
            </a>
            <a href="#contato" className="transition hover:text-brand-ocean">
              Contato
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-slate-950">Categorias e politicas</h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-600">
            {footerQuickLinks.map((item) => (
              <p key={item} className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-brand-ocean" />
                <span>{item}</span>
              </p>
            ))}
            <a
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="pt-2 transition hover:text-brand-ocean"
            >
              Instagram: {companyInfo.instagram}
            </a>
            <a href="#contato" className="transition hover:text-brand-ocean">
              Politica de privacidade
            </a>
            <a href="#contato" className="transition hover:text-brand-ocean">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-sky-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© 2026 LD Materiais Eletricos. Todos os direitos reservados.</p>
          <p>Estrutura pronta para futuras integracoes e atualizacao da logo oficial.</p>
        </div>
      </div>
    </footer>
  );
}
