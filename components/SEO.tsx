
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  schema?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, keywords, schema }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const ogLocale = lang === 'it' ? 'it_IT' : lang === 'ru' ? 'ru_RU' : 'en_GB';
  const siteTitle = "Milan Luxury Transfer | Private Chauffeur Milano Cortina 2026";
  const fullTitle = title === siteTitle ? title : `${title} | Milan Luxury Transfer`;
  const baseUrl = 'https://milanluxurytransfer.com';

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Hreflang alternates */}
      {canonical && <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${canonical}`} />}
      {canonical && <link rel="alternate" hrefLang="it" href={`${baseUrl}/it${canonical}`} />}
      {canonical && <link rel="alternate" hrefLang="ru" href={`${baseUrl}/ru${canonical}`} />}
      {canonical && <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${canonical}`} />}

      {/* Canonical */}
      {canonical && <link rel="canonical" href={`${baseUrl}/${lang}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Milan Luxury Transfer" />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
