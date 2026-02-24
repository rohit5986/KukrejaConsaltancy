import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-slate-200">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link to="/">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent tracking-wide cursor-pointer">
                KUKREJA'S CONSULTANCY
              </h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-700 hover:text-royal-600 transition-all duration-300 font-semibold relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-600 to-royal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/services" className="text-slate-700 hover:text-royal-600 transition-all duration-300 font-semibold relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-600 to-royal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/loan-inquiry" className="text-slate-700 hover:text-royal-600 transition-all duration-300 font-semibold relative group">
                Loan Inquiry
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-600 to-royal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/real-estate" className="text-slate-700 hover:text-royal-600 transition-all duration-300 font-semibold relative group">
                Real Estate
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-600 to-royal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-royal-600 transition-all duration-300 font-semibold relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-600 to-royal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/contact" className="text-slate-700 hover:text-royal-600 transition-all duration-300 font-semibold relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-600 to-royal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-gradient-to-r from-royal-900 via-royal-800 to-royal-900 text-white py-12 border-t border-royal-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl font-bold mb-3 bg-gradient-to-r from-royal-400 via-royal-300 to-royal-400 bg-clip-text text-transparent">KUKREJA'S CONSULTANCY</p>
          <p className="text-slate-300 mb-2">© 2026 All rights reserved.</p>
          <p className="text-slate-400 text-sm">Professional Business Consulting Services</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
