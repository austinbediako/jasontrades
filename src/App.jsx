import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import MarketingLayout from './layouts/MarketingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Marketing Components
import Hero from './components/Hero';
import Features from './components/Features';
import Covenant from './components/Covenant';
import Stats from './components/Stats';
import Witnesses from './components/Witnesses';
import CTA from './components/CTA';

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
    <AuthProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background-dark text-white font-display">
          <Routes>
            {/* Public Routes - Marketing Layout */}
            <Route path="/" element={<MarketingLayout><Home /></MarketingLayout>} />
            <Route path="/about" element={<MarketingLayout><About /></MarketingLayout>} />
            <Route path="/apply" element={<MarketingLayout><Apply /></MarketingLayout>} />
            <Route path="/testimonies" element={<MarketingLayout><Testimonies /></MarketingLayout>} />
            <Route path="/login" element={<MarketingLayout><Login /></MarketingLayout>} />
            <Route path="/contact" element={<MarketingLayout><Contact /></MarketingLayout>} />
            <Route path="/privacy" element={<MarketingLayout><Privacy /></MarketingLayout>} />
            <Route path="/faq" element={<MarketingLayout><FAQ /></MarketingLayout>} />
            <Route path="/confirmation" element={<MarketingLayout><Confirmation /></MarketingLayout>} />
            <Route path="/payment" element={<MarketingLayout><Payment /></MarketingLayout>} />
            <Route path="/manifesto" element={<MarketingLayout><Manifesto /></MarketingLayout>} />
            <Route path="/faith" element={<MarketingLayout><StatementOfFaith /></MarketingLayout>} />

            {/* Protected Application Routes - Dashboard Layout */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout><Dashboard /></DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/journal"
              element={
                <ProtectedRoute>
                  <DashboardLayout><Journal /></DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/mentorship"
              element={
                <ProtectedRoute>
                  <DashboardLayout><Mentorship /></DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/resources"
              element={
                <ProtectedRoute>
                  <DashboardLayout><Resources /></DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/protocol"
              element={
                <ProtectedRoute>
                  <DashboardLayout><Protocol /></DashboardLayout>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
