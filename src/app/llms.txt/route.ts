export async function GET() {
  const content = `# Recycling Quotes

## About
Recycling Quotes (recyclingquotes.com) is a nationwide recycling services network operating since 2005. We provide free quotes and certified pickup for electronics, metals, paper, plastics, pallets, hazardous materials, and more. We serve businesses across the US, Canada, UK, and Australia.

## Services
- Scrap Metal Recycling
- Electronics Recycling
- Pallet Recycling
- Dumpster Rental
- Junk Removal
- Hazardous Waste Disposal
- Product Destruction (ITAD)
- Shredding Services
- Business Recycling Programs
- Cardboard & Paper Recycling
- Plastic Recycling
- Waste Audits & Consulting
- Collection Events
- Take-Back Programs
- Material Recycling Solutions

## Materials We Recycle
Metals (copper, aluminum, steel, brass, iron, stainless steel, precious metals), Electronics (computers, cell phones, monitors, TVs, printers, servers, tablets, circuit boards), Paper & Cardboard, Plastics, Pallets (wood and plastic), Hazardous Materials (batteries, light bulbs, chemicals, medical waste), Textiles, Organics, Vehicles, Junk/Bulky Items

## Industries Served
Construction, Manufacturing, Retail, Healthcare, Corporate Offices, Logistics/Distribution, Automotive, Banking & Finance, Food Services, Hospitality, Property Management, Education, Government

## Certifications
R2 Certified, e-Stewards, ISO 14001, ISO 9001, EPA Compliant, NAID AAA

## Contact
Phone: 817-946-5655
Email: jorge@recyclingquotes.com
Location: Fort Worth, TX, USA
Website: https://recyclingquotes.com
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
