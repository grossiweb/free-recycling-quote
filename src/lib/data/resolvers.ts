import type {
  Service, Material, Industry, Location, Challenge,
  IntersectionResolution, TripleResolution,
  ServiceLocation, ServiceMaterial, ServiceIndustry,
} from '@/lib/types'

// Lazy imports to avoid circular dependencies
import { services, getServiceBySlug } from './services'
import { materials, getMaterialBySlug, getMaterialByPath } from './materials'
import { industries, getIndustryBySlug, getIndustryByPath } from './industries'
import { locations, getLocationBySlug } from './locations'
import { challenges, getChallengeBySlug } from './challenges'
import { getApprovedServiceLocation, getAllApprovedServiceLocations, getServiceLocationsByService, getServiceLocationsByLocation } from './service-locations'
import { getApprovedServiceMaterial, getAllApprovedServiceMaterials, getServiceMaterialsByService, getServiceMaterialsByMaterial } from './service-materials'
import { getApprovedServiceIndustry, getAllApprovedServiceIndustries, getServiceIndustriesByService, getServiceIndustriesByIndustry } from './service-industries'
import { getApprovedTriple, getAllApprovedTriples } from './service-industry-locations'

// ============================================================
// Route Resolution — The critical logic for [serviceSlug]/[secondSlug]
// ============================================================

/**
 * Resolves what a second slug represents for a given service.
 * Resolution order: location → material → industry
 * Returns null if no approved combination exists.
 */
export function resolveIntersection(serviceSlug: string, secondSlug: string): IntersectionResolution | null {
  const service = getServiceBySlug(serviceSlug)
  if (!service || !service.isActive) return null

  // 1. Try location (most common intersection)
  const location = getLocationBySlug(secondSlug)
  if (location?.isActive) {
    const junction = getApprovedServiceLocation(serviceSlug, secondSlug)
    if (junction) {
      return { type: 'location', service, entity: location, junction }
    }
  }

  // 2. Try material
  const material = getMaterialBySlug(secondSlug)
  if (material?.isActive) {
    const junction = getApprovedServiceMaterial(serviceSlug, secondSlug)
    if (junction) {
      return { type: 'material', service, entity: material, junction }
    }
  }

  // 3. Try industry
  const industry = getIndustryBySlug(secondSlug)
  if (industry?.isActive) {
    const junction = getApprovedServiceIndustry(serviceSlug, secondSlug)
    if (junction) {
      return { type: 'industry', service, entity: industry, junction }
    }
  }

  return null
}

/**
 * Resolves a triple page: service × industry × location
 */
export function resolveTriple(serviceSlug: string, secondSlug: string, thirdSlug: string): TripleResolution | null {
  const service = getServiceBySlug(serviceSlug)
  if (!service?.isActive) return null

  // Second = industry, Third = location
  const industry = getIndustryBySlug(secondSlug)
  const location = getLocationBySlug(thirdSlug)

  if (!industry?.isActive || !location?.isActive) return null

  const junction = getApprovedTriple(serviceSlug, secondSlug, thirdSlug)
  if (!junction) return null

  return { service, industry, location, junction }
}

// ============================================================
// Static Params Generation
// ============================================================

export function getAllIntersectionParams(): Array<{ serviceSlug: string; secondSlug: string }> {
  const params: Array<{ serviceSlug: string; secondSlug: string }> = []

  for (const sl of getAllApprovedServiceLocations()) {
    params.push({ serviceSlug: sl.serviceSlug, secondSlug: sl.locationSlug })
  }
  for (const sm of getAllApprovedServiceMaterials()) {
    params.push({ serviceSlug: sm.serviceSlug, secondSlug: sm.materialSlug })
  }
  for (const si of getAllApprovedServiceIndustries()) {
    params.push({ serviceSlug: si.serviceSlug, secondSlug: si.industrySlug })
  }

  return params
}

export function getAllTripleParams(): Array<{ serviceSlug: string; secondSlug: string; thirdSlug: string }> {
  return getAllApprovedTriples().map(t => ({
    serviceSlug: t.serviceSlug,
    secondSlug: t.industrySlug,
    thirdSlug: t.locationSlug,
  }))
}

// ============================================================
// Cross-Linking Helpers
// ============================================================

/** Get services related to a material (via approved service_materials junctions) */
export function getServicesForMaterial(materialSlug: string): Service[] {
  const junctions = getServiceMaterialsByMaterial(materialSlug)
  return junctions
    .map(j => getServiceBySlug(j.serviceSlug))
    .filter((s): s is Service => s !== undefined && s.isActive)
}

/** Get services related to an industry (via approved service_industries junctions) */
export function getServicesForIndustry(industrySlug: string): Service[] {
  const junctions = getServiceIndustriesByIndustry(industrySlug)
  return junctions
    .map(j => getServiceBySlug(j.serviceSlug))
    .filter((s): s is Service => s !== undefined && s.isActive)
}

/** Get materials related to a service (via approved service_materials junctions) */
export function getMaterialsForService(serviceSlug: string): Material[] {
  const junctions = getServiceMaterialsByService(serviceSlug)
  return junctions
    .map(j => getMaterialBySlug(j.materialSlug))
    .filter((m): m is Material => m !== undefined && m.isActive)
}

/** Get industries related to a service (via approved service_industries junctions) */
export function getIndustriesForService(serviceSlug: string): Industry[] {
  const junctions = getServiceIndustriesByService(serviceSlug)
  return junctions
    .map(j => getIndustryBySlug(j.industrySlug))
    .filter((i): i is Industry => i !== undefined && i.isActive)
}

/** Get locations where a service is available */
export function getLocationsForService(serviceSlug: string): Location[] {
  const junctions = getServiceLocationsByService(serviceSlug)
  return junctions
    .map(j => getLocationBySlug(j.locationSlug))
    .filter((l): l is Location => l !== undefined && l.isActive)
}

/** Get services available in a location */
export function getServicesInLocation(locationSlug: string): Service[] {
  const junctions = getServiceLocationsByLocation(locationSlug)
  return junctions
    .map(j => getServiceBySlug(j.serviceSlug))
    .filter((s): s is Service => s !== undefined && s.isActive)
}

/** Get sibling intersection pages (other services in same location) */
export function getSiblingServiceLocations(serviceSlug: string, locationSlug: string): Array<{ service: Service; location: Location }> {
  const junctions = getServiceLocationsByLocation(locationSlug)
  return junctions
    .filter(j => j.serviceSlug !== serviceSlug)
    .map(j => {
      const service = getServiceBySlug(j.serviceSlug)
      const location = getLocationBySlug(j.locationSlug)
      if (service?.isActive && location?.isActive) return { service, location }
      return null
    })
    .filter((item): item is { service: Service; location: Location } => item !== null)
}

// ============================================================
// Re-exports for convenience
// ============================================================

export {
  getServiceBySlug,
  getMaterialBySlug,
  getMaterialByPath,
  getIndustryBySlug,
  getIndustryByPath,
  getLocationBySlug,
  getChallengeBySlug,
}

export { services } from './services'
export { materials } from './materials'
export { industries } from './industries'
export { locations } from './locations'
export { challenges } from './challenges'
