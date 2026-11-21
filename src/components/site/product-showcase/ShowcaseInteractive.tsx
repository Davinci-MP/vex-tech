"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, ReactElement } from "react";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";
import { AppWindow } from "./AppWindow";
import { AutomationPreview } from "./previews/AutomationPreview";
import { CrmPreview } from "./previews/CrmPreview";
import { DashboardPreview } from "./previews/DashboardPreview";
import { CATEGORIES, type CategoryId } from "./showcase.data";
import { ShowcaseIcon } from "./showcase-ui";

const previews: Record<CategoryId, () => ReactElement> = {
  dashboard: DashboardPreview,
  automation: AutomationPreview,
  crm: CrmPreview,
};

const tabId = (id: CategoryId) => `showcase-tab-${id}`;
const panelId = (id: CategoryId) => `showcase-panel-${id}`;

export function ShowcaseInteractive() {
  const [current, setCurrent] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = CATEGORIES[current];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const count = CATEGORIES.length;
    let next: number | null = null;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (current + 1) % count;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (current - 1 + count) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
    }
    if (next !== null) {
      event.preventDefault();
      setCurrent(next);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="Danh mục giao diện minh họa"
        onKeyDown={onKeyDown}
        className="grid grid-cols-3 gap-2 min-[820px]:gap-3"
      >
        {CATEGORIES.map((category, index) => (
          <button
            key={category.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={tabId(category.id)}
            aria-selected={current === index}
            aria-controls={panelId(category.id)}
            tabIndex={current === index ? 0 : -1}
            onClick={() => setCurrent(index)}
            className="group grid min-w-0 grid-cols-1 justify-items-center gap-2 rounded-2xl border border-brand-deep/10 bg-white px-1.5 py-3 text-center transition-[border-color,background-color,box-shadow] duration-200 ease-[var(--ease-out)] hover:border-brand-deep/25 hover:bg-[#f6fbff] aria-selected:border-brand-deep aria-selected:bg-white aria-selected:shadow-[0_0_0_1px_var(--color-brand-deep),0_4px_12px_rgba(7,84,195,0.05)] motion-reduce:transition-none min-[820px]:grid-cols-[40px_minmax(0,1fr)] min-[820px]:items-center min-[820px]:justify-items-stretch min-[820px]:gap-3.5 min-[820px]:rounded-[18px] min-[820px]:px-[18px] min-[820px]:py-4 min-[820px]:text-left"
          >
            <span className="grid size-[34px] place-items-center rounded-xl bg-brand-light text-brand-deep transition-colors duration-200 group-aria-selected:bg-brand-deep group-aria-selected:text-white motion-reduce:transition-none min-[400px]:size-10">
              <ShowcaseIcon name={category.icon} className="size-[19px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold leading-[1.3] text-ink min-[820px]:text-base">
                <span className="hidden min-[820px]:inline">{category.tabLabel}</span>
                <span className="min-[820px]:hidden">{category.shortLabel}</span>
              </span>
              <span className="mt-0.5 hidden font-ui text-[13.5px] leading-[1.4] text-[#5f7089] min-[820px]:block">
                {category.description}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-[22px] bg-brand-light p-2 min-[401px]:p-3 min-[820px]:rounded-[28px] min-[820px]:p-7">
        {CATEGORIES.map((category, index) => {
          const Preview = previews[category.id];
          return (
            <div
              key={category.id}
              role="tabpanel"
              id={panelId(category.id)}
              aria-labelledby={tabId(category.id)}
              hidden={current !== index}
              tabIndex={0}
              className="panel-enter rounded-[18px]"
            >
              <AppWindow title={category.windowTitle}>
                <Preview />
              </AppWindow>
            </div>
          );
        })}
        <p className="mt-[18px] flex items-start gap-2.5 font-ui text-[13.5px] leading-normal text-body">
          <ShowcaseIcon name="info" className="mt-[3px] size-4 text-[#5f7089]" />
          <span>
            Tên, số liệu và tiền tệ trong các giao diện này đều là giả định, chỉ
            nhằm minh họa. Đây không phải sản phẩm thương mại đã phát hành.
          </span>
        </p>
      </div>

      <div className="mt-8 grid gap-4 min-[820px]:mt-10 min-[1100px]:grid-cols-[260px_minmax(0,1fr)] min-[1100px]:gap-6">
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 min-[1100px]:block">
          <h3 className="text-[15px] font-semibold leading-snug text-[#5f7089]">
            Có thể thiết kế và phát triển
          </h3>
          <a
            href="#lien-he"
            className="inline-flex items-center gap-2 whitespace-nowrap font-ui text-[14.5px] font-semibold text-brand-deep underline-offset-4 hover:underline min-[1100px]:mt-3"
          >
            Trao đổi về nhu cầu của bạn
            <IconArrowRight className="size-4" />
          </a>
        </div>
        <ul
          key={active.id}
          className="grid gap-4 min-[820px]:grid-cols-3 min-[820px]:gap-6"
        >
          {active.capabilities.map((text) => (
            <li
              key={text}
              className="grid grid-cols-[22px_minmax(0,1fr)] gap-2.5 text-[15px] leading-[1.55] text-body"
            >
              <IconCheck className="mt-[3px] size-4 text-brand-deep" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
