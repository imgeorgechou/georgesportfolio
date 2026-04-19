import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react'

const channels = [
  {
    label: 'Email',
    value: 'onion0208@gmail.com',
    href: 'mailto:onion0208@gmail.com',
    icon: Mail,
    color: 'g-red',
    prefix: '寫信',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/zhi-siang-zhou',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
    color: 'g-blue',
    prefix: '專業履歷',
  },
  {
    label: 'GitHub',
    value: 'github.com/onion0208',
    href: 'https://github.com/',
    icon: Github,
    color: 'ink',
    prefix: '開源程式碼',
  },
  {
    label: 'Phone',
    value: '+886 956 858 488',
    href: 'tel:+886956858488',
    icon: Phone,
    color: 'g-green',
    prefix: '語音通話',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-10">
          <span className="marker-num">04 — CONTACT · 聯絡</span>
          <span className="flex-1 h-px bg-rule" />
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7"
          >
            <h2 className="font-serif font-black text-5xl lg:text-[88px] leading-[0.98] tracking-tightest text-balance">
              一起把 <span className="font-display italic font-semibold text-g-blue">想法</span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">落地</span>
                <span className="absolute inset-x-0 bottom-2 h-4 bg-g-yellow/60 -z-0" />
              </span>
              。
            </h2>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl text-pretty">
              不論是 AI 轉型專案、產品敘事協作、或是想聊聊清大服科所的研究方向，
              歡迎直接來信──通常 <b className="text-ink">24 小時內</b> 回覆。
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:onion0208@gmail.com"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-4 rounded-full hover:bg-g-blue transition-colors duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4" strokeWidth={2.2} />
                <span className="font-medium">onion0208@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-ink text-ink hover:bg-ink hover:text-paper transition-colors duration-300 cursor-pointer"
              >
                回到作品集
              </a>
            </div>
          </motion.div>

          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="rounded-3xl border border-rule bg-paper-warm/40 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="font-serif text-xl font-bold">所有聯絡方式</p>
                <span className="marker-num">CHANNELS</span>
              </div>
              <ul className="divide-y divide-rule">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 py-4 cursor-pointer"
                    >
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${c.color}/10 group-hover:bg-${c.color} group-hover:text-paper transition-colors duration-300`}>
                        <c.icon className={`w-[18px] h-[18px] text-${c.color} group-hover:text-paper transition-colors duration-300`} strokeWidth={2} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="marker-num">{c.prefix} · {c.label}</p>
                        <p className="text-sm text-ink truncate">{c.value}</p>
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 text-ink-mute group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
                        strokeWidth={1.8}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 p-5 rounded-2xl border border-rule flex items-center gap-3">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-g-green opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-g-green" />
              </span>
              <p className="text-sm text-ink-soft">
                目前開放 <b className="text-ink">實習 / 產品助理</b> 與 <b className="text-ink">研究合作</b> 洽談。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
