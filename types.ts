
import React from 'react';

export interface LocalizedString {
  en: string;
  it: string;
  ru: string;
}

export interface Service {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  path: string;
  icon?: React.ReactNode;
}

export interface FleetVehicle {
  id: string;
  model: string;
  category: LocalizedString;
  passengers: number;
  luggage: number;
  image: string;
  features: LocalizedString[];
}

export interface RouteLogistics {
  from: string;
  to: string;
  time: string;
  distance: string;
}

export interface FleetFocus {
  model: string;
  description: LocalizedString;
}

export interface AirportDist {
  name: string;
  distance: string;
  time: string;
}

export interface HotelInfo {
  name: string;
  description: LocalizedString;
}

export interface SkiResort {
  slug: string;
  name: string; // Keep name as string if it's a proper noun (e.g. "Cortina")
  h1: LocalizedString;
  heroText: LocalizedString;
  heroImage: string;
  sellingPoint: LocalizedString;
  distance: string;
  time: string;
  region: string; // Could be localized, but "Italy" is simple
  seoText: LocalizedString;
  faqs: { q: LocalizedString; a: LocalizedString }[];
  testimonialQuote: LocalizedString;
  testimonialAuthor: string;
  heroImageObjectPosition?: string;

  // Rich Content fields
  routeDescription: LocalizedString;
  altitude: string;
  season: LocalizedString;
  skiCapacity: LocalizedString;
  pricing: {
    eClass: string;
    vClass: string;
  };
  topHotels: HotelInfo[];
  transferHubs: AirportDist[];
}

export interface MajorEvent {
  slug: string;
  eventName: LocalizedString; // Changed to localized for Footer
  h1: LocalizedString;
  dates: LocalizedString; // e.g. "September" vs "Settembre"
  heroImage: string;
  heroText: LocalizedString;
  logisticsText: LocalizedString;
  primaryFleet: FleetFocus;
  secondaryFleet: FleetFocus;
  stats: { label: LocalizedString; value: LocalizedString }[];
  seoTitle: LocalizedString;
  seoContent: LocalizedString;
  testimonialQuote: LocalizedString;
  testimonialAuthor: string;
  heroImageObjectPosition?: string;
}

export interface InternalLink {
  label: LocalizedString;
  path: string;
}

export interface ArrivalCard {
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  image: string;
  link: string;
}

export interface AirportPageData {
  slug: string; // e.g. 'malpensa'
  title: LocalizedString; // Tab Title
  h1: LocalizedString;
  heroText: LocalizedString;
  heroImage: string;
  breadcrumbLabel: string; // Keep simple or localized? "Malpensa MXP" is universal.
  faqs: { q: LocalizedString; a: LocalizedString }[];
  seoTitle: LocalizedString;
  seoText: LocalizedString;
  internalLinks: InternalLink[];
  arrivalCards: ArrivalCard[];
  structuredData: any; // Keep specific schema object
}
