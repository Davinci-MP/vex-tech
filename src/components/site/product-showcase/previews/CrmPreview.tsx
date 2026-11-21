import { CRM_STAGES, DEALS, OWNERS } from "../showcase.data";
import {
  Pill,
  ShowcaseIcon,
  TemporaryPreviewNotice,
  cardClass,
  formatVnd,
} from "../showcase-ui";

const sum = (values: readonly { value: number }[]) =>
  values.reduce((total, d) => total + d.value, 0);

export function CrmPreview() {
  const open = DEALS.filter((d) => d.stage !== "won");
  const won = DEALS.filter((d) => d.stage === "won");

  const metrics = [
    { label: "Giá trị pipeline mở (giả định)", value: formatVnd(sum(open)), unit: "triệu ₫" },
    { label: "Cơ hội đang mở", value: String(open.length) },
    { label: "Đã chốt (mẫu)", value: formatVnd(sum(won)), unit: "triệu ₫" },
  ];

  return (
    <div className="grid content-start gap-4 p-3.5 min-[820px]:p-5 min-[1100px]:px-[22px] min-[1100px]:pb-[22px]">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">
          Pipeline bán hàng
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <TemporaryPreviewNotice />
          <Pill>Quý mẫu</Pill>
        </div>
      </div>

      <div className="grid gap-2 min-[560px]:grid-cols-3 min-[820px]:gap-3">
        {metrics.map((m) => (
          <div
            key={m.label}
            className={`${cardClass} flex items-baseline justify-between gap-2.5 px-3 py-2.5 min-[560px]:block min-[820px]:px-4 min-[820px]:py-3`}
          >
            <p className="min-w-0 font-ui text-[12.5px] text-[#5f7089]">{m.label}</p>
            <p className="whitespace-nowrap text-lg font-semibold tracking-[-0.02em] text-ink tabular-nums min-[820px]:text-[22px]">
              {m.value}
              {m.unit ? (
                <span className="ml-1 font-ui text-[13px] font-medium tracking-normal text-[#5f7089]">
                  {m.unit}
                </span>
              ) : null}
            </p>
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
        <div className="relative max-w-[320px] min-w-[200px] flex-1">
          <ShowcaseIcon
            name="search"
            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#5f7089]"
          />
          <div className="min-h-10 rounded-full border border-[#c6dff0] bg-white py-2.5 pl-9 pr-3 font-ui text-sm text-[#5f7089]">
            Tìm cơ hội...
          </div>
        </div>
        <div className="flex flex-wrap gap-2 font-ui text-[13px]">
          <span className="grid min-h-9 place-items-center rounded-full bg-brand-deep px-3.5 text-white">
            Tất cả
          </span>
          {OWNERS.map((o) => (
            <span
              key={o.id}
              className="grid min-h-9 place-items-center rounded-full border border-[#c6dff0] bg-white px-3.5 text-body"
            >
              {o.name}
            </span>
          ))}
        </div>
      </div>

      <div
        role="region"
        aria-label="Bảng pipeline (xem trước tạm thời)"
        tabIndex={0}
        className="overflow-x-auto rounded-xl min-[1100px]:overflow-visible"
      >
        <div className="grid items-start gap-2.5 min-[820px]:grid-cols-[repeat(5,212px)] min-[1100px]:grid-cols-5">
          {CRM_STAGES.map((stage, index) => {
            const deals = DEALS.filter((d) => d.stage === stage.id);
            return (
              <section
                key={stage.id}
                aria-label={stage.name}
                className={`min-w-0 content-start gap-2 rounded-[14px] min-[820px]:grid min-[820px]:border min-[820px]:border-brand-deep/10 min-[820px]:bg-[#f6fbff] min-[820px]:p-2.5 ${
                  index === 0 ? "grid" : "hidden"
                }`}
              >
                <div className="hidden items-baseline justify-between gap-2 px-1 pt-0.5 min-[820px]:flex">
                  <b className="text-[13px] font-semibold text-ink">{stage.name}</b>
                  <span className="font-ui text-xs text-[#5f7089] tabular-nums">
                    {deals.length}
                  </span>
                </div>
                <p className="hidden px-1 pb-1 font-ui text-xs text-[#5f7089] tabular-nums min-[820px]:block">
                  {formatVnd(sum(deals))} triệu ₫
                </p>
                <ul className="grid gap-2.5 min-[560px]:grid-cols-2 min-[820px]:grid-cols-1 min-[820px]:gap-2">
                  {deals.map((d) => (
                    <li
                      key={d.id}
                      className="grid gap-2 rounded-xl border border-brand-deep/10 bg-white p-3"
                    >
                      <div>
                        <p className="font-ui text-xs text-[#5f7089]">{d.company}</p>
                        <p className="text-[13.5px] font-semibold leading-[1.35] text-ink">
                          {d.title}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[13px] font-semibold text-ink tabular-nums">
                          {formatVnd(d.value)} tr ₫
                        </span>
                        <span
                          title={`Phụ trách: ${d.owner}`}
                          className="grid size-[26px] place-items-center rounded-full bg-brand-light font-ui text-[11.5px] font-semibold text-brand-deep"
                        >
                          {d.owner}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
