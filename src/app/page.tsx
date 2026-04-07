'use client'

import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { FacilityShowcase } from '@/components/sections/FacilityShowcase'
import { ProductsPreview } from '@/components/sections/ProductsPreview'
import { SolutionsPreview } from '@/components/sections/SolutionsPreview'
import { WhyZor } from '@/components/sections/WhyZor'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { JsonLd } from '@/components/seo/JsonLd'

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <Stats />
        <AboutPreview />
        <FacilityShowcase />
        <ProductsPreview />
        <SolutionsPreview />
        <WhyZor />
        <CtaBanner />
      </main>
    </>
  )
}
