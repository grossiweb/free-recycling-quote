import type { Challenge } from '@/lib/types'

export const challenges: Challenge[] = [
  {
    slug: 'ewaste-compliance',
    name: 'E-Waste Compliance & Data Security',
    description: 'Electronic waste disposal requires compliance with federal and state regulations including EPA guidelines, R2 standards, and data destruction protocols under NIST 800-88. Non-compliance exposes organizations to fines ranging from $25,000 to $50,000 per violation, plus liability for data breaches on improperly disposed devices.',
    icon: 'security',
    impactStats: {
      'E-waste generated globally (2022)': '62 million tonnes (WHO)',
      'Average fine per EPA violation': '$25,000–$50,000',
      'Data breach average cost': '$4.45 million (IBM, 2023)',
      'E-waste recycled properly': 'Less than 20% globally',
    },
    relatedServiceSlugs: ['electronics-recycling', 'product-destruction', 'shredding-services'],
    relatedIndustrySlugs: ['healthcare', 'corporate-offices', 'banking-finance', 'education'],
    relatedMaterialSlugs: ['electronics', 'computers-laptops', 'cell-phones', 'circuit-boards'],
    isActive: true,
    sortOrder: 1,
  },
  {
    slug: 'waste-diversion',
    name: 'Waste Diversion & Zero Landfill',
    description: 'Achieving high waste diversion rates is increasingly required by corporate sustainability mandates, municipal regulations, and LEED certification standards. Organizations typically generate 2-5 tons of recyclable waste per employee annually, yet average diversion rates remain below 35% without a structured program.',
    icon: 'compost',
    impactStats: {
      'Average corporate diversion rate': '34% without program',
      'Achievable diversion rate': '85–95% with structured program',
      'Landfill cost increase (annual)': '3–5% year over year',
      'LEED points for waste diversion': 'Up to 2 points (MRc2)',
    },
    relatedServiceSlugs: ['business-recycling-programs', 'waste-audits-consulting', 'material-recycling-solutions'],
    relatedIndustrySlugs: ['corporate-offices', 'manufacturing', 'retail', 'hospitality'],
    relatedMaterialSlugs: ['paper-cardboard', 'plastics', 'metals'],
    isActive: true,
    sortOrder: 2,
  },
  {
    slug: 'esg-reporting',
    name: 'ESG Reporting & Sustainability Documentation',
    description: 'Environmental, Social, and Governance reporting now affects access to capital, insurance rates, and procurement eligibility. Investors managing $121 trillion in assets now require ESG disclosures. Accurate recycling metrics are a core component of the Environmental pillar, but most organizations lack the documentation infrastructure to report them.',
    icon: 'monitoring',
    impactStats: {
      'Assets requiring ESG disclosure': '$121 trillion (PRI)',
      'Companies reporting ESG data': '96% of S&P 500',
      'Procurement contracts requiring ESG': '73% of Fortune 500 RFPs',
      'Carbon offset per ton recycled': 'Varies by material (1.5–10 tonnes CO2e)',
    },
    relatedServiceSlugs: ['waste-audits-consulting', 'business-recycling-programs'],
    relatedIndustrySlugs: ['corporate-offices', 'manufacturing', 'banking-finance'],
    relatedMaterialSlugs: ['electronics', 'metals', 'paper-cardboard', 'plastics'],
    isActive: true,
    sortOrder: 3,
  },
  {
    slug: 'hazardous-waste',
    name: 'Hazardous Waste Management',
    description: 'Hazardous waste generation requires EPA manifest tracking, licensed transportation, and disposal at permitted facilities under RCRA regulations. Improper handling creates personal liability for facility managers and can result in Superfund cleanup obligations costing millions of dollars.',
    icon: 'warning',
    impactStats: {
      'RCRA violations per year (US)': '3,000+ enforcement actions',
      'Average Superfund cleanup cost': '$12–$50 million per site',
      'Hazardous waste generated (US)': '35+ million tons annually',
      'Personal liability exposure': 'Criminal penalties up to $50,000/day',
    },
    relatedServiceSlugs: ['hazardous-waste-disposal', 'waste-audits-consulting'],
    relatedIndustrySlugs: ['healthcare', 'manufacturing', 'laboratories'],
    relatedMaterialSlugs: ['hazardous-materials', 'batteries', 'chemicals', 'medical-waste'],
    isActive: true,
    sortOrder: 4,
  },
  {
    slug: 'cost-reduction',
    name: 'Recycling Cost Reduction',
    description: 'Waste management typically ranks among the top 10 controllable expenses for mid-size businesses, yet most organizations overpay due to inefficient contracts, contamination penalties, and failure to capture commodity value from recyclable materials. A structured recycling program can reduce total waste costs by 20-40%.',
    icon: 'savings',
    impactStats: {
      'Typical waste cost reduction': '20–40% with optimized program',
      'Scrap metal revenue potential': '$50–$300/ton depending on type',
      'Contamination surcharge': '15–25% of hauling cost',
      'Average waste audit savings': '$15,000–$75,000/year',
    },
    relatedServiceSlugs: ['waste-audits-consulting', 'scrap-metal-recycling', 'business-recycling-programs'],
    relatedIndustrySlugs: ['manufacturing', 'retail', 'logistics'],
    relatedMaterialSlugs: ['metals', 'paper-cardboard', 'pallets', 'plastics'],
    isActive: true,
    sortOrder: 5,
  },
  {
    slug: 'program-setup',
    name: 'Recycling Program Setup & Management',
    description: 'Launching a recycling program from scratch requires vendor evaluation, container placement, employee training, material stream analysis, and ongoing performance tracking. Without expertise, organizations typically spend 6-12 months reaching operational maturity and waste 30% of their budget on preventable mistakes.',
    icon: 'assignment',
    impactStats: {
      'Time to program maturity': '6–12 months (typical)',
      'Budget wasted on setup mistakes': '~30% without guidance',
      'Employee participation rate': '40% without training, 85% with',
      'Programs that fail in year 1': '25% due to poor setup',
    },
    relatedServiceSlugs: ['business-recycling-programs', 'waste-audits-consulting', 'collection-events'],
    relatedIndustrySlugs: ['corporate-offices', 'retail', 'education', 'hospitality'],
    relatedMaterialSlugs: ['paper-cardboard', 'plastics', 'electronics'],
    isActive: true,
    sortOrder: 6,
  },
  {
    slug: 'supply-chain-sustainability',
    name: 'Supply Chain Sustainability',
    description: 'Scope 3 emissions from supply chain waste now account for 65-95% of most companies\u2019 total carbon footprint. Procurement teams increasingly require recycling certifications and diversion rate documentation from vendors. Organizations without sustainable supply chain practices face exclusion from major contracts.',
    icon: 'hub',
    impactStats: {
      'Scope 3 share of total emissions': '65–95% for most companies',
      'Contracts lost to sustainability gaps': '18% of B2B RFPs (2023)',
      'Supply chain waste reduction target': '50% by 2030 (UN SDG 12)',
      'Circular economy market value': '$4.5 trillion by 2030',
    },
    relatedServiceSlugs: ['pallet-recycling', 'business-recycling-programs', 'material-recycling-solutions'],
    relatedIndustrySlugs: ['manufacturing', 'logistics', 'retail'],
    relatedMaterialSlugs: ['pallets', 'plastics', 'paper-cardboard'],
    isActive: true,
    sortOrder: 7,
  },
  {
    slug: 'cd-waste-compliance',
    name: 'C&D Waste Compliance',
    description: 'Construction and demolition waste accounts for over 600 million tons annually in the US alone. Many states now mandate minimum diversion rates for C&D projects, with California requiring 65% diversion and several other states following suit. Non-compliance results in project delays, permit denials, and fines.',
    icon: 'foundation',
    impactStats: {
      'C&D waste generated (US)': '600+ million tons/year (EPA)',
      'California diversion requirement': '65% minimum (CALGreen)',
      'Average C&D diversion achievable': '75–90% with proper sorting',
      'Landfill tipping fee increase': '5–8% annually',
    },
    relatedServiceSlugs: ['dumpster-rental', 'junk-removal', 'scrap-metal-recycling'],
    relatedIndustrySlugs: ['construction', 'demolition', 'contractors-builders'],
    relatedMaterialSlugs: ['metals', 'junk'],
    isActive: true,
    sortOrder: 8,
  },
]

export function getChallengeBySlug(slug: string): Challenge | undefined {
  return challenges.find(c => c.slug === slug && c.isActive)
}

export function getAllActiveChallenges(): Challenge[] {
  return challenges.filter(c => c.isActive).sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getChallengesForService(serviceSlug: string): Challenge[] {
  return challenges.filter(c => c.isActive && c.relatedServiceSlugs.includes(serviceSlug)).sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getChallengesForIndustry(industrySlug: string): Challenge[] {
  return challenges.filter(c => c.isActive && c.relatedIndustrySlugs.includes(industrySlug)).sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getChallengesForMaterial(materialSlug: string): Challenge[] {
  return challenges.filter(c => c.isActive && c.relatedMaterialSlugs.includes(materialSlug)).sort((a, b) => a.sortOrder - b.sortOrder)
}
