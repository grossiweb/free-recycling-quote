import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import WpContent from '@/components/shared/WpContent'
import PageHero from '@/components/shared/PageHero'
import { getWordPressData } from '@/lib/wordpress'
import { GET_POST, GET_POSTS } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const data = await getWordPressData<any>(GET_POSTS, { first: 100 })
    return (data?.posts?.nodes || []).map((post: any) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = await getWordPressData<any>(GET_POST, { id: slug })
    const post = data?.post
    if (post) {
      return {
        title: post.title,
        description: post.excerpt?.replace(/<[^>]+>/g, '').slice(0, 160) || '',
      }
    }
  } catch {}
  return { title: 'Blog Post' }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post: any = null

  try {
    const data = await getWordPressData<any>(GET_POST, { id: slug })
    post = data?.post
  } catch {}

  if (!post) notFound()

  return (
    <div className="bg-white">
      {/* Hero */}
      <PageHero className="!py-16 lg:!py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <nav className="text-sm text-[#686767] mb-6">
            <Link href="/" className="hover:text-[#4BE576]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/resources/blog" className="hover:text-[#4BE576]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1F1E1E]">{post.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories?.nodes?.map((cat: any) => (
              <span key={cat.slug} className="bg-[#4BE576] text-[#1E1E1E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {cat.name}
              </span>
            ))}
          </div>
          <h1 className="text-[#1F1E1E] text-3xl lg:text-4xl xl:text-5xl font-black mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#686767] text-sm">
            {post.author?.node?.name && <span>By {post.author.node.name}</span>}
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </PageHero>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 -mt-6 mb-12">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            width={900}
            height={400}
            className="w-full rounded-2xl object-cover h-[300px] lg:h-[400px]"
          />
        </div>
      )}

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <WpContent html={post.content} />
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/resources/blog" className="inline-flex items-center gap-2 text-[#4BE576] font-bold hover:gap-3 transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
