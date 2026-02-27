import React from 'react';
import { Link } from 'react-router-dom';

function LoanAgainstProperty() {
  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.3),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link to="/loans-detail" className="inline-flex items-center text-slate-700 hover:text-purple-600 transition-colors mb-8">
          <span className="mr-2">←</span> Back to Loans
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-slate-600 text-7xl mb-6">🏢</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Loan Against Property</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Unlock the value of your residential or commercial property to meet personal or business needs.
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 mb-16">
          <h2 className="text-3xl font-bold text-slate-700 mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="text-slate-800 flex items-start">
              <span className="text-slate-600 mr-3 text-xl">✓</span>
              <span>High loan amount</span>
            </li>
            <li className="text-slate-800 flex items-start">
              <span className="text-slate-600 mr-3 text-xl">✓</span>
              <span>Lower interest rates than personal loans</span>
            </li>
            <li className="text-slate-800 flex items-start">
              <span className="text-slate-600 mr-3 text-xl">✓</span>
              <span>Flexible tenure up to 15–20 years</span>
            </li>
            <li className="text-slate-800 flex items-start">
              <span className="text-slate-600 mr-3 text-xl">✓</span>
              <span>Suitable for business expansion, education, medical needs</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 p-12 rounded-3xl border-2 border-slate-200 text-center">
          <h3 className="text-3xl font-bold text-slate-700 mb-4">Unlock Your Property's Value</h3>
          <p className="text-slate-800 mb-8 text-lg">Get competitive rates from 100+ trusted lenders</p>
          <Link to="/loan-inquiry" className="inline-block bg-gradient-to-r from-royal-700 to-royal-500 text-gray-800 font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoanAgainstProperty;
