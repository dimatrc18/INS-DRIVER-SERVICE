import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, User, Briefcase, Car, Shield, Phone, Plane, Luggage, MessageCircle, ChevronDown } from 'lucide-react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import SEO from '../components/SEO';

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
      // Belgian Airports
      return label.includes('airport') || label.includes('bru') || label.includes('crl') || label.includes('anr') || label.includes('brussels') || label.includes('charleroi') || label.includes('antwerp');
    };

    if (serviceType === 'airport_transfer') {
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

  const showDropoff = ['airport_transfer', 'city_to_city', 'private_excursion'].includes(serviceType);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: 'white',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '0',
      padding: '8px',
      color: '#18181b',
      boxShadow: state.isFocused ? '0 0 0 1px #D4AF37' : 'none',
      '&:hover': {
        borderColor: '#D4AF37'
      }
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#18181b',
      boxShadow: 'none',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#18181b',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#f4f4f5' : 'white',
      color: state.isFocused ? '#D4AF37' : '#18181b',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.1)',
      zIndex: 50
    })
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-32 pb-20 px-4">
        <SEO
          title="Booking Received | INS Driver Service Belgium"
          description="Thank you for your inquiry. A concierge manager will review your details and send a personalized quote shortly."
        />
        <div className="max-w-2xl w-full text-center border border-zinc-100 p-12 bg-zinc-50/50 rounded-[3rem] shadow-xl">
          <h1 className="text-4xl font-sans font-bold text-zinc-900 mb-6 uppercase tracking-tighter">Request Received</h1>
          <p className="text-zinc-500 text-lg mb-10 leading-relaxed font-medium">
            Thank you for your inquiry. Our dispatch team will review your details and send a formal quote within 2 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-gold uppercase tracking-widest border-b border-gold/30 pb-2 hover:text-zinc-900 transition-colors font-bold text-xs"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 pb-20 selection:bg-gold selection:text-zinc-900">
      <SEO
        title="Book Your Chauffeur | INS Driver Service Belgium"
        description="Secure your luxury transfer in Brussels, Antwerp, or Paris. Instant booking request for S-Class and V-Class services."
        canonical="/booking"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-zinc-900 tracking-tighter mb-8 uppercase">Dispatch Center</h1>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
              For immediate assistance or complex itineraries, contact our 24/7 desk at <a href="tel:+32483506356" className="text-gold font-bold">+32 483 506 356</a>.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full text-gold shadow-sm border border-zinc-100">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 uppercase tracking-widest text-xs font-bold">Priority Response</h4>
                  <p className="text-zinc-400 text-sm font-medium">Quotes provided within 60 minutes during business hours.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full text-gold shadow-sm border border-zinc-100">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-zinc-900 uppercase tracking-widest text-xs font-bold">Secure Booking</h4>
                  <p className="text-zinc-400 text-sm font-medium">All transfers confirmed with chauffeur details in advance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-zinc-100 p-8 md:p-12 shadow-2xl rounded-[3rem]">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <User size={12} className="text-gold" /> Full Name
                  </label>
                  <input required name="full_name" type="text" className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-medium" placeholder="First Last Name" />
                </div>
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Phone size={12} className="text-gold" /> Mobile Number
                  </label>
                  <input required name="mobile" type="tel" className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-medium" placeholder="+32 ..." />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Briefcase size={12} className="text-gold" /> Email Address
                  </label>
                  <input required name="email" type="email" className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-medium" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Car size={12} className="text-gold" /> Service Type
                  </label>
                  <div className="relative">
                    <select
                      name="service_type"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none appearance-none cursor-pointer rounded-xl font-medium"
                    >
                      <option value="airport_transfer">Airport Transfer</option>
                      <option value="city_to_city">City Transfer</option>
                      <option value="hourly_as_directed">Hourly / As Directed</option>
                      <option value="private_excursion">Private Tour</option>
                      <option value="custom_request">Custom Request</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <MapPin size={12} className="text-gold" /> Pickup Location
                  </label>
                  {GOOGLE_API_KEY ? (
                    <GooglePlacesAutocomplete
                      apiKey={GOOGLE_API_KEY}
                      selectProps={{
                        styles: customStyles,
                        placeholder: "Hotel, Airport, or Address",
                        value: pickup,
                        onChange: setPickup,
                      }}
                    />
                  ) : (
                    <input
                      required
                      name="pickup_location"
                      type="text"
                      className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-medium"
                      placeholder="Enter pickup address"
                      onChange={(e) => setPickup({ label: e.target.value, value: e.target.value })}
                    />
                  )}
                </div>

                {/* Conditional: Drop-off OR Duration */}
                {showDropoff ? (
                  <div className="animate-fade-in">
                    <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <MapPin size={12} className="text-gold" /> Dropoff Location
                    </label>
                    {GOOGLE_API_KEY ? (
                      <GooglePlacesAutocomplete
                        apiKey={GOOGLE_API_KEY}
                        selectProps={{
                          styles: customStyles,
                          placeholder: "Destination Address",
                          value: dropoff,
                          onChange: setDropoff,
                        }}
                      />
                    ) : (
                      <input
                        required
                        name="dropoff_location"
                        type="text"
                        className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-medium"
                        placeholder="Enter destination"
                        onChange={(e) => setDropoff({ label: e.target.value, value: e.target.value })}
                      />
                    )}
                  </div>
                ) : serviceType === 'hourly_as_directed' && (
                  <div className="animate-fade-in">
                    <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                      <Clock size={12} className="text-gold" /> Duration
                    </label>
                    <select
                      name="duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none appearance-none cursor-pointer rounded-xl font-medium"
                    >
                      <option value="">Select Duration</option>
                      {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(h => <option key={h} value={`${h} Hours`}>{h} Hours</option>)}
                      <option value="Full Day (15h)">Full Day (15h)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Flight Number - Conditional */}
              {showFlight && (
                <div className="animate-fade-in">
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Plane size={12} className="text-gold" /> Flight Number
                  </label>
                  <input name="flight_number" type="text" className="w-full bg-zinc-50 border border-gold/30 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-bold italic" placeholder="e.g. SN3722" />
                </div>
              )}

              {/* Date & Time (Strict Picker) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Calendar size={12} className="text-gold" /> Date
                  </label>
                  <input
                    required
                    name="date"
                    type="date"
                    className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none cursor-pointer rounded-xl font-medium"
                    onClick={(e) => e.currentTarget.showPicker()}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                </div>
                <div className="relative">
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Clock size={12} className="text-gold" /> Time (24h)
                  </label>

                  {/* Read-only Trigger Input */}
                  <input
                    readOnly
                    value={`${timeHour}:${timeMinute}`}
                    className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none cursor-pointer text-center tracking-widest font-bold rounded-xl"
                    onClick={() => setIsTimePickerOpen(!isTimePickerOpen)}
                  />

                  {/* Custom "iOS Style" Picker Dropdown */}
                  {isTimePickerOpen && (
                    <div className="absolute top-full left-0 w-full z-50 bg-white border border-zinc-100 shadow-2xl animate-fade-in mt-1 rounded-2xl overflow-hidden">
                      <div className="grid grid-cols-2 h-48 divide-x divide-zinc-100">
                        {/* Hours Column */}
                        <div className="overflow-y-auto scrollbar-hide py-2">
                          <div className="text-[10px] text-center text-zinc-400 uppercase tracking-widest mb-2 sticky top-0 bg-white py-1 font-bold">Hour</div>
                          {hours.map(h => (
                            <div
                              key={h}
                              onClick={() => setTimeHour(h)}
                              className={`text-center py-2 cursor-pointer transition-colors ${timeHour === h ? 'text-gold font-bold text-xl bg-zinc-50' : 'text-zinc-400 hover:text-zinc-900'}`}
                            >
                              {h}
                            </div>
                          ))}
                        </div>

                        {/* Minutes Column */}
                        <div className="overflow-y-auto scrollbar-hide py-2">
                          <div className="text-[10px] text-center text-zinc-400 uppercase tracking-widest mb-2 sticky top-0 bg-white py-1 font-bold">Min</div>
                          {minutes.map(m => (
                            <div
                              key={m}
                              onClick={() => setTimeMinute(m)}
                              className={`text-center py-2 cursor-pointer transition-colors ${timeMinute === m ? 'text-gold font-bold text-xl bg-zinc-50' : 'text-zinc-400 hover:text-zinc-900'}`}
                            >
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Done Button */}
                      <div
                        onClick={() => setIsTimePickerOpen(false)}
                        className="bg-zinc-900 hover:bg-gold hover:text-zinc-900 text-white text-center py-3 text-[10px] uppercase tracking-widest font-bold cursor-pointer transition-colors"
                      >
                        CONFIRM TIME
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Pax & Luggage */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <User size={12} className="text-gold" /> Passengers
                  </label>
                  <div className="flex items-center border border-zinc-100 bg-zinc-50 rounded-xl overflow-hidden">
                    <button type="button" onClick={() => setPax(Math.max(1, pax - 1))} className="p-4 hover:bg-gold hover:text-zinc-900 transition-colors font-bold text-zinc-400 w-12">-</button>
                    <input type="text" readOnly value={pax} className="w-full bg-transparent text-center text-zinc-900 font-bold" />
                    <button type="button" onClick={() => setPax(Math.min(15, pax + 1))} className="p-4 hover:bg-gold hover:text-zinc-900 transition-colors font-bold text-zinc-400 w-12">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                    <Luggage size={12} className="text-gold" /> Luggage
                  </label>
                  <div className="flex items-center border border-zinc-100 bg-zinc-50 rounded-xl overflow-hidden">
                    <button type="button" onClick={() => setLuggage(Math.max(0, luggage - 1))} className="p-4 hover:bg-gold hover:text-zinc-900 transition-colors font-bold text-zinc-400 w-12">-</button>
                    <input type="text" readOnly value={luggage} className="w-full bg-transparent text-center text-zinc-900 font-bold" />
                    <button type="button" onClick={() => setLuggage(Math.min(20, luggage + 1))} className="p-4 hover:bg-gold hover:text-zinc-900 transition-colors font-bold text-zinc-400 w-12">+</button>
                  </div>
                </div>
              </div>

              {/* Vehicle Selection (Auto-updated) */}
              <div>
                <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                  <Car size={12} className="text-gold" /> Preferred Vehicle
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
                    <div className={`p-3 text-center border transition-all rounded-xl ${vehicle === 'S-Class' ? 'border-gold bg-gold/5 text-gold' : 'border-zinc-100 text-zinc-400 bg-zinc-50'} ${luggage > 2 || pax > 3 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gold/30'}`}>
                      <div className="text-[10px] font-bold uppercase">S-Class</div>
                      <div className="text-[8px] mt-1 font-medium">Max 3 Pax</div>
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
                    <div className={`p-3 text-center border transition-all rounded-xl ${vehicle === 'V-Class' ? 'border-gold bg-gold/5 text-gold' : 'border-zinc-100 text-zinc-400 bg-zinc-50'} hover:border-gold/30'}`}>
                      <div className="text-[10px] font-bold uppercase">V-Class</div>
                      <div className="text-[8px] mt-1 font-medium">7 Pax</div>
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
                    <div className={`p-3 text-center border transition-all rounded-xl ${vehicle === 'E-Class' ? 'border-gold bg-gold/5 text-gold' : 'border-zinc-100 text-zinc-400 bg-zinc-50'} ${luggage > 2 || pax > 3 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gold/30'}`}>
                      <div className="text-[10px] font-bold uppercase">E-Class</div>
                      <div className="text-[8px] mt-1 font-medium">3 Pax</div>
                    </div>
                  </label>
                </div>
                {(luggage > 2 || pax > 3) && <p className="text-gold text-[10px] mt-2 italic font-bold text-center uppercase tracking-widest">* V-Class selected for group size</p>}
              </div>

              <div>
                <label className="block text-zinc-400 text-[10px] uppercase tracking-widest font-bold mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-100 p-4 text-zinc-900 focus:border-gold outline-none transition-colors rounded-xl font-medium"
                  placeholder="Flight info, special requests, child seats..."
                ></textarea>
              </div>

              <div className="space-y-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    // Hardcoded English message for WhatsApp
                    const text = `*New Booking Request - INS Driver Service*\n\n` +
                      `*Service:* ${serviceType}\n` +
                      `*Pickup:* ${pickup?.label || (document.getElementsByName('pickup_location')[0] as HTMLInputElement)?.value || 'Not specified'}\n` +
                      `*Dropoff:* ${dropoff?.label || (document.getElementsByName('dropoff_location')[0] as HTMLInputElement)?.value || 'Not specified'}\n` +
                      `*Date/Time:* ${(document.getElementsByName('date')[0] as HTMLInputElement)?.value || 'TBD'} at ${timeHour}:${timeMinute}\n` +
                      `*Vehicle:* ${vehicle}\n` +
                      `*Pax:* ${pax} | *Luggage:* ${luggage}\n` +
                      (showFlight ? `*Flight:* ${(document.getElementsByName('flight_number')[0] as HTMLInputElement)?.value || 'N/A'}\n` : '') +
                      `*Name:* ${(document.getElementsByName('full_name')[0] as HTMLInputElement)?.value || ''}\n` +
                      `*Note:* ${message}`;

                    const encodedText = encodeURIComponent(text);
                    window.open(`https://wa.me/32483506356?text=${encodedText}`, '_blank');
                  }}
                  className="w-full bg-[#25D366] text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl"
                >
                  <MessageCircle size={18} />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
