import { GraphQLClient } from 'graphql-request'
import type { DocumentNode } from 'graphql'
import { print } from 'graphql'

// Server-side uses direct WP URL; client-side uses local proxy to avoid CORS
const WORDPRESS_API_URL =
  typeof window === 'undefined'
    ? process.env.WORDPRESS_API_URL ||
      'https://wordpress-706211-6239132.cloudwaysapps.com/graphql'
    : '/api/graphql'

export const graphqlClient = new GraphQLClient(WORDPRESS_API_URL, {
  headers: { 'Content-Type': 'application/json' },
})

// Apollo Client (used by client components / header menu)
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const httpLink = createHttpLink({ uri: WORDPRESS_API_URL })

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
})

export async function getWordPressData<T = any>(
  query: string | DocumentNode,
  variables?: Record<string, unknown>
): Promise<T> {
  const queryString = typeof query === 'string' ? query : print(query)

  // Use native fetch so Next.js App Router respects revalidation
  const res = await fetch(WORDPRESS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: queryString, variables }),
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`WordPress GraphQL request failed: ${res.status}`)
  }

  const json = await res.json()
  if (json.errors?.length) {
    throw new Error(json.errors[0].message)
  }
  return json.data as T
}
