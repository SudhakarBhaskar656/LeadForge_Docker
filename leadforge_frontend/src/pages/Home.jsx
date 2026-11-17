import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import About from '../components/About';

export default function Home() {
  return (
    <div className="page-wrapper fade-in">
      <Hero />
      <Services />
      <Industries />
      <About />
    </div>
  );
}
