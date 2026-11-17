import React, { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/About.css';

export default function About() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-content">
          <h2>Who We Are</h2>
          <p className="about-lead">
            We're a results-driven digital marketing agency obsessed with helping local businesses 
            scale through proven strategies.
          </p>

          <div className="about-values">
            <div className="value-item">
              <h3>🎯 Results First</h3>
              <p>
                We don't chase vanity metrics. Every campaign is built around one goal: 
                turning traffic into customers and profit into growth.
              </p>
            </div>

            <div className="value-item">
              <h3>📊 Data Driven</h3>
              <p>
                Every decision backed by analytics. We test, measure, optimize, and scale 
                what works. Transparency in reporting is non-negotiable.
              </p>
            </div>

            <div className="value-item">
              <h3>🌍 Global Expertise</h3>
              <p>
                500+ clients across USA, UK, Australia, and beyond. We understand local markets 
                and international growth patterns.
              </p>
            </div>

            <div className="value-item">
              <h3>🚀 Always Innovating</h3>
              <p>
                We stay ahead of algorithm changes, emerging platforms, and market trends. 
                Your competitors won't beat you on strategy.
              </p>
            </div>
          </div>

          <div className="about-mission">
            <h3>Our Mission</h3>
            <p>
              To empower local businesses and home service professionals with world-class 
              digital marketing that drives measurable, sustainable growth. We believe every 
              business deserves access to enterprise-level marketing strategies.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h4>500+</h4>
              <p>Active Clients</p>
            </div>
            <div className="stat">
              <h4>$50M+</h4>
              <p>Ad Spend Managed</p>
            </div>
            <div className="stat">
              <h4>3.8x</h4>
              <p>Average ROI</p>
            </div>
            <div className="stat">
              <h4>48h</h4>
              <p>Average Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
