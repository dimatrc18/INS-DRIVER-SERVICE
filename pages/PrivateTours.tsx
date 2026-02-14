import React from 'react';
import { Link } from 'react-router-dom';
import {
  Map,
  Clock,
  Compass,
  Home,
  ShoppingBag,
  Camera,
  CheckCircle2,
  Beer,
  Ship,
  ChevronDown
} from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';
import HeroSocialProof from '../components/HeroSocialProof';
import ReviewsMarquee from '../components/ReviewsMarquee';
import SEO from '../components/SEO';

// --- IMPORT LOCAL IMAGES ---
// Reusing existing assets with new context
const BrugesImg = import.meta.env.BASE_URL + 'images/Bruges_Hero.jpg'; // Canals match Bruges
const AntwerpImg = import.meta.env.BASE_URL + 'images/Antwerp_Hero.jpg'; // Urban/Architecture
const BeerTastingImg = import.meta.env.BASE_URL + 'images/Ghent_Hero.jpg'; // Using Ghent for beer/culture vibe
const EuDistrictImg = import.meta.env.BASE_URL + 'images/Brussels_Atomium.jpg'; // Modern/Landmark

const VClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_V_Class.webp';
const SClassImg = import.meta.env.BASE_URL + 'images/Tour_Fleet_S_Class.webp';
const HeroImg = import.meta.env.BASE_URL + 'images/S_Class_In_Mountains_Cropped.webp'; // Scenic route

