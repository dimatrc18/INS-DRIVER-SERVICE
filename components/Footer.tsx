import React from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SKI_RESORTS, MAJOR_EVENTS } from '../constants';
import { useLocalePath } from '../hooks/useLocalePath';

const Footer: React.FC = () => {
  const localePath = useLocalePath();

  // Helper to safely get English strings
  const getEn = (val: any) => val?.en || val;

  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand & Trust */}
          <div className="flex flex-col h-full">
            <Link to={localePath('/')} className="flex items-center space-x-2 mb-8 group">
              <span className="text-xl font-black tracking-widest text-zinc-900 leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>INS DRIVER SERVICE</span>
            </Link>
            <div className="mt-auto pt-8 border-t border-zinc-100">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 italic">
                Licensed LVC Operator
              </span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-zinc-900 font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to={localePath('/services/airport-transfers')} className="text-zinc-500 hover:text-gold text-sm tracking-wide font-medium transition-colors duration-300">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link to={localePath('/services/ski-resorts')} className="text-zinc-500 hover:text-gold text-sm tracking-wide font-medium transition-colors duration-300">
                  City to City
                </Link>
              </li>
              <li>
                <Link to={localePath('/services/major-events')} className="text-zinc-500 hover:text-gold text-sm tracking-wide font-medium transition-colors duration-300">
                  Major Events
                </Link>
              </li>
              <li>
                <Link to={localePath('/fleet')} className="text-zinc-500 hover:text-gold text-sm tracking-wide font-medium transition-colors duration-300">
                  Luxury Fleet
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h4 className="text-zinc-900 font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8">Dispatches</h4>
            <ul className="space-y-4">
              {SKI_RESORTS.slice(0, 5).map(resort => (
                <li key={resort.slug}>
                  <Link
                    to={localePath(`/destinations/${resort.slug}`)}
                    className="text-zinc-500 hover:text-gold text-sm tracking-wide font-medium transition-colors duration-300"
                  >
                    Brussels to {resort.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-zinc-900 font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8">Contact Dispatch</h4>
            <div className="space-y-6">
              <a
                href="tel:+32483506356"
                className="group flex items-center space-x-4 text-zinc-500 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-zinc-100 group-hover:border-gold/50 transition-colors">
                  <Phone size={16} className="text-gold" strokeWidth={1} />
                </div>
                <span className="text-sm font-medium">+32 483 506 356</span>
              </a>
            </div>
            <div className="mt-12">
              <Link
                to={localePath('/booking')}
                className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-md"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-medium">
            © {new Date().getFullYear()} INS Driver Service Belgium. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <Link to={localePath('/privacy')} className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors font-medium">Privacy Policy</Link>
            <Link to={localePath('/terms')} className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-zinc-900 transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
