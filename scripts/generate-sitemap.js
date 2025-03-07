import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URLs
const siteUrl = 'https://aweshelectronics.in';
const pages = [
  '',
  '#about',
  '#services',
  '#brands',
  '#testimonials',
  '#faq',
  '#blog',
  '#contact',
  '/blog/ac-warning-signs',
  '/blog/refrigerator-cooling-issues',
  '/blog/washing-machine-maintenance',
  '/price-calculator',
  '/diagnostic-tool'  // Added your tool pages
];

// Create sitemap content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${siteUrl}${page}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${page.includes('blog') ? 'monthly' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : page.includes('blog') ? '0.7' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

// Write sitemap to public folder
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');