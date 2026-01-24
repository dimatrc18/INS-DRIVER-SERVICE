import React from 'react';
import { Star } from 'lucide-react';

const HeroSocialProof: React.FC = () => {
    // Configuration for the avatars
    const customers = [
        { initials: 'JD', color: 'bg-slate-800' },     // Executive Grey
        { initials: 'AS', color: 'bg-indigo-950' },    // Deep Midnight
        { initials: 'MK', color: 'bg-cyan-950' },      // Petrol Blue
        { initials: 'RL', color: 'bg-rose-950' },      // Dark Burgundy
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-[fadeIn_3s_ease-out]">
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-4">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center relative z-10 ${customer.color}`}
                        style={{ zIndex: 10 + index }}
                    >
                        <span className="text-xs font-bold text-white tracking-wider">
                            {customer.initials}
                        </span>
                    </div>
                ))}
            </div>

            {/* Stars and Text */}
            <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className="fill-gold text-gold"
                        />
                    ))}
                </div>
                <span className="text-zinc-400 text-sm font-medium">
                    2,000+ happy customers
                </span>
            </div>
        </div>
    );
};

export default HeroSocialProof;
