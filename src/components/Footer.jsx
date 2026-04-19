import { Link, useLocation } from 'react-router-dom'

const dots = ['#1A73E8', '#EA4335', '#F9AB00', '#1E8E3E']

export default function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const AnchorTag = isHome ? 'a' : Link
  const toOrHref = (hash) =>
    isHome ? { href: `#${hash}` } : { to: `/#${hash}` }

  return (
    <footer className="border-t border-rule bg-paper">
      {/* Marquee ribbon */}
      <div className="overflow-hidden border-b border-rule py-4">
        <div className="flex w-max animate-marquee gap-10 font-serif text-3xl lg:text-5xl font-black tracking-tightest">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span>AI TRANSITION</span>
              <span className="text-g-blue">●</span>
              <span className="italic font-display text-ink-mute">george zhou · 久居</span>
              <span className="text-g-red">●</span>
              <span>PRODUCT · SERVICE · DATA</span>
              <span className="text-g-yellow">●</span>
              <span className="italic font-display text-ink-mute">2026 portfolio</span>
              <span className="text-g-green">●</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="grid grid-cols-2 gap-[3px]">
            {dots.map((c, i) => (
              <span key={i} className="w-[7px] h-[7px] rounded-full" style={{ background: c }} />
            ))}
          </span>
          <div>
            <p className="font-display font-semibold">周致祥 George Zhou · 久居</p>
            <p className="marker-num">AI TRANSITION PRODUCT MANAGER</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <AnchorTag {...toOrHref('home')} className="hover:text-ink transition-colors cursor-pointer">首頁</AnchorTag>
          <AnchorTag {...toOrHref('about')} className="hover:text-ink transition-colors cursor-pointer">關於我</AnchorTag>
          <AnchorTag {...toOrHref('portfolio')} className="hover:text-ink transition-colors cursor-pointer">作品集</AnchorTag>
          <AnchorTag {...toOrHref('contact')} className="hover:text-ink transition-colors cursor-pointer">聯絡我</AnchorTag>
        </div>

        <p className="marker-num">
          © {new Date().getFullYear()} · DESIGNED &amp; BUILT IN TAIPEI
        </p>
      </div>
    </footer>
  )
}
