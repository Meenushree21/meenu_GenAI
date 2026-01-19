
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto relative bg-indigo-600 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to accelerate your growth?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of learners and experience the future of education. Start your 7-day free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
              Get Started for Free
            </button>
            <button className="bg-indigo-700/50 text-white border border-indigo-400/30 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700/70 transition-colors">
              View Plans
            </button>
          </div>
          <p className="mt-8 text-indigo-200 text-sm">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
