import React from 'react';
import SkiResortLandingTemplate from '../../components/SkiResortLandingTemplate';

const Cervinia: React.FC = () => {
  return (
    <SkiResortLandingTemplate
      name="Cervinia"
      h1="Transfer Milan to Cervinia (Matterhorn)"
      heroText="Drive to the foot of the Matterhorn. Guaranteed snow and cross-border skiing into Zermatt."
      // Removed heroImageFallback because your template now handles it automatically via the name "Cervinia"
      heroImageFallback=""
      sellingPoint="We drop you at your Cervinia hotel door. For Zermatt, we handle the logistics to the lift stations or the train links."
      distance="190km"
      time="~2h 15m"
      region="Italy/Swiss Border"
      seoText="A Cervinia & Matterhorn ski transfer is the gateway to one of the world's highest ski areas. With a private chauffeur, you avoid the hassle of public transport and carry your equipment directly to your accommodation. Our luxury fleet is prepared for the winding roads of the Cervino valley."
      faqs={[
        { q: "Can I ski into Switzerland from Cervinia?", a: "Yes, the resort is connected to Zermatt. You can ski across the border, just ensure you have the appropriate lift pass." },
        { q: "How high is Cervinia?", a: "The town is at 2,050m, making it one of the most snow-sure resorts in the Alps." }
      ]}
      testimonialQuote="The driver was waiting for us at Malpensa and got us to Cervinia in perfect time for the first lift. Outstanding service."
      testimonialAuthor="Lee J., Mountaineer"
    />
  );
};

export default Cervinia;
