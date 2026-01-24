
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Snowflake,
  Mountain,
  ChevronRight,
  ShieldCheck,
  Clock,
  Users,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

// --- IMPORT LOCAL IMAGES ---
// Using Cortina as the main hero because it's scenic, or swap with a specific "Hero" image if you made one
import skiHeroImg from '../images/V_Class_In_Mountains_2.png';

// Destination Images
import cortinaImg from '../images/Ski_Resorts_Cortina.png';
import stMoritzImg from '../images/Ski_Resorts_St_Moritz.png';
import courmayeurImg from '../images/Ski_Resorts_Courmayeur.png';
import livignoImg from '../images/Ski_Resorts_Livigno.png';
import cerviniaImg from '../images/Ski_Resorts_Cervinia.png';
import courchevelImg from '../images/Ski_Resorts_Courchevel.png';

// Fleet Images
import vClassWinterImg from '../images/V_Class_In_Mountains_Cropped.png';
import sClassWinterImg from '../images/S_Class_In_Mountains_Cropped.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';


const SkiResortTransfers: React.FC = () => {
  // Removed AI generation logic

  const destinations = [
    {
      name: 'Cortina d\'Ampezzo',
      subtitle: 'The 2026 Olympic Hub',
      time: '~4.5 hours',
      image: cortinaImg,
      path: '/destinations/cortina'
    },
    {
      name: 'St. Moritz',
      subtitle: 'Swiss Luxury',
      time: '~3 hours',
      image: stMoritzImg,
      path: '/destinations/st-moritz'
    },
    {
      name: 'Courmayeur',
      subtitle: 'Mont Blanc',
      time: '~2.5 hours',
      image: courmayeurImg,
      path: '/destinations/courmayeur'
    },
    {
      name: 'Livigno',
      subtitle: 'Duty-Free Skiing',
      time: '~4 hours',
      image: livignoImg,
      path: '/destinations/livigno'
    },
    {
      name: 'Cervinia / Zermatt',
      subtitle: 'The Matterhorn',
      time: '~2.5 hours',
      image: cerviniaImg,
      path: '/destinations/cervinia'
    },
    {
      name: 'Courchevel',
      subtitle: 'French Alps - Long Distance',
      time: '~4.5 hours',
      image: courchevelImg,
      path: '/destinations/courchevel'
    }
  ];

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={skiHeroImg}
            alt="Luxury Ski Transfer in Alps"
            className="w-full h-full object-cover opacity-50 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

          <div className="max-w-3xl mt-[70px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tight">
              Luxury Ski Transfers from <span className="text-gold">Milan to the Alps.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              Safe, comfortable, and winter-equipped transfers to Cortina, St. Moritz, Courchevel, and beyond.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Get a Ski Transfer Quote
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The "Winter Ready" Guarantee */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#050505] border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6 border border-gold/20">
              <Snowflake size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Premium Winter Tires</h3>
            <p className="text-zinc-500 text-sm">All vehicles are equipped with top-tier winter tires and carry onboard snow chains for absolute safety.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6 border border-gold/20">
              <Mountain size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3">Ski & Gear Racks</h3>
            <p className="text-zinc-500 text-sm">Professional roof racks or internal V-Class configurations provide ample space for skis and snowboards.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-6 border border-gold/20">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-3">4MATIC Capability</h3>
            <p className="text-zinc-500 text-sm">Our 4-Wheel Drive fleet handles steep mountain passes and icy roads with executive stability.</p>
          </div>
        </div>
      </section>

      {/* 3. Top Ski Destinations Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">Top Ski Destinations</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="group relative overflow-hidden bg-zinc-900 flex flex-col border border-white/5 h-full">
              <div className="h-64 overflow-hidden shrink-0">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-1">Transfer Milan to {dest.name}</h3>
                <p className="text-gold uppercase tracking-widest text-[10px] font-bold mb-4">{dest.subtitle}</p>
                <div className="flex items-center gap-2 text-zinc-500 text-xs mb-8">
                  <Clock size={14} />
                  <span>Est. Drive Time: {dest.time}</span>
                </div>
                <Link to={dest.path} className="block text-center border border-gold text-gold py-4 font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all mt-auto">
                  Book Transfer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Fleet (Winter Configuration) */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">The Fleet: Winter Config</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* V-Class */}
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
              <img src={vClassWinterImg} alt="Mercedes V-Class" className="w-full h-[270px] object-cover object-center mb-8 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>

            {/* S-Class */}
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
              <img src={sClassWinterImg} alt="Mercedes S-Class" className="w-full h-[270px] object-cover object-center mb-8 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote="Navigating the mountain passes to St. Moritz was effortless. The V-Class handled the snow perfectly, and our ski gear was packed with care."
        author="Hans G., Professional Skier"
      />

      {/* 6. FAQ Section */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-16 text-center">Ski Transfer FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Do you charge extra for ski bags?</h4>
              <p className="text-zinc-500 text-sm font-light">No, specialized equipment transport is included in our V-Class rates. We provide ample space for ski bags, snowboards, and heavy winter luggage at no additional cost.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Do drivers know how to drive in snow?</h4>
              <p className="text-zinc-500 text-sm font-light">Yes, all our chauffeurs are highly experienced mountain drivers trained specifically for winter conditions in the Alps and Dolomites.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Can you pick up from Malpensa Airport?</h4>
              <p className="text-zinc-500 text-sm font-light">Yes, we provide direct transfers from Malpensa (MXP), Linate (LIN), and Bergamo (BGY) directly to any ski resort in Italy, Switzerland, or France.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEO Content Block - Link Hub */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-sans font-bold uppercase tracking-tight text-white mb-8">
            Your Private Driver to the Alps & Dolomites
          </h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-6">
            <p>
              Start your winter holiday with the ultimate comfort and safety. Navigating snowy mountain passes requires expertise and the right vehicle. Our fleet of 4x4 Mercedes V-Class vans ensures you reach your destination relaxed and ready to ski.
            </p>
            <p>
              We offer direct connections to the most prestigious winter hubs. For the 2026 Winter Games, book our specialized <Link to="/destinations/cortina" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Transfer Milan to Cortina</Link>. If you prefer the Swiss luxury lifestyle, our <Link to="/destinations/st-moritz" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan to St. Moritz Chauffeur</Link> crosses the border seamlessly. We also provide fast access to the Mont Blanc region via our <Link to="/destinations/courmayeur" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan to Courmayeur Service</Link> and high-altitude trips to <Link to="/destinations/cervinia" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Cervinia & Matterhorn Ski Transfer</Link>.
            </p>
            <p>
              For longer stays, choose our duty-free route with a <Link to="/destinations/livigno" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan to Livigno Private Ride</Link>, or travel across the French border with our exclusive <Link to="/destinations/courchevel" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan to Courchevel Long-Distance Transfer</Link>. All vehicles come equipped with winter tires and ample space for your ski equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold text-black text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Ready for the Slopes?</h2>
          <Link to="/booking" className="inline-block bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
            Book Your Ski Transfer Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SkiResortTransfers;
