import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
<<<<<<< HEAD
import { ToastProvider } from './context/ToastContext';
import MarketingLayout from './layouts/MarketingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Marketing Components
=======
import { DataProvider } from './context/DataContext';
import Layout from './components/Layout';
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
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
import Dashboard from './pages/Dashboard';
<<<<<<< HEAD
import NotFound from './pages/NotFound';
=======
import StatementOfFaith from './pages/StatementOfFaith';
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05

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
<<<<<<< HEAD
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
=======
      <DataProvider>
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
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/faith" element={<Layout><StatementOfFaith /></Layout>} />
          </Routes>
        </div>
      </DataProvider>
>>>>>>> f824590fd4674c779ae5075c94a38746801a0e05
    </AuthProvider>
  );
}

export default App;
