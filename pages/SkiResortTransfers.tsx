import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ChevronDown,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';
import { SKI_RESORTS } from '../constants'; // This now holds Belgian destinations
import HeroSocialProof from '../components/HeroSocialProof';
import ReviewsMarquee from '../components/ReviewsMarquee';
import SEO from '../components/SEO';

// --- IMPORT LOCAL IMAGES ---
// Using a generic luxury car image for the hero
const destinationHeroImg = import.meta.env.BASE_URL + 'images/V_Class_On_Event.webp';

const SkiResortTransfers: React.FC = () => {
  const localePath = useLocalePath();

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title="Luxury City Transfers Belgium | Bruges, Antwerp, Paris & Beyond"
        description="Private chauffeur services from Brussels to major European destinations. Visit Bruges, Antwerp, Ghent, Paris, and Amsterdam in style."
        canonical="/services/ski-resorts"
      />
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destinationHeroImg}
            alt="Luxury Transfer to Belgian Cities"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mt-[70px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight text-zinc-900">
              Explore the Heart <br />
              <span className="text-zinc-400 italic">of Europe</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium leading-relaxed">
              From the canals of Bruges to the fashion streets of Antwerp and Paris. Your journey begins with our executive chauffeur service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg text-center">
                Book Your Journey
              </Link>
            </div>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top Destinations Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-zinc-900 uppercase">Premium Destinations</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Belgian Cities */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-sans font-bold mb-10 text-zinc-900 border-l-4 border-gold pl-4">The Heart of Belgium</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKI_RESORTS.filter(dest => !['France', 'Netherlands', 'Luxembourg'].includes(dest.region)).map((dest, i) => (
              <div key={dest.slug} className="group relative overflow-hidden bg-white flex flex-col border border-zinc-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
                <div className="h-64 overflow-hidden shrink-0">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-1 text-zinc-900">{dest.name}</h3>
                  <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4">{dest.region}</p>
                  <p className="text-sm text-zinc-500 mb-6 line-clamp-2">
                    {/* Accessing string property directly since we removed translations / strictly typed constants */}
                    {(dest.sellingPoint as any)?.en || dest.sellingPoint}
                  </p>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs mb-8 font-medium">
                    <Clock size={14} className="text-gold" />
                    <span>{dest.time} from Brussels</span>
                  </div>
                  <Link to={localePath(`/destinations/${dest.slug}`)} className="block text-center bg-zinc-900 text-white py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all mt-auto shadow-md">
                    Explore {dest.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Connections */}
        <div>
          <h3 className="text-2xl md:text-3xl font-sans font-bold mb-10 text-zinc-900 border-l-4 border-gold pl-4">Cross-Border Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKI_RESORTS.filter(dest => ['France', 'Netherlands', 'Luxembourg'].includes(dest.region)).map((dest, i) => (
              <div key={dest.slug} className="group relative overflow-hidden bg-white flex flex-col border border-zinc-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
                <div className="h-64 overflow-hidden shrink-0">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-1 text-zinc-900">{dest.name}</h3>
                  <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-4">{dest.region}</p>
                  <p className="text-sm text-zinc-500 mb-6 line-clamp-2">
                    {/* Accessing string property directly since we removed translations / strictly typed constants */}
                    {(dest.sellingPoint as any)?.en || dest.sellingPoint}
                  </p>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs mb-8 font-medium">
                    <Clock size={14} className="text-gold" />
                    <span>{dest.time} from Brussels</span>
                  </div>
                  <Link to={localePath(`/destinations/${dest.slug}`)} className="block text-center bg-zinc-900 text-white py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all mt-auto shadow-md">
                    Explore {dest.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <ReviewsMarquee />

      {/* 3. FAQ Section */}
      <section className="py-32 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-sans font-bold tracking-tight mb-16 text-center text-zinc-900 uppercase">Common Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                Can you drive into city centers?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                Yes, all our vehicles are Euro 6 LEZ (Low Emission Zone) compliant, allowing us to drop you off right at your hotel door in Brussels, Antwerp, Ghent, and Paris.
              </div>
            </details>
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                Do you do return trips?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                Absolutely. We can arrange wait-and-return services for day trips, or schedule a separate return transfer for longer stays.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">Ready to Discover Belgium?</h2>
          <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            Get Your Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SkiResortTransfers;
