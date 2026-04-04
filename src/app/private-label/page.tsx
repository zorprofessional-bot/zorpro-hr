'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'
import { PageHeader } from '@/components/layout/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

export default function PrivateLabelPage() {
  const { t } = useLanguage()

  const benefits = [
    { key: 'custom', icon: '01' },
    { key: 'branding', icon: '02' },
    { key: 'minimums', icon: '03' },
    { key: 'speed', icon: '04' },
  ]

  return (
    <main>
      <PageHeader
        breadcrumbs={[{ label: t('nav.privateLabel'), href: '/private-label' }]}
        title={t('privateLabel.pageTitle')}
        subtitle={t('privateLabel.pageSubtitle')}
      />

      {/* Overview */}
      <section id="overview" className="py-28 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('privateLabel.title')}
            </h2>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              {t('privateLabel.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section id="packaging" className="py-24 lg:py-32 bg-accent-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {benefits.map((benefit) => (
              <AnimatedItem
                key={benefit.key}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {t(`privateLabel.benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`privateLabel.benefits.${benefit.key}.description`)}
                </p>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <SectionTag>{t('privateLabel.process.title')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('privateLabel.process.title')}
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {([0, 1, 2, 3] as const).map((i) => (
              <AnimatedItem key={i} className="relative text-center">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`privateLabel.process.steps.${i}.title` as string) || `Step ${i + 1}`}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`privateLabel.process.steps.${i}.description` as string) || ''}
                </p>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Showcase */}
      <section id="case-studies" className="py-24 lg:py-32 bg-primary-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-primary-900">
                <Image
                  src="/images/rucnik.png"
                  alt="Private Label Solutions"
                  fill
                  className="object-contain p-12"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionTag variant="dark">{t('privateLabel.sectionTag')}</SectionTag>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {t('privateLabel.title')}
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                {t('privateLabel.subtitle')}
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-200"
              >
                {t('privateLabel.cta')}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  )
}
