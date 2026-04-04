'use client'

import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    { value: t('stats.countries.value'), label: t('stats.countries.label') },
    { value: t('stats.products.value'), label: t('stats.products.label') },
    { value: t('stats.capacity.value'), label: t('stats.capacity.label') },
    { value: t('stats.clients.value'), label: t('stats.clients.label') },
  ]

  return (
    <section className="relative bg-primary border-t-4 border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-14">
        <AnimatedStagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimatedItem key={i} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
