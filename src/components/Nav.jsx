import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/',              label: '作品集', num: '01', exact: true  },
  { to: '/about',         label: '關於我', num: '02', exact: false },
  { to: '/about#contact', label: '聯絡',   num: '03', exact: false },
]

const dotColors = ['#1A73E8', '#EA4335', '#F9AB00', '#1E8E3E']

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = ({ to, exact }) => {
    const base = to.split('#')[0]
    return exact ? pathname === base : pathname === base
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-paper/85 border-b border-rule' : 'bg-paper'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
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
          <span className="marker-num hidden sm:inline ml-2">GEORGE · 久居</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((it, i) => (
            <Link
              key={it.to}
              to={it.to}
              className="relative px-4 py-2 text-sm cursor-pointer group"
            >
              <span className="marker-num mr-2 opacity-60">{it.num}</span>
              <span
                className={`transition-colors duration-300 ${
                  isActive(it) ? 'text-ink' : 'text-ink-soft group-hover:text-ink'
                }`}
              >
                {it.label}
              </span>
              {isActive(it) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                  style={{ background: dotColors[i] }}
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/about#contact"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 rounded-full text-sm hover:bg-g-blue transition-colors duration-300 cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-g-green animate-pulse" />
          開啟對話
        </Link>

        {/* Mobile shortcut */}
        <Link
          to="/about"
          className="md:hidden text-sm font-medium cursor-pointer hover-underline"
        >
          關於我 →
        </Link>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-g-blue via-g-yellow to-g-red"
      />
    </motion.header>
  )
}
