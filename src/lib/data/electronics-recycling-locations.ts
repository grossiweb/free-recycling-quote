// ============================================================
// Electronics Recycling — Complete Location Database
// 96 locations across 4 countries
// ============================================================

export interface ERecyclingLocation {
  slug: string
  name: string
  displayName: string
  countrySlug: string
  countryName: string
  region: string
  state: string
  nearbyLocations: string[] // slugs of nearby cities
  geoKeywords: string[] // nearby area names for SEO
  industries: string[] // top industries in this metro
  population: string // approximate population string
  metroType: 'metro' | 'city'
}

export interface ERecyclingCountry {
  slug: string
  name: string
  code: string
  flag: string
}

export const eRecyclingCountries: ERecyclingCountry[] = [
  { slug: 'united-states', name: 'United States', code: 'US', flag: '🇺🇸' },
  { slug: 'canada', name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { slug: 'united-kingdom', name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { slug: 'australia', name: 'Australia', code: 'AU', flag: '🇦🇺' },
]

export const eRecyclingLocations: ERecyclingLocation[] = [
  // ============================================================
  // UNITED STATES — 52 Locations
  // ============================================================
  {
    slug: 'atlanta', name: 'Atlanta', displayName: 'Atlanta, GA',
    countrySlug: 'united-states', countryName: 'United States', region: 'GA', state: 'Georgia',
    nearbyLocations: ['charlotte', 'birmingham', 'jacksonville', 'nashville'],
    geoKeywords: ['Decatur', 'Marietta', 'Sandy Springs', 'Roswell', 'Alpharetta', 'Buckhead'],
    industries: ['logistics', 'healthcare', 'manufacturing', 'retail'],
    population: '6.1M metro', metroType: 'metro',
  },
  {
    slug: 'austin', name: 'Austin', displayName: 'Austin, TX',
    countrySlug: 'united-states', countryName: 'United States', region: 'TX', state: 'Texas',
    nearbyLocations: ['san-antonio', 'dallas-fort-worth', 'houston'],
    geoKeywords: ['Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'San Marcos'],
    industries: ['manufacturing', 'offices', 'education', 'government'],
    population: '2.3M metro', metroType: 'metro',
  },
  {
    slug: 'baltimore', name: 'Baltimore', displayName: 'Baltimore, MD',
    countrySlug: 'united-states', countryName: 'United States', region: 'MD', state: 'Maryland',
    nearbyLocations: ['washington-dc', 'philadelphia', 'richmond'],
    geoKeywords: ['Towson', 'Columbia', 'Annapolis', 'Ellicott City', 'Glen Burnie'],
    industries: ['healthcare', 'logistics', 'government', 'education'],
    population: '2.8M metro', metroType: 'metro',
  },
  {
    slug: 'birmingham', name: 'Birmingham', displayName: 'Birmingham, AL',
    countrySlug: 'united-states', countryName: 'United States', region: 'AL', state: 'Alabama',
    nearbyLocations: ['atlanta', 'nashville', 'memphis', 'jacksonville'],
    geoKeywords: ['Hoover', 'Vestavia Hills', 'Homewood', 'Mountain Brook', 'Bessemer'],
    industries: ['manufacturing', 'healthcare', 'construction', 'automotive'],
    population: '1.1M metro', metroType: 'city',
  },
  {
    slug: 'boston', name: 'Boston', displayName: 'Boston, MA',
    countrySlug: 'united-states', countryName: 'United States', region: 'MA', state: 'Massachusetts',
    nearbyLocations: ['providence', 'hartford', 'new-york-city'],
    geoKeywords: ['Cambridge', 'Somerville', 'Brookline', 'Quincy', 'Newton', 'Worcester'],
    industries: ['education', 'healthcare', 'offices', 'manufacturing'],
    population: '4.9M metro', metroType: 'metro',
  },
  {
    slug: 'buffalo', name: 'Buffalo', displayName: 'Buffalo, NY',
    countrySlug: 'united-states', countryName: 'United States', region: 'NY', state: 'New York',
    nearbyLocations: ['rochester', 'cleveland', 'pittsburgh'],
    geoKeywords: ['Niagara Falls', 'Cheektowaga', 'Tonawanda', 'Amherst', 'Williamsville'],
    industries: ['manufacturing', 'healthcare', 'education', 'logistics'],
    population: '1.1M metro', metroType: 'city',
  },
  {
    slug: 'charlotte', name: 'Charlotte', displayName: 'Charlotte, NC',
    countrySlug: 'united-states', countryName: 'United States', region: 'NC', state: 'North Carolina',
    nearbyLocations: ['raleigh-cary', 'atlanta', 'richmond'],
    geoKeywords: ['Concord', 'Gastonia', 'Huntersville', 'Matthews', 'Mooresville'],
    industries: ['banking-finance', 'offices', 'logistics', 'manufacturing'],
    population: '2.7M metro', metroType: 'metro',
  },
  {
    slug: 'chicago', name: 'Chicago', displayName: 'Chicago, IL',
    countrySlug: 'united-states', countryName: 'United States', region: 'IL', state: 'Illinois',
    nearbyLocations: ['milwaukee', 'indianapolis', 'detroit', 'st-louis'],
    geoKeywords: ['Naperville', 'Aurora', 'Joliet', 'Evanston', 'Schaumburg', 'Oak Brook'],
    industries: ['manufacturing', 'logistics', 'offices', 'retail'],
    population: '9.5M metro', metroType: 'metro',
  },
  {
    slug: 'cincinnati', name: 'Cincinnati', displayName: 'Cincinnati, OH',
    countrySlug: 'united-states', countryName: 'United States', region: 'OH', state: 'Ohio',
    nearbyLocations: ['columbus', 'indianapolis', 'louisville', 'cleveland'],
    geoKeywords: ['Covington', 'Mason', 'West Chester', 'Florence', 'Hamilton'],
    industries: ['manufacturing', 'healthcare', 'logistics', 'retail'],
    population: '2.2M metro', metroType: 'metro',
  },
  {
    slug: 'cleveland', name: 'Cleveland', displayName: 'Cleveland, OH',
    countrySlug: 'united-states', countryName: 'United States', region: 'OH', state: 'Ohio',
    nearbyLocations: ['columbus', 'pittsburgh', 'detroit', 'buffalo'],
    geoKeywords: ['Akron', 'Parma', 'Lakewood', 'Strongsville', 'Mentor'],
    industries: ['manufacturing', 'healthcare', 'automotive', 'logistics'],
    population: '2.1M metro', metroType: 'metro',
  },
  {
    slug: 'columbus', name: 'Columbus', displayName: 'Columbus, OH',
    countrySlug: 'united-states', countryName: 'United States', region: 'OH', state: 'Ohio',
    nearbyLocations: ['cincinnati', 'cleveland', 'pittsburgh', 'indianapolis'],
    geoKeywords: ['Dublin', 'Westerville', 'Grove City', 'Reynoldsburg', 'Hilliard'],
    industries: ['education', 'offices', 'logistics', 'healthcare'],
    population: '2.1M metro', metroType: 'metro',
  },
  {
    slug: 'dallas-fort-worth', name: 'Dallas / Fort Worth', displayName: 'Dallas-Fort Worth, TX',
    countrySlug: 'united-states', countryName: 'United States', region: 'TX', state: 'Texas',
    nearbyLocations: ['houston', 'san-antonio', 'austin', 'oklahoma-city'],
    geoKeywords: ['Arlington', 'Plano', 'Irving', 'Frisco', 'McKinney', 'Garland', 'Denton'],
    industries: ['logistics', 'manufacturing', 'offices', 'retail'],
    population: '7.6M metro', metroType: 'metro',
  },
  {
    slug: 'denver', name: 'Denver', displayName: 'Denver, CO',
    countrySlug: 'united-states', countryName: 'United States', region: 'CO', state: 'Colorado',
    nearbyLocations: ['salt-lake-city', 'kansas-city', 'phoenix'],
    geoKeywords: ['Aurora', 'Lakewood', 'Thornton', 'Arvada', 'Boulder', 'Westminster'],
    industries: ['offices', 'construction', 'healthcare', 'manufacturing'],
    population: '2.9M metro', metroType: 'metro',
  },
  {
    slug: 'detroit', name: 'Detroit', displayName: 'Detroit, MI',
    countrySlug: 'united-states', countryName: 'United States', region: 'MI', state: 'Michigan',
    nearbyLocations: ['cleveland', 'chicago', 'indianapolis', 'columbus'],
    geoKeywords: ['Dearborn', 'Sterling Heights', 'Troy', 'Warren', 'Livonia', 'Ann Arbor'],
    industries: ['automotive', 'manufacturing', 'logistics', 'healthcare'],
    population: '4.3M metro', metroType: 'metro',
  },
  {
    slug: 'hartford', name: 'Hartford', displayName: 'Hartford, CT',
    countrySlug: 'united-states', countryName: 'United States', region: 'CT', state: 'Connecticut',
    nearbyLocations: ['boston', 'providence', 'new-york-city'],
    geoKeywords: ['West Hartford', 'New Britain', 'Manchester', 'Bristol', 'Glastonbury'],
    industries: ['offices', 'healthcare', 'manufacturing', 'education'],
    population: '1.2M metro', metroType: 'city',
  },
  {
    slug: 'houston', name: 'Houston', displayName: 'Houston, TX',
    countrySlug: 'united-states', countryName: 'United States', region: 'TX', state: 'Texas',
    nearbyLocations: ['dallas-fort-worth', 'san-antonio', 'austin', 'new-orleans'],
    geoKeywords: ['The Woodlands', 'Sugar Land', 'Katy', 'Pasadena', 'Pearland', 'Cypress'],
    industries: ['manufacturing', 'logistics', 'construction', 'healthcare'],
    population: '7.1M metro', metroType: 'metro',
  },
  {
    slug: 'indianapolis', name: 'Indianapolis', displayName: 'Indianapolis, IN',
    countrySlug: 'united-states', countryName: 'United States', region: 'IN', state: 'Indiana',
    nearbyLocations: ['chicago', 'cincinnati', 'columbus', 'louisville'],
    geoKeywords: ['Carmel', 'Fishers', 'Greenwood', 'Noblesville', 'Lawrence'],
    industries: ['manufacturing', 'logistics', 'healthcare', 'automotive'],
    population: '2.1M metro', metroType: 'metro',
  },
  {
    slug: 'jacksonville', name: 'Jacksonville', displayName: 'Jacksonville, FL',
    countrySlug: 'united-states', countryName: 'United States', region: 'FL', state: 'Florida',
    nearbyLocations: ['orlando', 'atlanta', 'tampa-st-petersburg'],
    geoKeywords: ['St. Augustine', 'Orange Park', 'Ponte Vedra Beach', 'Fleming Island'],
    industries: ['logistics', 'healthcare', 'offices', 'retail'],
    population: '1.6M metro', metroType: 'metro',
  },
  {
    slug: 'kansas-city', name: 'Kansas City', displayName: 'Kansas City, MO/KS',
    countrySlug: 'united-states', countryName: 'United States', region: 'MO', state: 'Missouri',
    nearbyLocations: ['st-louis', 'oklahoma-city', 'denver', 'indianapolis'],
    geoKeywords: ['Overland Park', 'Olathe', 'Independence', 'Lee\'s Summit', 'Shawnee'],
    industries: ['logistics', 'manufacturing', 'offices', 'automotive'],
    population: '2.2M metro', metroType: 'metro',
  },
  {
    slug: 'las-vegas', name: 'Las Vegas', displayName: 'Las Vegas, NV',
    countrySlug: 'united-states', countryName: 'United States', region: 'NV', state: 'Nevada',
    nearbyLocations: ['phoenix', 'los-angeles', 'riverside-san-bernardino'],
    geoKeywords: ['Henderson', 'North Las Vegas', 'Summerlin', 'Spring Valley', 'Paradise'],
    industries: ['hospitality', 'construction', 'retail', 'offices'],
    population: '2.3M metro', metroType: 'metro',
  },
  {
    slug: 'los-angeles', name: 'Los Angeles', displayName: 'Los Angeles, CA',
    countrySlug: 'united-states', countryName: 'United States', region: 'CA', state: 'California',
    nearbyLocations: ['riverside-san-bernardino', 'san-diego-carlsbad', 'las-vegas', 'san-jose'],
    geoKeywords: ['Long Beach', 'Glendale', 'Santa Monica', 'Pasadena', 'Burbank', 'Torrance'],
    industries: ['manufacturing', 'logistics', 'retail', 'offices'],
    population: '13.2M metro', metroType: 'metro',
  },
  {
    slug: 'louisville', name: 'Louisville', displayName: 'Louisville, KY',
    countrySlug: 'united-states', countryName: 'United States', region: 'KY', state: 'Kentucky',
    nearbyLocations: ['indianapolis', 'cincinnati', 'nashville'],
    geoKeywords: ['Jeffersontown', 'Shively', 'St. Matthews', 'New Albany', 'Clarksville'],
    industries: ['logistics', 'manufacturing', 'healthcare', 'automotive'],
    population: '1.3M metro', metroType: 'city',
  },
  {
    slug: 'memphis', name: 'Memphis', displayName: 'Memphis, TN',
    countrySlug: 'united-states', countryName: 'United States', region: 'TN', state: 'Tennessee',
    nearbyLocations: ['nashville', 'birmingham', 'st-louis', 'new-orleans'],
    geoKeywords: ['Germantown', 'Collierville', 'Bartlett', 'Southaven', 'Olive Branch'],
    industries: ['logistics', 'manufacturing', 'healthcare', 'retail'],
    population: '1.3M metro', metroType: 'city',
  },
  {
    slug: 'miami-fort-lauderdale', name: 'Miami / Fort Lauderdale', displayName: 'Miami-Fort Lauderdale, FL',
    countrySlug: 'united-states', countryName: 'United States', region: 'FL', state: 'Florida',
    nearbyLocations: ['orlando', 'tampa-st-petersburg', 'jacksonville'],
    geoKeywords: ['Hialeah', 'Hollywood', 'Coral Springs', 'Pembroke Pines', 'Boca Raton', 'West Palm Beach'],
    industries: ['logistics', 'hospitality', 'healthcare', 'offices'],
    population: '6.1M metro', metroType: 'metro',
  },
  {
    slug: 'milwaukee', name: 'Milwaukee', displayName: 'Milwaukee, WI',
    countrySlug: 'united-states', countryName: 'United States', region: 'WI', state: 'Wisconsin',
    nearbyLocations: ['chicago', 'minneapolis-st-paul', 'detroit'],
    geoKeywords: ['Waukesha', 'Wauwatosa', 'Brookfield', 'West Allis', 'Racine'],
    industries: ['manufacturing', 'healthcare', 'retail', 'logistics'],
    population: '1.6M metro', metroType: 'metro',
  },
  {
    slug: 'minneapolis-st-paul', name: 'Minneapolis / St. Paul', displayName: 'Minneapolis-St. Paul, MN',
    countrySlug: 'united-states', countryName: 'United States', region: 'MN', state: 'Minnesota',
    nearbyLocations: ['milwaukee', 'chicago', 'kansas-city'],
    geoKeywords: ['Bloomington', 'Plymouth', 'Brooklyn Park', 'Maple Grove', 'Eagan', 'Eden Prairie'],
    industries: ['offices', 'manufacturing', 'healthcare', 'retail'],
    population: '3.7M metro', metroType: 'metro',
  },
  {
    slug: 'nashville', name: 'Nashville', displayName: 'Nashville, TN',
    countrySlug: 'united-states', countryName: 'United States', region: 'TN', state: 'Tennessee',
    nearbyLocations: ['memphis', 'louisville', 'atlanta', 'birmingham'],
    geoKeywords: ['Franklin', 'Murfreesboro', 'Hendersonville', 'Brentwood', 'Clarksville'],
    industries: ['healthcare', 'offices', 'manufacturing', 'hospitality'],
    population: '2.0M metro', metroType: 'metro',
  },
  {
    slug: 'new-orleans', name: 'New Orleans', displayName: 'New Orleans, LA',
    countrySlug: 'united-states', countryName: 'United States', region: 'LA', state: 'Louisiana',
    nearbyLocations: ['houston', 'memphis', 'birmingham'],
    geoKeywords: ['Metairie', 'Kenner', 'Slidell', 'Marrero', 'Harvey'],
    industries: ['logistics', 'hospitality', 'construction', 'healthcare'],
    population: '1.3M metro', metroType: 'city',
  },
  {
    slug: 'new-york-city', name: 'New York City', displayName: 'New York City, NY',
    countrySlug: 'united-states', countryName: 'United States', region: 'NY', state: 'New York',
    nearbyLocations: ['philadelphia', 'hartford', 'boston', 'providence'],
    geoKeywords: ['Brooklyn', 'Queens', 'Manhattan', 'Bronx', 'Staten Island', 'Jersey City', 'Newark', 'Yonkers'],
    industries: ['offices', 'retail', 'healthcare', 'education'],
    population: '20.1M metro', metroType: 'metro',
  },
  {
    slug: 'oklahoma-city', name: 'Oklahoma City', displayName: 'Oklahoma City, OK',
    countrySlug: 'united-states', countryName: 'United States', region: 'OK', state: 'Oklahoma',
    nearbyLocations: ['dallas-fort-worth', 'kansas-city', 'memphis'],
    geoKeywords: ['Edmond', 'Norman', 'Moore', 'Midwest City', 'Yukon'],
    industries: ['manufacturing', 'construction', 'logistics', 'government'],
    population: '1.4M metro', metroType: 'city',
  },
  {
    slug: 'orlando', name: 'Orlando', displayName: 'Orlando, FL',
    countrySlug: 'united-states', countryName: 'United States', region: 'FL', state: 'Florida',
    nearbyLocations: ['tampa-st-petersburg', 'jacksonville', 'miami-fort-lauderdale'],
    geoKeywords: ['Kissimmee', 'Sanford', 'Winter Park', 'Altamonte Springs', 'Lake Mary'],
    industries: ['hospitality', 'retail', 'healthcare', 'offices'],
    population: '2.7M metro', metroType: 'metro',
  },
  {
    slug: 'philadelphia', name: 'Philadelphia', displayName: 'Philadelphia, PA',
    countrySlug: 'united-states', countryName: 'United States', region: 'PA', state: 'Pennsylvania',
    nearbyLocations: ['new-york-city', 'baltimore', 'washington-dc', 'pittsburgh'],
    geoKeywords: ['Cherry Hill', 'King of Prussia', 'Norristown', 'Chester', 'Wilmington', 'Camden'],
    industries: ['healthcare', 'education', 'manufacturing', 'offices'],
    population: '6.2M metro', metroType: 'metro',
  },
  {
    slug: 'phoenix', name: 'Phoenix', displayName: 'Phoenix, AZ',
    countrySlug: 'united-states', countryName: 'United States', region: 'AZ', state: 'Arizona',
    nearbyLocations: ['tucson', 'las-vegas', 'los-angeles'],
    geoKeywords: ['Scottsdale', 'Mesa', 'Tempe', 'Chandler', 'Gilbert', 'Glendale'],
    industries: ['manufacturing', 'construction', 'offices', 'retail'],
    population: '4.9M metro', metroType: 'metro',
  },
  {
    slug: 'pittsburgh', name: 'Pittsburgh', displayName: 'Pittsburgh, PA',
    countrySlug: 'united-states', countryName: 'United States', region: 'PA', state: 'Pennsylvania',
    nearbyLocations: ['cleveland', 'columbus', 'philadelphia', 'buffalo'],
    geoKeywords: ['McKeesport', 'Bethel Park', 'Mount Lebanon', 'Monroeville', 'Cranberry Township'],
    industries: ['manufacturing', 'healthcare', 'education', 'offices'],
    population: '2.4M metro', metroType: 'metro',
  },
  {
    slug: 'portland-vancouver', name: 'Portland / Vancouver', displayName: 'Portland-Vancouver, OR/WA',
    countrySlug: 'united-states', countryName: 'United States', region: 'OR', state: 'Oregon',
    nearbyLocations: ['seattle-tacoma', 'sacramento'],
    geoKeywords: ['Beaverton', 'Gresham', 'Hillsboro', 'Lake Oswego', 'Tigard', 'Vancouver WA'],
    industries: ['manufacturing', 'offices', 'retail', 'construction'],
    population: '2.5M metro', metroType: 'metro',
  },
  {
    slug: 'providence', name: 'Providence', displayName: 'Providence, RI',
    countrySlug: 'united-states', countryName: 'United States', region: 'RI', state: 'Rhode Island',
    nearbyLocations: ['boston', 'hartford', 'new-york-city'],
    geoKeywords: ['Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Fall River'],
    industries: ['healthcare', 'education', 'manufacturing', 'offices'],
    population: '1.6M metro', metroType: 'city',
  },
  {
    slug: 'raleigh-cary', name: 'Raleigh / Cary', displayName: 'Raleigh-Cary, NC',
    countrySlug: 'united-states', countryName: 'United States', region: 'NC', state: 'North Carolina',
    nearbyLocations: ['charlotte', 'richmond', 'virginia-beach'],
    geoKeywords: ['Durham', 'Chapel Hill', 'Wake Forest', 'Apex', 'Holly Springs'],
    industries: ['offices', 'education', 'healthcare', 'manufacturing'],
    population: '1.4M metro', metroType: 'metro',
  },
  {
    slug: 'richmond', name: 'Richmond', displayName: 'Richmond, VA',
    countrySlug: 'united-states', countryName: 'United States', region: 'VA', state: 'Virginia',
    nearbyLocations: ['virginia-beach', 'washington-dc', 'raleigh-cary', 'charlotte'],
    geoKeywords: ['Henrico', 'Chesterfield', 'Glen Allen', 'Midlothian', 'Mechanicsville'],
    industries: ['government', 'offices', 'manufacturing', 'healthcare'],
    population: '1.3M metro', metroType: 'city',
  },
  {
    slug: 'riverside-san-bernardino', name: 'Riverside / San Bernardino', displayName: 'Riverside-San Bernardino, CA',
    countrySlug: 'united-states', countryName: 'United States', region: 'CA', state: 'California',
    nearbyLocations: ['los-angeles', 'san-diego-carlsbad', 'las-vegas', 'phoenix'],
    geoKeywords: ['Ontario', 'Rancho Cucamonga', 'Fontana', 'Moreno Valley', 'Corona', 'Temecula'],
    industries: ['logistics', 'manufacturing', 'construction', 'retail'],
    population: '4.6M metro', metroType: 'metro',
  },
  {
    slug: 'rochester', name: 'Rochester', displayName: 'Rochester, NY',
    countrySlug: 'united-states', countryName: 'United States', region: 'NY', state: 'New York',
    nearbyLocations: ['buffalo', 'cleveland', 'pittsburgh'],
    geoKeywords: ['Greece', 'Irondequoit', 'Henrietta', 'Brighton', 'Webster'],
    industries: ['manufacturing', 'healthcare', 'education', 'offices'],
    population: '1.1M metro', metroType: 'city',
  },
  {
    slug: 'sacramento', name: 'Sacramento', displayName: 'Sacramento, CA',
    countrySlug: 'united-states', countryName: 'United States', region: 'CA', state: 'California',
    nearbyLocations: ['san-francisco-oakland', 'san-jose', 'portland-vancouver'],
    geoKeywords: ['Elk Grove', 'Roseville', 'Folsom', 'Rancho Cordova', 'Citrus Heights'],
    industries: ['government', 'healthcare', 'offices', 'education'],
    population: '2.4M metro', metroType: 'metro',
  },
  {
    slug: 'salt-lake-city', name: 'Salt Lake City', displayName: 'Salt Lake City, UT',
    countrySlug: 'united-states', countryName: 'United States', region: 'UT', state: 'Utah',
    nearbyLocations: ['denver', 'las-vegas', 'phoenix'],
    geoKeywords: ['Provo', 'West Valley City', 'Sandy', 'Orem', 'Ogden', 'Layton'],
    industries: ['offices', 'manufacturing', 'construction', 'logistics'],
    population: '1.2M metro', metroType: 'city',
  },
  {
    slug: 'san-antonio', name: 'San Antonio', displayName: 'San Antonio, TX',
    countrySlug: 'united-states', countryName: 'United States', region: 'TX', state: 'Texas',
    nearbyLocations: ['austin', 'houston', 'dallas-fort-worth'],
    geoKeywords: ['New Braunfels', 'Schertz', 'Boerne', 'Converse', 'Live Oak'],
    industries: ['healthcare', 'government', 'manufacturing', 'construction'],
    population: '2.6M metro', metroType: 'metro',
  },
  {
    slug: 'san-diego-carlsbad', name: 'San Diego / Carlsbad', displayName: 'San Diego-Carlsbad, CA',
    countrySlug: 'united-states', countryName: 'United States', region: 'CA', state: 'California',
    nearbyLocations: ['los-angeles', 'riverside-san-bernardino', 'phoenix'],
    geoKeywords: ['Chula Vista', 'Oceanside', 'Escondido', 'El Cajon', 'Encinitas', 'Carlsbad'],
    industries: ['manufacturing', 'offices', 'healthcare', 'education'],
    population: '3.3M metro', metroType: 'metro',
  },
  {
    slug: 'san-francisco-oakland', name: 'San Francisco / Oakland', displayName: 'San Francisco-Oakland, CA',
    countrySlug: 'united-states', countryName: 'United States', region: 'CA', state: 'California',
    nearbyLocations: ['san-jose', 'sacramento', 'los-angeles'],
    geoKeywords: ['Oakland', 'Berkeley', 'Fremont', 'Hayward', 'Daly City', 'San Mateo', 'Palo Alto'],
    industries: ['offices', 'manufacturing', 'retail', 'healthcare'],
    population: '4.7M metro', metroType: 'metro',
  },
  {
    slug: 'san-jose', name: 'San Jose', displayName: 'San Jose, CA',
    countrySlug: 'united-states', countryName: 'United States', region: 'CA', state: 'California',
    nearbyLocations: ['san-francisco-oakland', 'sacramento', 'los-angeles'],
    geoKeywords: ['Santa Clara', 'Sunnyvale', 'Cupertino', 'Mountain View', 'Milpitas', 'Campbell'],
    industries: ['offices', 'manufacturing', 'education', 'retail'],
    population: '2.0M metro', metroType: 'metro',
  },
  {
    slug: 'seattle-tacoma', name: 'Seattle / Tacoma', displayName: 'Seattle-Tacoma, WA',
    countrySlug: 'united-states', countryName: 'United States', region: 'WA', state: 'Washington',
    nearbyLocations: ['portland-vancouver', 'san-francisco-oakland'],
    geoKeywords: ['Bellevue', 'Tacoma', 'Redmond', 'Kent', 'Renton', 'Everett', 'Kirkland'],
    industries: ['offices', 'manufacturing', 'logistics', 'retail'],
    population: '4.0M metro', metroType: 'metro',
  },
  {
    slug: 'st-louis', name: 'St. Louis', displayName: 'St. Louis, MO',
    countrySlug: 'united-states', countryName: 'United States', region: 'MO', state: 'Missouri',
    nearbyLocations: ['kansas-city', 'indianapolis', 'memphis', 'nashville'],
    geoKeywords: ['Clayton', 'Florissant', 'Chesterfield', 'O\'Fallon', 'St. Charles'],
    industries: ['manufacturing', 'healthcare', 'logistics', 'offices'],
    population: '2.8M metro', metroType: 'metro',
  },
  {
    slug: 'tampa-st-petersburg', name: 'Tampa / St. Petersburg', displayName: 'Tampa-St. Petersburg, FL',
    countrySlug: 'united-states', countryName: 'United States', region: 'FL', state: 'Florida',
    nearbyLocations: ['orlando', 'jacksonville', 'miami-fort-lauderdale'],
    geoKeywords: ['Clearwater', 'Brandon', 'Largo', 'Palm Harbor', 'Wesley Chapel', 'Riverview'],
    industries: ['healthcare', 'offices', 'logistics', 'retail'],
    population: '3.2M metro', metroType: 'metro',
  },
  {
    slug: 'tucson', name: 'Tucson', displayName: 'Tucson, AZ',
    countrySlug: 'united-states', countryName: 'United States', region: 'AZ', state: 'Arizona',
    nearbyLocations: ['phoenix', 'las-vegas', 'san-diego-carlsbad'],
    geoKeywords: ['Marana', 'Oro Valley', 'Sahuarita', 'Sierra Vista', 'Vail'],
    industries: ['education', 'healthcare', 'government', 'manufacturing'],
    population: '1.0M metro', metroType: 'city',
  },
  {
    slug: 'virginia-beach', name: 'Virginia Beach', displayName: 'Virginia Beach, VA',
    countrySlug: 'united-states', countryName: 'United States', region: 'VA', state: 'Virginia',
    nearbyLocations: ['richmond', 'raleigh-cary', 'washington-dc'],
    geoKeywords: ['Norfolk', 'Newport News', 'Hampton', 'Chesapeake', 'Suffolk'],
    industries: ['government', 'logistics', 'healthcare', 'offices'],
    population: '1.8M metro', metroType: 'metro',
  },
  {
    slug: 'washington-dc', name: 'Washington DC', displayName: 'Washington, DC',
    countrySlug: 'united-states', countryName: 'United States', region: 'DC', state: 'District of Columbia',
    nearbyLocations: ['baltimore', 'philadelphia', 'richmond', 'virginia-beach'],
    geoKeywords: ['Arlington', 'Alexandria', 'Bethesda', 'Silver Spring', 'Fairfax', 'Reston', 'Tysons'],
    industries: ['government', 'offices', 'education', 'healthcare'],
    population: '6.3M metro', metroType: 'metro',
  },

  // ============================================================
  // CANADA — 12 Locations
  // ============================================================
  {
    slug: 'calgary', name: 'Calgary', displayName: 'Calgary, AB',
    countrySlug: 'canada', countryName: 'Canada', region: 'AB', state: 'Alberta',
    nearbyLocations: ['edmonton', 'vancouver-surrey'],
    geoKeywords: ['Airdrie', 'Cochrane', 'Chestermere', 'Okotoks'],
    industries: ['construction', 'offices', 'manufacturing', 'logistics'],
    population: '1.5M metro', metroType: 'metro',
  },
  {
    slug: 'edmonton', name: 'Edmonton', displayName: 'Edmonton, AB',
    countrySlug: 'canada', countryName: 'Canada', region: 'AB', state: 'Alberta',
    nearbyLocations: ['calgary', 'vancouver-surrey'],
    geoKeywords: ['Sherwood Park', 'St. Albert', 'Spruce Grove', 'Leduc'],
    industries: ['manufacturing', 'construction', 'logistics', 'government'],
    population: '1.4M metro', metroType: 'metro',
  },
  {
    slug: 'hamilton-burlington', name: 'Hamilton (Burlington)', displayName: 'Hamilton-Burlington, ON',
    countrySlug: 'canada', countryName: 'Canada', region: 'ON', state: 'Ontario',
    nearbyLocations: ['toronto-mississauga', 'kitchener-cambridge', 'london-on'],
    geoKeywords: ['Burlington', 'Stoney Creek', 'Ancaster', 'Dundas'],
    industries: ['manufacturing', 'healthcare', 'logistics', 'education'],
    population: '780K metro', metroType: 'metro',
  },
  {
    slug: 'kitchener-cambridge', name: 'Kitchener (Cambridge, Waterloo)', displayName: 'Kitchener-Cambridge-Waterloo, ON',
    countrySlug: 'canada', countryName: 'Canada', region: 'ON', state: 'Ontario',
    nearbyLocations: ['toronto-mississauga', 'hamilton-burlington', 'london-on'],
    geoKeywords: ['Cambridge', 'Waterloo', 'Guelph', 'Elmira'],
    industries: ['manufacturing', 'offices', 'education', 'logistics'],
    population: '600K metro', metroType: 'metro',
  },
  {
    slug: 'london-on', name: 'London', displayName: 'London, ON',
    countrySlug: 'canada', countryName: 'Canada', region: 'ON', state: 'Ontario',
    nearbyLocations: ['hamilton-burlington', 'kitchener-cambridge', 'toronto-mississauga'],
    geoKeywords: ['St. Thomas', 'Woodstock', 'Stratford', 'Ingersoll'],
    industries: ['manufacturing', 'healthcare', 'education', 'automotive'],
    population: '540K metro', metroType: 'city',
  },
  {
    slug: 'montreal-laval', name: 'Montreal (Laval)', displayName: 'Montreal-Laval, QC',
    countrySlug: 'canada', countryName: 'Canada', region: 'QC', state: 'Quebec',
    nearbyLocations: ['ottawa-gatineau', 'quebec-city', 'toronto-mississauga'],
    geoKeywords: ['Laval', 'Longueuil', 'Brossard', 'Terrebonne', 'Repentigny'],
    industries: ['manufacturing', 'offices', 'logistics', 'healthcare'],
    population: '4.3M metro', metroType: 'metro',
  },
  {
    slug: 'ottawa-gatineau', name: 'Ottawa-Gatineau', displayName: 'Ottawa-Gatineau, ON/QC',
    countrySlug: 'canada', countryName: 'Canada', region: 'ON', state: 'Ontario',
    nearbyLocations: ['montreal-laval', 'toronto-mississauga', 'kitchener-cambridge'],
    geoKeywords: ['Gatineau', 'Kanata', 'Orleans', 'Barrhaven', 'Nepean'],
    industries: ['government', 'offices', 'education', 'healthcare'],
    population: '1.4M metro', metroType: 'metro',
  },
  {
    slug: 'quebec-city', name: 'Quebec City (Levis)', displayName: 'Quebec City-Levis, QC',
    countrySlug: 'canada', countryName: 'Canada', region: 'QC', state: 'Quebec',
    nearbyLocations: ['montreal-laval', 'ottawa-gatineau'],
    geoKeywords: ['Levis', 'Beauport', 'Charlesbourg', 'Sainte-Foy'],
    industries: ['government', 'education', 'manufacturing', 'healthcare'],
    population: '830K metro', metroType: 'metro',
  },
  {
    slug: 'toronto-mississauga', name: 'Toronto (Mississauga)', displayName: 'Toronto-Mississauga, ON',
    countrySlug: 'canada', countryName: 'Canada', region: 'ON', state: 'Ontario',
    nearbyLocations: ['hamilton-burlington', 'kitchener-cambridge', 'ottawa-gatineau', 'montreal-laval'],
    geoKeywords: ['Mississauga', 'Brampton', 'Markham', 'Vaughan', 'Richmond Hill', 'Scarborough'],
    industries: ['offices', 'manufacturing', 'logistics', 'retail'],
    population: '6.4M metro', metroType: 'metro',
  },
  {
    slug: 'vancouver-surrey', name: 'Vancouver (Surrey, Burnaby)', displayName: 'Vancouver-Surrey, BC',
    countrySlug: 'canada', countryName: 'Canada', region: 'BC', state: 'British Columbia',
    nearbyLocations: ['calgary', 'edmonton', 'seattle-tacoma'],
    geoKeywords: ['Surrey', 'Burnaby', 'Richmond', 'Coquitlam', 'Langley', 'North Vancouver'],
    industries: ['logistics', 'offices', 'construction', 'manufacturing'],
    population: '2.6M metro', metroType: 'metro',
  },
  {
    slug: 'st-catharines-niagara', name: 'St. Catharines-Niagara', displayName: 'St. Catharines-Niagara, ON',
    countrySlug: 'canada', countryName: 'Canada', region: 'ON', state: 'Ontario',
    nearbyLocations: ['hamilton-burlington', 'toronto-mississauga', 'buffalo'],
    geoKeywords: ['Niagara Falls', 'Welland', 'Fort Erie', 'Thorold'],
    industries: ['manufacturing', 'hospitality', 'logistics', 'retail'],
    population: '410K metro', metroType: 'metro',
  },
  {
    slug: 'winnipeg', name: 'Winnipeg', displayName: 'Winnipeg, MB',
    countrySlug: 'canada', countryName: 'Canada', region: 'MB', state: 'Manitoba',
    nearbyLocations: ['calgary', 'edmonton', 'minneapolis-st-paul'],
    geoKeywords: ['St. Boniface', 'Transcona', 'St. James', 'Charleswood'],
    industries: ['manufacturing', 'logistics', 'government', 'healthcare'],
    population: '830K metro', metroType: 'metro',
  },

  // ============================================================
  // UNITED KINGDOM — 24 Locations
  // ============================================================
  {
    slug: 'birkenhead', name: 'Birkenhead', displayName: 'Birkenhead, Merseyside',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Merseyside', state: 'England',
    nearbyLocations: ['liverpool', 'greater-manchester', 'sheffield'],
    geoKeywords: ['Wirral', 'Wallasey', 'Bebington', 'Heswall'],
    industries: ['manufacturing', 'logistics', 'healthcare', 'retail'],
    population: '320K area', metroType: 'city',
  },
  {
    slug: 'bournemouth', name: 'Bournemouth', displayName: 'Bournemouth, Dorset',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Dorset', state: 'England',
    nearbyLocations: ['southampton', 'portsmouth', 'bristol'],
    geoKeywords: ['Poole', 'Christchurch', 'Wimborne', 'Ferndown'],
    industries: ['offices', 'hospitality', 'healthcare', 'retail'],
    population: '400K area', metroType: 'city',
  },
  {
    slug: 'brighton-worthing', name: 'Brighton / Worthing / Littlehampton', displayName: 'Brighton & Worthing, Sussex',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Sussex', state: 'England',
    nearbyLocations: ['greater-london', 'portsmouth', 'southampton'],
    geoKeywords: ['Worthing', 'Littlehampton', 'Hove', 'Shoreham', 'Lewes'],
    industries: ['offices', 'education', 'hospitality', 'healthcare'],
    population: '480K area', metroType: 'city',
  },
  {
    slug: 'bristol', name: 'Bristol', displayName: 'Bristol, England',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'South West', state: 'England',
    nearbyLocations: ['cardiff', 'southampton', 'bournemouth', 'greater-london'],
    geoKeywords: ['Bath', 'Weston-super-Mare', 'Keynsham', 'Filton', 'Portishead'],
    industries: ['offices', 'manufacturing', 'education', 'healthcare'],
    population: '700K area', metroType: 'metro',
  },
  {
    slug: 'cardiff', name: 'Cardiff', displayName: 'Cardiff, Wales',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'South Wales', state: 'Wales',
    nearbyLocations: ['bristol', 'swansea', 'birmingham-uk'],
    geoKeywords: ['Newport', 'Penarth', 'Barry', 'Caerphilly', 'Pontypridd'],
    industries: ['offices', 'government', 'education', 'healthcare'],
    population: '480K area', metroType: 'metro',
  },
  {
    slug: 'coventry-bedworth', name: 'Coventry / Bedworth', displayName: 'Coventry-Bedworth, West Midlands',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'West Midlands', state: 'England',
    nearbyLocations: ['birmingham-uk', 'leicester', 'nottingham'],
    geoKeywords: ['Bedworth', 'Nuneaton', 'Kenilworth', 'Rugby', 'Warwick'],
    industries: ['automotive', 'manufacturing', 'logistics', 'education'],
    population: '370K area', metroType: 'city',
  },
  {
    slug: 'edinburgh', name: 'Edinburgh', displayName: 'Edinburgh, Scotland',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Scotland', state: 'Scotland',
    nearbyLocations: ['greater-glasgow', 'tyneside'],
    geoKeywords: ['Leith', 'Musselburgh', 'Dalkeith', 'Livingston', 'Dunfermline'],
    industries: ['offices', 'education', 'government', 'healthcare'],
    population: '540K city', metroType: 'metro',
  },
  {
    slug: 'greater-belfast', name: 'Greater Belfast', displayName: 'Greater Belfast, Northern Ireland',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Northern Ireland', state: 'Northern Ireland',
    nearbyLocations: ['greater-glasgow', 'edinburgh'],
    geoKeywords: ['Lisburn', 'Bangor', 'Newtownabbey', 'Carrickfergus', 'Holywood'],
    industries: ['manufacturing', 'offices', 'healthcare', 'government'],
    population: '670K area', metroType: 'metro',
  },
  {
    slug: 'greater-glasgow', name: 'Greater Glasgow', displayName: 'Greater Glasgow, Scotland',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Scotland', state: 'Scotland',
    nearbyLocations: ['edinburgh', 'greater-belfast'],
    geoKeywords: ['Paisley', 'East Kilbride', 'Clydebank', 'Motherwell', 'Hamilton'],
    industries: ['manufacturing', 'offices', 'healthcare', 'education'],
    population: '1.2M area', metroType: 'metro',
  },
  {
    slug: 'greater-london', name: 'Greater London', displayName: 'Greater London, England',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'London', state: 'England',
    nearbyLocations: ['reading-wokingham', 'brighton-worthing', 'southampton'],
    geoKeywords: ['Croydon', 'Barnet', 'Ealing', 'Enfield', 'Bromley', 'Hounslow', 'Hackney'],
    industries: ['offices', 'retail', 'healthcare', 'education'],
    population: '9.0M metro', metroType: 'metro',
  },
  {
    slug: 'greater-manchester', name: 'Greater Manchester', displayName: 'Greater Manchester, England',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'North West', state: 'England',
    nearbyLocations: ['liverpool', 'sheffield', 'west-yorkshire'],
    geoKeywords: ['Salford', 'Stockport', 'Bolton', 'Oldham', 'Wigan', 'Rochdale', 'Bury'],
    industries: ['offices', 'manufacturing', 'logistics', 'retail'],
    population: '2.8M metro', metroType: 'metro',
  },
  {
    slug: 'kingston-upon-hull', name: 'Kingston upon Hull', displayName: 'Kingston upon Hull, Yorkshire',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Yorkshire', state: 'England',
    nearbyLocations: ['sheffield', 'west-yorkshire', 'tyneside'],
    geoKeywords: ['Beverley', 'Cottingham', 'Hessle', 'Brough'],
    industries: ['logistics', 'manufacturing', 'healthcare', 'retail'],
    population: '260K city', metroType: 'city',
  },
  {
    slug: 'leicester', name: 'Leicester', displayName: 'Leicester, East Midlands',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'East Midlands', state: 'England',
    nearbyLocations: ['nottingham', 'coventry-bedworth', 'birmingham-uk'],
    geoKeywords: ['Loughborough', 'Hinckley', 'Wigston', 'Oadby', 'Market Harborough'],
    industries: ['manufacturing', 'retail', 'logistics', 'education'],
    population: '510K area', metroType: 'city',
  },
  {
    slug: 'liverpool', name: 'Liverpool', displayName: 'Liverpool, Merseyside',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Merseyside', state: 'England',
    nearbyLocations: ['greater-manchester', 'birkenhead', 'sheffield'],
    geoKeywords: ['Bootle', 'Crosby', 'Kirkby', 'St. Helens', 'Southport'],
    industries: ['logistics', 'manufacturing', 'healthcare', 'retail'],
    population: '900K metro', metroType: 'metro',
  },
  {
    slug: 'nottingham', name: 'Nottingham', displayName: 'Nottingham, East Midlands',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'East Midlands', state: 'England',
    nearbyLocations: ['leicester', 'sheffield', 'birmingham-uk'],
    geoKeywords: ['Mansfield', 'Beeston', 'Arnold', 'West Bridgford', 'Long Eaton'],
    industries: ['manufacturing', 'offices', 'education', 'healthcare'],
    population: '730K area', metroType: 'metro',
  },
  {
    slug: 'portsmouth', name: 'Portsmouth', displayName: 'Portsmouth, Hampshire',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Hampshire', state: 'England',
    nearbyLocations: ['southampton', 'brighton-worthing', 'bournemouth'],
    geoKeywords: ['Gosport', 'Fareham', 'Havant', 'Waterlooville', 'Chichester'],
    industries: ['logistics', 'manufacturing', 'government', 'healthcare'],
    population: '400K area', metroType: 'city',
  },
  {
    slug: 'reading-wokingham', name: 'Reading / Wokingham', displayName: 'Reading-Wokingham, Berkshire',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Berkshire', state: 'England',
    nearbyLocations: ['greater-london', 'southampton', 'bristol'],
    geoKeywords: ['Wokingham', 'Bracknell', 'Maidenhead', 'Newbury', 'Slough'],
    industries: ['offices', 'manufacturing', 'logistics', 'education'],
    population: '320K area', metroType: 'city',
  },
  {
    slug: 'sheffield', name: 'Sheffield', displayName: 'Sheffield, South Yorkshire',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'South Yorkshire', state: 'England',
    nearbyLocations: ['greater-manchester', 'nottingham', 'west-yorkshire', 'kingston-upon-hull'],
    geoKeywords: ['Rotherham', 'Barnsley', 'Doncaster', 'Chesterfield'],
    industries: ['manufacturing', 'education', 'healthcare', 'offices'],
    population: '580K city', metroType: 'metro',
  },
  {
    slug: 'southampton', name: 'Southampton', displayName: 'Southampton, Hampshire',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Hampshire', state: 'England',
    nearbyLocations: ['portsmouth', 'bournemouth', 'reading-wokingham', 'brighton-worthing'],
    geoKeywords: ['Eastleigh', 'Romsey', 'Totton', 'Hedge End', 'Winchester'],
    industries: ['logistics', 'manufacturing', 'offices', 'education'],
    population: '330K area', metroType: 'city',
  },
  {
    slug: 'swansea', name: 'Swansea', displayName: 'Swansea, Wales',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'South Wales', state: 'Wales',
    nearbyLocations: ['cardiff', 'bristol'],
    geoKeywords: ['Neath', 'Port Talbot', 'Llanelli', 'Gorseinon'],
    industries: ['manufacturing', 'government', 'healthcare', 'education'],
    population: '240K city', metroType: 'city',
  },
  {
    slug: 'teesside', name: 'Teesside', displayName: 'Teesside, North East',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'North East', state: 'England',
    nearbyLocations: ['tyneside', 'west-yorkshire', 'sheffield'],
    geoKeywords: ['Middlesbrough', 'Stockton-on-Tees', 'Hartlepool', 'Redcar', 'Darlington'],
    industries: ['manufacturing', 'construction', 'logistics', 'healthcare'],
    population: '380K area', metroType: 'city',
  },
  {
    slug: 'the-potteries', name: 'The Potteries', displayName: 'The Potteries, Staffordshire',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Staffordshire', state: 'England',
    nearbyLocations: ['greater-manchester', 'birmingham-uk', 'nottingham'],
    geoKeywords: ['Stoke-on-Trent', 'Newcastle-under-Lyme', 'Stafford', 'Leek'],
    industries: ['manufacturing', 'logistics', 'retail', 'healthcare'],
    population: '270K area', metroType: 'city',
  },
  {
    slug: 'tyneside', name: 'Tyneside', displayName: 'Tyneside (Newcastle), North East',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'North East', state: 'England',
    nearbyLocations: ['teesside', 'edinburgh', 'west-yorkshire'],
    geoKeywords: ['Newcastle upon Tyne', 'Gateshead', 'Sunderland', 'South Shields', 'North Shields'],
    industries: ['offices', 'education', 'manufacturing', 'healthcare'],
    population: '880K area', metroType: 'metro',
  },
  {
    slug: 'west-midlands', name: 'West Midlands', displayName: 'West Midlands (Birmingham), England',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'West Midlands', state: 'England',
    nearbyLocations: ['coventry-bedworth', 'the-potteries', 'leicester', 'bristol'],
    geoKeywords: ['Birmingham', 'Wolverhampton', 'Walsall', 'Dudley', 'Solihull', 'Sandwell'],
    industries: ['manufacturing', 'logistics', 'automotive', 'retail'],
    population: '2.9M area', metroType: 'metro',
  },
  // Note: "Birmingham UK" in the UK list maps to "West Midlands" to avoid slug collision with US Birmingham
  {
    slug: 'west-yorkshire', name: 'West Yorkshire', displayName: 'West Yorkshire (Leeds/Bradford), England',
    countrySlug: 'united-kingdom', countryName: 'United Kingdom', region: 'Yorkshire', state: 'England',
    nearbyLocations: ['greater-manchester', 'sheffield', 'kingston-upon-hull', 'tyneside'],
    geoKeywords: ['Leeds', 'Bradford', 'Huddersfield', 'Wakefield', 'Halifax', 'Dewsbury'],
    industries: ['offices', 'manufacturing', 'logistics', 'retail'],
    population: '2.3M area', metroType: 'metro',
  },

  // ============================================================
  // AUSTRALIA — 8 Locations
  // ============================================================
  {
    slug: 'adelaide', name: 'Adelaide', displayName: 'Adelaide, SA',
    countrySlug: 'australia', countryName: 'Australia', region: 'SA', state: 'South Australia',
    nearbyLocations: ['melbourne', 'perth'],
    geoKeywords: ['Glenelg', 'Elizabeth', 'Salisbury', 'Marion', 'Noarlunga'],
    industries: ['manufacturing', 'education', 'healthcare', 'government'],
    population: '1.4M metro', metroType: 'metro',
  },
  {
    slug: 'brisbane', name: 'Brisbane', displayName: 'Brisbane, QLD',
    countrySlug: 'australia', countryName: 'Australia', region: 'QLD', state: 'Queensland',
    nearbyLocations: ['gold-coast', 'sydney', 'melbourne'],
    geoKeywords: ['Ipswich', 'Logan', 'Redcliffe', 'Caboolture', 'Springwood'],
    industries: ['construction', 'offices', 'logistics', 'healthcare'],
    population: '2.6M metro', metroType: 'metro',
  },
  {
    slug: 'canberra', name: 'Canberra', displayName: 'Canberra, ACT',
    countrySlug: 'australia', countryName: 'Australia', region: 'ACT', state: 'Australian Capital Territory',
    nearbyLocations: ['sydney', 'melbourne'],
    geoKeywords: ['Belconnen', 'Woden', 'Tuggeranong', 'Gungahlin', 'Queanbeyan'],
    industries: ['government', 'education', 'offices', 'healthcare'],
    population: '460K metro', metroType: 'city',
  },
  {
    slug: 'gold-coast', name: 'Gold Coast', displayName: 'Gold Coast, QLD',
    countrySlug: 'australia', countryName: 'Australia', region: 'QLD', state: 'Queensland',
    nearbyLocations: ['brisbane', 'sydney'],
    geoKeywords: ['Surfers Paradise', 'Southport', 'Nerang', 'Robina', 'Coolangatta'],
    industries: ['hospitality', 'construction', 'retail', 'healthcare'],
    population: '700K metro', metroType: 'metro',
  },
  {
    slug: 'melbourne', name: 'Melbourne', displayName: 'Melbourne, VIC',
    countrySlug: 'australia', countryName: 'Australia', region: 'VIC', state: 'Victoria',
    nearbyLocations: ['adelaide', 'sydney', 'canberra'],
    geoKeywords: ['South Yarra', 'St Kilda', 'Footscray', 'Box Hill', 'Dandenong', 'Frankston'],
    industries: ['offices', 'manufacturing', 'education', 'healthcare'],
    population: '5.1M metro', metroType: 'metro',
  },
  {
    slug: 'newcastle-au', name: 'Newcastle', displayName: 'Newcastle, NSW',
    countrySlug: 'australia', countryName: 'Australia', region: 'NSW', state: 'New South Wales',
    nearbyLocations: ['sydney', 'brisbane'],
    geoKeywords: ['Maitland', 'Lake Macquarie', 'Cessnock', 'Port Stephens'],
    industries: ['manufacturing', 'logistics', 'construction', 'healthcare'],
    population: '500K metro', metroType: 'city',
  },
  {
    slug: 'perth', name: 'Perth', displayName: 'Perth, WA',
    countrySlug: 'australia', countryName: 'Australia', region: 'WA', state: 'Western Australia',
    nearbyLocations: ['adelaide', 'melbourne'],
    geoKeywords: ['Fremantle', 'Joondalup', 'Rockingham', 'Mandurah', 'Armadale'],
    industries: ['construction', 'manufacturing', 'logistics', 'offices'],
    population: '2.1M metro', metroType: 'metro',
  },
  {
    slug: 'sydney', name: 'Sydney', displayName: 'Sydney, NSW',
    countrySlug: 'australia', countryName: 'Australia', region: 'NSW', state: 'New South Wales',
    nearbyLocations: ['melbourne', 'brisbane', 'newcastle-au', 'canberra'],
    geoKeywords: ['Parramatta', 'Penrith', 'Liverpool', 'Blacktown', 'Bankstown', 'Chatswood'],
    industries: ['offices', 'manufacturing', 'logistics', 'retail'],
    population: '5.3M metro', metroType: 'metro',
  },
]

// ============================================================
// Helper Functions
// ============================================================

export function getERecyclingCountryBySlug(slug: string): ERecyclingCountry | undefined {
  return eRecyclingCountries.find((c) => c.slug === slug)
}

export function getERecyclingLocationBySlug(slug: string): ERecyclingLocation | undefined {
  return eRecyclingLocations.find((l) => l.slug === slug)
}

export function getERecyclingLocationsByCountry(countrySlug: string): ERecyclingLocation[] {
  return eRecyclingLocations
    .filter((l) => l.countrySlug === countrySlug)
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getNearbyLocations(slug: string): ERecyclingLocation[] {
  const location = getERecyclingLocationBySlug(slug)
  if (!location) return []
  return location.nearbyLocations
    .map((s) => getERecyclingLocationBySlug(s))
    .filter((l): l is ERecyclingLocation => l !== undefined)
}

export function getCountryNameForDisplay(countrySlug: string): string {
  return getERecyclingCountryBySlug(countrySlug)?.name ?? countrySlug
}

export function getAllERecyclingLocations(): ERecyclingLocation[] {
  return eRecyclingLocations.filter((l) => l.slug !== undefined)
}

export function getERecyclingLocationCount(): number {
  return eRecyclingLocations.length
}

export function getERecyclingCountryCount(): number {
  return eRecyclingCountries.length
}
