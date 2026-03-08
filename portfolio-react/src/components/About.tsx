import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section slide-in-left">
      <div className="container about">
        <div className="card" style={{padding: '1.25rem'}}>
          <img src="https://placehold.co/900x650/png" alt="Developer workspace with laptop and code" />
        </div>
        <div>
          <h2>Crafting Digital Solutions</h2>
          <p>
            I'm a final-year Computer Science student with a passion for building elegant, user-focused applications. I learn best by creating real products and solving actual problems. My focus is modern JavaScript, responsive UI design, and full-stack development with Node.js and MongoDB.
          </p>
          <p>
            Beyond code, I'm deeply interested in algorithms, data structures, and the principles that make great software great.
          </p>
          <p className="pill location">📍 India • Available for Remote Work</p>
        </div>
      </div>
    </section>
  );
};

export default About;