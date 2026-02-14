import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Shield,
  ArrowRight
} from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';
import { MAJOR_EVENTS } from '../constants';
import HeroSocialProof from '../components/HeroSocialProof';
import ReviewsMarquee from '../components/ReviewsMarquee';
import SEO from '../components/SEO';

// --- IMPORT LOCAL IMAGES ---
const majorEventsHero = import.meta.env.BASE_URL + 'images/Tomorrowland.jpg';

const MajorEvents: React.FC = () => {
  const localePath = useLocalePath();

  // Helper because we removed translations but data structure might still have them
  const getLoc = (val: any) => {
    if (typeof val === 'string') return val;
    return val?.en || val;
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title="Major Events Chauffeur Service Belgium | Tomorrowland, F1 Spa, EU Summits"
        description="Premium event transportation for Tomorrowland, Belgian Grand Prix, and EU Summits. Diplomatic and VIP chauffeur services."
        canonical="/services/major-events"
      />
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={majorEventsHero}
            alt="VIP Transport Belgian Events"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl lg:max-w-[848px] mt-[50px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight text-zinc-900">
              World Class Events <br />
              <span className="text-zinc-400 italic">World Class Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium leading-relaxed">
              From the adrenaline of Spa-Francorchamps to the magic of Tomorrowland and high-stakes EU Summits. Arrive with precision and prestige.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg text-center">
                Secure Your Fleet
              </Link>
            </div>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Event Highlights Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-zinc-900 uppercase">Upcoming Major Events</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAJOR_EVENTS.map((event, i) => (
            <div key={i} className="group relative overflow-hidden bg-white flex flex-col border border-zinc-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 rounded-[2rem]">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={event.heroImage}
                  alt={getLoc(event.eventName)}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1 text-zinc-900">{getLoc(event.eventName)}</h3>
                <p className="text-zinc-900 font-bold uppercase tracking-widest text-[10px] mb-4">{getLoc(event.dates)}</p>
                <Link to={localePath('/booking')} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-900 hover:text-gold transition-colors">
                  <span>Book for Event</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Event Transport Matters */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">Precision Timing</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">We understand that every minute counts during major events. Our drivers plan routes meticulously to ensure punctual arrivals, avoiding congestion.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Calendar size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">Hourly Disposal</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Keep your vehicle and chauffeur on standby for the duration of the event. Flexibility to change plans instantly.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Shield size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">Protocol & Discretion</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Experienced in handling VIPs, diplomats, and celebrities with absolute confidentiality and professionalism.</p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">Secure Your Event Transport</h2>
          <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MajorEvents;
