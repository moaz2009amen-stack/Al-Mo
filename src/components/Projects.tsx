import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeader } from './WhyWorkWithMe'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mt-16 flex flex-col gap-8">
          {t.projects.items.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="corner-bracket grid gap-8 rounded-2xl border border-line bg-paper-dim p-8 md:grid-cols-[1fr_1.4fr] md:p-10"
            >
              <div className="flex flex-col justify-between">
                <div>
                  {project.image && (
                    <div className="mb-5 aspect-video overflow-hidden rounded-xl border border-line bg-paper">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  )}
                  <span className="font-mono-label text-[11px] text-brass">{project.tag}</span>
                  <h3 className="mt-3 text-2xl font-extrabold text-ink">{project.title}</h3>
                  <span className="mt-3 inline-block rounded-full border border-line bg-paper px-3 py-1 text-xs text-slate">
                    {project.status}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-label rounded border border-line-dark/10 bg-ink/[0.04] px-2.5 py-1 text-[10px] text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-brass"
                  >
                    {t.projects.labels.viewDemo}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.projects.labels.problem} value={project.problem} />
                <Field label={t.projects.labels.solution} value={project.solution} />
                <Field label={t.projects.labels.approach} value={project.approach} />
                <Field label={t.projects.labels.result} value={project.result} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-mono-label text-[10px] text-slate">{label}</span>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/85">{value}</p>
    </div>
  )
}
