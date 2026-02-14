import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  Coffee,
  Zap,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';
import HeroSocialProof from '../components/HeroSocialProof';
import ReviewsMarquee from '../components/ReviewsMarquee';
import SEO from '../components/SEO';

// Import local images
const HeroImg = import.meta.env.BASE_URL + 'images/Convoy_S_Class_And_V_Class.webp';
const EClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_E_Class_2.webp';
const SClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_S_Class.webp';
const VClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_V_Class.webp'; // Updated VClass logic

const Fleet: React.FC = () => {
  const localePath = useLocalePath();

  const fleetList = [
    {
      model: "Mercedes-Benz E-Class",
      category: "Business Class",
      bestFor: "Airport transfers, business meetings, and city commuting.",
      tagline: "Efficiency meets elegance.",
      features: ["Leather Interior", "Climate Control", "Bottled Water", "Wi-Fi"],
      image: EClassImg
    },
    {
      model: "Mercedes-Benz S-Class",
      category: "First Class",
      bestFor: "VIP arrivals, diplomatic transport, and long-distance comfort.",
      tagline: "The benchmark of luxury.",
      features: ["Reclining Seats", "Privacy Blinds", "Burmester Sound", "Work Table"],
      image: SClassImg,
      highlight: true
    },
    {
      model: "Mercedes-Benz V-Class",
      category: "Business Van",
      bestFor: "Group transfers, roadshows, and family tours.",
      tagline: "Space without compromise.",
      features: ["7 Passengers", "Conference Seating", "Extra Luggage", "Panoramic Roof"],
      image: VClassImg
    }
  ];

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title="Luxury Car Fleet Brussels | Mercedes S-Class, V-Class & E-Class"
        description="Explore our premium fleet of Mercedes-Benz vehicles available for chauffeur service in Belgium. S-Class, V-Class, and E-Class."
        canonical="/fleet"
      />
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="INS Driver Service Fleet"
            className="w-full h-full object-cover object-bottom opacity-80 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter text-zinc-900">
              The Art of <br />
              <span className="text-zinc-400 italic">Moving Well</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium leading-relaxed">
              Our fleet consists exclusively of current-model Mercedes-Benz vehicles, maintained to showroom standards for your safety and comfort.
            </p>
            <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg">
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
          <h2 className="text-3xl font-sans font-bold uppercase tracking-widest mb-4">Our Models</h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleetList.map((car, i) => (
            <div key={i} className={`flex flex-col bg-white border ${car.highlight ? 'border-gold shadow-2xl' : 'border-zinc-100 shadow-sm'} p-10 group hover:border-gold/50 transition-all duration-500 rounded-[3rem]`}>
              <div className="mb-8 overflow-hidden h-48 rounded-2xl ring-1 ring-zinc-100">
                <img src={car.image} alt={car.model} className={`w-full h-full object-cover ${car.model.includes('S-Class') ? 'object-center' : ''} grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700`} />
              </div>
              <div className="flex-grow">
                <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">{car.category}</p>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900">{car.model}</h3>
                <p className="text-zinc-500 text-sm italic mb-6">"{car.tagline}"</p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-widest text-zinc-900 mb-3 uppercase">Best For</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{car.bestFor}</p>
                </div>

                <div className="space-y-3 mb-10">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-zinc-500">
                      <CheckCircle2 size={14} className="text-gold shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to={localePath('/booking')} className={`block text-center py-4 rounded-full font-bold tracking-wide text-sm transition-all shadow-md ${car.highlight ? 'bg-zinc-900 text-white hover:bg-gold hover:text-zinc-900' : 'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-900 hover:text-white'}`}>
                Reserve Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <ReviewsMarquee />

      {/* 3. Safety & Standards */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900">Meticulous Maintenance</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Every vehicle undergoes daily safety checks and premium detailing before dispatch.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <UserCheck size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900">Vetted Chauffeurs</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Our drivers are background-checked, multilingual, and trained in diplomatic protocols.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Coffee size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900">Onboard Comfort</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Enjoy complimentary water, Wi-Fi, and phone chargers in all vehicle classes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO Content Block */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold tracking-tight text-zinc-900 mb-12 uppercase">INS Driver Service Fleet</h2>
          <div className="text-zinc-500 font-medium leading-relaxed text-sm md:text-base space-y-8">
            <p>
              Experience the pinnacle of automotive engineering with our <span className="text-zinc-900 font-bold">Mercedes-Benz fleet</span>. Whether you require a sleek <span className="text-zinc-900 font-bold">E-Class</span> for airport transfers or an <span className="text-zinc-900 font-bold">S-Class limousine</span> for VIP events, we guarantee a spotless, late-model vehicle.
            </p>
            <p>
              For larger groups and delegations, our <span className="text-zinc-900 font-bold">V-Class vans</span> offer spacious luxury conference seating, perfect for roadshows and intercity travel across Belgium.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold tracking-tight mb-20 text-center text-zinc-900 uppercase">Fleet Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                Are the cars black?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                Yes, our entire fleet is Obsidian Black metallic with black leather interiors for a uniform, professional appearance.
              </div>
            </details>
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                How old are the vehicles?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                We rotate our fleet every 3 years to ensure you always travel in the latest models with the most advanced safety features.
              </div>
            </details>
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                Is there Wi-Fi?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                Yes, all vehicles are equipped with 4G/5G Wi-Fi hotspots for your convenience.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center relative overflow-hidden rounded-[4rem] mx-4 mb-8">
        <div className="absolute inset-0 bg-gold opacity-5">
          <Zap className="absolute -right-20 -bottom-20" size={400} />
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">Upgrade Your Commute</h2>
        <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-5 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
          Book This Fleet
        </Link>
      </section>
    </div>
  );
};

export default Fleet;
