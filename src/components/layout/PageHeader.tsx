'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface Breadcrumb {
  label: string
  href: string
}

interface PageHeaderProps {
  breadcrumbs: Breadcrumb[]
  title: string
  subtitle: string
}

export function PageHeader({ breadcrumbs, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary-950 pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          {/* Breadcrumb */}
          <nav className="hidden sm:flex items-center gap-2 text-xs text-white/40 mb-4">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white/60">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white/60 transition-colors">{crumb.label}</Link>
                )}
              </span>
            ))}
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
