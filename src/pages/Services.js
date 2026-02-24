import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const loanServices = [
    {
      icon: '🏠',
      title: 'Home Loan',
      description: 'Buying your dream home? We help you get the most competitive interest rates with flexible repayment options.',
      features: [
        'Loan up to 90% of property value',
        'Tenure up to 30 years',
        'Balance transfer facility',
        'Top-up loan available',
        'Attractive interest rates',
        'Quick processing & doorstep service'
      ],
      eligible: ['Salaried individuals', 'Self-employed professionals', 'Business owners']
    },
    {
      icon: '🏢',
      title: 'Loan Against Property',
      description: 'Unlock the value of your residential or commercial property to meet personal or business needs.',
      features: [
        'High loan amount',
        'Lower interest rates than personal loans',
        'Flexible tenure up to 15–20 years',
        'Suitable for business expansion, education, medical needs'
      ]
    },
    {
      icon: '💼',
      title: 'Business Loan',
      description: 'Fuel your business growth with collateral-free funding options.',
      features: [
        'Unsecured loans available',
        'Fast approval',
        'Minimal documentation',
        'Flexible repayment terms',
        'Ideal for expansion, machinery purchase, inventory'
      ],
      eligible: ['MSMEs', 'Startups', 'Proprietorship, Partnership & Pvt Ltd companies']
    },
    {
      icon: '💳',
      title: 'Personal Loan',
      description: 'Meet your urgent financial needs without collateral.',
      features: [
        'Quick disbursal',
        'No security required',
        'Tenure up to 5 years'
      ],
      uses: ['Medical emergencies', 'Travel', 'Wedding', 'Home renovation', 'Debt consolidation']
    },
    {
      icon: '🚗',
      title: 'Vehicle Loan',
      description: 'Get easy financing for new vehicles.',
      features: [
        'Competitive interest rates',
        'Up to 100% on-road funding',
        'Flexible EMI options',
        'Fast approval process'
      ]
    },
    {
      icon: '🚘',
      title: 'Used Car Loan',
      description: 'Planning to buy a pre-owned car? We offer hassle-free used car financing.',
      features: [
        'Attractive rates',
        'Loan available for cars up to certain age limits',
        'Quick documentation',
        'Flexible repayment options'
      ]
    },
    {
      icon: '🎓',
      title: 'Education Loan',
      description: 'Invest in your future with education funding for studies in India or abroad.',
      features: [
        'Moratorium period available',
        'Long repayment tenure',
        'Competitive interest rates'
      ],
      coverage: ['Tuition fees', 'Living expenses', 'Travel expenses', 'Books & equipment']
    },
    {
      icon: '🏭',
      title: 'Working Capital Finance',
      description: 'Manage daily business operations smoothly.',
      features: [
        'Cash Credit',
        'Overdraft',
        'Bill Discounting',
        'Short-term business loans'
      ],
      note: 'Perfect for maintaining cash flow and managing operational expenses.'
    },
    {
      icon: '📈',
      title: 'Loan Against Shares',
      description: 'Get funds by pledging your shares, mutual funds, or securities.',
      features: [
        'Quick processing',
        'Lower interest than unsecured loans',
        'Retain ownership of investments',
        'Overdraft facility available'
      ]
    },
    {
      icon: '🛡️',
      title: 'Insurance Services',
      description: 'Protect yourself and your family with the right insurance coverage.',
      features: [
        'Life Insurance',
        'Health Insurance',
        'General Insurance',
        'Motor Insurance'
      ]
    }
  ];

  const whyChooseUs = [
    '100+ Lending Partners',
    'Best Rate Comparison',
    'Expert Financial Consultation',
    'Fast Processing',
    'Transparent Process',
    'End-to-End Support'
  ];

  // Popular lending partners to display on services page
  const popularPartners = [
    { name: 'SBI', logo: '🔵', color: 'from-blue-700 to-blue-900' },
    { name: 'HDFC Bank', logo: '🏛️', color: 'from-blue-600 to-blue-800' },
    { name: 'ICICI Bank', logo: '🏦', color: 'from-orange-500 to-orange-700' },
    { name: 'Axis Bank', logo: '🔺', color: 'from-purple-600 to-purple-800' },
    { name: 'Kotak Mahindra', logo: '🔴', color: 'from-red-600 to-red-800' },
    { name: 'PNB', logo: '🏦', color: 'from-yellow-600 to-yellow-800' },
    { name: 'Bank of Baroda', logo: '⭐', color: 'from-orange-600 to-orange-800' },
    { name: 'IDFC First Bank', logo: '🏢', color: 'from-red-600 to-red-800' },
    { name: 'Yes Bank', logo: '✓', color: 'from-red-600 to-red-800' },
    { name: 'IndusInd Bank', logo: '🏛️', color: 'from-red-600 to-red-800' },
    { name: 'Bajaj Finserv', logo: '⚡', color: 'from-blue-600 to-blue-800' },
    { name: 'Tata Capital', logo: '⚙️', color: 'from-blue-600 to-blue-800' },
    { name: 'IIFL', logo: '📊', color: 'from-orange-600 to-orange-800' },
    { name: 'L&T Financial Services', logo: '⚡', color: 'from-blue-600 to-blue-800' },
    { name: 'HSBC', logo: '🔺', color: 'from-red-600 to-red-800' },
    { name: 'Standard Chartered', logo: '💚', color: 'from-green-600 to-green-800' },
    { name: 'Federal Bank', logo: '🏦', color: 'from-yellow-600 to-yellow-800' },
    { name: 'RBL Bank', logo: '🔷', color: 'from-blue-600 to-blue-800' },
    { name: 'Bandhan Bank', logo: '🤝', color: 'from-pink-600 to-pink-800' },
    { name: 'Muthoot Finance', logo: '💰', color: 'from-red-600 to-red-800' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.08),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Our Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            At India's Largest Loan Distributor, we offer a wide range of financial solutions through 100+ trusted banking and NBFC partners. 
            We help individuals and businesses get the best loan offers with minimum documentation, faster approval, and expert guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            // Map each service to its dedicated page
            const serviceRoutes = {
              'Home Loan': '/home-loan',
              'Loan Against Property': '/loan-against-property',
              'Business Loan': '/business-loan',
              'Personal Loan': '/personal-loan',
              'Vehicle Loan': '/vehicle-loan',
              'Used Car Loan': '/used-car-loan',
              'Education Loan': '/education-loan',
              'Working Capital Finance': '/working-capital-finance',
              'Loan Against Shares': '/loan-against-shares',
              'Insurance Services': '/insurance-services'
            };
            
            const detailLink = serviceRoutes[service.title] || '/services';

            return (
            <Link key={index} to={detailLink} className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-slate-600 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-700 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mt-6 flex items-center text-slate-700 font-semibold group-hover:text-purple-600 transition-colors">
                  View Details <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Why Choose Us?</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center group">
                <span className="text-slate-600 text-2xl mr-4 group-hover:scale-125 transition-transform">✔</span>
                <span className="text-slate-800 text-lg group-hover:text-slate-700 transition-colors">{reason}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-xl text-slate-800 font-light">
              We ensure you get the right financial solution tailored to your needs.
            </p>
          </div>
        </div>

        {/* Our Lending Partners Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Popular Lending Partners</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg">Partnered with 100+ trusted banks and NBFCs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {popularPartners.map((partner, index) => (
              <div key={index} className="group bg-gradient-to-br from-pastel-sky to-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/50 flex items-center justify-center">
                <span className="text-slate-700 group-hover:text-slate-700 transition-colors text-sm text-center font-medium leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/all-partners" className="inline-block bg-gradient-to-r from-royal-700 to-royal-500 text-gray-800 font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 transform hover:scale-105">
              View All 100+ Partners
            </Link>
          </div>
          <div className="text-center mt-8 bg-white/50 p-6 rounded-xl border border-slate-200">
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

export default Services;
