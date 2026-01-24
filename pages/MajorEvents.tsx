import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Shield,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

// --- IMPORT LOCAL IMAGES ---

import majorEventsHero from '../images/Major_Events_Hero.png';
import fashionWeekImg from '../images/Milan_Fashion_Week.png';
import designWeekImg from '../images/Salone_Del_Mobile.png';
import f1Img from '../images/Monza_Grand_Prix.png';
import sanSiroImg from '../images/San_Siro.png';
import olympicsImg from '../images/Milano_Cortina_2026.png';

// Fleet images for events
import sClassEventImg from '../images/S_Class_On_Event.png';
import vClassEventImg from '../images/V_Class_On_Event.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';


const MajorEvents: React.FC = () => {
  // Removed AI generation logic

  const eventCards = [
    {
      title: 'Milan Fashion Week',
      date: 'Feb & Sept',
      desc: 'Hourly disposal for runway shows, showrooms, and exclusive after-parties.',
      image: fashionWeekImg,
      path: '/events/fashion-week'
    },
    {
      title: 'Salone del Mobile',
      date: 'April',
      desc: 'Transfers between Rho Fiera and the vibrant Fuorisalone districts.',
      image: designWeekImg,
      path: '/events/design-week'
    },
    {
      title: 'Italian Grand Prix (Monza)',
      date: 'September',
      desc: 'VIP paddock drop-off access and skip-the-line routes to the circuit.',
      image: f1Img,
      path: '/events/monza-f1'
    },
    {
      title: 'San Siro Events',
      date: 'Year-round',
      desc: 'Champions League matches, international concerts, and mega events.',
      image: sanSiroImg,
      path: '/events/san-siro'
    },
    {
      title: 'Milano Cortina 2026',
      date: 'Feb 2026',
      desc: 'Official delegation, media logistics, and VIP transport for the Winter Games.',
      image: olympicsImg,
      path: '/milano-cortina-2026'
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={majorEventsHero}
            alt="VIP Transport Milan Events"
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="max-w-3xl lg:max-w-[848px] mt-[50px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight">
              VIP Transport for Milan's <span className="text-gold">Premier Events.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              From runway shows to race circuits: arrive on time, in style, with absolute discretion.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Event Transport
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Event Highlights Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">Event Highlights</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCards.map((event, i) => (
            <div key={i} className="group relative overflow-hidden bg-zinc-900 flex flex-col border border-white/5">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4">{event.date}</p>
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">{event.desc}</p>
                <Link to={event.path} className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white group-hover:text-gold transition-colors">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Event Transport Matters */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Timing is Critical</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">We monitor traffic patterns and venue access points in real time to ensure you never miss a curtain-up or a kick-off.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Calendar size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Hourly Disposal</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">The ultimate flexibility for high-paced days. Your driver remains on standby for multi-stop hotel-to-venue rotations.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Shield size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Absolute Discretion</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Tinted windows, unmarked luxury vehicles, and professional chauffeurs trained in high-profile confidentiality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Fleet */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">Event-Ready Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-2">Mercedes-Benz S-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Executive Galas & VIP Arrivals</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span>The gold standard for red carpet events</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span>Maximum privacy for celebrity and VIP clients</span>
                </div>
              </div>
              <img src={sClassEventImg} alt="S-Class" className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-lg" />
            </div>

            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-2">Mercedes-Benz V-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Entourages & Crew Logistics</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span>Ideal for PR teams and large group transfers</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span>Conference seating for mid-transit briefings</span>
                </div>
              </div>
              <img src={vClassEventImg} alt="V-Class" className="w-full h-56 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote="Arriving at Fashion Week in a pristine S-Class was the perfect start to our events. Discreet, punctual, and elegant."
        author="Marco R., Fashion Consultant"
      />

      {/* 5. SEO Content Block */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-8 text-center">
            Milan Event Chauffeur Services
          </h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-6">
            <p>
              Milan is the epicenter of global style, design, and motorsport. Whether you are attending the high-octane atmosphere of the <Link to="/events/monza-f1" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Italian Grand Prix at Monza</Link> or the exclusive runways of <Link to="/events/fashion-week" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan Fashion Week Chauffeur Service</Link>, precision logistics are non-negotiable.
            </p>
            <p>
              Our dedicated <Link to="/events/design-week" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Salone del Mobile Transport</Link> ensures seamless navigation between Rho Fiera and the vibrant Fuorisalone events in Brera, Tortona, and Ventura. For sports enthusiasts, our <Link to="/events/san-siro" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">San Siro Stadium Transfer Service</Link> offers direct drop-off for Champions League matches and sold-out concerts.
            </p>
            <p>
              As we approach 2026, our specialized <Link to="/milano-cortina-2026" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milano Cortina Winter Olympics VIP Transport</Link> provides delegation convoys, media logistics, and executive transfers between Milan and Cortina. Every service is designed for professionals who cannot afford delays or complications.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-16 text-center">Event Transport FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Can I book hourly disposal for Fashion Week?</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">Yes, our hourly disposal service is the preferred choice for MFW. We require a minimum booking of 4 hours, which provides you with a dedicated driver and vehicle for the entire duration.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Do you have access to restricted zones near San Siro?</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">Absolutely. As licensed NCC (Noleggio Con Conducente) operators, our vehicles are authorized to enter restricted ZTL areas and special drop-off zones designated for stadium events.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Can you wait between events?</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">Yes, with our hourly disposal service, your chauffeur remains on-site or in the immediate vicinity to pick you up exactly when you are ready to depart for the next venue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-black text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Arrive at the Center Stage</h2>
          <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
            Book Event Transport Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MajorEvents;
