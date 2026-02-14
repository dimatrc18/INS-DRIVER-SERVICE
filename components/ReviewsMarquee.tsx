import React from 'react';

const ReviewsMarquee: React.FC = () => {
  const reviews = [
    {
      name: "Jean-Pierre D.",
      title: "Impeccable Service",
      review: "The driver was waiting at Brussels Airport with a sign. The S-Class was pristine. A perfect start to our business trip.",
      stars: 5
    },
    {
      name: "Sarah Jenkins",
      title: "Smooth Transfer to Bruges",
      review: "We booked a V-Class for our family trip to Bruges. The van was spacious, clean, and the driver was very polite.",
      stars: 5
    },
    {
      name: "Markus H.",
      title: "Professional & On Time",
      review: "I use INS Driver Service for all my meetings in the EU quarter. Always punctual and discreet.",
      stars: 5
    },
    {
      name: "Elena R.",
      title: "Great for Late Arrivals",
      review: "Our flight to Charleroi was delayed by 2 hours. The driver waited for us without any issues. Highly recommended.",
      stars: 5
    },
    {
      name: "The Wilson Family",
      title: "Comfortable Ride to Paris",
      review: "Took the long transfer from Brussels to Paris. The car was so comfortable we slept the whole way.",
      stars: 5
    },
    {
      name: "Hiroshi T.",
      title: "Excellent English",
      review: "My driver spoke perfect English and gave me great recommendations for Antwerp. 5 stars.",
      stars: 5
    },
    {
      name: "Lars V.",
      title: "Generic Title",
      review: "Good service. Clean car. Will book again.",
      stars: 5
    },
    {
      name: "Sophie M.",
      title: "Luxury Experience",
      review: "Felt like a VIP. Water, Wi-Fi, and a very professional chauffeur.",
      stars: 5
    },
    {
      name: "David C.",
      title: "Reliable",
      review: "Booked a return trip to Ghent. Both drivers were on time and drove safely.",
      stars: 5
    },
    {
      name: "Anna K.",
      title: "Safe for Solo Travelers",
      review: "As a woman traveling alone, I felt very safe. The driver was respectful and professional.",
      stars: 5
    },
    {
      name: "Oleg P.",
      title: "Best in Belgium",
      review: "Tried many services in Brussels, this is by far the best.",
      stars: 5
    },
    {
      name: "Claire B.",
      title: "Wedding Transport",
      review: "Hired them for our wedding guests. Everything went smoothly.",
      stars: 5
    }
  ];

  // Duplicate for infinite scroll effect
  const displayReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-zinc-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-zinc-900 uppercase tracking-tighter mb-4">Client Experiences</h2>
        <div className="w-12 h-1 bg-gold mx-auto"></div>
      </div>

      <div className="relative">
        <div className="marquee-track flex gap-8">
          {displayReviews.map((rev, idx) => (
            <div key={idx} className="w-[350px] bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col justify-between shrink-0 hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <span key={i} className="text-[#D4AF37] text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-zinc-300 uppercase italic">Verified Booking</span>
                </div>
                <h4 className="text-zinc-900 font-bold text-lg mb-4">"{rev.title}"</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                  {rev.review}
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-50">
                <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest">— {rev.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 12 - 2rem * 12)); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ReviewsMarquee;
