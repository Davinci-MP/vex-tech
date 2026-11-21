import type { ReactNode } from "react";
import { DemoPill } from "./showcase-ui";

export function AppWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-brand-deep/10 bg-white shadow-[0_2px_4px_rgba(7,84,195,0.05),0_18px_44px_rgba(7,84,195,0.10)]">
      <div className="flex items-center gap-2 border-b border-brand-deep/10 bg-[#f6fbff] px-3 py-2.5 min-[560px]:px-4">
        <span aria-hidden="true" className="flex shrink-0 gap-2">
          <i className="size-2.5 rounded-full bg-[#cbe0f0]" />
          <i className="size-2.5 rounded-full bg-[#cbe0f0]" />
          <i className="size-2.5 rounded-full bg-[#cbe0f0]" />
        </span>
        <span className="ml-2 hidden min-w-0 truncate font-ui text-[12.5px] text-[#5f7089] min-[560px]:block">
          {title}
        </span>
        <DemoPill />
      </div>
      {children}
    </div>
  );
}
