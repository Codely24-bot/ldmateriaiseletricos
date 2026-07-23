import { buildGenericMessage } from "../../utils/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={buildGenericMessage("Olá! Quero falar com a equipe da LD Materiais Elétricos.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-pulse group fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-transparent shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1"
    >
      <img
        src="/whatsapp-logo.png"
        alt=""
        className="whatsapp-vibrate h-full w-full rounded-full object-contain"
      />
      <span className="absolute inset-0 rounded-full border border-white/30 opacity-0 transition group-hover:animate-ping group-hover:opacity-100" />
    </a>
  );
}
