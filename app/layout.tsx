import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { siteConfig } from "@/lib/utils";

const display = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });
const body = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-body", weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Институт вокальной психологии — Наука · Образование · Практика", template: "%s · ИВП" },
  description: siteConfig.description,
  openGraph: { title: siteConfig.name, description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.name, locale: "ru_RU", type: "website" },
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#F7F3EE", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-3 focus:left-3 focus:bg-accent focus:text-white focus:px-2 focus:py-2">Перейти к содержимому</a>
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
