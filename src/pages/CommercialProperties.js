import React from 'react';
import { Link } from 'react-router-dom';

function CommercialProperties() {
  const subcategories = [
    {
      name: 'Personal Business Use',
      details: 'Commercial spaces for your own business operations',
      icon: '🏪'
    },
    {
      name: 'Rental Income',
      details: 'Commercial properties with excellent connectivity and infrastructure',
      icon: '💼'
    },
    {
      name: 'Modern Infrastructure',
      details: 'State-of-the-art facilities with best connectivity',
      icon: '🏗️'
    },
    {
      name: 'Lease Options',
      details: 'Flexible leasing arrangements for businesses',
      icon: '📋'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.05),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link to="/real-estate" className="inline-flex items-center text-slate-700 hover:text-yellow-300 transition-colors mb-8">
          <span className="mr-2">←</span> Back to Real Estate
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-slate-700 text-7xl mb-6">🏢</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Commercial Properties</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Secure your business future with prime commercial spaces
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {subcategories.map((sub, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200/20 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/20">
              <div className="text-slate-700 text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{sub.icon}</div>
              <h3 className="text-2xl font-bold text-slate-700 mb-3 group-hover:text-yellow-300 transition-colors">{sub.name}</h3>
              <p className="text-slate-700 leading-relaxed">{sub.details}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200/30 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-slate-700 mb-6 text-center">Why Choose Commercial Properties?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">High Returns</h4>
                <p className="text-slate-700 text-sm">Better rental yields compared to residential properties</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">Strategic Locations</h4>
                <p className="text-slate-700 text-sm">Prime business districts with excellent connectivity</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">Long-term Leases</h4>
                <p className="text-slate-700 text-sm">Stable income with long-term commercial tenants</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">Business Growth</h4>
                <p className="text-slate-700 text-sm">Expand your business with owned commercial space</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-400/10 to-yellow-600/10 p-12 rounded-3xl border-2 border-slate-200/30 text-center">
          <h3 className="text-3xl font-bold text-slate-700 mb-4">Invest in Your Business Future</h3>
          <p className="text-slate-800 mb-8 text-lg">Explore prime commercial properties with our expert guidance</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-navy-600 to-royal-1000 text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommercialProperties;
