import React from 'react';
import AirportLandingTemplate from '../../components/AirportLandingTemplate';
import commonHeroImg from '../../images/Airport_Transfers_Hero_Section.png';

const Malpensa: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Milan Malpensa Car Service",
    "description": "Luxury chauffeur service from Milan Malpensa Airport (MXP).",
    "provider": { "@type": "LocalBusiness", "name": "Milan Luxury Transfer" }
  };

  return (
    <AirportLandingTemplate
      title="Milan Malpensa Car Service | Private Transfer MXP"
      h1="Premium Chauffeur Service from Milan Malpensa (MXP)"
      heroText="Milan's main international gateway. We provide meet & greet at arrivals, 60-minute complimentary wait time, and seamless transfers to the city or beyond."
      heroImage={commonHeroImg}
      breadcrumbLabel="Malpensa MXP"
      faqs={[
        { q: "How far is Malpensa from Milan center?", a: "The distance is approximately 50km, typically taking 45-60 minutes depending on traffic conditions." },
        { q: "Do you wait if my flight is delayed?", a: "Yes, our chauffeurs track all flights in real-time and will be waiting in the arrivals hall exactly when you land." },
        { q: "Can you drop me at Lake Como from Malpensa?", a: "Absolutely. We offer direct transfers from MXP to all towns on Lake Como, including Bellagio, Como city, and Varenna." },
        { q: "Where is the meeting point?", a: "Your driver will be waiting in the arrivals hall, right after baggage claim, holding a personalized name sign." }
      ]}
      seoTitle="Professional MXP Chauffeur Services"
      seoText="Experience the pinnacle of Italian hospitality with our luxury airport transfers in Milan. Arriving at a busy international hub can be overwhelming, but our Milan Malpensa Car Service ensures your journey continues with grace and efficiency. Whether you need a Malpensa to City Center Transfer or a ride to the lakes, we are your premier choice."
      internalLinks={[
        { label: "Linate Transfers", path: "/airports/linate" },
        { label: "Bergamo Chauffeur", path: "/airports/bergamo" },
        { label: "MXP to City Center", path: "/transfers/malpensa-to-milan" },
        { label: "Linate to Hotel", path: "/transfers/linate-to-milan" }
      ]}
      structuredData={structuredData}
      testimonialQuote="Malpensa can be chaotic, but our chauffeur made it simple. Meet and greet was flawless, and the car was pristine."
      testimonialAuthor="Gupta S., International Consultant"
    />
  );
};

export default Malpensa;

