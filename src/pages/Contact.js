import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || '/api';
      const response = await fetch(`${apiUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(data.message);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMessage(data.message);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,105,225,0.08),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl border border-slate-200 hover:border-royal-600 transition-all duration-300 hover:shadow-2xl hover:shadow-royal-600/20">
              <h3 className="text-3xl font-bold mb-8 text-royal-700">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <span className="text-royal-600 text-3xl mr-5 group-hover:scale-110 transition-transform" aria-label="email icon">📧</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-lg mb-1">Email</p>
                    <p className="text-slate-600 group-hover:text-slate-700 transition-colors">info@kukrejaconsultancy.com</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <span className="text-slate-600 text-3xl mr-5 group-hover:scale-110 transition-transform" aria-label="phone icon">📱</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-lg mb-1">Phone</p>
                    <p className="text-slate-700 group-hover:text-slate-800 transition-colors">+91 9923279976</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <span className="text-slate-600 text-3xl mr-5 group-hover:scale-110 transition-transform" aria-label="location pin icon">📍</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-lg mb-1">Address</p>
                    <p className="text-slate-700 group-hover:text-slate-800 transition-colors">Business District, Corporate Plaza</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <span className="text-slate-600 text-3xl mr-5 group-hover:scale-110 transition-transform" aria-label="clock icon">🕐</span>
                  <div>
                    <p className="font-semibold text-slate-700 text-lg mb-1">Business Hours</p>
                    <p className="text-slate-700 group-hover:text-slate-800 transition-colors">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-slate-50 p-10 rounded-2xl shadow-2xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-slate-300/50">
            <h3 className="text-3xl font-bold mb-8 text-slate-700">Send Us a Message</h3>
            
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
              <div>
                <label className="block text-slate-700 font-semibold mb-3 text-lg">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white/90 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
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
                  className="w-full px-5 py-3 bg-white/90 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-3 text-lg">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-white/90 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-3 text-lg">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-5 py-3 bg-white/90 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-royal-700 to-royal-500 hover:from-pink-400 hover:to-purple-400'} text-gray-800 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-slate-300/50 text-lg`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
