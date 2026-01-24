import React from 'react';
import AirportLandingTemplate from '../../components/AirportLandingTemplate';
import HeroImg from '../../images/Airport_Fleet_E_Class.png'; // Using Fleet image for transfer service

const LinateToMilan: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Linate to Hotel Transfer",
    "description": "Luxury chauffeur ride from Linate Airport to any Milan hotel.",
    "provider": { "@type": "LocalBusiness", "name": "Milan Luxury Transfer" },
    "offers": {
      "@type": "Offer",
      "price": "120", // Estimated starting price, adjust if needed
      "priceCurrency": "EUR"
    }
  };

  return (
    <AirportLandingTemplate
      title="Linate to Hotel Transfer | Private Chauffeur Milan"
      h1="Linate to Hotel: Stress-Free Arrival in Milan"
      heroText="Land at LIN and arrive at your hotel refreshed. We handle the luggage, the traffic, and the navigation so you can focus on your trip."
      heroImage={HeroImg} // Using local image import
      breadcrumbLabel="Linate to Hotel"
      faqs={[
        { q: "Can you drop me at a specific hotel address?", a: "Yes, we provide direct transport to any address within the greater Milan metropolitan area." },
        { q: "How do I find my driver?", a: "Your chauffeur will be waiting at the designated meet-and-greet area in Linate arrivals with a personalized name sign." },
        { q: "How long is the ride to the Duomo?", a: "From Linate, the drive to the Duomo area typically takes about 15-25 minutes." },
        { q: "Is the price fixed for city hotels?", a: "Yes, we offer fixed rates for all transfers within the city limits, ensuring no surprises due to traffic." }
      ]}
      seoTitle="LIN to Milano Hotel Transfers"
      seoText="Land at LIN and choose a direct Linate Airport to Hotel Ride for the ultimate arrival experience. Our English-speaking chauffeurs and premium fleet make us the leading choice for fashion week and corporate travelers."
      internalLinks={[
        { label: "Malpensa Service", path: "/airports/malpensa" },
        { label: "Linate Airport Hub", path: "/airports/linate" },
        { label: "Bergamo Chauffeur", path: "/airports/bergamo" },
        { label: "MXP to City Center", path: "/transfers/malpensa-to-milan" }
      ]}
      structuredData={structuredData}
      testimonialQuote="Arrived at my hotel in minutes. The driver was waiting at the gate, perfectly dressed and ready to help with my bags."
      testimonialAuthor="Stein H., Financial Analyst"
    />
  );
};

export default LinateToMilan;
