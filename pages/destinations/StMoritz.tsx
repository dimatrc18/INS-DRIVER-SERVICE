import React from 'react';
import SkiResortLandingTemplate from '../../components/SkiResortLandingTemplate';

const StMoritz: React.FC = () => {
  return (
    <SkiResortLandingTemplate
      name="St. Moritz"
      h1="Private Chauffeur from Milan to St. Moritz"
      heroText="The ultimate winter luxury connection. Cross the Swiss border in style. Approx 2.5 hours."
      heroImageFallback="" // Template automatically uses Ski_Resorts_St_Moritz.png
      sellingPoint="Seamless border crossing assistance. Direct drop-off at Badrutt’s Palace or Kulm Hotel without the stress of navigating the Maloja Pass."
      distance="170km"
      time="~2h 45m"
      region="Switzerland (Engadin)"
      seoText="A private car Milan to St. Moritz provides a seamless crossing into the Swiss Engadin valley. Avoid the complexities of train changes or winter driving through the mountains. Our experienced chauffeurs ensure you reach the world's most glamorous ski resort refreshed and ready for the slopes or the après-ski scene."
      faqs={[
        { q: "Do you handle the border crossing for us?", a: "Yes, our drivers are familiar with the Swiss border protocols and will assist with any necessary formalities for a smooth transition." },
        { q: "Can we stop for lunch on the way?", a: "Certainly. Our private transfers are fully customizable. We can arrange scenic stops in Chiavenna or other points of interest." }
      ]}
      testimonialQuote="The most elegant way to reach St. Moritz. Crossing the border was a breeze, and the mountain views were stunning."
      testimonialAuthor="Dupont P., Luxury Concierge"
      heroImageObjectPosition="object-top"
    />
  );
};

export default StMoritz;
