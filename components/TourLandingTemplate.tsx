import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, CheckCircle2, ArrowRight, Info, Calendar } from 'lucide-react';
const VClassImg = import.meta.env.BASE_URL + 'images/Tour_Fleet_V_Class.webp';
const SClassImg = import.meta.env.BASE_URL + 'images/Tour_Fleet_S_Class.webp';
import ReviewsMarquee from './ReviewsMarquee';

interface ItineraryItem {
  time: string;
  activity: string;
}

interface TourLandingProps {
  tourName: string;
  h1: string;
  duration: string;
  heroImage: string;
  experienceText: string;
  itinerary: ItineraryItem[];
  whyPrivate: string;
  logisticsFocus: string;
  seoTitle: string;
  seoContent: string;
  schemaData: any;
  experienceImage?: string; // Optional separate image for Experience section
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

const TourLandingTemplate: React.FC<TourLandingProps> = ({
  tourName, h1, duration, heroImage, experienceText, itinerary, whyPrivate, logisticsFocus, seoTitle, seoContent, schemaData, experienceImage,
  testimonialQuote, testimonialAuthor
}) => {
  // Use distinct experience image if provided, else fallback to hero
  const sectionImage = experienceImage || heroImage;
  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={h1}
            className="w-full h-full object-cover opacity-70 grayscale-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter text-zinc-900">
              {h1}
            </h1>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white shadow-sm border border-zinc-100 px-4 py-2 rounded-full">
                <Clock size={16} className="text-gold" />
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-900">{duration}</span>
              </div>
            </div>
            <Link to="/booking" className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg">
              Book Experience
            </Link>
          </div>
        </div>
      </section>

      {/* The Experience Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-8 text-zinc-900">The Experience</h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed italic">
              "{experienceText}"
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-zinc-100 shadow-xl">
            <img src={sectionImage} alt="Experience detail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Itinerary & Logistics */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Itinerary */}
            <div>
              <h2 className="text-2xl font-sans font-bold uppercase tracking-widest mb-12 flex items-center gap-4 text-gold">
                <Calendar size={24} />
                Sample Itinerary
              </h2>
              <div className="space-y-10 relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/20"></div>
                {itinerary.map((item, idx) => (
                  <div key={idx} className="flex gap-8 relative">
                    <div className="w-4 h-4 rounded-full bg-gold shrink-0 mt-1.5 shadow-md"></div>
                    <div>
                      <h4 className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">{item.time}</h4>
                      <p className="text-zinc-600 text-lg font-medium leading-relaxed">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Private */}
            <div className="bg-white border border-zinc-100 p-12 flex flex-col justify-center rounded-[2rem] shadow-sm">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight text-zinc-900">Why Choose Private?</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                {whyPrivate}
              </p>
              <div className="flex items-start gap-4 p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
                <Info size={24} className="text-gold shrink-0" />
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2">Logistics Focus</h5>
                  <p className="text-sm text-zinc-400 font-medium italic leading-relaxed">
                    {logisticsFocus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* The Touring Fleet */}
      <section className="py-32 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold tracking-tighter mb-4 uppercase">The Touring Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border border-zinc-100 p-10 bg-white hover:shadow-2xl transition-all rounded-[2rem]">
              <h3 className="text-3xl font-bold mb-1 text-zinc-900">Mercedes-Benz V-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">The Panorama Choice</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-500 font-medium">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>High seating position for better panoramic views</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Huge trunk for shopping bags or wine cases</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Face-to-face seating for family conversation</span>
                </div>
              </div>
              <img src={VClassImg} alt="V-Class" className="w-full h-[315px] object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl ring-1 ring-zinc-100" />
            </div>

            <div className="group border border-zinc-100 p-10 bg-white hover:shadow-2xl transition-all rounded-[2rem]">
              <h3 className="text-3xl font-bold mb-1 text-zinc-900">Mercedes-Benz S-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">The Comfort Choice</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-500 font-medium">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Massage seats for long country drives</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Air suspension for a cloud-like journey</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500 font-medium">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Bespoke climate control for rear passengers</span>
                </div>
              </div>
              <img src={SClassImg} alt="S-Class" className="w-full h-[315px] object-cover object-bottom grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl ring-1 ring-zinc-100" />
            </div>
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* SEO Content Block */}
      <section className="py-24 bg-zinc-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-sans font-bold uppercase tracking-tight text-zinc-900 mb-10">{seoTitle}</h2>
          <div className="text-zinc-500 font-medium leading-relaxed text-sm space-y-6 mb-12">
            <p>{seoContent}</p>
          </div>
          <Link to="/services/private-tours" className="inline-flex items-center gap-2 text-gold hover:text-zinc-900 transition-colors uppercase tracking-widest text-[10px] font-bold border-b border-gold/30 pb-2">
            <span>View all Luxury Experiences</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">Ready to Start Your Journey?</h2>
          <Link to="/booking" className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            Reserve This Experience
          </Link>
        </div>
      </section>
    </div >
  );
};

export default TourLandingTemplate;
