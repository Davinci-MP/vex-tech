import {
  Container,
  SectionHeading,
  cardTitleClass,
} from "@/components/ui/Layout";

const steps = [
  {
    name: "Discover",
    label: "Khám phá",
    text: "Lắng nghe mục tiêu, tìm hiểu quy trình và xác định điểm nghẽn cần giải quyết trước tiên.",
  },
  {
    name: "Design",
    label: "Thiết kế",
    text: "Phác thảo giải pháp, luồng dữ liệu và trải nghiệm sử dụng trước khi bắt đầu xây dựng.",
  },
  {
    name: "Develop",
    label: "Phát triển",
    text: "Xây dựng, tích hợp và kiểm thử theo từng giai đoạn để mỗi bước đều rõ ràng, kiểm soát được.",
  },
  {
    name: "Improve",
    label: "Cải tiến",
    text: "Theo dõi vận hành, tinh chỉnh và mở rộng giải pháp cùng sự phát triển của doanh nghiệp.",
  },
];

export function Method() {
  return (
    <section
      id="phuong-phap"
      aria-labelledby="method-title"
      className="-scroll-mt-20 py-20 sm:-scroll-mt-28 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="method-title"
          eyebrow="Phương pháp"
          title="Bốn bước rõ ràng, từ ý tưởng đến vận hành"
          description="Quy trình làm việc gọn và minh bạch, giúp mỗi giải pháp đi đúng hướng ngay từ đầu."
        />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.name}>
              <div aria-hidden="true" className="flex items-center gap-3">
                <span className="font-ui text-sm font-semibold tabular-nums text-brand-deep">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand/50 to-brand/0" />
              </div>
              <h3 className={`mt-5 ${cardTitleClass}`}>{step.name}</h3>
              <p className="mt-1 text-base font-semibold text-brand-deep">
                {step.label}
              </p>
              <p className="mt-4 text-pretty text-base leading-7 text-body">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
