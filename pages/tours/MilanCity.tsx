import React from 'react';
import TourLandingTemplate from '../../components/TourLandingTemplate';
import HeroImg from '../../images/Milan_City.jpg';
import ExperienceImg from '../../images/Milan_City_2.jpg'; // Updated import

const MilanCity: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TourEvent", // Changed to TourEvent
    "name": "Milan City Private Sightseeing Tour",
    "description": "Comprehensive private chauffeur tour of Milan's major landmarks.",
    "duration": "PT4H",
    "offers": {
      "@type": "Offer",
      "price": "2200",
      "priceCurrency": "EUR"
    }
  };

  return (
    <TourLandingTemplate
      tourName="Milan City"
      h1="Best of Milan: Private City Tour"
      duration="4 Hours"
      heroImage={HeroImg} // Using local image import
      experienceImage={ExperienceImg}
      experienceText="From the Gothic spires of the Duomo to the modern skyline of Porta Nuova. See the city’s icons in half a day without walking miles or navigating the metro."
      itinerary={[
        { time: "Start", activity: "Pick-up from your hotel. Scenic drive to Sforza Castle and Sempione Park." },
        { time: "Mid-Tour", activity: "Santa Maria delle Grazie for the Last Supper exterior and the historic Brera District." },
        { time: "Conclusion", activity: "Duomo Square and Galleria Vittorio Emanuele II. Perfect drop-off for an afternoon of luxury shopping." }
      ]}
      whyPrivate="Milan's 'Area C' and limited traffic zones (ZTL) make city driving a nightmare for visitors. Our licensed NCC vehicles have full access to these restricted zones, dropping you right at the monument steps. Avoid the 'Milanese walk' and see more in less time."
      logisticsFocus="Access to Area C (Congestion Charge Zone) is included. Hop-on, hop-off service right in front of monuments, bypassing the need for long walks between historical sites."
      seoTitle="Private Milan Sightseeing Chauffeur"
      seoContent="Experience the fashion capital like a VIP with our Milan City Sightseeing Chauffeur service. From the iconic Duomo to the vibrant Brera district, our professional drivers provide a comfortable and efficient way to see all the major landmarks in a single morning or afternoon. Perfect for cruise passengers with limited time or travelers who prefer private luxury over public transport. Our local drivers offer insights into the city's history and recommendations for the best boutiques and restaurants, ensuring your Milanese experience is truly memorable."
      schemaData={schema}
      testimonialQuote="A fantastic way to see the city. We covered so much ground without once feeling rushed. The car was immaculate."
      testimonialAuthor="Miller J., History Professor"
    />
  );
};

export default MilanCity;
