import React from 'react';
import { Link } from 'react-router-dom';

function AIAutomationDetail() {
  const aiServices = [
    {
      title: 'Process Automation',
      icon: '⚙️',
      description: 'Automate repetitive business processes to save time and reduce errors',
      applications: [
        'Data entry and processing automation',
        'Invoice processing and payment reconciliation',
        'Email and document management',
        'Workflow automation',
        'Inventory management automation'
      ],
      benefits: [
        'Reduce manual workload by up to 80%',
        'Minimize human errors',
        'Increase operational efficiency',
        'Lower operational costs',
        'Faster processing times',
        '24/7 automated operations'
      ]
    },
    {
      title: 'Data Analytics & Insights',
      icon: '📊',
      description: 'Transform raw data into actionable business intelligence',
      applications: [
        'Customer behavior analysis',
        'Sales forecasting and trends',
        'Market analysis and opportunities',
        'Performance metrics tracking',
        'Predictive analytics'
      ],
      benefits: [
        'Data-driven decision making',
        'Identify growth opportunities',
        'Understand customer patterns',
        'Competitive advantage',
        'Real-time reporting',
        'Custom dashboards'
      ]
    },
    {
      title: 'Customer Service Automation',
      icon: '🤖',
      description: 'AI-powered chatbots and customer support solutions',
      applications: [
        'Intelligent chatbots for customer queries',
        'Automated email responses',
        'Voice-based customer support',
        'Multi-language support',
        'Lead qualification and nurturing'
      ],
      benefits: [
        'Instant customer response 24/7',
        'Reduce support staff workload',
        'Improve customer satisfaction',
        'Handle multiple queries simultaneously',
        'Cost-effective solution',
        'Scalable support'
      ]
    },
    {
      title: 'Document Processing',
      icon: '📄',
      description: 'Intelligent document recognition and processing',
      applications: [
        'OCR and document scanning',
        'Contract analysis and extraction',
        'Form field recognition',
        'Document classification',
        'Automated archiving'
      ],
      benefits: [
        'Faster document processing',
        'Accurate data extraction',
        'Reduced manual review time',
        'Better document organization',
        'Compliance and audit trail',
        'Searchable document repository'
      ]
    },
    {
      title: 'Business Intelligence',
      icon: '💡',
      description: 'Advanced analytics for strategic business insights',
      applications: [
        'Competitive intelligence',
        'Market trend analysis',
        'Customer segmentation',
        'Revenue optimization',
        'Risk assessment'
      ],
      benefits: [
        'Strategic decision support',
        'Market insights',
        'Risk mitigation',
        'Revenue growth',
        'Competitive positioning',
        'Scenario planning'
      ]
    },
    {
      title: 'Supply Chain Optimization',
      icon: '🚚',
      description: 'AI-driven supply chain and logistics management',
      applications: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Logistics cost reduction'
      ],
      benefits: [
        'Reduce inventory costs',
        'Optimize delivery routes',
        'Minimize supply chain disruptions',
        'Improve vendor relationships',
        'Faster delivery times',
        'Cost savings'
      ]
    },
    {
      title: 'Machine Learning Solutions',
      icon: '🧠',
      description: 'Custom ML models for specific business needs',
      applications: [
        'Recommendation systems',
        'Image and video recognition',
        'Natural language processing',
        'Anomaly detection',
        'Predictive modeling'
      ],
      benefits: [
        'Personalized customer experiences',
        'Automated quality control',
        'Sentiment analysis',
        'Early problem detection',
        'Accurate forecasting',
        'Continuous learning improvement'
      ]
    },
    {
      title: 'Robotic Process Automation (RPA)',
      icon: '🔄',
      description: 'Software robots to handle rule-based tasks',
      applications: [
        'Data migration and transfer',
        'Report generation',
        'Employee onboarding automation',
        'Compliance monitoring',
        'System integration'
      ],
      benefits: [
        'Error-free execution',
        'Scalable automation',
        'Quick deployment',
        'No coding required',
        'Integration with legacy systems',
        'ROI within months'
      ]
    }
  ];

  const industry_applications = [
    { sector: 'Finance', icon: '💰', use: 'Risk analysis, fraud detection, automated trading, compliance monitoring' },
    { sector: 'Healthcare', icon: '🏥', use: 'Patient data analysis, diagnosis support, appointment scheduling, medical imaging' },
    { sector: 'Retail', icon: '🛍️', use: 'Customer analytics, inventory management, personalized recommendations, dynamic pricing' },
    { sector: 'Manufacturing', icon: '🏭', use: 'Quality control, predictive maintenance, production optimization, supply chain' },
    { sector: 'Real Estate', icon: '🏢', use: 'Property valuation, lead scoring, market analysis, virtual tours' },
    { sector: 'E-commerce', icon: '🛒', use: 'Recommendation engine, chatbots, demand forecasting, fraud prevention' },
    { sector: 'Logistics', icon: '📦', use: 'Route optimization, warehouse automation, delivery tracking, fleet management' },
    { sector: 'Education', icon: '📚', use: 'Personalized learning, automated grading, student analytics, content generation' },
    { sector: 'Hospitality', icon: '🏨', use: 'Booking automation, guest personalization, revenue management, service optimization' }
  ];

  const implementation_process = [
    { step: '1', title: 'Assessment', description: 'Analyze current processes and identify automation opportunities' },
    { step: '2', title: 'Strategy', description: 'Develop customized AI/automation roadmap aligned with business goals' },
    { step: '3', title: 'Development', description: 'Build and train AI models and automation workflows' },
    { step: '4', title: 'Testing', description: 'Rigorous testing in controlled environment before deployment' },
    { step: '5', title: 'Deployment', description: 'Smooth rollout with minimal disruption to operations' },
    { step: '6', title: 'Optimization', description: 'Continuous monitoring and improvement of AI systems' }
  ];

  const tech_stack = [
    { name: 'Python & TensorFlow', use: 'Machine learning model development' },
    { name: 'Azure AI & AWS ML', use: 'Cloud-based AI services' },
    { name: 'UiPath & Automation Anywhere', use: 'RPA platforms' },
    { name: 'Power BI & Tableau', use: 'Data visualization' },
    { name: 'Natural Language API', use: 'Text and speech processing' },
    { name: 'Computer Vision', use: 'Image and video analysis' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,58,138,0.08),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-navy-700 hover:text-navy-800 transition-colors mb-6">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-navy-800 via-navy-700 to-blue-600 bg-clip-text text-transparent">AI & Automation Solutions</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-navy-700 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI and automation solutions. 
            Increase efficiency, reduce costs, and gain competitive advantage through intelligent automation.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {aiServices.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-navy-700/20 transition-all duration-500 border border-slate-200 hover:border-navy-600 transform hover:-translate-y-2">
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-navy-700 text-5xl transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-navy-800 group-hover:text-navy-700 transition-colors">{service.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                
                {service.applications && (
                  <div className="mb-6">
                    <h4 className="text-navy-700 font-semibold mb-3 text-lg">Applications:</h4>
                    <ul className="space-y-2">
                      {service.applications.map((app, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start">
                          <span className="text-navy-600 mr-2">•</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.benefits && (
                  <div>
                    <h4 className="text-navy-700 font-semibold mb-3 text-lg">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-slate-600 flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
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

        {/* Implementation Process */}
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy-800 via-navy-700 to-blue-600 bg-clip-text text-transparent">Implementation Process</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-navy-700 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-700 max-w-3xl mx-auto">Our proven methodology ensures smooth AI implementation with measurable results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {implementation_process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-navy-600 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-navy-700 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {item.step}
                    </div>
                    <h4 className="text-navy-800 font-bold text-xl">{item.title}</h4>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy-800 via-navy-700 to-blue-600 bg-clip-text text-transparent">Industry Applications</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-navy-700 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industry_applications.map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-navy-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-navy-800 font-semibold text-lg mb-3 group-hover:text-navy-700 transition-colors">{item.sector}</h4>
                <p className="text-slate-600 text-sm">{item.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-navy-900 to-slate-900 p-12 rounded-3xl shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Technology Stack</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-300 max-w-3xl mx-auto">Leveraging industry-leading tools and platforms for optimal results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tech_stack.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-blue-400 font-bold text-lg mb-2">{tech.name}</h4>
                <p className="text-slate-300 text-sm">{tech.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy-800 via-navy-700 to-blue-600 bg-clip-text text-transparent">Why Invest in AI Automation?</h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-navy-700 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-700 max-w-3xl mx-auto">Average results our clients experience within the first year</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200">
              <p className="text-6xl font-bold bg-gradient-to-r from-navy-700 to-blue-600 bg-clip-text text-transparent mb-2">40%</p>
              <p className="text-navy-800 font-semibold text-lg mb-2">Cost Reduction</p>
              <p className="text-slate-600 text-sm">Lower operational expenses through automation</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200">
              <p className="text-6xl font-bold bg-gradient-to-r from-navy-700 to-blue-600 bg-clip-text text-transparent mb-2">80%</p>
              <p className="text-navy-800 font-semibold text-lg mb-2">Time Savings</p>
              <p className="text-slate-600 text-sm">Faster process completion and execution</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200">
              <p className="text-6xl font-bold bg-gradient-to-r from-navy-700 to-blue-600 bg-clip-text text-transparent mb-2">5x</p>
              <p className="text-navy-800 font-semibold text-lg mb-2">Productivity Gain</p>
              <p className="text-slate-600 text-sm">Increased output capacity and efficiency</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="inline-block bg-gradient-to-r from-navy-700 to-blue-600 hover:from-blue-600 hover:to-navy-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-navy-700/30 text-lg">
              Schedule AI Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAutomationDetail;
