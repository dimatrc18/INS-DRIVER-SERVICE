import React from 'react';
import AirportLandingTemplate from '../../components/AirportLandingTemplate';
import commonHeroImg from '../../images/Airport_Transfers_Hero_Section.png';

const Linate: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Linate Executive Transfer",
    "description": "Executive car service from Milan Linate Airport (LIN).",
    "provider": { "@type": "LocalBusiness", "name": "Milan Luxury Transfer" }
  };

  return (
    <AirportLandingTemplate
      title="Linate Airport Transfer | Executive Car Service LIN"
      h1="Executive Transfer from Milan Linate Airport (LIN)"
      heroText="The business traveler's choice. Just 7km from the city, Linate offers the fastest route to downtown Milan, Porta Venezia, and Central Station."
      heroImage={commonHeroImg}
      breadcrumbLabel="Linate LIN"
      faqs={[
        { q: "Is Linate closer than Malpensa?", a: "Yes, Linate is significantly closer to the city center, reachable in about 20 minutes." },
        { q: "Do you accept credit cards?", a: "Yes, we accept all major credit cards. You can pay during booking or directly with the driver." },
        { q: "Do you offer meet & greet at Linate?", a: "Yes, our chauffeur will be waiting for you at the arrivals exit with a sign showing your name." },
        { q: "Can I book a transfer to Milan Fashion Week venues?", a: "Absolutely, we specialize in corporate and event logistics during peak Milanese events." }
      ]}
      seoTitle="Elite Linate Airport Connections"
      seoText="For swift city access, choose our Linate Executive Transfer to reach the Duomo or your hotel in record time. Our NCC Milan airport services provide absolute reliability, discretion, and comfort, ensuring your logistics are handled by professionals."
      internalLinks={[
        { label: "Malpensa Service", path: "/airports/malpensa" },
        { label: "Bergamo Chauffeur", path: "/airports/bergamo" },
        { label: "MXP to City Center", path: "/transfers/malpensa-to-milan" },
        { label: "Linate to Hotel", path: "/transfers/linate-to-milan" }
      ]}
      structuredData={structuredData}
      testimonialQuote="Arrived at my hotel in minutes. The driver was waiting at the gate, perfectly dressed and ready to help with my bags."
      testimonialAuthor="Kaufman E., Art Dealer"
    />
  );
};

export default Linate;
