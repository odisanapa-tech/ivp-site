import Link from "next/link";
import { Logo } from "./logo";

const groups = [
  { label: "Институт", links: [{ href: "/#about", label: "Об ИВП" }, { href: "/#directions", label: "Направления" }, { href: "/#team", label: "Люди" }] },
  { label: "Работа и исследования", links: [{ href: "/#projects", label: "Разработки" }, { href: "/#approach", label: "Исследовательская позиция" }, { href: "https://pro.vocalpsy-institute.ru/novaya-rol/", label: "Новая роль ↗", external: true }] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-card mt-auto">
      <div className="container-tight py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="full" />
            <p className="mt-5 max-w-[390px] text-sm leading-relaxed text-muted">Исследования, образовательные материалы и профессиональные инструменты на пересечении психологии и вокальной практики.</p>
          </div>
          {groups.map(group => (
            <div key={group.label}>
              <h2 className="mb-4 text-xs uppercase tracking-[0.15em] text-bronze">{group.label}</h2>
              <ul className="space-y-3 text-sm">{group.links.map(item => <li key={item.href}><Link href={item.href} target={"external" in item && item.external ? "_blank" : undefined} rel={"external" in item && item.external ? "noopener noreferrer" : undefined} className="text-ink/80 hover:text-accent">{item.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-rule pt-6 flex flex-col gap-2 text-xs text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Институт вокальной психологии</span>
          <span>Предварительная версия сайта · Информация о программах и документах уточняется</span>
        </div>
      </div>
    </footer>
  );
}
