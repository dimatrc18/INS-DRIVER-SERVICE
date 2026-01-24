import React from 'react';
import { Link } from 'react-router-dom';
import {
  Map,
  Clock,
  Compass,
  Home,
  GlassWater,
  ShoppingBag,
  Camera,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Wine,
  Ship
} from 'lucide-react';
import LakeComoImg from '../images/Lake_Como.jpg';
import VeniceImg from '../images/Venice.png';
import WineTastingImg from '../images/Franciacorta_Wine_Tour.png';
import MilanFashionImg from '../images/Serrevalle.jpg';
import MilanEventImg from '../images/Milan_City.jpg';
import VClassImg from '../images/Tour_Fleet_V_Class.png';
import SClassImg from '../images/Tour_Fleet_S_Class.png';
import HeroImg from '../images/S_Class_In_Mountains_Cropped.png';
import HeroSocialProof from '../components/HeroSocialProof';
import MinimalTestimonial from '../components/MinimalTestimonial';


const PrivateTours: React.FC = () => {
  const tourCards = [
    {
      title: 'Lake Como Day Trip',
      desc: 'Bellagio, Varenna & Villa Balbianello. Optional boat rental coordination for a complete experience.',
      duration: '10 Hours',
      image: LakeComoImg,
      icon: <Camera className="text-gold" size={20} />,
      path: '/tours/lake-como'
    },
    {
      title: 'Venice Full Day Trip',
      desc: 'Discover the floating city with a direct private transfer. 3 hours each way, maximum time in Venice.',
      duration: '12-14 Hours',
      image: VeniceImg,
      icon: <Ship className="text-gold" size={20} />,
      path: '/tours/venice'
    },
    {
      title: 'Serravalle Designer Outlet',
      desc: 'VIP shopping experience with extra luggage capacity for your purchases. Door-to-door convenience.',
      duration: '6-8 Hours',
      image: MilanFashionImg,
      icon: <ShoppingBag className="text-gold" size={20} />,
      path: '/tours/serravalle-outlet'
    },
    {
      title: 'Franciacorta Wine Tour',
      desc: 'Tasting at Berlucchi or Bellavista wineries with lunch in the vineyards. Sparkling wine at its best.',
      duration: '8 Hours',
      image: WineTastingImg,
      icon: <Wine className="text-gold" size={20} />,
      path: '/tours/franciacorta-wine'
    },
    {
      title: 'Milan City Highlights',
      desc: 'The Last Supper, Duomo, and Sforza Castle with a waiting driver for effortless transitions.',
      duration: '8 Hours',
      image: MilanEventImg,
      icon: <Map className="text-gold" size={20} />,
      path: '/tours/milan-city'
    }
  ];


  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImg}
            alt="Luxury Private Tours Northern Italy"
            className="w-full h-full object-cover object-center opacity-50 grayscale-[0.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl lg:max-w-[950px] mt-[70px]">
            <h1 className="text-4xl md:text-7xl font-sans font-bold leading-tight mb-6 tracking-tighter">
              Discover Northern Italy from <br />
              <span className="text-gold">the Comfort of a Private Mercedes.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-light leading-relaxed">
              Curated day trips to Venice, Lake Como, Serravalle Outlets, and Wine Regions. Your journey, your pace.
            </p>
            <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl">
              Book Private Driver
            </Link>
            <div className="mt-8">
              <HeroSocialProof />
            </div>
          </div>
        </div>
      </section>


      {/* 2. Tour Highlights Grid */}
      <section id="experiences" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">Curated Experiences</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourCards.map((tour, i) => (
            <div key={i} className="group relative overflow-hidden bg-zinc-900 flex flex-col border border-white/5 h-full">
              <div className="h-[400px] overflow-hidden relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-3 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{tour.duration}</span>
                  </div>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  {tour.icon}
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{tour.title}</h3>
                </div>
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">{tour.desc}</p>
                <Link to={tour.path} className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-white group-hover:text-gold transition-colors mt-auto">
                  <span>Explore Experience</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. Why Choose a Private Tour */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Compass size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Complete Freedom</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">No strict bus schedules. Stay longer at lunch or leave early—the itinerary is entirely up to you and your guests.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Home size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Door-to-Door</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">We provide pick-up and drop-off directly at your hotel, apartment, or private villa for ultimate convenience.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-8 border border-gold/20">
                <Map size={32} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Local Knowledge</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Our chauffeurs are local experts who can recommend the best panoramic photo spots and hidden gems away from the crowds.</p>
            </div>
          </div>
        </div>
      </section>


      {/* 4. The Touring Fleet */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-bold uppercase tracking-tighter mb-4">The Touring Fleet</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-2">Mercedes-Benz V-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">The Panorama Choice</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>High seating position for better panoramic views</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Huge trunk for shopping bags or wine cases</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Face-to-face seating for family conversation</span>
                </div>
              </div>
              <img src={VClassImg} alt="V-Class" className="w-full h-[315px] object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700 shadow-lg" />
            </div>


            <div className="group border border-black/5 p-10 bg-zinc-50 hover:shadow-2xl transition-all">
              <h3 className="text-3xl font-bold mb-2">Mercedes-Benz S-Class</h3>
              <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-8">The Comfort Choice</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Massage seats for long country drives</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Air suspension for a cloud-like journey</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-600">
                  <CheckCircle2 size={18} className="text-gold shrink-0" />
                  <span>Bespoke climate control for rear passengers</span>
                </div>
              </div>
              <img src={SClassImg} alt="S-Class" className="w-full h-[315px] object-cover object-bottom grayscale hover:grayscale-0 transition-all duration-700 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <MinimalTestimonial
        quote="Our day trip to Lake Como was the highlight of our Italy visit. Having a private driver allowed us to see hidden spots we never would have found on our own."
        author="Dimitri V., Private Collector"
      />


      {/* 5. SEO Content Block */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight text-white mb-8 text-center">
            Luxury Day Trips from Milan
          </h2>
          <div className="text-zinc-500 font-light leading-relaxed text-sm md:text-base space-y-6">
            <p>
              Escape the city and explore Lombardy's treasures with our bespoke chauffeur tours. Our most popular request is the <Link to="/tours/lake-como" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Lake Como Private Driver Service</Link>, offering a scenic journey to the pearl of the lake without the stress of parking or trains.
            </p>
            <p>
              For fashion lovers, our <Link to="/tours/serravalle" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Serravalle Outlet Shopping Transfer</Link> provides a spacious vehicle for your haul from Gucci, Prada, and Dolce & Gabbana. Wine connoisseurs can book our <Link to="/tours/franciacorta" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Franciacorta Wine Tour from Milan</Link> to experience Italy's premium sparkling wine region.
            </p>
            <p>
              Whether you need a simple <Link to="/tours/milan-city" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan City Sightseeing Chauffeur</Link> or a full day in the floating city with our <Link to="/tours/venice" className="text-gold underline decoration-gold/50 hover:decoration-gold transition-all font-medium">Milan to Venice Private Tour</Link>, our professional drivers ensure a seamless luxury experience.
            </p>
          </div>
        </div>
      </section>


      {/* 6. FAQ Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-sans font-bold uppercase tracking-tight mb-16 text-center">Tour FAQ</h2>
          <div className="space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Is the driver also a tour guide?</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">Our chauffeurs are local experts with extensive knowledge of the region, but they are not licensed historical guides. We can hire a professional licensed guide to accompany you upon request.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Is lunch included?</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">No, lunch is not included in the tour price. However, we are happy to recommend and reserve tables at exclusive restaurants along your route.</p>
            </div>
            <div className="border-b border-white/5 pb-8">
              <h4 className="text-gold font-bold mb-4">Can we customize the route?</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">Absolutely. Every tour is bespoke. You can adjust the itinerary as the day unfolds to spend more or less time at any location.</p>
            </div>
          </div>
        </div>
      </section>


      {/* 7. Final CTA */}
      <section className="py-24 bg-white text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">Ready to Explore?</h2>
          <Link to="/booking" className="inline-block bg-gold text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl">
            Book Experience Now
          </Link>
        </div>
      </section>
    </div>
  );
};


export default PrivateTours;
