const fs = require('fs');
const path = require('path');

const EXTERNAL_DATA_URL = 'https://redapp.co.il';

// All static pages
const staticPages = [
  '',
  '/about',
  '/services',
  '/projects',
  '/blog',
  '/contact',
  '/pricing',
];

// Services pages
const services = [
  'web-development',
  'mobile-development',
  'digital-marketing',
  'ui-ux-design',
  'cloud-solutions',
  'consulting',
];

// Blog posts
const posts = [
  'web-design-trends-2024',
  'seo-optimization-guide',
  'react-performance-tips',
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <!-- Static pages -->
      ${staticPages
        .map(page => {
          return `
            <url>
              <loc>${EXTERNAL_DATA_URL}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
              <xhtml:link 
                rel="alternate" 
                hreflang="he" 
                href="${EXTERNAL_DATA_URL}${page}"
              />
            </url>
          `;
        })
        .join('')}
      
      <!-- Services pages -->
      ${services
        .map(service => {
          return `
            <url>
              <loc>${EXTERNAL_DATA_URL}/services/${service}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
              <xhtml:link 
                rel="alternate" 
                hreflang="he" 
                href="${EXTERNAL_DATA_URL}/services/${service}"
              />
            </url>
          `;
        })
        .join('')}

      <!-- Blog posts -->
      ${posts
        .map(slug => {
          return `
            <url>
              <loc>${EXTERNAL_DATA_URL}/blog/${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.6</priority>
              <xhtml:link 
                rel="alternate" 
                hreflang="he" 
                href="${EXTERNAL_DATA_URL}/blog/${slug}"
              />
            </url>
          `;
        })
        .join('')}
    </urlset>`;
}

// Generate sitemap
const sitemap = generateSiteMap();

// Write sitemap to public directory
fs.writeFileSync(
  path.join(process.cwd(), 'public', 'sitemap.xml'),
  sitemap.trim()
);
