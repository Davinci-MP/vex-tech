import { WORKFLOW_SOURCES, WORKFLOW_STAGES } from "../showcase.data";
import {
  Pill,
  ShowcaseIcon,
  TemporaryPreviewNotice,
  cardClass,
} from "../showcase-ui";

export function AutomationPreview() {
  const source = WORKFLOW_SOURCES.form;
  const first = WORKFLOW_STAGES[0];

  return (
    <div className="grid gap-4 p-3.5 min-[820px]:p-5 min-[1100px]:px-[22px] min-[1100px]:pb-[22px]">
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
        <h3 className="text-xl font-semibold tracking-[-0.015em] text-ink">
          Luồng xử lý yêu cầu mới
        </h3>
        <TemporaryPreviewNotice />
      </div>

      <ol aria-label="Các bước của luồng" className="grid min-[820px]:grid-cols-4">
        {WORKFLOW_STAGES.map((stage, index) => {
          const selected = index === 0;
          const last = index === WORKFLOW_STAGES.length - 1;
          return (
            <li
              key={stage.id}
              className={`relative min-w-0 ${last ? "" : "pb-4 min-[820px]:pb-0 min-[820px]:pr-[18px]"}`}
            >
              <div
                className={`grid h-full grid-cols-[34px_minmax(0,1fr)_auto] content-start items-center gap-x-3 gap-y-2.5 rounded-[14px] border-[1.5px] bg-white p-3.5 ${
                  selected
                    ? "border-brand-deep shadow-[0_0_0_1px_var(--color-brand-deep)]"
                    : "border-brand-deep/10"
                }`}
              >
                <span className="grid size-[34px] place-items-center rounded-[10px] bg-brand-light text-brand-deep">
                  <ShowcaseIcon name={stage.icon} className="size-[17px]" />
                </span>
                <span className="hidden font-ui text-[11.5px] font-medium uppercase tracking-[0.04em] text-[#5f7089] min-[820px]:col-start-2 min-[820px]:row-start-1 min-[820px]:block">
                  {stage.step}
                </span>
                <span className="col-start-3 row-start-1">
                  <Pill>Sẵn sàng</Pill>
                </span>
                <div className="col-start-2 row-start-1 min-w-0 min-[820px]:col-span-3 min-[820px]:col-start-1 min-[820px]:row-start-2">
                  <b className="block text-[14.5px] font-semibold leading-[1.3] text-ink">
                    {stage.title}
                  </b>
                  <small className="mt-0.5 block font-ui text-[12.5px] leading-[1.4] text-[#5f7089]">
                    {stage.subtitle}
                  </small>
                </div>
              </div>
              {last ? null : (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-2px] left-[31px] h-5 w-0.5 bg-[#c6dff0] min-[820px]:bottom-auto min-[820px]:left-auto min-[820px]:right-[-2px] min-[820px]:top-[38px] min-[820px]:h-0.5 min-[820px]:w-[22px]"
                />
              )}
            </li>
          );
        })}
      </ol>

      <div className="grid gap-3 min-[820px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className={`${cardClass} grid content-start gap-3.5 p-[18px]`}>
          <div>
            <p className="font-ui text-[12.5px] text-[#5f7089]">{first.step}</p>
            <h4 className="text-base font-semibold text-ink">{first.title}</h4>
          </div>
          <div className="grid gap-2.5 min-[560px]:grid-cols-2">
            <div className="min-w-0 rounded-xl border border-brand-deep/10 bg-[#f6fbff] p-3">
              <h5 className="mb-2 font-ui text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#5f7089]">
                Dữ liệu vào
              </h5>
              <dl className="grid gap-1.5 font-ui text-[13px]">
                {source.record.map(([label, value]) => (
                  <div key={label} className="grid gap-px">
                    <dt className="text-[11.5px] text-[#5f7089]">{label}</dt>
                    <dd className="m-0 break-words text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="min-w-0 rounded-xl border border-brand-deep/10 bg-[#f6fbff] p-3">
              <h5 className="mb-2 font-ui text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#5f7089]">
                Đầu ra
              </h5>
              <dl className="grid gap-1.5 font-ui text-[13px]">
                {[
                  ["Định dạng", "Bản ghi chuẩn hóa (JSON)"],
                  ["Kiểm tra", "Đủ trường bắt buộc"],
                  ["Trạng thái", "Chờ chạy"],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-px">
                    <dt className="text-[11.5px] text-[#5f7089]">{label}</dt>
                    <dd className="m-0 break-words text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className={`${cardClass} grid content-start gap-2.5 p-4`}>
          <p className="font-ui text-[14.5px] font-semibold text-ink">
            Nhật ký chạy (mô phỏng)
          </p>
          <div className="grid min-h-[190px] content-center justify-items-center gap-2 rounded-xl border border-brand-deep/10 bg-[#f6fbff] px-3.5 py-5 text-center font-ui text-[13.5px] text-[#5f7089]">
            <ShowcaseIcon name="activity" className="size-10 text-[#c6dff0]" />
            <b className="text-[14.5px] font-semibold text-body">Chưa có lượt chạy</b>
            <span>Nhấn “Chạy mô phỏng” để xem dữ liệu đi qua từng bước.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
