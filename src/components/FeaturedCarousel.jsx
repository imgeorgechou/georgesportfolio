import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Star } from 'lucide-react'
import { categories, projects } from '../data/projects'

const AUTOPLAY_MS = 7000

export default function FeaturedCarousel() {
  const featured = useMemo(() => {
    const picked = projects.filter((p) => p.featured)
    return picked.length >= 2 ? picked : projects.slice(0, 4)
  }, [])

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const prefersReduced = useReducedMotion()

  const total = featured.length
  const current = featured[index]

  const go = useCallback(
    (next) => {
      const n = (next + total) % total
      setDirection(n === (index + 1) % total ? 1 : -1)
      setIndex(n)
      setProgress(0)
    },
    [index, total]
  )

  const prev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => (i - 1 + total) % total)
    setProgress(0)
  }, [total])

  const next = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % total)
    setProgress(0)
  }, [total])

  // Autoplay + progress
  const rafRef = useRef(0)
  const startRef = useRef(0)
  useEffect(() => {
    if (paused || prefersReduced || total <= 1) return
    startRef.current = performance.now()
    const tick = (now) => {
      const elapsed = now - startRef.current
      const pct = Math.min(elapsed / AUTOPLAY_MS, 1)
      setProgress(pct)
      if (pct >= 1) {
        next()
      } else {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [paused, prefersReduced, next, total, index])

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  if (!current) return null

  const catLabel =
    categories.find((c) => c.id === current.cat)?.label ?? current.cat

  return (
    <section
      id="featured"
      aria-roledescription="carousel"
      aria-label="精選作品"
      className="relative bg-paper-warm/50 border-y border-rule overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* soft grid bg */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(10,10,10,0.10) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 lg:mb-12">
          <div className="flex items-center gap-3">
            <Star
              className="w-4 h-4 text-g-yellow"
              strokeWidth={2}
              fill="currentColor"
            />
            <span className="marker-num">FEATURED · 精選作品</span>
            <span className="hidden sm:block w-20 h-px bg-rule" />
          </div>
          <div className="flex items-center gap-3">
            <span className="marker-num text-ink">
              {String(index + 1).padStart(2, '0')}
              <span className="text-ink-mute"> / {String(total).padStart(2, '0')}</span>
            </span>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? '開始自動播放' : '暫停自動播放'}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-rule bg-paper text-ink-soft hover:text-ink hover:border-ink/70 transition-colors cursor-pointer"
            >
              {paused ? (
                <Play className="w-3.5 h-3.5" strokeWidth={2} fill="currentColor" />
              ) : (
                <Pause className="w-3.5 h-3.5" strokeWidth={2} fill="currentColor" />
              )}
            </button>
          </div>
        </div>

        {/* Slide */}
        <div className="relative min-h-[440px] sm:min-h-[460px] lg:min-h-[520px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch"
            >
              {/* Cover */}
              <Link
                to={`/project/${current.id}`}
                className="group col-span-12 lg:col-span-7 relative block rounded-2xl overflow-hidden border border-rule bg-paper-warm cursor-pointer"
              >
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
                  <img
                    src={current.cover}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div
                    className={`absolute left-0 top-0 h-1.5 w-full bg-${current.accent}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-ink/5 to-transparent" />

                  {/* bottom meta overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="marker-num text-paper/80 tracking-[0.2em]">
                      {current.year} · {catLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-paper bg-ink/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      查看作品
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6 lg:gap-8 lg:py-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-${current.accent}/10 text-${current.accent}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-${current.accent}`}
                      />
                      {current.tag}
                    </span>
                    <span className="marker-num">{current.role}</span>
                  </div>

                  <h3 className="font-serif font-black leading-[1.1] tracking-tightest text-balance text-[1.75rem] sm:text-4xl lg:text-5xl">
                    <Link
                      to={`/project/${current.id}`}
                      className={`bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-[length:0%_2px] bg-[position:0_100%] hover:bg-[length:100%_2px] transition-[background-size] duration-500 cursor-pointer`}
                    >
                      {current.title}
                    </Link>
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-ink-soft leading-relaxed text-pretty line-clamp-3 sm:line-clamp-none">
                    {current.summary ?? current.problem}
                  </p>

                  {/* key impact */}
                  {current.impact?.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-2">
                      {current.impact.slice(0, 2).map((it, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-ink"
                        >
                          <span
                            className={`mt-[9px] w-1.5 h-1.5 rounded-full shrink-0 bg-${current.accent}`}
                          />
                          <span className="leading-snug">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Stack chips + CTA */}
                <div className="flex flex-wrap items-center gap-2">
                  {current.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-1 rounded-md bg-paper text-ink-soft border border-rule"
                    >
                      {s}
                    </span>
                  ))}
                  {current.stack.length > 4 && (
                    <span className="marker-num">+{current.stack.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 lg:mt-14 flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="上一個精選作品"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-rule bg-paper hover:bg-ink hover:text-paper hover:border-ink transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="下一個精選作品"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-rule bg-paper hover:bg-ink hover:text-paper hover:border-ink transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex-1 flex items-center gap-1.5 sm:gap-2">
            {featured.map((p, i) => {
              const isActive = i === index
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`切換到第 ${i + 1} 個作品：${p.title}`}
                  aria-current={isActive}
                  className="group relative flex-1 h-1 rounded-full bg-rule overflow-hidden cursor-pointer"
                >
                  <span
                    className={`absolute inset-y-0 left-0 rounded-full bg-${p.accent} transition-[width] duration-150 ease-linear`}
                    style={{
                      width: isActive
                        ? `${progress * 100}%`
                        : i < index
                        ? '100%'
                        : '0%',
                      opacity: isActive ? 1 : i < index ? 0.3 : 0,
                    }}
                  />
                  <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-2 group-hover:ring-ink/15 transition" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
}
