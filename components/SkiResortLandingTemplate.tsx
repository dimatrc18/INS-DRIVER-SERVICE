import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalePath } from '../hooks/useLocalePath';
import {
  Clock,
  MapPin,
  Calendar,
  ShieldCheck,
  Mountain,
  ArrowRight,
  Users,
  Briefcase,
  CheckCircle2,
  Navigation,
  Building2,
  Plane,
  ChevronDown
} from 'lucide-react';
import ReviewsMarquee from './ReviewsMarquee';
import { SKI_RESORTS } from '../constants';
import SEO from './SEO';

// --- 1. IMPORT WINTER FLEET IMAGES ---
const vClassWinterImg = import.meta.env.BASE_URL + 'images/V_Class_In_Mountains_Godfather.webp';
const sClassWinterImg = import.meta.env.BASE_URL + 'images/S_Class_In_Mountains_Cropped.webp';

const SkiResortLandingTemplate: React.FC = () => {
  const { i18n } = useTranslation(['destinations', 'services']);
  const localePath = useLocalePath();
  const { slug } = useParams<{ slug: string }>();
  const resort = SKI_RESORTS.find(r => r.slug === slug);

  // If no matching resort is found, redirect to the main ski page or 404
  if (!resort) {
    return <Navigate to="/services/ski-resorts" replace />;
  }

  const {
    name, h1, heroText, heroImage,
    sellingPoint, distance, time, region, seoText, faqs,
    testimonialQuote, testimonialAuthor, heroImageObjectPosition = 'object-center',
    // New Rich Fields
    routeDescription, altitude, season, skiCapacity, pricing, topHotels, transferHubs
  } = resort;

  // Helper for localized content
  const getLoc = (val: any) => {
    if (typeof val === 'string') return val;
    return val['en'] || val[i18n.language] || '';
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": getLoc(f.q),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": getLoc(f.a)
      }
    }))
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title={`${getLoc(h1)} | INS Driver Service`}
        description={getLoc(seoText).substring(0, 160)}
        schema={JSON.stringify(faqSchema)}
      />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`Luxury transfer to ${name}`}
            className={`w-full h-full object-cover opacity-80 grayscale-[0.2] ${heroImageObjectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mt-[70px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-zinc-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                {region}
              </span>
              <span className="bg-gold/20 text-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                <Mountain size={12} /> {altitude}
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-sans font-bold leading-tight mb-6 tracking-tighter text-zinc-900">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium leading-relaxed max-w-2xl">
              {getLoc(heroText)}
            </p>

            {/* Quick Stats Grid */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 mb-12 border-l-2 border-gold pl-6">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Distance</span>
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                  <MapPin size={18} className="text-gold" /> {distance}
                </div>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Duration</span>
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                  <Clock size={18} className="text-gold" /> {time}
                </div>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Season</span>
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-lg">
                  <Calendar size={18} className="text-gold" /> {getLoc(season)}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-xl text-center">
                Book Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Logistics (SEO Value) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Journey Details */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-6 text-zinc-900">The Journey</h2>
              <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-8">
                {getLoc(sellingPoint)}
              </p>
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <h4 className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm mb-4 text-zinc-900">
                  <Navigation size={16} className="text-gold" /> Route Description
                </h4>
                <p className="text-zinc-600 italic leading-relaxed">"{getLoc(routeDescription)}"</p>
              </div>
            </div>
          </div>

          {/* Right: Transfer Hubs Table */}
          {transferHubs && transferHubs.length > 0 && (
            <div className="lg:col-span-5">
              <div className="bg-zinc-900 text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Plane size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-8 relative z-10">Logistics</h3>
                <div className="space-y-6 relative z-10">
                  {transferHubs.map((hub, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold font-bold text-xs">
                          {hub.name.match(/\(([^)]+)\)/)?.[1] || "AIR"}
                        </div>
                        <span className="font-medium text-zinc-200">{hub.name.split('(')[0]}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">{hub.time}</div>
                        <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{hub.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hotel Authority Section */}
      {topHotels && topHotels.length > 0 && (
        <section className="py-20 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-zinc-900 mb-4">Premium Drop-off Points</h2>
              <p className="text-zinc-500 max-w-2xl mx-auto">We provide direct door-to-door service to all major hotels and key locations in {name}.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topHotels.map((hotel, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-gold mb-6">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{hotel.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {getLoc(hotel.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fleet & Pricing (Conversion) */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-bold tracking-tighter mb-4 text-zinc-900">Premium Fleet Options</h2>
            <div className="flex items-center justify-center gap-2 text-zinc-500 font-medium text-sm">
              <ShieldCheck size={16} className="text-gold" /> All vehicles LEZ compliant & professionally chauffeured
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* E-Class/S-Class Card (Couples) */}
            <div className="bg-white p-2 rounded-[2rem] shadow-sm border border-zinc-100 group hover:shadow-xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-[1.5rem] mb-6">
                <img src={sClassWinterImg} alt="Luxury Sedan Transfer" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-x-[-1]" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                  Business & Couples
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900">Mercedes-Benz S-Class</h3>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Users size={16} className="text-gold" /> Max 3 Passengers
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Briefcase size={16} className="text-gold" /> 2 Suitcases
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <ShieldCheck size={16} className="text-gold" /> Diplomatic Protocol Ready
                  </div>
                </div>
                <Link to={localePath('/booking')} className="block w-full text-center border border-zinc-200 text-zinc-900 font-bold py-3 rounded-full hover:bg-zinc-900 hover:text-white transition-all uppercase text-xs tracking-widest">
                  Book S-Class
                </Link>
              </div>
            </div>

            {/* V-Class Card (Groups - Best Seller) */}
            <div className="bg-white p-2 rounded-[2rem] shadow-xl border-2 border-gold/20 group hover:scale-[1.02] transition-all duration-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-zinc-900 px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg z-20">
                Most Popular
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] mb-6">
                <img src={vClassWinterImg} alt="Mercedes V-Class Transfer" className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.4]" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900">
                  Groups & Delegations
                </div>
              </div>
              <div className="px-6 pb-6 text-zinc-900">
                <div className="flex justify-between items-end mb-4">
                  <h3 className="text-2xl font-bold">Mercedes-Benz V-Class</h3>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Users size={16} className="text-gold" /> Max 7 Passengers
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Briefcase size={16} className="text-gold" /> 7 Suitcases
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Building2 size={16} className="text-gold" /> Mobile Conference Layout
                  </div>
                </div>
                <Link to={localePath('/booking')} className="block w-full text-center bg-zinc-900 text-white font-bold py-3 rounded-full hover:bg-gold hover:text-zinc-900 transition-all uppercase text-xs tracking-widest shadow-lg">
                  Book V-Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-16 text-center text-zinc-900">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  {getLoc(f.q)}
                </div>
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed pl-14">
                {getLoc(f.a)}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* SEO Block */}
      <section className="py-20 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-8 font-bold">Premium Chauffeur Service</h2>
          <div className="text-zinc-500 text-sm font-medium leading-relaxed mb-10">
            {getLoc(seoText)}
          </div>
          <Link to={localePath('/services/ski-resorts')} className="inline-flex items-center gap-2 text-gold hover:text-zinc-900 transition-colors uppercase tracking-widest text-[10px] font-bold border-b border-gold/30 pb-1">
            <span>View all Destinations</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-sans font-bold tracking-tight mb-8">Arrive in Style to {name}</h2>
          <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            Get a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SkiResortLandingTemplate;
