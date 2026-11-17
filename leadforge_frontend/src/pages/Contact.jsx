import React from 'react';
import Contact from '../components/Contact';
import '../styles/Pages.css';

export default function ContactPage() {
  return (
    <div className="page-wrapper fade-in">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Let's Talk Strategy</h1>
          <p>Book your free strategy call and let's discuss how we can help your business grow</p>
        </div>
      </section>
      <Contact />
    </div>
  );
}
