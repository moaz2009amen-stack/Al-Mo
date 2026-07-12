import { Github, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { WhatsAppIcon, TelegramIcon, FacebookIcon } from './BrandIcons'
import { CONTACT, whatsappLink, telegramLink, mailtoLink } from '../config/contact'

const sectionIds = ['why', 'services', 'projects', 'about', 'process', 'faq'] as const

export default function Footer() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-ink py-16 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <span className="font-mono-label text-sm text-paper">
              AL<span className="text-brass">—</span>MO
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/50">{t.footer.tagline}</p>
          </div>

          <div>
            <span className="font-mono-label text-[11px] text-paper/50">{t.footer.nav}</span>
            <div className="mt-4 flex flex-col gap-2.5">
              {sectionIds.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-start text-sm text-paper/70 transition-colors hover:text-brass"
                >
                  {t.nav.links[id]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono-label text-[11px] text-paper/50">{t.footer.connect}</span>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-brass hover:text-brass"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a
                href={telegramLink()}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-brass hover:text-brass"
              >
                <TelegramIcon size={17} />
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-brass hover:text-brass"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={CONTACT.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-brass hover:text-brass"
              >
                <Github size={17} strokeWidth={1.75} />
              </a>
              <a
                href={mailtoLink()}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-brass hover:text-brass"
              >
                <Mail size={17} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-8 text-xs text-paper/40 sm:flex-row">
          <span>
            AL-MO — {t.footer.rights} © {new Date().getFullYear()}
          </span>
          <span className="font-mono-label">CAIRO, EGYPT</span>
        </div>
      </div>
    </footer>
  )
}
