import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactCTA() {
  const { t, dir } = useLanguage()
  const Arrow = dir === 'rtl' ? ArrowDownRight : ArrowUpRight

  return (
    <section className="relative overflow-hidden bg-paper-dim py-28">
      <div className="blueprint-bg absolute inset-0 opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <span className="font-mono-label text-[11px] text-brass">{t.contactCta.eyebrow}</span>
        <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          {t.contactCta.title}
        </h2>
        <p className="mt-4 text-balance text-base text-slate">{t.contactCta.subtitle}</p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm text-paper transition-colors hover:bg-brass"
        >
          {t.contactCta.cta}
          <Arrow size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.div>
    </section>
  )
}
