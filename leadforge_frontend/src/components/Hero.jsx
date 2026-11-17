import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact', { state: { scrollToForm: true } });
  };

  const handleViewResults = () => {
    navigate('/results');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-gradient-bg"></div>
      
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-headline"
            variants={itemVariants}
          >
            Generate More Leads, Calls & Sales
            <span className="gradient-text"> For Your Business</span>
          </motion.h1>

          <motion.p 
            className="hero-subheadline"
            variants={itemVariants}
          >
            Scale your business with proven digital marketing strategies: Facebook & Instagram ads, Google Ads, high-converting websites, and SEO. We turn traffic into customers and help you dominate your local market.
          </motion.p>

          <motion.div 
            className="hero-cta-group"
            variants={itemVariants}
          >
            <button className="cta-button" onClick={handleBookCall}>
              Book Free Strategy Call
              <span className="arrow">→</span>
            </button>
            <button className="secondary-button" onClick={handleViewResults}>
              View Our Results
            </button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat-item">
              <h3>500+</h3>
              <p>Clients Worldwide</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>$50M+</h3>
              <p>Ad Spend Managed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>3.8x</h3>
              <p>Average ROI</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          variants={itemVariants}
          animate="floating"
        >
          <div className="hero-card-container">
            <motion.div 
              className="hero-card featured"
              whileHover={{ y: -8 }}
            >
              <div className="card-icon">📊</div>
              <h4>Data-Driven Results</h4>
              <p>Every decision backed by analytics</p>
            </motion.div>
            
            <motion.div 
              className="hero-card"
              whileHover={{ y: -8 }}
            >
              <div className="card-icon">🚀</div>
              <h4>Rapid Growth</h4>
              <p>See results in 30 days</p>
            </motion.div>
            
            <motion.div 
              className="hero-card"
              whileHover={{ y: -8 }}
            >
              <div className="card-icon">✨</div>
              <h4>Expert Team</h4>
              <p>Certified professionals</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

     
    </section>
  );
}
