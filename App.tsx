
import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Olympics from './pages/Olympics';
import Booking from './pages/Booking';
import AirportTransfers from './pages/AirportTransfers';
import SkiResortTransfers from './pages/SkiResortTransfers';
import MajorEvents from './pages/MajorEvents';
import PrivateTours from './pages/PrivateTours';
import ChauffeurService from './pages/ChauffeurService';
import HourlyDisposal from './pages/HourlyDisposal';
import CorporateEvents from './pages/CorporateEvents';
import Fleet from './pages/Fleet';

// New Tour Pages
import LakeComo from './pages/tours/LakeComo';
import Serravalle from './pages/tours/Serravalle';
import Franciacorta from './pages/tours/Franciacorta';
import MilanCity from './pages/tours/MilanCity';
import Venice from './pages/tours/Venice';

// New Event Pages
import MonzaF1 from './pages/events/MonzaF1';
import FashionWeek from './pages/events/FashionWeek';
import DesignWeek from './pages/events/DesignWeek';
import SanSiro from './pages/events/SanSiro';

// New Airport Pages
import Malpensa from './pages/airports/Malpensa';
import Linate from './pages/airports/Linate';
import Bergamo from './pages/airports/Bergamo';
import MalpensaToMilan from './pages/transfers/MalpensaToMilan';
import LinateToMilan from './pages/transfers/LinateToMilan';

// New Ski Destination Pages
import Cortina from './pages/destinations/Cortina';
import StMoritz from './pages/destinations/StMoritz';
import Courmayeur from './pages/destinations/Courmayeur';
import Livigno from './pages/destinations/Livigno';
import Cervinia from './pages/destinations/Cervinia';
import Courchevel from './pages/destinations/Courchevel';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-screen flex items-center justify-center bg-black">
              <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/milano-cortina-2026-transport" element={<Olympics />} />
              <Route path="/milano-cortina-2026" element={<Olympics />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/fleet" element={<Fleet />} />
              
              {/* Specific Service Pages */}
              <Route path="/services/airport-transfers" element={<AirportTransfers />} />
              <Route path="/services/ski-resorts" element={<SkiResortTransfers />} />
              <Route path="/services/major-events" element={<MajorEvents />} />
              <Route path="/services/private-tours" element={<PrivateTours />} />
              <Route path="/services/private-chauffeur" element={<ChauffeurService />} />
              <Route path="/services/hourly-disposal" element={<HourlyDisposal />} />
              <Route path="/services/corporate-events" element={<CorporateEvents />} />
              
              {/* Private Tour Landing Pages */}
              <Route path="/tours/lake-como" element={<LakeComo />} />
              <Route path="/tours/serravalle-outlet" element={<Serravalle />} />
              <Route path="/tours/franciacorta-wine" element={<Franciacorta />} />
              <Route path="/tours/milan-city" element={<MilanCity />} />
              <Route path="/tours/venice" element={<Venice />} />
              
              {/* Major Event Landing Pages */}
              <Route path="/events/monza-f1" element={<MonzaF1 />} />
              <Route path="/events/fashion-week" element={<FashionWeek />} />
              <Route path="/events/design-week" element={<DesignWeek />} />
              <Route path="/events/san-siro" element={<SanSiro />} />
              
              {/* Airport Landing Hub Pages */}
              <Route path="/airports/malpensa" element={<Malpensa />} />
              <Route path="/airports/linate" element={<Linate />} />
              <Route path="/airports/bergamo" element={<Bergamo />} />
              <Route path="/transfers/malpensa-to-milan" element={<MalpensaToMilan />} />
              <Route path="/transfers/linate-to-milan" element={<LinateToMilan />} />
              
              {/* Ski Destination Specific Pages */}
              <Route path="/destinations/cortina" element={<Cortina />} />
              <Route path="/destinations/st-moritz" element={<StMoritz />} />
              <Route path="/destinations/courmayeur" element={<Courmayeur />} />
              <Route path="/destinations/livigno" element={<Livigno />} />
              <Route path="/destinations/cervinia" element={<Cervinia />} />
              <Route path="/destinations/courchevel" element={<Courchevel />} />

              {/* Fallback routes */}
              <Route path="/services/*" element={<Home />} />
              <Route path="/destinations/*" element={<SkiResortTransfers />} />
              <Route path="/tours/*" element={<PrivateTours />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
