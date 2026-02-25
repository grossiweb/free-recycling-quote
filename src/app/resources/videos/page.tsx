import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos — Recycling Education',
  description: 'Educational videos about our recycling processes, program setup, and sustainability best practices.',
}

export default function VideosPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-neutral-50 to-emerald-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#686767] text-sm font-bold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-[#1F1E1E] text-4xl lg:text-5xl font-black mb-4">Videos</h1>
          <p className="text-[#686767] text-xl max-w-2xl mx-auto">
            Watch our educational videos about recycling processes and sustainability programs.
          </p>
        </div>
      </section>

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
    </div>
  )
}
