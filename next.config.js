/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'redapp.co.il',
      'images.unsplash.com',
      'plus.unsplash.com',
      'img.freepik.com',
      'images.pexels.com',
      'placehold.co'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 90000,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    // Add SVGR support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Add support for other file types if needed
    config.module.rules.push({
      test: /\.(pdf|doc|docx|xls|xlsx|txt|webp)$/,
      use: ['file-loader'],
    });

    config.externals = [...(config.externals || []), 'canvas', 'jsdom'];

    return config;
  },
  // Transpile framer-motion and other packages
  transpilePackages: ['framer-motion', 'react-icons'],
  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 15 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
