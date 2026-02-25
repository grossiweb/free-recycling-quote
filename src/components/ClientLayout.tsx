'use client'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/wordpress'
import Header from './Header'
import Footer from './Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </ApolloProvider>
  )
}
