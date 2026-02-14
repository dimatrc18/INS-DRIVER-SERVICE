import React, { useState, useEffect, useRef } from 'react';
import { FLEET } from '../constants';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLocalePath } from '../hooks/useLocalePath';

// Import components
import HeroSocialProof from '../components/HeroSocialProof';
import HowItWorks from '../components/HowItWorks';
import JourneyIncludes from '../components/JourneyIncludes';
import PopularDestinations from '../components/PopularDestinations';
import FAQ from '../components/FAQ';
import ReviewsMarquee from '../components/ReviewsMarquee';

// Import service images (Reusing existing assets where generic)
const CityTransferImg = import.meta.env.BASE_URL + 'images/S_Class_Near_Lake.webp'; // Looks like a premium transfer
const AirportImg = import.meta.env.BASE_URL + 'images/Airport_Image.webp';
const HourlyImg = import.meta.env.BASE_URL + 'images/V_Class_Trunk_With_Bags.webp';

// Fleet images
const sClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_S_Class.webp';
const vClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_V_Class.webp';
const eClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_E_Class_2.webp';

// About images
const AboutChauffeur = import.meta.env.BASE_URL + 'images/Italian_Hospitality.webp'; // Rename mentally to "Professional Chauffeur"

// Hero image
const HeroCarImg = import.meta.env.BASE_URL + 'images/hero_sclass_white_bg.webp';

