import type { ReactNode } from "react";
import type { Tone } from "./showcase.data";

export const formatVnd = (value: number) =>
  new Intl.NumberFormat("vi-VN").format(value);

export const toneClass: Record<Tone, string> = {
  ok: "bg-[#e6f6ee] text-[#0f7a50]",
  warn: "bg-[#fff4dc] text-[#9a5b00]",
  bad: "bg-[#fdecea] text-[#b42318]",
  info: "bg-brand-light text-brand-deep",
  mute: "bg-[#eef3f8] text-body",
};

export function Pill({
  tone = "mute",
  children,
  className = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 font-ui text-xs font-medium leading-5 ${toneClass[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export type ShowcaseIconName =
  | "grid"
  | "bolt"
  | "users"
  | "inbox"
  | "spark"
  | "link"
  | "activity"
  | "search"
  | "folder"
  | "list"
  | "chart"
  | "info";

const paths: Record<ShowcaseIconName, string> = {
  grid: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
  bolt: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  inbox:
    "M22 12h-6l-2 3h-4l-2-3H2M5.5 5h13l3.5 7v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z",
  spark: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z",
  link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  list: "M9 6h12M9 12h12M9 18h12M3 6h.01M3 12h.01M3 18h.01",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
};

export function ShowcaseIcon({
  name,
  className = "size-5",
}: {
  name: ShowcaseIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      <path d={paths[name]} />
    </svg>
  );
}

/** Nhãn bắt buộc: luôn hiển thị trên mọi cửa sổ minh họa. */
export function DemoPill() {
  return (
    <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#f0d9a3] bg-[#fff4dc] px-2.5 py-0.5 font-ui text-xs font-semibold text-[#9a5b00] before:size-1.5 before:rounded-full before:bg-[#d9971a] before:content-['']">
      Dữ liệu minh họa
    </span>
  );
}

/** Nhãn cho khung xem trước tạm thời (F3.2A). */
export function TemporaryPreviewNotice() {
  return (
    <p
      data-preview="temporary"
      className="inline-flex max-w-full items-center gap-2 rounded-full border border-brand-deep/15 bg-brand-light px-3 py-1 font-ui text-xs font-semibold leading-5 text-brand-deep"
    >
      <ShowcaseIcon name="info" className="size-3.5" />
      <span className="min-w-0">
        Khung xem trước tạm thời, tương tác sẽ được bổ sung
      </span>
    </p>
  );
}

export const cardClass =
  "min-w-0 rounded-[14px] border border-brand-deep/10 bg-white";
