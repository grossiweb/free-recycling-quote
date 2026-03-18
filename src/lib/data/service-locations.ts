import type { ServiceLocation } from '@/lib/types'

// Tier 2: Top 40 Service × Location combinations (URLs 31-70 from First 100)
export const serviceLocations: ServiceLocation[] = [
  // ── Scrap Metal Recycling × 10 metros ──
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'chicago', priorityScore: 10, isApproved: true, contentAngle: 'Chicago\'s industrial corridor and manufacturing legacy create one of the largest scrap metal markets in the Midwest.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'houston', priorityScore: 10, isApproved: true, contentAngle: 'Houston\'s petrochemical and energy sector generates massive volumes of industrial scrap metal requiring specialized recycling.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'dallas-fort-worth', priorityScore: 9, isApproved: true, contentAngle: 'The DFW metroplex construction boom and aerospace manufacturing drive strong demand for ferrous and non-ferrous metal recycling.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'los-angeles', priorityScore: 9, isApproved: true, contentAngle: 'LA\'s port operations, entertainment industry, and construction activity create diverse scrap metal recycling streams.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'atlanta', priorityScore: 8, isApproved: true, contentAngle: 'Atlanta\'s rapid growth and commercial development make it a key hub for construction and renovation scrap metal recycling in the Southeast.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'detroit', priorityScore: 9, isApproved: true, contentAngle: 'Detroit\'s automotive manufacturing heritage and ongoing reindustrialization generate significant volumes of ferrous and specialty metal scrap.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'philadelphia', priorityScore: 8, isApproved: true, contentAngle: 'Philadelphia\'s industrial base, port operations, and dense commercial infrastructure support a robust scrap metal recycling market.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'new-york-city', priorityScore: 10, isApproved: true, contentAngle: 'NYC\'s construction density, infrastructure upgrades, and commercial renovation activity generate high-volume scrap metal recycling demand.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'miami-fort-lauderdale', priorityScore: 7, isApproved: true, contentAngle: 'South Florida\'s construction boom and marine industry create unique scrap metal streams including aluminum, stainless steel, and copper.' },
  { serviceSlug: 'scrap-metal-recycling', locationSlug: 'toronto', priorityScore: 8, isApproved: true, contentAngle: 'Toronto\'s construction sector and manufacturing base drive strong demand for certified scrap metal recycling across the GTA.' },

  // ── Electronics Recycling × 10 metros ──
  { serviceSlug: 'electronics-recycling', locationSlug: 'new-york-city', priorityScore: 10, isApproved: true, contentAngle: 'NYC\'s concentration of corporate offices, financial firms, and tech companies generates massive e-waste volumes requiring certified ITAD services.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'los-angeles', priorityScore: 10, isApproved: true, contentAngle: 'LA\'s entertainment, tech, and healthcare sectors produce diverse electronics waste streams under California\'s strict e-waste regulations.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'chicago', priorityScore: 9, isApproved: true, contentAngle: 'Chicago\'s corporate headquarters density and Illinois e-waste legislation create strong demand for compliant electronics recycling.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'san-francisco-bay-area', priorityScore: 10, isApproved: true, contentAngle: 'Silicon Valley\'s tech industry generates premium e-waste streams with high precious metal recovery potential under California SB 20/50 regulations.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'seattle-tacoma', priorityScore: 8, isApproved: true, contentAngle: 'Seattle\'s tech corridor including Amazon, Microsoft, and Boeing creates substantial enterprise e-waste under Washington\'s E-Cycle program.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'austin', priorityScore: 8, isApproved: true, contentAngle: 'Austin\'s booming tech sector and Texas Computer Equipment Recycling Program drive growing demand for certified e-waste services.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'boston', priorityScore: 8, isApproved: true, contentAngle: 'Boston\'s healthcare, biotech, and university sectors generate specialized e-waste requiring HIPAA-compliant data destruction.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'toronto', priorityScore: 7, isApproved: true, contentAngle: 'Toronto\'s financial district and tech corridor generate significant corporate e-waste under Ontario\'s WEEE regulations.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'london', priorityScore: 7, isApproved: true, contentAngle: 'London\'s financial and corporate sectors require WEEE-compliant electronics recycling with GDPR-compliant data destruction.' },
  { serviceSlug: 'electronics-recycling', locationSlug: 'sydney', priorityScore: 7, isApproved: true, contentAngle: 'Sydney\'s corporate sector requires electronics recycling compliant with Australia\'s National Television and Computer Recycling Scheme.' },

  // ── Dumpster Rental × 10 metros ──
  { serviceSlug: 'dumpster-rental', locationSlug: 'chicago', priorityScore: 9, isApproved: true, contentAngle: 'Chicago\'s year-round construction activity and city permitting requirements create consistent dumpster rental demand across all container sizes.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'atlanta', priorityScore: 9, isApproved: true, contentAngle: 'Atlanta\'s rapid development and Georgia\'s C&D waste regulations drive strong demand for construction dumpster services.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'dallas-fort-worth', priorityScore: 9, isApproved: true, contentAngle: 'DFW\'s construction boom across residential and commercial sectors requires reliable dumpster delivery with Texas disposal compliance.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'houston', priorityScore: 9, isApproved: true, contentAngle: 'Houston\'s energy sector construction, hurricane recovery work, and commercial development sustain year-round dumpster rental demand.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'phoenix', priorityScore: 8, isApproved: true, contentAngle: 'Phoenix\'s explosive residential and commercial growth drives high-volume dumpster rental needs across Maricopa County.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'denver', priorityScore: 8, isApproved: true, contentAngle: 'Denver\'s construction boom and Colorado\'s sustainability focus create demand for dumpster services with high diversion rates.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'charlotte', priorityScore: 7, isApproved: true, contentAngle: 'Charlotte\'s rapid growth as a banking and logistics hub drives commercial and residential dumpster rental demand.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'raleigh-cary', priorityScore: 7, isApproved: true, contentAngle: 'The Research Triangle\'s tech-driven growth and university construction projects sustain dumpster rental demand.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'orlando', priorityScore: 7, isApproved: true, contentAngle: 'Orlando\'s tourism, hospitality, and residential construction sectors create diverse dumpster rental needs across Central Florida.' },
  { serviceSlug: 'dumpster-rental', locationSlug: 'tampa-st-petersburg', priorityScore: 7, isApproved: true, contentAngle: 'Tampa Bay\'s waterfront development, commercial growth, and hurricane preparedness drive consistent dumpster rental demand.' },

  // ── Junk Removal × 10 metros ──
  { serviceSlug: 'junk-removal', locationSlug: 'chicago', priorityScore: 9, isApproved: true, contentAngle: 'Chicago\'s dense urban environment and high tenant turnover create strong demand for commercial and residential junk removal with recycling.' },
  { serviceSlug: 'junk-removal', locationSlug: 'atlanta', priorityScore: 8, isApproved: true, contentAngle: 'Atlanta\'s corporate relocations and property management sector drive demand for office cleanout and commercial junk removal.' },
  { serviceSlug: 'junk-removal', locationSlug: 'los-angeles', priorityScore: 9, isApproved: true, contentAngle: 'LA\'s entertainment industry, frequent renovations, and strict disposal regulations create premium junk removal demand.' },
  { serviceSlug: 'junk-removal', locationSlug: 'dallas-fort-worth', priorityScore: 8, isApproved: true, contentAngle: 'DFW\'s commercial growth and property management sector sustain demand for scheduled junk removal and office cleanouts.' },
  { serviceSlug: 'junk-removal', locationSlug: 'houston', priorityScore: 8, isApproved: true, contentAngle: 'Houston\'s energy sector office turnover and residential growth drive demand for bulk junk removal with recycling.' },
  { serviceSlug: 'junk-removal', locationSlug: 'miami-fort-lauderdale', priorityScore: 7, isApproved: true, contentAngle: 'South Florida\'s hospitality renovations, seasonal property cleanouts, and condo turnover create consistent junk removal demand.' },
  { serviceSlug: 'junk-removal', locationSlug: 'phoenix', priorityScore: 7, isApproved: true, contentAngle: 'Phoenix\'s rapid residential growth and commercial development drive demand for construction debris and bulk item removal.' },
  { serviceSlug: 'junk-removal', locationSlug: 'charlotte', priorityScore: 7, isApproved: true, contentAngle: 'Charlotte\'s corporate relocations and banking sector office upgrades create steady commercial junk removal demand.' },
  { serviceSlug: 'junk-removal', locationSlug: 'raleigh-cary', priorityScore: 7, isApproved: true, contentAngle: 'The Research Triangle\'s tech campus cleanouts and university end-of-year moves drive seasonal junk removal demand.' },
  { serviceSlug: 'junk-removal', locationSlug: 'toronto', priorityScore: 7, isApproved: true, contentAngle: 'Toronto\'s high-density commercial market and Ontario waste diversion targets drive demand for junk removal with certified recycling.' },
]

export function getServiceLocationsByService(serviceSlug: string): ServiceLocation[] {
  return serviceLocations.filter(sl => sl.serviceSlug === serviceSlug && sl.isApproved).sort((a, b) => b.priorityScore - a.priorityScore)
}

export function getServiceLocationsByLocation(locationSlug: string): ServiceLocation[] {
  return serviceLocations.filter(sl => sl.locationSlug === locationSlug && sl.isApproved).sort((a, b) => b.priorityScore - a.priorityScore)
}

export function getApprovedServiceLocation(serviceSlug: string, locationSlug: string): ServiceLocation | undefined {
  return serviceLocations.find(sl => sl.serviceSlug === serviceSlug && sl.locationSlug === locationSlug && sl.isApproved)
}

export function getAllApprovedServiceLocations(): ServiceLocation[] {
  return serviceLocations.filter(sl => sl.isApproved)
}
