import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Covenant from './components/Covenant';
import Stats from './components/Stats';
import Witnesses from './components/Witnesses';
import CTA from './components/CTA';
import StatusBanner from './components/StatusBanner';

// Pages
import About from './pages/About';
import Mentorship from './pages/Mentorship';
import Apply from './pages/Apply';
import Protocol from './pages/Protocol';
import Testimonies from './pages/Testimonies';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import Confirmation from './pages/Confirmation';
import Payment from './pages/Payment';
import Manifesto from './pages/Manifesto';
import Resources from './pages/Resources';
import Journal from './pages/Journal';
import StatementOfFaith from './pages/StatementOfFaith';
import Dashboard from './pages/Dashboard';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Covenant />
      <Stats />
      <Witnesses />
      <CTA />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white font-display">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/mentorship" element={<Layout><Mentorship /></Layout>} />
        <Route path="/apply" element={<Layout><Apply /></Layout>} />
        <Route path="/protocol" element={<Layout><Protocol /></Layout>} />
        <Route path="/testimonies" element={<Layout><Testimonies /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/confirmation" element={<Layout><Confirmation /></Layout>} />
        <Route path="/payment" element={<Layout><Payment /></Layout>} />
        <Route path="/manifesto" element={<Layout><Manifesto /></Layout>} />
        <Route path="/resources" element={<Layout><Resources /></Layout>} />
        <Route path="/journal" element={<Layout><Journal /></Layout>} />
        <Route path="/faith" element={<Layout><StatementOfFaith /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
