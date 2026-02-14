import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, UserCheck, ChevronRight, Info, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FLEET } from '../constants';
import { LocalizedString } from '../types';
import HeroSocialProof from './HeroSocialProof';
import ReviewsMarquee from './ReviewsMarquee';
import SEO from './SEO';
import { useLocalePath } from '../hooks/useLocalePath';

// --- IMAGE IMPORTS ---
const heroBg = import.meta.env.BASE_URL + 'images/Airport_Transfers_Hero_Section.webp';
const sClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_S_Class.webp';
const vClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_V_Class.webp';
const eClassImg = import.meta.env.BASE_URL + 'images/Airport_Fleet_E_Class_2.webp';

interface FAQ {
  q: string | LocalizedString;
  a: string | LocalizedString;
}

interface InternalLink {
  label: string | LocalizedString;
  path: string;
}

interface ArrivalCard {
  title: string | LocalizedString;
  subtitle: string | LocalizedString;
  description: string | LocalizedString;
  image: string;
  link: string;
}

interface AirportLandingProps {
  title: string | LocalizedString;
  h1: string | LocalizedString;
  heroText: string | LocalizedString;
  heroImage: string;
  breadcrumbLabel: string;
  faqs: FAQ[];
  seoTitle: string | LocalizedString;
  seoText: string | LocalizedString;
  internalLinks: InternalLink[];
  structuredData: any;
  testimonialQuote?: string | LocalizedString;
  testimonialAuthor?: string;
  arrivalCards?: ArrivalCard[];
}

