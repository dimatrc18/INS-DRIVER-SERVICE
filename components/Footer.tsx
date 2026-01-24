
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gold/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand & Trust */}
          <div className="flex flex-col h-full">
            <Link to="/" className="flex flex-col mb-8 group">
              <span className="text-xl font-serif font-bold tracking-[0.2em] text-white leading-none group-hover:text-gold transition-colors">MILAN LUXURY</span>
              <span className="text-xs tracking-[0.4em] text-gold uppercase mt-1">Transfer Service</span>
            </Link>
            <div className="mt-auto pt-8 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 italic">
                Licensed NCC Operator — ZTL Authorized
              </span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div id="footer-services">
            <h4 className="text-white font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8">Our Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Airport Transfers Milan', path: '/services/airport-transfers' },
                { name: 'Private Chauffeur Service', path: '/services/private-chauffeur' },
                { name: 'Hourly Car Disposal', path: '/services/hourly-disposal' },
                { name: 'Corporate & Events', path: '/services/corporate-events' },
                { name: 'Luxury Fleet', path: '/fleet' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-gold text-sm tracking-wide font-light transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h4 className="text-white font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8">Top Destinations</h4>
            <ul className="space-y-4">
              {[
                { name: 'Transfer Milan to Cortina 2026', path: '/milano-cortina-2026' },
                { name: 'Milan to St. Moritz Transfer', path: '/destinations/st-moritz' },
                { name: 'Lake Como Private Tours', path: '/tours/lake-como' },
                { name: 'Milan to Courchevel', path: '/destinations/courchevel' },
                { name: 'Venice Day Trip', path: '/tours/venice' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-gold text-sm tracking-wide font-light transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-sans font-bold text-xs uppercase tracking-[0.3em] mb-8">Contact Us</h4>
            <div className="space-y-6">
              <a
                href="tel:+39021234567"
                className="group flex items-center space-x-4 text-zinc-400 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                  <Phone size={16} className="text-gold" strokeWidth={1} />
                </div>
                <span className="text-sm font-light">+39 02 123 4567</span>
              </a>
              <a
                href="mailto:reservations@milanluxury.it"
                className="group flex items-center space-x-4 text-zinc-400 hover:text-gold transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-gold/50 transition-colors">
                  <Mail size={16} className="text-gold" strokeWidth={1} />
                </div>
                <span className="text-sm font-light">reservations@milanluxury.it</span>
              </a>
            </div>
            <div className="mt-12">
              <Link
                to="/booking"
                className="inline-block border border-gold text-gold px-8 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all duration-300"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            © 2026 Milan Luxury Transfer Service. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
