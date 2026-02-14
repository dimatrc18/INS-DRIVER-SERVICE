# Luxury Milan Transfers - 2026 Winter Games Edition

Premium Chauffeur Service based in Milan, Italy. Specialized in high-end airport transfers, private tours, and event logistics for the 2026 Winter Olympics.

## Features
- **Winter Ready Fleet**: Mercedes-Benz S-Class and V-Class equipped for alpine conditions.
- **Event Coverage**: Special sections for Milan Fashion Week, Design Week, and the Monza Grand Prix.
- **Tour Destinations**: Lake Como, Venice, Franciacorta, and major Ski Resorts.
- **Premium Aesthetics**: Dark mode design with gold accents and high-resolution imagery.

## Tech Stack
- React 19
- Vite
- Lucide React (Icons)
- React Router 7

## Deployment
This project is configured for GitHub Pages.
Run `npm run deploy` to publish the site to GitHub.

## Refactoring Details
### Ski Resort Architecture Update
- **Centralized Data**: All ski resort data (text, images, SEO tags) is now stored in `constants.tsx`.
- **Dynamic Routing**: The application now uses a single dynamic route `/destinations/:slug` associated with the `SkiResortLandingTemplate` component.
- **SEO Optimization**: `react-helmet-async` manages the `<head>` elements dynamically based on the current resort, ensuring unique titles and meta descriptions for each page.
- **Maintainability**: New resorts can be added simply by updating the `SKI_RESORTS` array in `constants.tsx`, without creating new files or routes.
