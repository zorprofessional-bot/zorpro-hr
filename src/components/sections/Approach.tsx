'use client'

import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

export function Approach() {
  const { t } = useLanguage()

  const steps = [
    { number: t('approach.steps.consult.number'), title: t('approach.steps.consult.title'), description: t('approach.steps.consult.description') },
    { number: t('approach.steps.produce.number'), title: t('approach.steps.produce.title'), description: t('approach.steps.produce.description') },
    { number: t('approach.steps.deliver.number'), title: t('approach.steps.deliver.title'), description: t('approach.steps.deliver.description') },
  ]

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionTag>{t('approach.sectionTag')}</SectionTag>
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {t('approach.title')}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {t('approach.description')}
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0">
          {steps.map((step, i) => (
            <AnimatedItem key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-primary/10" />
              )}
              <div className="text-center px-6 lg:px-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-2 border-primary/10 mb-8">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