const PrivateTours: React.FC = () => {
  const localePath = useLocalePath();

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title="Private Tours Belgium | Bruges, Antwerp & Battlefields Chauffeur"
        description="Exclusive private tours in Belgium. Visit Bruges, Antwerp, Ghent, and World War battlefields with a private chauffeur. Bespoke itineraries."
        canonical="/services/private-tours"
      />
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Private Tour Belgium"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl lg:max-w-[950px] mt-[70px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter text-zinc-900">
              Discover Belgium's <br />
              <span className="text-zinc-400 italic">Hidden Gems</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium leading-relaxed">
              Experience the rich history of Flanders, the fashion of Antwerp, and the culinary delights of Brussels with a dedicated private chauffeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg text-center">
                Design Your Tour
              </Link>
            </div>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tour Highlights Grid */}
      <section id="experiences" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-zinc-900 uppercase">Curated Experiences</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {/* Bruges */}
          <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-full overflow-hidden relative">
                <img src={BrugesImg} alt="Bruges Private Tour" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  Full Day (8-10 Hours)
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="text-gold" size={24} />
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-900 uppercase">Bruges & Ghent</h3>
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Visit the "Venice of the North". Explore medieval architecture, take a canal boat tour, and taste authentic Belgian chocolate.
                </p>
                <div className="space-y-4 mb-10 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2 mb-2">Sample Itinerary</h4>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">09:00</span> Pickup in Brussels</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">10:30</span> Arrival in Ghent - St. Bavo's Cathedral</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">13:00</span> Lunch in historic Bruges</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">17:00</span> Return transfer</li>
                  </ul>
                </div>
                <Link to={localePath('/booking')} className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all shadow-lg w-full sm:w-auto self-start">
                  Book Bruges Tour
                </Link>
              </div>
            </div>
          </div>

          {/* Antwerp */}
          <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-full overflow-hidden relative lg:order-2">
                <img src={AntwerpImg} alt="Antwerp Tour" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  Half/Full Day
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="text-gold" size={24} />
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-900 uppercase">Antwerp Diamonds & Fashion</h3>
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Discover the Diamond District, visit the Rubens House, and shop in one of Europe's top fashion capitals.
                </p>
                <div className="space-y-4 mb-10 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2 mb-2">Highlights</h4>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">10:00</span> Diamond District Walking Tour</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">13:00</span> Lunch at The Jane (Reservation required)</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">15:00</span> Fashion Museum (MoMu)</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">18:00</span> Executive return drive</li>
                  </ul>
                </div>
                <Link to={localePath('/booking')} className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all shadow-lg w-full sm:w-auto self-start">
                  Book Antwerp Tour
                </Link>
              </div>
            </div>
          </div>

          {/* EU & Historical */}
          <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-full overflow-hidden relative">
                <img src={EuDistrictImg} alt="EU District" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  3-5 Hours
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Map className="text-gold" size={24} />
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-900 uppercase">Brussels & EU Quarter</h3>
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  A panoramic tour of Brussels, including the Grand Place, Atomium, and the European Parliament district.
                </p>
                <div className="space-y-4 mb-10 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2 mb-2">Key Areas</h4>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-gold shrink-0" /> Grand Place (UNESCO World Heritage)</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-gold shrink-0" /> Atomium & Mini-Europe</li>
                    <li className="flex gap-3"><CheckCircle2 size={16} className="text-gold shrink-0" /> European Commission HQ</li>
                  </ul>
                </div>
                <Link to={localePath('/booking')} className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all shadow-lg w-full sm:w-auto self-start">
                  Book City Tour
                </Link>
              </div>
            </div>
          </div>

          {/* Beer & Chocolate */}
          <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-full overflow-hidden relative lg:order-2">
                <img src={BeerTastingImg} alt="Belgian Beer" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2">
                  <Clock size={14} className="text-gold" />
                  Flexible
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Beer className="text-gold" size={24} />
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-900 uppercase">Gastronomy & Breweries</h3>
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                  Visit Trappist monasteries and world-renowned chocolatiers. A sensory journey through Belgian culture.
                </p>
                <div className="space-y-4 mb-10 bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-2 mb-2">Experience Includes</h4>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">Stop 1</span> Traditional Brewery Visit</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">Stop 2</span> Marcolini or Neuhaus Tasting</li>
                    <li className="flex gap-3"><span className="font-bold text-gold min-w-[60px]">Stop 3</span> Waffle Workshop</li>
                  </ul>
                </div>
                <Link to={localePath('/booking')} className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all shadow-lg w-full sm:w-auto self-start">
                  Book Gastronomy Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose a Private Tour */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Compass size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">Total Freedom</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">It's your tour, your pace. Stay longer at locations you love, skip the ones you don't.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Home size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">Door-to-Door</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">We pick you up from your hotel, apartment, or cruise ship terminal in absolute comfort.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gold mb-8 border border-zinc-100">
                <Map size={32} />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">Local Expertise</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Our drivers know the hidden spots, best viewpoints, and authentic restaurants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Touring Fleet */}
      <section className="py-32 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold tracking-tighter mb-4 uppercase">Your Touring Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border border-zinc-100 p-10 bg-white rounded-[2rem] hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-1 text-zinc-900">Mercedes-Benz V-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">For Families & Delegations (up to 7)</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-500 font-medium"><CheckCircle2 size={18} className="text-gold shrink-0" /> Vis-à-vis seating</div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium"><CheckCircle2 size={18} className="text-gold shrink-0" /> Panoramic windows</div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium"><CheckCircle2 size={18} className="text-gold shrink-0" /> On-board Wi-Fi</div>
              </div>
              <img src={VClassImg} alt="V-Class" className="w-full h-[315px] object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl ring-1 ring-zinc-100" />
            </div>

            <div className="group border border-zinc-100 p-10 bg-white rounded-[2rem] hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-1 text-zinc-900">Mercedes-Benz S-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">For Couples & VIPs (up to 3)</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-500 font-medium"><CheckCircle2 size={18} className="text-gold shrink-0" /> First-class comfort</div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium"><CheckCircle2 size={18} className="text-gold shrink-0" /> Reclining seats</div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium"><CheckCircle2 size={18} className="text-gold shrink-0" /> Acoustic isolation</div>
              </div>
              <img src={SClassImg} alt="S-Class" className="w-full h-[315px] object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl ring-1 ring-zinc-100" />
            </div>
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* 5. FAQ Section */}
      <section className="py-32 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-sans font-bold tracking-tight mb-16 text-center text-zinc-900 uppercase">Tour Questions</h2>
          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                Can we customize the itinerary?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                Absolutely. This is a private tour, meaning the schedule is entirely flexible. We can skip stops, stay longer, or add new locations on the fly.
              </div>
            </details>
            <details className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
              <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                Does the driver act as a guide?
                <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                Our chauffeurs are knowledgeable about the region and can provide general information, but they are not certified city guides. For deep historical tours, we can arrange for an official guide to accompany you.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">Ready to Explore?</h2>
          <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            Book Your Tour
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivateTours;
