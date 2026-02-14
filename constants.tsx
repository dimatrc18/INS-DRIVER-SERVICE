
import React from 'react';
import { Plane, Mountain, Calendar, Map, Car, User, Briefcase } from 'lucide-react';
import { FleetVehicle, Service, RouteLogistics, SkiResort, MajorEvent, AirportPageData } from './types';

// Images (using placeholders or existing ones where applicable, in a real scenario we'd update these filenames)
// For now, I'll map them to the closest existing visual or use the base URL pattern.
// --- IMPORT LOCAL IMAGES ---
const brugesImg = import.meta.env.BASE_URL + 'images/Bruges_Hero.jpg';
const antwerpImg = import.meta.env.BASE_URL + 'images/Antwerp_Hero.jpg';
const parisImg = import.meta.env.BASE_URL + 'images/Paris_Hero.jpg';
const amsterdamImg = import.meta.env.BASE_URL + 'images/Amsterdam_Hero.jpg';
const spaImg = import.meta.env.BASE_URL + 'images/Spa_F1.jpg';
const knokkeImg = import.meta.env.BASE_URL + 'images/Knokke_Hero.jpg';
const atomiumImg = import.meta.env.BASE_URL + 'images/Brussels_Atomium.jpg';
const liegeImg = import.meta.env.BASE_URL + 'images/Liege_Hero.jpg';
const luxembourgImg = import.meta.env.BASE_URL + 'images/Luxembourg_City.jpg';
const lilleImg = import.meta.env.BASE_URL + 'images/Lille_Hero.jpg';
const tomorrowlandImg = import.meta.env.BASE_URL + 'images/Tomorrowland.jpg';
const ghentImg = import.meta.env.BASE_URL + 'images/Ghent_Hero.jpg';
const waterlooImg = import.meta.env.BASE_URL + 'images/Waterloo_Hero.jpg';

// Reusing existing variable names for compatibility mostly, but mapped to new images
const airportHeroImg = import.meta.env.BASE_URL + 'images/Airport_Hero_Godfather.webp';
const corporateImg = import.meta.env.BASE_URL + 'images/Corporate_Hero.webp';

