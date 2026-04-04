'use client'

import { useLanguage } from '@/providers/LanguageProvider'

export function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const { language, setLanguage } = useLanguage()

  const base = scrolled ? 'text-gray-400' : 'text-white/40'
  const active = scrolled ? 'font-bold text-primary' : 'font-bold text-white'

  return (
    <div className="flex items-center gap-1.5 text-xs tracking-wide">
      <button
        onClick={() => setLanguage('hr')}
        className={`transition-colors ${language === 'hr' ? active : `${base} hover:${scrolled ? 'text-gray-600' : 'text-white/70'}`}`}
      >
        HR
      </button>
      <span className={base}>|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-colors ${language === 'en' ? active : `${base} hover:${scrolled ? 'text-gray-600' : 'text-white/70'}`}`}
      >
        EN
      </button>
    </div>
  )
}
