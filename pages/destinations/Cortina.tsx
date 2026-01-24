import React from 'react';
import SkiResortLandingTemplate from '../../components/SkiResortLandingTemplate';

const Cortina: React.FC = () => {
  return (
    <SkiResortLandingTemplate
      name="Cortina d'Ampezzo"
      h1="Luxury Transfer from Milan to Cortina d’Ampezzo"
      heroText="Travel to the 2026 Winter Olympic hub in absolute comfort. Approx 4.5 hours from Milan."
      heroImageFallback="" // Template automatically uses Ski_Resorts_Cortina.png
      sellingPoint="Avoid the complex mountain passes. Our drivers are experts in Dolomite routes, ensuring a smooth arrival for Olympic guests and ski enthusiasts."
      distance="400km"
      time="~4h 30m"
      region="Italy (Dolomites)"
      seoText="Booking a private Milan ski transfer to Cortina d'Ampezzo is the ultimate way to start your Olympic journey. Avoid the stress of navigating winter roads or waiting for bus connections. Our professional chauffeur service to the Dolomites handles all the logistics, so you can enjoy the majestic peaks of the Italian Alps in total relaxation."
      faqs={[
        { q: "Is the road to Cortina difficult in winter?", a: "The route involves several mountain passes that can be challenging. Our drivers are local experts equipped with 4x4 vehicles and winter gear." },
        { q: "Can you pick up from Malpensa Airport?", a: "Yes, we provide direct MXP to Cortina transfers, meeting you at the terminal arrivals hall." }
      ]}
      testimonialQuote="Navigating the mountain passes to Cortina was effortless. The driver's expertise in winter conditions made us feel completely safe."
      testimonialAuthor="Bjornsson O., Ski Instructor"
    />
  );
};

export default Cortina;

