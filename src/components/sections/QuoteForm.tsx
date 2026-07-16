import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { FileText, MessageCircleMore, SendHorizontal } from "lucide-react";
import { companyInfo, quoteCustomerTypes } from "../../data/siteContent";
import { buildGenericMessage, buildQuoteMessage } from "../../utils/whatsapp";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  customerType: string;
  projectType: string;
  materialsList: string;
  notes: string;
  fileName: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  customerType: "",
  projectType: "",
  materialsList: "",
  notes: "",
  fileName: "",
};

const emailRegex = /\S+@\S+\.\S+/;

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [feedback, setFeedback] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    updateField("fileName", file?.name ?? "");
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!form.phone.trim()) nextErrors.phone = "Informe seu telefone.";
    if (!emailRegex.test(form.email.trim())) nextErrors.email = "Informe um e-mail valido.";
    if (!form.city.trim()) nextErrors.city = "Informe sua cidade.";
    if (!form.customerType.trim()) nextErrors.customerType = "Selecione o tipo de cliente.";
    if (!form.projectType.trim()) nextErrors.projectType = "Descreva o tipo de projeto.";
    if (!form.materialsList.trim()) nextErrors.materialsList = "Informe a lista de materiais.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setFeedback("Revise os campos destacados antes de solicitar o orcamento.");
      return;
    }

    window.open(buildQuoteMessage(form), "_blank", "noopener,noreferrer");
    setFeedback(
      `Dados preparados para envio via WhatsApp da ${companyInfo.name}. Ajuste os placeholders de contato quando necessario.`,
    );
    setForm(initialState);
    setErrors({});
  };

  return (
    <section id="orcamento" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(72,179,255,0.12),transparent_26%),radial-gradient(circle_at_80%_100%,rgba(10,109,255,0.12),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:px-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Orcamento"
              title="Precisa de materiais para sua obra?"
              description="Envie sua lista de materiais e receba um orcamento personalizado. O formulario ja organiza as informacoes para o atendimento comercial pelo WhatsApp."
            />

            <div className="rounded-[32px] border border-sky-100 bg-white p-6 shadow-[0_16px_34px_rgba(10,109,255,0.06)]">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-brand-ocean/10 p-3 text-brand-ocean">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-slate-950">
                    Atendimento orientado por lista
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Ideal para reformas, instalacoes, compras recorrentes e projetos maiores. O
                    campo de arquivo registra o nome do documento para referencia inicial no
                    atendimento.
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-ocean">
                    WhatsApp comercial
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {companyInfo.whatsappDisplay}
                  </p>
                </div>
                <a
                  href={buildGenericMessage("Ola! Quero enviar minha lista de materiais pelo WhatsApp.")}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-button inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold"
                >
                  <MessageCircleMore className="h-5 w-5" />
                  Enviar lista pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-sky-100 bg-white p-6 shadow-[0_16px_34px_rgba(10,109,255,0.06)] md:p-8"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Nome"
                value={form.name}
                onChange={(value) => updateField("name", value)}
                error={errors.name}
                placeholder="Seu nome completo"
              />
              <Field
                label="Telefone"
                value={form.phone}
                onChange={(value) => updateField("phone", value)}
                error={errors.phone}
                placeholder="(00) 00000-0000"
              />
              <Field
                label="E-mail"
                type="email"
                value={form.email}
                onChange={(value) => updateField("email", value)}
                error={errors.email}
                placeholder="voce@empresa.com"
              />
              <Field
                label="Cidade"
                value={form.city}
                onChange={(value) => updateField("city", value)}
                error={errors.city}
                placeholder="Cidade / UF"
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Tipo de cliente</label>
                <select
                  value={form.customerType}
                  onChange={(event) => updateField("customerType", event.target.value)}
                  className="field-base"
                >
                  <option value="">Selecione</option>
                  {quoteCustomerTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.customerType ? (
                  <p className="mt-2 text-sm text-rose-500">{errors.customerType}</p>
                ) : null}
              </div>
              <Field
                label="Tipo de projeto"
                value={form.projectType}
                onChange={(value) => updateField("projectType", value)}
                error={errors.projectType}
                placeholder="Ex.: residencial, comercial, manutencao, reforma"
              />
            </div>

            <div className="mt-5">
              <TextareaField
                label="Lista de materiais"
                value={form.materialsList}
                onChange={(value) => updateField("materialsList", value)}
                error={errors.materialsList}
                placeholder="Descreva os itens que precisa cotar."
              />
            </div>

            <div className="mt-5">
              <TextareaField
                label="Observacoes"
                value={form.notes}
                onChange={(value) => updateField("notes", value)}
                placeholder="Prazo, referencia de obra, volume estimado ou detalhes tecnicos."
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-900">Anexar lista ou arquivo</label>
              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-sky-200 bg-sky-50/70 px-4 py-4 text-sm text-slate-600 transition hover:border-brand-ocean hover:bg-sky-50">
                <span>{form.fileName || "Selecionar arquivo para referencia no atendimento"}</span>
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-ocean shadow-sm">
                  Escolher
                </span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="glow-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold"
              >
                <SendHorizontal className="h-4 w-4" />
                Solicitar orcamento
              </button>
              <a
                href={buildGenericMessage("Ola! Quero enviar minha lista de materiais pelo WhatsApp.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-100 px-6 py-4 text-sm font-semibold text-slate-800 transition hover:border-brand-ocean hover:text-brand-ocean"
              >
                <MessageCircleMore className="h-4 w-4" />
                Enviar lista pelo WhatsApp
              </a>
            </div>

            {feedback ? <p className="mt-4 text-sm text-brand-ocean">{feedback}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  type?: string;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="field-base"
      />
      {error ? <p className="mt-2 text-sm text-rose-500">{error}</p> : null}
    </div>
  );
}

type TextareaFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
};

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  error,
}: TextareaFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900">{label}</label>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={5}
        className="field-base resize-none"
      />
      {error ? <p className="mt-2 text-sm text-rose-500">{error}</p> : null}
    </div>
  );
}
