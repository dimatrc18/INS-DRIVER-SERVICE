import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLocalePath } from '../hooks/useLocalePath';
import SEO from '../components/SEO';

const PrivacyPolicy: React.FC = () => {
  const localePath = useLocalePath();

  return (
    <div className="bg-black text-white selection:bg-gold selection:text-black min-h-screen pt-32 pb-20">
      <SEO
        title="Privacy Policy | INS Driver Service Belgium"
        description="Our commitment to your privacy and data protection under GDPR regulations."
        canonical="/privacy"
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
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Last Updated: October 2026</p>
        </div>

        {/* Content */}
        <div className="text-zinc-400 font-light leading-relaxed">

          <p className="mb-8">
            At <strong className="text-white">INS Driver Service Belgium</strong>, we prioritize the privacy and security of our clients, adhering strictly to the General Data Protection Regulation (GDPR).
          </p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">1. Data Collection</h2>
            <p className="mb-4">We collect only necessary information to facilitate your transfer:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li>Contact details (Name, Phone, Email)</li>
              <li>Journey details (Pickup, Dropoff, Flight Numbers)</li>
              <li>Payment information (Processed securely via Stripe)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">2. Use of Data</h2>
            <p className="mb-4">Your data is used solely for:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li>Coordinating your chauffeur service</li>
              <li>Processing invoices</li>
              <li>Communicating legal obligations or service updates</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">3. Data Sharing</h2>
            <p>
              We do not sell your personal data. Information is shared only with your assigned chauffeur and dispatch team for operational purposes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">4. Your Rights</h2>
            <p className="mb-4">Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-gold">
              <li>Access your personal data</li>
              <li>Request correction or deletion ("Right to be Forgotten")</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4 font-sans uppercase tracking-wide">Contact Us</h2>
            <p className="mb-6">For privacy inquiries, please contact our Data Protection Officer.</p>
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

export default PrivacyPolicy;
