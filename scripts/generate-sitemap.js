const fs = require('fs');
const path = require('path');

const EXTERNAL_DATA_URL = 'https://redapp.co.il';

// Fetch dynamic data from your data sources
const fetchDynamicData = async () => {
  try {
    // Simulated dynamic data fetching. Replace with actual data sources
    const services = await fetchServices();
    const blogPosts = await fetchBlogPosts();
    const projects = await fetchProjects();

    return { services, blogPosts, projects };
  } catch (error) {
    console.error('Error fetching dynamic data:', error);
    return { services: [], blogPosts: [], projects: [] };
  }
};

// Placeholder functions - replace with actual data fetching logic
const fetchServices = async () => [
  'web-development',
  'mobile-development',
  'digital-marketing',
  'ui-ux-design',
  'cloud-solutions',
  'consulting'
];

const fetchBlogPosts = async () => [
  'web-design-trends-2024',
  'seo-optimization-guide',
  'react-performance-tips'
];

const fetchProjects = async () => [
  'project-1',
  'project-2',
  'project-3'
];

// Static pages that don't change frequently
const staticPages = [
  '',
  '/about',
  '/services',
  '/projects',
  '/blog',
  '/contact',
  '/pricing'
];

function generateSiteMap(dynamicData) {
  const { services, blogPosts, projects } = dynamicData;
  const now = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <!-- Static pages -->
      ${staticPages.map(page => `
        <url>
          <loc>${EXTERNAL_DATA_URL}${page}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>daily</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
          <xhtml:link 
            rel="alternate" 
            hreflang="he" 
            href="${EXTERNAL_DATA_URL}${page}"
          />
        </url>
      `).join('')}
      
      <!-- Services pages -->
      ${services.map(service => `
        <url>
          <loc>${EXTERNAL_DATA_URL}/services/${service}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          <xhtml:link 
            rel="alternate" 
            hreflang="he" 
            href="${EXTERNAL_DATA_URL}/services/${service}"
          />
        </url>
      `).join('')}

      <!-- Blog posts -->
      ${blogPosts.map(slug => `
        <url>
          <loc>${EXTERNAL_DATA_URL}/blog/${slug}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.6</priority>
          <xhtml:link 
            rel="alternate" 
            hreflang="he" 
            href="${EXTERNAL_DATA_URL}/blog/${slug}"
          />
        </url>
      `).join('')}

      <!-- Projects -->
      ${projects.map(project => `
        <url>
          <loc>${EXTERNAL_DATA_URL}/projects/${project}</loc>
          <lastmod>${now}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          <xhtml:link 
            rel="alternate" 
            hreflang="he" 
            href="${EXTERNAL_DATA_URL}/projects/${project}"
          />
        </url>
      `).join('')}
    </urlset>`;
}

// Main function to generate sitemap
async function createSitemap() {
  try {
    const dynamicData = await fetchDynamicData();
    const sitemap = generateSiteMap(dynamicData);

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Write sitemap
    fs.writeFileSync(
      path.join(publicDir, 'sitemap.xml'),
      sitemap.trim()
    );

    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run sitemap generation
createSitemap();
