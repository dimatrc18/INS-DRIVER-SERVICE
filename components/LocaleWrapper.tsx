import React, { useEffect } from 'react';
import { useParams, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LocaleWrapper: React.FC = () => {
  const { locale } = useParams<{ locale: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Sync i18n language with URL param
    if (locale && (locale === 'en' || locale === 'it' || locale === 'ru')) {
      if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
      }
    }
  }, [locale, i18n]);

  // Validate locale
  if (!locale || (locale !== 'en' && locale !== 'it' && locale !== 'ru')) {
    // Redirect to default locale (en) preserving the path if possible
    // If we are at root /, redirect to /en
    // If we are at /booking, redirect to /en/booking (but Router might not match /booking if nested)
    // Here we assume this component is rendered on /:locale/*
    // If the locale param is invalid (e.g. /fr/...), redirect to /en
    return <Navigate to={`/en`} replace />;
  }

  return <Outlet />;
};

export default LocaleWrapper;
