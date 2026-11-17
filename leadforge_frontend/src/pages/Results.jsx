import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Results.css';

export default function Results() {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact', { state: { scrollToForm: true } });
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const caseStudies = [
    {
      id: 1,
      title: 'Local Plumbing Company',
      metric: '340% Lead Growth',
      description: 'Transformed a struggling plumbing service into a market leader through targeted Facebook ads and SEO optimization.',
      results: [
        '340% increase in qualified leads',
        '$85K monthly revenue increase',
        'Reduced customer acquisition cost by 65%',
        'Hired 3 new technicians to handle demand'
      ],
      color: '#FF6B6B'
    },
    {
      id: 2,
      title: 'E-Commerce Store',
      metric: '520% ROI',
      description: 'Scaled an online retail business to 7-figures with Google Ads and conversion optimization.',
      results: [
        '520% return on ad spend',
        '$2.3M in attributed revenue',
        '42% increase in average order value',
        'Expanded to 2 new markets'
      ],
      color: '#4ECDC4'
    },
    {
      id: 3,
      title: 'SaaS Company',
      metric: '280% Traffic Growth',
      description: 'Established organic search dominance through comprehensive SEO and content marketing strategy.',
      results: [
        '280% organic traffic increase',
        '1,200 qualified leads per month',
        'Ranked #1 for 45+ high-value keywords',
        'Cut customer acquisition cost in half'
      ],
      color: '#00D9FF'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Served Worldwide' },
    { number: '$50M+', label: 'Ad Spend Managed' },
    { number: '3.8x', label: 'Average ROI Generated' }
  ];

  return (
    <div className="results-page">
      {/* PAGE HERO */}
      <section className="results-hero">
        <div className="results-hero-gradient"></div>
        <motion.div
          className="results-hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="results-hero-title" variants={itemVariants}>
            Real Results That <span className="gradient-text">Drive Growth</span>
          </motion.h1>
          <motion.p className="results-hero-subtitle" variants={itemVariants}>
            See how we've transformed businesses across industries. Our data-driven strategies consistently deliver measurable outcomes that matter to your bottom line.
          </motion.p>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="results-stats">
        <div className="results-stats-container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat-card" variants={itemVariants}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="case-studies">
        <div className="case-studies-container">
          <motion.div
            className="case-studies-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Case Studies & Success Stories</h2>
            <p>Proven results across different industries and business types</p>
          </motion.div>

          <motion.div
            className="case-studies-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="case-study-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="case-study-header" style={{ borderTopColor: study.color }}>
                  <div className="case-study-metric" style={{ backgroundColor: study.color }}>
                    {study.metric}
                  </div>
                  <h3>{study.title}</h3>
                </div>

                <p className="case-study-description">{study.description}</p>

                <div className="case-study-results">
                  <h4>Key Results</h4>
                  <ul>
                    {study.results.map((result, idx) => (
                      <li key={idx}>
                        <span className="check">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

               
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONVERSION SECTION */}
      <section className="results-conversion">
        <div className="results-conversion-container">
          <motion.div
            className="conversion-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2>Ready to Achieve Your Results?</h2>
            <p>
              Every business has unique challenges and opportunities. Let's discuss how we can create a winning strategy for your company.
            </p>
            <button className="cta-button" onClick={handleBookCall}>
              Book a Free Strategy Call
              <span className="arrow">→</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
