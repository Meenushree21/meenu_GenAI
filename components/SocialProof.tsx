
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 border-y border-white/5 overflow-hidden">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by students from</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
        <span className="text-2xl font-bold">Stanford</span>
        <span className="text-2xl font-bold">Harvard</span>
        <span className="text-2xl font-bold">MIT</span>
        <span className="text-2xl font-bold">Oxford</span>
        <span className="text-2xl font-bold">Google Learning</span>
      </div>
    </div>
  );
};

export default SocialProof;
