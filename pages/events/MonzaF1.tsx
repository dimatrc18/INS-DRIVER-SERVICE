import React from 'react';
import EventLandingTemplate from '../../components/EventLandingTemplate';
import monzaHeroImg from '../../images/Monza_Grand_Prix.png';

const MonzaF1: React.FC = () => {
  return (
    <EventLandingTemplate
      eventName="Italian Grand Prix"
      h1="Italian Grand Prix Chauffeur Service"
      dates="September"
      heroImage={monzaHeroImg}
      heroText="Arrive at the Temple of Speed with VIP paddock access. Avoid the heavy traffic of Monza race weekend."
      logisticsText="Navigating to the Monza Circuit during the Grand Prix is a complex logistical challenge. With road closures and massive crowds, a professional chauffeur with Paddock access and ZTL permissions is the only way to ensure timely arrival for qualifying and the race."
      primaryFleet={{
        model: "Mercedes-Benz V-Class",
        description: "Perfect for corporate hospitality groups and race teams. Seats 7 with AC and conference layout."
      }}
      secondaryFleet={{
        model: "Mercedes-Benz S-Class",
        description: "For VIP guests requiring paddock-side drop-off and the ultimate executive experience."
      }}
      stats={[
        { label: "Distance from Milan", value: "22 km" },
        { label: "Typical Drive Time", value: "35-45 mins" },
        { label: "VIP Drop-off", value: "Available" },
        { label: "Hourly Disposal", value: "Recommended" }
      ]}
      seoTitle="F1 Monza Grand Prix Transfers"
      seoContent="Avoid the gridlock of the Italian Grand Prix with our professional airport-to-track transfers. We move F1 teams, sponsors, and VIP fans from Milan directly to the Monza circuit with unmatched efficiency. Luxury and speed, delivered on your schedule."
      testimonialQuote="The only way to reach Monza on race day. Zero stress, VIP access, and absolute professionalism."
      testimonialAuthor="Rossi M., Motorsport Sponsor"
      heroImageObjectPosition="object-bottom"
    />
  );
};

export default MonzaF1;
