import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand-section">
          <div className="footer-brand">
            <h3 className="brand-name">LeadForge</h3>
            <p className="footer-tagline">Digital Marketing & Growth Agency</p>
          </div>
          <p className="footer-description">
            We help local businesses generate qualified leads and scale their operations through proven digital marketing strategies. Transform your vision into results.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/social-media-ads">Social Media Ads</Link></li>
            <li><Link to="/services/google-ads">Google Ads</Link></li>
            <li><Link to="/services/website-development">Website</Link></li>
            <li><Link to="/services/app-development">App Dev</Link></li>
            <li><Link to="/services/seo-services">SEO Services</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Get In Touch</h4>
          <div className="footer-contact-box">
            <p className="footer-contact">
              <span className="contact-label">Email</span>
              <a href="mailto:leadforgesolution@gmail.com">leadforgesolution.com</a>
            </p>
            <p className="footer-contact">
              <span className="contact-label">Phone</span>
              <a href="tel:+919235072904">+91 923 507 2904</a>
            </p>
            <p className="footer-contact">
              <span className="contact-label">Hours</span>
              <span>Mon - Fri: 9 AM - 6 PM</span>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} LeadForge. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
