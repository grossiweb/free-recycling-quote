import React from 'react'
import FAQAccordion from '@/components/shared/FAQAccordion'
import WpContent from '@/components/shared/WpContent'
import PageHero from '@/components/shared/PageHero'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about our recycling programs and services.',
}

const fallbackFaqs = [
  { q: 'What types of businesses do you work with?', a: 'We work with businesses of all sizes — from small retailers to large manufacturers, distributors, schools, government agencies, and construction companies.' },
  { q: 'How do I get a free recycling quote?', a: 'Simply fill out our contact form or call 817-946-5655. We\'ll assess your materials and provide a free, no-obligation quote within 24 hours.' },
  { q: 'What materials do you accept?', a: 'We accept electronics, metal, paper, plastic, cell phones, textiles, organics, chemicals, batteries, light bulbs, pallets, vehicles, and hazardous materials.' },
  { q: 'Do you guarantee zero landfill?', a: 'Yes. We are committed to zero landfill diversion. All materials are either recycled, reused, or converted to energy — nothing goes to landfill.' },
  { q: 'How does pickup scheduling work?', a: 'Use our online Schedule Pickup form or call us directly. We offer flexible scheduling including same-week pickups for urgent needs.' },
  { q: 'Do you provide ESG/sustainability reporting?', a: 'Yes. We provide detailed diversion reports, certificates of recycling, and ESG-ready documentation to support your sustainability goals.' },
  { q: 'Are your recycling processes certified?', a: 'Yes. We use certified recycling partners and comply with all state and federal environmental regulations.' },
  { q: 'What is the cost of your services?', a: 'Costs vary by material type, volume, and frequency. Many materials — like metals and electronics — can generate revenue. Contact us for a free assessment.' },
]

function parseFaqFromHtml(html: string): Array<{ q: string; a: string }> {
  const faqs: Array<{ q: string; a: string }> = []
  const regex = /<h3[^>]*>(.*?)<\/h3>\s*([\s\S]*?)(?=<h3|$)/gi
  let match
  while ((match = regex.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim()
    const a = match[2].replace(/<\/?p>/g, '').replace(/<!--[^>]*-->/g, '').trim()
    if (q && a) faqs.push({ q, a })
  }
  return faqs
}

export default async function FAQPage() {
  let faqs = fallbackFaqs
  let wpContent = ''

  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/resources/faq/', idType: 'URI' })
    const page = data?.page
    if (page?.content) {
      wpContent = page.content
      const parsed = parseFaqFromHtml(page.content)
      if (parsed.length > 0) faqs = parsed
    }
  } catch {}
  const heroData = await fetchHeroDataByUri('/resources/faq/')

  const bgType = heroData.backgroundType || 'gradient'
  const isDark = bgType === 'dark' || bgType === 'image'

  return (
    <div className="bg-white">
      <PageHero backgroundType={bgType} backgroundImage={heroData.backgroundImage}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-white/70' : 'text-[#686767]'}`}>
            {heroData.subtitle || 'Resources'}
          </p>
          <h1 className={`text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-[#1F1E1E]'}`}>
            Frequently Asked Questions
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-white/80' : 'text-[#686767]'}`}>
            {heroData.description || 'Everything you need to know about our recycling programs and services.'}
          </p>
        </div>
      </PageHero>

      {wpContent && (
        <section className="py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <WpContent html={wpContent} />
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}
