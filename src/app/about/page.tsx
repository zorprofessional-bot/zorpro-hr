'use client'

import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { PageHeader } from '@/components/layout/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'
import { CtaBanner } from '@/components/sections/CtaBanner'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main>
      <PageHeader
        breadcrumbs={[{ label: t('nav.about'), href: '/about' }]}
        title={t('about.pageTitle')}
        subtitle={t('about.pageSubtitle')}
      />

      {/* Story */}
      <section id="story" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <AnimatedSection>
              <SectionTag>{t('about.story.title')}</SectionTag>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {t('about.story.title')}
              </h2>
              <div className="mt-8 space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="ZOR Manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-accent-navy">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('about.mission.title')}
            </h2>
            <p className="mt-8 text-xl lg:text-2xl text-gray-600 leading-relaxed font-light italic">
              &ldquo;{t('about.mission.text')}&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section id="quality" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {(['quality', 'flexibility', 'partnership'] as const).map((key, i) => (
              <AnimatedItem
                key={key}
                className="p-8 lg:p-10 rounded-xl bg-surface border border-border-light border-t-2 border-t-primary"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white text-lg font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {t(`about.values.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`about.values.${key}.description`)}
                </p>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Facility */}
      <section id="facility" className="py-24 lg:py-32 bg-primary-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/images/mini jumbo.png"
                  alt="ZOR Converting Facility"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <SectionTag variant="dark">{t('about.facility.title')}</SectionTag>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {t('about.facility.title')}
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                {t('about.facility.description')}
              </p>
              <ul className="mt-8 space-y-4">
                {(t('about.facility.features') as unknown as string[]).map?.((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 text-success shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
