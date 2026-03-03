import React from 'react'

interface PageHeroProps {
  backgroundType?: 'gradient' | 'image' | 'dark'
  backgroundImage?: { sourceUrl: string; altText: string }
  className?: string
  children: React.ReactNode
}

export default function PageHero({
  backgroundType = 'gradient',
  backgroundImage,
  className = '',
  children,
}: PageHeroProps) {
  const isDark = backgroundType === 'dark' || backgroundType === 'image'

  if (backgroundType === 'image' && backgroundImage?.sourceUrl) {
    return (
      <section
        className={`relative py-20 lg:py-28 overflow-hidden ${isDark ? 'text-white' : 'text-[#1F1E1E]'} ${className}`.trim()}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage.sourceUrl})` }}
          role="img"
          aria-label={backgroundImage.altText || ''}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </section>
    )
  }

  if (backgroundType === 'dark') {
    return (
      <section className={`bg-[#1F1E1E] py-20 lg:py-28 text-white ${className}`.trim()}>
        {children}
      </section>
    )
  }

  // Default: gradient
  return (
    <section className={`bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28 ${className}`.trim()}>
      {children}
    </section>
  )
}
