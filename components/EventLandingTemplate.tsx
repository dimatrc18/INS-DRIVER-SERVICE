import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ReviewsMarquee from './ReviewsMarquee';
import { LocalizedString } from '../types';
import { useLocalePath } from '../hooks/useLocalePath';

// --- IMPORT FLEET IMAGES DIRECTLY ---
// Make sure these match your filenames exactly!
const sClassEventImg = import.meta.env.BASE_URL + 'images/S_Class_On_Event.webp';
const vClassEventImg = import.meta.env.BASE_URL + 'images/V_Class_On_Event.webp';

interface FleetFocus {
  model: string;
  description: string | LocalizedString;
}

interface EventLandingProps {
  eventName: string | LocalizedString;
  h1: string | LocalizedString;
  heroText: string | LocalizedString;
  heroImage: string; // Passed from parent (e.g., Major_Events_Hero.png)
  dates: string | LocalizedString;
  logisticsText: string | LocalizedString;
  primaryFleet: FleetFocus;
  secondaryFleet: FleetFocus;
  stats: { label: string | LocalizedString; value: string | LocalizedString }[];
  seoTitle: string | LocalizedString;
  seoContent: string | LocalizedString;
  testimonialQuote?: string | LocalizedString;
  testimonialAuthor?: string;
  heroImageObjectPosition?: string; // Optional prop for image positioning
}

const EventLandingTemplate: React.FC<EventLandingProps> = ({
  eventName, h1, heroText, heroImage, dates, logisticsText, primaryFleet, secondaryFleet, stats, seoTitle, seoContent,
  testimonialQuote, testimonialAuthor, heroImageObjectPosition = 'object-center'
}) => {
  const { t, i18n } = useTranslation('services');
  const localePath = useLocalePath();

  const getLoc = (val: string | LocalizedString | undefined) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[i18n.language as 'en' | 'it'] || val['en'];
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={getLoc(eventName)}
            className={`w-full h-full object-cover opacity-70 grayscale-[0.2] ${heroImageObjectPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mt-[70px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-4 tracking-tighter text-zinc-900">
              {getLoc(h1)}
            </h1>
            <p className="text-zinc-900 uppercase tracking-[0.3em] text-sm font-bold mb-8 italic">{getLoc(dates)}</p>
            <p className="text-xl md:text-2xl text-zinc-500 mb-10 font-medium leading-relaxed">
              {getLoc(heroText)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg text-center">
                {t('eventsPage.ctaHero', 'Book Event Transport')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-8 text-zinc-900">{t('eventsPage.whyDriver', 'Why a Private Driver is Essential')}</h2>
            <div className="space-y-6 text-lg text-zinc-500 font-medium leading-relaxed">
              <p>{getLoc(logisticsText)}</p>
              <div className="flex items-start gap-4 p-6 bg-zinc-50 border-l-2 border-gold italic rounded-r-2xl">
                <Info size={24} className="text-gold shrink-0 mt-1" />
                <p>"During major events in Milan, parking and traffic congestion make self-driving impossible. Our NCC licensed vehicles access restricted ZTL zones and VIP drop-off points."</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-zinc-100 p-10 shadow-sm rounded-[2rem]">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-10 text-center text-zinc-900">{t('eventsPage.statsTitle', 'Event Service Stats')}</h3>
            <div className="space-y-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex justify-between border-b border-zinc-100 pb-4">
                  <span className="text-zinc-400 uppercase text-[10px] tracking-widest font-bold">{getLoc(stat.label)}</span>
                  <span className="font-bold text-zinc-900">{getLoc(stat.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Fleet Focus */}
      <section className="py-32 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold tracking-tighter mb-4 uppercase">{t('eventsPage.fleetFocus', 'The Perfect Fleet Focus')}</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Primary Choice - Usually S-Class for Events */}
            <div className="group border border-zinc-100 p-10 bg-white hover:shadow-2xl transition-all rounded-[2rem]">
              <span className="bg-gold text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block rounded-full">{t('eventsPage.primaryChoice', 'Primary Choice')}</span>
              <h3 className="text-3xl font-bold mb-1 text-zinc-900">{primaryFleet.model}</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 italic">{getLoc(primaryFleet.description)}</p>

              {/* IMAGE: S-Class Event Shot */}
              <img
                src={sClassEventImg}
                alt={primaryFleet.model}
                className="w-full h-64 object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl ring-1 ring-zinc-100"
              />

              <Link to={localePath('/booking')} className="block text-center bg-zinc-900 text-white py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all shadow-md">
                {t('eventsPage.bookVehicle', 'Book This Vehicle')}
              </Link>
            </div>

            {/* Secondary Choice - Usually V-Class for Entourage */}
            <div className="group border border-zinc-100 p-10 bg-white hover:shadow-2xl transition-all rounded-[2rem]">
              <span className="bg-zinc-100 text-zinc-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block rounded-full">{t('eventsPage.secondaryChoice', 'Secondary Choice')}</span>
              <h3 className="text-3xl font-bold mb-1 text-zinc-900">{secondaryFleet.model}</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 italic">{getLoc(secondaryFleet.description)}</p>

              {/* IMAGE: V-Class Event Shot */}
              <img
                src={vClassEventImg}
                alt={secondaryFleet.model}
                className="w-full h-64 object-cover mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 rounded-2xl ring-1 ring-zinc-100"
              />

              <Link to={localePath('/booking')} className="block text-center border border-zinc-200 text-zinc-900 py-4 rounded-full font-bold tracking-wide hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
                {t('eventsPage.bookVehicle', 'Book This Vehicle')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsMarquee />

      {/* SEO Block */}
      <section className="py-24 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-zinc-900 mb-8">{getLoc(seoTitle)}</h2>
          <div className="text-zinc-500 font-medium leading-relaxed text-sm space-y-6">
            <p>{getLoc(seoContent)}</p>
          </div>
          <div className="mt-12">
            <Link to={localePath('/services/major-events')} className="inline-flex items-center gap-2 text-gold hover:text-zinc-900 transition-colors uppercase tracking-widest text-[10px] font-bold border-b border-gold/30 pb-2">
              <span>{t('eventsPage.returnToEvents', 'Return to Major Events')}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8">{t('eventsPage.readyHighlights', 'Ready for the Highlights?')}</h2>
          <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            {t('eventsPage.ctaHero', 'Book Event Transport')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventLandingTemplate;
