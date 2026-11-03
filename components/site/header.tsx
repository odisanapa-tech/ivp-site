"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#about", label: "Об ИВП" },
  { href: "/#directions", label: "Направления" },
  { href: "/materials", label: "Материалы" },
  { href: "/#approach", label: "Исследования" },
  { href: "/#team", label: "Команда" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-40 bg-page/95 backdrop-blur-md transition-colors", scrolled && "border-b border-rule/70")}>
      <div className="container-tight flex h-16 md:h-20 items-center justify-between gap-5">
        <Logo />
        <nav aria-label="Основное меню" className="hidden lg:flex items-center gap-0.5 text-[13px]">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-2 rounded-md text-ink/80 hover:text-accent hover:bg-accent-soft/40 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="https://pro.vocalpsy-institute.ru/novaya-rol/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-2 rounded-md border border-accent px-4 py-2.5 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors">
          Новая роль <ArrowUpRight className="h-4 w-4" />
        </a>
        <button type="button" className="lg:hidden p-2 -mr-2 text-ink" onClick={() => setOpen(v => !v)} aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} aria-controls="ivp-mobile-menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div id="ivp-mobile-menu" className="lg:hidden border-t border-rule bg-page">
          <nav aria-label="Мобильное меню" className="container-tight py-4 flex flex-col divide-y divide-rule/60">
            {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-3 text-[15px] text-ink hover:text-accent">{item.label}</Link>)}
            <a href="https://pro.vocalpsy-institute.ru/novaya-rol/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="py-4 text-[15px] text-accent font-medium">Новая роль ↗</a>
          </nav>
        </div>
      )}
    </header>
  );
}