const Home: React.FC = () => {
  const localePath = useLocalePath();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Animated counter state
  const [yearsCount, setYearsCount] = useState(0);
  const [driversCount, setDriversCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Services scroll state
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesScrollRef = useRef<HTMLDivElement>(null);

  const words = ["Brussels", "Antwerp", "Paris", "Bruges", "Ghent", "Amsterdam"];

  // Services scroll handlers
  const scrollToService = (index: number) => {
    if (servicesScrollRef.current) {
      const container = servicesScrollRef.current;
      const cardWidth = container.scrollWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentServiceIndex(index);
    }
  };

  const handlePrevService = () => {
    const newIndex = currentServiceIndex > 0 ? currentServiceIndex - 1 : 2;
    scrollToService(newIndex);
  };

  const handleNextService = () => {
    const newIndex = currentServiceIndex < 2 ? currentServiceIndex + 1 : 0;
    scrollToService(newIndex);
  };

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate stats
          let y = 0; const yearsInterval = setInterval(() => { y++; setYearsCount(y); if (y >= 15) clearInterval(yearsInterval); }, 100);
          let d = 0; const driversInterval = setInterval(() => { d += 3; if (d > 75) d = 75; setDriversCount(d); if (d >= 75) clearInterval(driversInterval); }, 30);
          let c = 0; const customersInterval = setInterval(() => { c += 50; if (c > 5000) c = 5000; setCustomersCount(c); if (c >= 5000) clearInterval(customersInterval); }, 10);
          let v = 0; const vehiclesInterval = setInterval(() => { v += 6; if (v > 150) v = 150; setVehiclesCount(v); if (v >= 150) clearInterval(vehiclesInterval); }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "INS Driver Service Belgium",
    "serviceType": "Luxury Chauffeur Service",
    "description": "Premium private chauffeur service in Brussels, specialized in airport transfers, diplomatic transport, and intercity travel.",
    "areaServed": ["Brussels", "Antwerp", "Ghent", "Paris", "Amsterdam"],
    "provider": {
      "@type": "LocalBusiness",
      "name": "INS Driver Service Belgium",
      "telephone": "+32 483 506 356",
      "priceRange": "€€€€"
    }
  };

  return (
    <div className="bg-white">
      <SEO
        title="INS Driver Service | Premier Chauffeur Service Belgium"
        description="Executive chauffeurs in Brussels. Luxury airport transfers, diplomatic services, and long-distance travel across the Benelux."
        canonical="/"
        schema={JSON.stringify(structuredData)}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-zinc-900 leading-[1.1] tracking-tight">
              Premium Chauffeur<br />
              <span className="text-gold italic relative inline-block">
                to {text}
                <span className="absolute inline-block w-0.5 h-[0.9em] bg-gold ml-1 animate-[cursorBlink_1s_ease-in-out_infinite]"></span>
              </span>
            </h1>

            <div className="flex justify-center pb-2">
              <HeroSocialProof />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={localePath('/booking')}
                className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-zinc-800 hover:shadow-xl transition-all duration-300"
              >
                Book Your Ride
              </Link>
              <Link
                to={localePath('/fleet')}
                className="w-full sm:w-auto bg-white border-2 border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-bold tracking-wide hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300"
              >
                Browse Fleet
              </Link>
            </div>

            <div className="flex justify-center pt-[32px]">
              <div className="relative w-full max-w-md">
                <img
                  src={HeroCarImg}
                  alt="Black Mercedes-Benz S-Class"
                  className="w-full h-auto object-contain scale-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes cursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>

      {/* Featured Services Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 tracking-tight">Our Services</h2>
          </div>

          <div className="relative">
            {/* Desktop/Tablet Grid & Mobile Horizontal Scroll */}
            <div ref={servicesScrollRef} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-auto pb-8 md:pb-0 scrollbar-hide snap-x snap-mandatory">
              {/* City-to-city rides */}
              <Link to={localePath('/services/ski-resorts')} className="min-w-[85vw] md:min-w-0 snap-center group flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10] mb-6 rounded-2xl">
                  <img
                    src={CityTransferImg}
                    alt="City to City Transfer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Intercity Transfers</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  Seamless travel between Brussels, Antwerp, Paris, and Amsterdam. Enjoy door-to-door luxury without the stress of trains or flights.
                </p>
                <span className="text-sm font-bold text-zinc-900 underline underline-offset-8 group-hover:text-gold transition-colors decoration-zinc-200 group-hover:decoration-gold mt-auto">
                  Request Quote
                </span>
              </Link>

              {/* Airport transfers */}
              <Link to={localePath('/services/airport-transfers')} className="min-w-[85vw] md:min-w-0 snap-center group flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10] mb-6 rounded-2xl">
                  <img
                    src={AirportImg}
                    alt="Airport Transfer Brussels"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Airport Transfers</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  VIP meet & greet at Brussels (BRU), Charleroi (CRL), and Antwerp (ANR). Flight tracking included.
                </p>
                <span className="text-sm font-bold text-zinc-900 underline underline-offset-8 group-hover:text-gold transition-colors decoration-zinc-200 group-hover:decoration-gold mt-auto">
                  Request Quote
                </span>
              </Link>

              {/* Hourly and full day hire */}
              <Link to={localePath('/services/major-events')} className="min-w-[85vw] md:min-w-0 snap-center group flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10] mb-6 rounded-2xl">
                  <img
                    src={HourlyImg}
                    alt="Hourly Chauffeur Service"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Hourly & Events</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  Flexible disposal for EU Summits, Tomorrowland, or business roadshows. Your driver, your schedule.
                </p>
                <span className="text-sm font-bold text-zinc-900 underline underline-offset-8 group-hover:text-gold transition-colors decoration-zinc-200 group-hover:decoration-gold mt-auto">
                  Request Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <PopularDestinations />

      {/* About Us Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-64 md:opacity-100 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 mb-6 tracking-tight leading-tight">
                About INS Driver Service
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed">
                We are the preferred chauffeur partner for diplomats, executives, and luxury travelers in Belgium. Punctuality, discretion, and excellence are our core values.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-12 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 mb-1 tabular-nums">{yearsCount}+</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 mb-1 tabular-nums">{driversCount}+</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Professional Chauffeurs</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 mb-1 tabular-nums">{customersCount.toLocaleString()}+</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 mb-1 tabular-nums">{vehiclesCount}+</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Luxury Vehicles</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img
                src={AboutChauffeur}
                alt="Professional Chauffeur in Brussels"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-sans font-bold text-zinc-900">
                European Standards, Personal Touch
              </h3>

              <div className="prose prose-zinc text-zinc-500 leading-relaxed">
                <p>
                  Specializing in <Link to={localePath('/booking')} className="text-gold font-bold hover:underline">diplomatic transport</Link> and executive logistics, we define reliability in the Benelux region.
                  Our <Link to={localePath('/fleet')} className="text-zinc-900 font-bold hover:text-gold transition-colors">Mercedes-Benz fleet</Link> is impeccably maintained and LEZ compliant for access to all city centers.
                </p>
                <p className="mt-4">
                  Whether you need a transfer from <Link to={localePath('/services/airport-transfers')} className="text-zinc-900 font-bold hover:text-gold transition-colors">Brussels Airport</Link> to the EU Parliament,
                  or a long-distance journey to <Link to={localePath('/destinations/paris')} className="text-gold font-bold hover:underline">Paris</Link> or <Link to={localePath('/destinations/amsterdam')} className="text-gold font-bold hover:underline">Amsterdam</Link>,
                  our chauffeurs ensure a smooth, comfortable, and confidential ride.
                </p>
              </div>

              {/* Popular Transfers List */}
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mb-6">Popular Connections</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                  <li>
                    <Link to={localePath('/services/airport-transfers')} className="flex items-center text-zinc-600 hover:text-gold transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 text-zinc-300 group-hover:text-gold transition-colors" />
                      <span className="text-sm font-medium">Brussels to Paris</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={localePath('/services/airport-transfers')} className="flex items-center text-zinc-600 hover:text-gold transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 text-zinc-300 group-hover:text-gold transition-colors" />
                      <span className="text-sm font-medium">Brussels Airport to City</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={localePath('/destinations/antwerp')} className="flex items-center text-zinc-600 hover:text-gold transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 text-zinc-300 group-hover:text-gold transition-colors" />
                      <span className="text-sm font-medium">Brussels to Antwerp</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={localePath('/destinations/bruges')} className="flex items-center text-zinc-600 hover:text-gold transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 text-zinc-300 group-hover:text-gold transition-colors" />
                      <span className="text-sm font-medium">Brussels to Bruges</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Executive Fleet Options */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4 text-zinc-900">Our Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-bold italic">Driven by Excellence</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET.map((car) => {
              const getCarImage = (carId: string) => {
                const id = carId.toLowerCase();
                if (id.includes('v-class') || id.includes('van')) return vClassImg;
                if (id.includes('e-class')) return eClassImg;
                return sClassImg;
              };

              // Use hardcoded fallback features if translation missing or structure changed
              const features = Array.isArray(car.features) ? car.features : ["Leather Seats", "Wifi", "Water"];

              return (
                <Link
                  key={car.id}
                  to={localePath('/fleet')}
                  className="group relative bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-2xl overflow-hidden h-80 flex flex-col justify-between p-6 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative z-20">
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-white transition-colors duration-500 mb-1">{car.model}</h3>
                    <p className="text-zinc-800 group-hover:text-white transition-colors duration-500 text-xs font-bold uppercase tracking-tight">
                      Luxury Class
                    </p>
                  </div>

                  <div className="absolute inset-0 w-full h-full z-10">
                    <img
                      src={getCarImage(car.id)}
                      alt={`${car.model}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent group-hover:from-black/40 group-hover:via-black/30 group-hover:to-black/20 transition-all duration-500"></div>
                  </div>

                  <div className="absolute inset-0 z-15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                    <div className="text-center">
                      <p className="text-white font-bold text-sm">View Details</p>
                    </div>
                  </div>

                  <div className="relative z-20 flex items-end justify-between">
                    <span className="text-[10px] bg-zinc-900 group-hover:bg-white px-3 py-1.5 rounded-full font-bold text-white group-hover:text-zinc-900 transition-colors">
                      {car.id.includes('v-class') ? "Max 7" : "Max 3"}
                    </span>
                    <div className="w-10 h-10 bg-zinc-900 group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-zinc-900 group-hover:scale-110 transition-all shadow-lg mr-2">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-zinc-500 text-sm font-medium mb-4">Need a convoy for a delegation?</p>
            <Link
              to={localePath('/booking')}
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg"
            >
              Book Multiple Vehicles
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <JourneyIncludes />



      <FAQ />

      <ReviewsMarquee />

      {/* SEO Block */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-sans font-bold tracking-tight text-zinc-900 mb-8 uppercase">
            Premium Chauffeur Services Belgium
          </h2>
          <p className="text-zinc-500 font-medium leading-relaxed mb-6">
            INS Driver Service operates a premium fleet across the Benelux region, specializing in <Link to={localePath('/services/airport-transfers')} className="text-zinc-600 font-bold hover:text-gold transition-colors">Brussels Airport Transfers</Link> and diplomatic logistics. From the EU Quarter to <Link to={localePath('/destinations/antwerp')} className="text-zinc-600 font-bold hover:text-gold transition-colors">Antwerp's Diamond District</Link>, our chauffeurs provide discreet, punctual, and safe transport.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden rounded-[4rem] mx-4 mb-8">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8">Execute Your Journey.</h2>
          <p className="text-zinc-400 text-lg mb-12 font-medium">
            Experience the "European Protocol" standard of travel. Book your ride today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={localePath('/booking')} className="w-full sm:w-auto bg-white text-zinc-900 px-12 py-5 rounded-full font-bold tracking-wide hover:bg-gold transition-all duration-300 shadow-xl">
              Request Your Quote
            </Link>
            <a href="tel:+32483506356" className="text-white font-bold text-xl hover:text-gold transition-colors">
              Call Now: +32 483 506 356
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
