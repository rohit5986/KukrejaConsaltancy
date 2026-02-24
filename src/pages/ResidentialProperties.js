import React from 'react';
import { Link } from 'react-router-dom';

function ResidentialProperties() {
  const subcategories = [
    {
      name: 'Investment Properties',
      details: 'Properties with best return on investment potential',
      icon: '📈'
    },
    {
      name: 'Rental Income',
      details: 'Residential properties generating consistent rental income',
      icon: '💰'
    },
    {
      name: 'Paying Guest Rental',
      details: 'High-yield properties suitable for PG accommodations',
      icon: '🏘️'
    },
    {
      name: 'Vacation Rental',
      details: 'Holiday homes with excellent tourist appeal',
      icon: '🏖️'
    },
    {
      name: 'Personal Living',
      details: 'Buy or rent for your own residential use',
      icon: '🏡'
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
          <div className="text-slate-700 text-7xl mb-6">🏠</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Residential Properties</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Find the perfect residential property tailored to your needs
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {subcategories.map((sub, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200/20 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/20">
              <div className="text-slate-700 text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{sub.icon}</div>
              <h3 className="text-2xl font-bold text-slate-700 mb-3 group-hover:text-yellow-300 transition-colors">{sub.name}</h3>
              <p className="text-slate-700 leading-relaxed">{sub.details}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200/30 shadow-2xl mb-16">
          <h2 className="text-3xl font-bold text-slate-700 mb-6 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">Market Analysis</h4>
                <p className="text-slate-700 text-sm">Comprehensive analysis of property values and trends</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">ROI Calculation</h4>
                <p className="text-slate-700 text-sm">Detailed return on investment projections</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">Location Assessment</h4>
                <p className="text-slate-700 text-sm">Expert insights on connectivity and infrastructure</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-slate-700 mr-3 text-xl">✓</span>
              <div>
                <h4 className="text-slate-700 font-semibold mb-1">Legal Verification</h4>
                <p className="text-slate-700 text-sm">Complete documentation and compliance check</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-400/10 to-yellow-600/10 p-12 rounded-3xl border-2 border-slate-200/30 text-center">
          <h3 className="text-3xl font-bold text-slate-700 mb-4">Find Your Dream Home</h3>
          <p className="text-slate-800 mb-8 text-lg">Let our experts help you find the perfect residential property</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-navy-600 to-royal-1000 text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResidentialProperties;
