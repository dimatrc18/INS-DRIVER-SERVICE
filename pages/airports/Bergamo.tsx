
import React from 'react';
import AirportLandingTemplate from '../../components/AirportLandingTemplate';
import commonHeroImg from '../../images/Airport_Transfers_Hero_Section.png';

const Bergamo: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bergamo Airport Chauffeur",
    "description": "Private chauffeur service from Bergamo Orio al Serio (BGY).",
    "provider": { "@type": "LocalBusiness", "name": "Milan Luxury Transfer" }
  };

  return (
    <AirportLandingTemplate
      title="Bergamo Airport Transfer | Private Driver BGY to Milan"
      h1="Private Chauffeur Service from Bergamo Airport (BGY)"
      heroText="Bergamo serves as Milan's secondary hub and the gateway to Northern Italy. Ideal for travelers heading to the Alps or Lakes."
      heroImage={commonHeroImg}
      breadcrumbLabel="Bergamo BGY"
      faqs={[
        { q: "How long to Milan from Bergamo?", a: "The drive typically takes about 50-60 minutes depending on your specific destination in Milan." },
        { q: "Can you take me to ski resorts from BGY?", a: "Yes, we provide direct mountain transfers to Livigno, Cortina, Bormio, and St. Moritz." },
        { q: "Do you service the private jet terminal?", a: "Yes, we regularly provide pickups from the executive and private aviation terminals at Orio al Serio." },
        { q: "What vehicles are available for large groups?", a: "Our Mercedes V-Class is perfect for groups up to 7 passengers with ample luggage space." }
      ]}
      seoTitle="Bergamo BGY Private Logistics"
      seoText="Our Bergamo Orio al Serio Chauffeur service is the preferred choice for those landing at the private jet hub or heading to the Alpine foothills. We provide seamless connections to Lake Garda, Brescia, and all of Lombardy."
      internalLinks={[
        { label: "Malpensa Service", path: "/airports/malpensa" },
        { label: "Linate Transfers", path: "/airports/linate" },
        { label: "MXP to City Center", path: "/transfers/malpensa-to-milan" },
        { label: "Linate to Hotel", path: "/transfers/linate-to-milan" }
      ]}
      structuredData={structuredData}
      testimonialQuote="Seamless transfer from Orio al Serio. The driver was waiting exactly where promised, and the luggage assistance was a lifesaver."
      testimonialAuthor="Ouedraogo T., Regional Director"
    />
  );
};

export default Bergamo;

