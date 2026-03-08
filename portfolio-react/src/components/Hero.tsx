import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero section fade-in">
      <div className="container hero-inner">
        <div>
          <h1 className="title">Full-stack developer focused on building beautiful, user-centric applications.</h1>
          <p className="subtitle">I craft clean, efficient code that solves real problems. Specializing in modern JavaScript, React, Node.js, and responsive design.</p>
          <div className="cta">
            <a className="btn primary" href="#projects">View My Work</a>
            <a className="btn secondary" href="#contact">Get in Touch</a>
          </div>
        </div>
        <div className="hero-img card">
          {/* Placeholder for hero image */}
        </div>
      </div>
    </section>
  );
};

export default Hero;