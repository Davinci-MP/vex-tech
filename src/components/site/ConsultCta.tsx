import { FACEBOOK_URL } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, sectionTitleClass } from "@/components/ui/Layout";

export function ConsultCta() {
  return (
    <section
      id="lien-he"
      aria-labelledby="cta-title"
      className="scroll-mt-4 pb-20 sm:pb-28"
    >
      <Container>
        <div className="on-dark overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0754c3_0%,#0a66d9_100%)] px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-20">
          <h2
            id="cta-title"
            className={`mx-auto max-w-2xl text-white ${sectionTitleClass}`}
          >
            Bắt đầu bằng một cuộc trò chuyện với VEX&nbsp;Tech
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-white sm:text-lg sm:leading-8">
            Nhắn tin qua Fanpage chính thức để chia sẻ nhu cầu và cùng xác định
            giải pháp phù hợp cho doanh nghiệp của bạn.
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonLink
              href={FACEBOOK_URL}
              external
              variant="inverse"
              className="w-full sm:w-auto sm:min-w-52"
            >
              Liên hệ tư vấn
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
