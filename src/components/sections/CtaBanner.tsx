'use client'

import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28 bg-primary-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <AnimatedSection className="lg:col-span-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight">
              {t('cta.title')}
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-2xl">
              {t('cta.subtitle')}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/10"
            >
              {t('cta.button')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
