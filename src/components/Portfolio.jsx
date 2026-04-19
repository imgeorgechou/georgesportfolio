import { useMemo, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Target, TrendingUp, Star } from 'lucide-react'
import { categories, projects } from '../data/projects'

const MotionLink = motion(Link)

const viewport = { once: true, margin: '-80px' }

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const cats = useMemo(() => {
    return categories.map((c) => ({
      ...c,
      count: c.id === 'all' ? projects.length : projects.filter((p) => p.cat === c.id).length,
    }))
  }, [])

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.cat === active)),
    [active]
  )

  return (
    <section id="portfolio" className="relative py-24 lg:py-36 bg-paper-warm/40 border-y border-rule">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="marker-num">03 — WORKS · 作品集</span>
          <span className="flex-1 h-px bg-rule" />
        </div>

        {/* Headline */}
        <div className="grid grid-cols-12 gap-8 mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-8"
          >
            <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tightest text-balance">
              每一個作品背後，
              <br />都是一個 <span className="font-display italic font-semibold text-g-red">被解決的問題</span>。
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-12 lg:col-span-4 lg:pt-4"
          >
            <p className="text-ink-soft leading-relaxed text-pretty">
              從企業級 AI 轉型、AR 文化遊戲到數據倉儲建模──橫跨 <b className="text-ink">AI、數據、網頁、行銷</b> 四條主軸。點擊分類標籤查看對應作品。
            </p>
          </motion.div>
        </div>

        {/* Filter bar */}
        <LayoutGroup>
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-rule">
            {cats.map((c) => {
              const isActive = active === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-ink text-paper border-ink'
                      : 'bg-paper text-ink-soft border-rule hover:border-ink hover:text-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill-bg"
                      className="absolute inset-0 rounded-full bg-ink -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${c.color}`} />
                    {c.label}
                    <span className={`text-[11px] font-mono ${isActive ? 'opacity-70' : 'opacity-50'}`}>
                      {String(c.count).padStart(2, '0')}
                    </span>
                  </span>
                </button>
              )
            })}
            <span className="ml-auto marker-num hidden sm:inline">
              顯示 <span className="text-ink">{String(filtered.length).padStart(2, '0')}</span> / {String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} p={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}

function ProjectCard({ p, index }) {
  return (
    <MotionLink
      to={`/project/${p.id}`}
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
        layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`group relative flex flex-col rounded-2xl bg-paper border border-rule hover:border-ink/80 transition-colors duration-300 overflow-hidden cursor-pointer ${
        p.featured ? 'xl:col-span-2' : ''
      }`}
    >
      {/* Cover image */}
      {p.cover && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-paper-warm border-b border-rule">
          <img
            src={p.cover}
            alt={p.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      {/* Accent strip */}
      <div className={`h-1 w-full bg-${p.accent}`} />

      <div className="p-6 lg:p-7 flex flex-col gap-5 h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-${p.accent}/10 text-${p.accent}`}>
              {p.featured && <Star className="w-3 h-3 fill-current" />}
              {p.tag}
            </span>
            <span className="marker-num">{p.year}</span>
          </div>
          <ArrowUpRight
            className="w-5 h-5 text-ink-mute group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
            strokeWidth={1.8}
          />
        </div>

        {/* Title */}
        <div>
          <h3 className="font-serif font-bold text-xl lg:text-2xl leading-snug text-balance mb-1.5">
            {p.title}
          </h3>
          <p className="text-xs text-ink-mute font-medium tracking-wide uppercase">{p.role}</p>
        </div>

        {/* Problem */}
        <div className="relative pl-4 border-l-2 border-rule group-hover:border-ink transition-colors duration-300">
          <div className="flex items-center gap-2 mb-1.5">
            <Target className={`w-3.5 h-3.5 text-${p.accent}`} strokeWidth={2.2} />
            <span className="marker-num">解決的問題</span>
          </div>
          <p className="text-sm text-ink-soft leading-relaxed text-pretty">{p.problem}</p>
        </div>

        {/* Impact */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className={`w-3.5 h-3.5 text-${p.accent}`} strokeWidth={2.2} />
            <span className="marker-num">量化成果</span>
          </div>
          <ul className="space-y-1.5">
            {p.impact.map((it, i) => (
              <li key={i} className="text-sm text-ink leading-snug flex items-start gap-2">
                <span className={`mt-[7px] w-1 h-1 rounded-full bg-${p.accent} shrink-0`} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-rule">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-paper-warm text-ink-soft border border-rule"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </MotionLink>
  )
}
