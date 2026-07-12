import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t, dir } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowDownRight : ArrowUpRight

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper pt-24">
      <div className="blueprint-bg absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brass" />
          <span className="font-mono-label text-[11px] text-slate">{t.hero.eyebrow}</span>
        </motion.div>

        <h1 className="max-w-4xl text-balance text-4xl font-extrabold !leading-[1.6] text-ink sm:text-5xl sm:!leading-[1.55] md:text-6xl md:!leading-[1.5]">
          {t.hero.titleLines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className={i === 1 ? 'mt-3 block text-brass sm:mt-4' : 'block'}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-6 max-w-xl text-balance text-lg text-slate"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-brass"
          >
            {t.hero.ctaPrimary}
            <Arrow size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:translate-x-[-0.125rem]" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm text-ink transition-colors hover:border-brass"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 inset-inline-start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono-label text-[10px] text-slate/70">{t.hero.scrollHint}</span>
        <div className="h-8 w-px bg-line-dark/30" />
      </motion.div>
    </section>
  )
}
