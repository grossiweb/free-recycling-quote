import type { ServiceIndustry } from '@/lib/types'

// Tier 4: Top 10 Service × Industry combinations (URLs 91-100 from First 100)
export const serviceIndustries: ServiceIndustry[] = [
  { serviceSlug: 'dumpster-rental', industrySlug: 'construction', priorityScore: 10, isApproved: true, contentAngle: 'Construction sites require right-sized dumpsters for mixed C&D debris with compliance documentation for diversion rate tracking.' },
  { serviceSlug: 'dumpster-rental', industrySlug: 'contractors-builders', priorityScore: 9, isApproved: true, contentAngle: 'Contractors need flexible dumpster scheduling that matches project timelines, with quick swap-outs and multiple size options.' },
  { serviceSlug: 'electronics-recycling', industrySlug: 'corporate-offices', priorityScore: 9, isApproved: true, contentAngle: 'Corporate e-waste programs require asset tracking, data destruction certificates, and ESG-reportable recycling documentation.' },
  { serviceSlug: 'electronics-recycling', industrySlug: 'healthcare', priorityScore: 9, isApproved: true, contentAngle: 'Healthcare e-waste requires HIPAA-compliant data destruction with chain-of-custody documentation and certificates of destruction.' },
  { serviceSlug: 'scrap-metal-recycling', industrySlug: 'manufacturing', priorityScore: 9, isApproved: true, contentAngle: 'Manufacturing facilities generate consistent scrap metal volumes; buyback programs turn production waste into revenue.' },
  { serviceSlug: 'business-recycling-programs', industrySlug: 'corporate-offices', priorityScore: 8, isApproved: true, contentAngle: 'Office recycling programs cover paper, cardboard, electronics, and break room waste with employee engagement and ESG metrics.' },
  { serviceSlug: 'business-recycling-programs', industrySlug: 'warehouses-distribution-centers', priorityScore: 8, isApproved: true, contentAngle: 'Distribution center programs focus on high-volume pallet, stretch wrap, and cardboard recycling with commodity revenue sharing.' },
  { serviceSlug: 'shredding-services', industrySlug: 'healthcare', priorityScore: 8, isApproved: true, contentAngle: 'Healthcare document shredding must meet HIPAA requirements for PHI destruction with NAID-certified processes and audit trails.' },
  { serviceSlug: 'pallet-recycling', industrySlug: 'warehouses-distribution-centers', priorityScore: 9, isApproved: true, contentAngle: 'Warehouses cycle through thousands of pallets monthly; recycling programs include repair, resale, and grinding of damaged stock.' },
  { serviceSlug: 'hazardous-waste-disposal', industrySlug: 'laboratories', priorityScore: 8, isApproved: true, contentAngle: 'Lab waste disposal requires EPA manifest tracking, DOT-compliant packaging, and permitted treatment for chemical, biological, and radiological waste.' },
]

export function getServiceIndustriesByService(serviceSlug: string): ServiceIndustry[] {
  return serviceIndustries.filter(si => si.serviceSlug === serviceSlug && si.isApproved).sort((a, b) => b.priorityScore - a.priorityScore)
}

export function getServiceIndustriesByIndustry(industrySlug: string): ServiceIndustry[] {
  return serviceIndustries.filter(si => si.industrySlug === industrySlug && si.isApproved).sort((a, b) => b.priorityScore - a.priorityScore)
}

export function getApprovedServiceIndustry(serviceSlug: string, industrySlug: string): ServiceIndustry | undefined {
  return serviceIndustries.find(si => si.serviceSlug === serviceSlug && si.industrySlug === industrySlug && si.isApproved)
}

export function getAllApprovedServiceIndustries(): ServiceIndustry[] {
  return serviceIndustries.filter(si => si.isApproved)
}
