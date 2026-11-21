"use client";

import { useState } from "react";
import { Container, SectionHeading } from "@/components/ui/Layout";

type WorkflowMode = "manual" | "automation";

type WorkflowStep = {
  label: string;
};

type Workflow = {
  title: string;
  steps: readonly WorkflowStep[];
};

const workflows: Record<WorkflowMode, Workflow> = {
  manual: {
    title: "Quy trình thủ công",
    steps: [
      { label: "Tiếp nhận thông tin" },
      { label: "Nhập dữ liệu thủ công" },
      { label: "Tổng hợp báo cáo" },
      { label: "Gửi kết quả và cập nhật hệ thống" },
    ],
  },
  automation: {
    title: "Quy trình tự động hóa",
    steps: [
      { label: "Tiếp nhận dữ liệu" },
      { label: "AI phân loại và xử lý theo quy tắc" },
      { label: "Đồng bộ hệ thống" },
      { label: "Theo dõi kết quả và xử lý ngoại lệ" },
    ],
  },
};

const workflowOptions: readonly {
  label: string;
  value: WorkflowMode;
}[] = [
  { label: "Quy trình thủ công", value: "manual" },
  { label: "Quy trình tự động hóa", value: "automation" },
];

export function AutomationComparison() {
  const [mode, setMode] = useState<WorkflowMode>("manual");
  const workflow = workflows[mode];

  return (
    <section
      aria-labelledby="automation-comparison-title"
      className="bg-white py-20 sm:py-28"
    >
      <Container className="grid items-center gap-10 xl:grid-cols-2 xl:gap-14">
        <SectionHeading
          id="automation-comparison-title"
          eyebrow="Giải pháp tự động hóa"
          title="Từ thao tác thủ công đến vận hành thông minh."
          description="Khám phá cách một quy trình có thể được thiết kế lại với AI và tự động hóa để giảm thao tác lặp lại và kết nối dữ liệu hiệu quả hơn."
        />

        <div className="min-w-0 rounded-[2rem] border border-brand-deep/10 bg-brand-light/70 p-2.5 sm:p-3.5">
          <article
            aria-label="Minh họa so sánh quy trình"
            className="min-w-0 rounded-[1.55rem] border border-brand-deep/10 bg-white p-5 shadow-[0_24px_60px_-48px_rgba(7,42,91,0.46)] sm:p-8"
          >
            <div className="flex min-w-0 items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-ui text-[0.7rem] font-bold uppercase leading-5 tracking-[0.12em] text-body">
                  Minh họa luồng công việc
                </p>
                <h3
                  id="workflow-title"
                  className="mt-1 text-lg font-semibold leading-snug tracking-[-0.025em] text-ink sm:text-xl"
                >
                  {workflow.title}
                </h3>
              </div>
              <span
                aria-label="4 bước"
                className="inline-flex shrink-0 items-baseline gap-1.5 rounded-full border border-brand-deep/10 px-2.5 py-1.5 font-ui text-sm font-bold tabular-nums text-brand-deep"
              >
                04
                <span
                  aria-hidden="true"
                  className="text-[0.58rem] tracking-[0.08em] text-body"
                >
                  BƯỚC
                </span>
              </span>
            </div>

            <fieldset className="mt-6 grid min-w-0 grid-cols-2 gap-1 rounded-2xl bg-slate-50 p-1">
              <legend className="sr-only">Chọn quy trình để xem</legend>
              {workflowOptions.map((option) => (
                <label
                  key={option.value}
                  className="group relative min-w-0 cursor-pointer"
                >
                  <input
                    checked={mode === option.value}
                    className="peer sr-only"
                    name="workflow-mode"
                    onChange={() => setMode(option.value)}
                    type="radio"
                    value={option.value}
                  />
                  <span className="flex min-h-11 items-center justify-center rounded-xl border border-transparent px-2 py-2 text-center font-ui text-xs font-semibold leading-5 text-body transition-[background-color,border-color,color,box-shadow] duration-200 ease-[var(--ease-out)] group-hover:text-ink peer-checked:border-brand-deep/10 peer-checked:bg-white peer-checked:text-brand-deep peer-checked:shadow-sm peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-brand-deep peer-focus-visible:outline-offset-2 motion-reduce:transition-none sm:px-3 sm:text-sm">
                    {option.label}
                  </span>
                </label>
              ))}
            </fieldset>

            <div
              className={`mt-5 rounded-2xl p-1 transition-colors duration-200 motion-reduce:transition-none ${
                mode === "automation" ? "bg-brand-light/35" : "bg-white"
              }`}
            >
              <ol
                aria-label={`Các bước: ${workflow.title}`}
                aria-live="polite"
                className="flex flex-col"
              >
                {workflow.steps.map((step, index) => (
                  <li
                    key={`${mode}-${step.label}`}
                    className="relative grid min-w-0 grid-cols-[2.125rem_minmax(0,1fr)] items-start gap-3 pb-4 last:pb-0"
                  >
                    <span
                      aria-hidden="true"
                      className={`relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-full border font-ui text-[0.68rem] font-bold tabular-nums transition-[background-color,border-color,color] duration-200 motion-reduce:transition-none ${
                        mode === "automation"
                          ? "border-brand/20 bg-brand-light text-brand-deep"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`min-w-0 pt-1 text-[0.9375rem] leading-6 transition-colors duration-200 motion-reduce:transition-none ${
                        mode === "automation" && index === 1
                          ? "font-semibold text-brand-deep"
                          : "font-medium text-ink"
                      }`}
                    >
                      {step.label}
                    </span>
                    {index < workflow.steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-[1.03rem] top-[2.125rem] w-px ${
                          mode === "automation"
                            ? "bg-brand/25"
                            : "bg-brand-deep/10"
                        }`}
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
