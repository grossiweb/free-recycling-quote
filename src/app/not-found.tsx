import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="w-20 h-20 bg-[#4BE576] rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-3xl font-black text-[#1E1E1E]">404</span>
      </div>
      <h1 className="text-[#1F1E1E] text-3xl lg:text-4xl font-black mb-4">Page Not Found</h1>
      <p className="text-[#686767] text-lg max-w-md mx-auto mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
