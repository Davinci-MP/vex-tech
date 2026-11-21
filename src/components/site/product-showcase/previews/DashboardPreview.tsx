import {
  KPIS,
  PROJECTS,
  REVENUE_AXIS,
  REVENUE_SERIES,
  TASK_BUCKETS,
} from "../showcase.data";
import {
  Pill,
  ShowcaseIcon,
  TemporaryPreviewNotice,
  cardClass,
  formatVnd,
  type ShowcaseIconName,
} from "../showcase-ui";

const NAV: readonly { label: string; icon: ShowcaseIconName }[] = [
  { label: "Tổng quan", icon: "grid" },
  { label: "Dự án", icon: "folder" },
  { label: "Công việc", icon: "list" },
  { label: "Báo cáo", icon: "chart" },
  { label: "Nhân sự", icon: "users" },
];

function Sparkline({ data }: { data: readonly number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data
    .map(
      (v, i) =>
        `${(i / (data.length - 1)) * 100},${26 - ((v - min) / (max - min || 1)) * 22 - 2}`,
    )
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 26"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="mt-1 h-[26px] w-full"
    >
      <polyline
        points={points}
        fill="none"
        stroke="#1597ef"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function RevenueChart() {
  const n = REVENUE_SERIES.length;
  const { max, ticks } = REVENUE_AXIS;
  const pt = (i: number, v: number) =>
    `${((i + 0.5) / n) * 100} ${100 - (v / max) * 100}`;
  const line = REVENUE_SERIES.map(
    (p, i) => `${i ? "L" : "M"}${pt(i, p.revenue)}`,
  ).join(" ");
  const plan = REVENUE_SERIES.map(
    (p, i) => `${i ? "L" : "M"}${pt(i, p.plan)}`,
  ).join(" ");
  const area = `${line} L${((n - 0.5) / n) * 100} 100 L${(0.5 / n) * 100} 100 Z`;
  const last = REVENUE_SERIES[n - 1];

  return (
    <div className={`${cardClass} p-4 pb-3`}>
      <div className="mb-3.5">
        <p className="font-ui text-[14.5px] font-semibold text-ink">
          Doanh thu theo tháng
        </p>
        <p className="mt-0.5 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-ink tabular-nums">
          {formatVnd(last.revenue)}{" "}
          <span className="font-ui text-[12.5px] font-normal tracking-normal text-[#5f7089]">
            triệu ₫ · {last.month}
          </span>
        </p>
      </div>
      <p className="mb-2.5 flex flex-wrap gap-x-3.5 gap-y-1 font-ui text-xs text-body">
        <span className="inline-flex items-center gap-1.5">
          <i className="w-3.5 border-t-[3px] border-brand-deep" />
          Doanh thu (giả định)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <i className="w-3.5 border-t-2 border-dashed border-[#5f7089]" />
          Kế hoạch (giả định)
        </span>
      </p>
      <div
        role="img"
        aria-label="Biểu đồ doanh thu mẫu theo 12 tháng, bản xem trước tạm thời"
        className="grid grid-cols-[40px_minmax(0,1fr)]"
      >
        <div className="relative h-[200px]" aria-hidden="true">
          {ticks.map((t) => (
            <span
              key={t}
              className="absolute right-2 -translate-y-1/2 font-ui text-[11px] text-[#5f7089] tabular-nums"
              style={{ top: `${100 - (t / max) * 100}%` }}
            >
              {formatVnd(t)}
            </span>
          ))}
        </div>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-[200px] w-full overflow-visible"
        >
          {ticks.map((t) => (
            <line
              key={t}
              x1={0}
              x2={100}
              y1={100 - (t / max) * 100}
              y2={100 - (t / max) * 100}
              stroke="#d9eaf6"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path d={area} fill="rgba(21,151,239,0.12)" />
          <path
            d={plan}
            fill="none"
            stroke="#5f7089"
            strokeWidth={2}
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={line}
            fill="none"
            stroke="#0754c3"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div
          aria-hidden="true"
          className="col-start-2 mt-2 grid grid-cols-12 font-ui text-[11px] text-[#5f7089] tabular-nums"
        >
          {REVENUE_SERIES.map((p) => (
            <span key={p.month} className="text-center max-[559px]:[&:nth-child(odd)]:invisible">
              {p.month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskStatus() {
  const total = TASK_BUCKETS.reduce((sum, t) => sum + t.count, 0);
  return (
    <div
      className={`${cardClass} grid content-start gap-3.5 p-4 min-[820px]:max-[1099px]:grid-cols-2 min-[820px]:max-[1099px]:items-center min-[820px]:max-[1099px]:gap-x-[18px]`}
    >
      <div className="min-[820px]:max-[1099px]:col-span-full">
        <p className="font-ui text-[14.5px] font-semibold text-ink">
          Trạng thái công việc
        </p>
        <p className="font-ui text-[12.5px] text-[#5f7089] tabular-nums">
          {total} công việc mẫu
        </p>
      </div>
      <div aria-hidden="true" className="flex h-3.5 gap-0.5 overflow-hidden rounded-full">
        {TASK_BUCKETS.map((t) => (
          <i
            key={t.id}
            className="block min-w-1"
            style={{ background: t.color, flexGrow: t.count }}
          />
        ))}
      </div>
      <ul className="grid gap-1">
        {TASK_BUCKETS.map((t) => (
          <li
            key={t.id}
            className="grid min-h-10 grid-cols-[12px_1fr_auto] items-center gap-2.5 px-2.5 font-ui text-[13.5px] text-body"
          >
            <i className="size-3 rounded" style={{ background: t.color }} />
            <span>{t.label}</span>
            <b className="font-semibold text-ink tabular-nums">{t.count}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DashboardPreview() {
  const revenue = REVENUE_SERIES[REVENUE_SERIES.length - 1].revenue;
  return (
    <div className="grid min-[820px]:grid-cols-[60px_minmax(0,1fr)] min-[1100px]:grid-cols-[188px_minmax(0,1fr)]">
      <aside
        aria-hidden="true"
        className="hidden content-start justify-items-center gap-1 border-r border-brand-deep/10 bg-[#f6fbff] px-2 py-3.5 min-[820px]:grid min-[1100px]:justify-items-stretch min-[1100px]:p-3"
      >
        <div className="flex items-center gap-2.5 pb-3 font-semibold text-ink min-[1100px]:px-2 min-[1100px]:pt-1">
          <i className="size-[22px] rounded-[7px] bg-brand-deep" />
          <span className="hidden text-sm min-[1100px]:inline">Ứng dụng mẫu</span>
        </div>
        {NAV.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-2.5 rounded-[10px] p-2.5 font-ui text-[13.5px] min-[1100px]:px-2.5 min-[1100px]:py-[9px] ${
              i === 0
                ? "bg-white font-medium text-brand-deep shadow-[0_1px_2px_rgba(7,84,195,0.06),0_4px_12px_rgba(7,84,195,0.05)]"
                : "text-body"
            }`}
          >
            <ShowcaseIcon name={item.icon} className="size-[17px]" />
            <span className="hidden min-[1100px]:inline">{item.label}</span>
          </div>
        ))}
      </aside>

      <div className="grid min-w-0 content-start gap-4 p-3.5 min-[820px]:p-5 min-[1100px]:px-[22px] min-[1100px]:pb-[22px]">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">
            Tổng quan điều hành
          </h3>
          <TemporaryPreviewNotice />
        </div>

        <div className="grid grid-cols-1 gap-3 min-[401px]:grid-cols-2 min-[820px]:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.id}
              className={`${cardClass} grid gap-1 px-4 pb-3 pt-3.5 max-[400px]:grid-cols-[1fr_auto] max-[400px]:items-center max-[400px]:gap-x-2.5`}
            >
              <p className="font-ui text-[12.5px] leading-[1.35] text-[#5f7089]">
                {kpi.label}
              </p>
              <p className="whitespace-nowrap text-[25px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink tabular-nums">
                {kpi.value ?? formatVnd(revenue)}
                {kpi.value ? null : (
                  <span className="ml-1 font-ui text-[13px] font-medium tracking-normal text-[#5f7089]">
                    triệu ₫
                  </span>
                )}
              </p>
              <div className="max-[400px]:col-span-full">
                <Sparkline data={kpi.spark} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-3 min-[1100px]:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
          <RevenueChart />
          <TaskStatus />
        </div>

        <div className={`${cardClass} px-4 py-1`}>
          <div
            aria-hidden="true"
            className="hidden grid-cols-[minmax(0,2.2fr)_40px_minmax(0,1.4fr)_130px_84px] items-center gap-3.5 border-b border-brand-deep/10 py-2.5 font-ui text-xs text-[#5f7089] min-[820px]:grid"
          >
            <span>Dự án</span>
            <span>PT</span>
            <span>Tiến độ</span>
            <span>Trạng thái</span>
            <span className="text-right">Hạn</span>
          </div>
          <ul>
            {PROJECTS.map((p) => (
              <li
                key={p.id}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 border-b border-brand-deep/10 py-3.5 font-ui text-[13.5px] last:border-b-0 min-[820px]:grid-cols-[minmax(0,2.2fr)_40px_minmax(0,1.4fr)_130px_84px] min-[820px]:gap-3.5 min-[820px]:py-3"
              >
                <div className="min-w-0 font-medium text-ink">
                  {p.name}
                  <span className="block text-xs font-normal text-[#5f7089]">{p.code}</span>
                </div>
                <span
                  title={`Người phụ trách ${p.owner}`}
                  className="hidden size-[26px] place-items-center rounded-full bg-brand-light text-[11.5px] font-semibold text-brand-deep min-[820px]:grid"
                >
                  {p.owner}
                </span>
                <div className="order-3 col-span-2 flex items-center gap-2.5 min-[820px]:order-none min-[820px]:col-span-1">
                  <i className="block h-1.5 flex-1 overflow-hidden rounded-md bg-brand-light">
                    <s
                      className="block h-full rounded-md bg-brand-deep no-underline"
                      style={{ width: `${p.progress}%` }}
                    />
                  </i>
                  <span className="w-[34px] text-right text-xs text-body tabular-nums">
                    {p.progress}%
                  </span>
                </div>
                <span className="min-[820px]:order-none">
                  <Pill tone={p.status}>{p.statusLabel}</Pill>
                </span>
                <span className="order-4 col-span-2 text-xs text-[#5f7089] tabular-nums before:content-['Hạn:_'] min-[820px]:order-none min-[820px]:col-span-1 min-[820px]:text-right min-[820px]:text-[12.5px] min-[820px]:before:content-none">
                  {p.due}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
