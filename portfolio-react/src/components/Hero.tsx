import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero section fade-in">
      <div className="container hero-inner">
        <div>
          <h1 className="title">Software Development Engineer | Full-Stack Developer | Algorithm Enthusiast</h1>
          <p className="subtitle">Crafting scalable solutions with modern JavaScript, React, Node.js, and distributed systems. Passionate about clean code, system design, and competitive programming.</p>
          <div className="cta">
            <a className="btn primary" href="#projects">View My Work</a>
            <a className="btn secondary" href="#contact">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;