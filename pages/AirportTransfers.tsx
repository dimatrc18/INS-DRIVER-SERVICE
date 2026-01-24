
import React from 'react';
import { Plane, Clock, Shield, CheckCircle2, Navigation, MapPin, UserCheck, CreditCard, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FLEET } from '../constants';

// --- IMPORT LOCAL HERO IMAGE ---
import airportHeroImg from '../images/Airport_Transfers_Hero_Section.png';

// Fleet images
import sClassImg from '../images/Airport_Fleet_S_Class.png';
import vClassImg from '../images/Airport_Fleet_V_Class.png';
import eClassImg from '../images/Airport_Fleet_E_Class_2.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';

const AirportTransfers: React.FC = () => {
  // Removed AI generation logic completely

  const features = [
    {
      icon: <Plane size={24} />,
      title: "Real-time Flight Tracking",
      desc: "We adjust to your schedule. Whether your flight is early or delayed, your chauffeur will be there exactly when you land."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Fixed All-Inclusive Pricing",
      desc: "No meters, no surprises. Our rates include tolls, VAT, and wait time. Know exactly what you pay before you travel."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Professional Chauffeurs",
      desc: "English-speaking, suit-attired experts dedicated to your safety, comfort, and discretion throughout Northern Italy."
    }
  ];

  const airports = [
    {
      code: "MXP",
      name: "Milan Malpensa",
      tagline: "The International Gateway",
      description: "Premier meet & greet at the arrivals hall with 60 minutes of complimentary wait time included.",
      stats: ["Terminal 1 & 2", "VIP Lounge Access", "Fast Track Available"]
    },
    {
      code: "LIN",
      name: "Milan Linate",
      tagline: "The City Airport",
      description: "The fastest connection to the fashion district. Enjoy a swift 20-minute transfer to the Duomo or your hotel.",
      stats: ["Close to Center", "Executive Terminal", "Private Jet Hub"]
    },
    {
      code: "BGY",
      name: "Bergamo Orio al Serio",
      tagline: "Private Jet & Regional Hub",
      description: "Strategic link for corporate flights and direct transfers to the Italian Lakes (Como, Garda) and the Alps.",
      stats: ["Ski Transfer Hub", "Caravan Private Wing", "Corporate Focus"]
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={airportHeroImg} // Using local image
            alt="Luxury car at Milan Airport"
            className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mt-[70px]">
            <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight">
              Seamless Airport Transfers in <span className="text-gold">Milan</span> & Northern Italy
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              Reliable, tracked, and comfortable connections from Malpensa (MXP), Linate (LIN), and Bergamo (BGY).
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
              Book Your Arrival
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The "3 Airports" Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">The Major Hubs</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {airports.map((airport) => (
            <div key={airport.code} className="group bg-zinc-900 border border-white/5 p-10 flex flex-col hover:border-gold/30 transition-all duration-500">
              <span className="text-6xl font-serif font-bold text-gold/10 group-hover:text-gold/20 transition-colors mb-4">{airport.code}</span>
              <h3 className="text-3xl font-bold mb-2">{airport.name}</h3>
              <p className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-6">{airport.tagline}</p>
              <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-grow">
                {airport.description}
              </p>
              <ul className="space-y-3 pt-8 border-t border-white/5">
                {airport.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center text-xs uppercase tracking-widest text-zinc-500">
                    <CheckCircle2 size={14} className="text-gold mr-3" />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The "Why Us" Checklist */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center flex flex-col items-center">
                <div className="w-20 h-20 border border-gold/20 rounded-full flex items-center justify-center text-gold mb-8 group-hover:bg-gold transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-widest mb-6">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[300px]">
                  {feature.desc}
                </p>
              </div>
            ))}
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
            {FLEET.map((car) => {
              const getCarImage = (carId: string) => {
                const id = carId.toLowerCase();
                if (id.includes('s-class') || id.includes('mercedes-s')) return sClassImg;
                if (id.includes('v-class') || id.includes('mercedes-v')) return vClassImg;
                if (id.includes('e-class') || id.includes('mercedes-e')) return eClassImg;
                return sClassImg;
              };

              return (
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
              );
            })}
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
        quote="The meet and greet service at Malpensa was perfect. Zero stress, beautiful car, and a very professional chauffeur. Highly recommended."
        author="Sophie B., Travel Blogger"
      />

      {/* Service Itinerary Preview */}
      <section className="py-32 max-w-5xl mx-auto px-4">
        <div className="bg-zinc-900 border border-white/5 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-2xl font-bold mb-12 text-center">Your Arrival Experience</h3>
          <div className="space-y-12 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gold/30 hidden md:block"></div>

            <div className="flex flex-col md:flex-row gap-8 relative">
              <div className="w-10 h-10 bg-black border border-gold rounded-full flex items-center justify-center z-10 shrink-0">
                <span className="text-gold text-xs font-bold">01</span>
              </div>
              <div>
                <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Touchdown</h5>
                <p className="text-zinc-400 font-light">Your chauffeur monitors your flight and is positioned at the arrivals terminal before you land.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative">
              <div className="w-10 h-10 bg-black border border-gold rounded-full flex items-center justify-center z-10 shrink-0">
                <span className="text-gold text-xs font-bold">02</span>
              </div>
              <div>
                <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Meet & Greet</h5>
                <p className="text-zinc-400 font-light">Look for your chauffeur holding a personalized sign. Assistance with luggage is standard protocol.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 relative">
              <div className="w-10 h-10 bg-black border border-gold rounded-full flex items-center justify-center z-10 shrink-0">
                <span className="text-gold text-xs font-bold">03</span>
              </div>
              <div>
                <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Luxury Transit</h5>
                <p className="text-zinc-400 font-light">Relax in a climate-controlled Mercedes-Benz with bottled water and Wi-Fi while we navigate the Milanese traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEO Content Block (Link Hub) */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-sm font-sans font-bold uppercase tracking-[0.4em] text-zinc-700 mb-8 text-center">
            Premium Airport Connections Milan
          </h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-6">
            <p>
              Experience the pinnacle of Italian hospitality with our luxury airport transfers in Milan. Arriving at a busy international hub can be overwhelming, but our <Link to="/airports/malpensa" className="text-gold underline decoration-gold/30 hover:decoration-gold transition-colors font-medium">Milan Malpensa Car Service</Link> ensures your journey continues with grace and efficiency. As the premier taxi alternative, we provide a seamless door-to-door experience that public transport simply cannot match. For swift city access, choose our <Link to="/airports/linate" className="text-gold underline decoration-gold/30 hover:decoration-gold transition-colors font-medium">Linate Executive Transfer</Link> to reach the Duomo or your hotel in record time.
            </p>
            <p>
              Strategic regional connections are handled with equal precision. Our <Link to="/airports/bergamo" className="text-gold underline decoration-gold/30 hover:decoration-gold transition-colors font-medium">Bergamo Orio al Serio Chauffeur</Link> service is the preferred choice for those landing at the private jet hub. Whether you need a <Link to="/transfers/malpensa-to-milan" className="text-gold underline decoration-gold/30 hover:decoration-gold transition-colors font-medium">Malpensa to City Center Transfer</Link> for business or a direct <Link to="/transfers/linate-to-milan" className="text-gold underline decoration-gold/30 hover:decoration-gold transition-colors font-medium">Linate Airport to Hotel Ride</Link>, a <Link to="/services/private-chauffeur" className="text-gold underline decoration-gold/30 hover:decoration-gold transition-colors font-medium">private chauffeur service</Link> is the stress-free alternative to standard taxis. Our NCC Milan airport services provide absolute reliability, discretion, and comfort, ensuring your logistics are the least of your concerns.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gold text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MapPin size={400} className="absolute -right-20 -bottom-20 rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Ready to Arrive in Style?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
              Request Your Quote
            </Link>
            <a href="tel:+39021234567" className="bg-white text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Call Concierge
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportTransfers;
