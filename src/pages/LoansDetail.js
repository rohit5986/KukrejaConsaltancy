import React from 'react';
import { Link } from 'react-router-dom';

function LoansDetail() {
  const loanDetails = [
    {
      title: 'Home Loan',
      icon: '🏠',
      description: 'Finance your dream home with flexible terms and competitive rates',
      features: [
        'Loan Amount: Up to 90% of property value',
        'Tenure: Up to 30 years',
        'Interest Rates: Highly competitive',
        'Processing Time: 7-15 days',
        'Minimal Documentation Required'
      ],
      benefits: [
        'Balance transfer facility available',
        'Top-up loans available',
        'Quick processing & doorstep service',
        'Flexible repayment options',
        'Expert guidance throughout process'
      ],
      eligibility: [
        'Salaried individuals with stable income',
        'Self-employed professionals',
        'Business owners with 2+ years experience'
      ]
    },
    {
      title: 'Personal Loan',
      icon: '💳',
      description: 'Quick unsecured loans for all your personal needs',
      features: [
        'Loan Amount: Up to 50 lakhs',
        'No Collateral Required',
        'Tenure: Up to 5 years',
        'Instant Disbursal: Same day approval',
        'Minimal Documentation'
      ],
      benefits: [
        'Quick disbursal within 24 hours',
        'No security required',
        'Flexible repayment terms',
        'Competitive interest rates',
        'Online application process'
      ],
      uses: [
        'Medical emergencies & healthcare',
        'Wedding expenses',
        'Travel & vacation',
        'Home renovation & interior',
        'Debt consolidation',
        'Education & skill development'
      ]
    },
    {
      title: 'Business Loan',
      icon: '💼',
      description: 'Grow your business with collateral-free funding',
      features: [
        'Unsecured Loans Available',
        'Fast Approval: 5-10 days',
        'Minimal Documentation',
        'Flexible Repayment Terms',
        'Competitive Interest Rates'
      ],
      benefits: [
        'No collateral required',
        'Quick approval process',
        'Flexible loan amounts',
        'Dedicated relationship manager',
        'Business consultation support'
      ],
      suitable_for: [
        'MSMEs & startups',
        'Proprietorship & Partnership',
        'Private Limited Companies',
        'Business expansion',
        'Inventory & machinery purchase'
      ]
    },
    {
      title: 'Vehicle Loan',
      icon: '🚗',
      description: 'Easy financing for new and used vehicles',
      features: [
        'Coverage: New & pre-owned vehicles',
        'Loan Amount: Up to 100% on-road funding',
        'Tenure: 1-7 years',
        'Flexible EMI Options',
        'Quick Approval: 2-5 days'
      ],
      benefits: [
        'Competitive interest rates',
        'Fast processing',
        'Hassle-free documentation',
        'Flexible payment schedules',
        'Doorstep service available'
      ]
    },
    {
      title: 'Education Loan',
      icon: '🎓',
      description: 'Invest in your future with education financing',
      features: [
        'Coverage: India & International studies',
        'Loan Amount: Up to 1 crore',
        'Moratorium Period: Available',
        'Long Repayment Tenure',
        'Competitive Interest Rates'
      ],
      covers: [
        'Tuition fees & admission charges',
        'Living expenses & accommodation',
        'Travel & visa expenses',
        'Books, equipment & materials',
        'Hostel & mess charges'
      ],
      benefits: [
        'Moratorium period up to 1 year',
        'Long repayment tenure',
        'Flexible disbursement schedule',
        'Co-applicant option',
        'Educational guidance support'
      ]
    },
    {
      title: 'Loan Against Property',
      icon: '🏢',
      description: 'Unlock the value of your property',
      features: [
        'Property Type: Residential & Commercial',
        'Loan Amount: High value loans',
        'Interest Rates: Lower than personal loans',
        'Tenure: 5-20 years',
        'Flexible Documentation'
      ],
      benefits: [
        'High loan amounts',
        'Lower interest rates',
        'Extended repayment period',
        'Retain property ownership',
        'Quick disbursal'
      ],
      uses: [
        'Business expansion',
        'Education funding',
        'Medical emergencies',
        'Debt consolidation',
        'Investment opportunities'
      ]
    }
  ];

  const whyChooseUs = [
    '100+ Lending Partners',
    'Best Rate Comparison',
    'Expert Financial Consultation',
    'Fast Processing',
    'Transparent Process',
    'End-to-End Support',
    'Minimal Documentation',
    'Flexible Terms'
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Loan Services</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Comprehensive loan solutions designed for every need - from personal goals to business growth. 
            We partner with 100+ trusted lenders to ensure you get the best possible terms.
          </p>
        </div>

        {/* Loan Details Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {loanDetails.map((loan, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/20 transition-all duration-500 border border-slate-200/20 hover:border-slate-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-slate-700 text-5xl transform group-hover:scale-110 transition-transform duration-300">{loan.icon}</div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-slate-700 group-hover:text-yellow-300 transition-colors">{loan.title}</h3>
                <p className="text-slate-800 mb-6 leading-relaxed">{loan.description}</p>
                
                {loan.features && (
                  <div className="mb-6">
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {loan.benefits && (
                  <div className="mb-6">
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Benefits:</h4>
                    <ul className="space-y-2">
                      {loan.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {loan.eligibility && (
                  <div>
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Eligibility:</h4>
                    <ul className="space-y-2">
                      {loan.eligibility.map((item, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {loan.uses && (
                  <div>
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Uses:</h4>
                    <ul className="space-y-2">
                      {loan.uses.map((use, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">•</span>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {loan.suitable_for && (
                  <div>
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Suitable For:</h4>
                    <ul className="space-y-2">
                      {loan.suitable_for.map((item, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {loan.covers && (
                  <div>
                    <h4 className="text-slate-700 font-semibold mb-3 text-lg">Covers:</h4>
                    <ul className="space-y-2">
                      {loan.covers.map((item, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-slate-700 mr-2">•</span>
                          <span>{item}</span>
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
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Why Choose Our Loan Services?</h3>
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

export default LoansDetail;
