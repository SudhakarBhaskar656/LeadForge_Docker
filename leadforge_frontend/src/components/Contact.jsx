import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Contact.css';

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // ✅ AUTO SCROLL & PRE-FILL INDUSTRY WHEN NAVIGATED FROM CTA
  useEffect(() => {
    if (location.state?.scrollToForm) {
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // ✅ PRE-FILL INDUSTRY IF COMING FROM INDUSTRY DETAIL PAGE
    if (location.state?.selectedIndustry) {
      setFormData((prev) => ({
        ...prev,
        service: location.state.selectedIndustry
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous errors on every submit
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.DEV
        ? 'http://localhost:3000/api/contact'
        : 'https://leadforgesolution.netlify.app/api/contact';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Parse backend JSON response
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const backendMsg = data?.message || 'Something went wrong. Please try again.';
        // Handle duplicate-email (409) with friendly, user-facing message
        if (response.status === 409) {
          setErrorMessage(backendMsg || 'We already have your email. Our team will contact you shortly.');
        } else {
          setErrorMessage(backendMsg);
        }
        // Stop further execution
        return;
      }

      // Success flow
      setSubmitted(true);
      setErrorMessage('');

      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header">
          <h2>Book Your Free Strategy Call</h2>
          <p>
            Get a personalized growth plan tailored to your business
            (30 mins, no obligation)
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-form-section">
            {submitted ? (
              <div className="success-message">
                <h3>✓ Thanks for reaching out!</h3>
                <p>
                  We'll review your information and get back to you within
                  24 hours to schedule your strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {errorMessage && (
                  <div className="form-error" role="alert">
                    {errorMessage}
                  </div>
                )}
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

               <div className="form-group">
  <label>Phone *</label>
  <PhoneInput
    country={'in'}   // default India
    value={formData.phone}
    onChange={(phone) =>
      setFormData((prev) => ({ ...prev, phone }))
    }
    inputStyle={{
      width: '100%',
      height: '48px',
      fontSize: '14px'
    }}
  />
</div>

                </div>

                <div className="form-group">
                  <label>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your Business"
                  />
                </div>

                {/* ✅ SERVICE SLUGS MATCH BACKEND */}
                <div className="form-group">
                  <label>Service Interested In *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="social-media-ads">Social Media Ads</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="website-development">Website Development</option>
                    <option value="app-development">App Development</option>
                    <option value="seo-services">SEO Services</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell Us About Your Business *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Current marketing challenges, goals, etc."
                    required
                  />
                </div>

                <button type="submit" className="submit-button">
                  Book Free Strategy Call
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-section">
            <div className="contact-benefit">
              <h4>What's Included in Your Call:</h4>
              <ul>
                <li>✓ Free competitive analysis</li>
                <li>✓ Customized growth strategy</li>
                <li>✓ ROI projections</li>
                <li>✓ Quick-win recommendations</li>
                <li>✓ No pressure, no upsell</li>
              </ul>
            </div>

            <div className="contact-cta">
              <p className="urgency">
                <strong>Limited Availability:</strong> Only accepting
                5 new clients per month.
              </p>
            </div>

            <div className="contact-links">
              <a href="tel:+91 9235072904" className="contact-link">
                📞 +91 ( 923) 507-2904
              </a>
              <a href="mailto:leadforgesolution@gmail.com" className="contact-link">
                ✉️ leadforgesolution@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
