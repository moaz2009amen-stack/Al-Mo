import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeader } from './WhyWorkWithMe'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-ink py-28 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono-label text-[11px] text-brass">{t.about.eyebrow}</span>
              <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight text-paper sm:text-4xl">
                {t.about.title}
              </h2>
            </motion.div>

            <div className="mt-8 flex flex-col gap-5">
              {t.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-base leading-relaxed text-paper/70"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="corner-bracket flex flex-col justify-center gap-6 rounded-2xl border border-line-dark bg-ink-soft p-8"
          >
            <span className="font-mono-label text-[11px] text-brass">{t.about.philosophyTitle}</span>
            <div className="flex flex-col gap-5">
              {t.about.philosophy.map((item) => (
                <div key={item.label} className="border-b border-line-dark pb-5 last:border-0 last:pb-0">
                  <span className="font-mono-label text-[10px] text-paper/50">{item.label}</span>
                  <p className="mt-1.5 text-lg font-semibold text-paper">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
