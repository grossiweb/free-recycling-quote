import React from 'react'
import WpContent from '@/components/shared/WpContent'
import PageHero from '@/components/shared/PageHero'
import { getWordPressData } from '@/lib/wordpress'
import { GET_PAGE } from '@/lib/queries'
import { fetchHeroDataByUri } from '@/lib/hero'

import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Videos — Recycling Education',
  description: 'Educational videos about our recycling processes, program setup, and sustainability best practices.',
}

export default async function VideosPage() {
  let content = ''

  try {
    const data = await getWordPressData<any>(GET_PAGE, { id: '/resources/videos/', idType: 'URI' })
    content = data?.page?.content || ''
  } catch {}
  const heroData = await fetchHeroDataByUri('/resources/videos/')

  const bgType = heroData.backgroundType || 'gradient'
  const isDark = bgType === 'dark' || bgType === 'image'

  return (
    <div className="bg-white">
      <PageHero backgroundType={bgType} backgroundImage={heroData.backgroundImage}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className={`text-sm font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-white/70' : 'text-[#686767]'}`}>
            {heroData.subtitle || 'Resources'}
          </p>
          <h1 className={`text-4xl lg:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-[#1F1E1E]'}`}>Videos</h1>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-white/80' : 'text-[#686767]'}`}>
            {heroData.description || 'Watch our educational videos about recycling processes and sustainability programs.'}
          </p>
        </div>
      </PageHero>

      {content ? (
        <section className="py-20 lg:py-28">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <WpContent html={content} />
          </div>
        </section>
      ) : (
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="text-center py-16 text-[#686767]">
              <svg className="w-16 h-16 mx-auto mb-4 text-[#4BE576]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.869v6.262a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-lg">Videos coming soon. Check back for educational recycling content.</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
