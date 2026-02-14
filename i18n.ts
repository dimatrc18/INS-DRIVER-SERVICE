import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enBooking from './locales/en/booking.json';
import enFleet from './locales/en/fleet.json';
import enServices from './locales/en/services.json';
import enDestinations from './locales/en/destinations.json';
import enFaq from './locales/en/faq.json';
import enPrivacy from './locales/en/privacy.json';
import enTerms from './locales/en/terms.json';
import enReviews from './locales/en/reviews.json';

const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        booking: enBooking,
        fleet: enFleet,
        services: enServices,
        destinations: enDestinations,
        faq: enFaq,
        privacy: enPrivacy,
        terms: enTerms,
        reviews: enReviews,
      },
    },
    lng: 'en', // Force English
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
