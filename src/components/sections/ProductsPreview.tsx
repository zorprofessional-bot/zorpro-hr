'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'

const products = [
  { key: 'toiletPaper', image: '/images/toaletni papir.png' },
  { key: 'miniJumbo', image: '/images/mini jumbo.png' },
  { key: 'coreless', image: '/images/toilet coreless.png' },
  { key: 'handTowels', image: '/images/rucnik.png' },
  { key: 'zFold', image: '/images/z fold.png' },
  { key: 'vFold', image: '/images/v fold.png' },
]

export function ProductsPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag>{t('products.sectionTag')}</SectionTag>
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {t('products.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('products.subtitle')}
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <AnimatedItem key={product.key}>
              <Link href={`/products#${product.key}`} className="group block">
                {/* Dark image area */}
                <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden bg-primary-950">
                  <Image
                    src={product.image}
                    alt={t(`products.items.${product.key}.name`)}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Info area */}
                <div className="p-5 border border-t-0 border-border-light rounded-b-xl">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {t(`products.items.${product.key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                    {t(`products.items.${product.key}.description`)}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedStagger>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:gap-3 transition-all"
          >
            {t('nav.megaMenu.products.viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
