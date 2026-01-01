import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Benefits from './pages/Benefits';
import Projects from './pages/Projects';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

// Admin Pages
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminEnquiries from './admin/AdminEnquiries';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ChatBot from './components/ChatBot';

// Google Analytics
import { useLocation } from 'react-router-dom';

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleAnalytics />
        <Header />
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />

            {/* Admin Pages */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/enquiries" element={<AdminEnquiries />} />
          </Routes>
          <Footer />
          <WhatsAppWidget />
          <ChatBot />
        </Router>
      </HelmetProvider>
  );
}

export default App;
