import React, { useState } from 'react';

function LoanInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'Home Loan',
    loanAmount: '',
    employmentType: 'Salaried',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loanTypes = [
    'Home Loan',
    'Loan Against Property',
    'Business Loan',
    'Personal Loan',
    'Vehicle Loan',
    'Used Car Loan',
    'Education Loan',
    'Working Capital Finance',
    'Loan Against Shares'
  ];

  const employmentTypes = ['Salaried', 'Self-Employed', 'Business Owner'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const submitData = {
      ...formData,
      loanAmount: parseInt(formData.loanAmount)
    };

    console.log('Submitting loan inquiry:', submitData);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || '/api';
      const response = await fetch(`${apiUrl}/loan-inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setSuccessMessage(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          loanType: 'Home Loan',
          loanAmount: '',
          employmentType: 'Salaried',
          message: ''
        });
      } else {
        setErrorMessage(data.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,105,225,0.05),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Loan Inquiry</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-4"></div>
          <p className="text-slate-800 text-xl">Fill out the form below to get personalized loan options</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white to-slate-50 p-10 rounded-2xl shadow-2xl border-2 border-slate-200/30 hover:border-slate-200 transition-all duration-300 hover:shadow-slate-300/20">
            
            {successMessage && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p className="text-green-400 font-semibold">✓ {successMessage}</p>
              </div>
            )}
            
            {errorMessage && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                <p className="text-red-400 font-semibold">✗ {errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3 text-lg">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3 text-lg">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3 text-lg">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3 text-lg">Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 transition-all"
                  >
                    {loanTypes.map((type) => (
                      <option key={type} value={type} className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3 text-lg">Loan Amount (₹)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
                    placeholder="Enter loan amount"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3 text-lg">Employment Type</label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 transition-all"
                  >
                    {employmentTypes.map((type) => (
                      <option key={type} value={type} className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-3 text-lg">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-5 py-3 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 border border-slate-200/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all resize-none"
                  placeholder="Tell us more about your loan requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-navy-600 to-royal-1000 hover:from-yellow-600 hover:to-purple-400'} text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-slate-300/50 text-lg`}
              >
                {loading ? 'Submitting...' : 'Submit Loan Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanInquiry;
