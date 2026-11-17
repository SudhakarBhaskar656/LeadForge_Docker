import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ServiceDetail.css';

export default function AppDevelopment() {
  return (
    <div className="page-wrapper fade-in">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-icon">📲</div>
          <h1>App Development</h1>
          <p>iOS & Android Mobile App Development</p>
        </div>
      </section>

      <section className="service-section">
        <div className="service-container">
          <div className="section-content">
            <h2>Custom Mobile Apps to Scale Your Business</h2>
            <p className="intro-text">
              In today's mobile-first world, a custom app can be a game-changer for your business. 
              Apps increase customer loyalty, enable 24/7 engagement, and create new revenue streams. 
              We develop native and cross-platform apps that solve real business problems.
            </p>

            <h3>App Types We Develop:</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h4>Booking & Scheduling Apps</h4>
                <p>Let customers book appointments directly. Reduce phone calls and support requests 
                   with automated scheduling.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎟️</div>
                <h4>Membership & Loyalty Apps</h4>
                <p>Create customer loyalty programs. Track points, rewards, and engagement in one app 
                   that brings customers back.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💳</div>
                <h4>Payment & E-Commerce Apps</h4>
                <p>Accept payments directly in your app. Streamline transactions and increase average order value 
                   with in-app purchases.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h4>Community & Social Apps</h4>
                <p>Build community around your brand. Engage customers, enable user-generated content, 
                   and foster loyalty.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h4>Business Management Apps</h4>
                <p>Manage your business on the go. Track jobs, invoices, inventory, and team performance 
                   from your phone.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔌</div>
                <h4>Marketplace Apps</h4>
                <p>Connect buyers and sellers. Build a platform where your customers interact and transact 
                   within your app.</p>
              </div>
            </div>

            <h3>Why Mobile Apps for Local Businesses?</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-number">1</span>
                <div className="benefit-content">
                  <h4>Always Available</h4>
                  <p>Your app is always one tap away on your customer's home screen. 
                     You're always top-of-mind for repeat business.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">2</span>
                <div className="benefit-content">
                  <h4>Direct Communication</h4>
                  <p>Push notifications let you send timely messages directly to your customers. 
                     Announce updates, special offers, and new features.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">3</span>
                <div className="benefit-content">
                  <h4>Customer Data</h4>
                  <p>Learn how customers use your app. Track behavior, preferences, and purchasing patterns 
                     to improve your business.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">4</span>
                <div className="benefit-content">
                  <h4>Competitive Advantage</h4>
                  <p>Most local businesses don't have apps. A professional app positions you as modern 
                     and customer-focused.</p>
                </div>
              </div>
            </div>

            <h3>Our App Development Process</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Discovery & Planning</h4>
                <p>Understand your business goals, target users, and must-have features. 
                   Define the app's core functionality.</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h4>Design & Prototyping</h4>
                <p>Create wireframes and interactive prototypes. Get your feedback before development 
                   so we build it right the first time.</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h4>Development</h4>
                <p>Build your app using modern technologies. iOS (Swift), Android (Kotlin), 
                   and cross-platform (React Native, Flutter).</p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h4>Testing & Deployment</h4>
                <p>Thorough testing on real devices. Submit to App Store and Google Play. 
                   Support you through the approval process.</p>
              </div>
            </div>

            <h3>Technology Stack</h3>
            <p>We use modern, proven technologies:</p>
            <ul className="industries-list">
              <li>iOS: Swift, SwiftUI</li>
              <li>Android: Kotlin, Jetpack</li>
              <li>Cross-Platform: React Native, Flutter</li>
              <li>Backend: Node.js, Python, Firebase</li>
              <li>Databases: PostgreSQL, MongoDB</li>
              <li>Payment: Stripe, PayPal, Apple Pay</li>
            </ul>

            <h3>App Store & Play Store Launch</h3>
            <p>We handle the entire submission process:</p>
            <ul className="features-list-detailed">
              <li>✓ App Store & Google Play developer account setup</li>
              <li>✓ App store optimization (keyword research, description, screenshots)</li>
              <li>✓ Submission and approval process management</li>
              <li>✓ App versioning and update strategy</li>
              <li>✓ Beta testing with TestFlight & Google Play Beta</li>
              <li>✓ Launch support and post-launch monitoring</li>
            </ul>
          </div>

          <div className="sidebar">
            <div className="pricing-box">
              <h3>Investment Levels</h3>
              <ul className="pricing-list">
                <li>
                  <strong>MVP:</strong> 
                  $15,000-30,000
                </li>
                <li>
                  <strong>Full App:</strong> 
                  $30,000-60,000
                </li>
                <li>
                  <strong>Enterprise:</strong> 
                  $60,000+
                </li>
              </ul>
              <p className="pricing-note">3-6 month development timeline</p>
            </div>

            <div className="case-study-box">
              <h4>Case Study</h4>
              <p className="case-study-metric">Fitness Studio</p>
              <p><strong>Result:</strong> 500 app downloads, 40% member retention increase</p>
              <p><strong>Value:</strong> $5000+/month in retained revenue</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-content">
          <h2>Ready to Build Your Custom App?</h2>
          <p>Let's discuss your app idea and how we can build it</p>
          <Link to="/contact" className="cta-button">Schedule Your App Consultation</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="related-container">
          <h3>Related Services</h3>
          <div className="related-grid">
            <Link to="/services/website-development" className="related-card">
              <div className="related-icon">🌐</div>
              <h4>Website Development</h4>
              <p>Complement your app with a professional website</p>
            </Link>
            <Link to="/services/google-ads" className="related-card">
              <div className="related-icon">🔍</div>
              <h4>Google Ads</h4>
              <p>Drive app downloads with targeted advertising</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
