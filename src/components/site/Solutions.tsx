import {
  Container,
  SectionHeading,
  cardTitleClass,
} from "@/components/ui/Layout";
import {
  IconAutomation,
  IconCheck,
  IconIntegration,
  IconSoftware,
} from "@/components/ui/icons";

const solutions = [
  {
    icon: IconAutomation,
    title: "AI Automation",
    text: "Tự động hóa các quy trình lặp lại và kết nối công cụ, để đội ngũ tập trung vào công việc tạo giá trị.",
    points: [
      "Tự động hóa quy trình vận hành",
      "Luồng xử lý và trợ lý ứng dụng AI",
      "Kết nối với công cụ đang sử dụng",
    ],
  },
  {
    icon: IconSoftware,
    title: "Business Software & SaaS",
    text: "Thiết kế và xây dựng phần mềm theo đúng cách doanh nghiệp làm việc, từ quản trị nội bộ đến nền tảng SaaS.",
    points: [
      "Phần mềm quản trị theo yêu cầu",
      "Nền tảng SaaS cho sản phẩm riêng",
      "Báo cáo và bảng điều khiển rõ ràng",
    ],
  },
  {
    icon: IconIntegration,
    title: "System Integration",
    text: "Kết nối các hệ thống rời rạc thành một luồng dữ liệu thống nhất, ổn định và sẵn sàng mở rộng.",
    points: [
      "Tích hợp API và nguồn dữ liệu",
      "Đồng bộ dữ liệu giữa các hệ thống",
      "Chuẩn hóa quy trình dữ liệu",
    ],
  },
];

export function Solutions() {
  return (
    <section
      id="giai-phap"
      aria-labelledby="solutions-title"
      className="-scroll-mt-20 bg-brand-light/70 py-20 sm:-scroll-mt-28 sm:py-28"
    >
      <Container>
        <SectionHeading
          id="solutions-title"
          eyebrow="Giải pháp"
          title="Ba nhóm giải pháp cho vận hành hiện đại"
          description="Từ tự động hóa đến phần mềm và tích hợp, mỗi giải pháp được xây dựng quanh quy trình thực tế của doanh nghiệp."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {solutions.map((item, index) => {
            const isLast = index === solutions.length - 1;
            return (
              <li key={item.title} className={isLast ? "md:max-xl:col-span-2" : ""}>
                <article className="relative flex h-full flex-col rounded-3xl border border-brand-deep/10 bg-white p-6 transition-[translate] duration-200 ease-[var(--ease-out)] after:pointer-events-none after:absolute after:inset-0 after:rounded-3xl after:opacity-0 after:shadow-[0_24px_48px_-32px_rgba(7,84,195,0.45)] after:transition-opacity after:duration-200 hover:after:opacity-100 motion-safe:hover:-translate-y-0.5 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-light text-brand-deep">
                      <item.icon className="size-6" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-ui text-sm font-semibold tabular-nums text-brand-deep"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={`mt-8 ${cardTitleClass}`}>{item.title}</h3>
                  <p className="mb-6 mt-3 text-pretty text-base leading-7 text-body">
                    {item.text}
                  </p>
                  <ul
                    className={`mt-auto flex flex-col gap-3 border-t border-brand-deep/10 pt-6 ${
                      isLast ? "md:max-xl:grid md:max-xl:grid-cols-3 md:max-xl:gap-x-6" : ""
                    }`}
                  >
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[0.9375rem] leading-6 text-ink"
                      >
                        <IconCheck className="mt-0.5 size-5 shrink-0 text-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
