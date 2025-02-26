/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['img.icons8.com'],

  },
  experimental: {
    scrollRestoration: true
  },
  reactStrictMode: false
}

module.exports = nextConfig