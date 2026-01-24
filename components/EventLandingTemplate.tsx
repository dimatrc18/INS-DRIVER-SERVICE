import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
import MinimalTestimonial from './MinimalTestimonial';

// --- IMPORT FLEET IMAGES DIRECTLY ---
// Make sure these match your filenames exactly!
import sClassEventImg from '../images/S_Class_On_Event.png';
import vClassEventImg from '../images/V_Class_On_Event.png';

interface FleetFocus {
  model: string;
  description: string;
  // removed 'image' from here because we will hardcode the correct event images below
}

interface EventLandingProps {
  eventName: string;
  h1: string;
  heroText: string;
  heroImage: string; // Passed from parent (e.g., Major_Events_Hero.png)
  dates: string;
  logisticsText: string;
  primaryFleet: FleetFocus;
  secondaryFleet: FleetFocus;
  stats: { label: string; value: string }[];
  seoTitle: string;
  seoContent: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  heroImageObjectPosition?: string; // Optional prop for image positioning
}

const EventLandingTemplate: React.FC<EventLandingProps> = ({
  eventName, h1, heroText, heroImage, dates, logisticsText, primaryFleet, secondaryFleet, stats, seoTitle, seoContent,
  testimonialQuote, testimonialAuthor, heroImageObjectPosition = 'object-center'
}) => {
  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={eventName}
            className={`w-full h-full object-cover opacity-50 grayscale-[0.2] ${heroImageObjectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-4 tracking-tighter">
              {h1}
            </h1>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-8">{dates}</p>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              {heroText}
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Event Transport
            </Link>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-8">Why a Private Driver is Essential</h2>
            <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
              <p>{logisticsText}</p>
              <div className="flex items-start gap-4 p-6 bg-zinc-900/50 border-l-2 border-gold italic">
                <Info size={24} className="text-gold shrink-0 mt-1" />
                <p>"During major events in Milan, parking and traffic congestion make self-driving impossible. Our NCC licensed vehicles access restricted ZTL zones and VIP drop-off points."</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 border border-white/5 p-10">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-10 text-center">Event Service Stats</h3>
            <div className="space-y-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-zinc-500 uppercase text-xs tracking-widest">{stat.label}</span>
                  <span className="font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Fleet Focus */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">The Perfect Fleet Focus</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Primary Choice - Usually S-Class for Events */}
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <span className="bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Primary Choice</span>
              <h3 className="text-3xl font-bold mb-4">{primaryFleet.model}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">{primaryFleet.description}</p>

              {/* IMAGE: S-Class Event Shot */}
              <img
                src={sClassEventImg}
                alt={primaryFleet.model}
                className="w-full h-64 object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-lg"
              />

              <Link to="/booking" className="block text-center bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
                Book This Vehicle
              </Link>
            </div>

            {/* Secondary Choice - Usually V-Class for Entourage */}
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <span className="bg-zinc-200 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Secondary Choice</span>
              <h3 className="text-3xl font-bold mb-4">{secondaryFleet.model}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">{secondaryFleet.description}</p>

              {/* IMAGE: V-Class Event Shot */}
              <img
                src={vClassEventImg}
                alt={secondaryFleet.model}
                className="w-full h-64 object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-lg"
              />

              <Link to="/booking" className="block text-center border border-black text-black py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Book This Vehicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {testimonialQuote && testimonialAuthor && (
        <MinimalTestimonial quote={testimonialQuote} author={testimonialAuthor} />
      )}

      {/* SEO Block */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-gold mb-8">{seoTitle}</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm space-y-6">
            <p>{seoContent}</p>
          </div>
          <div className="mt-12">
            <Link to="/services/major-events" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
              <span>Return to Major Events</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventLandingTemplate;
