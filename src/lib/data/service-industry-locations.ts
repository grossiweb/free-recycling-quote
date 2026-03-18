import type { ServiceIndustryLocation } from '@/lib/types'

// Wave 2 Triple pages (not in first 100 but seeded for future)
export const serviceIndustryLocations: ServiceIndustryLocation[] = [
  // These will be enabled in Wave 2 after first 100 URLs are indexed
]

export function getApprovedTriple(serviceSlug: string, industrySlug: string, locationSlug: string): ServiceIndustryLocation | undefined {
  return serviceIndustryLocations.find(
    sil => sil.serviceSlug === serviceSlug && sil.industrySlug === industrySlug && sil.locationSlug === locationSlug && sil.isApproved
  )
}

export function getAllApprovedTriples(): ServiceIndustryLocation[] {
  return serviceIndustryLocations.filter(sil => sil.isApproved)
}

export function getTriplesByServiceAndIndustry(serviceSlug: string, industrySlug: string): ServiceIndustryLocation[] {
  return serviceIndustryLocations.filter(
    sil => sil.serviceSlug === serviceSlug && sil.industrySlug === industrySlug && sil.isApproved
  ).sort((a, b) => b.priorityScore - a.priorityScore)
}
