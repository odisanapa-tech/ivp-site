import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Compass, FileText } from "lucide-react";

const products = [
  {
    slug: "atlas",
    status: "СОСТАВ И УСЛОВИЯ ВЫДАЧИ ПРОВЕРЯЮТСЯ",
    name: "Навигатор для работы педагога",
    maker: "Мария Осадчая",
    problem: "Уроки с детьми, занятия для взрослых, конкурсы и новые форматы - это не одна и та же задача. Как понять, что вы обещаете человеку и каким должен быть результат?",
    inside: "В рабочем документе описаны 22 формата работы. Для каждого рассматриваются запрос, заказчик, роль педагога, результат и границы компетенции.",
    note: "На Диске обнаружен текст навигатора и отдельная таблица форматов. Версию PDF, окончательную полноту и готовность продажи необходимо сверить.",
    icon: Compass,
  },
  {
    slug: "peresborka",
    status: "ДВЕ ТЕТРАДИ ЕСТЬ В РАБОЧИХ ДОКУМЕНТАХ",
    name: "Профессиональная пересборка",
    maker: "Дмитрий Осадчий",
    problem: "Опыт есть. Ученики и результаты есть. Но когда нужно объяснить, чем ваша работа отличается от других, привычные слова не помогают.",
    inside: "Первая тетрадь помогает собрать опыт и достижения. Вторая - найти повторяющиеся приемы, разобрать реальные случаи и наметить собственные форматы работы.",
    note: "Исходные тетради обнаружены. Последняя утвержденная редакция, единый PDF-комплект и цена еще не подтверждены.",
    icon: BookOpen,
  },
  {
    slug: "golos",
    status: "РАБОЧАЯ ТЕТРАДЬ · СТАТУС ПРОВЕРЯЕТСЯ",
    name: "Ваш голос снаружи",
    maker: "Дмитрий Осадчий",
    problem: "Вы знаете, как работаете, но когда нужно рассказать о себе ученикам или написать пост, кажется, что нечего сказать.",
    inside: "В сентябрьском реестре описана самостоятельная тетрадь о понятном рассказе о своей работе, историях из практики, выборе площадки и публикации.",
    note: "Документ описан в реестре. Нынешний файл и решение о продаже в ноябре отдельно не проверены.",
    icon: FileText,
  },
];

export const metadata = {
  title: "Практические материалы для вокальных педагогов",
  description: "Рабочие тетради и навигаторы Института вокальной психологии: какие задачи помогают разбирать и в каком статусе находятся.",
};

export default function MaterialsPage() {
  return (
    <>
      <div className="bg-page border-b border-rule">
        <div className="container-tight py-16 md:py-24">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"><ArrowLeft className="h-4 w-4"/> На главную</Link>
          <p className="mt-10 text-xs uppercase font-semibold tracking-[0.2em] text-bronze">Для вокальных педагогов</p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.05em]">Материалы под<br/><span className="text-accent">конкретные задачи.</span></h1>
          <p className="mt-7 max-w-[670px] text-lg md:text-xl leading-relaxed text-muted">Когда нужно разобраться в сложном случае, увидеть ценность своей практики или понять, куда двигаться дальше. Здесь собраны реальные разработки ИВП с честно указанным статусом.</p>
          <p className="mt-5 max-w-[680px] text-sm text-muted">Сейчас это предварительный каталог, а не работающий магазин. До подтверждения актуальных файлов и условий мы не принимаем оплату на этой странице.</p>
        </div>
      </div>
      <section className="container-tight py-12 md:py-20">
        <div className="space-y-5">
          {products.map((p,i)=>(
            <article key={p.slug} id={p.slug} className="scroll-mt-28 rounded-lg border border-rule bg-card/40 p-7 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs tracking-widest text-bronze">0{i+1} / {p.status}</span>
                <p.icon className="h-6 w-6 text-accent stroke-[1.5]"/>
              </div>
              <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl leading-[1.12] tracking-[-0.03em]">{p.name}</h2>
                  <p className="mt-3 text-sm font-medium text-accent">Автор: {p.maker}</p>
                  <p className="mt-6 text-[17px] leading-relaxed">{p.problem}</p>
                </div>
                <div className="space-y-5">
                  <div><h3 className="text-sm font-semibold">Что внутри</h3><p className="mt-2 text-sm leading-relaxed text-muted">{p.inside}</p></div>
                  <div><h3 className="text-sm font-semibold">Что еще проверяем</h3><p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-rule bg-ink text-page">
        <div className="container-tight py-12 md:py-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#D6B793]">Уже есть отдельный проект</p><h2 className="mt-3 font-display text-2xl md:text-3xl">Новая профессиональная роль</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-page/70">Если хочется увидеть новые возможности своей работы, можно познакомиться с существующей страницей проекта.</p></div>
          <a className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-page/40 px-5 py-3 text-sm font-medium hover:bg-page/10" href="https://pro.vocalpsy-institute.ru/novaya-rol/" target="_blank" rel="noopener noreferrer">Открыть проект <ArrowUpRight className="h-4 w-4"/></a>
        </div>
      </section>
    </>
  );
}
