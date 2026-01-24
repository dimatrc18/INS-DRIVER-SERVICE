import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Briefcase,
  Info
} from 'lucide-react';

// Import images
import HeroImg from '../images/Private_Chauffeur_Hero.png';
import EClassImg from '../images/E_Class_In_City.png';
import SClassImg from '../images/Tour_Fleet_S_Class.png';
import VClassImg from '../images/V_Class_On_Event.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';


const ChauffeurService: React.FC = () => {
  const benefits = [
    {
      icon: <Clock size={32} />,
      title: "Hourly Disposal",
      desc: "Keep your driver for as long as you need. Changes of schedule? No problem. We wait for you."
    },
    {
      icon: <MapPin size={32} />,
      title: "Local Expertise",
      desc: "Our drivers know every ZTL (restricted zone), shortcut, and best drop-off point in the city."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Business & Leisure",
      desc: "Perfect for back-to-back meetings in Porta Nuova or a relaxed shopping spree in the Quadrilatero della Moda."
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Private Chauffeur Milan Mercedes S-Class"
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter">
              Your Private Driver in Milan: <br />
              <span className="text-gold">Professional, Discreet, Always on Time.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              Whether for business meetings, shopping days, or city transfers—experience the freedom of a personal chauffeur.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Hourly Driver
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{benefit.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Fleet Brief */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tight mb-4">The Executive Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-10 border border-black/5 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz E-Class</h3>
              <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-8">Business Class Efficiency</p>
              <img src={EClassImg} alt="E-Class" className="w-full h-40 object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700 mb-8" />
              <p className="text-zinc-600 text-xs italic">Smart & Professional for airport hops and meetings.</p>
            </div>
            <div className="bg-zinc-50 p-10 border border-black/5 flex flex-col items-center text-center ring-2 ring-gold/20">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz S-Class</h3>
              <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-8">First Class Luxury</p>
              <img src={SClassImg} alt="S-Class" className="w-full h-40 object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700 mb-8" />
              <p className="text-zinc-600 text-xs italic">The ultimate choice for long-haul rest and status.</p>
            </div>
            <div className="bg-zinc-50 p-10 border border-black/5 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz V-Class</h3>
              <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-8">Group Travel & Extra Luggage</p>
              <img src={VClassImg} alt="V-Class" className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-700 mb-8" />
              <p className="text-zinc-600 text-xs italic">Spacious luxury for families, teams, and shopping.</p>
            </div>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote="Our chauffeur was the definition of professional. Always five minutes early, perfectly dressed, and knew exactly where to go. Simply the best NCC in Milan."
        author="Li N., Creative Director"
      />

      {/* 4. SEO Content Block */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-12">More Than Just City Transfers</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-8">
            <p>
              Our chauffeur service extends far beyond Milan's city limits. While we specialize in corporate roadshows and fashion week logistics, we also provide bespoke leisure travel.
            </p>
            <p>
              Looking for a weekend escape? Book a private driver for a <Link to="/tours/lake-como" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Lake Como Private Tour</Link> to explore Bellagio and Varenna at your own pace. If you are planning a longer excursion, our dedicated <Link to="/tours/venice" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Venice Day Trip from Milan</Link> offers a seamless door-to-door experience to the floating city.
            </p>
            <p>
              For shopping enthusiasts, we offer spacious vehicles for a <Link to="/tours/serravalle-outlet" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Serravalle Outlet Shopping Day</Link>, ensuring you have ample room for your purchases. From airport pickups to <Link to="/tours/milan-city" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Milan City Sightseeing</Link>, we cover every aspect of your ground transportation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-20 text-center">Private Chauffeur FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                What is the minimum booking time?
              </h4>
              <p className="text-zinc-500 text-sm font-light">4 hours for hourly disposal within the city. This ensures your driver is exclusively dedicated to your needs.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Does the driver speak English?
              </h4>
              <p className="text-zinc-500 text-sm font-light">Yes, all our chauffeurs are professional, multilingual, and English-speaking experts.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Can I smoke in the car?
              </h4>
              <p className="text-zinc-500 text-sm font-light">No, all vehicles in our fleet are strictly non-smoking to maintain our high standards of cleanliness and luxury.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-black text-center">
        <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Luxury at Your Disposal</h2>
        <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
          Book Your Chauffeur
        </Link>
      </section>
    </div>
  );
};

export default ChauffeurService;
