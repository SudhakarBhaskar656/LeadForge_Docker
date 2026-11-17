import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getIndustryBySlug, industriesData } from '../data/industries';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/IndustryDetail.css';

export default function IndustryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const industry = getIndustryBySlug(slug);
  const heroRef = useScrollAnimation();
  const sectionRef = useScrollAnimation();

  if (!industry) {
    return (
      <div className="page-wrapper">
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Industry Not Found</h1>
            <p>We couldn't find the industry you're looking for.</p>
          </div>
        </section>
        <section className="industry-detail-error">
          <div className="error-container">
            <h2>Let's Find What You Need</h2>
            <p>Browse all industries we serve:</p>
            <div className="error-industries-grid">
              {industriesData.map((ind) => (
                <button
                  key={ind.id}
                  className="error-industry-card"
                  onClick={() => navigate(`/industries/${ind.slug}`)}
                  style={{ borderColor: ind.color }}
                >
                  {ind.title}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const handleCTA = () => {
    navigate('/contact', {
      state: {
        scrollToForm: true,
        selectedIndustry: industry.name
      }
    });
  };

  const relatedIndustries = industriesData
    .filter(ind => ind.id !== industry.id)
    .slice(0, 3);

  return (
    <div className="page-wrapper fade-in">
      {/* HERO SECTION */}
      <section className="industry-hero" ref={heroRef} style={{ borderTopColor: industry.color }}>
        <div className="industry-hero-content">
          <h1>{industry.title}</h1>
          <p>{industry.heroSubheading}</p>
          <button
            className="industry-cta-button"
            style={{ backgroundColor: industry.color }}
            onClick={handleCTA}
          >
            Book a Free Strategy Call
          </button>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className="industry-detail-section challenge-section" ref={sectionRef}>
        <div className="industry-detail-container">
          <div className="section-content">
            <h2>The Challenge</h2>
            <p className="section-intro">{industry.challenge}</p>
            <p>{industry.challengeDetails}</p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="industry-detail-section solution-section" ref={sectionRef}>
        <div className="industry-detail-container">
          <div className="section-content">
            <h2>Our Solution</h2>
            <p className="section-intro">{industry.solution}</p>
            <ul className="solution-list">
              {industry.solutionPoints.map((point, idx) => (
                <li key={idx}>
                  <span className="solution-checkmark">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="industry-detail-section results-section" ref={sectionRef}>
        <div className="industry-detail-container">
          <h2>Results Our Clients Get</h2>
          <div className="results-metrics-grid">
            {industry.resultMetrics.map((metric, idx) => (
              <div key={idx} className="metric-card" style={{ borderColor: industry.color }}>
                <div className="metric-icon">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="industry-detail-cta-section" style={{ backgroundColor: industry.color }}>
        <div className="industry-detail-container">
          <div className="final-cta-content">
            <h2>Ready to Grow Your {industry.name} Business?</h2>
            <p>Get a personalized marketing strategy designed specifically for {industry.name} businesses</p>
            <button
              className="final-cta-button"
              onClick={handleCTA}
            >
              Schedule Your Free Strategy Call Today
            </button>
          </div>
        </div>
      </section>

      {/* RELATED INDUSTRIES SECTION */}
      {relatedIndustries.length > 0 && (
        <section className="industry-detail-section related-section" ref={sectionRef}>
          <div className="industry-detail-container">
            <h2>Explore Other Industries We Serve</h2>
            <div className="related-industries-grid">
              {relatedIndustries.map((relatedInd) => (
                <div
                  key={relatedInd.id}
                  className="related-industry-card"
                  style={{ borderTopColor: relatedInd.color }}
                  onClick={() => navigate(`/industries/${relatedInd.slug}`)}
                >
                  <h3>{relatedInd.title}</h3>
                  <p>{relatedInd.challenge}</p>
                  <div className="related-card-cta" style={{ color: relatedInd.color }}>
                    Learn More →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
