
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="hero-glow" />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
