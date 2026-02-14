import React from 'react';
import { MessageSquare, CalendarCheck, CreditCard, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocalePath } from '../hooks/useLocalePath';

const HowItWorks: React.FC = () => {
  const localePath = useLocalePath();

  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Request a Quote",
      description: "Enter your route details online or contact our dispatch team via WhatsApp."
    },
    {
      number: '02',
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Receive Confirmation",
      description: "We send a formal proposal with transparent pricing and vehicle options."
    },
    {
      number: '03',
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payment",
      description: "Confirm your booking with a secure credit card link or bank transfer."
    },
    {
      number: '04',
      icon: <Star className="w-8 h-8" />,
      title: "Enjoy the Ride",
      description: "Your chauffeur arrives 15 minutes early. Sit back and relax."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-zinc-900 tracking-tight mb-4 uppercase">
            Simple Booking Process
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
            From your first click to your final destination, we ensure a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -top-3 -left-3 text-7xl font-bold text-zinc-100 select-none group-hover:text-gold/10 transition-colors">
                    {step.number}
                  </div>
                  <div className="relative z-10 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-zinc-900 transition-colors shadow-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to={localePath('/booking')} className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg">
            Start Your Booking
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
