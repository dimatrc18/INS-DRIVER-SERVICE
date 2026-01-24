import React from 'react';
import TourLandingTemplate from '../../components/TourLandingTemplate';
import HeroImg from '../../images/Franciacorta_Wine_Tour.avif';
import ExperienceImg from '../../images/Franciacorta_Wine_Tour_2.jpg'; // Updated import

const Franciacorta: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TourEvent", // Changed to TourEvent for better schema compliance
    "name": "Franciacorta Wine Tour from Milan",
    "description": "Private vineyard tour and wine tasting in the Franciacorta region.",
    "duration": "PT7H",
    "offers": {
      "@type": "Offer",
      "price": "2400",
      "priceCurrency": "EUR"
    }
  };

  return (
    <TourLandingTemplate
      tourName="Franciacorta Wine"
      h1="Franciacorta Wine Tasting & Vineyard Tour"
      duration="7 Hours"
      heroImage={HeroImg} // Using the local image import
      experienceImage={ExperienceImg}
      experienceText="Discover the 'Champagne of Italy.' Rolling hills, historic cellars, and world-class sparkling wine just an hour from Milan. Experience the terroir in a way only a private tour can offer."
      itinerary={[
        { time: "10:30 AM", activity: "Tour & Tasting at a historic estate like Berlucchi or Bellavista. Learn the traditional method of 'bollicine'." },
        { time: "1:00 PM", activity: "Gourmet lunch overlooking the vines. Wine pairings featuring the local Riserva selections." },
        { time: "3:30 PM", activity: "Visit to nearby Lake Iseo or a small boutique winery before heading back to Milan." }
      ]}
      whyPrivate="Wine tasting is about indulgence, and you cannot indulge if you have to drive. Our professional chauffeurs allow your entire group to participate in the tastings without concern. Furthermore, we know the narrow vineyard paths that are inaccessible to large tour buses."
      logisticsFocus="Enjoy the wine tastings responsibly. Your chauffeur ensures a safe and comfortable return to Milan, allowing you to relax in the massaging seats of an S-Class after a day in the vineyards."
      seoTitle="Franciacorta Wine Tasting Tour Milan Chauffeur"
      seoContent="Book a Franciacorta Wine Tour from Milan to discover Italy's most prestigious sparkling wine region. Located in the heart of Lombardy, Franciacorta offers stunning landscape views and some of the world's most awarded wineries. Our private transfers provide the ultimate luxury experience, including hotel pick-up, luggage space for your purchases, and an expert driver who knows the region's best hidden cellars. Whether you're a serious collector or a casual enthusiast, we provide the perfect bridge between the city and the vines."
      schemaData={schema}
      testimonialQuote="Indulging in Franciacorta's finest was so much better knowing we didn't have to drive. The S-Class was the perfect way to end the day."
      testimonialAuthor="Chloé M., Sommelier"
    />
  );
};

export default Franciacorta;

