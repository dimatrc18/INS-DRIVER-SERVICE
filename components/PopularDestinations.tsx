import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocalePath } from '../hooks/useLocalePath';
import { SKI_RESORTS } from '../constants';

const PopularDestinations: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const localePath = useLocalePath();

  // Helper for localized content
  const getLoc = (val: any) => {
    if (typeof val === 'string') return val;
    return val['en'] || val[i18n.language] || '';
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 tracking-tight mb-4">
            {t('popularDestinations.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            {t('popularDestinations.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SKI_RESORTS.map((destination) => (
            <Link
              key={destination.slug}
              to={localePath(`/destinations/${destination.slug}`)}
              className="group relative overflow-hidden rounded-2xl h-72 block"
            >
              <img
                src={destination.heroImage}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                  {destination.name}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-white/80">{getLoc(destination.sellingPoint).substring(0, 60)}...</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
          <p className="text-zinc-600 text-sm text-center leading-relaxed">
            <strong className="text-zinc-900">{t('popularDestinations.notLimited')}</strong> {t('popularDestinations.notLimitedDesc')}
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            to={localePath('/booking')}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all shadow-lg"
          >
            {t('cta.bookNow')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
