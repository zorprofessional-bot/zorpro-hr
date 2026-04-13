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
  const [error, setError] = useState<string | null>(null)
  const [clientType, setClientType] = useState<'individual' | 'company'>('individual')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      ...Object.fromEntries(formData.entries()),
      clientType,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json().catch(() => null)
        throw new Error(result?.error || 'Send failed')
      }
      setSubmitted(true)
    } catch (err) {
      const msg = err instanceof Error ? err.message : ''
      setError(msg || t('contact.form.error'))
    } finally {
      setLoading(false)
    }
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

  const isHero = variant === 'hero'

  return (
    <form onSubmit={handleSubmit} className={isHero ? className : `space-y-6 ${className}`}>
      {isHero && <h3 className="text-lg font-bold text-gray-900 mb-6">{t('hero.formTitle')}</h3>}

      <div className={isHero ? 'space-y-4' : 'space-y-6'}>
        {/* Name */}
        {isHero ? (
          <input type="text" name="name" required placeholder={t('contact.form.name')} className={inputBase} />
        ) : (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.name')} *
            </label>
            <input type="text" id="name" name="name" required className={inputBase} />
          </div>
        )}

        {/* Email */}
        {isHero ? (
          <input type="email" name="email" required placeholder={t('contact.form.email')} className={inputBase} />
        ) : (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.email')} *
            </label>
            <input type="email" id="email" name="email" required className={inputBase} />
          </div>
        )}

        {/* Client type toggle */}
        {isHero ? (
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setClientType('individual')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                clientType === 'individual'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {t('contact.form.individual')}
            </button>
            <button
              type="button"
              onClick={() => setClientType('company')}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                clientType === 'company'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {t('contact.form.company')}
            </button>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.clientType')} *
            </label>
            <div className="flex rounded-lg border border-gray-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setClientType('individual')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  clientType === 'individual'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t('contact.form.individual')}
              </button>
              <button
                type="button"
                onClick={() => setClientType('company')}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  clientType === 'company'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {t('contact.form.company')}
              </button>
            </div>
          </div>
        )}

        {/* Interest */}
        {isHero ? (
          <select name="interest" required className={`${inputBase} text-gray-400`} defaultValue="">
            <option value="" disabled>{t('contact.form.interestPlaceholder')}</option>
            <option value="products">{t('contact.form.interests.products')}</option>
            <option value="solutions">{t('contact.form.interests.solutions')}</option>
            <option value="partnership">{t('contact.form.interests.partnership')}</option>
            <option value="other">{t('contact.form.interests.other')}</option>
          </select>
        ) : (
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.interestLabel')} *
            </label>
            <select id="interest" name="interest" required className={inputBase} defaultValue="">
              <option value="" disabled>—</option>
              <option value="products">{t('contact.form.interests.products')}</option>
              <option value="solutions">{t('contact.form.interests.solutions')}</option>
              <option value="partnership">{t('contact.form.interests.partnership')}</option>
              <option value="other">{t('contact.form.interests.other')}</option>
            </select>
          </div>
        )}

        {/* Error */}
        {error && <p className={`text-red-500 ${isHero ? 'text-xs text-center' : 'text-sm'}`}>{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={
            isHero
              ? 'w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 flex items-center justify-center gap-2'
              : 'group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20 disabled:opacity-60'
          }
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              {isHero ? t('hero.formSubmit') : t('contact.form.submit')}
              <svg className={`w-4 h-4 ${isHero ? '' : 'transition-transform group-hover:translate-x-1'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                {isHero ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                )}
              </svg>
            </>
          )}
        </button>
      </div>

      {isHero && <p className="text-xs text-gray-400 text-center mt-3">{t('hero.formDisclaimer')}</p>}
    </form>
  )
}
