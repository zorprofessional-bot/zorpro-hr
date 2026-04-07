'use client'

import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { PageHeader } from '@/components/layout/PageHeader'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/AnimatedSection'
import { SectionTag } from '@/components/ui/SectionTag'
import { CtaBanner } from '@/components/sections/CtaBanner'

const productData = [
  {
    category: 'roll',
    products: [
      { key: 'toiletPaper', image: '/images/toaletni papir.png' },
      { key: 'miniJumbo', image: '/images/mini jumbo.png' },
      { key: 'coreless', image: '/images/toilet coreless.png' },
    ],
  },
  {
    category: 'folded',
    products: [
      { key: 'handTowels', image: '/images/rucnik.png' },
      { key: 'zFold', image: '/images/z fold.png' },
      { key: 'vFold', image: '/images/v fold.png' },
    ],
  },
  {
    category: 'dispensing',
    products: [
      { key: 'rollDispensers', image: '/images/washroom-modern.png', comingSoon: true },
      { key: 'towelDispensers', image: '/images/washroom-modern.png', comingSoon: true },
      { key: 'soapDispensers', image: '/images/washroom-modern.png', comingSoon: true },
    ],
  },
  {
    category: 'soap',
    products: [
      { key: 'liquidSoap', image: '/images/washroom-modern.png', comingSoon: true },
      { key: 'foamSoap', image: '/images/washroom-modern.png', comingSoon: true },
      { key: 'sanitizer', image: '/images/washroom-modern.png', comingSoon: true },
    ],
  },
]

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <main>
      <PageHeader
        breadcrumbs={[{ label: t('nav.products'), href: '/products' }]}
        title={t('products.pageTitle')}
        subtitle={t('products.pageSubtitle')}
      />

      {productData.map((cat, catIndex) => (
        <section
          key={cat.category}
          id={cat.category}
          className={`py-24 lg:py-32 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-surface'}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection className="mb-16">
              <SectionTag>{t(`products.categories.${cat.category}.title`)}</SectionTag>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                {t(`products.categories.${cat.category}.title`)}
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                {t(`products.categories.${cat.category}.description`)}
              </p>
            </AnimatedSection>

            <AnimatedStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cat.products.map((product) => (
                <AnimatedItem key={product.key} id={product.key}>
                  <div className="group">
                    {/* Dark image area */}
                    <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden bg-primary-950">
                      {'comingSoon' in product && product.comingSoon && (
                        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-white/90 text-primary text-xs font-semibold rounded-md uppercase tracking-wider">
                          Coming Soon
                        </div>
                      )}
                      <Image
                        src={product.image}
                        alt={t(`products.items.${product.key}.name`)}
                        fill
                        className={`object-contain p-8 group-hover:scale-105 transition-transform duration-500 ${'comingSoon' in product && product.comingSoon ? 'opacity-40' : ''}`}
                      />
                    </div>
                    {/* Info area */}
                    <div className="p-6 border border-t-0 border-border-light rounded-b-xl">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {t(`products.items.${product.key}.name`)}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {t(`products.items.${product.key}.description`)}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(t(`products.items.${product.key}.features`) as unknown as string[]).map?.((feature: string, i: number) => (
                          <span key={i} className="inline-block px-2.5 py-1 text-xs bg-accent text-primary rounded-md">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>
      ))}

      <CtaBanner />
    </main>
  )
}
