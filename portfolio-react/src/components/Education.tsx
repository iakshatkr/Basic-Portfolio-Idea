import React from 'react';
import { certifications, education } from '../content/site';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card reveal p-7">
          <span className="section-kicker">Education</span>
          <h2 className="mt-5 text-3xl font-semibold text-white">{education.degree}</h2>
          <p className="mt-4 text-xl font-medium text-[#d6ffb3]">{education.institution}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="pill">{education.duration}</span>
            <span className="pill">{education.score}</span>
          </div>
          <p className="section-copy mt-5">{education.location}</p>
        </div>

        <div className="reveal">
          <span className="section-kicker">Certifications</span>
          <h2 className="section-title mt-5">Proof of participation, learning, and momentum.</h2>
          <div className="mt-8 grid gap-4">
            {certifications.map((certificate) => (
              <a
                key={certificate.title}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card certification-card p-6"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-white/45">{certificate.issuer}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{certificate.title}</h3>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#d6ffb3]">
                  View credential
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
