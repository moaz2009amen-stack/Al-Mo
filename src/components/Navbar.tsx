import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const sectionIds = ['why', 'services', 'projects', 'about', 'process', 'faq'] as const

export default function Navbar() {
  const { t, lang, toggleLang, dir } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-line shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono-label text-sm font-semibold text-ink"
        >
          AL<span className="text-brass">—</span>MO
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {t.nav.links[id]}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleLang}
            aria-label="toggle language"
            className="rounded-full border border-line px-3.5 py-1.5 text-xs font-mono-label text-slate transition-colors hover:border-brass hover:text-ink"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="rounded-full bg-ink px-5 py-2 text-sm text-paper transition-colors hover:bg-brass"
          >
            {t.nav.cta}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-line bg-paper px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-${dir === 'rtl' ? 'right' : 'left'} text-sm text-slate hover:text-ink`}
              >
                {t.nav.links[id]}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleLang}
                className="rounded-full border border-line px-3.5 py-1.5 text-xs font-mono-label text-slate"
              >
                {lang === 'ar' ? 'EN' : 'AR'}
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="flex-1 rounded-full bg-ink px-5 py-2 text-center text-sm text-paper"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
