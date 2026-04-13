'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

const environmentIcons = [
  <svg key="hotel" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
  <svg key="health" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="office" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>,
  <svg key="food" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" /></svg>,
]

const environments = ['hotel', 'healthcare', 'office', 'restaurant'] as const

export function SolutionsPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-accent-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection className="lg:col-span-7">
            <SectionTag>{t('solutions.sectionTag')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('solutions.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t('solutions.subtitle')}
            </p>

            {/* 2x2 environment grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {environments.map((key, i) => (
                <div key={key} className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {environmentIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{t(`solutions.environments.${key}.title`)}</h3>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{t(`solutions.environments.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              {t('solutions.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.2} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/washroom-modern.png"
                alt="Modern washroom with dispensers"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
