import React from 'react';
import EventLandingTemplate from '../../components/EventLandingTemplate';
import sanSiroHeroImg from '../../images/San_Siro.png';

const SanSiro: React.FC = () => {
  return (
    <EventLandingTemplate
      eventName="San Siro Events"
      h1="San Siro Stadium VIP Transfers"
      dates="Year-round"
      heroImage={sanSiroHeroImg}
      heroText="Arrive at the 'Scala del Calcio' in style. Direct stadium drop-off for Champions League matches and concerts."
      logisticsText="San Siro matches and major concerts attract up to 80,000 people. Parking is notoriously difficult and public transport is overwhelmed. Our licensed NCC drivers have access to restricted drop-off zones close to the VIP entrances, saving you hours of walking and waiting."
      primaryFleet={{
        model: "Mercedes-Benz V-Class",
        description: "The best way to attend a match with friends or clients. Skip the parking nightmare and enjoy the pre-game atmosphere together."
      }}
      secondaryFleet={{
        model: "Mercedes-Benz S-Class",
        description: "Executive arrival for VIP Box guests and sponsors requiring the most prestigious entrance."
      }}
      stats={[
        { label: "Center ⇄ Stadium", value: "15-20 mins" },
        { label: "Entrance Access", value: "Gate-side" },
        { label: "Wait Service", value: "Available" },
        { label: "Wait Area", value: "Secured" }
      ]}
      seoTitle="San Siro Stadium VIP Transfer"
      seoContent="Whether it's a high-stakes AC Milan or Inter Milan match, or a world-class stadium tour concert, our San Siro VIP service is the ultimate way to experience the event. We offer reliable stadium transfers with professional drivers who know exactly how to navigate the complex security perimeters of the Meazza."
      testimonialQuote="Arrived at the stadium like a pro. No parking headaches, just pure focus on the game."
      testimonialAuthor="Ahmed K., Football Enthusiast"
    />
  );
};

export default SanSiro;
