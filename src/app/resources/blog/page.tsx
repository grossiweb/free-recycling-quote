import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getWordPressData } from '@/lib/wordpress'
import { GET_POSTS } from '@/lib/queries'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog — Recycling Insights',
  description: 'Industry insights, case studies, and recycling tips to help your business build a more sustainable future.',
}

export default async function BlogPage() {
  let posts: any[] = []
  try {
    const data = await getWordPressData<any>(GET_POSTS, { first: 12 })
    posts = data?.posts?.nodes || []
  } catch {}

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-4">Blog</h1>
          <p className="text-[#686767] text-xl max-w-2xl mx-auto">
            Recycling insights, sustainability tips, and industry news.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article key={post.id} className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-emerald-50 h-48 overflow-hidden">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-emerald-200">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[#686767] text-xs font-semibold uppercase tracking-wider mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <h2 className="text-[#1F1E1E] text-lg font-bold mb-3 line-clamp-2">{post.title}</h2>
                    {post.excerpt && (
                      <p className="text-[#686767] text-sm leading-relaxed flex-1 mb-4 line-clamp-3"
                         dangerouslySetInnerHTML={{ __html: post.excerpt.replace(/<[^>]+>/g, '') }} />
                    )}
                    <Link
                      href={`/resources/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#4BE576] font-bold text-sm hover:gap-3 transition-all"
                    >
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#686767]">
              <p className="text-lg">Blog posts coming soon. Check back for recycling insights and sustainability news.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
