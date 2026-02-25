import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Free Recycling Quote — Sustainable Business Recycling',
    template: '%s | Free Recycling Quote',
  },
  description: 'Get quick, dependable recycling solutions for end-of-life products, materials, and business waste. Free quotes, fast pickups, zero landfill commitment.',
  keywords: 'recycling, business recycling, free recycling quote, pallet recycling, electronics recycling, waste management',
  openGraph: {
    type: 'website',
    siteName: 'Free Recycling Quote',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
