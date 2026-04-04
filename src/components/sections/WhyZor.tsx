'use client'

import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

const icons = [
  <svg key="vi" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>,
  <svg key="er" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
  <svg key="cq" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
  <svg key="ds" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
]

export function WhyZor() {
  const { t } = useLanguage()

  const points = [
    { icon: icons[0], title: t('whyZor.points.verticalIntegration.title'), description: t('whyZor.points.verticalIntegration.description') },
    { icon: icons[1], title: t('whyZor.points.europeanReach.title'), description: t('whyZor.points.europeanReach.description') },
    { icon: icons[2], title: t('whyZor.points.certifiedQuality.title'), description: t('whyZor.points.certifiedQuality.description') },
    { icon: icons[3], title: t('whyZor.points.dedicatedSupport.title'), description: t('whyZor.points.dedicatedSupport.description') },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionTag>{t('whyZor.sectionTag')}</SectionTag>
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {t('whyZor.title')}
          </h2>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {points.map((point, i) => (
            <AnimatedItem
              key={i}
              className="p-8 lg:p-10 rounded-xl bg-surface border border-border-light border-t-2 border-t-primary"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed mt-2">{point.description}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
