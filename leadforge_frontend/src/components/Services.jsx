import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Services.css';

export default function Services() {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      id: 1,
      title: 'Social Media Ads',
      subtitle: 'Facebook & Instagram',
      description: 'Targeted campaigns that convert lookalike audiences into paying customers. We handle strategy, creative, and optimization.',
      icon: '📱',
      slug: 'social-media-ads',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'Google Ads',
      subtitle: 'Search & Display',
      description: 'Capture high-intent customers actively searching for your services. We manage bids, keywords, and landing pages.',
      icon: '🔍',
      slug: 'google-ads',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Website Development',
      subtitle: 'Modern & Conversion-Focused',
      description: 'Professional websites designed to convert visitors into leads and customers. Fast, mobile-first, SEO-optimized.',
      icon: '🌐',
      slug: 'website-development',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'App Development',
      subtitle: 'iOS & Android',
      description: 'Custom mobile apps to scale your business. From booking apps to customer loyalty platforms.',
      icon: '📲',
      slug: 'app-development',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'SEO Services',
      subtitle: 'Local & Organic',
      description: 'Rank #1 on Google for your local keywords. Long-term organic growth without paying per click.',
      icon: '🚀',
      slug: 'seo-services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 6,
      title: 'Email & SMS Automation',
      subtitle: 'Follow-ups & Retention',
      description: 'Automated email and SMS campaigns to nurture leads, reduce no-shows, and turn one-time customers into repeat clients.',
      icon: '📩',
      slug: 'email-sms-automation',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

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
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Complete digital marketing solutions to drive growth and scale your business</p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="service-card-inner">
                <div className="service-icon">{service.icon}</div>
                
                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <p className="service-description">{service.description}</p>

                <Link to={`/services/${service.slug}`} className="service-link">
                  Learn More
                  <span className="arrow">→</span>
                </Link>
              </div>

              <div className="service-card-bg"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
