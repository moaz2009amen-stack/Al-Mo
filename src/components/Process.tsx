import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeader } from './WhyWorkWithMe'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="bg-paper-dim py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />

        <div className="relative mt-16">
          <div className="absolute inset-inline-start-[27px] top-2 bottom-2 hidden w-px bg-line sm:block" />
          <div className="flex flex-col gap-3">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex items-start gap-6 rounded-xl bg-paper-dim p-4 sm:p-5"
              >
                <span className="font-mono-label relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-sm text-brass">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-2">
                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
