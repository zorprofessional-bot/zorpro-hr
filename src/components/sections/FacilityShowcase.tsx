'use client'

import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

export function FacilityShowcase() {
  const { t } = useLanguage()

  const stats = [
    { value: t('facilityShowcase.stats.lines.value'), label: t('facilityShowcase.stats.lines.label') },
    { value: t('facilityShowcase.stats.sqm.value'), label: t('facilityShowcase.stats.sqm.label') },
    { value: t('facilityShowcase.stats.shifts.value'), label: t('facilityShowcase.stats.shifts.label') },
  ]

  return (
    <section className="bg-primary-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/hero.png"
                alt="ZOR Converting Facility"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2} className="lg:col-span-6">
            <SectionTag variant="dark">{t('facilityShowcase.sectionTag')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {t('facilityShowcase.title')}
            </h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              {t('facilityShowcase.subtitle')}
            </p>

            {/* Mini Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
