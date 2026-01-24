import React from 'react';
import EventLandingTemplate from '../../components/EventLandingTemplate';
import fashionHeroImg from '../../images/Milan_Fashion_Week.png';

const FashionWeek: React.FC = () => {
  return (
    <EventLandingTemplate
      eventName="Milan Fashion Week"
      h1="Milan Fashion Week Private Driver"
      dates="February & September"
      heroImage={fashionHeroImg}
      heroText="The ultimate accessory for MFW. Navigate between the fashion district, showrooms, and after-parties with a dedicated driver."
      logisticsText="During Fashion Week, Milan's Quadrilatero della Moda becomes the most congested area in Europe. Shows are spread across the city with tight turnaround times. Our hourly disposal service allows you to keep your driver on standby, ready to whisk you to the next runway at a moment's notice."
      primaryFleet={{
        model: "Mercedes-Benz S-Class",
        description: "The industry standard. Black exterior, black interior, privacy glass. A quiet sanctuary between chaotic runway shows."
      }}
      secondaryFleet={{
        model: "Mercedes-Benz V-Class",
        description: "For stylists and PR teams carrying wardrobe bags, camera equipment, and production materials."
      }}
      stats={[
        { label: "Min. Booking", value: "4 Hours" },
        { label: "ZTL Access", value: "Full Authorization" },
        { label: "Wait & Return", value: "Included" },
        { label: "Refreshments", value: "Premium" }
      ]}
      seoTitle="MFW Luxury Chauffeur Milan"
      seoContent="Make a statement at Milan Fashion Week with our elite chauffeur service. We understand the fast-paced nature of the fashion industry, providing reliable, discreet, and stylish transport for designers, models, and international media. From the first morning show to the final late-night gala, our drivers are your personal assistants on the road."
      testimonialQuote="The ultimate luxury during Fashion Week. My driver was always five minutes ahead of schedule, ensuring I never missed a show."
      testimonialAuthor="Hwang S., Fashion Editor"
    />
  );
};

export default FashionWeek;