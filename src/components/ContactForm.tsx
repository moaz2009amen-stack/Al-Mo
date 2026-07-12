import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { WhatsAppIcon, TelegramIcon } from './BrandIcons'
import { whatsappLink, telegramLink, mailtoLink } from '../config/contact'

type Status = 'idle' | 'success' | 'error'

export default function ContactForm() {
  const { t, lang } = useLanguage()
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const form = new FormData(e.currentTarget)
      const name = String(form.get('name') || '').trim()
      const email = String(form.get('email') || '').trim()
      const budget = String(form.get('budget') || '').trim()
      const message = String(form.get('message') || '').trim()

      const lines =
        lang === 'ar'
          ? [
              `مرحبًا AL-MO، معايا مشروع حابب أتكلم فيه معاك.`,
              `الاسم: ${name}`,
              email && `البريد: ${email}`,
              budget && `الميزانية التقريبية: ${budget}`,
              `تفاصيل المشروع: ${message}`,
            ]
          : [
              `Hi AL-MO, I have a project I'd like to talk about.`,
              `Name: ${name}`,
              email && `Email: ${email}`,
              budget && `Approximate budget: ${budget}`,
              `Project details: ${message}`,
            ]

      const text = lines.filter(Boolean).join('\n')
      window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-paper py-28">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="corner-bracket rounded-2xl border border-line bg-paper-dim p-8 sm:p-10"
        >
          <h2 className="text-2xl font-extrabold text-ink">{t.contactForm.title}</h2>
          <p className="mt-2 text-sm text-slate">{t.contactForm.subtitle}</p>

          {status === 'success' ? (
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-brass/30 bg-brass/10 p-5 text-sm text-ink">
              <CheckCircle2 size={20} className="shrink-0 text-brass" />
              <span>{t.contactForm.success}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <Field label={t.contactForm.fields.name} name="name" type="text" required />
              <Field label={t.contactForm.fields.email} name="email" type="email" required />
              <Field
                label={t.contactForm.fields.budget}
                name="budget"
                type="text"
                placeholder={t.contactForm.fields.budgetPlaceholder}
              />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-medium text-slate">
                  {t.contactForm.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brass"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle size={16} />
                  <span>{t.contactForm.error}</span>
                </div>
              )}

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-brass"
              >
                {t.contactForm.submit}
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}

          <div className="mt-8 border-t border-line pt-6">
            <span className="font-mono-label text-[10px] text-slate">{t.contactForm.orDivider}</span>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink transition-colors hover:border-brass"
              >
                <WhatsAppIcon size={16} />
                {t.contactForm.quickContact.whatsapp}
              </a>
              <a
                href={telegramLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink transition-colors hover:border-brass"
              >
                <TelegramIcon size={16} />
                {t.contactForm.quickContact.telegram}
              </a>
              <a
                href={mailtoLink()}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink transition-colors hover:border-brass"
              >
                <Mail size={16} strokeWidth={1.75} />
                {t.contactForm.quickContact.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-slate">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brass"
      />
    </div>
  )
}
