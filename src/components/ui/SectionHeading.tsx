import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = tone === "light" ? "text-slate-950" : "text-white";
  const descriptionColor = tone === "light" ? "text-slate-600" : "text-slate-300";
  const eyebrowClasses =
    tone === "light"
      ? "border-brand-ocean/10 bg-brand-ocean/5 text-brand-ocean"
      : "border-brand-line bg-white/5 text-brand-yellow";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <span
        className={`inline-flex rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] ${eyebrowClasses}`}
      >
        {eyebrow}
      </span>
      <h2 className={`mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionColor}`}>{description}</p>
    </div>
  );
}
