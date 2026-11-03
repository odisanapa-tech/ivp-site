import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpenText, Compass, FlaskConical, GraduationCap, Layers3, MoveUpRight, UsersRound } from "lucide-react";

const roleUrl = "https://pro.vocalpsy-institute.ru/novaya-rol/";

const directions = [
  { n: "01", icon: GraduationCap, title: "Образование", text: "Практикумы, образовательные программы и материалы для специалистов, работающих с голосом и людьми.", detail: "Учиться и применять" },
  { n: "02", icon: FlaskConical, title: "Исследования", text: "Изучение психологических аспектов вокального обучения, сценического опыта и профессионального развития.", detail: "Исследовать и проверять" },
  { n: "03", icon: Layers3, title: "Практика и инструменты", text: "Рабочие тетради, методические материалы, профессиональные навигаторы и цифровые решения.", detail: "Использовать в работе" },
  { n: "04", icon: UsersRound, title: "Профессиональный диалог", text: "Обмен опытом между вокальными педагогами, психологами, артистами и образовательными организациями.", detail: "Встречаться и сотрудничать" },
];

const audiences = [
  { n: "01", title: "Ученик не занимается дома", text: "На уроках хочет результата, но самостоятельно почти ничего не делает. Как говорить об этом и где граница ответственности педагога?" },
  { n: "02", title: "На сцене все меняется", text: "На занятии звучит свободно, а перед зрителями зажимается или боится ошибиться. Как различать вокальную задачу и переживание?" },
  { n: "03", title: "Родители ждут другого результата", text: "Педагог, ученик и родитель могут по-разному понимать цель занятий. Как не потерять контакт и договориться о реальных ожиданиях?" },
];

