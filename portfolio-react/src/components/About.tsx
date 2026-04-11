import React from 'react';
import { focusAreas, profile } from '../content/site';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div data-reveal="slide-right" className="glass-subcard rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8">
          <span className="section-kicker">About me</span>
          <h2 className="section-title mt-5">Building with a developer mindset and presenting with clarity.</h2>
          <p className="section-copy mt-5">{profile.summary}</p>
          <p className="section-copy mt-4">
            My work sits at the intersection of code, product presentation, and problem solving. I enjoy turning ideas into responsive
            web experiences that are easier to use, easier to explain, and stronger to showcase in hiring conversations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="pill">{profile.location}</span>
            <span className="pill">{profile.availability}</span>
          </div>
        </div>

        <div className="grid gap-4">
          {focusAreas.map((area, index) => (
            <article key={area.title} data-reveal="slide-up" data-reveal-delay={index * 0.08} className="card p-6 sm:p-8">
              <span className="section-kicker">Focus area</span>
              <h3 className="mt-3 text-2xl font-semibold text-white">{area.title}</h3>
              <p className="section-copy mt-4">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
