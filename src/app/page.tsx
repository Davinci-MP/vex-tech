import { ConsultCta } from "@/components/site/ConsultCta";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Method } from "@/components/site/Method";
import { Solutions } from "@/components/site/Solutions";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-brand-deep px-5 py-3 font-ui text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Bỏ qua điều hướng
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Solutions />
        <Method />
        <ConsultCta />
      </main>
      <Footer />
    </>
  );
}
