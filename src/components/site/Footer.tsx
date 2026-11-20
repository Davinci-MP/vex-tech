import { FACEBOOK_URL, NAV_ITEMS } from "@/lib/site";
import { Container } from "@/components/ui/Layout";
import { IconExternal } from "@/components/ui/icons";
import { BrandLogoFull } from "./BrandLogo";

const services = [
  "AI Automation",
  "Business Software & SaaS",
  "System Integration",
];

const linkClass =
  "inline-flex min-h-11 items-center gap-1.5 font-ui text-[0.9375rem] text-body transition-[color] duration-150 hover:text-brand-deep";

export function Footer() {
  return (
    <footer className="border-t border-brand-deep/10 bg-brand-light/70">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandLogoFull sizes="112px" className="h-24" />
            <p className="mt-5 max-w-xs font-ui text-base font-medium text-ink">
              Build Smarter. Grow Faster.
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-body">
              Giải pháp AI, phần mềm và tự động hóa cho doanh nghiệp.
            </p>
          </div>

          <nav aria-label="Điều hướng chân trang">
            <h2 className="font-ui text-sm font-semibold text-ink">Khám phá</h2>
            <ul className="mt-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-ui text-sm font-semibold text-ink">Dịch vụ</h2>
            <ul className="mt-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex min-h-11 items-center font-ui text-[0.9375rem] text-body"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-ui text-sm font-semibold text-ink">Kết nối</h2>
            <ul className="mt-3">
              <li>
                <a
                  href={FACEBOOK_URL}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Page
                  <IconExternal className="size-4" />
                  <span className="sr-only"> (mở trong tab mới)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-brand-deep/10 pt-6 font-ui text-sm text-body">
          © VEX Tech. Bảo lưu mọi quyền.
        </p>
      </Container>
    </footer>
  );
}
