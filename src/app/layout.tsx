import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/providers/LanguageProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics, MetaPixel } from '@/components/analytics/Analytics'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zorpro.hr'),
  title: {
    default: 'ZOR — Professional Hygiene Solutions',
    template: '%s | ZOR',
  },
  description: 'Professional hygiene solutions for businesses across Europe. Quality paper products manufactured in our own converting facility — toilet paper, hand towels, and private label solutions.',
  keywords: ['professional hygiene', 'paper products', 'toilet paper', 'hand towels', 'private label', 'tissue converting', 'B2B hygiene', 'Croatia', 'Europe'],
  authors: [{ name: 'ZOR' }],
  creator: 'ZOR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'hr_HR',
    url: 'https://zorpro.hr',
    siteName: 'ZOR Professional Hygiene Solutions',
    title: 'ZOR — Professional Hygiene Solutions',
    description: 'Quality paper products manufactured in our own converting facility. Serving businesses across 15+ European markets.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'ZOR Professional Hygiene Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZOR — Professional Hygiene Solutions',
    description: 'Quality paper products for businesses across Europe.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className={inter.variable}>
      <body className="font-display antialiased">
        <GoogleAnalytics />
        <MetaPixel />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
