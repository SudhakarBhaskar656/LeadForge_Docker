import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ServiceDetail.css';

export default function GoogleAds() {
  return (
    <div className="page-wrapper fade-in">
      <section className="service-hero">
        <div className="service-hero-content">
          <div className="service-hero-icon">🔍</div>
          <h1>Google Ads Management</h1>
          <p>Search & Display Advertising Strategy</p>
        </div>
      </section>

      <section className="service-section">
        <div className="service-container">
          <div className="section-content">
            <h2>Capture High-Intent Customers Ready to Buy</h2>
            <p className="intro-text">
              Google Ads puts your business in front of people actively searching for your services. 
              When someone searches "plumber near me" or "emergency electrician," your ad appears. 
              That's the power of search marketing. But managing Google Ads effectively requires expertise 
              in keyword research, bid management, and landing page optimization.
            </p>

            <h3>Our Google Ads Service Includes:</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔑</div>
                <h4>Keyword Research & Strategy</h4>
                <p>We identify high-intent keywords your customers are searching for. 
                   Focus on keywords that convert, not just high-volume terms.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Search Ads (Google Search)</h4>
                <p>Your ads appear at the top of Google search results for relevant keywords. 
                   Perfect for capturing ready-to-buy customers.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🖼️</div>
                <h4>Display Ads & Remarketing</h4>
                <p>Reach people across the web on relevant sites. Remarket to people who visited 
                   your website but didn't convert.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h4>Call Extensions & Phone Tracking</h4>
                <p>Add your phone number directly to ads. Track which keywords drive phone calls 
                   to measure true ROI.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h4>Bid Management & Optimization</h4>
                <p>We manage your daily budget, adjust bids based on performance, and optimize 
                   to get the lowest cost per qualified lead.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h4>Conversion Tracking & Reporting</h4>
                <p>Track phone calls, form submissions, and sales. Know exactly what each keyword 
                   and ad is generating for your business.</p>
              </div>
            </div>

            <h3>Why Google Ads for Local Service Businesses?</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-number">1</span>
                <div className="benefit-content">
                  <h4>High-Intent Customers</h4>
                  <p>People searching for your service are ready to hire. Unlike Facebook ads that interrupt, 
                     Google ads appear exactly when someone needs you.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">2</span>
                <div className="benefit-content">
                  <h4>Immediate Visibility</h4>
                  <p>Unlike SEO which takes months, Google Ads puts you at the top of results today. 
                     Start getting leads in 24-48 hours.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">3</span>
                <div className="benefit-content">
                  <h4>Precise Targeting</h4>
                  <p>Target by keyword, location, device, time of day, and more. 
                     Show your ads only to people most likely to convert.</p>
                </div>
              </div>

              <div className="benefit-item">
                <span className="benefit-number">4</span>
                <div className="benefit-content">
                  <h4>Proven ROI</h4>
                  <p>Google Ads has been proven to deliver strong ROI for service businesses. 
                     Transparent tracking shows exactly which keywords drive calls and sales.</p>
                </div>
              </div>
            </div>

            <h3>Who We Help With Google Ads</h3>
            <p>We specialize in Google Ads management for:</p>
            <ul className="industries-list">
              <li>Plumbers & drain cleaning services</li>
              <li>Electricians & electrical contractors</li>
              <li>HVAC companies</li>
              <li>Roofing contractors</li>
              <li>Pest control & termite services</li>
              <li>Locksmith services</li>
              <li>General contractors</li>
              <li>Legal services & law firms</li>
              <li>Dental & medical practices</li>
            </ul>

            <h3>Our Google Ads Management Process</h3>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Account Audit & Strategy</h4>
                <p>We review your current campaigns, identify underperforming areas, 
                   and develop a data-driven strategy to improve results.</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h4>Keyword Research</h4>
                <p>Identify high-intent keywords your customers search for. 
                   Build lists of keywords to target and negative keywords to exclude.</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h4>Campaign Setup & Launch</h4>
                <p>Create properly structured campaigns with ad groups, keywords, and ads. 
                   Install conversion tracking for phone calls and form submissions.</p>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <h4>Ongoing Optimization</h4>
                <p>Monitor performance daily, adjust bids, test new keywords, refine ad copy, 
                   and continuously lower your cost per qualified lead.</p>
              </div>
            </div>

            <h3>Google Ads Performance Metrics</h3>
            <p>We focus on metrics that matter to your business:</p>
            <ul className="metrics-list">
              <li><strong>Cost Per Click (CPC):</strong> How much you pay per ad click</li>
              <li><strong>Cost Per Lead (CPL):</strong> How much you pay per qualified lead</li>
              <li><strong>Cost Per Call:</strong> How much you pay per phone call</li>
              <li><strong>Conversion Rate:</strong> Percentage of clicks that become leads/sales</li>
              <li><strong>Return on Ad Spend (ROAS):</strong> Revenue generated per dollar spent</li>
              <li><strong>Quality Score:</strong> Google's rating of your ads and landing pages (affects cost)</li>
            </ul>
          </div>

          <div className="sidebar">
            <div className="pricing-box">
              <h3>Investment Levels</h3>
              <ul className="pricing-list">
                <li>
                  <strong>Starter:</strong> 
                  $1500-3000/month
                </li>
                <li>
                  <strong>Growth:</strong> 
                  $3000-8000/month
                </li>
                <li>
                  <strong>Enterprise:</strong> 
                  $8000+/month
                </li>
              </ul>
              <p className="pricing-note">Min. 3-month commitment required</p>
            </div>

            <div className="case-study-box">
              <h4>Case Study</h4>
              <p className="case-study-metric">Emergency Plumbing Service</p>
              <p><strong>Result:</strong> 30 phone calls/month at $45/call cost</p>
              <p><strong>ROI:</strong> $4.2x return on ad spend</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="cta-content">
          <h2>Ready to Get More Leads from Google Ads?</h2>
          <p>We'll optimize your campaigns to get the best possible ROI</p>
          <Link to="/contact" className="cta-button">Book Your Free Strategy Call</Link>
        </div>
      </section>

      <section className="related-services">
        <div className="related-container">
          <h3>Related Services</h3>
          <div className="related-grid">
            <Link to="/services/social-media-ads" className="related-card">
              <div className="related-icon">📱</div>
              <h4>Social Media Ads</h4>
              <p>Reach customers on Facebook and Instagram</p>
            </Link>
            <Link to="/services/website-development" className="related-card">
              <div className="related-icon">🌐</div>
              <h4>Website Development</h4>
              <p>High-converting landing pages for Google Ads</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
