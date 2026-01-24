import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Zap,
  Briefcase,
  ShoppingBag,
  Info,
  Star
} from 'lucide-react';

// Import local images
import HeroImg from '../images/Private_Chauffeur_Hero.png';
import SClassImg from '../images/Tour_Fleet_S_Class.png';
import VClassImg from '../images/Tour_Fleet_V_Class.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';

const HourlyDisposal: React.FC = () => {
  const steps = [
    {
      icon: <Calendar size={32} />,
      title: "Book Your Block",
      desc: "Choose a half-day (4 hours), full-day (8 hours), or custom duration that fits your schedule."
    },
    {
      icon: <Navigation size={32} />,
      title: "Direct Your Driver",
      desc: "Hop in and out as you please. Change your destination on the fly. Your driver waits right outside."
    },
    {
      icon: <Zap size={32} />,
      title: "All-Inclusive Rate",
      desc: "Fuel, insurance, and kilometers (within Milan city limits) are included in the hourly rate."
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Private chauffeur waiting in Milan"
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter">
              Your Personal Chauffeur, <br />
              <span className="text-gold">On Standby.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              Complete flexibility for business meetings, shopping sprees, and multi-stop itineraries. The car is yours for the day.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Reserve Daily Driver
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-widest mb-4">How It Works</h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Fleet Quick Selection */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tight mb-4">The Premium Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-zinc-50 p-10 border border-black/5 flex flex-col items-center text-center group hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz S-Class</h3>
              <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-8">For executive presence and maximum comfort</p>
              <img src={SClassImg} alt="S-Class" className="w-full h-[250px] object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 mb-8" />
              <Link to="/booking" className="text-xs uppercase tracking-widest font-bold border-b border-black/20 pb-1 hover:border-gold transition-colors">Inquire for S-Class</Link>
            </div>
            <div className="bg-zinc-50 p-10 border border-black/5 flex flex-col items-center text-center group hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz V-Class</h3>
              <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-8">Mobile office or shopping hauler for groups</p>
              <img src={VClassImg} alt="V-Class" className="w-full h-[250px] object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 mb-8" />
              <Link to="/booking" className="text-xs uppercase tracking-widest font-bold border-b border-black/20 pb-1 hover:border-gold transition-colors">Inquire for V-Class</Link>
            </div>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote="Having a driver on standby for our shopping day in Milan was a game-changer. No stress about parking or carrying bags, just pure luxury."
        author="Kofi M., Regional Manager"
      />

      {/* 3. Ideal Use Cases */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter mb-4">Ideal Use Cases</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-10 border border-white/5 hover:border-gold/30 transition-all group">
              <Briefcase className="text-gold mb-6 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Business Roadshows</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Multiple meetings across the city? Leave your laptop in the car and prep for the next pitch while we navigate traffic.</p>
            </div>
            <div className="bg-zinc-900/50 p-10 border border-white/5 hover:border-gold/30 transition-all group">
              <ShoppingBag className="text-gold mb-6 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Luxury Shopping</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Visit Via Montenapoleone hands-free. Leave your bags in the trunk after every purchase.</p>
            </div>
            <div className="bg-zinc-900/50 p-10 border border-white/5 hover:border-gold/30 transition-all group">
              <Star className="text-gold mb-6 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Event Logistics</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Dinner, theater, and after-party. Ensure a safe and instant ride home no matter how late the night ends.</p>
            </div>
          </div>
        </div>
      </section>



      {/* 5. SEO Content Block */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-12">Flexible Chauffeur Services in Milan</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-8">
            <p>
              Hourly car disposal is the ultimate luxury for travelers who value time and flexibility. Instead of booking individual transfers, you have a dedicated vehicle at your command. This service is essential for events like <Link to="/events/fashion-week" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Milan Fashion Week Transport</Link>, where schedules often change at the last minute.
            </p>
            <p>
              It is also the perfect solution for executives attending the <Link to="/events/design-week" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Salone del Mobile Design Week</Link>, allowing for quick transfers between the Rho Fiera fairgrounds and city center showrooms.
            </p>
            <p>
              If your day extends beyond the city, we can convert your hourly booking into a <Link to="/services/private-chauffeur" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Private Chauffeur Service</Link> for longer excursions or evening dinners. Experience the freedom of having your own driver without the ownership costs.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-20 text-center">Hourly Disposal FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                What happens if I go over my booked time?
              </h4>
              <p className="text-zinc-500 text-sm font-light">We simply charge the extra time in 30-minute increments. Your driver remains available as long as you require.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Does this include travel outside Milan?
              </h4>
              <p className="text-zinc-500 text-sm font-light">Hourly rates typically cover mileage inside the city limits. Trips to Como or outlet malls are best booked as flat-rate tours, but we can adjust custom quotes for mixed itineraries.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Can I leave my belongings in the car?
              </h4>
              <p className="text-zinc-500 text-sm font-light">Yes, absolutely. The car is locked and attended by your professional driver at all times, making it a secure mobile locker for your items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-black text-center">
        <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Ready to Start Your Day?</h2>
        <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
          Book Hourly Driver
        </Link>
      </section>
    </div>
  );
};

// Internal utility for icon rendering
const Calendar = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);
const Navigation = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
);

export default HourlyDisposal;
