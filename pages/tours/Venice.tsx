
import React from 'react';
import TourLandingTemplate from '../../components/TourLandingTemplate';
import HeroImg from '../../images/Venice.avif';
import ExperienceImg from '../../images/Venice_2.jpg'; // Updated import

const Venice: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TourEvent", // Standardized to TourEvent
    "name": "Venice Day Trip: Private Chauffeur from Milan",
    "description": "Premium 12-14 hour private day trip from Milan to Venice with a professional chauffeur.",
    "duration": "PT14H",
    "offers": {
      "@type": "Offer",
      "price": "3200",
      "priceCurrency": "EUR"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Pick-up from Milan" },
        { "@type": "ListItem", "position": 2, "name": "Arrival at Venice Piazzale Roma" },
        { "@type": "ListItem", "position": 3, "name": "Explore Venice City Center" },
        { "@type": "ListItem", "position": 4, "name": "Return to Milan" }
      ]
    }
  };

  return (
    <TourLandingTemplate
      tourName="Venice"
      h1="Venice Day Trip: Private Chauffeur from Milan"
      duration="12-14 Hours"
      heroImage={HeroImg} // Using local image import
      experienceImage={ExperienceImg}
      experienceText="Venice is one of the world's most extraordinary cities—and it's just 3 hours from Milan. Skip the crowded trains and arrive refreshed at Piazzale Roma, the gateway to the canals. Your driver waits while you explore, ready for the return journey whenever you choose."
      itinerary={[
        { time: "8:00 AM", activity: "Pick-up from your Milan hotel or residence." },
        { time: "11:00 AM", activity: "Arrival at Piazzale Roma (the vehicle entry point). Water taxi or walk to San Marco." },
        { time: "11:30 AM - 6:00 PM", activity: "Explore Venice: St. Mark's Basilica, Rialto Bridge, gondola ride, Aperol Spritz at a canal-side café." },
        { time: "6:00 PM", activity: "Return to Piazzale Roma." },
        { time: "9:00 PM", activity: "Arrive back in Milan (rest or work in the car during the ride)." }
      ]}
      whyPrivate="Stay longer if you're captivated by the sunset, or leave early if the crowds are too much. You control the clock. Direct pick-up from your Milan address means no dragging luggage through Centrale station or regional train platforms. Use the 6-hour total drive time to sleep, work, or simply relax with climate control and Wi-Fi in an unmarked luxury cabin."
      logisticsFocus="Venice has no car access beyond Piazzale Roma. We drop you at the main arrival point (same as taxis and buses), where you can catch a vaporetto (water bus) or private water taxi to your first destination. Your driver remains on standby for your return."
      seoTitle="Private Transfer Milan to Venice Day Trip"
      seoContent="A private Venice day trip from Milan is the most comfortable way to experience the floating city without the stress of train connections or rigid tour schedules. Our professional chauffeurs provide a seamless door-to-door experience, allowing you to maximize your time exploring Piazza San Marco, the Doge's Palace, and the Rialto Market."
      schemaData={schema}
      testimonialQuote="A long day made easy. The V-Class was incredibly comfortable for the 3-hour drive each way. Venice was breathtaking!"
      testimonialAuthor="Ivanov A., Travel Photographer"
    />
  );
};

export default Venice;
