import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ServiceDetail.css';

export default function SocialMediaAds() {
  return (
    <div className="page-wrapper fade-in">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-icon">📱</div>
          <h1>Social Media Ads</h1>
          <p>Facebook & Instagram Advertising Management</p>
        </div>
      </section>

      <section className="service-section">
        <div className="service-container">
          <div className="section-content">
            <h2>Scale Your Business with Targeted Social Media Campaigns</h2>
            <p className="intro-text">
              Facebook and Instagram ads are one of the most powerful tools for local businesses to reach new customers. 
              But success requires strategic targeting, compelling creative, and constant optimization. 
              That's where we come in.
            </p>

            <h3>Our Facebook & Instagram Ads Service Includes:</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Audience Targeting</h4>
                <p>We build custom audiences based on location, interests, behaviors, and demographics. 
                   Create lookalike audiences from your best customers to reach more qualified leads.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h4>Lead Generation Campaigns</h4>
                <p>Multi-step funnel strategies that turn cold leads into paying customers. 
                   From awareness ads to conversion campaigns with pixel tracking.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>Creative & Copywriting</h4>
                <p>We create compelling ads that stop the scroll. Professional copywriting and design 
                   that speaks to your target audience's pain points and desires.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <h4>Daily Optimization</h4>
                <p>We monitor performance metrics daily, adjusting bids, audiences, and creative 
                   to maximize ROI and lower cost per lead.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h4>Conversion Tracking</h4>
                <p>Pixel installation and conversion tracking setup so you can see exactly which ads 
                   drive phone calls, form submissions, and sales.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📋</div>
                <h4>Weekly Reporting</h4>
                <p>Clear, transparent reporting on impressions, clicks, leads, and ROI. 
                   Know exactly what your marketing budget is generating.</p>
              </div>
            </div>

            <h3>Why Social Media Ads for Local Businesses?</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-number">1</span>
                <div className="benefit-content">
                  <h4>Geo-Targeted Reach</h4>
                  <p>Target customers by zip code, city, or radius from your business. 
                     Perfect for plumbers, electricians, contractors, and service-based businesses.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">2</span>
                <div className="benefit-content">
                  <h4>Low Cost Per Lead</h4>
                  <p>Social ads typically cost $1-3 per qualified lead—compared to $10-20+ for Google Ads. 
                     More leads for the same budget.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">3</span>
                <div className="benefit-content">
                  <h4>Instant Results</h4>
                  <p>Unlike SEO, you can get leads within 24-48 hours. Scale your lead gen immediately 
                     without waiting months for organic rankings.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">4</span>
                <div className="benefit-content">
                  <h4>Detailed Analytics</h4>
                  <p>See every metric: impressions, clicks, leads, and conversions. 
                     Understand which audiences and messages drive your best customers.</p>
                </div>
              </div>
            </div>

            <h3>Who We Help With Social Media Ads</h3>
            <p>We specialize in Facebook & Instagram ads for:</p>
            <ul className="industries-list">
              <li>Plumbers & HVAC companies</li>
              <li>Electricians & contractors</li>
              <li>Pest control services</li>
              <li>Roofing companies</li>
              <li>Dental practices</li>
              <li>Home service businesses</li>
              <li>Local fitness studios</li>
              <li>Professional services</li>
            </ul>

            <h3>Our Process</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Discovery & Strategy</h4>
                <p>Understand your business, target customers, and goals. We build a custom ad strategy 
                   that aligns with your objectives.</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h4>Campaign Setup</h4>
                <p>Create pixel, audiences, ad accounts, and conversion tracking. 
                   Develop compelling ad creative and copy.</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h4>Launch & Monitor</h4>
                <p>Launch campaigns and monitor daily for performance. Make real-time adjustments 
                   to optimize for your target metrics.</p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h4>Scale & Optimize</h4>
                <p>Once a campaign is profitable, we scale spend on winning ads and audiences. 
                   Test new variations to improve results.</p>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="pricing-box">
              <h3>Investment Levels</h3>
              <ul className="pricing-list">
                <li>
                  <strong>Starter:</strong> 
                  $1000-2000/month
                </li>
                <li>
                  <strong>Growth:</strong> 
                  $2000-5000/month
                </li>
                <li>
                  <strong>Scale:</strong> 
                  $5000+/month
                </li>
              </ul>
              <p className="pricing-note">Min. 2-month commitment required</p>
            </div>

            <div className="case-study-box">
              <h4>Case Study</h4>
              <p className="case-study-metric">HVAC Company</p>
              <p><strong>Result:</strong> 45 qualified leads/month at $28/lead cost</p>
              <p><strong>ROI:</strong> $3.8x return on ad spend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-content">
          <h2>Ready to Get More Leads from Facebook & Instagram?</h2>
          <p>Let's build a custom strategy for your business</p>
          <Link to="/contact" className="cta-button">Book Your Free Strategy Call</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="related-container">
          <h3>Related Services</h3>
          <div className="related-grid">
            <Link to="/services/google-ads" className="related-card">
              <div className="related-icon">🔍</div>
              <h4>Google Ads</h4>
              <p>Capture high-intent customers searching for your services</p>
            </Link>
            <Link to="/services/website-development" className="related-card">
              <div className="related-icon">🌐</div>
              <h4>Website Development</h4>
              <p>Convert traffic into leads with optimized landing pages</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
