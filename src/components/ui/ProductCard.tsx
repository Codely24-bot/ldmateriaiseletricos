import { ArrowRight, BadgeCheck, MessageCircleMore, ShoppingCart } from "lucide-react";
import { buildProductMessage } from "../../utils/whatsapp";

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  badge: string;
  image: string;
  price: string;
  installment: string;
  availability: string;
};

export function ProductCard({
  name,
  category,
  description,
  badge,
  image,
  price,
  installment,
  availability,
}: ProductCardProps) {
  const messageUrl = buildProductMessage(name);

  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_18px_38px_rgba(6,18,38,0.16)] transition hover:-translate-y-1">
      <div className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-slate-950">
          <BadgeCheck className="h-3.5 w-3.5" />
          {badge}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-ocean">{category}</p>
          <h3 className="font-display text-xl font-semibold text-slate-950">{name}</h3>
          <p className="text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">A partir de</p>
          <p className="mt-2 font-display text-3xl font-semibold text-brand-ocean">{price}</p>
          <p className="mt-1 text-sm text-slate-500">{installment}</p>
          <p className="mt-3 text-sm font-semibold text-emerald-600">{availability}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={messageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand-ocean hover:text-brand-ocean"
          >
            Ver detalhes
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={messageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-ocean px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-cobalt"
          >
            <ShoppingCart className="h-4 w-4" />
            Comprar
          </a>
          <a
            href={messageUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#ffe17d]"
          >
            <MessageCircleMore className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
