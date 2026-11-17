import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ServiceDetail.css';

export default function WebsiteDevelopment() {
  return (
    <div className="page-wrapper fade-in">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-icon">🌐</div>
          <h1>Website Development</h1>
          <p>Conversion-Focused Web Design & Development</p>
        </div>
      </section>

      <section className="service-section">
        <div className="service-container">
          <div className="section-content">
            <h2>Professional Websites That Convert Visitors into Customers</h2>
            <p className="intro-text">
              Your website is your digital storefront. It's where prospects learn about your business, 
              build trust, and decide whether to call or submit a form. 
              A poorly designed website loses you leads. A professionally designed one converts traffic into revenue. 
              We build websites specifically engineered to convert.
            </p>

            <h3>Our Website Development Service Includes:</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Professional Design</h4>
                <p>Modern, clean design that reflects your brand and builds trust. 
                   Designed to guide visitors toward your call-to-action.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h4>Mobile-First Development</h4>
                <p>Over 60% of traffic is mobile. Your website loads fast and looks perfect 
                   on phones, tablets, and desktops.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h4>Lightning-Fast Performance</h4>
                <p>Pages load in under 2 seconds. Fast-loading sites rank better on Google 
                   and convert more visitors into leads.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔍</div>
                <h4>SEO Optimization</h4>
                <p>Built for Google ranking. Proper structure, fast speeds, mobile optimization, 
                   and SEO best practices included.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h4>Lead Capture Forms</h4>
                <p>Contact forms, quote request forms, and appointment scheduling integrated. 
                   Capture leads 24/7 without your involvement.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h4>Analytics & Tracking</h4>
                <p>Google Analytics, conversion tracking, and call tracking integrated. 
                   Know exactly where your leads come from.</p>
              </div>
            </div>

            <h3>Website Requirements for Local Businesses</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-number">1</span>
                <div className="benefit-content">
                  <h4>Trust & Credibility</h4>
                  <p>Professional design, testimonials, service photos, and certifications 
                     build trust with potential customers before they call.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">2</span>
                <div className="benefit-content">
                  <h4>Clear Call-to-Action</h4>
                  <p>Every page guides visitors to call, email, or request a quote. 
                     No confusion about how to contact you.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">3</span>
                <div className="benefit-content">
                  <h4>Service Area Targeting</h4>
                  <p>Geo-targeted pages for cities you serve. Shows customers exactly 
                     which areas you operate in.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">4</span>
                <div className="benefit-content">
                  <h4>Mobile Optimization</h4>
                  <p>Most visitors come from mobile. Your site must be fast and easy to navigate 
                     on phones and tablets.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">5</span>
                <div className="benefit-content">
                  <h4>Lead Capture 24/7</h4>
                  <p>Contact forms and appointment scheduling work even when you're busy on jobs. 
                     Never miss a lead.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">6</span>
                <div className="benefit-content">
                  <h4>Google Search Visibility</h4>
                  <p>SEO-optimized from day one. Better ranking on Google Search 
                     means more organic traffic without ads.</p>
                </div>
              </div>
            </div>

            <h3>What's Included in Your Website</h3>
            <ul className="features-list-detailed">
              <li>✓ Professional homepage with value proposition</li>
              <li>✓ Services/product pages explaining each offering</li>
              <li>✓ About page telling your company story</li>
              <li>✓ Testimonials/reviews section with social proof</li>
              <li>✓ Before & after gallery (service-based)</li>
              <li>✓ Contact form with email notifications</li>
              <li>✓ Contact information prominently displayed</li>
              <li>✓ Mobile optimization for all devices</li>
              <li>✓ Fast page loading (under 2 seconds)</li>
              <li>✓ Google Analytics integration</li>
              <li>✓ Google Search Console setup</li>
              <li>✓ SEO optimization for local keywords</li>
              <li>✓ SSL certificate (secure HTTPS)</li>
              <li>✓ Responsive design that adapts to any screen</li>
              <li>✓ Professional email (@yourbusiness.com)</li>
            </ul>

            <h3>Website Types We Build</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">📝</div>
                <h4>Service-Based Websites</h4>
                <p>For plumbers, electricians, contractors, and service businesses. 
                   Focus on service descriptions, service areas, and lead capture.</p>
              </div>

              <div className="step">
                <div className="step-number">🏢</div>
                <h4>Professional Services</h4>
                <p>For lawyers, accountants, consultants. Build authority, showcase expertise, 
                   and attract high-value clients.</p>
              </div>

              <div className="step">
                <div className="step-number">🏥</div>
                <h4>Medical & Dental</h4>
                <p>For doctors, dentists, therapists. HIPAA-compliant, patient-focused, 
                   appointment scheduling ready.</p>
              </div>

              <div className="step">
                <div className="step-number">🛍️</div>
                <h4>E-commerce</h4>
                <p>Sell products online. Shopping cart, payment processing, inventory management, 
                   and order fulfillment ready.</p>
              </div>
            </div>

            <h3>The Website Development Process</h3>
            <ol className="process-list">
              <li>
                <strong>Discovery & Planning:</strong> Understand your business, target customers, 
                and goals. Plan site structure and pages.
              </li>
              <li>
                <strong>Design:</strong> Create professional mockups showing how the site will look 
                on desktop and mobile. Get your approval before development.
              </li>
              <li>
                <strong>Development:</strong> Build the website with clean, modern code. 
                Optimize for performance and SEO.
              </li>
              <li>
                <strong>Content Creation:</strong> Write compelling copy for each page. 
                Optimize for conversions and search engines.
              </li>
              <li>
                <strong>Testing & Launch:</strong> Test on all devices and browsers. 
                Set up analytics and go live.
              </li>
              <li>
                <strong>Training & Support:</strong> Train you on how to maintain and update your site. 
                Ongoing support available.
              </li>
            </ol>
          </div>

          <div className="sidebar">
            <div className="pricing-box">
              <h3>Website Packages</h3>
              <ul className="pricing-list">
                <li>
                  <strong>Starter:</strong> 
                  $2500-4000
                </li>
                <li>
                  <strong>Professional:</strong> 
                  $4000-8000
                </li>
                <li>
                  <strong>Enterprise:</strong> 
                  $8000+
                </li>
              </ul>
              <p className="pricing-note">Includes hosting for 1 year</p>
            </div>

            <div className="case-study-box">
              <h4>Case Study</h4>
              <p className="case-study-metric">HVAC Company</p>
              <p><strong>Result:</strong> 20 leads/month from website alone</p>
              <p><strong>Value:</strong> $2000+/month in new business</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-content">
          <h2>Ready for a Website That Converts?</h2>
          <p>Let's build a professional site that generates leads for your business</p>
          <Link to="/contact" className="cta-button">Schedule Your Free Consultation</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="related-container">
          <h3>Related Services</h3>
          <div className="related-grid">
            <Link to="/services/seo-services" className="related-card">
              <div className="related-icon">🚀</div>
              <h4>SEO Services</h4>
              <p>Rank higher on Google for local keywords</p>
            </Link>
            <Link to="/services/google-ads" className="related-card">
              <div className="related-icon">🔍</div>
              <h4>Google Ads</h4>
              <p>Send paid traffic to your website</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
