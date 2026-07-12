import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { translations, TranslationShape } from '../i18n/translations'

export type Lang = 'ar' | 'en'

interface LanguageContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  t: TranslationShape
  toggleLang: () => void
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'al-mo-lang'

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ar'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (stored === 'ar' || stored === 'en') return stored
  const browserLang = window.navigator.language || 'ar'
  return browserLang.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, dir])

  const setLang = (l: Lang) => setLangState(l)
  const toggleLang = () => setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'))

  return (
    <LanguageContext.Provider value={{ lang, dir, t: translations[lang], toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
