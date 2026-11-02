import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpenText, Brain, Compass, FlaskConical, GraduationCap, Layers3, MoveUpRight, UsersRound } from "lucide-react";

const roleUrl = "https://pro.vocalpsy-institute.ru/novaya-rol/";

const directions = [
  { n: "01", icon: GraduationCap, title: "Образование", text: "Практикумы, образовательные программы и материалы для специалистов, работающих с голосом и людьми.", detail: "Учиться и применять" },
  { n: "02", icon: FlaskConical, title: "Исследования", text: "Изучение психологических аспектов вокального обучения, сценического опыта и профессионального развития.", detail: "Исследовать и проверять" },
  { n: "03", icon: Layers3, title: "Практика и инструменты", text: "Рабочие тетради, методические материалы, профессиональные навигаторы и цифровые решения.", detail: "Использовать в работе" },
  { n: "04", icon: UsersRound, title: "Профессиональный диалог", text: "Обмен опытом между вокальными педагогами, психологами, артистами и образовательными организациями.", detail: "Встречаться и сотрудничать" },
];

const audiences = [
  { n: "01", title: "Тем, кто учит петь", text: "Разбирать сложные ситуации на уроке, замечать ценность своего опыта и развивать собственную практику." },
  { n: "02", title: "Тем, кто поёт", text: "Лучше понимать связь голоса, сценического состояния и личного опыта. Искать подходящие формы поддержки." },
  { n: "03", title: "Тем, кто работает с людьми", text: "Психологам, методистам и руководителям — находить точки пересечения профессий и границы компетенций." },
];

