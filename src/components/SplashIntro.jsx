import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const dotColors = ['#1A73E8', '#EA4335', '#F9AB00', '#1E8E3E']

export default function SplashIntro() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return !sessionStorage.getItem('seen-intro')
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!visible) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const dismiss = () => {
      try { sessionStorage.setItem('seen-intro', '1') } catch {}
      setVisible(false)
    }
    const t = setTimeout(dismiss, 2200)
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') dismiss()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => {
            try { sessionStorage.setItem('seen-intro', '1') } catch {}
            setVisible(false)
          }}
          className="fixed inset-0 z-[100] bg-paper flex items-center justify-center cursor-pointer grain-overlay"
        >
          <BgShapes />

          <div className="relative flex flex-col items-center gap-8 px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-2"
            >
              {dotColors.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-4 h-4 lg:w-5 lg:h-5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </motion.div>

            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight"
              >
                周致祥 · 久居
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="marker-num mt-3"
              >
                GEORGE ZHOU · 2026 PORTFOLIO
              </motion.p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-36 lg:w-52 bg-ink origin-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2 marker-num"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-g-green animate-pulse" />
            LOADING · TAP TO SKIP
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function BgShapes() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[18%] left-[12%] w-24 h-24 lg:w-40 lg:h-40 rounded-full bg-g-blue/10 border-2 border-g-blue/25"
      />
      <motion.div
        initial={{ scale: 0, rotate: 30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[20%] right-[14%] w-16 h-16 lg:w-28 lg:h-28 bg-g-yellow/40 rounded-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-[28%] right-[18%] w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-g-red/25"
      />
    </div>
  )
}
