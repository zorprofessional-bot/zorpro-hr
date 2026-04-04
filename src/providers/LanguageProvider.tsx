'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { en } from '@/data/en'
import { hr } from '@/data/hr'

type Language = 'en' | 'hr'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Translations> = { en, hr }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('hr')

  useEffect(() => {
    const saved = localStorage.getItem('zor-lang') as Language
    if (saved && (saved === 'en' || saved === 'hr')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('zor-lang', lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[language]
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
