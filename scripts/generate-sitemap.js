import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://milanluxurytransfer.com';
const LANGUAGES = ['en', 'it', 'ru'];

const STATIC_ROUTES = [
  '',
  'booking',
  'fleet',
  'services/airport-transfers',
  'services/ski-resorts',
  'services/major-events',
  'services/private-tours',
  'privacy',
  'terms'
];

const DYNAMIC_ROUTES = [
  // Events
  'events/monza-f1',
  'events/fashion-week',
  'events/design-week',
  'events/san-siro',

  // Airports
  'airports/malpensa',
  'airports/linate',
  'airports/bergamo',

  // Transfers
  'transfers/malpensa-to-milan',
  'transfers/linate-to-milan',

  // Destinations
  'destinations/cortina',
  'destinations/st-moritz',
  'destinations/courmayeur',
  'destinations/livigno',
  'destinations/cervinia',
  'destinations/courchevel'
];

const ALL_ROUTES = [...STATIC_ROUTES, ...DYNAMIC_ROUTES];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // 1. Root redirect preservation (optional, but good for SEO signals)
  // We'll focus on the localized pages as the canonicals

  LANGUAGES.forEach(lang => {
    ALL_ROUTES.forEach(route => {
      const urlPath = route ? `${lang}/${route}` : `${lang}`;
      const loc = `${BASE_URL}/${urlPath}`;

      xml += '  <url>\n';
      xml += `    <loc>${loc}</loc>\n`;

      // Hreflang alternates
      LANGUAGES.forEach(altLang => {
        const altPath = route ? `${altLang}/${route}` : `${altLang}`;
        const altLoc = `${BASE_URL}/${altPath}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altLoc}"/>\n`;
      });

      // x-default (pointing to English)
      const defaultPath = route ? `en/${route}` : `en`;
      const defaultLoc = `${BASE_URL}/${defaultPath}`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultLoc}"/>\n`;

      xml += '    <changefreq>daily</changefreq>\n';
      xml += '    <priority>0.8</priority>\n';
      xml += '  </url>\n';
    });
  });

  xml += '</urlset>';

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  console.log(`Sitemap generated at ${outputPath}`);
}

generateSitemap();
