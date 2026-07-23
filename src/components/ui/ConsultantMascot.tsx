import { Send, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { departmentCatalog, featuredProducts } from "../../data/siteContent";

type ChatMessage = {
  author: "consultant" | "customer";
  text: string;
};

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function buildAiAnswer(question: string) {
  const normalizedQuestion = normalizeText(question);

  const matchedProduct = featuredProducts.find((product) => {
    const searchable = normalizeText(
      [product.name, product.category, product.description, product.availability].join(" "),
    );
    return searchable
      .split(/\s+/)
      .filter((word) => word.length > 3)
      .some((word) => normalizedQuestion.includes(word));
  });

  if (matchedProduct) {
    return `${matchedProduct.name}: ${matchedProduct.description} Categoria: ${matchedProduct.category}. Disponibilidade: ${matchedProduct.availability}. Para confirmar valor e estoque, fale com a LD pelo WhatsApp.`;
  }

  const matchedDepartment = departmentCatalog.find((department) => {
    const searchable = normalizeText(
      [department.name, department.description, department.details, ...department.subcategories].join(" "),
    );
    return searchable
      .split(/\s+/)
      .filter((word) => word.length > 4)
      .some((word) => normalizedQuestion.includes(word));
  });

  if (matchedDepartment) {
    return `Na categoria ${matchedDepartment.name}, a LD trabalha com ${matchedDepartment.subcategories.join(", ")}. Posso ajudar a montar sua lista.`;
  }

  if (/(orcamento|cotacao|preco|valor|quanto|pedido)/.test(normalizedQuestion)) {
    return "Para orcamento, envie materiais, quantidades, cidade e prazo. A equipe LD confirma estoque e condicoes.";
  }

  if (/(entrega|retirada|frete|envio)/.test(normalizedQuestion)) {
    return "Entrega ou retirada depende da regiao e dos itens. Informe sua cidade para a equipe LD confirmar.";
  }

  if (/(pagamento|pix|cartao|parcel|boleto)/.test(normalizedQuestion)) {
    return "As formas de pagamento variam por pedido. A equipe LD confirma junto com a cotacao.";
  }

  return "Posso ajudar com fios, cabos, disjuntores, iluminacao, quadros, ferramentas, tomadas e conduites. Qual produto voce procura?";
}

export function ConsultantMascot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      author: "consultant",
      text: "Ola! Eu sou o Deivid, consultor virtual da LD. Me diga qual produto voce procura.",
    },
  ]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = inputValue.trim();

    if (!question) {
      return;
    }

    setMessages((current) => [
      ...current,
      { author: "customer", text: question },
      { author: "consultant", text: buildAiAnswer(question) },
    ]);
    setInputValue("");
  };

  return (
    <div className="pointer-events-none fixed bottom-3 right-2 z-[120] h-[9.25rem] w-[min(18.75rem,calc(100vw-1.125rem))] sm:right-3">
      <img
        src="/mascote-ld.png"
        alt="Deivid, consultor LD Materiais Eletricos"
        className="pointer-events-none absolute bottom-[-0.125rem] right-0 z-10 block w-[5.35rem] select-none object-contain drop-shadow-[0_18px_28px_rgba(2,10,28,0.28)] sm:w-[6.15rem] lg:w-[7rem]"
      />

      <div className="pointer-events-auto absolute bottom-[8.55rem] right-0 z-20 grid justify-items-end gap-2 sm:bottom-[9.55rem] sm:right-1 lg:bottom-[10.5rem] lg:right-2">
        {isOpen ? (
          <section className="absolute bottom-[calc(100%+0.75rem)] right-0 flex h-[min(24rem,calc(100dvh-12rem))] w-[min(20.75rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,246,250,0.98))] shadow-[0_26px_70px_rgba(7,17,31,0.28)]">
            <div className="flex items-start justify-between gap-3 bg-[radial-gradient(circle_at_100%_0,rgba(72,179,255,0.24),transparent_34%),linear-gradient(135deg,#07111f,#18304b)] px-3 py-3 text-white">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img src="/mascote-ld.png" alt="" className="h-8 w-8 object-cover object-top" />
                </span>
                <div className="min-w-0">
                  <span className="block truncate text-[0.58rem] font-bold uppercase tracking-[0.14em] text-sky-200">
                    Assistente virtual
                  </span>
                  <strong className="block truncate text-sm">Deivid</strong>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar chat"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 px-3 pt-2 text-[0.68rem] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
              Conectado a IA
            </div>

            <div className="grid flex-1 content-start gap-2 overflow-y-auto px-3 py-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.author}-${index}`}
                  className={`grid max-w-[92%] gap-1 rounded-2xl px-3 py-2 ${
                    message.author === "customer"
                      ? "justify-self-end bg-brand-night text-white"
                      : "justify-self-start border border-sky-100 bg-white text-slate-700"
                  }`}
                >
                  <span className="text-[0.58rem] font-bold uppercase tracking-[0.08em] opacity-70">
                    {message.author === "customer" ? "Voce" : "Deivid"}
                  </span>
                  <p className="text-xs leading-5">{message.text}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-sky-100 bg-white p-3">
              <form onSubmit={handleSubmit} className="grid grid-cols-[minmax(0,1fr)_2.625rem] gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="Digite sua duvida..."
                  aria-label="Digite sua duvida sobre produtos"
                  className="min-h-[2.625rem] rounded-2xl border border-sky-100 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-ocean"
                />
                <button
                  type="submit"
                  aria-label="Enviar pergunta"
                  className="inline-flex h-[2.625rem] w-[2.625rem] items-center justify-center rounded-2xl bg-brand-night text-white shadow-[0_16px_28px_rgba(7,17,31,0.24)] transition hover:bg-brand-slate"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </section>
        ) : null}

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir chat de duvidas"
          className="whatsapp-pulse relative inline-flex min-h-[3.375rem] max-w-[9.75rem] items-center gap-2 rounded-full border border-sky-100 bg-gradient-to-b from-white to-sky-50 px-3 py-2 text-left text-xs font-semibold leading-4 text-slate-800 shadow-[0_22px_44px_rgba(14,20,27,0.24)] transition hover:-translate-y-0.5"
        >
          <span className="absolute bottom-[-0.45rem] right-8 h-4 w-4 rotate-45 border-b border-r border-sky-100 bg-sky-50" />
          <span>Precisa de ajuda?</span>
        </button>
      </div>
    </div>
  );
}
