import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: {
    default: 'Recycling Quotes — Sustainable Business Recycling',
    template: '%s | Recycling Quotes',
  },
  description: 'Get quick, dependable recycling solutions for end-of-life products, materials, and business waste. Free quotes, fast pickups, zero landfill commitment.',
  keywords: 'recycling, business recycling, recycling quote, pallet recycling, electronics recycling, waste management',
  openGraph: {
    type: 'website',
    siteName: 'Recycling Quotes',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body className={`${jakarta.className} antialiased overflow-x-hidden`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
