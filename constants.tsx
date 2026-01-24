
import React from 'react';
import { Plane, Mountain, Calendar, Map, Car, User, Briefcase } from 'lucide-react';
import { FleetVehicle, Service, RouteLogistics } from './types';

export const COLORS = {
  GOLD: '#D4AF37',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const SERVICES: Service[] = [
  {
    id: 'airport',
    title: 'Airport Transfers',
    description: 'Executive pick-up and drop-off at MXP, LIN, and BGY with flight tracking.',
    image: 'https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80&w=800',
    path: '/services/airport-transfers',
    icon: <Plane className="w-6 h-6" />
  },
  {
    id: 'ski',
    title: 'Ski Resorts',
    description: 'Safe and comfortable transfers to Cortina, St. Moritz, and the Italian Alps.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800',
    path: '/services/ski-resorts',
    icon: <Mountain className="w-6 h-6" />
  },
  {
    id: 'events',
    title: 'Major Events',
    description: 'Milan Fashion Week, Design Week, and the 2026 Winter Olympics.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    path: '/services/major-events',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    id: 'tours',
    title: 'Private Tours',
    description: 'Customized full-day tours to Lake Como, Venice, and Franciacorta.',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800',
    path: '/services/private-tours',
    icon: <Map className="w-6 h-6" />
  }
];

export const FLEET: FleetVehicle[] = [
  {
    id: 's-class',
    model: 'Mercedes-Benz S-Class',
    category: 'VIPs & Executives.',
    passengers: 3,
    luggage: 2,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    features: [
      'Ultimate privacy & status.',
      'Galas & long-haul rest.',
      'First Class on wheels.'
    ]
  },
  {
    id: 'v-class',
    model: 'Mercedes-Benz V-Class',
    category: 'Families & Teams.',
    passengers: 7,
    luggage: 7,
    image: 'https://images.unsplash.com/photo-1631557007739-e4d65022204c?auto=format&fit=crop&q=80&w=800',
    features: [
      'Spacious luxury.',
      'Ski trips & roadshows.',
      'Travel together, comfortably.'
    ]
  },
  {
    id: 'e-class',
    model: 'Mercedes-Benz E-Class',
    category: 'Corporate & Solo.',
    passengers: 3,
    luggage: 3,
    image: 'https://images.unsplash.com/photo-1606148047413-568324f9f7ba?auto=format&fit=crop&q=80&w=800',
    features: [
      'Smart & professional.',
      'Airport hops & meetings.',
      'Efficient business travel.'
    ]
  }
];

export const LOGISTICS: RouteLogistics[] = [
  { from: 'Malpensa (MXP)', to: 'Cortina d\'Ampezzo', time: '4h 30m', distance: '410 km' },
  { from: 'Milan City Center', to: 'Bormio', time: '3h 15m', distance: '200 km' },
  { from: 'Milan City Center', to: 'San Siro (Opening)', time: '25m', distance: '8 km' },
  { from: 'Milan City Center', to: 'Verona (Closing)', time: '1h 45m', distance: '160 km' },
  { from: 'Linate (LIN)', to: 'Milan City Center', time: '20m', distance: '10 km' }
];
