import React from 'react';
import Industries from '../components/Industries';
import '../styles/Pages.css';

export default function IndustriesPage() {
  return (
    <div className="page-wrapper fade-in">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Industries We Serve</h1>
          <p>Specialized digital marketing strategies for plumbers, electricians, credit repair services, and more</p>
        </div>
      </section>
      <Industries />
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Scale Your Business?</h2>
          <p>Get a customized marketing strategy for your industry</p>
          <a href="/contact" className="cta-button">Schedule Your Consultation</a>
        </div>
      </section>
    </div>
  );
}
