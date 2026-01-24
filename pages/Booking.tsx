import React, { useState, useEffect } from 'react';
import { Send, MapPin, Calendar, Clock, User, Briefcase, Car, Shield, Phone, Plane, Luggage, Info } from 'lucide-react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// Service Types
const SERVICE_TYPES = [
  { label: 'Airport Transfer', value: 'airport_transfer' },
  { label: 'City-to-City Transfer', value: 'city_to_city' },
  { label: 'Hourly / As Directed', value: 'hourly_as_directed' },
  { label: 'Olympic Transfer (2026)', value: 'olympic_transfer' },
  { label: 'Private Excursion', value: 'private_excursion' },
  { label: 'Custom / Other', value: 'custom_request' },
];

const Booking: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [serviceType, setServiceType] = useState('airport_transfer');
  const [pickup, setPickup] = useState<any>(null);
  const [dropoff, setDropoff] = useState<any>(null);
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');
  const [showFlight, setShowFlight] = useState(false);

  // Custom Time Picker State
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [timeHour, setTimeHour] = useState('12');
  const [timeMinute, setTimeMinute] = useState('00');

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];

  // Pax/Luggage State
  const [pax, setPax] = useState(1);
  const [luggage, setLuggage] = useState(1);
  const [vehicle, setVehicle] = useState('V-Class');

  // API Key handling
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // --- Logic Hooks ---

  // 1. Flight Number Logic
  useEffect(() => {
    const isAirport = (loc: any) => {
      if (!loc) return false;
      const label = typeof loc === 'string' ? loc.toLowerCase() : loc.label.toLowerCase();
      return label.includes('airport') || label.includes('mxp') || label.includes('lin') || label.includes('bgy') || label.includes('malpensa') || label.includes('linate') || label.includes('bergamo');
    };

    if (serviceType === 'airport_transfer' || serviceType === 'olympic_transfer') {
      if (isAirport(pickup) || isAirport(dropoff)) {
        setShowFlight(true);
        return;
      }
    }
    setShowFlight(false);
  }, [pickup, dropoff, serviceType]);

  // 2. Auto-select V-Class for high luggage/pax
  useEffect(() => {
    if (luggage > 2 || pax > 3) {
      setVehicle('V-Class');
    }
  }, [luggage, pax]);


  // --- Validation & Handlers ---

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Custom Validation
    if (serviceType === 'hourly_as_directed' && !duration) {
      alert('Please select a duration for Hourly service.');
      return;
    }
    if (serviceType === 'custom_request' && !message.trim()) {
      alert('Please describe your request in the message field.');
      return;
    }
    if (serviceType === 'city_to_city' && !dropoff) {
      alert('Please select a destination city.');
      return;
    }

    setSubmitted(true);
    // Future integration code
  };

  // Helper: Determine if Drop-off field is shown
  const showDropoff = ['airport_transfer', 'city_to_city', 'olympic_transfer', 'private_excursion'].includes(serviceType);

  // Helper: Determine Drop-off Placeholder
  const getDropoffPlaceholder = () => {
    if (serviceType === 'city_to_city') return "Enter Destination City (e.g., Lugano, Turin)...";
    return "Search Destination...";
  };

  // Helper: Determine Message Requirements
  const isMessageRequired = serviceType === 'custom_request';
  const messageLabel = isMessageRequired ? "Describe Your Trip *" : "Message (Optional)";
  const messagePlaceholder = isMessageRequired
    ? "Please describe your request (e.g., Wedding at Villa d'Este, 3-day roadshow, specific itinerary)..."
    : "Flight details, child seats, or special instructions...";


  // --- Styles ---
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: 'black',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '0',
      padding: '8px',
      color: 'white',
      boxShadow: state.isFocused ? '0 0 0 1px #D4AF37' : 'none',
      '&:hover': {
        borderColor: '#D4AF37'
      }
    }),
    input: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#D4AF37' : '#18181b',
      color: state.isFocused ? 'black' : 'white',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#18181b',
      border: '1px solid rgba(255,255,255,0.1)',
      zIndex: 50
    })
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-32 pb-20 px-4">
        <div className="max-w-2xl w-full text-center border border-gold/20 p-12 bg-zinc-900/50">
          <h1 className="text-4xl font-serif text-gold mb-6">Reservation Received</h1>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Thank you for your inquiry. A concierge manager will review your details and send a personalized quote within 2 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-white uppercase tracking-widest border-b border-gold pb-2 hover:text-gold transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Content */}
          <div>
            <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Reservations</h2>
            <h1 className="text-5xl md:text-6xl font-serif text-white tracking-wide mb-8">Secure Your Transfer</h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
              For immediate assistance or special requirements (such as multi-vehicle convoys for the Winter Games), please contact our 24/7 concierge at <span className="text-gold">+39 02 123 4567</span>.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white uppercase tracking-widest text-sm font-bold">Fast Response</h4>
                  <p className="text-gray-500 text-sm">Quotes sent within 120 minutes</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-white uppercase tracking-widest text-sm font-bold">Flexible Cancellation</h4>
                  <p className="text-gray-500 text-sm">Free cancellation up to 24h before</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900/50 border border-gold/20 p-8 md:p-12 shadow-2xl">
            <form action="https://formspree.io/f/YOUR_ID_HERE" method="POST" className="space-y-6" onSubmit={handleSubmit}>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <User size={12} /> Full Name
                  </label>
                  <input required name="name" type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Phone size={12} /> Mobile Check (Incl. Code)
                  </label>
                  <input required name="phone" type="tel" className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" placeholder="+1 234 567 8900" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2">Email Address</label>
                  <input required name="email" type="email" className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2">Service Type</label>
                  <select
                    name="service"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none appearance-none cursor-pointer"
                  >
                    {SERVICE_TYPES.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Locations */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <MapPin size={12} /> Pick-up Location
                  </label>
                  {GOOGLE_API_KEY ? (
                    <GooglePlacesAutocomplete
                      apiKey={GOOGLE_API_KEY}
                      selectProps={{
                        styles: customStyles,
                        placeholder: 'Search Hotel, Airport or Address...',
                        value: pickup,
                        onChange: setPickup,
                      }}
                    />
                  ) : (
                    <input
                      required
                      name="pickup_loc"
                      type="text"
                      className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors"
                      placeholder="Milan Central / MXP"
                      onChange={(e) => setPickup({ label: e.target.value, value: e.target.value })}
                    />
                  )}
                  {!GOOGLE_API_KEY && <p className="text-xs text-zinc-500 mt-1 italic">* Google Maps Key missing - Standard input active</p>}
                </div>

                {/* Conditional: Drop-off OR Duration */}
                {showDropoff ? (
                  <div className="animate-fade-in">
                    <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <MapPin size={12} /> Drop-off Location
                    </label>
                    {GOOGLE_API_KEY ? (
                      <GooglePlacesAutocomplete
                        apiKey={GOOGLE_API_KEY}
                        selectProps={{
                          styles: customStyles,
                          placeholder: getDropoffPlaceholder(),
                          value: dropoff,
                          onChange: setDropoff,
                        }}
                      />
                    ) : (
                      <input
                        required
                        name="dropoff_loc"
                        type="text"
                        className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors"
                        placeholder={getDropoffPlaceholder()}
                        onChange={(e) => setDropoff({ label: e.target.value, value: e.target.value })}
                      />
                    )}
                  </div>
                ) : serviceType === 'hourly_as_directed' && (
                  <div className="animate-fade-in">
                    <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <Clock size={12} /> Duration
                    </label>
                    <select
                      name="duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select Duration...</option>
                      {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(h => <option key={h} value={`${h} Hours`}>{h} Hours</option>)}
                      <option value="Full Day (15h)">Full Day (15h)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Flight Number - Conditional */}
              {showFlight && (
                <div className="animate-fade-in">
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Plane size={12} /> Flight Number
                  </label>
                  <input name="flight_number" type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors border-l-4 border-l-gold" placeholder="e.g. AZ2045 (Tracking enabled)" />
                </div>
              )}

              {/* Date & Time (Strict Picker) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Calendar size={12} /> Date
                  </label>
                  <input
                    required
                    name="date"
                    type="date"
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none calendar-dark cursor-pointer"
                    style={{ colorScheme: 'dark' }}
                    onClick={(e) => e.currentTarget.showPicker()}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                </div>
                <div className="relative">
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Clock size={12} /> Time (24h)
                  </label>

                  {/* Read-only Trigger Input */}
                  <input
                    readOnly
                    value={`${timeHour}:${timeMinute}`}
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none cursor-pointer text-center tracking-widest font-mono"
                    onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                  />

                  {/* Hidden Input for Form Submission */}
                  <input type="hidden" name="time" value={`${timeHour}:${timeMinute}`} />

                  {/* Custom "iOS Style" Picker Dropdown */}
                  {isTimePickerOpen && (
                    <div className="absolute top-full left-0 w-full z-50 bg-zinc-900 border border-gold/20 shadow-2xl animate-fade-in mt-1">
                      <div className="grid grid-cols-2 h-48 divide-x divide-white/10">
                        {/* Hours Column */}
                        <div className="overflow-y-auto scrollbar-hide py-2">
                          <div className="text-[10px] text-center text-gray-500 uppercase tracking-widest mb-2 sticky top-0 bg-zinc-900 py-1">Hour</div>
                          {hours.map(h => (
                            <div
                              key={h}
                              onClick={() => setTimeHour(h)}
                              className={`text-center py-2 cursor-pointer transition-colors ${timeHour === h ? 'text-gold font-bold text-xl bg-white/5' : 'text-gray-400 hover:text-white'}`}
                            >
                              {h}
                            </div>
                          ))}
                        </div>

                        {/* Minutes Column */}
                        <div className="overflow-y-auto scrollbar-hide py-2">
                          <div className="text-[10px] text-center text-gray-500 uppercase tracking-widest mb-2 sticky top-0 bg-zinc-900 py-1">Min</div>
                          {minutes.map(m => (
                            <div
                              key={m}
                              onClick={() => setTimeMinute(m)}
                              className={`text-center py-2 cursor-pointer transition-colors ${timeMinute === m ? 'text-gold font-bold text-xl bg-white/5' : 'text-gray-400 hover:text-white'}`}
                            >
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Done Button */}
                      <div
                        onClick={() => setIsTimePickerOpen(false)}
                        className="bg-black hover:bg-gold hover:text-black border-t border-white/10 text-center py-3 text-xs uppercase tracking-widest font-bold cursor-pointer transition-colors"
                      >
                        Done
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Pax & Luggage */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <User size={12} /> Passengers
                  </label>
                  <div className="flex items-center border border-white/10 bg-black">
                    <button type="button" onClick={() => setPax(Math.max(1, pax - 1))} className="p-4 hover:bg-gold hover:text-black transition-colors">-</button>
                    <input type="text" readOnly value={pax} className="w-full bg-transparent text-center text-white" />
                    <button type="button" onClick={() => setPax(Math.min(15, pax + 1))} className="p-4 hover:bg-gold hover:text-black transition-colors">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Luggage size={12} /> Luggage
                  </label>
                  <div className="flex items-center border border-white/10 bg-black">
                    <button type="button" onClick={() => setLuggage(Math.max(0, luggage - 1))} className="p-4 hover:bg-gold hover:text-black transition-colors">-</button>
                    <input type="text" readOnly value={luggage} className="w-full bg-transparent text-center text-white" />
                    <button type="button" onClick={() => setLuggage(Math.min(20, luggage + 1))} className="p-4 hover:bg-gold hover:text-black transition-colors">+</button>
                  </div>
                </div>
              </div>

              {/* Vehicle Selection (Auto-updated) */}
              <div>
                <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                  <Car size={12} /> Preferred Vehicle
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="vehicle"
                      value="S-Class"
                      checked={vehicle === 'S-Class'}
                      onChange={() => setVehicle('S-Class')}
                      disabled={luggage > 2 || pax > 3}
                      className="peer sr-only"
                    />
                    <div className={`p-3 text-center border transition-all ${vehicle === 'S-Class' ? 'border-gold text-gold' : 'border-white/10 text-zinc-500'} ${luggage > 2 || pax > 3 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gold/50'}`}>
                      <div className="text-[10px] font-bold uppercase">S-Class</div>
                      <div className="text-[9px] mt-1">Max 3 Pax / 2 Bags</div>
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="vehicle"
                      value="V-Class"
                      checked={vehicle === 'V-Class'}
                      onChange={() => setVehicle('V-Class')}
                      className="peer sr-only"
                    />
                    <div className={`p-3 text-center border transition-all ${vehicle === 'V-Class' ? 'border-gold text-gold' : 'border-white/10 text-zinc-500'} hover:border-gold/50`}>
                      <div className="text-[10px] font-bold uppercase">V-Class</div>
                      <div className="text-[9px] mt-1">7 Pax / 7 Bags</div>
                    </div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="vehicle"
                      value="E-Class"
                      checked={vehicle === 'E-Class'}
                      onChange={() => setVehicle('E-Class')}
                      disabled={luggage > 2 || pax > 3}
                      className="peer sr-only"
                    />
                    <div className={`p-3 text-center border transition-all ${vehicle === 'E-Class' ? 'border-gold text-gold' : 'border-white/10 text-zinc-500'} ${luggage > 2 || pax > 3 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gold/50'}`}>
                      <div className="text-[10px] font-bold uppercase">E-Class</div>
                      <div className="text-[9px] mt-1">3 Pax / 2 Bags</div>
                    </div>
                  </label>
                </div>
                {(luggage > 2 || pax > 3) && <p className="text-[#D4AF37] text-xs mt-2 italic">* V-Class automatically selected for larger groups or luggage.</p>}
              </div>

              <div>
                <label className="block text-gold text-[10px] uppercase tracking-widest font-bold mb-2">
                  {messageLabel}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required={isMessageRequired}
                  className="w-full bg-black border border-white/10 p-4 text-white focus:border-gold outline-none transition-colors"
                  placeholder={messagePlaceholder}
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-gold text-black py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center space-x-3">
                <span>Inquire Now</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;