import React from 'react';
import { Link } from 'react-router-dom';

function RealEstate() {
  const propertyTypes = [
    {
      title: 'Residential Properties',
      icon: '🏠',
      description: 'Find the perfect residential property tailored to your needs',
      route: '/residential-properties'
    },
    {
      title: 'Commercial Properties',
      icon: '🏢',
      description: 'Secure your business future with prime commercial spaces',
      route: '/commercial-properties'
    },
    {
      title: 'Agricultural Land',
      icon: '🌾',
      description: 'Diversify your portfolio with agricultural opportunities',
      route: '/agricultural-land'
    }
  ];

  const areas = [
    { name: 'Malad', emoji: '📍' },
    { name: 'Mira Bhayander', emoji: '📍' },
    { name: 'Mahalaxmi', emoji: '📍' },
    { name: 'Kandivali', emoji: '📍' },
    { name: 'Mumbai 3.0', emoji: '📍' },
    { name: 'Kharghar', emoji: '📍' },
    { name: 'Airoli', emoji: '📍' },
    { name: 'Bhiwandi', emoji: '📍' },
    { name: 'Kalyan', emoji: '📍' },
    { name: 'Ulhasnagar', emoji: '📍' },
    { name: 'Ambernath', emoji: '📍' },
    { name: 'Badlapur', emoji: '📍' },
    { name: 'Nashik', emoji: '📍' }
  ];

  const services = [
    { title: 'Comprehensive Analysis', description: 'Detailed market analysis of each property' },
    { title: 'Needs Assessment', description: 'Understanding your investment goals and requirements' },
    { title: 'Comparison Analysis', description: 'Side-by-side comparison of properties' },
    { title: 'ROI Calculation', description: 'Calculate returns on investment for each option' },
    { title: 'Legal Compliance', description: 'Ensure all documentation is complete and verified' },
    { title: 'Expert Guidance', description: 'Personalized advice from real estate specialists' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.05),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Real Estate Solutions</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Discover premium real estate opportunities across residential, commercial, and agricultural properties. 
            Our dedicated team provides comprehensive analysis and personalized guidance to match your investment goals.
          </p>
        </div>

        {/* Property Types */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {propertyTypes.map((type, index) => (
            <Link key={index} to={type.route} className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 border border-slate-200/20 hover:border-slate-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-slate-700 text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{type.icon}</div>
                <h3 className="text-3xl font-bold mb-3 text-slate-700 group-hover:text-yellow-300 transition-colors">{type.title}</h3>
                <p className="text-slate-700 mb-6">{type.description}</p>
                
                <div className="mt-6 flex items-center text-slate-700 font-semibold group-hover:text-yellow-300 transition-colors">
                  View Details <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Our Services */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200/30 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Our Real Estate Services</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-pastel-sky to-pastel-lavender p-6 rounded-xl border border-slate-200/20 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-300/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-600 to-royal-1000 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-black text-xl font-bold">{index + 1}</span>
                </div>
                <h4 className="text-slate-700 font-semibold text-lg mb-2 group-hover:text-yellow-300 transition-colors">{service.title}</h4>
                <p className="text-slate-700 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200/30 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Areas We Serve</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg">Our dedicated team provides expert analysis across these key locations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto mb-8">
            {areas.map((area, index) => (
              <div key={index} className="group bg-gradient-to-br from-pastel-sky to-pastel-lavender p-5 rounded-xl border border-slate-200/20 hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/20 flex flex-col items-center justify-center">
                <span className="text-slate-700 text-3xl mb-2">{area.emoji}</span>
                <span className="text-slate-700 group-hover:text-slate-700 transition-colors font-semibold text-center text-sm">
                  {area.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-br from-slate-50 via-white to-slate-100/50 p-8 rounded-xl border border-slate-200/20">
            <p className="text-slate-800 text-lg font-semibold mb-3">
              ✨ Expert Coverage Across Maharashtra
            </p>
            <p className="text-slate-700">
              From metropolitan hubs to emerging neighborhoods, our team has in-depth knowledge of property markets, 
              connectivity, infrastructure development, and investment potential in all these areas.
            </p>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-400/10 to-yellow-600/10 border border-slate-200/30 rounded-lg">
              <h4 className="text-slate-700 font-semibold mb-3 text-lg">Why Choose Us for Real Estate?</h4>
              <ul className="text-slate-800 space-y-2 text-left inline-block">
                <li>✓ We invest time to understand your unique needs</li>
                <li>✓ Detailed comparison analysis of available options</li>
                <li>✓ Expert guidance on ROI and investment potential</li>
                <li>✓ Complete market insights for informed decisions</li>
                <li>✓ Transparent process with legal compliance</li>
                <li>✓ Dedicated support throughout your property journey</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstate;
