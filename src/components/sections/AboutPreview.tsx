'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

export function AboutPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimatedSection className="lg:col-span-5">
            <SectionTag>{t('about.sectionTag')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 mt-8 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              {t('about.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimatedSection>

          {/* Photo */}
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
              <Image
                src="/images/warehouse-zorpro.png"
                alt="ZOR Professional warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
