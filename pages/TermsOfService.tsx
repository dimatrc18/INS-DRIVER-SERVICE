import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';
import SEO from '../components/SEO';

const TermsOfService: React.FC = () => {
  const localePath = useLocalePath();

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black min-h-screen pt-32 pb-20">
      <SEO
        title="Terms of Service | INS Driver Service Belgium"
        description="Conditions of carriage and service agreement for our luxury chauffeur services."
        canonical="/terms"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <div className="mb-12">
          <Link to={localePath('/')} className="inline-flex items-center text-gold hover:text-white transition-colors text-sm uppercase tracking-widest font-bold gap-2">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Effective Date: October 2026</p>
        </div>

        {/* Content */}
        <div className="text-zinc-400 font-light leading-relaxed">

          <p className="mb-8">
            These terms govern the use of <strong className="text-white">INS Driver Service Belgium</strong> services. By booking a transfer, you agree to these conditions.
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">1. Booking & Confirmation</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li>All bookings must be confirmed via email or WhatsApp.</li>
              <li>Quotes are valid for 24 hours unless otherwise stated.</li>
              <li>Vehicle availability is guaranteed only upon confirmation.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">2. Cancellations & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li>Cancellations &gt; 24 hours before pickup: 100% Refund.</li>
              <li>Cancellations &lt; 24 hours: Non-refundable deposit retained.</li>
              <li>Cancellations &lt; 4 hours: Full payment due.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">3. Passenger Conduct</h2>
            <p>
              Smoking (including e-cigarettes) is strictly prohibited. The chauffeur reserves the right to refuse service to any passenger behaving inappropriately or under the influence of alcohol/drugs, with no refund.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">4. Waiting Time</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li>Airport Transfers: 60 minutes free waiting time included.</li>
              <li>Other Pickups: 15 minutes free waiting time included.</li>
              <li>Extra waiting time is charged at €80/hour.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">5. Liability</h2>
            <p>
              INS Driver Service is not liable for delays caused by force majeure events (strikes, extreme weather, road closures). Our liability is limited to the cost of the transfer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">Legal Jurisdiction</h2>
            <p className="mb-6">These terms are governed by Belgian Law. Disputes shall be settled in the courts of Brussels.</p>
            <div className="bg-zinc-900 border border-white/10 p-8">
              <p className="text-xl font-bold text-white mb-2">INS Driver Service Belgium</p>
              <p><span className="text-gold font-bold uppercase text-xs tracking-wider mr-4">Phone</span> <a href="tel:+32483506356" className="hover:text-gold transition-colors">+32 483 506 356</a></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
