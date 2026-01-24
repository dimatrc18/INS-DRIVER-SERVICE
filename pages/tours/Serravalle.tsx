import React from 'react';
import TourLandingTemplate from '../../components/TourLandingTemplate';
import HeroImg from '../../images/Serrevalle.jpg';
import ExperienceImg from '../../images/Serravalle_2.png'; // Updated import

const Serravalle: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service", // Kept as Service as it fits well for shopping transfers, but added offers
    "name": "Serravalle Outlet Shopping Transfer",
    "serviceType": "Private Shopping Tour",
    "description": "VIP shopping experience from Milan to Europe's largest designer outlet.",
    "offers": {
      "@type": "Offer",
      "price": "1800",
      "priceCurrency": "EUR"
    }
  };

  return (
    <TourLandingTemplate
      tourName="Serravalle Outlet"
      h1="Serravalle Designer Outlet VIP Shopping Day"
      duration="6-8 Hours"
      heroImage={HeroImg} // Using local image import
      experienceImage={ExperienceImg}
      experienceText="Europe’s largest designer outlet. Shop 300+ luxury brands (Gucci, Saint Laurent, Prada) with up to 70% off. Arrive in style and leave with your hands free."
      itinerary={[
        { time: "9:30 AM", activity: "Arrival at Serravalle & Welcome Coffee. Immediate access to the luxury designer wing." },
        { time: "1:00 PM", activity: "Gourmet Lunch. Reserved seating at a premier bistro to recharge for more shopping." },
        { time: "Afternoon", activity: "Hands-free shopping. Store your bags in the car at any time. Private driver handles all heavy lifting." }
      ]}
      whyPrivate="Shopping at Serravalle is a marathon, not a sprint. Lugging dozens of bags through the outlet and onto public shuttles is exhausting. With a private V-Class, you have a moving locker that follows you, allowing you to focus entirely on the season's best deals."
      logisticsFocus="Shopping is tiring; travel shouldn't be. Use the V-Class trunk as your personal locker throughout the day, ensuring your luxury purchases are secure and out of sight while you explore more stores."
      seoTitle="Milan to Serravalle Outlet Luxury Chauffeur"
      seoContent="Our Serravalle Outlet Shopping Transfer is designed for fashion connoisseurs who demand convenience. Avoid the multi-stop shuttle buses and enjoy a direct, private transfer in a premium Mercedes-Benz. With enough trunk space for even the most ambitious shopping hauls, we are the preferred choice for international visitors seeking the best of Italian and international fashion at outlet prices. From Malpensa or downtown Milan, we provide the most efficient way to shop the brands you love."
      schemaData={schema}
      testimonialQuote="Having a V-Class on standby for our shopping day was the best decision. No bags to carry, just pure shopping bliss."
      testimonialAuthor="Zhang L., Personal Shopper"
    />
  );
};

export default Serravalle;

