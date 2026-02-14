
import fs from 'fs';
import path from 'path';

// --- CONFIGURATION ---
// REPLACE THIS WITH YOUR ACTUAL DOMAIN
const BASE_URL = 'https://milanotransfers.com';

const LOCALES = ['en', 'it', 'ru'];

// Static routes from App.tsx
const STATIC_ROUTES = [
  '', // Home
  'booking',
  'fleet',
  'services/airport-transfers',
  'services/ski-resorts',
  'services/major-events',
  'services/private-tours',
  'privacy',
  'terms',
  // Hardcoded sub-pages
  'events/monza-f1',
  'events/fashion-week',
  'events/design-week',
  'events/san-siro',
  'airports/malpensa',
  'airports/linate',
  'airports/bergamo',
  'transfers/malpensa-to-milan',
  'transfers/linate-to-milan'
];

// Dynamic routes (from SkiResortTransfers.tsx)
const SKI_DESTINATIONS = [
  'cortina',
  'st-moritz',
  'courmayeur',
  'livigno',
  'cervinia',
  'courchevel'
];

const paths = [];

// Generate all paths for all locales
LOCALES.forEach(locale => {
  // Static Routes
  STATIC_ROUTES.forEach(route => {
    // Handle root path specially
    const urlPath = route ? `${locale}/${route}` : `${locale}`;
    paths.push(urlPath);
  });

  // Dynamic Ski Routes
  SKI_DESTINATIONS.forEach(slug => {
    paths.push(`${locale}/destinations/${slug}`);
  });
});

// Generate XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url>
    <loc>${BASE_URL}/${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public/sitemap.xml
const outputPath = path.resolve('public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml);

console.log(`Sitemap generated with ${paths.length} URLs at ${outputPath}`);
console.log(`IMPORTANT: Please update BASE_URL in scripts/generate-sitemap.mjs with your actual domain name.`);
