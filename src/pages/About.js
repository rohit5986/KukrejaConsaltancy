import React from 'react';

function About() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(65,105,225,0.08),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">About Kukreja's Consultancy</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-12"></div>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            With years of experience in business consulting, we help organizations of all sizes achieve their goals 
            through strategic planning, expert guidance, and innovative solutions.
          </p>
          <p className="text-xl text-slate-700 mb-12 leading-relaxed">
            Our team of experienced consultants brings diverse expertise across multiple industries, ensuring that 
            your business receives tailored solutions that drive real results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-royal-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-royal-600/20">
              <div className="text-6xl font-bold bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-slate-600 text-lg group-hover:text-slate-700 transition-colors">Projects Completed</div>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-royal-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-royal-600/20">
              <div className="text-6xl font-bold bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-slate-600 text-lg group-hover:text-slate-700 transition-colors">Client Satisfaction</div>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-royal-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-royal-600/20">
              <div className="text-6xl font-bold bg-gradient-to-r from-royal-700 to-royal-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-slate-600 text-lg group-hover:text-slate-700 transition-colors">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
