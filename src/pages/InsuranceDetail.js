import React from 'react';
import { Link } from 'react-router-dom';

function InsuranceDetail() {
  const insuranceProducts = [
    {
      title: 'Life Insurance',
      icon: '💚',
      description: 'Protect your family\'s financial future with comprehensive life coverage',
      types: [
        { name: 'Term Life Insurance', desc: 'Affordable protection for a specific period' },
        { name: 'Whole Life Insurance', desc: 'Lifelong coverage with cash value accumulation' },
        { name: 'Endowment Plans', desc: 'Combination of insurance and investment' },
        { name: 'Money-Back Plans', desc: 'Regular payouts during policy tenure' },
        { name: 'Child Plans', desc: 'Secure your child\'s future education and marriage' }
      ],
      benefits: [
        'Income replacement for family',
        'Debt settlement coverage',
        'Education funding for children',
        'Tax benefits under Section 80C',
        'Flexible premium payment options',
        'Loan against policy available'
      ]
    },
    {
      title: 'Health Insurance',
      icon: '🏥',
      description: 'Comprehensive health coverage for you and your family',
      types: [
        { name: 'Individual Health Plans', desc: 'Coverage for self and family members' },
        { name: 'Family Floater Plans', desc: 'Shared coverage for entire family' },
        { name: 'Senior Citizen Plans', desc: 'Specialized coverage for elderly' },
        { name: 'Critical Illness Insurance', desc: 'Lump sum benefit for serious conditions' },
        { name: 'Maternity Coverage', desc: 'Support for pregnancy and childbirth' }
      ],
      benefits: [
        'Cashless hospitalization',
        'Day care procedures covered',
        'No claim bonus',
        'Pre and post hospitalization',
        'Ambulance coverage',
        'Preventive care benefits',
        'Tax deduction available'
      ]
    },
    {
      title: 'General Insurance',
      icon: '🛡️',
      description: 'Protect your assets and property from unforeseen risks',
      types: [
        { name: 'Home Insurance', desc: 'Coverage for building and contents' },
        { name: 'Travel Insurance', desc: 'Protection during domestic and international travel' },
        { name: 'Pet Insurance', desc: 'Veterinary expense coverage' },
        { name: 'Personal Accident', desc: 'Coverage against accidental injuries' },
        { name: 'Liability Insurance', desc: 'Protection against third-party claims' }
      ],
      benefits: [
        'Replacement cost coverage',
        'Quick claim settlement',
        'Cashless claims processing',
        'Additional coverage riders',
        'Worldwide coverage options',
        '24/7 claims support'
      ]
    },
    {
      title: 'Motor Insurance',
      icon: '🚗',
      description: 'Mandatory and comprehensive coverage for your vehicles',
      types: [
        { name: 'Third Party Liability', desc: 'Legally mandatory coverage' },
        { name: 'Comprehensive Coverage', desc: 'Full protection against all risks' },
        { name: 'Own Damage Coverage', desc: 'Protection for your vehicle damage' },
        { name: 'Cashless Repairs', desc: 'Network of authorized repair centers' },
        { name: 'Add-on Coverage', desc: 'Zero depreciation and roadside assistance' }
      ],
      benefits: [
        'Cashless claims at network centers',
        'Quick claim settlement',
        'Zero depreciation option',
        'Roadside assistance 24/7',
        'Accident forgiveness',
        'Flexible deductible options',
        'Safe driving discounts'
      ]
    }
  ];

  const whyChooseUs = [
    '50+ Insurance Partners',
    'Best Premium Comparison',
    'Expert Insurance Consultation',
    'Fast Claim Processing',
    'Transparent Policy Terms',
    'Complete Coverage Options',
    'Dedicated Support Team',
    'Customized Plans'
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.05),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-slate-700 hover:text-yellow-300 transition-colors mb-6">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Insurance Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Comprehensive insurance solutions to protect you, your family, and your assets. 
            We offer specialized plans across life, health, general, and motor insurance.
          </p>
        </div>

        {/* Insurance Products Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {insuranceProducts.map((insurance, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 border border-slate-200/20 hover:border-slate-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-slate-700 text-5xl transform group-hover:scale-110 transition-transform duration-300">{insurance.icon}</div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-slate-700 group-hover:text-yellow-300 transition-colors">{insurance.title}</h3>
                <p className="text-slate-800 mb-6 leading-relaxed">{insurance.description}</p>
                
                {insurance.types && (
                  <div className="mb-6">
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Available Plans:</h4>
                    <div className="space-y-3">
                      {insurance.types.map((type, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-slate-50 via-white to-slate-100/50 p-3 rounded-lg border border-slate-200/10 hover:border-slate-200/50 transition-all">
                          <p className="text-slate-700 font-semibold">{type.name}</p>
                          <p className="text-slate-700 text-sm mt-1">{type.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {insurance.benefits && (
                  <div>
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {insurance.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200/30 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Why Choose Our Insurance Services?</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center group">
                <span className="text-slate-700 text-2xl mr-3 group-hover:scale-125 transition-transform">✔</span>
                <span className="text-slate-800 group-hover:text-slate-700 transition-colors">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsuranceDetail;
