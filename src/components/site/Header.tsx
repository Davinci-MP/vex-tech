import { FACEBOOK_URL, NAV_ITEMS } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Layout";
import { BrandLogoFull } from "./BrandLogo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-deep/10 bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a
          href="#top"
          className="flex min-h-11 items-center rounded-lg"
          aria-label="VEX Tech, về đầu trang"
        >
          <BrandLogoFull
            alt=""
            eager
            sizes="64px"
            className="h-12 md:h-14"
          />
        </a>

        <nav aria-label="Điều hướng chính" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 font-ui text-[0.9375rem] font-medium text-body transition-[color,background-color] duration-150 hover:bg-brand-light hover:text-brand-deep"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={FACEBOOK_URL} external className="min-h-11">
            Liên hệ tư vấn
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
