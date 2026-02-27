import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // WhatsApp number - update with your actual number
  const whatsappNumber = '919594795393'; // Format: country code + number without + or spaces
  const whatsappMessage = 'Hello! I would like to inquire about your services.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      title: 'Loans',
      icon: '💰',
      description: 'Home, Business, Personal & More',
      link: '/loans-detail',
      gradient: 'from-navy-700 to-blue-600'
    },
    {
      title: 'Real Estate',
      icon: '🏢',
      description: 'Residential & Commercial Properties',
      link: '/real-estate',
      gradient: 'from-blue-600 to-navy-700'
    },
    {
      title: 'Insurance',
      icon: '🛡️',
      description: 'Comprehensive Insurance Solutions',
      link: '/insurance-services',
      gradient: 'from-navy-700 to-blue-600'
    },
    {
      title: 'AI Automation',
      icon: '🤖',
      description: 'Smart Business Automation',
      link: '/ai-automation-detail',
      gradient: 'from-blue-600 to-navy-700'
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(30,58,138,0.08),transparent)]" />
      <div className="container mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-navy-800 via-navy-700 to-blue-600 bg-clip-text text-transparent leading-tight">
            Professional Business Consulting
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-navy-700 to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl mb-12 text-slate-700 font-light tracking-wide">Empowering Your Business Success</p>
          <Link to="/contact" className="inline-block bg-gradient-to-r from-navy-700 to-blue-600 hover:from-blue-600 hover:to-navy-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-navy-700/30 text-lg">
            Get Started Today
          </Link>
        </div>

        {/* Service Icons Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy-800 via-navy-700 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-navy-700 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-navy-700/20 transition-all duration-500 border border-slate-200 hover:border-navy-600 transform hover:-translate-y-3"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className={`mt-6 inline-flex items-center text-navy-700 font-semibold group-hover:text-blue-600 transition-colors`}>
                    Explore
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      

      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </a>
      <Link to="/contact" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-125 transition-transform duration-300">
        <svg className="w-6 h-6 text-navy-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </Link>
    </section>
  );
}

export default Home;
