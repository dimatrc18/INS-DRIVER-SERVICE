import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSocialProof: React.FC = () => {
    const { t } = useTranslation('common');

    const customers = [
        { initials: 'MK', color: 'bg-[#1A1A1A] border-zinc-900' },
        { initials: 'ER', color: 'bg-[#2D3340] border-slate-800' },
        { initials: 'SF', color: 'bg-[#1B3635] border-teal-950' },
        { initials: 'TG', color: 'bg-[#4A1D1D] border-red-950' },
    ];

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-3">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center relative shadow-sm ring-1 ring-black/5 ${customer.color}`}
                        style={{ zIndex: 10 + index }}
                    >
                        <span className="text-[10px] font-bold text-white tracking-wider">
                            {customer.initials}
                        </span>
                    </div>
                ))}
            </div>

            {/* Stars and Text */}
            <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className="fill-gold text-gold"
                        />
                    ))}
                </div>
                <span className="text-zinc-500 text-[11px] font-extrabold uppercase tracking-[0.1em]">
                    {t('heroSocialProof.happyCustomers')}
                </span>
            </div>
        </div>
    );
};

export default HeroSocialProof;
