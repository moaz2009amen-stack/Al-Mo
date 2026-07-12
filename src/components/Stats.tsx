import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Stats() {
  const { t } = useLanguage()

  return (
    <section className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <span className="font-mono-label text-[11px] text-brass">{t.stats.eyebrow}</span>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-line-dark pt-6"
            >
              <span className="text-4xl font-extrabold text-brass sm:text-5xl">{stat.value}</span>
              <p className="mt-2 text-sm text-paper/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
