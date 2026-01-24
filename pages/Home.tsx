import React from 'react';
import { SERVICES, FLEET } from '../constants';
import { ArrowRight, Clock, UserCheck, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local images
import HeroImg from '../images/Home_Hero.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';
import AirportImg from '../images/Airport_Fleet_S_Class.png';
import SkiImg from '../images/Ski_Resorts_St_Moritz.png';
import EventsImg from '../images/Major_Events_Hero.png';
import VeniceImg from '../images/Venice.avif'; // Assuming this is the Venice image you meant

// Fleet images (reusing AirportImg as sClassImg)
const sClassImg = AirportImg;
import vClassImg from '../images/Airport_Fleet_V_Class.png';
import eClassImg from '../images/Airport_Fleet_E_Class.png';

const Home: React.FC = () => {

  // Helper function to get the correct image for a service
  const getServiceImage = (serviceId: string) => {
    switch (serviceId) {
      case 'airport-transfers': // Ensure these IDs match your constants.ts
      case 'airport':
        return AirportImg;
      case 'ski-transfers':
      case 'ski':
        return SkiImg;
      case 'major-events':
      case 'events':
        return EventsImg;
      case 'private-tours':
      case 'tours':
        return VeniceImg;
      default:
        return AirportImg; // Fallback
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Custom Mercedes V-Class in the Alps"
            className="w-full h-full object-cover object-bottom opacity-60 scale-100 animate-[subtleZoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-9xl font-sans font-bold text-white mb-8 leading-[1] tracking-tighter animate-[fadeIn_1.5s_ease-out]">
            Luxury transfers in <br />
            <span className="text-gold">Milan and Beyond</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-[fadeIn_2s_ease-out]">
            Book private tours, airport transfers and more with our luxury fleet
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-[fadeIn_2.5s_ease-out]">
            <Link to="/booking" className="w-full sm:w-auto bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Now
            </Link>
            <Link to="/milano-cortina-2026" className="w-full sm:w-auto border border-white/30 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
              Explore 2026 Games
            </Link>
          </div>

          <div className="mt-12 flex justify-center">
            <HeroSocialProof />
          </div>
        </div>
      </section>

      {/* Style Animations */}
      <style>{`
        @keyframes subtleZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-16">
            <h3 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight uppercase">Our Services</h3>
            <a
              href="#footer-services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('footer-services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute right-0 flex items-center space-x-2 text-gold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:text-white transition-colors cursor-pointer"
            >
              <span>View all services</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <Link to={service.path} key={service.id} className="group relative overflow-hidden h-[450px] block border border-white/5">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="text-gold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-white font-sans font-bold text-2xl mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
            {/* Punctuality */}
            <div className="flex flex-col items-center">
              <Clock className="text-gold w-10 h-10 mb-8 stroke-[1px]" />
              <h4 className="text-white text-xl font-bold uppercase tracking-[0.2em] mb-4">Punctuality</h4>
              <p className="text-zinc-500 text-sm max-w-[280px] leading-relaxed">
                Our chauffeurs arrive 15 minutes prior for every scheduled pickup.
              </p>
            </div>

            {/* Professional Drivers */}
            <div className="flex flex-col items-center">
              <UserCheck className="text-gold w-10 h-10 mb-8 stroke-[1px]" />
              <h4 className="text-white text-xl font-bold uppercase tracking-[0.2em] mb-4">Professional Drivers</h4>
              <p className="text-zinc-500 text-sm max-w-[280px] leading-relaxed">
                Formally dressed, multilingual experts trained in high-profile protocol and safety.
              </p>
            </div>

            {/* Absolute Privacy */}
            <div className="flex flex-col items-center">
              <Shield className="text-gold w-10 h-10 mb-8 stroke-[1px]" />
              <h4 className="text-white text-xl font-bold uppercase tracking-[0.2em] mb-4">Absolute Privacy</h4>
              <p className="text-zinc-500 text-sm max-w-[280px] leading-relaxed">
                Discreet unmarked vehicles and strict non-disclosure policies ensure total confidentiality.
              </p>
            </div>
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

      {/* Testimonial Section */}
      <MinimalTestimonial
        quote="An impeccable service. The S-Class was pristine, and the driver navigated Milan's traffic with absolute calm. A truly first-class experience."
        author="Chen W., Founder & CEO"
      />

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8">Ready to arrive in style?</h2>
          <p className="text-gray-400 text-lg mb-12 font-light italic">
            Whether it's a quick airport transfer or a full-day Olympic delegation convoy, we provide the ultimate in discrete luxury transport.
          </p>
          <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300">
            Secure Your Booking
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
