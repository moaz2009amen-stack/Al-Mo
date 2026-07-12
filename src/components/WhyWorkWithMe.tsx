import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { iconMap } from './iconMap'

export default function WhyWorkWithMe() {
  const { t } = useLanguage()

  return (
    <section id="why" className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.why.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col gap-4 bg-paper p-8 transition-colors hover:bg-paper-dim"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-brass transition-colors group-hover:border-brass">
                  {Icon && <Icon size={20} strokeWidth={1.75} />}
                </div>
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{card.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'start',
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <span className="font-mono-label text-[11px] text-brass">{eyebrow}</span>
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-balance text-base text-slate">{subtitle}</p>}
    </motion.div>
  )
}
