import type {
  Service,
  Location,
  Industry,
  BreadcrumbItem,
} from '@/lib/types'

import {
  SITE_URL,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  COMPANY_FOUNDING_YEAR,
} from '@/lib/types'

// ============================================================
// Organization & WebSite Schemas
// ============================================================

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Recycling Quotes',
    alternateName: 'Free Recycling Quotes',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-817-946-5655',
      contactType: 'sales',
      areaServed: ['US', 'CA', 'GB', 'AU'],
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/recyclingquotes',
      'https://www.facebook.com/recyclingquotes',
    ],
    description:
      'Get free recycling quotes from top recycling service providers. Compare prices for commercial recycling, waste management, and sustainability programs.',
    foundingDate: COMPANY_FOUNDING_YEAR,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_ADDRESS.city,
      addressRegion: COMPANY_ADDRESS.state,
      addressCountry: COMPANY_ADDRESS.country,
    },
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY_NAME,
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

// ============================================================
// Breadcrumb Schema
// ============================================================

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  }
}

// ============================================================
// Service Schema
// ============================================================

export function generateServiceSchema(
  service: Service,
  options?: { location?: Location; industry?: Industry }
) {
  const location = options?.location
  const industry = options?.industry

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}/#service`,
    name: service.name,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    serviceType: service.name,
    areaServed: location
      ? {
          '@type': 'City',
          name: location.name,
          ...(location.state && {
            containedInPlace: {
              '@type': 'State',
              name: location.state,
            },
          }),
        }
      : {
          '@type': 'Country',
          name: 'United States',
        },
  }

  if (industry) {
    schema.audience = {
      '@type': 'Audience',
      audienceType: industry.name,
    }
  }

  if (service.parentSlug === null) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${service.name} Services`,
      itemListElement: [],
    }
  }

  return schema
}

// ============================================================
// Local Business Schema
// ============================================================

export function generateLocalBusinessSchema(
  location: Location,
  service?: Service
) {
  const name = service
    ? `${COMPANY_NAME} - ${service.name} ${location.name}`
    : `${COMPANY_NAME} - ${location.name}`

  const url = service
    ? `${SITE_URL}/services/${service.slug}/${location.slug}`
    : `${SITE_URL}/locations/${location.slug}`

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}/#localbusiness`,
    name,
    url,
    telephone: `+1-${COMPANY_PHONE}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      ...(location.state && { addressRegion: location.state }),
      addressCountry: location.countryCode.toUpperCase(),
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
    },
    parentOrganization: {
      '@id': `${SITE_URL}/#organization`,
    },
  }

  if (location.latitude != null && location.longitude != null) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude,
    }
  }

  return schema
}

// ============================================================
// FAQ Page Schema
// ============================================================

export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ============================================================
// WebPage Schema
// ============================================================

export function generateWebPageSchema(options: {
  name: string
  description: string
  url: string
  about?: string[]
  mentions?: string[]
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${options.url}/#webpage`,
    name: options.name,
    description: options.description,
    url: options.url,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    speakable: generateSpeakableSchema(),
  }

  if (options.about && options.about.length > 0) {
    schema.about = options.about.map((topic) => ({
      '@type': 'Thing',
      name: topic,
    }))
  }

  if (options.mentions && options.mentions.length > 0) {
    schema.mentions = options.mentions.map((topic) => ({
      '@type': 'Thing',
      name: topic,
    }))
  }

  return schema
}

// ============================================================
// Article Schema
// ============================================================

export function generateArticleSchema(options: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${options.url}/#article`,
    headline: options.headline,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    ...(options.image && { image: options.image }),
    author: {
      '@id': `${SITE_URL}/#organization`,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
  }
}

// ============================================================
// Speakable Schema
// ============================================================

export function generateSpeakableSchema(selectors?: string[]) {
  const defaultSelectors = [
    '.definition-block',
    '.faq-answer',
    '.process-summary',
    '.stats-block',
  ]

  return {
    '@type': 'SpeakableSpecification',
    cssSelector: selectors ?? defaultSelectors,
  }
}

// ============================================================
// Master Page Schema Generator
// ============================================================

export function getSchemaForPage(
  pageType: string,
  data: Record<string, unknown>
): object[] {
  const schemas: object[] = []

  switch (pageType) {
    case 'home': {
      schemas.push(generateOrganizationSchema())
      schemas.push(generateWebSiteSchema())
      schemas.push(
        generateWebPageSchema({
          name: (data.name as string) ?? `${COMPANY_NAME} - Home`,
          description:
            (data.description as string) ??
            'Get free recycling quotes from top providers.',
          url: SITE_URL,
        })
      )
      break
    }

    case 'service': {
      const service = data.service as Service
      schemas.push(generateServiceSchema(service))
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'material': {
      schemas.push(
        generateWebPageSchema({
          name: data.name as string,
          description: data.description as string,
          url: data.url as string,
          about: data.about as string[] | undefined,
        })
      )
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'industry': {
      schemas.push(
        generateWebPageSchema({
          name: data.name as string,
          description: data.description as string,
          url: data.url as string,
          about: data.about as string[] | undefined,
        })
      )
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'location-metro': {
      const location = data.location as Location
      schemas.push(generateLocalBusinessSchema(location))
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'challenge': {
      schemas.push(
        generateWebPageSchema({
          name: data.name as string,
          description: data.description as string,
          url: data.url as string,
          about: data.about as string[] | undefined,
        })
      )
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'service-location': {
      const service = data.service as Service
      const location = data.location as Location
      schemas.push(generateServiceSchema(service, { location }))
      schemas.push(generateLocalBusinessSchema(location, service))
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'service-material': {
      const service = data.service as Service
      schemas.push(generateServiceSchema(service))
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'service-industry': {
      const service = data.service as Service
      const industry = data.industry as Industry | undefined
      schemas.push(generateServiceSchema(service, { industry }))
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'triple': {
      const service = data.service as Service
      const location = data.location as Location
      const industry = data.industry as Industry | undefined
      schemas.push(generateServiceSchema(service, { location, industry }))
      schemas.push(generateLocalBusinessSchema(location, service))
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      break
    }

    case 'faq': {
      if (data.faqs) {
        schemas.push(
          generateFAQPageSchema(
            data.faqs as Array<{ question: string; answer: string }>
          )
        )
      }
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      break
    }

    case 'blog-post': {
      schemas.push(
        generateArticleSchema({
          headline: data.headline as string,
          description: data.description as string,
          url: data.url as string,
          datePublished: data.datePublished as string,
          dateModified: data.dateModified as string,
          image: data.image as string | undefined,
        })
      )
      if (data.breadcrumbs) {
        schemas.push(
          generateBreadcrumbSchema(data.breadcrumbs as BreadcrumbItem[])
        )
      }
      break
    }

    default:
      break
  }

  return schemas
}
