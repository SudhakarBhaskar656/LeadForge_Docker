import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { industriesData } from '../data/industries';
import '../styles/Industries.css';

export default function Industries() {
  const sectionRef = useScrollAnimation();
  const navigate = useNavigate();

  const handleGetStarted = (industrySlug) => {
    navigate(`/industries/${industrySlug}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="industries" id="industries" ref={sectionRef}>
      <div className="industries-container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Specialized marketing strategies tailored for your industry's unique challenges</p>
        </div>

        <motion.div
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {industriesData.map((industry) => (
            <motion.div
              key={industry.id}
              className="industry-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="industry-card-content">
                <div className="industry-badge" style={{ backgroundColor: industry.color }}>
                  {industry.icon || '🎯'}
                </div>
                
                <h3>{industry.title}</h3>

                <div className="industry-section">
                  <h4>The Challenge</h4>
                  <p>{industry.challenge}</p>
                </div>

                <div className="industry-section">
                  <h4>Our Solution</h4>
                  <p>{industry.solution}</p>
                </div>

                <div className="industry-section">
                  <h4>Results Our Clients Get</h4>
                  <ul className="results-list">
                    {industry.results.map((result, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleGetStarted(industry.slug)}
                  className="industry-cta"
                  style={{
                    backgroundColor: industry.color,
                    '--accent-color': industry.color,
                  }}
                >
                  Get Started Today
                  <span className="arrow">→</span>
                </button>
              </div>

              <div 
                className="industry-card-accent"
                style={{ borderTopColor: industry.color }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
