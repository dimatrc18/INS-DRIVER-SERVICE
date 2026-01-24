import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, UserCheck, ChevronRight, Info } from 'lucide-react';
import { FLEET } from '../constants';
import HeroSocialProof from './HeroSocialProof';
import MinimalTestimonial from './MinimalTestimonial';

// --- IMAGE IMPORTS ---
// Make sure these files exist in your "images" folder with these exact names
import heroBg from '../images/Airport_Transfers_Hero_Section.png';
import sClassImg from '../images/Airport_Fleet_S_Class.png';
import vClassImg from '../images/Airport_Fleet_V_Class.png';
import eClassImg from '../images/Airport_Fleet_E_Class_2.png';

interface FAQ {
  q: string;
  a: string;
}

interface AirportLandingProps {
  title: string;
  h1: string;
  heroText: string;
  heroImage: string;
  breadcrumbLabel: string;
  faqs: FAQ[];
  seoTitle: string;
  seoText: string;
  internalLinks: { label: string; path: string }[];
  structuredData: any;
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

const AirportLandingTemplate: React.FC<AirportLandingProps> = ({
  h1, heroText, breadcrumbLabel, faqs, seoTitle, seoText, internalLinks, structuredData,
  testimonialQuote, testimonialAuthor
}) => {

  // --- IMAGE MAPPING FUNCTION ---
  // Maps the ID from constants.tsx to the imported image file
  const getCarImage = (carId: string) => {
    // Convert to lowercase to be safe
    const id = carId.toLowerCase();

    // Check for keywords in the ID (adjust if your IDs in constants.tsx are different)
    if (id.includes('s-class') || id.includes('mercedes-s')) return sClassImg;
    if (id.includes('v-class') || id.includes('mercedes-v')) return vClassImg;
    if (id.includes('e-class') || id.includes('mercedes-e')) return eClassImg;

    // Fallback image if no match found
    return sClassImg;
  };

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* SEO Script Injection */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt={h1}
            className="w-full h-full object-cover opacity-60 grayscale-[0.2] scale-105 animate-[subtleZoom_30s_linear_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">

            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-[1.1] mb-8 tracking-tighter">
              {h1}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 mb-12 font-light leading-relaxed max-w-2xl">
              {heroText}
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Your Transfer Now
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes subtleZoom {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.1); }
          }
        `}</style>
      </section>

      {/* Service Details Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-white/5 bg-zinc-900/30 group hover:border-gold/20 transition-all duration-500">
            <Clock className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Flight Tracking</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">We monitor your flight in real-time. If you are early or delayed, your chauffeur adjusts automatically for a seamless pickup.</p>
          </div>
          <div className="p-8 border border-white/5 bg-zinc-900/30 group hover:border-gold/20 transition-all duration-500">
            <Shield className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Fixed Pricing</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Know your cost upfront. Our all-inclusive rates cover motorway tolls, airport taxes, and 60 minutes of complimentary wait time.</p>
          </div>
          <div className="p-8 border border-white/5 bg-zinc-900/30 group hover:border-gold/20 transition-all duration-500">
            <UserCheck className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Professional Chauffeurs</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">English-speaking, suit-attired experts trained in luxury executive protocol to ensure your total safety and privacy.</p>
          </div>
        </div>
      </section>

      {/* Executive Fleet Options */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">Executive Fleet Options</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Snow-ready & Luxury Equipped</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.map((car) => (
              <div key={car.id} className="group border border-black/5 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col bg-zinc-50/50">
                <div className="overflow-hidden mb-10 h-64 bg-zinc-100 relative flex items-center justify-center">
                  <img
                    src={getCarImage(car.id)}
                    alt={`${car.model} luxury car`}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{car.model}</h3>
                <p className="text-gold font-bold uppercase tracking-widest text-xs mb-8">{car.category}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {car.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50"></div>
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/booking" className="block text-center bg-black text-white py-5 font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300">
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center px-4">
            <p className="text-xs text-zinc-400 italic font-light">
              <Info size={14} className="inline-block mr-2 align-text-bottom text-gold" />
              Winter readiness: Our entire fleet is equipped with Alpine tires and safety gear for transit across Northern Italy.
            </p>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote={testimonialQuote || "The most stress-free arrival I've ever had in Milan. The driver was waiting exactly where promised, and the luggage assistance was a lifesaver."}
        author={testimonialAuthor || "Sarah L., International Traveler"}
      />

      {/* FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-sans font-bold uppercase tracking-tight mb-20 text-center">Frequently Asked Questions</h2>
        <div className="space-y-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/5 pb-12 group">
              <h4 className="text-gold font-bold text-xl mb-6 flex items-center gap-4">
                <ChevronRight size={20} className="text-gold/50 group-hover:translate-x-1 transition-transform" />
                {faq.q}
              </h4>
              <p className="text-zinc-400 text-base font-light leading-relaxed pl-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xs font-sans font-bold uppercase tracking-[0.4em] text-zinc-600 mb-10 text-center">{seoTitle}</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm space-y-6">
            <p>{seoText}</p>
            <div className="pt-12 mt-12 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-6 font-bold">Related Airport Resources:</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <Link to="/services/airport-transfers" className="text-gold hover:text-white transition-colors text-xs underline decoration-gold/30 underline-offset-4">Main Airport Hub</Link>
                {internalLinks.map((link, idx) => (
                  <Link key={idx} to={link.path} className="text-zinc-500 hover:text-gold transition-colors text-xs underline decoration-white/10 underline-offset-4">{link.label}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportLandingTemplate;
