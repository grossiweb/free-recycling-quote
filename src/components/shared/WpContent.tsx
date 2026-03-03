import React from 'react'

interface WpContentProps {
  html: string
  className?: string
}

function processWordPressHtml(html: string): string {
  let processed = html

  // Add loading="lazy" and decoding="async" to images for performance
  processed = processed.replace(
    /<img([^>]*?)>/gi,
    (match, attrs: string) => {
      if (!attrs.includes('loading=')) {
        attrs += ' loading="lazy"'
      }
      if (!attrs.includes('decoding=')) {
        attrs += ' decoding="async"'
      }
      if (!attrs.includes('style=')) {
        attrs += ' style="max-width:100%;height:auto"'
      }
      return `<img${attrs}>`
    }
  )

  return processed
}

export default function WpContent({ html, className = '' }: WpContentProps) {
  if (!html || html.trim() === '') return null

  const processedHtml = processWordPressHtml(html)

  return (
    <div
      className={`wp-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  )
}
