import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  Info,
  Coffee,
  Zap
} from 'lucide-react';

// Import local images
import HeroImg from '../images/Convoy_S_Class_And_V_Class.png';
import EClassImg from '../images/Airport_Fleet_E_Class_2.png';
import SClassImg from '../images/Airport_Fleet_S_Class.png';
import VClassImg from '../images/Airport_Fleet_V_Class.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';


const Fleet: React.FC = () => {
  const fleetList = [
    {
      model: "Mercedes-Benz E-Class",
      category: "Business Light",
      bestFor: "Airport transfers, solo business travelers, city commuting.",
      tagline: "Efficiency meets elegance.",
      features: ["Leather seats", "Wi-Fi", "Bottled water", "Capacity for 2 large suitcases"],
      image: EClassImg
    },
    {
      model: "Mercedes-Benz S-Class",
      category: "First Class",
      bestFor: "VIPs, weddings, special occasions, long-distance comfort.",
      tagline: "The flagship of luxury travel.",
      features: ["Reclining massage seats", "Rear climate control", "Privacy shades", "Extra legroom"],
      image: SClassImg,
      highlight: true
    },
    {
      model: "Mercedes-Benz V-Class",
      category: "Executive Van",
      bestFor: "Families, corporate teams (up to 7 pax), roadshows, ski trips.",
      tagline: "Space without compromise.",
      features: ["Conference seating layout (face-to-face)", "Large trunk for luggage/ski gear", "Automatic sliding doors", "Up to 7 Passengers"],
      image: VClassImg
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Milan Luxury Fleet Mercedes Benz"
            className="w-full h-full object-cover object-bottom opacity-70 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter">
              Travel in <br />
              <span className="text-gold">Absolute Comfort.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              Our Mercedes-Benz fleet is meticulously maintained, fully insured, and equipped for your productivity and relaxation.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Your Vehicle
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Fleet Details */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-widest mb-4">The Premium Fleet</h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleetList.map((car, i) => (
            <div key={i} className={`flex flex-col bg-zinc-900 border ${car.highlight ? 'border-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'border-white/5'} p-8 group hover:border-gold/30 transition-all duration-500`}>
              <div className="mb-8 overflow-hidden h-48">
                <img src={car.image} alt={car.model} className={`w-full h-full object-cover ${car.model.includes('S-Class') ? 'object-center' : ''} grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`} />
              </div>
              <div className="flex-grow">
                <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">{car.category}</p>
                <h3 className="text-2xl font-bold mb-4">{car.model}</h3>
                <p className="text-zinc-400 text-sm italic mb-6">"{car.tagline}"</p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Best For:</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{car.bestFor}</p>
                </div>

                <div className="space-y-3 mb-10">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-zinc-400">
                      <CheckCircle2 size={14} className="text-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/booking" className={`block text-center py-4 font-bold uppercase tracking-widest text-xs transition-all ${car.highlight ? 'bg-gold text-black hover:bg-white' : 'border border-gold text-gold hover:bg-gold hover:text-black'}`}>
                Inquire for {car.category}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <MinimalTestimonial
        quote="The vehicles are literally showroom quality. Each ride feels like a first-class flight on wheels. The S-Class exceeded all expectations."
        author="Sarabdeep S., Frequent Client"
      />

      {/* 3. Safety & Standards */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Impeccable Maintenance</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Every vehicle undergoes rigorous daily checks and professional detailing to ensure perfect presentation and peak safety performance.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <UserCheck size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Professional Chauffeurs</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Uniformed, English-speaking, and licensed NCC drivers trained in defensive driving and executive hospitality protocol.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Coffee size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Premium Amenities</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Stay connected and refreshed. High-speed Wi-Fi, premium bottled water, refreshing wipes, and phone chargers available in every ride.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO Content Block */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-12">A Vehicle for Every Occasion</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-8">
            <p>
              Choosing the right vehicle is part of the luxury experience. Our Mercedes V-Class is the preferred choice for group logistics, from <Link to="/events/fashion-week" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Milan Fashion Week Transport</Link> to family ski holidays in Cortina.
            </p>
            <p>
              For executive travel, the Mercedes S-Class offers an unparalleled workspace, making it ideal for our <Link to="/services/corporate-events" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Corporate & Events Transport</Link> services. Whether you need a simple airport transfer or a dedicated vehicle for a <Link to="/services/private-chauffeur" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Private Chauffeur Service</Link> tour, our fleet guarantees a smooth journey.
            </p>
            <p>
              All vehicles are authorized to enter Milan’s ZTL (restricted traffic zones), ensuring direct access to your hotel or meeting venue.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-20 text-center">Fleet FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8 group">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                How many suitcases fit in the S-Class?
              </h4>
              <p className="text-zinc-500 text-sm font-light">2 large suitcases + 2 carry-ons. For more luggage, we recommend the V-Class, which can handle significantly more volume.</p>
            </div>
            <div className="border-b border-white/5 pb-8 group">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Are child seats available?
              </h4>
              <p className="text-zinc-500 text-sm font-light">Yes, free of charge upon request. Please specify the age and weight of the child when booking so we can prepare the correct ISOFIX seat.</p>
            </div>
            <div className="border-b border-white/5 pb-8 group">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Do you have electric vehicles?
              </h4>
              <p className="text-zinc-500 text-sm font-light">We are gradually introducing the Mercedes EQE and EQV to our sustainable luxury lineup. Please inquire for specific availability for your dates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5">
          <Zap className="absolute -right-20 -bottom-20" size={400} />
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Arrive in Style</h2>
        <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
          Reserve Your Fleet
        </Link>
      </section>
    </div>
  );
};

export default Fleet;
