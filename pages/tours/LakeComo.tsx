import React from 'react';
import TourLandingTemplate from '../../components/TourLandingTemplate';
import HeroImg from '../../images/Lake_Como.jpg';
import ExperienceImg from '../../images/Lake_Como_2.jpg'; // Updated import

const LakeComo: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TourEvent", // Changed to TourEvent
    "name": "Lake Como Private Driver Service",
    "description": "Bespoke day trip to Bellagio, Varenna, and Villa Balbianello with a private chauffeur from Milan.",
    "duration": "PT8H",
    "offers": {
      "@type": "Offer",
      "price": "2800",
      "priceCurrency": "EUR"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Como historic center visit" },
        { "@type": "ListItem", "position": 2, "name": "Villa Carlotta in Tremezzo" },
        { "@type": "ListItem", "position": 3, "name": "Ferry to Bellagio" }
      ]
    }
  };

  return (
    <TourLandingTemplate
      tourName="Lake Como"
      h1="Lake Como Day Trip: Bellagio & Varenna"
      duration="8 Hours"
      heroImage={HeroImg} // Using local image import
      experienceImage={ExperienceImg}
      experienceText="The ultimate Italian postcard. Glide past Villa d’Este and George Clooney’s Villa Oleandra. We navigate the narrow lakeside roads so you can focus on the view."
      itinerary={[
        { time: "Morning", activity: "Pick-up from Milan. Guided exploration of Como historic center and lakeside promenade." },
        { time: "Mid-Day", activity: "Tremezzo visit. Explore the botanical wonders of Villa Carlotta before taking the ferry to Bellagio." },
        { time: "Afternoon", activity: "Leisure time in the 'Pearl of the Lake.' Driver meets you on the other side for the scenic return trip." }
      ]}
      whyPrivate="A private chauffeur is the only way to truly enjoy Lake Como's winding roads. Avoid the stress of parking in Bellagio (which is nearly impossible) and the crowded seasonal ferry queues. Our drivers coordinate your ferry transfers seamlessly."
      logisticsFocus="Avoid the crowded trains and impossible parking. Your driver drops you at the ferry terminal and waits, ensuring your transition between the water and the road is instantaneous."
      seoTitle="Private Chauffeur Milan to Lake Como"
      seoContent="Booking a Lake Como Private Driver Service is the gold standard for exploring Northern Italy's most famous body of water. Our bespoke itineraries ensure you see the hidden gems of Bellagio, Varenna, and Menaggio without the logistical headaches. Whether you're a serious collector or a casual enthusiast, we provide the perfect vantage point for the stunning alpine scenery. Experience the elegance of the 'Pearl of the Lake' with professional chauffeurs who prioritize your comfort and time."
      schemaData={schema}
      testimonialQuote="Our day trip to Lake Como was absolute perfection. The driver knew exactly when to catch the ferries and which villas were a must-see."
      testimonialAuthor="The Watanabe Family"
    />
  );
};

export default LakeComo;

