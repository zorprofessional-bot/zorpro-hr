'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/providers/LanguageProvider'
import { PageHeader } from '@/components/layout/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'
import { CtaBanner } from '@/components/sections/CtaBanner'

const environmentData = [
  { key: 'hotel', image: '/images/hotel-bathroom.png' },
  { key: 'healthcare', image: '/images/healthcare-corridor.png' },
  { key: 'office', image: '/images/washroom-modern.png' },
  { key: 'restaurant', image: '/images/warehouse-zorpro.png' },
] as const

const benefitIcons = [
  <svg key="m" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
  <svg key="p" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  <svg key="s" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" /></svg>,
  <svg key="d" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
]

const benefits = ['matched', 'proven', 'sustainable', 'support'] as const

export default function SolutionsPage() {
  const { t } = useLanguage()

  return (
    <main>
      <PageHeader
        breadcrumbs={[{ label: t('nav.solutions'), href: '/solutions' }]}
        title={t('solutions.pageTitle')}
        subtitle={t('solutions.pageSubtitle')}
      />

      {/* Environment Showcase */}
      <section id="environments" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag>{t('solutions.sectionTag')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('solutions.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('solutions.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {environmentData.map((env) => (
              <AnimatedItem key={env.key}>
                <div className="group relative aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={env.image}
                    alt={t(`solutions.environments.${env.key}.title`)}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      {t(`solutions.environments.${env.key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {t(`solutions.environments.${env.key}.description`)}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Dispensing Systems */}
      <section id="dispensing" className="py-24 lg:py-32 bg-primary-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/images/washroom-modern.png"
                  alt="Dispensing systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SectionTag variant="dark">{t('nav.megaMenu.solutions.dispensing.label')}</SectionTag>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {t('solutions.benefits.matched.title')}
              </h2>
              <p className="mt-6 text-lg text-white/50 leading-relaxed">
                {t('solutions.benefits.matched.description')}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">3+</div>
                  <div className="mt-1 text-xs text-white/40 uppercase tracking-wider">{t('products.categories.dispensing.title')}</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">6+</div>
                  <div className="mt-1 text-xs text-white/40 uppercase tracking-wider">{t('products.categories.soap.title')}</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">100%</div>
                  <div className="mt-1 text-xs text-white/40 uppercase tracking-wider">{t('solutions.benefits.matched.title')}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits / Industries */}
      <section id="industries" className="py-24 lg:py-32 bg-accent-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag>{t('nav.megaMenu.solutions.industries.label')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('whyZor.title')}
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((key, i) => (
              <AnimatedItem
                key={key}
                className="p-8 lg:p-10 rounded-xl bg-white border border-border-light border-t-2 border-t-primary"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {benefitIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4">{t(`solutions.benefits.${key}.title`)}</h3>
                <p className="text-gray-600 leading-relaxed mt-2">{t(`solutions.benefits.${key}.description`)}</p>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* For Home & Family */}
      <section id="home" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTag>{t('nav.megaMenu.solutions.forHome.label')}</SectionTag>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {t('solutions.forHome.title')}
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {t('solutions.forHome.description')}
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20"
              >
                {t('cta.button')}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/hotel-bathroom.png"
                  alt="Professional quality at home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
