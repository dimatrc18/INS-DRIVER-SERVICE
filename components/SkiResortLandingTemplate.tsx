import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  MapPin,
  Snowflake,
  ShieldCheck,
  Mountain,
  ArrowRight,
  Users,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import MinimalTestimonial from './MinimalTestimonial';

// --- 1. IMPORT WINTER FLEET IMAGES ---
import vClassWinterImg from '../images/V_Class_In_Mountains_Cropped.png';
import sClassWinterImg from '../images/S_Class_In_Mountains_Cropped.png';

// --- 2. IMPORT RESORT SCENERY IMAGES ---
// Make sure these filenames match exactly what is in your images folder
import livignoImg from '../images/Ski_Resorts_Livigno_2.jpg';
import cerviniaImg from '../images/Ski_Resorts_Cervinia.png';
import courchevelImg from '../images/Ski_Resorts_Courchevel.png';
import stMoritzImg from '../images/Ski_Resorts_St_Moritz.png';
import cortinaImg from '../images/Ski_Resorts_Cortina.png';
import courmayeurImg from '../images/Ski_Resorts_Courmayeur.png';
// Fallback image
import defaultSkiImg from '../images/Ski_Resorts_Cortina.png';

interface RouteStat {
  label: string;
  value: string;
}

interface SkiResortProps {
  name: string;
  h1: string;
  heroText: string;
  heroImageFallback: string; // We keep this prop but prioritize local imports
  sellingPoint: string;
  distance: string;
  time: string;
  region: string;
  seoText: string;
  faqs: { q: string; a: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
  heroImageObjectPosition?: string; // Optional prop for image positioning (e.g. 'object-top')
}

const SkiResortLandingTemplate: React.FC<SkiResortProps> = ({
  name, h1, heroText, heroImageFallback, sellingPoint, distance, time, region, seoText, faqs,
  testimonialQuote, testimonialAuthor, heroImageObjectPosition = 'object-center'
}) => {

  // --- IMAGE MAPPING LOGIC ---
  const getHeroImage = (resortName: string) => {
    const n = resortName.toLowerCase();

    if (n.includes('livigno')) return livignoImg;
    if (n.includes('cervinia') || n.includes('zermatt')) return cerviniaImg;
    if (n.includes('courchevel')) return courchevelImg;
    if (n.includes('moritz')) return stMoritzImg;
    if (n.includes('cortina')) return cortinaImg;
    if (n.includes('courmayeur')) return courmayeurImg;

    // Use the fallback prop if passed, otherwise default local image
    return heroImageFallback || defaultSkiImg;
  };

  const heroImage = getHeroImage(name);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`Luxury transfer to ${name}`}
            className={`w-full h-full object-cover opacity-50 grayscale-[0.2] ${heroImageObjectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mt-[110px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight">
              {h1}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              {heroText}
            </p>
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex items-center gap-3">
                <MapPin className="text-gold" size={20} />
                <span className="text-sm uppercase tracking-widest font-bold">{distance}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-gold" size={20} />
                <span className="text-sm uppercase tracking-widest font-bold">{time}</span>
              </div>
            </div>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* Route Details */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-8">Route Experience</h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
              Why settle for shared shuttles or trains? A private chauffeur provides a seamless door-to-door experience, allowing you to bypass the stress of mountain driving and luggage handling.
            </p>
            <div className="p-8 bg-zinc-900 border-l-4 border-gold italic text-zinc-300">
              "{sellingPoint}"
            </div>
          </div>
          <div className="bg-zinc-900/50 p-10 border border-white/5">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-10 text-center">Route Statistics</h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Departure</span>
                <span className="font-bold">Milan (City or Airport)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Destination</span>
                <span className="font-bold">{name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Distance</span>
                <span className="font-bold">{distance}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Est. Drive Time</span>
                <span className="font-bold">{time}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Region</span>
                <span className="font-bold">{region}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Logistics */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-sans font-bold uppercase tracking-tighter">Alpine Ready Logistics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Snowflake className="text-gold mb-6" size={40} />
              <h4 className="font-bold mb-4 uppercase tracking-widest">Winter Equipped</h4>
              <p className="text-zinc-500 text-sm">All vehicles feature premium winter tires and snow chains for guaranteed safety on icy passes.</p>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="text-gold mb-6" size={40} />
              <h4 className="font-bold mb-4 uppercase tracking-widest">4MATIC Fleet</h4>
              <p className="text-zinc-500 text-sm">Our 4x4 Mercedes-Benz vans and sedans provide maximum stability in high-altitude conditions.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-gold mb-6" size={40} />
              <h4 className="font-bold mb-4 uppercase tracking-widest">Gear Capacity</h4>
              <p className="text-zinc-500 text-sm">Large internal space or professional roof racks for multiple ski bags and oversized luggage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Winter Config */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">The Fleet: Winter Config</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* V-Class Card */}
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-4">Mercedes-Benz V-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-8">The Skier’s Choice</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-600">
                  <Users size={20} className="text-gold" />
                  <span>Fits up to 7 passengers</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <Briefcase size={20} className="text-gold" />
                  <span>Holds 7+ ski bags & heavy luggage</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span>Conference seating for meetings on the move</span>
                </div>
              </div>
              <img
                src={vClassWinterImg}
                alt="Mercedes V-Class in Snow"
                className="w-full h-[270px] object-cover object-center mb-8 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* S-Class Card */}
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-4">Mercedes-Benz S-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-xs mb-8">VIP Mountain Arrival</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-600">
                  <Users size={20} className="text-gold" />
                  <span>Fits up to 2-3 passengers</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <Briefcase size={20} className="text-gold" />
                  <span>Fits 2-3 suitcases (No ski bags inside)</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={20} className="text-gold" />
                  <span>Maximum comfort and alpine status</span>
                </div>
              </div>
              <img
                src={sClassWinterImg}
                alt="Mercedes S-Class in Snow"
                className="w-full h-[270px] object-cover object-center mb-8 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {testimonialQuote && testimonialAuthor && (
        <MinimalTestimonial quote={testimonialQuote} author={testimonialAuthor} />
      )}

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-10">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">{f.q}</h4>
              <p className="text-zinc-400 font-light leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Block */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-700 mb-8">Premium Ski Chauffeur Service</h2>
          <div className="text-zinc-500 text-sm font-light leading-relaxed mb-10">
            {seoText}
          </div>
          <Link to="/services/ski-resorts" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
            <span>View all Ski Transfers</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-black border-t border-black/5 text-center">
        <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-8">Arrive at {name} in Style</h2>
        <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
          Get a Quote Now
        </Link>
      </section>
    </div>
  );
};

export default SkiResortLandingTemplate;
