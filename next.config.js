/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true
  },
  reactStrictMode: false
}

module.exports = nextConfig