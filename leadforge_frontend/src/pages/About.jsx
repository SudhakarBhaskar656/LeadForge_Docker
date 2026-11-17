import React from 'react';
import About from '../components/About';
import '../styles/Pages.css';

export default function AboutPage() {
  return (
    <div className="page-wrapper fade-in">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About LeadForge</h1>
          <p>World-class digital marketing for local businesses</p>
        </div>
      </section>
      <About />
      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's Work Together</h2>
          <p>Join 500+ businesses already scaling with LeadForge</p>
          <a href="/contact" className="cta-button">Start Your Free Consultation</a>
        </div>
      </section>
    </div>
  );
}
