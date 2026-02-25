import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SubpageTemplateProps {
  title: string
  category?: string
  categoryHref?: string
  intro?: string
  content?: string
  featuredImage?: { sourceUrl: string; altText: string }
}

export default function SubpageTemplate({
  title,
  category,
  categoryHref,
  intro,
  content,
  featuredImage,
}: SubpageTemplateProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          {category && categoryHref && (
            <nav className="text-sm text-[#686767] mb-6">
              <Link href="/" className="hover:text-[#4BE576] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href={categoryHref} className="hover:text-[#4BE576] transition-colors capitalize">
                {category}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#1F1E1E]">{title}</span>
            </nav>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {category && (
                <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">
                  {category}
                </p>
              )}
              <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-6 leading-tight">
                {title}
              </h1>
              {intro && (
                <p className="text-[#686767] text-xl leading-relaxed mb-8">{intro}</p>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/schedule-pickup" className="btn-secondary">
                  Schedule Pickup
                </Link>
              </div>
            </div>

            {featuredImage ? (
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={featuredImage.sourceUrl}
                  alt={featuredImage.altText || title}
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ) : (
              <div className="bg-emerald-100 rounded-2xl h-[300px] lg:h-[400px] flex items-center justify-center">
                <svg className="w-20 h-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      {content && (
        <section className="py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <div
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </section>
      )}

      {/* Default placeholder content if no WP content */}
      {!content && (
        <section className="py-20 bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-10">
            <div className="prose prose-lg max-w-none text-[#686767]">
              <p>
                Our expert team provides comprehensive {title.toLowerCase()} solutions tailored to your
                business needs. We handle everything from initial assessment to program implementation
                and ongoing support.
              </p>
              <h2>How It Works</h2>
              <ol>
                <li><strong>Free Assessment</strong> — We evaluate your recycling needs at no cost.</li>
                <li><strong>Custom Program Design</strong> — We create a plan that fits your operations.</li>
                <li><strong>Implementation</strong> — We set up collection, pickup, and reporting.</li>
                <li><strong>Ongoing Support</strong> — We provide regular reporting and adjustments.</li>
              </ol>
              <h2>Why Choose Us</h2>
              <ul>
                <li>Zero landfill commitment</li>
                <li>Certified and compliant processing</li>
                <li>Detailed reporting for ESG documentation</li>
                <li>Flexible pickup scheduling</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#4BE576] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-[#1E1E1E] text-3xl lg:text-4xl font-black mb-4">
            Ready to get started with {title}?
          </h2>
          <p className="text-[#1E1E1E]/70 text-lg mb-8">
            Contact us for a free consultation and same-day quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#1E1E1E] text-white font-bold px-10 py-4 rounded-full hover:bg-[#303030] transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center justify-center border-2 border-[#1E1E1E] text-[#1E1E1E] font-bold px-10 py-4 rounded-full hover:bg-[#1E1E1E] hover:text-white transition"
            >
              Schedule Pickup
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