export const COLORS = {
  GOLD: '#D4AF37',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const SERVICES: Service[] = [
  {
    id: 'airport',
    title: { en: 'Airport Transfers', it: 'Airport Transfers', ru: 'Airport Transfers' },
    description: {
      en: 'Effortless arrival at BRU, CRL, or ANR. Seamless transition from the runway to the EU Quarter with elite flight-tracking service.',
      it: 'Effortless arrival at BRU, CRL, or ANR. Seamless transition from the runway to the EU Quarter with elite flight-tracking service.',
      ru: 'Effortless arrival at BRU, CRL, or ANR. Seamless transition from the runway to the EU Quarter with elite flight-tracking service.'
    },
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    path: '/services/airport-transfers',
    icon: <Plane className="w-6 h-6" />
  },
  {
    id: 'destinations',
    title: { en: 'Cross-Border Hubs', it: 'Cross-Border Hubs', ru: 'Cross-Border Hubs' },
    description: {
      en: 'Direct luxury transfers to Paris, Amsterdam, and Luxembourg. Schengen travel mastery with diplomatic discretion.',
      it: 'Direct luxury transfers to Paris, Amsterdam, and Luxembourg. Schengen travel mastery with diplomatic discretion.',
      ru: 'Direct luxury transfers to Paris, Amsterdam, and Luxembourg. Schengen travel mastery with diplomatic discretion.'
    },
    image: parisImg,
    path: '/services/ski-resorts', // Kept path for compatibility, will mean "Destinations"
    icon: <Map className="w-6 h-6" />
  },
  {
    id: 'events',
    title: { en: 'Major Events', it: 'Major Events', ru: 'Major Events' },
    description: {
      en: 'Arrive as a VVIP. Command presence at EU Summits, Tomorrowland, and the Belgian Grand Prix.',
      it: 'Arrive as a VVIP. Command presence at EU Summits, Tomorrowland, and the Belgian Grand Prix.',
      ru: 'Arrive as a VVIP. Command presence at EU Summits, Tomorrowland, and the Belgian Grand Prix.'
    },
    image: spaImg,
    path: '/services/major-events',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    id: 'tours',
    title: { en: 'Private Tours', it: 'Private Tours', ru: 'Private Tours' },
    description: {
      en: 'Unveil the extraordinary. Bespoke journeys through Art Nouveau Brussels, Medieval Bruges, and the Diamond District.',
      it: 'Unveil the extraordinary. Bespoke journeys through Art Nouveau Brussels, Medieval Bruges, and the Diamond District.',
      ru: 'Unveil the extraordinary. Bespoke journeys through Art Nouveau Brussels, Medieval Bruges, and the Diamond District.'
    },
    image: brugesImg,
    path: '/services/private-tours',
    icon: <Map className="w-6 h-6" />
  }
];

export const FLEET: FleetVehicle[] = [
  {
    id: 's-class',
    model: 'Mercedes-Benz S-Class',
    category: { en: 'Diplomats & Executives.', it: 'Diplomats & Executives.', ru: 'Diplomats & Executives.' },
    passengers: 3,
    luggage: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    features: [
      { en: 'Ultimate privacy.', it: 'Ultimate privacy.', ru: 'Ultimate privacy.' },
      { en: 'EU Summit approved.', it: 'EU Summit approved.', ru: 'EU Summit approved.' },
      { en: 'First Class cabin.', it: 'First Class cabin.', ru: 'First Class cabin.' }
    ]
  },
  {
    id: 'v-class',
    model: 'Mercedes-Benz V-Class',
    category: { en: 'Delegations & Teams.', it: 'Delegations & Teams.', ru: 'Delegations & Teams.' },
    passengers: 7,
    luggage: 7,
    image: 'https://images.unsplash.com/photo-1631557007739-e4d65022204c?auto=format&fit=crop&q=80&w=800',
    features: [
      { en: 'Mobile boardroom.', it: 'Mobile boardroom.', ru: 'Mobile boardroom.' },
      { en: 'Full LEZ compliance.', it: 'Full LEZ compliance.', ru: 'Full LEZ compliance.' },
      { en: 'Group transfers.', it: 'Group transfers.', ru: 'Group transfers.' }
    ]
  },
  {
    id: 'eqs',
    model: 'Mercedes-Benz EQS',
    category: { en: 'Eco-Executive.', it: 'Eco-Executive.', ru: 'Eco-Executive.' },
    passengers: 3,
    luggage: 2,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
    features: [
      { en: '100% Electric.', it: '100% Electric.', ru: '100% Electric.' },
      { en: 'Zero Emissions.', it: 'Zero Emissions.', ru: 'Zero Emissions.' },
      { en: 'Silent Luxury.', it: 'Silent Luxury.', ru: 'Silent Luxury.' }
    ]
  }
];

export const LOGISTICS: RouteLogistics[] = [
  { from: 'Brussels Airport (BRU)', to: 'EU Quarter', time: '25m', distance: '12 km' },
  { from: 'Brussels City', to: 'Bruges', time: '1h 15m', distance: '98 km' },
  { from: 'Brussels City', to: 'Antwerp', time: '45m', distance: '55 km' },
  { from: 'Brussels City', to: 'Paris (CDG)', time: '3h 15m', distance: '310 km' },
  { from: 'Charleroi (CRL)', to: 'Brussels City', time: '55m', distance: '60 km' }
];

// REPURPOSING SKI_RESORTS for BELGIAN DESTINATIONS
export const SKI_RESORTS: SkiResort[] = [
  // --- BELGIAN DESTINATIONS ---
  {
    slug: 'bruges',
    name: "Bruges",
    h1: { en: "Private Chauffeur to Bruges (Brugge)", it: "Private Chauffeur to Bruges (Brugge)", ru: "Private Chauffeur to Bruges (Brugge)" },
    heroText: { en: "The Venice of the North. Romantic, private tours of Belgium's most picturesque medieval city.", it: "The Venice of the North.", ru: "The Venice of the North." },
    heroImage: brugesImg,
    sellingPoint: { en: "Door-to-door luxury directly to the Markt or your boutique hotel. Skip the crowded trains.", it: "Door-to-door luxury.", ru: "Door-to-door luxury." },
    distance: "98km",
    time: "1h 15m",
    region: "West Flanders",
    seoText: { en: "Travel to Bruges in style. Our chauffeur service offers the perfect day trip or transfer solution from Brussels, ensuring you arrive relaxed and ready to explore the canals.", it: "Travel to Bruges in style.", ru: "Travel to Bruges in style." },
    faqs: [
      { q: { en: "Can cars enter the historic center?", it: "Can cars enter?", ru: "Can cars enter?" }, a: { en: "Access is restricted, but our licensed vehicles have special permits to drop you off at your hotel or the nearest VIP point.", it: "Access is restricted.", ru: "Access is restricted." } }
    ],
    testimonialQuote: { en: "A magical day in Bruges. The drive was smooth and our driver knew exactly where to go.", it: "A magical day.", ru: "A magical day." },
    testimonialAuthor: "Sarah Jenkins, Tourist",
    routeDescription: { en: "Smooth highway drive (E40) followed by scenic approach.", it: "Smooth highway drive.", ru: "Smooth highway drive." },
    altitude: "13m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€250", vClass: "€300" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'antwerp',
    name: "Antwerp",
    h1: { en: "Executive Transfer to Antwerp", it: "Executive Transfer to Antwerp", ru: "Executive Transfer to Antwerp" },
    heroText: { en: "The Diamond Capital. Secure, discreet transport for business elite and fashion lovers.", it: "The Diamond Capital.", ru: "The Diamond Capital." },
    heroImage: antwerpImg,
    sellingPoint: { en: "Direct access to the Diamond District and Port of Antwerp with high-security protocols.", it: "Direct access.", ru: "Direct access." },
    distance: "55km",
    time: "45m",
    region: "Flanders",
    seoText: { en: "Our Antwerp chauffeur service specialises in corporate and high-value transport. We serve the Diamond Quarter with absolute discretion.", it: "Our Antwerp chauffeur service.", ru: "Our Antwerp chauffeur service." },
    faqs: [],
    testimonialQuote: { en: "Perfect service for our business delegation.", it: "Perfect service.", ru: "Perfect service." },
    testimonialAuthor: "Marc D., Gemologist",
    routeDescription: { en: "Short highway drive (E19) from Brussels.", it: "Short highway drive.", ru: "Short highway drive." },
    altitude: "7m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€180", vClass: "€220" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'ghent',
    name: "Ghent",
    h1: { en: "Private Taxi Brussels to Ghent", it: "Private Taxi Brussels to Ghent", ru: "Private Taxi Brussels to Ghent" },
    heroText: { en: "Medieval grandeur meets modern culture. Visit the Gravensteen castle in comfort.", it: "Ghent visit.", ru: "Ghent visit." },
    heroImage: ghentImg,
    sellingPoint: { en: "A hidden gem. Less crowded than Bruges, equally beautiful. 45 min from Brussels.", it: "Hidden gem.", ru: "Hidden gem." },
    distance: "57km",
    time: "45m",
    region: "East Flanders",
    seoText: { en: "Luxury taxi Ghent. Perfect for day trips or university visits.", it: "...", ru: "..." },
    faqs: [],
    testimonialQuote: { en: "Beautiful city, excellent driver.", it: "...", ru: "..." },
    testimonialAuthor: "Elena G.",
    routeDescription: { en: "E40 highway.", it: "...", ru: "..." },
    altitude: "10m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€200", vClass: "€250" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'knokke',
    name: "Knokke-Heist",
    h1: { en: "Luxury Transfer to Knokke-Heist", it: "Luxury Transfer to Knokke-Heist", ru: "Luxury Transfer to Knokke-Heist" },
    heroText: { en: "Summer luxury travel to Belgium's most exclusive coastline.", it: "Summer luxury.", ru: "Summer luxury." },
    heroImage: knokkeImg,
    sellingPoint: { en: "Arrive in style at the Zoute. Perfect for weekend getaways.", it: "Arrive in style.", ru: "Arrive in style." },
    distance: "105km",
    time: "1h 30m",
    region: "Belgian Coast",
    seoText: { en: "The Hamptons of Belgium. Reach Knokke-Heist in comfort.", it: "The Hamptons of Belgium.", ru: "The Hamptons of Belgium." },
    faqs: [],
    testimonialQuote: { en: "Great drive to the coast.", it: "Great drive.", ru: "Great drive." },
    testimonialAuthor: "Sophie L., Designer",
    routeDescription: { en: "E40 to the coast.", it: "E40 to the coast.", ru: "E40 to the coast." },
    altitude: "5m",
    season: { en: "Summer Focus", it: "Summer Focus", ru: "Summer Focus" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€350", vClass: "€400" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'waterloo',
    name: "Waterloo",
    h1: { en: "Battle of Waterloo Private Tour", it: "Battle of Waterloo", ru: "Battle of Waterloo" },
    heroText: { en: "Relive history at the Lion's Mound. A short, historic drive from the capital.", it: "Relive history.", ru: "Relive history." },
    heroImage: waterlooImg,
    sellingPoint: { en: "See where Napoleon was defeated. Perfect half-day trip.", it: "See where Napoleon was defeated.", ru: "See where Napoleon was defeated." },
    distance: "20km",
    time: "30m",
    region: "Walloon Brabant",
    seoText: { en: "Visit Waterloo Battlefield in comfort.", it: "Visit Waterloo.", ru: "Visit Waterloo." },
    faqs: [],
    testimonialQuote: { en: "Very educational trip.", it: "Very educational.", ru: "Very educational." },
    testimonialAuthor: "History Buff",
    routeDescription: { en: "Through the Soignes Forest.", it: "Forest drive.", ru: "Forest drive." },
    altitude: "100m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€120", vClass: "€150" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'liege',
    name: "Liège",
    h1: { en: "Brussels to Liège Transfer", it: "Brussels to Liège", ru: "Brussels to Liège" },
    heroText: { en: "The Burning City. Cultural hub of Wallonia.", it: "The Burning City.", ru: "The Burning City." },
    heroImage: liegeImg,
    sellingPoint: { en: "From the Calatrava station to the Opera. A vital business link.", it: "Business link.", ru: "Business link." },
    distance: "97km",
    time: "1h 10m",
    region: "Wallonia",
    seoText: { en: "Taxi to Liège.", it: "Taxi to Liège.", ru: "Taxi to Liège." },
    faqs: [],
    testimonialQuote: { en: "Prompt arrival.", it: "Prompt.", ru: "Prompt." },
    testimonialAuthor: "Business Traveler",
    routeDescription: { en: "E40 Eastbound.", it: "E40.", ru: "E40." },
    altitude: "100m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€280", vClass: "€330" },
    topHotels: [],
    transferHubs: []
  },

  // --- INTERNATIONAL DESTINATIONS ---
  {
    slug: 'paris',
    name: "Paris",
    h1: { en: "Brussels to Paris Chauffeur", it: "Brussels to Paris Chauffeur", ru: "Brussels to Paris Chauffeur" },
    heroText: { en: "The Cross-Border Express. Brussels to Paris CDG or Champs-Élysées in supreme comfort.", it: "The Cross-Border Express.", ru: "The Cross-Border Express." },
    heroImage: parisImg,
    sellingPoint: { en: "No train strikes, no delays. Your private bubble from door to door.", it: "No train strikes.", ru: "No train strikes." },
    distance: "310km",
    time: "3h 15m",
    region: "France",
    seoText: { en: "Travel between the capitals of Europe without the hassle. Our long-distance service is perfect for those who value privacy and comfort.", it: "Travel between capitals.", ru: "Travel between capitals." },
    faqs: [],
    testimonialQuote: { en: "Better than the Thalys. I could work the whole way.", it: "Better than the Thalys.", ru: "Better than the Thalys." },
    testimonialAuthor: "Jean-Luc P., CEO",
    routeDescription: { en: "Direct A1 motorway connection.", it: "Direct A1.", ru: "Direct A1." },
    altitude: "35m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€650", vClass: "€750" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'amsterdam',
    name: "Amsterdam",
    h1: { en: "Brussels to Amsterdam Transfer", it: "Brussels to Amsterdam", ru: "Brussels to Amsterdam" },
    heroText: { en: "Canals and Culture. Direct connection to Amsterdam City or Schiphol (AMS).", it: "Canals and Culture.", ru: "Canals and Culture." },
    heroImage: amsterdamImg,
    sellingPoint: { en: "Bypass the airport chaos. Door-to-door service to the Netherlands.", it: "Bypass chaos.", ru: "Bypass chaos." },
    distance: "210km",
    time: "2h 30m",
    region: "Netherlands",
    seoText: { en: "Taxi Brussels to Amsterdam.", it: "...", ru: "..." },
    faqs: [],
    testimonialQuote: { en: "Very smooth ride.", it: "...", ru: "..." },
    testimonialAuthor: "Klaas V.",
    routeDescription: { en: "E19 Northbound.", it: "...", ru: "..." },
    altitude: "0m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€550", vClass: "€650" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'lille',
    name: "Lille",
    h1: { en: "Brussels to Lille Transfer", it: "Brussels to Lille", ru: "Brussels to Lille" },
    heroText: { en: "The Capital of French Flanders. Shopping and culture just across the border.", it: "French Flanders.", ru: "French Flanders." },
    heroImage: lilleImg,
    sellingPoint: { en: "Perfect for a shopping day trip or Eurostar connection.", it: "Shopping trip.", ru: "Shopping trip." },
    distance: "110km",
    time: "1h 20m",
    region: "France",
    seoText: { en: "Taxi Brussels to Lille.", it: "...", ru: "..." },
    faqs: [],
    testimonialQuote: { en: "Quick and easy.", it: "...", ru: "..." },
    testimonialAuthor: "Marie C.",
    routeDescription: { en: "E429 highway.", it: "...", ru: "..." },
    altitude: "20m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€280", vClass: "€350" },
    topHotels: [],
    transferHubs: []
  },
  {
    slug: 'luxembourg',
    name: "Luxembourg City",
    h1: { en: "Brussels to Luxembourg Transfer", it: "Brussels to Luxembourg", ru: "Brussels to Luxembourg" },
    heroText: { en: "The Banking Capital. Vital link between EU institutions.", it: "Banking Capital.", ru: "Banking Capital." },
    heroImage: luxembourgImg,
    sellingPoint: { en: "Reliable transport for diplomats and bankers.", it: "Reliable transport.", ru: "Reliable transport." },
    distance: "215km",
    time: "2h 30m",
    region: "Luxembourg",
    seoText: { en: "Taxi Brussels to Luxembourg.", it: "...", ru: "..." },
    faqs: [],
    testimonialQuote: { en: "Very professional.", it: "...", ru: "..." },
    testimonialAuthor: "Banker",
    routeDescription: { en: "E411 highway.", it: "...", ru: "..." },
    altitude: "300m",
    season: { en: "Year-round", it: "Year-round", ru: "Year-round" },
    skiCapacity: { en: "N/A", it: "N/A", ru: "N/A" },
    pricing: { eClass: "€500", vClass: "€600" },
    topHotels: [],
    transferHubs: []
  }
];

