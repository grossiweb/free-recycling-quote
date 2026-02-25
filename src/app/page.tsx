import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import ImpactsSection from '@/components/home/ImpactsSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import MaterialsSection from '@/components/home/MaterialsSection'
import RecyclingProgramsSection from '@/components/home/RecyclingProgramsSection'
import BlogSection from '@/components/home/BlogSection'
import { getWordPressData } from '@/lib/wordpress'
import { GET_POSTS } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Free Recycling Quote — Recycling that helps businesses build a sustainable future',
  description: 'Get quick, dependable recycling solutions for end-of-life products, materials, and business waste — with guidance you can trust.',
}

export default async function HomePage() {
  let posts = null
  try {
    const data = await getWordPressData<any>(GET_POSTS, { first: 3 })
    posts = data?.posts?.nodes || null
  } catch {
    // Use placeholder posts
  }

  return (
    <>
      <HeroSection />
      <ImpactsSection />
      <IndustriesSection />
      <MaterialsSection />
      <RecyclingProgramsSection />
      <BlogSection posts={posts} />
    </>
  )
}
