import React from 'react';
import SkiResortLandingTemplate from '../../components/SkiResortLandingTemplate';

const Courmayeur: React.FC = () => {
  return (
    <SkiResortLandingTemplate
      name="Courmayeur"
      h1="Milan to Courmayeur Private Car Service"
      heroText="Ski the Mont Blanc. A quick and scenic drive to the Italian side of the highest peak in Europe."
      heroImageFallback="" // Template automatically uses Ski_Resorts_Courmayeur.png
      sellingPoint="Perfect for weekend trips. Fast motorway access via Aosta Valley ensures you maximize your time on the snow."
      distance="220km"
      time="~2h 15m"
      region="Italy (Aosta Valley)"
      seoText="Choosing our Milan to Courmayeur service means choosing efficiency and comfort. Located at the foot of Mont Blanc, Courmayeur is one of Italy's most prestigious resorts. Our 4x4 fleet handles the Aosta Valley motorway with ease, providing a safe and direct alternative to rental cars or coaches."
      faqs={[
        { q: "Is Courmayeur good for a day trip from Milan?", a: "Yes, with a drive time of just over 2 hours, it's one of the most accessible world-class ski destinations from Milan." },
        { q: "Do you offer return transfers for après-ski?", a: "Absolutely. We can wait for you or return at your preferred time to bring you back to Milan." }
      ]}
      testimonialQuote="The quickest and most comfortable way to reach the foot of Mont Blanc. Our driver was a local expert."
      testimonialAuthor="Bianchi G., Resort Manager"
    />
  );
};

export default Courmayeur;
