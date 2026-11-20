import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["vietnamese", "latin"],
  display: "swap",
});

const description =
  "VEX Tech cung cấp giải pháp AI, phần mềm doanh nghiệp, SaaS và tích hợp hệ thống, giúp doanh nghiệp tự động hóa và vận hành hiệu quả hơn.";

export const metadata: Metadata = {
  title: "VEX Tech | AI Automation, phần mềm doanh nghiệp & SaaS",
  description,
  applicationName: "VEX Tech",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "VEX Tech",
    title: "VEX Tech | Công nghệ thông minh. Tăng trưởng bền vững.",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
