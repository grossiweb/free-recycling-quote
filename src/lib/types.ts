// ============================================================
// Core Entity Types
// ============================================================

export interface Service {
  slug: string
  name: string
  parentSlug: string | null
  category: 'core-recycling' | 'equipment-logistics' | 'specialized' | 'programs'
  tagline: string
  description: string
  icon: string
  image?: string
  isActive: boolean
  sortOrder: number
}

export interface Material {
  slug: string
  name: string
  parentSlug: string | null
  category: string
  depth: number
  fullPath: string
  description: string
  acceptedItems?: string[]
  icon: string
  isActive: boolean
  sortOrder: number
  phase?: number
}

export interface Industry {
  slug: string
  name: string
  parentSlug: string | null
  category: string
  depth: number
  fullPath: string
  description: string
  complianceNotes?: string
  icon: string
  isActive: boolean
  sortOrder: number
  phase?: number
}

export interface Location {
  slug: string
  name: string
  countryCode: 'usa' | 'canada' | 'uk' | 'australia'
  region: string
  state?: string
  metroType: 'city' | 'metro' | 'region'
  latitude?: number
  longitude?: number
  populationRank?: number
  isActive: boolean
}

export interface Challenge {
  slug: string
  name: string
  description: string
  icon: string
  impactStats?: Record<string, string>
  relatedServiceSlugs: string[]
  relatedIndustrySlugs: string[]
  relatedMaterialSlugs: string[]
  isActive: boolean
  sortOrder: number
}

// ============================================================
// Junction / Relationship Types
// ============================================================

export interface ServiceLocation {
  serviceSlug: string
  locationSlug: string
  priorityScore: number
  isApproved: boolean
  contentAngle?: string
  localNotes?: string
}

export interface ServiceMaterial {
  serviceSlug: string
  materialSlug: string
  priorityScore: number
  isApproved: boolean
  contentAngle?: string
}

export interface ServiceIndustry {
  serviceSlug: string
  industrySlug: string
  priorityScore: number
  isApproved: boolean
  contentAngle?: string
}

export interface ServiceIndustryLocation {
  serviceSlug: string
  industrySlug: string
  locationSlug: string
  priorityScore: number
  isApproved: boolean
  contentAngle: string
}

// ============================================================
// SEO & Content Types
// ============================================================

export type PageType =
  | 'home'
  | 'service-hub'
  | 'service'
  | 'material-hub'
  | 'material'
  | 'industry-hub'
  | 'industry'
  | 'location-hub'
  | 'location-country'
  | 'location-metro'
  | 'challenge-hub'
  | 'challenge'
  | 'service-location'
  | 'service-material'
  | 'service-industry'
  | 'triple'
  | 'faq'
  | 'blog'
  | 'blog-post'
  | 'resource'
  | 'static'
  | 'campaign'

export interface SEOPage {
  path: string
  pageType: PageType
  titleTag: string
  metaDescription: string
  h1: string
  canonicalUrl?: string
  isIndexable: boolean
  schemaTypes: string[]
  wordCountTarget: number
  status: 'draft' | 'approved' | 'published'
}

export interface ContentBlock {
  pageSlug: string
  sectionId: string
  heading?: string
  body: string
  listItems?: string[]
  ctaText?: string
  ctaHref?: string
  sortOrder: number
}

export interface FAQEntry {
  pageSlug: string
  question: string
  answer: string
  sortOrder: number
}

// ============================================================
// UI / Component Types
// ============================================================

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface HeroData {
  title: string
  subtitle?: string
  description?: string
  backgroundType?: 'gradient' | 'image' | 'dark'
  backgroundImage?: string
  ctaPrimary?: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
  badges?: string[]
}

export interface CardItem {
  title: string
  description: string
  href: string
  icon?: string
  image?: string
  badge?: string
}

export interface LinkItem {
  label: string
  href: string
  description?: string
}

export interface StepItem {
  number: number
  title: string
  description: string
  icon?: string
}

// ============================================================
// Resolution Types (for programmatic routes)
// ============================================================

export type IntersectionType = 'location' | 'material' | 'industry'

export interface IntersectionResolution {
  type: IntersectionType
  service: Service
  entity: Location | Material | Industry
  junction: ServiceLocation | ServiceMaterial | ServiceIndustry
}

export interface TripleResolution {
  service: Service
  industry: Industry
  location: Location
  junction: ServiceIndustryLocation
}

// ============================================================
// Constants
// ============================================================

export const SITE_URL = 'https://recyclingquotes.com'
export const COMPANY_NAME = 'Recycling Quotes'
export const COMPANY_PHONE = '817-946-5655'
export const COMPANY_PHONE_FORMATTED = '(817) 946-5655'
export const COMPANY_PHONE_TEL = 'tel:+18179465655'
export const COMPANY_EMAIL = 'jorge@recyclingquotes.com'
export const COMPANY_ADDRESS = {
  street: '',
  city: 'Fort Worth',
  state: 'TX',
  zip: '',
  country: 'US',
}
export const COMPANY_FOUNDING_YEAR = '2005'
