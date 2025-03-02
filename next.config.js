/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['img.icons8.com'],
  },
  experimental: {
    scrollRestoration: true
  },
  reactStrictMode: false,
  // Added for better SEO and routing
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig