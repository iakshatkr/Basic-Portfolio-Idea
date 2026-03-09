import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section slide-in-left">
      <div className="container about">
        <div>
          <h2>Building Scalable Systems & Solving Complex Problems</h2>
          <p>
            Final-year Computer Science student specializing in distributed systems, algorithm optimization, and full-stack development. I excel at breaking down complex problems into efficient, maintainable solutions using data structures, design patterns, and modern web technologies.
          </p>
          <p>
            My expertise spans system architecture, database design, API development, and performance optimization. Currently diving deep into competitive programming, distributed computing, and cloud-native applications.
          </p>
          <p className="pill location">📍 India • Available for Remote Work</p>
        </div>
      </div>
    </section>
  );
};

export default About;