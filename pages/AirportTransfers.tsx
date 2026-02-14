import React from 'react';
import { Plane, Clock, Shield, CheckCircle2, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FLEET } from '../constants';
import SEO from '../components/SEO';
import { useLocalePath } from '../hooks/useLocalePath';
import HeroSocialProof from '../components/HeroSocialProof';
import ReviewsMarquee from '../components/ReviewsMarquee';

// --- IMPORT LOCAL HERO IMAGE ---
const airportHeroImg = import.meta.env.BASE_URL + 'images/Airport_Hero_Godfather.webp';

// Fleet images
const sClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_S_Class.webp';
const vClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_V_Class.webp';
const eClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_E_Class_2.webp';

const AirportTransfers: React.FC = () => {
  const localePath = useLocalePath();

  // Schema data
  const structuredData = {
    "@type": "TaxiService",
    "serviceType": "Airport Transfers Belgium",
    "provider": {
      "@type": "LocalBusiness",
      "name": "INS Driver Service Belgium",
      "areaServed": ["Brussels Airport (BRU)", "Charleroi Airport (CRL)", "Antwerp Airport (ANR)"],
      "telephone": "+32 483 506 356"
    }
  };

  const features = [
    {
      icon: <Plane size={24} />,
      title: "Real-Time Monitoring",
      desc: "We track your flight status instantly. If you are delayed, we wait at no extra cost."
    },
    {
      icon: <Shield size={24} />,
      title: "Fixed Pricing",
      desc: "Transparent rates confirmed upon booking. No meters, no hidden fees, no surprises."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Meet & Greet",
      desc: "Your chauffeur awaits in the arrival hall with a nameboard, ready to assist with luggage."
    }
  ];

  const airportDetails = [
    {
      code: "BRU",
      title: "Brussels Airport",
      features: ["VIP Meeting Points", "NATO/EU Fast Lanes", "20 min to EU Quarter"]
    },
    {
      code: "CRL",
      title: "Charleroi Airport",
      features: ["Private Jet Terminal", "Direct South Access", "45 min to Brussels"]
    },
    {
      code: "ANR",
      title: "Antwerp Airport",
      features: ["Executive Aviation", "Diamond District Access", "35 min to Brussels"]
    },
  ];

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title="Luxury Airport Transfers Brussels | BRU, CRL & Private Jets"
        description="Premium airport chauffeur service in Belgium. Transfers from Brussels (BRU), Charleroi (CRL), and Antwerp (ANR) with Mercedes-Benz fleet."
        canonical="/services/airport-transfers"
        schema={JSON.stringify(structuredData)}
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white py-20">
        <div className="absolute inset-0 z-0">
          <img
            src={airportHeroImg}
            alt="Luxury car at Brussels Airport"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] mb-8 tracking-tight text-zinc-900 max-w-full md:max-w-4xl">
            Seamless Arrivals in <br />
            <span className="text-zinc-500">The Capital of Europe</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 mb-12 font-medium leading-relaxed max-w-4xl">
            Experience the gold standard of airport transfers. Whether arriving at Zaventem or a private terminal, our diplomatic-grade service ensures smooth transit to your final destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 text-center shadow-lg hover:shadow-xl">
              Book Transfer
            </Link>
          </div>
          <div className="mt-12">
            <HeroSocialProof />
          </div>
        </div>
      </section>

      {/* 2. Why Private Over Taxi */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold uppercase tracking-wide mb-4 text-zinc-900">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Airport Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Served Airports</h2>
            <div className="w-12 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {airportDetails.map((airport) => (
              <div key={airport.code} className="group relative bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 overflow-hidden">
                <div className="absolute -right-4 -top-4 font-serif text-9xl font-bold text-zinc-50 group-hover:text-gold/5 transition-colors duration-500 select-none pointer-events-none">
                  {airport.code}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-1 bg-gold mb-6 group-hover:w-20 transition-all duration-500"></div>
                  <h3 className="text-2xl font-bold mb-8 text-zinc-900 pr-8 leading-tight">
                    {airport.title}
                    <span className="text-zinc-400 font-normal block text-lg mt-1">({airport.code})</span>
                  </h3>
                  <ul className="space-y-5">
                    {airport.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-zinc-600 font-medium group-hover:text-zinc-900 transition-colors">
                        <CheckCircle2 size={18} className="text-gold mr-3 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Fleet Options */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4 text-zinc-900">Our Fleet</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Diplomatic Grade Vehicles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.map((car) => {
              const getCarImage = (carId: string) => {
                const id = carId.toLowerCase();
                // Simplistic mapping, ensure these images exist or use imported ones
                if (id.includes('v-class') || id.includes('van')) return vClassImg;
                if (id.includes('e-class')) return eClassImg;
                return sClassImg; // Default
              };
              // Hardcode features text mapping if translation keys used in FLEET constant, 
              // but FLEET constant likely updated to English already.
              return (
                <div key={car.id} className="group border border-zinc-100 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col bg-white">
                  <div className="overflow-hidden mb-8 h-56 relative flex items-center justify-center">
                    <img
                      src={getCarImage(car.id)}
                      alt="Luxury Car"
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-900 uppercase">Mercedes-Benz {car.id}</h3>
                  {/* Simplified rendering */}
                  <p className="text-sm text-zinc-500 mb-4">First Class Chauffeur Driven</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* 5. CTA Buttons */}
      <section className="py-32 bg-zinc-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8 text-white">Ready for Dispatch?</h2>
          <p className="text-zinc-400 mb-12 max-w-xl mx-auto">Book your transfer now and enjoy a seamless journey to your destination.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={localePath('/booking')} className="bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all">
              Get an Instant Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportTransfers;