const work = [
  { eyebrow: "УЖЕ СУЩЕСТВУЕТ", title: "Новая профессиональная роль", text: "Отдельный проект для вокальных педагогов: переосмысление профессиональных возможностей и способов представить свою работу.", href: roleUrl, action: "Открыть проект", external: true },
  { eyebrow: "РАБОЧАЯ ВЕРСИЯ · ПРОХОДИТ ПРОВЕРКУ", title: "«Я это уже делаю!»", text: "Печатный практикум, помогающий увидеть реальную работу педагога, её ценность и возможные профессиональные решения.", href: "#contact", action: "Узнать о выходе", external: false },
  { eyebrow: "РАЗРАБОТКИ ИВП", title: "Рабочие тетради и профессиональные инструменты", text: "Материалы по профессиональной практике, методу, новым форматам работы и публичному представлению специалиста.", href: "#approach", action: "Посмотреть направления", external: false },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] md:text-xs tracking-[0.18em] uppercase font-semibold text-bronze">{children}</div>;
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-rule bg-page">
        <div aria-hidden className="pointer-events-none absolute -right-24 top-12 h-[360px] w-[360px] md:h-[650px] md:w-[650px] rounded-full border border-accent/15" />
        <div aria-hidden className="pointer-events-none absolute -right-6 top-28 h-[260px] w-[260px] md:h-[510px] md:w-[510px] rounded-full border border-accent/20" />
        <div aria-hidden className="pointer-events-none absolute right-12 top-44 h-[120px] w-[120px] md:h-[360px] md:w-[360px] rounded-full border border-bronze/25" />
        <div className="container-tight relative pt-16 pb-20 md:pt-28 md:pb-28">
          <div className="max-w-[850px]">
            <Eyebrow>Институт вокальной психологии</Eyebrow>
            <h1 className="mt-7 text-[clamp(3.3rem,8vw,7.1rem)] leading-[0.99] tracking-[-0.055em] font-display font-medium text-ink">
              Голос —<br /><span className="text-accent">больше,</span><br />чем техника.
            </h1>
            <p className="mt-8 max-w-[650px] text-[18px] md:text-[22px] leading-[1.6] text-ink/80">
              Исследуем психологические аспекты вокального искусства, создаём образовательные программы и практические инструменты для тех, кто поёт и учит петь.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#directions" className="inline-flex items-center gap-3 rounded-md bg-accent px-6 py-4 font-medium text-white transition-colors hover:bg-accent-hover">
                Чем занимается ИВП <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-3 rounded-md border border-rule bg-page/80 px-6 py-4 font-medium text-ink transition-colors hover:border-accent">
                Наши разработки <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-16 md:mt-24 flex items-center justify-between gap-4 border-t border-ink/15 pt-5 text-xs uppercase tracking-[0.12em] text-muted">
            <span>Наука · Образование · Практика</span><span className="hidden sm:inline">ИВП / 2026</span>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tight grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div><Eyebrow>01 / Об институте</Eyebrow><p className="mt-4 text-sm leading-relaxed text-muted">Голос существует не отдельно от человека.</p></div>
          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.14] tracking-[-0.035em]">Там, где вокальная практика встречается с психологией.</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2 text-[16px] leading-relaxed text-muted">
              <p>Во время вокального обучения значение имеют не только техника и упражнения. Влияют волнение, мотивация, отношения с педагогом, опыт выступлений и отношение человека к собственному голосу.</p>
              <p>ИВП исследует эти пересечения и переводит профессиональные наблюдения в материалы, инструменты и образовательные решения, которыми можно пользоваться в реальной работе.</p>
            </div>
            <p className="mt-6 text-sm text-muted">Мы различаем исследовательские гипотезы, авторские разработки и знания, имеющие научное подтверждение.</p>
          </div>
        </div>
      </section>

      <section id="directions" className="scroll-mt-24 bg-card/70 border-y border-rule py-20 md:py-28">
        <div className="container-tight">
          <Eyebrow>02 / Наши направления</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-[670px] font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.12] tracking-[-0.035em]">Четыре направления.<br />Одна профессиональная область.</h2>
            <p className="max-w-[320px] text-sm leading-relaxed text-muted">Создаём условия для развития знаний и практики — без необходимости начинать с одного обязательного курса.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule md:grid-cols-2">
            {directions.map((d) => (
              <article key={d.n} className="group bg-page p-7 md:p-9 min-h-[275px]">
                <div className="flex items-start justify-between"><span className="text-xs tracking-widest text-bronze">{d.n} / 04</span><d.icon className="h-6 w-6 text-accent stroke-[1.5]" /></div>
                <h3 className="mt-10 text-[25px] md:text-[30px] font-display leading-tight">{d.title}</h3>
                <p className="mt-3 max-w-[430px] text-[15px] text-muted leading-relaxed">{d.text}</p>
                <div className="mt-6 text-xs uppercase tracking-wider text-accent">{d.detail}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="audience" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tight">
          <Eyebrow>03 / Для кого</Eyebrow>
          <h2 className="mt-4 max-w-[720px] font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.035em] leading-[1.13]">Разные профессии.<br />Общий интерес к голосу.</h2>
          <div className="mt-12 divide-y divide-rule border-y border-rule">
            {audiences.map((a) => (
              <div key={a.n} className="grid gap-3 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-10">
                <span className="text-sm text-bronze">{a.n}</span>
                <h3 className="font-display text-2xl md:text-[27px]">{a.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-ink py-20 text-page md:py-28">
        <div className="container-tight">
          <Eyebrow>04 / В работе</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.15] tracking-[-0.035em] text-page">Разработки, с которыми<br />можно познакомиться.</h2>
          <p className="mt-5 max-w-[580px] text-page/70 leading-relaxed">Мы показываем статус каждого проекта: действующие страницы, разработки и материалы, которые ещё проходят внутреннюю проверку.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {work.map((p) => (
              <article key={p.title} className="flex flex-col min-h-[340px] rounded-lg border border-page/20 bg-white/5 p-7">
                <div className="text-[10px] uppercase tracking-[0.14em] text-[#D6B793]">{p.eyebrow}</div>
                <h3 className="mt-7 text-[25px] leading-[1.2] font-display text-page">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-page/70">{p.text}</p>
                <div className="mt-auto pt-8">
                  <a href={p.href} target={p.external ? "_blank" : undefined} rel={p.external ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 text-sm font-medium text-page underline underline-offset-8 decoration-page/40 hover:decoration-page">
                    {p.action} {p.external ? <ArrowUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-page/60">PDF-материалы могут предоставляться отдельно. Цифровые тетради и собственная образовательная платформа — направления дальнейшего развития.</p>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tight grid gap-10 lg:grid-cols-2 lg:gap-24">
          <div><Eyebrow>05 / Исследовательская позиция</Eyebrow><h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.035em] leading-[1.15]">Не только обучать.<br />Проверять основания.</h2></div>
          <div className="space-y-6 text-[16px] leading-[1.75] text-muted">
            <p>Исследовательская работа ИВП включает изучение научной литературы, профессиональных запросов и вопросов, возникающих в вокальной педагогике и исполнительстве.</p>
            <p>Мы рассматриваем методы и модели как предмет анализа, а не как универсальные ответы. Описываем ограничения и не подменяем вокальную педагогику психологической терапией.</p>
            <div className="rounded-md border-l-[3px] border-bronze bg-card/50 p-5 text-sm text-ink">Страницы научных проектов и методологических материалов будут открываться по мере проверки и подготовки публикаций.</div>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-y border-rule bg-card/50 py-20 md:py-28">
        <div className="container-tight">
          <Eyebrow>06 / Люди</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.035em] leading-[1.15]">За исследованиями и разработками стоят специалисты.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-rule bg-page p-7 md:p-9">
              <div className="mb-10 text-5xl leading-none font-display text-accent/40">М.</div>
              <h3 className="text-2xl font-display">Мария Осадчая</h3>
              <p className="mt-2 text-sm uppercase tracking-wide text-bronze">Вокальный психолог · педагогический опыт</p>
              <p className="mt-5 max-w-[450px] text-[15px] leading-relaxed text-muted">Работа с тем, кто поёт: голос, эмоциональное состояние, сценическая практика и психологические аспекты вокального развития.</p>
            </article>
            <article className="rounded-lg border border-rule bg-page p-7 md:p-9">
              <div className="mb-10 text-5xl leading-none font-display text-accent/40">Д.</div>
              <h3 className="text-2xl font-display">Дмитрий Осадчий</h3>
              <p className="mt-2 text-sm uppercase tracking-wide text-bronze">Психолог · профессиональное развитие</p>
              <p className="mt-5 max-w-[450px] text-[15px] leading-relaxed text-muted">Работа с тем, кто учит петь: профессиональная идентичность, реализация, опыт педагога и развитие его практики.</p>
            </article>
          </div>
          <p className="mt-5 text-xs text-muted">Фотографии и окончательные профессиональные биографии добавляются после согласования.</p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tight">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow>07 / Продолжим знакомство</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.06] tracking-[-0.045em]">ИВП — проект,<br />который развивается.</h2>
              <p className="mt-6 max-w-[590px] text-[17px] leading-relaxed text-muted">Мы готовим новые материалы, изучаем запросы специалистов и развиваем образовательные форматы. Первое знакомство можно начать с существующего проекта «Новая роль».</p>
              <a href={roleUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-md bg-accent px-6 py-4 font-medium text-white hover:bg-accent-hover">
                Открыть «Новую роль» <MoveUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-lg border border-rule bg-card/60 p-7">
              <Compass className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-xl font-display">Сайт в развитии</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">Это предварительная версия публичного представительства ИВП. Дополнительные программы, публикации и способы связи будут добавлены после проверки.</p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-bronze"><BookOpenText className="h-4 w-4" /> Институт вокальной психологии</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
