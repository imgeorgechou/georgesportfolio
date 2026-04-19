import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const items = [
  { id: 'home', label: '首頁', num: '01' },
  { id: 'about', label: '關於我', num: '02' },
  { id: 'portfolio', label: '作品集', num: '03' },
  { id: 'contact', label: '聯絡', num: '04' },
]

const dotColors = ['#1A73E8', '#EA4335', '#F9AB00', '#1E8E3E']

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (!isHome) return
      const y = window.scrollY + window.innerHeight * 0.35
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (!el) continue
        const top = el.offsetTop
        const bot = top + el.offsetHeight
        if (y >= top && y < bot) {
          setActive(it.id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const AnchorTag = isHome ? 'a' : Link
  const toOrHref = (hash) =>
    isHome ? { href: `#${hash}` } : { to: `/#${hash}` }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'backdrop-blur-md bg-paper/80 border-b border-rule'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="grid grid-cols-2 gap-[3px]">
            {dotColors.map((c, i) => (
              <span
                key={i}
                className="w-[7px] h-[7px] rounded-full transition-transform duration-300 group-hover:scale-125"
                style={{ background: c }}
              />
            ))}
          </span>
          <span className="font-display text-[17px] font-semibold tracking-tight">
            周致祥
          </span>
          <span className="marker-num hidden sm:inline ml-2">
            GEORGE · 久居
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it, i) => (
            <AnchorTag
              key={it.id}
              {...toOrHref(it.id)}
              className="relative px-4 py-2 text-sm cursor-pointer group"
            >
              <span className="marker-num mr-2 opacity-60">{it.num}</span>
              <span
                className={`transition-colors duration-300 ${
                  isHome && active === it.id
                    ? 'text-ink'
                    : 'text-ink-soft group-hover:text-ink'
                }`}
              >
                {it.label}
              </span>
              {isHome && active === it.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                  style={{ background: dotColors[i] }}
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
            </AnchorTag>
          ))}
        </nav>

        <AnchorTag
          {...toOrHref('contact')}
          className="hidden md:inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 rounded-full text-sm hover:bg-g-blue transition-colors duration-300 cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-g-green animate-pulse" />
          開啟對話
        </AnchorTag>

        <AnchorTag
          {...toOrHref('portfolio')}
          className="md:hidden text-sm font-medium cursor-pointer hover-underline"
        >
          作品集 →
        </AnchorTag>
      </div>
    </motion.header>
  )
}
