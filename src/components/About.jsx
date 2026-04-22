import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Plus } from "lucide-react";

const SectionNum = ({ num, label }) => (
  <div className="flex items-center gap-3 mb-10">
    <span className="marker-num">
      {num} — {label}
    </span>
    <span className="flex-1 h-px bg-rule" />
  </div>
);

const viewport = { once: true, margin: "-80px" };

const skills = [
  {
    key: "language",
    label: "LANGUAGE",
    zh: "語言",
    color: "g-blue",
    items: [
      { tag: "Mandarin", note: "Native" },
      { tag: "English", note: "TOEIC 870" },
    ],
  },
  {
    key: "hard",
    label: "HARD SKILLS",
    zh: "硬實力",
    color: "g-yellow",
    items: [
      { tag: "Python", icon: "https://cdn.simpleicons.org/python" },
      { tag: "SQL", icon: "https://cdn.simpleicons.org/mysql" },
      { tag: "React", icon: "https://cdn.simpleicons.org/react" },
      { tag: "Excel", icon: "/logos/excel.svg" },
      { tag: "M365Copilot", icon: "/logos/m365copilot.png" },
      { tag: "GPTEnterprise", icon: "/logos/gpt.png" },
      { tag: "ClaudeCode", icon: "https://cdn.simpleicons.org/claude" },
      { tag: "Tableau", icon: "/logos/tableau.svg" },
      { tag: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { tag: "Canva", icon: "/logos/canva.svg" },
      {
        tag: "GoogleAppsScript",
        icon: "https://cdn.simpleicons.org/googleappsscript",
      },
      { tag: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    ],
  },
  {
    key: "soft",
    label: "SOFT SKILLS",
    zh: "軟實力",
    color: "g-red",
    items: [
      { tag: "AgileMethodology" },
      { tag: "StakeholderManagement", note: "Cross-functional" },
      { tag: "UserResearch" },
      { tag: "TechnicalDocumentation", note: "PRD / BRD" },
    ],
  },
  {
    key: "honor",
    label: "CERTIFICATIONS & HONORS",
    zh: "認證與榮譽",
    color: "g-green",
    items: [
      { tag: "AWS_AI_Practitioner" },
      { tag: "NSTC_Scholarship", note: "國科會大專生研究" },
      { tag: "GoldAward", note: "Educational Game Design · 1st" },
    ],
  },
];

const education = [
  {
    when: "2026 · 秋 — 2028",
    where: "國立清華大學 服務科學研究所",
    what: "準碩士生",
    note: "以服務設計 × 商業分析 × 資料科學為研究主軸，延伸 PM 決策框架。",
    color: "g-blue",
    tag: "即將入學",
    logo: "/nthuLogo.png",
  },
  {
    when: "2022 — 2026",
    where: "國立中正大學 資訊管理學系",
    what: "學士（GPA 4.11 / 4.3，系排 6 / 50）",
    note: "系統分析與設計、資料庫、商業資料分析、資料結構 均 A+。",
    color: "ink",
    logo: "/ccuLogo.png",
  },
];

const experience = [
  {
    when: "2026 · 02 — 至今",
    where: "國泰金控 數數發中心 Data & AI 部",
    what: "AI 賦能 PM 實習生",
    note: "主導 M365 / GitHub Copilot 與 OpenAI 集團導入，用戶旅程 × 合規 × KPI 三軸管理。",
    color: "g-red",
    tag: "現職",
  },
  {
    when: "2025 · 07 — 08",
    where: "國泰世華商業銀行 核心資訊部",
    what: "資訊專才實習生",
    note: "外幣交易系統需求訪談與全端介面開發、SQL / COBOL 維運支援。",
    color: "g-yellow",
  },
  {
    when: "2024 · 08 — 至今",
    where: "猿創力程式設計學校",
    what: "程式講師",
    note: "指導 50+ 名學員完成 Python / Scratch / Roblox 專案，訓練教學敘事力。",
    color: "g-green",
  },
];

const featuredHonor = {
  year: "2026",
  kind: "GOLD AWARD",
  category: "Educational Game Design",
  categoryZh: "2026教育遊戲設計大賞",
  tier: "1st Place",
  tierZh: "金獎",
};

const honorLedger = [
  {
    kind: "SCHOLARSHIP",
    kindZh: "研究補助",
    title: "國科會大專生研究計畫",
    subtitle: "114-2813-C-194-045-H",
    tier: "核定",
    accent: "g-blue",
  },
  {
    kind: "HACKATHON",
    kindZh: "黑客松",
    title: "桃園市有 AI 哈客松",
    subtitle: "技術實作組 · 全國前 8 名",
    tier: "優選",
    accent: "g-red",
  },
  {
    kind: "COMPETITION",
    kindZh: "競賽",
    title: "中正資管電商競賽",
    subtitle: "社群經營組",
    tier: "冠軍",
    accent: "g-red",
  },
  {
    kind: "COMPETITION",
    kindZh: "競賽",
    title: "中正資管 SEO 競賽",
    subtitle: "關鍵字策略",
    tier: "季軍",
    accent: "g-green",
  },
  {
    kind: "CHALLENGE",
    kindZh: "挑戰",
    title: "六角學院 30 天工程師體驗營",
    subtitle: "100% 挑戰完成",
    tier: "鐵人完賽",
    accent: "g-blue",
  },
  {
    kind: "CERTIFICATION",
    kindZh: "認證",
    title: "TOEIC 金色證書",
    subtitle: "870 / 990",
    tier: "金色",
    accent: "g-yellow",
  },
];

export default function About() {
  const [showAllHonors, setShowAllHonors] = useState(false);

  return (
    <section id="about" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionNum num="02" label="ABOUT · 關於我" />

        {/* Intro */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-24 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-4 relative"
          >
            <div className="relative w-[68%] sm:w-1/2 lg:w-full max-w-[360px] mx-auto lg:mx-0">
              {/* Decorative accents */}
              <span
                aria-hidden
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-g-yellow/30 -z-10"
              />
              <span
                aria-hidden
                className="absolute -bottom-5 -right-5 w-24 h-24 rounded-2xl bg-g-blue/15 -z-10"
              />
              <span
                aria-hidden
                className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-g-red"
              />

              <div className="relative aspect-square rounded-[28px] overflow-hidden border border-rule bg-paper-warm shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_48px_-16px_rgba(0,0,0,0.18)]">
                <img
                  src="/projects/hero-avatar.PNG"
                  alt="周致祥 George Zhou"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-3 left-3 sm:left-6 px-3 py-1.5 rounded-full bg-ink text-paper text-[11px] font-medium tracking-wide flex items-center gap-2 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-g-green animate-pulse" />
                George Zhou · 久居 · 周致祥
              </div>
            </div>
          </motion.div>

          {/* Headline + paragraph */}
          <div className="col-span-12 lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif font-black tracking-tightest text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-balance mb-8"
            >
              用{" "}
              <span className="font-display italic font-semibold text-g-blue">
                服務設計
              </span>{" "}
              與{" "}
              <span className="font-display italic font-semibold text-g-red">
                商業分析
              </span>
              <br />做{" "}
              <span className="font-display italic font-semibold">
                產品決策
              </span>{" "}
              的思考者。
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-ink-soft leading-[1.85] text-pretty max-w-[62ch]"
            >
              我是周致祥（George Zhou），職場上大家叫我{" "}
              <b className="text-ink">「久居」</b>。正從中正資管（GPA{" "}
              <b className="text-ink">4.11 / 4.3</b>，系排 6 /
              50）走向清大服科所，目標是成為
              <b className="text-ink">
                {" "}
                同時懂服務設計與商業分析的 Product Manager
              </b>
              。 目前在國泰金控擔任 <b className="text-ink">AI 賦能 PM</b>──主導
              M365 Copilot、GitHub Copilot 與 OpenAI 的集團級導入，把 AI
              工具翻譯成 <b className="text-ink">13,000 名員工</b>{" "}
              的日常生產力， 讓 AI 轉型被看見、被使用、也被量化。
            </motion.p>
          </div>
        </div>

        {/* Skill matrix — hashtag style */}
        <div className="mb-24">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="font-serif font-bold text-2xl lg:text-3xl">
              能力矩陣
            </h3>
            <span className="marker-num">— SKILL MATRIX</span>
          </div>
          <div className="rounded-2xl border border-rule bg-paper-warm/40 overflow-hidden divide-y divide-rule">
            {skills.map((group, i) => (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-12 gap-4 lg:gap-8 p-6 lg:p-8"
              >
                <div className="col-span-12 lg:col-span-3 flex lg:flex-col lg:justify-start items-center lg:items-start gap-3 lg:gap-2">
                  <span
                    className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-${group.color}/10 text-${group.color} text-[11px] font-mono font-medium tracking-wider`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-${group.color}`}
                    />
                    {group.label}
                  </span>
                  <div className="flex items-baseline gap-2 lg:mt-1">
                    <span className="font-serif font-bold text-lg lg:text-xl">
                      {group.zh}
                    </span>
                    <span className="marker-num text-ink-mute">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-9 flex flex-wrap gap-2">
                  {group.items.map(({ tag, note, icon }, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.08 + idx * 0.03,
                      }}
                      className={`group/tag inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-full bg-paper border border-rule text-ink-soft hover:border-${group.color} hover:text-${group.color} hover:bg-${group.color}/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
                    >
                      {icon ? (
                        <img
                          src={icon}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="w-3.5 h-3.5 object-contain"
                        />
                      ) : (
                        <span className={`text-${group.color} font-semibold`}>
                          #
                        </span>
                      )}
                      <span>{tag}</span>
                      {note && (
                        <span className="text-ink-mute group-hover/tag:text-ink-soft transition-colors">
                          · {note}
                        </span>
                      )}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + Experience: two columns */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <TimelineColumn
            icon={GraduationCap}
            iconColor="g-blue"
            title="學歷"
            eng="EDUCATION"
            items={education}
          />
          <TimelineColumn
            icon={Briefcase}
            iconColor="g-red"
            title="經歷"
            eng="EXPERIENCE"
            items={experience}
          />
        </div>

        {/* Honors — editorial awards dossier */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <div className="flex items-baseline gap-4">
              <h3 className="font-serif font-bold text-2xl lg:text-3xl">
                榮譽事蹟
              </h3>
              <span className="marker-num text-ink-mute">
                {String(honorLedger.length + 1).padStart(2, "0")} ENTRIES
              </span>
            </div>
            <span className="marker-num">— RECOGNITION</span>
          </div>

          {/* Featured: newest / highest honor */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-5 overflow-hidden rounded-2xl bg-ink text-paper"
          >
            {/* Oversized typographic flourish */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 -bottom-20 font-serif font-black leading-none select-none text-[260px] lg:text-[360px] text-g-yellow/10"
            >
              金
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-g-yellow/10 via-transparent to-transparent"
            />

            <div className="relative grid grid-cols-12 gap-6 lg:gap-10 p-8 lg:p-12">
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                <span className="inline-flex items-center gap-2 self-start text-[10px] font-mono tracking-[0.28em] text-g-yellow">
                  <span className="w-1.5 h-1.5 rounded-full bg-g-yellow animate-pulse" />
                  LATEST · {featuredHonor.year}
                </span>
                <div className="space-y-1.5">
                  <p className="marker-num text-paper/50">CATEGORY</p>
                  <p className="font-serif italic text-paper/90 text-base lg:text-lg">
                    {featuredHonor.categoryZh}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <p className="marker-num text-paper/50">RECOGNITION</p>
                  <p className="font-serif font-bold text-g-yellow text-xl lg:text-2xl tracking-tight">
                    {featuredHonor.tier} · {featuredHonor.tierZh}
                  </p>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-8 lg:pl-10 lg:border-l lg:border-paper/15 flex flex-col justify-center">
                <p className="marker-num text-g-yellow/80 mb-3">
                  — {featuredHonor.kind}
                </p>
                <h4 className="font-serif font-black leading-[1.02] tracking-tightest text-4xl sm:text-5xl lg:text-[58px] text-balance">
                  Educational
                  <br />
                  <span className="italic font-display font-semibold text-g-yellow">
                    Game Design.
                  </span>
                </h4>
                <div className="mt-6 flex items-center gap-3 text-xs text-paper/60">
                  <span className="h-px w-8 bg-paper/40" />
                  <span className="font-mono tracking-[0.22em]">
                    FIRST PLACE / GOLD TIER
                  </span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Awards ledger — collapsed by default */}
          <AnimatePresence initial={false}>
            {showAllHonors && (
              <motion.div
                key="ledger"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="rounded-2xl border border-rule bg-paper overflow-hidden divide-y divide-rule">
                  {honorLedger.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group grid grid-cols-12 gap-3 lg:gap-6 items-center px-5 lg:px-8 py-5 hover:bg-paper-warm/60 transition-colors"
                    >
                      <div className="col-span-2 lg:col-span-1">
                        <span className="marker-num text-ink-mute">
                          {String(i + 2).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="col-span-10 lg:col-span-3">
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.22em] text-${h.accent}`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full bg-${h.accent}`}
                          />
                          {h.kind}
                        </span>
                        <span className="ml-2 text-[10px] font-mono tracking-wider text-ink-mute">
                          {h.kindZh}
                        </span>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <p className="font-serif font-bold text-base lg:text-[17px] leading-snug text-ink">
                          {h.title}
                        </p>
                        <p className="text-xs text-ink-mute mt-1">
                          {h.subtitle}
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-2 lg:justify-self-end">
                        <span
                          className={`inline-flex items-center text-xs font-serif font-bold px-3 py-1 rounded-md border border-${h.accent}/40 bg-${h.accent}/5 text-${h.accent}`}
                        >
                          {h.tier}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle */}
          <div className="mt-6 flex items-center gap-4">
            <span aria-hidden className="flex-1 h-px bg-rule" />
            <button
              type="button"
              onClick={() => setShowAllHonors((v) => !v)}
              aria-expanded={showAllHonors}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-ink bg-paper hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              <Plus
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showAllHonors ? "rotate-45" : "rotate-0"
                }`}
                strokeWidth={2.5}
              />
              <span className="font-serif font-bold text-sm">
                {showAllHonors ? "收合" : "查看全部榮譽事蹟"}
              </span>
              <span className="marker-num text-ink-mute group-hover:text-paper/60 transition-colors">
                {showAllHonors ? "COLLAPSE" : `+${honorLedger.length} MORE`}
              </span>
            </button>
            <span aria-hidden className="flex-1 h-px bg-rule" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineColumn({ icon: Icon, iconColor, title, eng, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 mb-8">
        <span
          className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${iconColor}/15`}
        >
          <Icon className={`w-5 h-5 text-${iconColor}`} strokeWidth={2} />
        </span>
        <div>
          <h3 className="font-serif font-bold text-2xl">{title}</h3>
          <span className="marker-num">— {eng}</span>
        </div>
      </div>
      <ol className="relative">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-rule"
        />
        {items.map((t, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative pl-8 pb-8 last:pb-0"
          >
            <span
              className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-paper border-2 border-${t.color} ${
                t.tag ? "ring-4 ring-" + t.color + "/15" : ""
              }`}
            />
            <p className="marker-num mb-1.5">{t.when}</p>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {t.logo && (
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-paper border border-rule overflow-hidden shrink-0">
                  <img
                    src={t.logo}
                    alt=""
                    aria-hidden
                    className="w-full h-full object-contain p-0.5"
                  />
                </span>
              )}
              <h4 className="font-serif font-bold text-lg leading-snug">
                {t.where}
              </h4>
              {t.tag && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide bg-${t.color}/15 text-${t.color}`}
                >
                  {t.tag}
                </span>
              )}
            </div>
            <p className="text-sm text-ink mb-1 font-medium">{t.what}</p>
            <p className="text-sm text-ink-soft leading-relaxed text-pretty">
              {t.note}
            </p>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}
