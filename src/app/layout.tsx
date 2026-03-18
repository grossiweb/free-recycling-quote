import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import { SITE_URL, COMPANY_NAME } from '@/lib/types'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: {
    default: 'Free Recycling Quotes | Electronics, Metal, Paper, Plastic & More',
    template: '%s | Recycling Quotes',
  },
  description: 'Get free recycling quotes for electronics, metal, paper, plastic, pallets, and hazardous materials. Nationwide pickup service since 2005.',
  keywords: 'recycling, business recycling, recycling quote, pallet recycling, electronics recycling, scrap metal recycling, waste management, free recycling pickup',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    siteName: COMPANY_NAME,
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Recycling Quotes',
  alternateName: 'Free Recycling Quotes',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/logo.png`,
  },
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
  description: 'Nationwide recycling services network providing free quotes for electronics, metal, paper, plastic, pallets, and hazardous materials recycling.',
  foundingDate: '2005',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fort Worth',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Recycling Quotes',
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, webSiteSchema]) }}
        />
      </head>
      <body className={`${jakarta.className} antialiased overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
