import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const localePath = useLocalePath();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const servicesLinks = [
    { name: "Airport Transfers", path: '/services/airport-transfers' },
    { name: "Destinations", path: '/services/ski-resorts' }, // Maps to SkiResortTransfers acting as Destinations
    { name: "Major Events", path: '/services/major-events' },
    { name: "Private Tours", path: '/services/private-tours' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-zinc-100 shadow-sm' : 'bg-white/90 py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative gap-4">
          {/* Logo */}
          <Link to={localePath('/')} className="flex-shrink-0 z-50">
            <span className={`text-xl md:text-2xl font-bold tracking-widest leading-none transition-colors whitespace-nowrap text-zinc-900`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              INS DRIVER SERVICE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-zinc-100/80 backdrop-blur-md p-1.5 rounded-full border border-white/50 shadow-sm">
            {servicesLinks.map((link) => {
              const isActive = location.pathname.includes(link.path);
              return (
                <Link
                  key={link.path}
                  to={localePath(link.path)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all text-center whitespace-nowrap ${isActive
                    ? 'bg-zinc-900 text-white shadow-md'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-white/50'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side: Book Button & Mobile Toggle */}
          <div className="flex items-center gap-3 relative z-50">
            <Link
              to={localePath('/booking')}
              className="hidden lg:block bg-zinc-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-zinc-900 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Book Now
            </Link>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900 p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-8 space-y-6 flex flex-col items-center">
          <Link
            to={localePath('/')}
            className="text-lg uppercase tracking-widest font-bold text-zinc-900"
          >
            Home
          </Link>
          <div className="w-full h-px bg-zinc-100 my-2"></div>
          {servicesLinks.map((service) => (
            <Link
              key={service.path}
              to={localePath(service.path)}
              className="text-sm uppercase tracking-widest text-zinc-500 font-bold hover:text-gold"
            >
              {service.name}
            </Link>
          ))}
          <div className="w-full h-px bg-zinc-100 my-2"></div>
          <Link
            to={localePath('/booking')}
            className="w-full bg-zinc-900 text-white text-center py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
