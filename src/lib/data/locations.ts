import type { Location } from '@/lib/types'

export const locations: Location[] = [
  // ============================================================
  // USA — 52 Locations
  // ============================================================
  { slug: 'atlanta', name: 'Atlanta', countryCode: 'usa', region: 'GA', state: 'Georgia', metroType: 'metro', populationRank: 1, isActive: true },
  { slug: 'austin', name: 'Austin', countryCode: 'usa', region: 'TX', state: 'Texas', metroType: 'metro', populationRank: 2, isActive: true },
  { slug: 'baltimore', name: 'Baltimore', countryCode: 'usa', region: 'MD', state: 'Maryland', metroType: 'metro', populationRank: 3, isActive: true },
  { slug: 'birmingham', name: 'Birmingham', countryCode: 'usa', region: 'AL', state: 'Alabama', metroType: 'city', populationRank: 4, isActive: true },
  { slug: 'boston', name: 'Boston', countryCode: 'usa', region: 'MA', state: 'Massachusetts', metroType: 'metro', populationRank: 5, isActive: true },
  { slug: 'buffalo', name: 'Buffalo', countryCode: 'usa', region: 'NY', state: 'New York', metroType: 'city', populationRank: 6, isActive: true },
  { slug: 'charlotte', name: 'Charlotte', countryCode: 'usa', region: 'NC', state: 'North Carolina', metroType: 'metro', populationRank: 7, isActive: true },
  { slug: 'chicago', name: 'Chicago', countryCode: 'usa', region: 'IL', state: 'Illinois', metroType: 'metro', populationRank: 8, isActive: true },
  { slug: 'cincinnati', name: 'Cincinnati', countryCode: 'usa', region: 'OH', state: 'Ohio', metroType: 'metro', populationRank: 9, isActive: true },
  { slug: 'cleveland', name: 'Cleveland', countryCode: 'usa', region: 'OH', state: 'Ohio', metroType: 'metro', populationRank: 10, isActive: true },
  { slug: 'columbus', name: 'Columbus', countryCode: 'usa', region: 'OH', state: 'Ohio', metroType: 'metro', populationRank: 11, isActive: true },
  { slug: 'dallas-fort-worth', name: 'Dallas / Fort Worth', countryCode: 'usa', region: 'TX', state: 'Texas', metroType: 'metro', populationRank: 12, isActive: true },
  { slug: 'denver', name: 'Denver', countryCode: 'usa', region: 'CO', state: 'Colorado', metroType: 'metro', populationRank: 13, isActive: true },
  { slug: 'detroit', name: 'Detroit', countryCode: 'usa', region: 'MI', state: 'Michigan', metroType: 'metro', populationRank: 14, isActive: true },
  { slug: 'hartford', name: 'Hartford', countryCode: 'usa', region: 'CT', state: 'Connecticut', metroType: 'city', populationRank: 15, isActive: true },
  { slug: 'houston', name: 'Houston', countryCode: 'usa', region: 'TX', state: 'Texas', metroType: 'metro', populationRank: 16, isActive: true },
  { slug: 'indianapolis', name: 'Indianapolis', countryCode: 'usa', region: 'IN', state: 'Indiana', metroType: 'metro', populationRank: 17, isActive: true },
  { slug: 'jacksonville', name: 'Jacksonville', countryCode: 'usa', region: 'FL', state: 'Florida', metroType: 'metro', populationRank: 18, isActive: true },
  { slug: 'kansas-city', name: 'Kansas City', countryCode: 'usa', region: 'MO', state: 'Missouri', metroType: 'metro', populationRank: 19, isActive: true },
  { slug: 'las-vegas', name: 'Las Vegas', countryCode: 'usa', region: 'NV', state: 'Nevada', metroType: 'metro', populationRank: 20, isActive: true },
  { slug: 'los-angeles', name: 'Los Angeles', countryCode: 'usa', region: 'CA', state: 'California', metroType: 'metro', populationRank: 21, isActive: true },
  { slug: 'louisville', name: 'Louisville', countryCode: 'usa', region: 'KY', state: 'Kentucky', metroType: 'city', populationRank: 22, isActive: true },
  { slug: 'memphis', name: 'Memphis', countryCode: 'usa', region: 'TN', state: 'Tennessee', metroType: 'city', populationRank: 23, isActive: true },
  { slug: 'miami-fort-lauderdale', name: 'Miami / Fort Lauderdale', countryCode: 'usa', region: 'FL', state: 'Florida', metroType: 'metro', populationRank: 24, isActive: true },
  { slug: 'milwaukee', name: 'Milwaukee', countryCode: 'usa', region: 'WI', state: 'Wisconsin', metroType: 'metro', populationRank: 25, isActive: true },
  { slug: 'minneapolis-st-paul', name: 'Minneapolis / St. Paul', countryCode: 'usa', region: 'MN', state: 'Minnesota', metroType: 'metro', populationRank: 26, isActive: true },
  { slug: 'nashville', name: 'Nashville', countryCode: 'usa', region: 'TN', state: 'Tennessee', metroType: 'metro', populationRank: 27, isActive: true },
  { slug: 'new-orleans', name: 'New Orleans', countryCode: 'usa', region: 'LA', state: 'Louisiana', metroType: 'city', populationRank: 28, isActive: true },
  { slug: 'new-york-city', name: 'New York City', countryCode: 'usa', region: 'NY', state: 'New York', metroType: 'metro', populationRank: 29, isActive: true },
  { slug: 'oklahoma-city', name: 'Oklahoma City', countryCode: 'usa', region: 'OK', state: 'Oklahoma', metroType: 'city', populationRank: 30, isActive: true },
  { slug: 'orlando', name: 'Orlando', countryCode: 'usa', region: 'FL', state: 'Florida', metroType: 'metro', populationRank: 31, isActive: true },
  { slug: 'philadelphia', name: 'Philadelphia', countryCode: 'usa', region: 'PA', state: 'Pennsylvania', metroType: 'metro', populationRank: 32, isActive: true },
  { slug: 'phoenix', name: 'Phoenix', countryCode: 'usa', region: 'AZ', state: 'Arizona', metroType: 'metro', populationRank: 33, isActive: true },
  { slug: 'pittsburgh', name: 'Pittsburgh', countryCode: 'usa', region: 'PA', state: 'Pennsylvania', metroType: 'metro', populationRank: 34, isActive: true },
  { slug: 'portland-vancouver', name: 'Portland / Vancouver', countryCode: 'usa', region: 'OR', state: 'Oregon', metroType: 'metro', populationRank: 35, isActive: true },
  { slug: 'providence', name: 'Providence', countryCode: 'usa', region: 'RI', state: 'Rhode Island', metroType: 'city', populationRank: 36, isActive: true },
  { slug: 'raleigh-cary', name: 'Raleigh / Cary', countryCode: 'usa', region: 'NC', state: 'North Carolina', metroType: 'metro', populationRank: 37, isActive: true },
  { slug: 'richmond', name: 'Richmond', countryCode: 'usa', region: 'VA', state: 'Virginia', metroType: 'city', populationRank: 38, isActive: true },
  { slug: 'riverside-san-bernardino', name: 'Riverside / San Bernardino', countryCode: 'usa', region: 'CA', state: 'California', metroType: 'metro', populationRank: 39, isActive: true },
  { slug: 'rochester', name: 'Rochester', countryCode: 'usa', region: 'NY', state: 'New York', metroType: 'city', populationRank: 40, isActive: true },
  { slug: 'sacramento', name: 'Sacramento', countryCode: 'usa', region: 'CA', state: 'California', metroType: 'metro', populationRank: 41, isActive: true },
  { slug: 'salt-lake-city', name: 'Salt Lake City', countryCode: 'usa', region: 'UT', state: 'Utah', metroType: 'city', populationRank: 42, isActive: true },
  { slug: 'san-antonio', name: 'San Antonio', countryCode: 'usa', region: 'TX', state: 'Texas', metroType: 'metro', populationRank: 43, isActive: true },
  { slug: 'san-diego-carlsbad', name: 'San Diego / Carlsbad', countryCode: 'usa', region: 'CA', state: 'California', metroType: 'metro', populationRank: 44, isActive: true },
  { slug: 'san-francisco-oakland', name: 'San Francisco / Oakland', countryCode: 'usa', region: 'CA', state: 'California', metroType: 'metro', populationRank: 45, isActive: true },
  { slug: 'san-jose', name: 'San Jose', countryCode: 'usa', region: 'CA', state: 'California', metroType: 'metro', populationRank: 46, isActive: true },
  { slug: 'seattle-tacoma', name: 'Seattle / Tacoma', countryCode: 'usa', region: 'WA', state: 'Washington', metroType: 'metro', populationRank: 47, isActive: true },
  { slug: 'st-louis', name: 'St. Louis', countryCode: 'usa', region: 'MO', state: 'Missouri', metroType: 'metro', populationRank: 48, isActive: true },
  { slug: 'tampa-st-petersburg', name: 'Tampa / St. Petersburg', countryCode: 'usa', region: 'FL', state: 'Florida', metroType: 'metro', populationRank: 49, isActive: true },
  { slug: 'tucson', name: 'Tucson', countryCode: 'usa', region: 'AZ', state: 'Arizona', metroType: 'city', populationRank: 50, isActive: true },
  { slug: 'virginia-beach', name: 'Virginia Beach', countryCode: 'usa', region: 'VA', state: 'Virginia', metroType: 'metro', populationRank: 51, isActive: true },
  { slug: 'washington-dc', name: 'Washington DC', countryCode: 'usa', region: 'DC', state: 'District of Columbia', metroType: 'metro', populationRank: 52, isActive: true },

  // ============================================================
  // CANADA — 12 Locations
  // ============================================================
  { slug: 'calgary', name: 'Calgary', countryCode: 'canada', region: 'AB', state: 'Alberta', metroType: 'metro', populationRank: 1, isActive: true },
  { slug: 'edmonton', name: 'Edmonton', countryCode: 'canada', region: 'AB', state: 'Alberta', metroType: 'metro', populationRank: 2, isActive: true },
  { slug: 'hamilton-burlington', name: 'Hamilton (Burlington)', countryCode: 'canada', region: 'ON', state: 'Ontario', metroType: 'metro', populationRank: 3, isActive: true },
  { slug: 'kitchener-cambridge', name: 'Kitchener (Cambridge, Waterloo)', countryCode: 'canada', region: 'ON', state: 'Ontario', metroType: 'metro', populationRank: 4, isActive: true },
  { slug: 'london-on', name: 'London', countryCode: 'canada', region: 'ON', state: 'Ontario', metroType: 'city', populationRank: 5, isActive: true },
  { slug: 'montreal-laval', name: 'Montreal (Laval)', countryCode: 'canada', region: 'QC', state: 'Quebec', metroType: 'metro', populationRank: 6, isActive: true },
  { slug: 'ottawa-gatineau', name: 'Ottawa-Gatineau', countryCode: 'canada', region: 'ON', state: 'Ontario', metroType: 'metro', populationRank: 7, isActive: true },
  { slug: 'quebec-city', name: 'Quebec City (Levis)', countryCode: 'canada', region: 'QC', state: 'Quebec', metroType: 'metro', populationRank: 8, isActive: true },
  { slug: 'toronto-mississauga', name: 'Toronto (Mississauga)', countryCode: 'canada', region: 'ON', state: 'Ontario', metroType: 'metro', populationRank: 9, isActive: true },
  { slug: 'vancouver-surrey', name: 'Vancouver (Surrey, Burnaby)', countryCode: 'canada', region: 'BC', state: 'British Columbia', metroType: 'metro', populationRank: 10, isActive: true },
  { slug: 'st-catharines-niagara', name: 'St. Catharines-Niagara', countryCode: 'canada', region: 'ON', state: 'Ontario', metroType: 'metro', populationRank: 11, isActive: true },
  { slug: 'winnipeg', name: 'Winnipeg', countryCode: 'canada', region: 'MB', state: 'Manitoba', metroType: 'metro', populationRank: 12, isActive: true },

  // ============================================================
  // UNITED KINGDOM — 24 Locations
  // ============================================================
  { slug: 'birkenhead', name: 'Birkenhead', countryCode: 'uk', region: 'Merseyside', state: 'England', metroType: 'city', populationRank: 1, isActive: true },
  { slug: 'bournemouth', name: 'Bournemouth', countryCode: 'uk', region: 'Dorset', state: 'England', metroType: 'city', populationRank: 2, isActive: true },
  { slug: 'brighton-worthing', name: 'Brighton / Worthing / Littlehampton', countryCode: 'uk', region: 'Sussex', state: 'England', metroType: 'city', populationRank: 3, isActive: true },
  { slug: 'bristol', name: 'Bristol', countryCode: 'uk', region: 'South West', state: 'England', metroType: 'metro', populationRank: 4, isActive: true },
  { slug: 'cardiff', name: 'Cardiff', countryCode: 'uk', region: 'South Wales', state: 'Wales', metroType: 'metro', populationRank: 5, isActive: true },
  { slug: 'coventry-bedworth', name: 'Coventry / Bedworth', countryCode: 'uk', region: 'West Midlands', state: 'England', metroType: 'city', populationRank: 6, isActive: true },
  { slug: 'edinburgh', name: 'Edinburgh', countryCode: 'uk', region: 'Scotland', state: 'Scotland', metroType: 'metro', populationRank: 7, isActive: true },
  { slug: 'greater-belfast', name: 'Greater Belfast', countryCode: 'uk', region: 'Northern Ireland', state: 'Northern Ireland', metroType: 'metro', populationRank: 8, isActive: true },
  { slug: 'greater-glasgow', name: 'Greater Glasgow', countryCode: 'uk', region: 'Scotland', state: 'Scotland', metroType: 'metro', populationRank: 9, isActive: true },
  { slug: 'greater-london', name: 'Greater London', countryCode: 'uk', region: 'London', state: 'England', metroType: 'metro', populationRank: 10, isActive: true },
  { slug: 'greater-manchester', name: 'Greater Manchester', countryCode: 'uk', region: 'North West', state: 'England', metroType: 'metro', populationRank: 11, isActive: true },
  { slug: 'kingston-upon-hull', name: 'Kingston upon Hull', countryCode: 'uk', region: 'Yorkshire', state: 'England', metroType: 'city', populationRank: 12, isActive: true },
  { slug: 'leicester', name: 'Leicester', countryCode: 'uk', region: 'East Midlands', state: 'England', metroType: 'city', populationRank: 13, isActive: true },
  { slug: 'liverpool', name: 'Liverpool', countryCode: 'uk', region: 'Merseyside', state: 'England', metroType: 'metro', populationRank: 14, isActive: true },
  { slug: 'nottingham', name: 'Nottingham', countryCode: 'uk', region: 'East Midlands', state: 'England', metroType: 'metro', populationRank: 15, isActive: true },
  { slug: 'portsmouth', name: 'Portsmouth', countryCode: 'uk', region: 'Hampshire', state: 'England', metroType: 'city', populationRank: 16, isActive: true },
  { slug: 'reading-wokingham', name: 'Reading / Wokingham', countryCode: 'uk', region: 'Berkshire', state: 'England', metroType: 'city', populationRank: 17, isActive: true },
  { slug: 'sheffield', name: 'Sheffield', countryCode: 'uk', region: 'South Yorkshire', state: 'England', metroType: 'metro', populationRank: 18, isActive: true },
  { slug: 'southampton', name: 'Southampton', countryCode: 'uk', region: 'Hampshire', state: 'England', metroType: 'city', populationRank: 19, isActive: true },
  { slug: 'swansea', name: 'Swansea', countryCode: 'uk', region: 'South Wales', state: 'Wales', metroType: 'city', populationRank: 20, isActive: true },
  { slug: 'teesside', name: 'Teesside', countryCode: 'uk', region: 'North East', state: 'England', metroType: 'city', populationRank: 21, isActive: true },
  { slug: 'the-potteries', name: 'The Potteries', countryCode: 'uk', region: 'Staffordshire', state: 'England', metroType: 'city', populationRank: 22, isActive: true },
  { slug: 'tyneside', name: 'Tyneside', countryCode: 'uk', region: 'North East', state: 'England', metroType: 'metro', populationRank: 23, isActive: true },
  { slug: 'west-midlands', name: 'West Midlands', countryCode: 'uk', region: 'West Midlands', state: 'England', metroType: 'metro', populationRank: 24, isActive: true },
  { slug: 'west-yorkshire', name: 'West Yorkshire', countryCode: 'uk', region: 'Yorkshire', state: 'England', metroType: 'metro', populationRank: 25, isActive: true },

  // ============================================================
  // AUSTRALIA — 8 Locations
  // ============================================================
  { slug: 'adelaide', name: 'Adelaide', countryCode: 'australia', region: 'SA', state: 'South Australia', metroType: 'metro', populationRank: 1, isActive: true },
  { slug: 'brisbane', name: 'Brisbane', countryCode: 'australia', region: 'QLD', state: 'Queensland', metroType: 'metro', populationRank: 2, isActive: true },
  { slug: 'canberra', name: 'Canberra', countryCode: 'australia', region: 'ACT', state: 'Australian Capital Territory', metroType: 'city', populationRank: 3, isActive: true },
  { slug: 'gold-coast', name: 'Gold Coast', countryCode: 'australia', region: 'QLD', state: 'Queensland', metroType: 'metro', populationRank: 4, isActive: true },
  { slug: 'melbourne', name: 'Melbourne', countryCode: 'australia', region: 'VIC', state: 'Victoria', metroType: 'metro', populationRank: 5, isActive: true },
  { slug: 'newcastle-au', name: 'Newcastle', countryCode: 'australia', region: 'NSW', state: 'New South Wales', metroType: 'city', populationRank: 6, isActive: true },
  { slug: 'perth', name: 'Perth', countryCode: 'australia', region: 'WA', state: 'Western Australia', metroType: 'metro', populationRank: 7, isActive: true },
  { slug: 'sydney', name: 'Sydney', countryCode: 'australia', region: 'NSW', state: 'New South Wales', metroType: 'metro', populationRank: 8, isActive: true },
]

// ============================================================
// Country metadata
// ============================================================

export const countryMeta: Record<string, { name: string; code: string; flag: string }> = {
  usa: { name: 'United States', code: 'US', flag: '🇺🇸' },
  canada: { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  uk: { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  australia: { name: 'Australia', code: 'AU', flag: '🇦🇺' },
}

// ============================================================
// Helper Functions
// ============================================================

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getLocationsByCountry(countryCode: string): Location[] {
  return locations
    .filter((l) => l.countryCode === countryCode && l.isActive)
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getAllActiveLocations(): Location[] {
  return locations.filter((l) => l.isActive)
}

export function getCountryCodes(): string[] {
  return Object.keys(countryMeta)
}

export function getCountryName(countryCode: string): string {
  return countryMeta[countryCode]?.name ?? countryCode
}
