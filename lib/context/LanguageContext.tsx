'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'vi' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (vi: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('vi')

  const t = (vi: string, en: string) => (lang === 'vi' ? vi : en)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
