'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary-950 text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="ZOR"
                width={40}
                height={40}
                className="h-9 w-auto"
              />
              <div>
                <span className="text-lg font-bold tracking-tight">ZOR</span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  {t('footer.tagline')}
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              {t('footer.description')}
            </p>
            <p className="mt-4 text-xs text-white/30">{t('trust.certifications')}</p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/products" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.products')}</Link></li>
              <li><Link href="/solutions" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.solutions')}</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">
              {t('footer.products')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/products#toiletPaper" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.megaMenu.products.roll.items.toiletPaper')}</Link></li>
              <li><Link href="/products#miniJumbo" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.megaMenu.products.roll.items.miniJumbo')}</Link></li>
              <li><Link href="/products#coreless" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.megaMenu.products.roll.items.coreless')}</Link></li>
              <li><Link href="/products#handTowels" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.megaMenu.products.folded.items.handTowels')}</Link></li>
              <li><Link href="/products#zFold" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.megaMenu.products.folded.items.zFold')}</Link></li>
              <li><Link href="/products#vFold" className="text-sm text-white/60 hover:text-white transition-colors">{t('nav.megaMenu.products.folded.items.vFold')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">
              {t('contact.info.title')}
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                <a href="mailto:info@zorpro.hr" className="hover:text-white transition-colors">info@zorpro.hr</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                <a href="tel:+38512345678" className="hover:text-white transition-colors">{t('contact.info.phone')}</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                <span>{t('contact.info.address')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{t('contact.info.hours')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">{t('footer.terms')}</Link>
            <Link href="/cookies" className="text-xs text-white/30 hover:text-white/60 transition-colors">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
