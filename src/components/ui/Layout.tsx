import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export const eyebrowClass =
  "font-ui text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep";

export const sectionTitleClass =
  "text-balance text-[clamp(1.75rem,1.2rem+2.4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.02em]";

export const cardTitleClass =
  "text-xl font-semibold leading-tight tracking-[-0.02em] text-ink";

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 id={id} className={`mt-4 text-ink ${sectionTitleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-body sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
