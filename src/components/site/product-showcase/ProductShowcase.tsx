import { Container, SectionHeading } from "@/components/ui/Layout";
import { ShowcaseInteractive } from "./ShowcaseInteractive";

export function ProductShowcase() {
  return (
    <section
      id="giai-phap-truc-quan"
      aria-labelledby="product-showcase-title"
      className="-scroll-mt-20 bg-white py-16 min-[820px]:py-[88px] min-[1100px]:py-28 sm:-scroll-mt-28"
    >
      <Container>
        <div className="mb-8 grid gap-4 min-[820px]:mb-12 min-[1100px]:grid-cols-[1.1fr_0.9fr] min-[1100px]:items-end min-[1100px]:gap-x-16">
          <SectionHeading
            id="product-showcase-title"
            eyebrow="Giải pháp trực quan"
            title="Khám phá công nghệ qua trải nghiệm thực tế."
          />
          <p className="max-w-[52ch] text-pretty text-base leading-7 text-body sm:text-[1.0625rem] sm:leading-[1.65]">
            Từ quản trị doanh nghiệp đến tự động hóa thông minh, khám phá các
            giao diện minh họa giải pháp VEX Tech có thể thiết kế và phát
            triển.
          </p>
        </div>
        <ShowcaseInteractive />
      </Container>
    </section>
  );
}
