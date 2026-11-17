import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Results from './pages/Results';
import SocialMediaAds from './pages/services/SocialMediaAds';
import GoogleAds from './pages/services/GoogleAds';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import SEOServices from './pages/services/SEOServices';
import EmailSmsAutomation from './pages/services/EmailSmsAutomation';
import './App.css';
import './styles/ServiceDetail.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/social-media-ads" element={<SocialMediaAds />} />
          <Route path="/services/google-ads" element={<GoogleAds />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/seo-services" element={<SEOServices />} />
          <Route path="/services/email-sms-automation" element={<EmailSmsAutomation />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
