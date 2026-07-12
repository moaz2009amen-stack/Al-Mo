import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { iconMap } from './iconMap'
import { SectionHeader } from './WhyWorkWithMe'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-paper-dim py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {t.services.items.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="corner-bracket rounded-2xl border border-line bg-paper p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-brass">
                    {Icon && <Icon size={18} strokeWidth={1.75} />}
                  </div>
                  <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate">{service.desc}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink/80">
                      <Check size={15} className="mt-0.5 shrink-0 text-brass" strokeWidth={2} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
