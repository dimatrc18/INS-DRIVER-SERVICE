import React from 'react';
import SkiResortLandingTemplate from '../../components/SkiResortLandingTemplate';

const Livigno: React.FC = () => {
  return (
    <SkiResortLandingTemplate
      name="Livigno"
      h1="Milan to Livigno Ski Transfer"
      heroText="Reach 'Little Tibet' safely. We navigate the Foscagno Pass so you don’t have to. Approx 4 hours."
      heroImageFallback="" // Template automatically uses Ski_Resorts_Livigno.png
      sellingPoint="Livigno is a duty-free zone. Enjoy shopping and high-altitude skiing while we handle the challenging winter driving through the Alta Valtellina."
      distance="200km"
      time="~3h 30m"
      region="Italy (Alta Valtellina)"
      seoText="Our Milan to Livigno private ride is the most reliable way to reach this high-altitude haven. Livigno is famous for its duty-free shopping and guaranteed snow, but the road there requires expert navigation of mountain passes. Our 4MATIC vehicles ensure a safe passage regardless of the weather conditions."
      faqs={[
        { q: "What is the best route from Milan to Livigno?", a: "We typically take the road through Lecco and Sondrio, then cross the Foscagno Pass which is kept open year-round." },
        { q: "Is duty-free shopping worth it?", a: "Yes, Livigno offers significant savings on electronics, perfumes, and spirits due to its special tax status." }
      ]}
      testimonialQuote="Livigno's mountain roads were manageable thanks to our driver's expertise. The duty-free shopping was a great bonus!"
      testimonialAuthor="Sokolov M., Business Owner"
      heroImageObjectPosition="object-top"
    />
  );
};

export default Livigno;
