import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Target,
  TrendingUp,
  Sparkles,
  Image as ImageIcon,
  Link as LinkIcon,
} from 'lucide-react'
import { projects, categories } from '../data/projects'
import Nav from '../components/Nav'
import TopMarquee from '../components/TopMarquee'
import Footer from '../components/Footer'

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ProjectDetail() {
  const { id } = useParams()

  const idx = projects.findIndex((p) => p.id === id)
  const p = idx >= 0 ? projects[idx] : null

  const prev = useMemo(
    () => (idx > 0 ? projects[idx - 1] : projects[projects.length - 1]),
    [idx]
  )
  const next = useMemo(
    () => (idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : projects[0]),
    [idx]
  )

  if (!p) return <Navigate to="/" replace />

  const catLabel = categories.find((c) => c.id === p.cat)?.label ?? p.cat

  return (
    <>
      <TopMarquee />
      <Nav />
      <main className="pt-8 sm:pt-10 lg:pt-14 overflow-x-hidden">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm"
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.8} />
              返回作品集
            </Link>
            <span className="text-ink-mute">/</span>
            <span className={`marker-num text-${p.accent}`}>{catLabel}</span>
            <span className="text-ink-mute">/</span>
            <span className="marker-num">{p.year}</span>
          </motion.div>
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 pt-8 sm:pt-10 lg:pt-14 pb-10 lg:pb-14">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="col-span-12 lg:col-span-8 min-w-0"
            >
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-${p.accent}/10 text-${p.accent}`}
                >
                  {p.tag}
                </span>
                <span className="marker-num">{p.role}</span>
              </div>
              <h1 className="font-serif font-black text-[2rem] leading-[1.1] sm:text-5xl sm:leading-[1.05] lg:text-6xl tracking-tightest text-balance break-words overflow-hidden">
                {p.title}
              </h1>
              {p.summary && (
                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-ink-soft leading-relaxed text-pretty max-w-2xl break-words">
                  {p.summary}
                </p>
              )}
            </motion.div>

            <motion.aside
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="col-span-12 lg:col-span-4 min-w-0"
            >
              <div className="rounded-2xl border border-rule bg-paper p-5 sm:p-6 lg:p-7">
                <MetaRow label="年份" value={p.year} />
                <MetaRow label="類別" value={catLabel} />
                <MetaRow label="角色" value={p.role} />
                {p.links && p.links.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-rule">
                    <p className="marker-num mb-3">相關連結</p>
                    <div className="flex flex-col gap-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group inline-flex items-center justify-between gap-2 text-sm text-ink-soft hover:text-ink transition-colors cursor-pointer"
                        >
                          <span className="inline-flex items-center gap-2">
                            <LinkIcon className="w-3.5 h-3.5" strokeWidth={1.8} />
                            {l.label}
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 text-ink-mute group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                            strokeWidth={1.8}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>
          </div>
        </section>

        {/* Cover image */}
        {p.cover && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-rule bg-paper-warm">
              <img
                src={p.cover}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className={`absolute left-0 top-0 h-1 w-full bg-${p.accent}`} />
            </div>
          </motion.div>
        )}

        {/* Body */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-24">
          <div className="grid grid-cols-12 gap-10 lg:gap-16">
            {/* Left: narrative */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-12 sm:gap-14 lg:gap-20 min-w-0 overflow-hidden">
              {/* Problem */}
              <Block
                accent={p.accent}
                icon={<Target className="w-4 h-4" strokeWidth={2.2} />}
                label="解決的問題"
                title="為什麼做這個專案"
              >
                <p className="text-ink-soft leading-relaxed text-pretty text-lg break-words">
                  {p.problem}
                </p>
                {p.background && (
                  <p className="mt-4 text-ink-soft leading-relaxed text-pretty break-words">
                    {p.background}
                  </p>
                )}
              </Block>

              {/* Approach */}
              {p.approach && p.approach.length > 0 && (
                <Block
                  accent={p.accent}
                  icon={<Sparkles className="w-4 h-4" strokeWidth={2.2} />}
                  label="解題思路"
                  title="我是怎麼做的"
                >
                  <ol className="flex flex-col gap-6 pl-1">
                    {p.approach.map((a, i) => (
                      <li
                        key={i}
                        className="relative pl-7 sm:pl-10 border-l-2 border-rule"
                      >
                        <span
                          className={`absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-paper border border-rule flex items-center justify-center text-[10px] font-mono text-${p.accent}`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {a.title && (
                          <h4 className="font-serif text-lg font-semibold mb-1.5 break-words">
                            {a.title}
                          </h4>
                        )}
                        <p className="text-ink-soft leading-relaxed text-pretty break-words">
                          {a.body}
                        </p>
                      </li>
                    ))}
                  </ol>
                </Block>
              )}

              {/* Impact */}
              <Block
                accent={p.accent}
                icon={<TrendingUp className="w-4 h-4" strokeWidth={2.2} />}
                label="量化成果"
                title="最後帶來什麼改變"
              >
                <ul className="flex flex-col gap-3">
                  {p.impact.map((it, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-ink text-lg leading-snug min-w-0"
                    >
                      <span
                        className={`mt-[11px] w-1.5 h-1.5 rounded-full bg-${p.accent} shrink-0`}
                      />
                      <span className="break-words min-w-0">{it}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              {/* Outcome */}
              {p.outcome && (
                <Block
                  accent={p.accent}
                  icon={<Sparkles className="w-4 h-4" strokeWidth={2.2} />}
                  label="反思"
                  title="我從中學到什麼"
                >
                  <p className="text-ink-soft leading-relaxed text-pretty text-lg break-words">
                    {p.outcome}
                  </p>
                </Block>
              )}

              {/* Custom sections */}
              {p.sections &&
                p.sections.map((s, i) => (
                  <Block
                    key={i}
                    accent={p.accent}
                    label={`延伸 ${String(i + 1).padStart(2, '0')}`}
                    title={s.heading}
                  >
                    <p className="text-ink-soft leading-relaxed text-pretty whitespace-pre-line break-words">
                      {s.body}
                    </p>
                  </Block>
                ))}
            </div>

            {/* Right: sticky stack */}
            <aside className="col-span-12 lg:col-span-4 min-w-0">
              <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                <div>
                  <p className="marker-num mb-3">使用技術</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2 py-1 rounded-md bg-paper-warm text-ink-soft border border-rule"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-rule pt-6">
                  <p className="marker-num mb-3">一句話總結</p>
                  <p className="font-serif text-xl leading-snug text-balance">
                    {p.tag}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-paper-warm/40 border-y border-rule">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="marker-num">GALLERY · 作品畫面</span>
              <span className="flex-1 h-px bg-rule" />
            </div>
            {p.gallery && p.gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {p.gallery.map((g, i) => (
                  <figure
                    key={i}
                    className="group rounded-2xl overflow-hidden bg-paper border border-rule hover:border-ink/80 transition-colors"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={g.src}
                        alt={g.caption ?? `${p.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                    {g.caption && (
                      <figcaption className="px-5 py-4 text-sm text-ink-soft border-t border-rule">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-rule bg-paper p-12 lg:p-16 flex flex-col items-center justify-center gap-3 text-center">
                <ImageIcon
                  className="w-10 h-10 text-ink-mute"
                  strokeWidth={1.4}
                />
                <p className="font-serif text-xl">畫面準備中</p>
                <p className="text-sm text-ink-soft max-w-md">
                  這個作品的截圖、錄影與補充素材正在整理中，近期會補齊。
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Prev / Next */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            <ProjectNav direction="prev" p={prev} />
            <ProjectNav direction="next" p={next} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function MetaRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 first:pt-0 last:pb-0 border-b border-rule last:border-b-0">
      <span className="marker-num">{label}</span>
      <span className="text-sm text-ink text-right">{value}</span>
    </div>
  )
}

function Block({ accent, icon, label, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className={`text-${accent}`}>{icon}</span>}
        <span className="marker-num">{label}</span>
      </div>
      {title && (
        <h3 className="font-serif text-2xl lg:text-3xl font-bold leading-snug mb-5 text-balance break-words">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

function ProjectNav({ direction, p }) {
  const isPrev = direction === 'prev'
  return (
    <Link
      to={`/project/${p.id}`}
      className={`group relative flex flex-col gap-2 rounded-2xl border border-rule bg-paper p-6 lg:p-7 hover:border-ink/80 transition-colors cursor-pointer ${
        isPrev ? 'md:text-left' : 'md:text-right'
      }`}
    >
      <span
        className={`marker-num flex items-center gap-1.5 ${
          isPrev ? '' : 'md:justify-end'
        }`}
      >
        {isPrev ? (
          <>
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.8} />
            上一個作品
          </>
        ) : (
          <>
            下一個作品
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.8} />
          </>
        )}
      </span>
      <h4 className="font-serif font-bold text-lg lg:text-xl leading-snug text-balance group-hover:text-g-blue transition-colors">
        {p.title}
      </h4>
      <span className="text-xs text-ink-mute uppercase tracking-wide">
        {p.role}
      </span>
    </Link>
  )
}
