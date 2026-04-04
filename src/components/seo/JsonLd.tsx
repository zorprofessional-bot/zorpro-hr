'use client'

// JSON-LD structured data for SEO - all content is static/hardcoded, no user input
export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZOR',
    alternateName: ['ZOR Professional', 'ZOR Converting'],
    url: 'https://zorpro.hr',
    logo: 'https://zorpro.hr/images/logo.png',
    description: 'Professional hygiene solutions for businesses across Europe. Quality paper products manufactured in our own converting facility.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zagreb',
      addressCountry: 'HR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@zorpro.hr',
      contactType: 'sales',
      availableLanguage: ['Croatian', 'English'],
    },
    sameAs: [],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 45.815,
        longitude: 15.982,
      },
      geoRadius: '2000',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ZOR — Professional Hygiene Solutions',
    url: 'https://zorpro.hr',
    inLanguage: ['hr', 'en'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
