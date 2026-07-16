import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, TimerReset, Truck } from "lucide-react";
import { companyInfo, heroIndicators, stats, storeDepartments } from "../../data/siteContent";
import { buildGenericMessage } from "../../utils/whatsapp";

const indicatorIcons = [ShieldCheck, TimerReset, Sparkles, Truck];

type HeroProps = {
  onPrimaryClick: () => void;
  onQuoteClick: () => void;
};

export function Hero({ onPrimaryClick, onQuoteClick }: HeroProps) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,55,255,0.35),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(72,179,255,0.18),transparent_30%),linear-gradient(180deg,#07111f_0%,#081321_50%,#050b14_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-hero-grid bg-[size:42px_42px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <div className="order-2 xl:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex rounded-full border border-brand-line bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-sky"
            >
              Loja online LD Materiais Elétricos
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl"
            >
              Compre materiais elétricos com navegação simples e visual de loja profissional
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Estruturei a home para funcionar como vitrine de e-commerce: busca em destaque,
              departamentos visíveis, produtos com preço demonstrativo e atalhos para compra ou
              atendimento.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <button
                type="button"
                onClick={onPrimaryClick}
                className="glow-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold"
              >
                Ver produtos
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:border-brand-sky hover:bg-white/10 hover:text-brand-sky"
              >
                Pedidos especiais
              </button>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {storeDepartments.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-line bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {heroIndicators.map((item, index) => {
                const Icon = indicatorIcons[index];

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.32 + index * 0.06 }}
                    className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-4"
                  >
                    <div className="rounded-xl bg-brand-sky/15 p-2 text-brand-sky">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-100">{item}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.42 + index * 0.08 }}
                  className="rounded-[24px] border border-brand-line bg-slate-950/65 px-5 py-4 shadow-card"
                >
                  <p className="font-display text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="order-1 xl:order-2"
          >
            <div className="mx-auto max-w-xl rounded-[34px] border border-brand-line bg-slate-950/72 p-5 shadow-card xl:ml-auto">
              <img
                src="/logo-real.jpeg"
                alt={companyInfo.name}
                className="mx-auto w-full max-w-[520px] rounded-[30px] border border-white/10 shadow-[0_20px_60px_rgba(2,10,28,0.58)]"
              />
              <div className="mt-5 grid gap-4 rounded-[28px] border border-brand-line bg-white/5 p-5 sm:grid-cols-2">
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-sky">
                    Atendimento consultivo
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Atendimento focado em lista de materiais, disponibilidade e orientação comercial.
                  </p>
                </div>
                <a
                  href={buildGenericMessage("Olá! Quero enviar minha lista de materiais para orçamento.")}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[24px] border border-brand-line bg-white/5 p-4 text-left transition hover:border-brand-sky hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white">Enviar lista pelo WhatsApp</p>
                  <p className="mt-2 text-sm text-slate-400">{companyInfo.whatsappDisplay}</p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
