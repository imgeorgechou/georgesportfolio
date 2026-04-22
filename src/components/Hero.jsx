import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={ref}
      id="home"
      className="relative pt-10 pb-24 lg:pt-16 lg:pb-32 overflow-hidden"
    >
      <FloatingShapes progress={scrollYProgress} />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Top meta bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex items-center justify-between mb-10 lg:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="marker-num">01 — HOME</span>
            <span className="hidden sm:block w-12 h-px bg-ink/30" />
            <span className="hidden sm:inline marker-num">2026 · SPRING</span>
          </div>
          <span className="marker-num hidden md:inline">PORTFOLIO / GEORGE ZHOU</span>
        </motion.div>

        {/* Giant headline */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-paper-warm border border-rule">
                <Sparkles
                  className="w-3.5 h-3.5 text-g-yellow"
                  strokeWidth={2.5}
                />
                AI 賦能 PM @ 國泰金控
              </span>
              <span className="marker-num hidden sm:inline">
                清大服科所 2026
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="font-serif font-bold text-ink leading-[1.05] tracking-tight text-balance text-[12vw] sm:text-[9vw] lg:text-[6.8vw] xl:text-[104px]"
            >
              用
              <span className="relative inline-block mx-1">
                <span className="relative z-10">服務設計</span>
                <span className="absolute inset-x-0 bottom-1 h-[18%] bg-g-blue/30 rounded-sm -z-0" />
              </span>
              與商業分析
              <br />
              推動
              <span className="relative inline-block mx-1">
                <span className="relative z-10">AI&nbsp;Transition</span>
                <span className="absolute inset-x-0 bottom-1 h-[18%] bg-g-green/30 rounded-sm -z-0" />
              </span>
              的
              <br />
              Product Manager
              <span className="inline-block w-2.5 h-2.5 ml-2 mb-2 align-baseline bg-g-red rounded-sm" />
            </motion.h1>
          </div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="col-span-12 lg:col-span-3 lg:pb-4"
          >
            <div className="border-l-2 border-ink pl-4 lg:pl-6">
              <p className="marker-num mb-2">現在式</p>
              <p className="text-sm text-ink-soft leading-relaxed text-pretty">
                在國泰金控以 PM 角色推動{" "}
                <span className="text-ink font-semibold">13,000 名員工</span> 的
                AI 轉型──從
                <span className="text-ink font-semibold"> 服務旅程 </span>梳理、
                <span className="text-ink font-semibold">商業指標 </span>
                設計，到合規落地的全週期營運。
              </p>
            </div>
          </motion.aside>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={6}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-rule border border-rule rounded-2xl overflow-hidden"
        >
          <Stat k="13,000+" label="員工 AI 啟動" color="g-blue" />
          <Stat k="600+" label="Copilot 席次" color="g-red" />
          <Stat k="4.11/4.3" label="GPA 中正資管" color="g-yellow" />
          <Stat k="80K+" label="社群流量" color="g-green" />
        </motion.div>

        {/* Scroll hint */}
        <div className="mt-14 flex items-center justify-between">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 cursor-pointer"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-ink/30 group-hover:border-ink group-hover:bg-ink group-hover:text-paper transition-all duration-300">
              <ArrowDownRight className="w-5 h-5" strokeWidth={1.8} />
            </span>
            <span className="text-sm hover-underline">往下一段：關於我</span>
          </a>
          <span className="marker-num hidden md:inline">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-g-green mr-2 animate-pulse align-middle" />
            ONLINE · ACCEPTING OPPORTUNITIES
          </span>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, label, color }) {
  return (
    <div className="bg-paper p-6 lg:p-8 flex flex-col gap-1 group cursor-default">
      <span
        className={`font-display italic font-semibold text-4xl lg:text-5xl leading-none text-${color} tracking-tight`}
      >
        {k}
      </span>
      <span className="text-xs text-ink-soft tracking-wide mt-2">{label}</span>
    </div>
  );
}

function FloatingShapes({ progress }) {
  const yBlue = useTransform(progress, [0, 1], [0, -140]);
  const yYellow = useTransform(progress, [0, 1], [0, -220]);
  const yRed = useTransform(progress, [0, 1], [0, -80]);
  const yKanji = useTransform(progress, [0, 1], [0, 180]);
  const rotateYellow = useTransform(progress, [0, 1], [0, 24]);
  const opacityShapes = useTransform(progress, [0, 0.7, 1], [1, 0.6, 0]);

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ y: yBlue, opacity: opacityShapes }}
        className="absolute top-[12%] right-[6%] w-28 h-28 lg:w-44 lg:h-44 rounded-full bg-g-blue/10 border-2 border-g-blue/25"
      />
      <motion.div
        initial={{ scale: 0, rotate: 30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{ y: yYellow, rotate: rotateYellow, opacity: opacityShapes }}
        className="absolute top-[28%] right-[22%] w-10 h-10 lg:w-16 lg:h-16 bg-g-yellow rounded-sm"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{ y: yRed, opacity: opacityShapes }}
        className="absolute bottom-[18%] right-[14%] w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-g-red/15"
      />
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
        style={{ opacity: opacityShapes }}
        className="absolute top-[8%] left-[48%] w-36 h-36 lg:w-52 lg:h-52"
        viewBox="0 0 100 100"
        fill="none"
      >
        <motion.path
          d="M 10 90 Q 50 10, 90 90"
          stroke="#1E8E3E"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        />
      </motion.svg>
      {/* background grid character */}
      <motion.div
        style={{ y: yKanji }}
        className="absolute -right-10 bottom-0 lg:right-0 lg:bottom-[-8%] font-serif text-ink/[0.03] leading-none select-none pointer-events-none text-[38vw] lg:text-[28vw] font-black"
      >
        橋
      </motion.div>
    </div>
  );
}
