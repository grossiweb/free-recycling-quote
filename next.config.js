/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-706211-6239132.cloudwaysapps.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/industries/', destination: '/industries', permanent: true },
      { source: '/materials/', destination: '/materials', permanent: true },
      { source: '/resources/', destination: '/resources', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
    ]
  },
}

module.exports = nextConfig