const work = [
  { eyebrow: "ДЕЙСТВУЮЩАЯ СТРАНИЦА", title: "Новая профессиональная роль", text: "Когда хочется выйти за рамки обычных уроков и понять, что еще можно делать со своим опытом. Отдельная страница проекта для педагогов.", href: roleUrl, action: "Посмотреть проект", external: true },
  { eyebrow: "PDF-КОМПЛЕКТ · ГОТОВНОСТЬ УТОЧНЯЕТСЯ", title: "Профессиональная пересборка", text: "Опыт есть, ученики и результаты есть. Но как описать, что именно вы делаете и что в вашей работе свое? Две рабочие тетради о практике и собственном методе.", href: "#team", action: "Кто разрабатывает", external: false },
  { eyebrow: "АТЛАС · УСЛОВИЯ ПОЛУЧЕНИЯ УТОЧНЯЮТСЯ", title: "Навигатор для работы педагога", text: "Уроки с детьми, подготовка к конкурсу, взрослые ученики, онлайн. Разные форматы работы требуют разных договоренностей и критериев результата.", href: "#team", action: "Об авторах и разработках", external: false },
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
              Ученики разные.<br /><span className="text-accent">Вопросы</span><br />тоже.
            </h1>
            <p className="mt-8 max-w-[650px] text-[18px] md:text-[22px] leading-[1.6] text-ink/80">
              Ученик не занимается дома, боится сцены или зажимается. Родители ждут быстрого результата. А у самого педагога порой нет времени разобраться, что происходит. ИВП помогает рассматривать такие ситуации глубже - с уважением к вокальной профессии и ее границам.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#audience" className="inline-flex items-center gap-3 rounded-md bg-accent px-6 py-4 font-medium text-white transition-colors hover:bg-accent-hover">
                Узнать знакомые ситуации <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-3 rounded-md border border-rule bg-page/80 px-6 py-4 font-medium text-ink transition-colors hover:border-accent">
                Практические материалы <ArrowDownRight className="h-4 w-4" />
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
          <div><Eyebrow>01 / Об институте</Eyebrow><p className="mt-4 text-sm leading-relaxed text-muted">Сначала конкретный случай. Потом объяснение и инструмент.</p></div>
          <div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.14] tracking-[-0.035em]">Не каждый сложный урок решается новым упражнением.</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2 text-[16px] leading-relaxed text-muted">
              <p>Бывает, что ученик не занимается самостоятельно, отказывается от репертуара или пугается сцены. А бывает, что с учеником все понятно, но сложно договориться с родителями или объяснить ценность собственной работы.</p>
              <p>Институт вокальной психологии изучает такие ситуации и создает материалы для вокальных педагогов. Наша задача - помочь лучше понимать происходящее, действовать в пределах своей компетенции и вовремя обращаться к другим специалистам, когда это необходимо.</p>
            </div>
            <p className="mt-6 text-sm text-muted">Мы не предлагаем педагогу становиться психологом. Различаем профессиональный опыт, авторские разработки и выводы, требующие научной проверки.</p>
          </div>
        </div>
      </section>

      <section id="audience" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tight">
          <Eyebrow>02 / Ситуации из практики</Eyebrow>
          <h2 className="mt-4 max-w-[720px] font-display text-[clamp(2rem,4.5vw,3.8rem)] tracking-[-0.035em] leading-[1.13]">Знакомо по вашим<br />урокам?</h2>
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
          <Eyebrow>03 / Практические материалы</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.15] tracking-[-0.035em] text-page">Начать можно<br />с конкретной задачи.</h2>
          <p className="mt-5 max-w-[580px] text-page/70 leading-relaxed">Не все разработки уже продаются: показываем действующие проекты и отдельно отмечаем материалы, для которых еще проверяем состав PDF и условия получения.</p>
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
          <p className="mt-8 text-xs leading-relaxed text-page/60">«Я это уже делаю!» сейчас проходит проверку как печатная тетрадь. Интерактивные тетради и собственная учебная платформа - следующий этап, не условие для использования PDF.</p>
        </div>
      </section>

      <section id="directions" className="scroll-mt-24 bg-card/70 border-y border-rule py-20 md:py-28">
        <div className="container-tight">
          <Eyebrow>04 / Что делает ИВП</Eyebrow>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-[670px] font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.12] tracking-[-0.035em]">От конкретных вопросов<br />к полезным инструментам.</h2>
            <p className="max-w-[320px] text-sm leading-relaxed text-muted">Обучение, исследования и рабочие материалы нужны не сами по себе, а для решений, которые педагог сможет применять в своей работе.</p>
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

      <section id="approach" className="scroll-mt-24 py-20 md:py-28">
        <div className="container-tight grid gap-10 lg:grid-cols-2 lg:gap-24">
          <div><Eyebrow>05 / Исследовательская позиция</Eyebrow><h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.035em] leading-[1.15]">Можно ли этим<br />доверять?</h2></div>
          <div className="space-y-6 text-[16px] leading-[1.75] text-muted">
            <p>Мы изучаем научную литературу и реальные вопросы вокальных педагогов. Отдельная часть этой работы - понять, какие сложности относятся к педагогике, какие требуют психологических знаний, а где нужна помощь другого специалиста.</p>
            <p>Не каждый «зажим» имеет психологическую причину. И не каждый страх можно убрать вокальным упражнением. Мы не обещаем универсальных техник и открыто обозначаем ограничения методов.</p>
            <div className="rounded-md border-l-[3px] border-bronze bg-card/50 p-5 text-sm text-ink">Страницы научных проектов и методологических материалов будут открываться по мере проверки и подготовки публикаций.</div>
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-24 border-y border-rule bg-card/50 py-20 md:py-28">
        <div className="container-tight">
          <Eyebrow>06 / Люди</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.035em] leading-[1.15]">Два взгляда на вокальную профессию.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-rule bg-page p-7 md:p-9">
              <div className="mb-10 text-5xl leading-none font-display text-accent/40">М.</div>
              <h3 className="text-2xl font-display">Мария Осадчая</h3>
              <p className="mt-2 text-sm uppercase tracking-wide text-bronze">Вокальный психолог · педагогический опыт</p>
              <p className="mt-5 max-w-[450px] text-[15px] leading-relaxed text-muted">Работает с тем, кто поет: как состояние, опыт и отношения влияют на вокальное развитие, занятия и сцену.</p>
            </article>
            <article className="rounded-lg border border-rule bg-page p-7 md:p-9">
              <div className="mb-10 text-5xl leading-none font-display text-accent/40">Д.</div>
              <h3 className="text-2xl font-display">Дмитрий Осадчий</h3>
              <p className="mt-2 text-sm uppercase tracking-wide text-bronze">Психолог · профессиональное развитие</p>
              <p className="mt-5 max-w-[450px] text-[15px] leading-relaxed text-muted">Работает с тем, кто учит петь: как увидеть свой опыт, объяснить ценность работы и найти новые форматы профессиональной практики.</p>
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
              <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.06] tracking-[-0.045em]">Начните с вопроса,<br />который вам знаком.</h2>
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
