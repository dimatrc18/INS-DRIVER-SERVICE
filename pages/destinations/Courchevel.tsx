import React from 'react';
import SkiResortLandingTemplate from '../../components/SkiResortLandingTemplate';

const Courchevel: React.FC = () => {
  return (
    <SkiResortLandingTemplate
      name="Courchevel"
      h1="Long Distance Transfer: Milan to Courchevel"
      heroText="The exclusive French Alps connection. A premium long-haul drive through the Fréjus Tunnel."
      heroImageFallback="" // Template automatically uses Ski_Resorts_Courchevel.png
      sellingPoint="The most comfortable way to reach Les Trois Vallées without flying. Enjoy a luxury cabin experience for the 4-hour journey."
      distance="350km"
      time="~4h 15m"
      region="France (Savoie)"
      seoText="Our Milan to Courchevel long-distance transfer is the preferred choice for those traveling between the Italian fashion capital and the French luxury ski hub. Avoid the stress of airports and regional train links with a direct, chauffeur-driven Mercedes-Benz."
      faqs={[
        { q: "Does the price include the Fréjus Tunnel toll?", a: "Yes, our long-distance rates are all-inclusive of all road tolls and taxes." },
        { q: "Which Courchevel level do you serve?", a: "We provide door-to-door service to all levels: 1850, 1650, 1550, and Le Praz." }
      ]}
      testimonialQuote="A long drive made effortless. The S-Class was like a private jet on wheels. Highly recommended for the trip to Courchevel."
      testimonialAuthor="Patel A., Tech Executive"
    />
  );
};

export default Courchevel;
