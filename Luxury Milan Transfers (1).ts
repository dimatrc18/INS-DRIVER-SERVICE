
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
  icon?: React.ReactNode;
}

export interface FleetVehicle {
  id: string;
  model: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
}

export interface RouteLogistics {
  from: string;
  to: string;
  time: string;
  distance: string;
}