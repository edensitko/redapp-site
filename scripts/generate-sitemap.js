const fs = require('fs');
const path = require('path');

const EXTERNAL_DATA_URL = 'https://red-website-d46b9.web.app';

// Sample blog posts - in a real application, you would get this from your data source
const posts = [
  {
    slug: 'modern-web-development',
  },
  {
    slug: 'cybersecurity-digital-age',
  }
];

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Add the static pages -->
      <url>
        <loc>${EXTERNAL_DATA_URL}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${EXTERNAL_DATA_URL}/blog</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      <!-- Add the blog posts -->
      ${posts
        .map(({ slug }) => {
          return `
            <url>
              <loc>${`${EXTERNAL_DATA_URL}/blog/${slug}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;
}

// Generate sitemap and save it to the out directory
const sitemap = generateSiteMap();
const outPath = path.join(process.cwd(), 'out');

// Create out directory if it doesn't exist
if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath, { recursive: true });
}

fs.writeFileSync(path.join(outPath, 'sitemap.xml'), sitemap);
