
import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LocaleWrapper from './components/LocaleWrapper';
import Home from './pages/Home';

import Booking from './pages/Booking';
import AirportTransfers from './pages/AirportTransfers';
import SkiResortTransfers from './pages/SkiResortTransfers';
import MajorEvents from './pages/MajorEvents';
import PrivateTours from './pages/PrivateTours';
import Fleet from './pages/Fleet';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// New Tour Pages


// New Event Pages


// Dynamic Template for Ski Resorts
import SkiResortLandingTemplate from './components/SkiResortLandingTemplate';

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
      <div className="min-h-screen bg-white flex flex-col selection:bg-gold selection:text-zinc-900">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="h-screen w-screen flex items-center justify-center bg-white">
              <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              {/* Redirect root to default locale */}
              <Route path="/" element={<Navigate to="/en" replace />} />

              {/* Localized Routes Wrapper */}
              <Route path="/:locale" element={<LocaleWrapper />}>
                <Route index element={<Home />} />

                <Route path="booking" element={<Booking />} />
                <Route path="fleet" element={<Fleet />} />

                {/* Specific Service Pages */}
                <Route path="services/airport-transfers" element={<AirportTransfers />} />
                <Route path="services/ski-resorts" element={<SkiResortTransfers />} />
                <Route path="services/major-events" element={<MajorEvents />} />
                <Route path="services/private-tours" element={<PrivateTours />} />

                {/* Private Tour Landing Pages */}


                {/* Major Event Landing Pages */}


                {/* Dynamic Ski Destination Pages */}
                <Route path="destinations/:slug" element={<SkiResortLandingTemplate />} />

                {/* Fallback routes within locale */}
                <Route path="services/*" element={<Home />} />
                <Route path="destinations/*" element={<SkiResortTransfers />} />
                <Route path="tours/*" element={<PrivateTours />} />
                <Route path="privacy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsOfService />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
