import type { ServiceMaterial } from '@/lib/types'

// Tier 3: Top 20 Service × Material combinations (URLs 71-90 from First 100)
export const serviceMaterials: ServiceMaterial[] = [
  // ── Scrap Metal Recycling × Metals ──
  { serviceSlug: 'scrap-metal-recycling', materialSlug: 'copper', priorityScore: 10, isApproved: true, contentAngle: 'Copper commands premium pricing due to high conductivity demand; recycling copper saves 85% of the energy needed for virgin production.' },
  { serviceSlug: 'scrap-metal-recycling', materialSlug: 'aluminum', priorityScore: 9, isApproved: true, contentAngle: 'Aluminum recycling saves 95% of production energy; beverage cans, extrusions, and industrial scrap all have strong commodity value.' },
  { serviceSlug: 'scrap-metal-recycling', materialSlug: 'steel', priorityScore: 9, isApproved: true, contentAngle: 'Steel is the most recycled material on earth; structural steel, automotive scrap, and appliances maintain consistent market value.' },
  { serviceSlug: 'scrap-metal-recycling', materialSlug: 'brass', priorityScore: 8, isApproved: true, contentAngle: 'Brass scrap from plumbing, fixtures, and ammunition casings holds strong value due to copper and zinc content.' },

  // ── Electronics Recycling × Electronics ──
  { serviceSlug: 'electronics-recycling', materialSlug: 'cell-phones', priorityScore: 10, isApproved: true, contentAngle: 'Cell phones contain gold, palladium, and rare earth elements; NIST 800-88 data destruction is required before material recovery.' },
  { serviceSlug: 'electronics-recycling', materialSlug: 'computers-laptops', priorityScore: 10, isApproved: true, contentAngle: 'Computers and laptops require certified data destruction before recycling; components contain recoverable gold, copper, and precious metals.' },
  { serviceSlug: 'electronics-recycling', materialSlug: 'tablets', priorityScore: 8, isApproved: true, contentAngle: 'Tablets require specialized battery handling and data wipe procedures before precious metal recovery from circuit boards.' },
  { serviceSlug: 'electronics-recycling', materialSlug: 'circuit-boards', priorityScore: 7, isApproved: true, contentAngle: 'Circuit boards contain the highest concentration of precious metals per weight of any e-waste component, making them the most valuable for recycling.' },
  { serviceSlug: 'electronics-recycling', materialSlug: 'wires-cables', priorityScore: 7, isApproved: true, contentAngle: 'Wire and cable recycling recovers copper and aluminum conductors through granulation and separation, with insulation materials processed separately.' },

  // ── Cardboard & Paper Recycling × Paper ──
  { serviceSlug: 'cardboard-paper-recycling', materialSlug: 'cardboard', priorityScore: 9, isApproved: true, contentAngle: 'OCC (Old Corrugated Cardboard) is one of the highest-volume recyclables in commercial settings; baling increases commodity value significantly.' },
  { serviceSlug: 'cardboard-paper-recycling', materialSlug: 'office-paper', priorityScore: 8, isApproved: true, contentAngle: 'Mixed office paper and high-grade white paper command different commodity prices; proper sorting maximizes recycling revenue.' },

  // ── Hazardous Waste Disposal × Hazardous Materials ──
  { serviceSlug: 'hazardous-waste-disposal', materialSlug: 'batteries', priorityScore: 9, isApproved: true, contentAngle: 'Battery recycling covers lithium-ion, lead-acid, NiCd, and alkaline types, each requiring different handling under EPA Universal Waste rules.' },
  { serviceSlug: 'hazardous-waste-disposal', materialSlug: 'light-bulbs', priorityScore: 7, isApproved: true, contentAngle: 'Fluorescent lamps and HID bulbs contain mercury requiring EPA-compliant handling; LED bulbs contain recoverable metals and circuit components.' },
  { serviceSlug: 'hazardous-waste-disposal', materialSlug: 'medical-waste', priorityScore: 8, isApproved: true, contentAngle: 'Medical waste disposal requires OSHA bloodborne pathogen compliance, DOT shipping requirements, and state health department documentation.' },

  // ── Pallet Recycling × Pallets ──
  { serviceSlug: 'pallet-recycling', materialSlug: 'wooden-pallets', priorityScore: 10, isApproved: true, contentAngle: 'Wooden pallets are repaired and resold when possible; damaged pallets are ground into mulch, animal bedding, or biomass fuel.' },
  { serviceSlug: 'pallet-recycling', materialSlug: 'plastic-pallets', priorityScore: 8, isApproved: true, contentAngle: 'Plastic pallets are ground and reprocessed into new pallets or other HDPE products, with near-infinite recyclability.' },

  // ── Product Destruction × Electronics ──
  { serviceSlug: 'product-destruction', materialSlug: 'electronics', priorityScore: 8, isApproved: true, contentAngle: 'Certified product destruction for electronics ensures brand protection, data security, and prevents gray-market resale of obsolete inventory.' },

  // ── Shredding Services × Paper ──
  { serviceSlug: 'shredding-services', materialSlug: 'office-paper', priorityScore: 8, isApproved: true, contentAngle: 'Secure document shredding meets NAID AAA standards with on-site or plant-based options and certificates of destruction.' },

  // ── Junk Removal × Commercial Properties ──
  { serviceSlug: 'junk-removal', materialSlug: 'junk', priorityScore: 7, isApproved: true, contentAngle: 'Commercial property junk removal covers office furniture, fixtures, equipment, and debris with maximum diversion from landfill.' },

  // ── Business Recycling Programs × Cardboard ──
  { serviceSlug: 'business-recycling-programs', materialSlug: 'cardboard', priorityScore: 8, isApproved: true, contentAngle: 'Cardboard recycling programs for businesses include container placement, scheduled pickup, baling equipment, and commodity revenue sharing.' },
]

export function getServiceMaterialsByService(serviceSlug: string): ServiceMaterial[] {
  return serviceMaterials.filter(sm => sm.serviceSlug === serviceSlug && sm.isApproved).sort((a, b) => b.priorityScore - a.priorityScore)
}

export function getServiceMaterialsByMaterial(materialSlug: string): ServiceMaterial[] {
  return serviceMaterials.filter(sm => sm.materialSlug === materialSlug && sm.isApproved).sort((a, b) => b.priorityScore - a.priorityScore)
}

export function getApprovedServiceMaterial(serviceSlug: string, materialSlug: string): ServiceMaterial | undefined {
  return serviceMaterials.find(sm => sm.serviceSlug === serviceSlug && sm.materialSlug === materialSlug && sm.isApproved)
}

export function getAllApprovedServiceMaterials(): ServiceMaterial[] {
  return serviceMaterials.filter(sm => sm.isApproved)
}
