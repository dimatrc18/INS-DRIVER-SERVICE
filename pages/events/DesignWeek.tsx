import React from 'react';
import EventLandingTemplate from '../../components/EventLandingTemplate';
import saloneHeroImg from '../../images/Salone_Del_Mobile.png';

const DesignWeek: React.FC = () => {
  return (
    <EventLandingTemplate
      eventName="Salone del Mobile"
      h1="Salone del Mobile Transfers"
      dates="April"
      heroImage={saloneHeroImg}
      heroText="Effortless transit between Rho Fiera and the city-wide Fuorisalone installations."
      logisticsText="Design Week sees the city transformed into a massive outdoor gallery. Moving between the main Rho Fiera fairgrounds and the various 'distretti' like Brera, Tortona, and Isola can be taxing. A private driver provides the comfort needed to process the day's inspiration without the fatigue of public transit."
      primaryFleet={{
        model: "Mercedes-Benz E-Class",
        description: "Smart, efficient transport for buyers and architects moving between Rho Fiera and showrooms."
        // Image removed (handled by template)
      }}
      secondaryFleet={{
        model: "Mercedes-Benz V-Class",
        description: "Ideal for design delegations and studio teams touring multiple installations together."
        // Image removed (handled by template)
      }}
      stats={[
        { label: "Milan ⇄ Rho Fiera", value: "25-35 mins" },
        { label: "Multi-stop", value: "Unlimited" },
        { label: "Wi-Fi", value: "Onboard" },
        { label: "Meet & Greet", value: "Fair Exit" }
      ]}
      seoTitle="Salone del Mobile Car Service"
      seoContent="Navigate the world's most important design event with our bespoke transport solutions. Our Salone del Mobile service ensures that architects, interior designers, and retail buyers can move seamlessly between the fair and the city's exclusive evening cocktail events. Efficiency and elegance combined for Milan's most creative week."
      testimonialQuote="Navigating the various 'Zones' of Design Week was effortless. Our driver was a true professional who knew every shortcut in Milan."
      testimonialAuthor="Tanaka Y., Architecture Lead"
    />
  );
};

export default DesignWeek;
