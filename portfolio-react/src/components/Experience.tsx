import React from 'react';
import { experience } from '../content/site';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div data-reveal="slide-up" className="mb-12 max-w-3xl">
          <span className="section-kicker">Experience</span>
          <h2 className="section-title mt-5">Hands-on work that gives the portfolio real weight.</h2>
          <p className="section-copy mt-5">
            Internship experience and community leadership both matter here. One shows delivery in a working environment, the other
            shows ownership, communication, and consistency.
          </p>
        </div>

        <div className="grid gap-6">
          {experience.map((item, index) => (
            <article key={`${item.company}-${item.title}`} data-reveal={index % 2 === 0 ? 'slide-right' : 'slide-left'} data-reveal-delay={index * 0.08} className="timeline-card card">
              <div className="timeline-grid">
                <div>
                  <span className="section-kicker">{item.duration}</span>
                  <h3 className="mt-4 text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-lg font-medium text-[#d6ffb3]">{item.company}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/45">{item.location}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center text-sm font-medium text-[#d6ffb3] transition-colors duration-300 hover:text-white"
                  >
                    Visit organization
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <ul className="detail-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