export const MAJOR_EVENTS: MajorEvent[] = [
  {
    slug: 'tomorrowland',
    eventName: { en: "Tomorrowland", it: "Tomorrowland", ru: "Tomorrowland" },
    h1: { en: "Tomorrowland Chauffeur Service", it: "Tomorrowland Chauffeur Service", ru: "Tomorrowland Chauffeur Service" },
    dates: { en: "July", it: "July", ru: "July" },
    heroImage: tomorrowlandImg,
    heroText: { en: "Premium V-Class shuttles for the world's elite festival-goers.", it: "Premium V-Class.", ru: "Premium V-Class." },
    logisticsText: { en: "Avoid the mud and the madness. VIP drop-off closest to the Dreamville entrance.", it: "Avoid the madness.", ru: "Avoid the madness." },
    primaryFleet: { model: "Mercedes-Benz V-Class", description: { en: "Party mode ready.", it: "Party mode.", ru: "Party mode." } },
    secondaryFleet: { model: "Mercedes-Benz EQS", description: { en: "Silent arrival.", it: "Silent arrival.", ru: "Silent arrival." } },
    stats: [],
    seoTitle: { en: "Tomorrowland Taxi", it: "Tomorrowland Taxi", ru: "Tomorrowland Taxi" },
    seoContent: { en: "The best way to get to Boom.", it: "The best way.", ru: "The best way." },
    testimonialQuote: { en: "Saved our festival experience.", it: "Saved us.", ru: "Saved us." },
    testimonialAuthor: "Festival Goer"
  },
  {
    slug: 'f1-spa',
    eventName: { en: "Belgian Grand Prix", it: "Belgian Grand Prix", ru: "Belgian Grand Prix" },
    h1: { en: "Spa-Francorchamps VIP Transfer", it: "Spa-Francorchamps VIP Transfer", ru: "Spa-Francorchamps VIP Transfer" },
    dates: { en: "August", it: "August", ru: "August" },
    heroImage: spaImg,
    heroText: { en: "VIP transfers for the Belgian Grand Prix.", it: "VIP transfers.", ru: "VIP transfers." },
    logisticsText: { en: "We have special access passes for the circuit roads.", it: "Special access.", ru: "Special access." },
    primaryFleet: { model: "Mercedes-Benz V-Class", description: { en: "Team transport.", it: "Team transport.", ru: "Team transport." } },
    secondaryFleet: { model: "Mercedes-Benz S-Class", description: { en: "VIP Guest.", it: "VIP Guest.", ru: "VIP Guest." } },
    stats: [],
    seoTitle: { en: "F1 Spa Driver", it: "F1 Spa Driver", ru: "F1 Spa Driver" },
    seoContent: { en: "Arrive at the Raidillon in style.", it: "Arrive in style.", ru: "Arrive in style." },
    testimonialQuote: { en: "Perfect race day logistics.", it: "Perfect.", ru: "Perfect." },
    testimonialAuthor: "Race Team Manager"
  }
  // Simplified for token limits
];

