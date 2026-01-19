
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass-nav fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Lumina <span className="text-indigo-500">AI</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white px-4 py-2 font-medium transition-colors">
              Log in
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
              Sign up free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
