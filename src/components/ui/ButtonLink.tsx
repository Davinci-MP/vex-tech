import type { ReactNode } from "react";
import { IconExternal } from "./icons";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "inverse";
  external?: boolean;
  children: ReactNode;
  className?: string;
};

const variants = {
  primary: "bg-brand-deep text-white hover:bg-[#06469f]",
  secondary:
    "border border-brand-deep/25 bg-white text-brand-deep hover:border-brand-deep hover:bg-brand-light",
  inverse: "bg-white text-brand-deep hover:bg-brand-light",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-ui text-[0.9375rem] font-semibold transition-[scale,background-color,border-color] duration-150 ease-[var(--ease-out)] motion-safe:active:scale-[0.97] ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <IconExternal className="size-4" />
        <span className="sr-only"> (mở trang Facebook chính thức trong tab mới)</span>
      </a>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