const AirportLandingTemplate: React.FC<AirportLandingProps> = ({
  title, h1, heroText, heroImage, breadcrumbLabel, faqs, seoTitle, seoText, internalLinks, structuredData,
  testimonialQuote, testimonialAuthor, arrivalCards
}) => {
  const { t, i18n } = useTranslation('services');
  const localePath = useLocalePath();

  const getLoc = (val: string | LocalizedString | undefined) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[i18n.language as 'en' | 'it'] || val['en'];
  };

  // --- IMAGE MAPPING FUNCTION ---
  const getCarImage = (carId: string) => {
    const id = carId.toLowerCase();
    if (id.includes('s-class') || id.includes('mercedes-s')) return sClassImg;
    if (id.includes('v-class') || id.includes('mercedes-v')) return vClassImg;
    if (id.includes('e-class') || id.includes('mercedes-e')) return eClassImg;
    return sClassImg;
  };

  return (
    <div className="bg-white text-zinc-900 selection:bg-gold selection:text-zinc-900">
      <SEO
        title={getLoc(title)}
        description={getLoc(seoText).substring(0, 160)}
        schema={JSON.stringify(structuredData)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={getLoc(h1)}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-[1.1] mb-8 tracking-tight text-zinc-900">
              {getLoc(h1)}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 mb-12 font-medium leading-relaxed max-w-2xl">
              {getLoc(heroText)}
            </p>
            <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg">
              {t('airportPage.hero.ctaQuote', 'Book Your Transfer Now')}
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes subtleZoom {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.1); }
          }
        `}</style>
      </section>

      {/* Service Details Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-zinc-100 bg-white shadow-sm rounded-[2rem] group hover:border-gold/20 transition-all duration-500">
            <Clock className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">{t('airportPage.features.tracking.title')}</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{t('airportPage.features.tracking.desc')}</p>
          </div>
          <div className="p-8 border border-zinc-100 bg-white shadow-sm rounded-[2rem] group hover:border-gold/20 transition-all duration-500">
            <Shield className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">{t('airportPage.features.pricing.title')}</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{t('airportPage.features.pricing.desc')}</p>
          </div>
          <div className="p-8 border border-zinc-100 bg-white shadow-sm rounded-[2rem] group hover:border-gold/20 transition-all duration-500">
            <UserCheck className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold tracking-tight mb-4 text-zinc-900 uppercase">{t('airportPage.features.chauffeurs.title')}</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{t('airportPage.features.chauffeurs.desc')}</p>
          </div>
        </div>
      </section>

      {/* Executive Fleet Options */}
      <section className="py-32 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 uppercase">{t('airportPage.fleetOptions.title')}</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-gold uppercase tracking-widest text-[10px] font-bold italic">{t('airportPage.fleetOptions.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.map((car) => (
              <div key={car.id} className="group border border-zinc-100 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col bg-white rounded-[2rem]">
                <div className="overflow-hidden mb-10 h-64 bg-zinc-50 relative flex items-center justify-center rounded-2xl ring-1 ring-zinc-100">
                  <img
                    src={getCarImage(car.id)}
                    alt={`${car.model} luxury car`}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1 tracking-tight text-zinc-900 uppercase">{car.model}</h3>
                <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">{(car.category as any)[i18n.language] || car.category.en}</p>
                <div className="space-y-4 mb-10 flex-grow">
                  {car.features.map((f: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50"></div>
                      {f[i18n.language] || f.en}
                    </div>
                  ))}
                </div>
                <Link to={localePath('/booking')} className="block text-center bg-zinc-900 text-white py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-md">
                  {t('airportPage.inquireNow')}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center px-4">
            <p className="text-xs text-zinc-400 italic font-light">
              <Info size={14} className="inline-block mr-2 align-text-bottom text-gold" />
              {t('airportPage.winterReadiness')}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Marquee Section */}
      <ReviewsMarquee />

      {/* Arrival Next Steps Section */}
      {arrivalCards && (
        <section className="py-32 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Column 1: Introduction & CTA */}
              <div className="flex flex-col justify-center space-y-8 lg:pr-12">
                <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 leading-tight">
                  {t('airportPage.dayService.titleLine1')} <br />
                  <span className="text-zinc-400">{t('airportPage.dayService.titleLine2')}</span>
                </h2>
                <p className="text-lg text-zinc-600 font-light leading-relaxed">
                  {t('airportPage.dayService.desc')}
                </p>
                <div>
                  <Link to={localePath('/services/private-tours')} className="inline-flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-black hover:border-black transition-all">
                    {t('airportPage.dayService.viewTours')} <ChevronDown size={14} className="-rotate-90" />
                  </Link>
                </div>
              </div>

              {/* Column 2: Specific Card 1 */}
              {arrivalCards[0] && (
                <Link to={localePath(arrivalCards[0].link)} className="group relative h-[500px] overflow-hidden rounded-[2rem] shadow-lg">
                  <img
                    src={arrivalCards[0].image}
                    alt={getLoc(arrivalCards[0].title)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">{getLoc(arrivalCards[0].subtitle)}</span>
                    <h3 className="text-white font-sans font-bold text-2xl mb-2">{getLoc(arrivalCards[0].title)}</h3>
                    <p className="text-zinc-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {getLoc(arrivalCards[0].description)}
                    </p>
                  </div>
                </Link>
              )}

              {/* Column 3: Specific Card 2 */}
              {arrivalCards[1] && (
                <Link to={localePath(arrivalCards[1].link)} className="group relative h-[500px] overflow-hidden rounded-[2rem] shadow-lg">
                  <img
                    src={arrivalCards[1].image}
                    alt={getLoc(arrivalCards[1].title)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">{getLoc(arrivalCards[1].subtitle)}</span>
                    <h3 className="text-white font-sans font-bold text-2xl mb-2">{getLoc(arrivalCards[1].title)}</h3>
                    <p className="text-zinc-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {getLoc(arrivalCards[1].description)}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">{t('airportPage.faq.title')}</h2>
            <div className="w-12 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-zinc-100 open:ring-1 open:ring-gold/20">
                <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-zinc-900 select-none">
                  {getLoc(faq.q)}
                  <ChevronDown size={16} className="text-zinc-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
                  {getLoc(faq.a)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-24 bg-zinc-50/50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-zinc-400 mb-10 text-center">{getLoc(seoTitle)}</h2>
          <div className="text-zinc-500 font-medium leading-relaxed text-sm space-y-6">
            <p>{getLoc(seoText)}</p>
            <div className="pt-12 mt-12 border-t border-zinc-100">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">{t('airportPage.relatedResources')}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <Link to={localePath('/services/airport-transfers')} className="text-gold hover:text-zinc-900 transition-colors text-xs font-bold underline decoration-gold/30 underline-offset-4">{t('airportPage.mainHub')}</Link>
                {internalLinks.map((link, idx) => (
                  <Link key={idx} to={localePath(link.path)} className="text-zinc-400 hover:text-gold transition-colors text-xs font-bold underline decoration-zinc-200 underline-offset-4">{getLoc(link.label)}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 text-white text-center relative rounded-[4rem] mx-4 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gold opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight mb-8 uppercase">{t('airportPage.ctaBottom.title')}</h2>
          <Link to={localePath('/booking')} className="inline-block bg-white text-zinc-900 px-12 py-4 rounded-full font-bold tracking-wide hover:bg-gold transition-all shadow-xl">
            {t('airportPage.hero.ctaQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AirportLandingTemplate;
