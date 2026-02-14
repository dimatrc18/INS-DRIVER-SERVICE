import React from 'react';
import { Plane, UserCircle, Briefcase, Globe, Gift, X, DollarSign, Star } from 'lucide-react';

const JourneyIncludes: React.FC = () => {
  const amenities = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Flight Monitoring",
      description: "We track your flight in real-time. If you are delayed, we wait. No stress, no extra charge."
    },
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: "Meet & Greet",
      description: "Your chauffeur will greet you at the arrivals hall with a personalized nameboard."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Luggage Assistance",
      description: "From the carousel to the trunk, we handle your bags with care."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multilingual Drivers",
      description: "Our chauffeurs speak English, French, and Dutch for seamless communication."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Onboard Amenities",
      description: "Enjoy complimentary bottled water, Wi-Fi, and phone chargers during your ride."
    },
    {
      icon: <X className="w-6 h-6" />,
      title: "Flexible Cancellation",
      description: "Plans change. Cancel up to 24 hours before your booking for a full refund."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "All-Inclusive Pricing",
      description: "The price we quote is the price you pay. No hidden fees, taxes, or gratuities included."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Bespoke Requests",
      description: "Champagne? Child seats? Multiple stops? Just ask, and we will arrange it."
    }
  ];

  return (
    <section className="py-32 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 tracking-tight mb-4 uppercase">
            The Gold Standard
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
            Every journey with INS Driver Service includes our signature white-glove service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-gold/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-zinc-900 transition-colors">
                  {amenity.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-2 uppercase tracking-wide">
                  {amenity.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyIncludes;
