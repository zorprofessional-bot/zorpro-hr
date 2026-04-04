'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/providers/LanguageProvider'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { MegaMenuPanel, type MenuKey } from '@/components/layout/MegaMenuPanel'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { key: 'about' as const, href: '/about', hasMenu: true },
  { key: 'products' as const, href: '/products', hasMenu: true },
  { key: 'privateLabel' as const, href: '/private-label', hasMenu: true },
  { key: 'contact' as const, href: '/contact', hasMenu: false },
]

export function Header() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = useCallback((key: MenuKey) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current)
    setActiveMenu(key)
  }, [])

  const handleMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }, [])

  const handleMenuPanelClose = useCallback(() => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }, [])

  const toggleMobileAccordion = (key: string) => {
    setExpandedMobile(expandedMobile === key ? null : key)
  }

  const mobileSubItems: Record<string, { label: string; href: string }[]> = {
    about: [
      { label: t('nav.megaMenu.about.companyProfile.label'), href: '/about#story' },
      { label: t('nav.megaMenu.about.facility.label'), href: '/about#facility' },
      { label: t('nav.megaMenu.about.quality.label'), href: '/about#quality' },
      { label: t('nav.megaMenu.about.sustainability.label'), href: '/about#sustainability' },
    ],
    products: [
      { label: t('nav.megaMenu.products.roll.title'), href: '/products#roll' },
      { label: t('nav.megaMenu.products.folded.title'), href: '/products#folded' },
      { label: t('nav.megaMenu.products.dispensing.title'), href: '/products#dispensing' },
    ],
    privateLabel: [
      { label: t('nav.megaMenu.privateLabel.overview.label'), href: '/private-label#overview' },
      { label: t('nav.megaMenu.privateLabel.process.label'), href: '/private-label#process' },
      { label: t('nav.megaMenu.privateLabel.packaging.label'), href: '/private-label#packaging' },
    ],
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-border-light'
            : 'bg-transparent'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ZOR"
                width={48}
                height={48}
                className="h-10 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
                  ZOR
                </span>
                <span className={`block text-[10px] font-medium uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-primary-light' : 'text-white/70'}`}>
                  Professional Hygiene
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.hasMenu ? handleMouseEnter(item.key as MenuKey) : setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      scrolled
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                    {item.hasMenu && (
                      <svg className={`inline-block w-3.5 h-3.5 ml-1 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                    )}
                    {/* Active indicator bar */}
                    <span className={`absolute bottom-0 left-2 right-2 h-[3px] bg-primary rounded-t transition-transform origin-bottom ${
                      activeMenu === item.key ? 'scale-y-100' : 'scale-y-0'
                    }`} />
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher scrolled={scrolled} />
              <Link
                href="/contact"
                className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-sm'
                    : 'bg-white text-primary hover:bg-white/90'
                }`}
              >
                {t('nav.cta')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-10 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen
                    ? 'rotate-45 translate-y-2 bg-white'
                    : scrolled ? 'bg-gray-800' : 'bg-white'
                }`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : scrolled ? 'bg-gray-800' : 'bg-white'
                }`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  mobileOpen
                    ? '-rotate-45 -translate-y-2 bg-white'
                    : scrolled ? 'bg-gray-800' : 'bg-white'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <MegaMenuPanel activeMenu={activeMenu} onClose={handleMenuPanelClose} />
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary-950 overflow-y-auto"
          >
            <div className="pt-24 pb-8 px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="border-b border-white/10"
                >
                  {item.hasMenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileAccordion(item.key)}
                        className="w-full flex items-center justify-between py-4 text-xl font-semibold text-white"
                      >
                        {t(`nav.${item.key}`)}
                        <svg className={`w-5 h-5 text-white/50 transition-transform duration-200 ${expandedMobile === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                      </button>
                      <AnimatePresence>
                        {expandedMobile === item.key && mobileSubItems[item.key] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-1">
                              {mobileSubItems[item.key].map((sub, j) => (
                                <motion.div
                                  key={sub.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.05 }}
                                >
                                  <Link
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2 text-base text-white/60 hover:text-white transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                </motion.div>
                              ))}
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: mobileSubItems[item.key].length * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-base text-primary-light font-medium hover:text-white transition-colors"
                                >
                                  {t(`nav.${item.key}`)} &rarr;
                                </Link>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-xl font-semibold text-white hover:text-white/80 transition-colors"
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-6 mt-10"
              >
                <LanguageSwitcher scrolled={false} />
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
                >
                  {t('nav.cta')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
