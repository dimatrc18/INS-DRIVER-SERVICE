import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Plane,
  FileText,
  Headphones,
  Lock,
  Info,
} from 'lucide-react';

// Import images
import HeroImg from '../images/Corporate_Hero.png';
import EClassImg from '../images/E_Class_In_City.png';
import SClassImg from '../images/Tour_Fleet_S_Class.png';
import VClassImg from '../images/V_Class_On_Event.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';


const CorporateEvents: React.FC = () => {
  const businessServices = [
    {
      icon: <Briefcase size={32} />,
      title: "Executive Roadshows",
      desc: "Tight schedules require flawless execution. We coordinate multi-stop itineraries for investors and board members."
    },
    {
      icon: <Users size={32} />,
      title: "Event Shuttles & Convoys",
      desc: "Moving 50 or 500 guests? We coordinate fleets of V-Class vans and luxury coaches for galas, conferences, and team retreats."
    },
    {
      icon: <Plane size={32} />,
      title: "Airport Meet & Greet",
      desc: "Impress your clients from the moment they land. Signboard service and luggage assistance at MXP and LIN."
    }
  ];

  const trustFactors = [
    {
      icon: <FileText size={28} className="text-gold" />,
      title: "Monthly Invoicing",
      desc: "Consolidated billing for frequent corporate accounts."
    },
    {
      icon: <Headphones size={28} className="text-gold" />,
      title: "24/7 Dispatch",
      desc: "Flight delayed? Schedule changed? Our operations team is always watching."
    },
    {
      icon: <Lock size={28} className="text-gold" />,
      title: "NDAs & Discretion",
      desc: "What is said in the car, stays in the car. Our drivers are trained in protocol and confidentiality."
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Corporate Chauffeur Milan Business"
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter">
              Precision Logistics for <br />
              <span className="text-gold">Corporate Milan.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              From executive roadshows to large-scale event shuttles. We manage the movement so you can manage the business.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Get Event Quote
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services for Business */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-widest mb-4">Corporate Solutions</h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {businessServices.map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Fleet */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tight mb-4">The Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 border border-black/5 flex flex-col items-center text-center h-full">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz E-Class</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-8">The corporate standard for daily transfers</p>
              <img src={EClassImg} alt="E-Class" className="w-full h-40 object-cover object-bottom grayscale hover:grayscale-0 transition-all mb-6 mt-auto" />
              <Link to="/booking" className="text-xs uppercase tracking-widest font-bold border-b border-black/20 pb-1 hover:border-gold transition-colors">Book E-Class</Link>
            </div>
            <div className="bg-zinc-50 p-8 border border-black/5 flex flex-col items-center text-center h-full">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz V-Class</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-8">The workhorse for teams and delegations</p>
              <img src={VClassImg} alt="V-Class" className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all mb-6 mt-auto" />
              <Link to="/booking" className="text-xs uppercase tracking-widest font-bold border-b border-black/20 pb-1 hover:border-gold transition-colors">Book V-Class</Link>
            </div>
            <div className="bg-zinc-50 p-8 border border-black/5 flex flex-col items-center text-center h-full">
              <h3 className="text-2xl font-bold mb-2">Mercedes-Benz S-Class</h3>
              <p className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold mb-8">The ultimate executive experience. First-class comfort for VIPs and CEOs.</p>
              <img src={SClassImg} alt="S-Class" className="w-full h-40 object-cover object-bottom grayscale hover:grayscale-0 transition-all mb-6 mt-auto" />
              <Link to="/booking" className="text-xs uppercase tracking-widest font-bold border-b border-black/20 pb-1 hover:border-gold transition-colors">Book S-Class</Link>
            </div>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote="Luxury Milan Transfers managed our 10-car roadshow without a single hitch. Their coordination and dispatch team are top-notch."
        author="Ananya S., Event Planner"
      />


      {/* 4. Trust Factors Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-sans font-bold uppercase tracking-widest text-gold">Why Corporate Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trustFactors.map((factor, i) => (
              <div key={i} className="bg-zinc-900/50 p-10 border border-white/5 hover:border-gold/30 transition-all">
                <div className="mb-6">{factor.icon}</div>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-4">{factor.title}</h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. SEO Content Block */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-12">Event Transport Management</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-8">
            <p>
              Milan is a global hub for finance and industry. Whether you are organizing a delegation for the <Link to="/milano-cortina-2026" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Milano Cortina 2026 Winter Olympics</Link> or managing VIP arrivals for the <Link to="/events/monza-f1" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Italian Grand Prix at Monza</Link>, our logistics team handles every detail.
            </p>
            <p>
              We specialize in high-stakes transport where punctuality is critical. From <Link to="/events/san-siro" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">San Siro Stadium VIP Transfers</Link> for corporate hospitality to daily shuttles for <Link to="/events/design-week" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Salone del Mobile Transport</Link>, we ensure your team arrives refreshed and ready.
            </p>
            <p>
              Open a corporate account today for priority booking on our <Link to="/services/hourly-disposal" className="text-gold underline decoration-gold/50 hover:text-white transition-all font-medium">Hourly Car Disposal</Link> services and airport transfers.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-20 text-center">Corporate FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Do you offer corporate rates?
              </h4>
              <p className="text-zinc-500 text-sm font-light">Yes, we provide preferential pricing and consolidated monthly invoicing for high-volume corporate accounts.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                How far in advance should we book for large events?
              </h4>
              <p className="text-zinc-500 text-sm font-light">For major city-wide events like Milan Fashion Week or the Olympics, we recommend booking at least 3-6 months in advance to guarantee fleet availability.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4 flex items-center gap-3">
                <Info size={18} className="text-gold/50" />
                Can you brand the vehicles?
              </h4>
              <p className="text-zinc-500 text-sm font-light">Yes, magnetic brand logos or custom signage can be arranged for multi-vehicle event fleets to ensure your brand is represented from arrival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-black text-center">
        <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Elevate Your Corporate Logistics</h2>
        <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
          Request a Corporate Quote
        </Link>
      </section>
    </div>
  );
};

export default CorporateEvents;
