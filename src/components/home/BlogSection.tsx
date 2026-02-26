import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  date: string
  featuredImage?: { node: { sourceUrl: string; altText: string } }
}

interface BlogSectionProps {
  posts?: BlogPost[]
}

const placeholderPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Journey into Sustainable Recycling',
    slug: 'journey-into-sustainable-recycling',
    excerpt: 'Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus tincidunt. Aenean',
    date: new Date().toISOString(),
    featuredImage: { node: { sourceUrl: '/images/blog-1.png', altText: 'Blog post 1' } },
  },
  {
    id: '2',
    title: 'Journey into Sustainable Recycling',
    slug: 'journey-into-sustainable-recycling-2',
    excerpt: 'Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus tincidunt. Aenean',
    date: new Date().toISOString(),
    featuredImage: { node: { sourceUrl: '/images/blog-2.png', altText: 'Blog post 2' } },
  },
  {
    id: '3',
    title: 'Journey into Sustainable Recycling',
    slug: 'journey-into-sustainable-recycling-3',
    excerpt: 'Lorem ipsum dolor sit amet consectetur. Tellus congue et libero purus tincidunt. Aenean',
    date: new Date().toISOString(),
    featuredImage: { node: { sourceUrl: '/images/blog-3.png', altText: 'Blog post 3' } },
  },
]

export default function BlogSection({ posts }: BlogSectionProps) {
  const displayPosts = posts?.length ? posts : placeholderPosts

  return (
    <div className="flex flex-col items-center self-stretch bg-white py-10 sm:py-14 md:py-16 2xl:py-[110px] px-4 sm:px-6 md:px-10 2xl:px-[168px]">
      <span className="font-display text-[#1F1E1E] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 2xl:mb-[94px]">
        The Business Side of Sustainability
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start self-stretch w-full">
        {displayPosts.slice(0, 3).map((post) => (
          <div key={post.id} className="flex flex-col items-start bg-white gap-3 sm:gap-4 md:gap-[18px]">
            {post.featuredImage ? (
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                width={501}
                height={328}
                className="w-full h-auto object-cover aspect-video"
              />
            ) : (
              <div className="w-full h-[200px] bg-neutral-100 rounded-lg" />
            )}
            <div className="flex flex-col items-start self-stretch py-3 sm:py-4 pr-4 md:pr-6">
              <div className="flex flex-col items-start self-stretch pb-4 sm:pb-5 gap-3 sm:gap-4 md:gap-[22px]">
                <span className="text-[#1F1E1E] text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold">
                  {post.title}
                </span>
                {post.excerpt && (
                  <span
                    className="text-[#686767] text-sm sm:text-base md:text-lg w-full"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.replace(/<[^>]+>/g, '').slice(0, 120) }}
                  />
                )}
              </div>
              <Link href={`/resources/blog/${post.slug}`} className="flex items-center py-2.5 rounded-[30px]">
                <span className="text-[#1E1E1E] text-sm sm:text-base font-bold mr-3">
                  Read more
                </span>
                <Image
                  src="/images/arrow-readmore.png"
                  alt="Read more"
                  width={88}
                  height={24}
                  className="w-16 sm:w-[88px] h-5 sm:h-6 rounded-[30px] object-fill"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
