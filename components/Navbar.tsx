
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

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
    setShowServices(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Milano Cortina 2026', path: '/milano-cortina-2026', highlight: true },
  ];

  const servicesLinks = [
    { name: 'Airport Transfers', path: '/services/airport-transfers' },
    { name: 'Ski Resorts', path: '/services/ski-resorts' },
    { name: 'Major Events', path: '/services/major-events' },
    { name: 'Private Tours', path: '/services/private-tours' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white leading-none">MILAN LUXURY</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mt-1">Transfer Service</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${
                  link.highlight ? 'text-gold font-semibold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className="flex items-center space-x-1 text-sm tracking-widest uppercase text-white hover:text-gold transition-colors">
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full right-0 w-64 bg-black border border-gold/20 shadow-2xl transition-all duration-300 ${showServices ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="p-4 space-y-4">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-xs uppercase tracking-widest text-gray-300 hover:text-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/booking"
              className="bg-gold text-black px-6 py-2 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-gold/20 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="px-4 py-8 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg uppercase tracking-widest ${link.highlight ? 'text-gold' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full h-px bg-gold/20 my-2"></div>
          {servicesLinks.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="text-sm uppercase tracking-widest text-gray-400"
            >
              {service.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="w-full bg-gold text-black text-center py-4 rounded-none text-sm font-bold uppercase tracking-widest"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
