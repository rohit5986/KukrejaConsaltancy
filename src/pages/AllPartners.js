import React from 'react';
import { Link } from 'react-router-dom';

function AllPartners() {
  const allLendingPartners = [
    { name: 'Bank of India', logo: '🏦', color: 'from-royal-600 to-royal-800' },
    { name: 'Saraswat Bank', logo: '🏛️', color: 'from-red-600 to-red-800' },
    { name: 'Axis Bank', logo: '🔺', color: 'from-purple-600 to-purple-800' },
    { name: 'IDBI Bank', logo: '🏢', color: 'from-green-600 to-green-800' },
    { name: 'Bank of Baroda', logo: '⭐', color: 'from-orange-600 to-orange-800' },
    { name: 'SBI', logo: '🔵', color: 'from-blue-700 to-blue-900' },
    { name: 'South Indian Bank', logo: '🏦', color: 'from-pink-600 to-pink-800' },
    { name: 'Poonawalla Fincorp', logo: '💼', color: 'from-yellow-600 to-yellow-800' },
    { name: 'L&T Financial Services', logo: '⚡', color: 'from-royal-600 to-royal-800' },
    { name: 'Jio Financial Services', logo: '📱', color: 'from-royal-500 to-blue-700' },
    { name: 'ICICI Bank', logo: '🏦', color: 'from-orange-500 to-orange-700' },
    { name: 'HDFC Bank', logo: '🏛️', color: 'from-royal-600 to-royal-800' },
    { name: 'DCB Bank', logo: '💎', color: 'from-green-600 to-green-800' },
    { name: 'Kotak Mahindra', logo: '🔴', color: 'from-red-600 to-red-800' },
    { name: 'PNB', logo: '🏦', color: 'from-yellow-600 to-yellow-800' },
    { name: 'RBL Bank', logo: '🔷', color: 'from-royal-600 to-royal-800' },
    { name: 'IDFC First Bank', logo: '🏢', color: 'from-red-600 to-red-800' },
    { name: 'Profectus Capital', logo: '📊', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Indiabulls Housing Finance', logo: '🏠', color: 'from-royal-600 to-royal-800' },
    { name: 'LendingKart', logo: '💳', color: 'from-orange-600 to-orange-800' },
    { name: 'Yes Bank', logo: '✓', color: 'from-red-600 to-red-800' },
    { name: 'Federal Bank', logo: '🏦', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Bandhan Bank', logo: '🤝', color: 'from-pink-600 to-pink-800' },
    { name: 'Deutsche Bank', logo: '🇩🇪', color: 'from-royal-600 to-royal-800' },
    { name: 'DBS Bank', logo: '🔶', color: 'from-red-600 to-red-800' },
    { name: 'Mahindra Finance', logo: '🚗', color: 'from-red-600 to-red-800' },
    { name: 'NeoGrowth', logo: '📈', color: 'from-royal-600 to-royal-800' },
    { name: 'Indian Bank', logo: '🏦', color: 'from-yellow-600 to-yellow-800' },
    { name: 'IndusInd Bank', logo: '🏛️', color: 'from-red-600 to-red-800' },
    { name: 'HSBC', logo: '🔺', color: 'from-red-600 to-red-800' },
    { name: 'Aadhar Housing Finance', logo: '🏠', color: 'from-orange-600 to-orange-800' },
    { name: 'AU Small Finance Bank', logo: '💰', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Standard Chartered', logo: '💚', color: 'from-green-600 to-green-800' },
    { name: 'HDFC Credila', logo: '🎓', color: 'from-royal-600 to-royal-800' },
    { name: 'ICICI Lombard', logo: '🛡️', color: 'from-orange-600 to-orange-800' },
    { name: 'Tata Capital', logo: '⚙️', color: 'from-royal-600 to-royal-800' },
    { name: 'Jana Small Finance Bank', logo: '🏦', color: 'from-pink-600 to-pink-800' },
    { name: 'Chola', logo: '🔧', color: 'from-red-600 to-red-800' },
    { name: 'APRI Global Capital', logo: '🌐', color: 'from-royal-600 to-royal-800' },
    { name: 'ICICI Home Finance', logo: '🏠', color: 'from-orange-600 to-orange-800' },
    { name: 'FedBank', logo: '🏛️', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Hero FinCorp', logo: '🏍️', color: 'from-royal-600 to-royal-800' },
    { name: 'Anandprathi Rural Finance', logo: '🌾', color: 'from-green-600 to-green-800' },
    { name: 'Shriram Life Insurance', logo: '🛡️', color: 'from-orange-600 to-orange-800' },
    { name: 'Housing Finance', logo: '🏘️', color: 'from-royal-600 to-royal-800' },
    { name: 'PNB Housing', logo: '🏠', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Shriram Finance', logo: '💼', color: 'from-orange-600 to-orange-800' },
    { name: 'Manba Finance', logo: '💰', color: 'from-royal-600 to-royal-800' },
    { name: 'IIFL', logo: '📊', color: 'from-orange-600 to-orange-800' },
    { name: 'Bajaj Finserv', logo: '⚡', color: 'from-royal-600 to-royal-800' },
    { name: 'Tata Housing', logo: '🏘️', color: 'from-royal-600 to-royal-800' },
    { name: 'HDB Financial Services', logo: '💳', color: 'from-red-600 to-red-800' },
    { name: 'Finnable', logo: '💡', color: 'from-orange-600 to-orange-800' },
    { name: 'Central Bank of India', logo: '🏦', color: 'from-royal-600 to-royal-800' },
    { name: 'Kotak Mahindra Prime', logo: '🔴', color: 'from-red-600 to-red-800' },
    { name: 'Shinhan Bank', logo: '🇰🇷', color: 'from-royal-600 to-royal-800' },
    { name: 'Indiabulls Finance', logo: '🐂', color: 'from-royal-600 to-royal-800' },
    { name: 'Ambit Finvest', logo: '💼', color: 'from-purple-600 to-purple-800' },
    { name: 'SVC Bank', logo: '🏛️', color: 'from-green-600 to-green-800' },
    { name: 'Muthoot Finance', logo: '💰', color: 'from-red-600 to-red-800' },
    { name: 'Aditya Birla Capital', logo: '🏢', color: 'from-royal-600 to-royal-800' },
    { name: 'Ujjivan Small Finance Bank', logo: '🌟', color: 'from-orange-600 to-orange-800' },
    { name: 'Piramal Capital & Housing Finance', logo: '🏠', color: 'from-royal-600 to-royal-800' },
    { name: 'HeroHousing Finance', logo: '🏘️', color: 'from-royal-600 to-royal-800' },
    { name: 'ICFL Home Loans', logo: '🏠', color: 'from-orange-600 to-orange-800' },
    { name: 'ARKA', logo: '🚀', color: 'from-royal-600 to-royal-800' },
    { name: 'Clix Capital', logo: '💳', color: 'from-royal-600 to-royal-800' },
    { name: 'Bharti AXA', logo: '🛡️', color: 'from-red-600 to-red-800' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.05),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center text-slate-700 hover:text-yellow-300 transition-colors mb-8">
          <span className="mr-2">←</span> Back to Services
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">All Our Lending Partners</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Partnered with 100+ trusted banks and NBFCs to bring you the best financial solutions
          </p>
        </div>

        {/* All Partners Grid */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200/30 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {allLendingPartners.map((partner, index) => (
              <div key={index} className="group bg-gradient-to-br from-pastel-sky to-pastel-lavender p-5 rounded-xl border border-slate-200/20 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/20 flex items-center justify-center">
                <span className="text-slate-700 group-hover:text-slate-700 transition-colors text-sm text-center font-medium leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 p-6 rounded-xl border border-slate-200/20">
            <p className="text-slate-800 text-base font-semibold mb-2">
              ✨ 100+ Financial Institutions at Your Service
            </p>
            <p className="text-slate-700 text-sm italic">
              And many more trusted banking and NBFC partners to provide you the best financial solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPartners;
