
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-400">Join 10,000+ students learning faster</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Your Personal <span className="gradient-text">AI Mentor</span> <br />
          Available 24/7
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Master any subject with a tutor that adapts to your unique learning style. Lumina creates personalized paths for coding, math, languages, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
            Start Learning Now
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all">
            Watch Demo
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/learning-ai/1200/600" 
              alt="AI Dashboard Preview" 
              className="w-full h-auto opacity-90 object-cover"
            />
          </div>
          
          {/* Floating Card UI mockup */}
          <div className="hidden lg:block absolute -right-12 top-1/4 p-6 bg-gray-800/90 backdrop-blur border border-white/10 rounded-2xl shadow-2xl w-64 text-left animate-bounce-slow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                ✓
              </div>
              <div className="h-2 w-24 bg-gray-700 rounded"></div>
            </div>
            <p className="text-sm font-medium text-white mb-2">Subject Mastered!</p>
            <p className="text-xs text-gray-400">Quantum Physics Basic Principles completed with 98% score.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
