'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/providers/LanguageProvider'

interface InquiryFormProps {
  variant: 'hero' | 'standalone'
  className?: string
}

export function InquiryForm({ variant, className = '' }: InquiryFormProps) {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  const inputBase = 'w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary transition-all'

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 text-center ${className}`}>
        <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <p className="text-lg font-semibold text-gray-900">{t('contact.form.success')}</p>
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <h3 className="text-lg font-bold text-gray-900 mb-6">{t('hero.formTitle')}</h3>
        <div className="space-y-4">
          <input type="text" name="name" required placeholder={t('hero.formName')} className={inputBase} />
          <input type="email" name="email" required placeholder={t('hero.formEmail')} className={inputBase} />
          <input type="text" name="company" placeholder={t('hero.formCompany')} className={inputBase} />
          <select name="interest" required className={`${inputBase} text-gray-400`} defaultValue="">
            <option value="" disabled>{t('hero.formInterest')}</option>
            <option value="products">{t('hero.formInterestOptions.products')}</option>
            <option value="privateLabel">{t('hero.formInterestOptions.privateLabel')}</option>
            <option value="partnership">{t('hero.formInterestOptions.partnership')}</option>
            <option value="other">{t('hero.formInterestOptions.other')}</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {t('hero.formSubmit')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-3">{t('hero.formDisclaimer')}</p>
      </form>
    )
  }

  // Standalone variant (contact page)
  const subjects = ['general', 'products', 'privateLabel', 'partnership', 'other'] as const

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.name')} *
          </label>
          <input type="text" id="name" name="name" required className={inputBase} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.email')} *
          </label>
          <input type="email" id="email" name="email" required className={inputBase} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.company')}
          </label>
          <input type="text" id="company" name="company" className={inputBase} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.phone')}
          </label>
          <input type="tel" id="phone" name="phone" className={inputBase} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          {t('contact.form.subject')} *
        </label>
        <select id="subject" name="subject" required className={inputBase}>
          <option value="">—</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{t(`contact.form.subjects.${s}`)}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {t('contact.form.message')} *
        </label>
        <textarea id="message" name="message" rows={6} required className={`${inputBase} resize-none`} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20 disabled:opacity-60"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            {t('contact.form.submit')}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
          </>
        )}
      </button>
    </form>
  )
}