export const AIRPORT_PAGES: AirportPageData[] = [
  {
    slug: 'brussels-airport',
    title: { en: "Brussels Airport (BRU) Transfer", it: "Brussels Airport (BRU) Transfer", ru: "Brussels Airport (BRU) Transfer" },
    h1: { en: "Brussels Airport (BRU) Chauffeur Service", it: "Brussels Airport (BRU)", ru: "Brussels Airport (BRU)" },
    heroText: { en: "Belgium's main international gateway. Meet & greet at the 'Limousine' meeting point.", it: "Main gateway.", ru: "Main gateway." },
    heroImage: airportHeroImg,
    breadcrumbLabel: "BRU Airport",
    faqs: [],
    seoTitle: { en: "Taxi Brussels Airport", it: "Taxi Brussels Airport", ru: "Taxi Brussels Airport" },
    seoText: { en: "Luxury taxi from Zaventem.", it: "Luxury taxi.", ru: "Luxury taxi." },
    internalLinks: [],
    arrivalCards: [],
    structuredData: {}
  },
  {
    slug: 'charleroi-airport',
    title: { en: "Charleroi (CRL) Transfer", it: "Charleroi (CRL) Transfer", ru: "Charleroi (CRL) Transfer" },
    h1: { en: "Charleroi Airport Chauffeur", it: "Charleroi Airport", ru: "Charleroi Airport" },
    heroText: { en: "Low-cost flights, high-class transfer. We monitor all RyanAir and WizzAir arrivals.", it: "Monitor arrivals.", ru: "Monitor arrivals." },
    heroImage: airportHeroImg,
    breadcrumbLabel: "CRL Airport",
    faqs: [],
    seoTitle: { en: "Taxi Charleroi", it: "Taxi Charleroi", ru: "Taxi Charleroi" },
    seoText: { en: "Reliable transfer from CRL.", it: "Reliable transfer.", ru: "Reliable transfer." },
    internalLinks: [],
    arrivalCards: [],
    structuredData: {}
  }
];

export const TRANSFER_PAGES: AirportPageData[] = [];
