import React from 'react';
import {
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import local images
import HeroImg from '../images/Ski_Resorts_Cortina.png';
import VClassImg from '../images/V_Class_In_Mountains_2.png';
import SClassImg from '../images/Convoy_S_Class_And_V_Class.png';
import HeroSocialProof from '../components/HeroSocialProof';

const Olympics: React.FC = () => {
  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* Urgency Notification Bar */}
      <div className="fixed top-0 left-0 w-full bg-[#660000] text-white py-2 z-[70] flex justify-center items-center px-4 shadow-lg min-h-[36px]">
        <p className="text-xs md:text-[13px] font-bold tracking-tight uppercase text-center leading-tight">
          <AlertCircle size={14} className="inline-block mr-2 align-text-bottom" />
          HIGH DEMAND: OUR FLEET IS 85% BOOKED FOR FEB 6-22. SECURE YOUR VEHICLE NOW.
        </p>
      </div>

      <style>{`
        nav { top: 36px !important; }
        main { padding-top: 36px; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Dolomites peaks at sunrise"
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[1.1] mb-6 tracking-tighter">
            Milano Cortina 2026 <br />
            <span className="text-gold">Delegation Transport</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
            Official Private Transport for the Winter Olympics. <br />
            <span className="font-medium text-white">Feb 6 – Feb 22, 2026.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/booking" className="bg-gold text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all text-center">
              Request Olympic Quote
            </Link>
          </div>
          <div className="-mt-6 mb-12">
            <HeroSocialProof />
          </div>
        </div>
      </section>

      {/* Logistics & Why a Driver is Necessary */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tight mb-8">Olympic Logistics Specialist</h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
              The 2026 Winter Games are uniquely spread across Northern Italy. Coordination between Milan's urban venues and the mountain peaks of Cortina d'Ampezzo (4.5 hours away) requires precise timing and specialized winter equipment. We coordinate media crews, sports federations, and VIP sponsors with dedicated 24/7 dispatching.
            </p>
          </div>
          <div className="bg-zinc-900 border border-white/5 p-10">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-10 text-center">Olympic Service Stats</h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Milan ⇄ Cortina</span>
                <span className="font-bold">410 km / 4h 30m</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Milan ⇄ Bormio</span>
                <span className="font-bold">200 km / 3h 15m</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-zinc-500 uppercase text-xs tracking-widest">Snow Equipment</span>
                <span className="font-bold">100% Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Perfect Fleet (Customized for Olympics) */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">The Olympic Fleet Focus</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <span className="bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Primary Choice</span>
              <h3 className="text-3xl font-bold mb-4">Mercedes-Benz V-Class</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">Essential for the mountain routes to Cortina. Equipped with winter tires, snow chains, and ample luggage space for heavy ski gear.</p>
              <img src={VClassImg} alt="V-Class" className="w-full h-64 object-cover mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-lg" />
              <Link to="/booking" className="block text-center bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
                Book This Vehicle
              </Link>
            </div>

            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <div className="h-[22px] mb-4"></div>
              <h3 className="text-3xl font-bold mb-4">Fleet Convoys</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">We can coordinate 10+ vehicles for large federation movements, media logistical hubs, and multi-van delegation rotations.</p>
              <img src={SClassImg} alt="Fleet Convoy" className="w-full h-64 object-cover object-bottom mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-lg" />
              <Link to="/booking" className="block text-center border border-black text-black py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Request Fleet Quote
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* SEO Content Block */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-8">Milan Cortina 2026 VIP Transport</h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">
            As the official dates of February 6–22 approach, our specialized Milano Cortina Winter Olympics VIP Transport provides delegation convoys, media logistics, and executive transfers between Milan and Cortina. Every service is designed for professionals who cannot afford delays or complications during the biggest winter event of the decade.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Olympics;
