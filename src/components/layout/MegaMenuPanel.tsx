'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/providers/LanguageProvider'

export type MenuKey = 'about' | 'products' | 'privateLabel' | null

interface MegaMenuPanelProps {
  activeMenu: MenuKey
  onClose: () => void
}

function AboutPanel() {
  const { t } = useLanguage()
  const items = [
    { key: 'companyProfile', href: '/about#story', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>
    )},
    { key: 'facility', href: '/about#facility', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.67-5.67a8 8 0 1111.34 0l-5.67 5.67zM12 10h.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
    )},
    { key: 'quality', href: '/about#quality', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    )},
    { key: 'sustainability', href: '/about#sustainability', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67" /></svg>
    )},
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className="group flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors"
        >
          <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
            {item.icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-1">
              {t(`nav.megaMenu.about.${item.key}.label`)}
              <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{t(`nav.megaMenu.about.${item.key}.description`)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

function ProductsPanel() {
  const { t } = useLanguage()

  const categories = [
    {
      key: 'roll',
      items: [
        { key: 'toiletPaper', href: '/products#toiletPaper' },
        { key: 'miniJumbo', href: '/products#miniJumbo' },
        { key: 'coreless', href: '/products#coreless' },
      ],
    },
    {
      key: 'folded',
      items: [
        { key: 'handTowels', href: '/products#handTowels' },
        { key: 'zFold', href: '/products#zFold' },
        { key: 'vFold', href: '/products#vFold' },
      ],
    },
    {
      key: 'dispensing',
      items: [
        { key: 'rollDispensers', href: '/products#rollDispensers' },
        { key: 'towelDispensers', href: '/products#towelDispensers' },
        { key: 'soapSystems', href: '/products#soapSystems' },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
      {categories.map((cat) => (
        <div key={cat.key} className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-l-2 border-primary pl-3">
            {t(`nav.megaMenu.products.${cat.key}.title`)}
          </h3>
          <ul className="space-y-1">
            {cat.items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-2 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  <span>{t(`nav.megaMenu.products.${cat.key}.items.${item.key}`)}</span>
                  <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Featured card */}
      <div className="lg:col-span-3">
        <div className="relative h-full rounded-xl bg-primary-950 p-6 flex flex-col justify-between overflow-hidden min-h-[200px]">
          <Image
            src="/images/toaletni papir.png"
            alt="ZOR Products"
            fill
            className="object-contain object-right-bottom opacity-20 p-4"
          />
          <div className="relative">
            <p className="text-sm font-semibold text-white mb-2">{t('nav.megaMenu.products.title')}</p>
            <p className="text-xs text-white/50">Explore our complete range of professional hygiene products.</p>
          </div>
          <Link
            href="/products"
            className="relative group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors mt-4"
          >
            {t('nav.megaMenu.products.viewAll')}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivateLabelPanel() {
  const { t } = useLanguage()
  const items = [
    { key: 'overview', href: '/private-label#overview', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
    )},
    { key: 'process', href: '/private-label#process', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>
    )},
    { key: 'packaging', href: '/private-label#packaging', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
    )},
    { key: 'caseStudies', href: '/private-label#case-studies', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    )},
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {items.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className="group flex items-start gap-4 p-4 rounded-lg hover:bg-surface transition-colors"
        >
          <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
            {item.icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-1">
              {t(`nav.megaMenu.privateLabel.${item.key}.label`)}
              <svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">{t(`nav.megaMenu.privateLabel.${item.key}.description`)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function MegaMenuPanel({ activeMenu, onClose }: MegaMenuPanelProps) {
  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t-[3px] border-primary z-50"
          onMouseEnter={() => {}} // keep panel open
          onMouseLeave={onClose}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 lg:py-10">
            {activeMenu === 'about' && <AboutPanel />}
            {activeMenu === 'products' && <ProductsPanel />}
            {activeMenu === 'privateLabel' && <PrivateLabelPanel />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
