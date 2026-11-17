import React from 'react';
import Services from '../components/Services';
import '../styles/Pages.css';

export default function ServicesPage() {
  return (
    <div className="page-wrapper fade-in">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Services</h1>
          <p>Everything you need to dominate your local market and scale your business online</p>
        </div>
      </section>
      <Services />
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss which services are right for your business</p>
          <a href="/contact" className="cta-button">Book a Free Strategy Call</a>
        </div>
      </section>
    </div>
  );
}
