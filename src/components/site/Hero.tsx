import { FACEBOOK_URL } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, eyebrowClass } from "@/components/ui/Layout";
import {
  IconArrowDown,
  IconInbox,
  IconLink,
  IconSpark,
} from "@/components/ui/icons";
import { BrandMark } from "./BrandLogo";

const flowSteps = [
  {
    icon: IconInbox,
    title: "Tiếp nhận",
    text: "Yêu cầu, tài liệu và dữ liệu đầu vào",
  },
  {
    icon: IconSpark,
    title: "Xử lý bằng AI",
    text: "Phân loại, tổng hợp và xử lý theo quy tắc",
  },
  {
    icon: IconLink,
    title: "Kết nối",
    text: "Cập nhật vào phần mềm và hệ thống đang dùng",
  },
];

const focusAreas = [
  "AI Automation",
  "Phần mềm doanh nghiệp",
  "SaaS",
  "Tích hợp hệ thống",
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-x-clip bg-[radial-gradient(60rem_32rem_at_85%_-10%,var(--color-brand-light),transparent_70%)]"
    >
      <Container className="grid items-center gap-12 py-14 sm:py-20 xl:min-h-[min(46rem,calc(100svh-4.5rem))] xl:grid-cols-[1.3fr_0.7fr] xl:gap-14 xl:py-20">
        <div>
          <p className={eyebrowClass}>
            Giải pháp công nghệ cho doanh nghiệp hiện đại
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2.125rem,1.2rem+4.6vw,3.875rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink"
          >
            <span className="block text-balance">Công nghệ thông minh.</span>{" "}
            <span className="block text-balance text-brand-deep">
              Tăng trưởng bền vững.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-body sm:text-xl sm:leading-9">
            Giải pháp AI, phần mềm và tự động hóa giúp doanh nghiệp vận hành
            hiệu quả hơn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#giai-phap" className="sm:min-w-52">
              Khám phá giải pháp
              <IconArrowDown className="size-4" />
            </ButtonLink>
            <ButtonLink
              href={FACEBOOK_URL}
              external
              variant="secondary"
              className="sm:min-w-44"
            >
              Liên hệ tư vấn
            </ButtonLink>
          </div>
          <ul
            className="enter mt-10 flex flex-wrap gap-x-5 gap-y-2 font-ui text-sm text-body"
            style={{ "--i": 3 } as React.CSSProperties}
            aria-label="Lĩnh vực hoạt động"
          >
            {focusAreas.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="enter w-full"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <div className="rounded-[2.25rem] bg-brand-light p-3 sm:p-5">
            <div className="rounded-[1.75rem] border border-brand-deep/10 bg-white p-5 shadow-[0_30px_60px_-36px_rgba(7,84,195,0.45)] sm:p-7">
              <div className="flex items-center justify-between">
                <p className="font-ui text-sm font-semibold text-ink">
                  Luồng tự động hóa
                </p>
                <BrandMark className="w-10" />
              </div>
              <ol className="relative mt-7 flex flex-col gap-3 md:grid md:grid-cols-3 xl:flex xl:flex-col">
                <span className="absolute bottom-8 left-[1.6875rem] top-8 w-px bg-gradient-to-b from-brand/10 via-brand/40 to-brand/10 md:hidden xl:block" />
                {flowSteps.map((step) => (
                  <li
                    key={step.title}
                    className="relative flex items-center gap-4 rounded-2xl border border-brand-deep/10 bg-white p-3.5 md:flex-col md:items-start md:p-4 xl:flex-row xl:items-center xl:p-3.5"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-deep">
                      <step.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-ui text-[0.9375rem] font-semibold text-ink">
                        {step.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-5 text-body">
                        {step.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
