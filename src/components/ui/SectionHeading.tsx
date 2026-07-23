import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleColor = tone === "dark" ? "text-white" : "text-slate-950";
  const descriptionColor = tone === "dark" ? "text-slate-200" : "text-slate-600";
  const eyebrowClasses =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-white"
      : "border-brand-ocean/15 bg-brand-ocean/5 text-brand-ocean";

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
