import { Fragment } from 'react'

const items = [
  'NOW · AI PM @ CATHAY HOLDINGS',
  '清大服科所 2026 碩士',
  'OPEN FOR 2026 NEW GRAD · AI PM',
  'BASED IN TAIPEI',
  '13,000 員工 AI 轉型實踐中',
  "LET'S BUILD SOMETHING",
]

const dotColors = ['text-g-blue', 'text-g-red', 'text-g-yellow', 'text-g-green']

export default function TopMarquee() {
  return (
    <div className="bg-ink text-paper overflow-hidden" style={{ maxWidth: '100vw' }}>
      <div className="flex animate-marquee gap-10 py-2.5 text-[12px] lg:text-[13px] font-medium tracking-[0.14em]" style={{ width: 'max-content' }}>
        {Array.from({ length: 2 }).map((_, rep) => (
          <div key={rep} className="flex items-center gap-10 shrink-0">
            {items.map((text, i) => (
              <Fragment key={i}>
                <span className={`${dotColors[i % 4]} text-[10px]`}>●</span>
                <span className="whitespace-nowrap">{text}</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
