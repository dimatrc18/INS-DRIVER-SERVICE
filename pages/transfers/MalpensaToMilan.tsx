import React from 'react';
import AirportLandingTemplate from '../../components/AirportLandingTemplate';
import HeroImg from '../../images/Airport_Transfers_Hero_Section.png'; // Using specific hero image

const MalpensaToMilan: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Malpensa to Milan Transfer",
    "description": "Direct luxury transfer from MXP to Milan city center.",
    "provider": { "@type": "LocalBusiness", "name": "Milan Luxury Transfer" },
    "offers": {
      "@type": "Offer",
      "price": "150", // Estimated starting price
      "priceCurrency": "EUR"
    }
  };

  return (
    <AirportLandingTemplate
      title="Malpensa to Milan City Center | Private Car Service"
      h1="Malpensa to Milan City Center: Your Direct Luxury Connection"
      heroText="Skip the train and shared shuttles. A private chauffeur offers door-to-door service with luggage assistance and total comfort."
      heroImage={HeroImg} // Using local image import
      breadcrumbLabel="MXP to City"
      faqs={[
        { q: "What's included in the price?", a: "Our rates are all-inclusive: professional driver, fuel, highway tolls, and city taxes (ZTL)." },
        { q: "Do I need to tip?", a: "Tipping in Italy is appreciated but completely optional and never expected." },
        { q: "Do you pick up from any hotel?", a: "Yes, we provide door-to-door service to all hotels, apartments, and private residences in Milan." },
        { q: "Can I request a child seat?", a: "Yes, premium ISOFIX child seats are available upon request during the booking process." }
      ]}
      seoTitle="Direct MXP to Milano Logistics"
      seoText="Whether you need a Malpensa to City Center Transfer for business or pleasure, our private driver service is the stress-free alternative to standard taxis. Enjoy the journey in a late-model Mercedes-Benz with Wi-Fi and bottled water."
      internalLinks={[
        { label: "Malpensa Airport Hub", path: "/airports/malpensa" },
        { label: "Linate Transfers", path: "/airports/linate" },
        { label: "Bergamo Chauffeur", path: "/airports/bergamo" },
        { label: "Linate to Hotel", path: "/transfers/linate-to-milan" }
      ]}
      structuredData={structuredData}
      testimonialQuote="Malpensa can be chaotic, but our chauffeur made it simple. Meet and greet was flawless, and the car was pristine."
      testimonialAuthor="Nair V., Tech Founder"
    />
  );
};

export default MalpensaToMilan;
