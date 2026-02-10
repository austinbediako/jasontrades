import React from 'react';
import StatusBanner from './components/StatusBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Covenant from './components/Covenant';
import Stats from './components/Stats';
import Witnesses from './components/Witnesses';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">
      <StatusBanner />
      <Navbar />
      <Hero />
      <Features />
      <Covenant />
      <Stats />
      <Witnesses />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
