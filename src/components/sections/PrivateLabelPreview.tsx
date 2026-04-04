'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

const benefitIcons = [
  <svg key="c" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="b" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>,
  <svg key="m" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>,
  <svg key="s" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
]

export function PrivateLabelPreview() {
  const { t } = useLanguage()

  const benefits = ['custom', 'branding', 'minimums', 'speed'] as const

  return (
    <section className="py-24 lg:py-32 bg-accent-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection className="lg:col-span-7">
            <SectionTag>{t('privateLabel.sectionTag')}</SectionTag>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {t('privateLabel.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {t('privateLabel.subtitle')}
            </p>

            {/* 2x2 benefit grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((key, i) => (
                <div key={key} className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {benefitIcons[i]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{t(`privateLabel.benefits.${key}.title`)}</h3>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">{t(`privateLabel.benefits.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/private-label"
              className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
            >
              {t('privateLabel.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimatedSection>

          {/* Product Mockup */}
          <AnimatedSection delay={0.2} className="lg:col-span-5">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/rucnik.png"
                  alt="Private Label Products"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
