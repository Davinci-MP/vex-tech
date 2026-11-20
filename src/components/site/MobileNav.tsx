"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FACEBOOK_URL, NAV_ITEMS } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { IconClose, IconMenu } from "@/components/ui/icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="md:hidden"
      onBlur={(event) => {
        const next = event.relatedTarget as Node | null;
        if (next && !rootRef.current?.contains(next)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-[scale,background-color] duration-150 ease-[var(--ease-out)] hover:bg-brand-light motion-safe:active:scale-[0.95]"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Đóng menu" : "Mở menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <IconClose className="size-6" /> : <IconMenu className="size-6" />}
      </button>

      {open ? (
        <div
          id={panelId}
          className="menu-enter absolute inset-x-0 top-full border-b border-brand-deep/10 bg-white px-5 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgba(10,31,61,0.25)]"
        >
          <nav aria-label="Điều hướng chính">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-12 items-center border-b border-brand-deep/10 font-ui text-lg font-medium text-ink"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink
            href={FACEBOOK_URL}
            external
            className="mt-5 w-full"
          >
            Liên hệ tư vấn
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
