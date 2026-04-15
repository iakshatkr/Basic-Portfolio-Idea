import React, { Suspense, lazy } from 'react';
import { heroMetrics, profile, quickHighlights, tickerItems } from '../content/site';

const ThreeScene = lazy(() => import('./ThreeScene'));

const Hero: React.FC = () => {
  return (
<section className="relative isolate flex min-h-screen items-center overflow-hidden px-4">      <div className="hero-noise" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-a" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-b" aria-hidden="true"></div>

      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>

<div className="container px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:items-start">       <div className="hero-copy text-center lg:text-left mx-auto max-w-2xl">
<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left">          <span className="hero-line hero-line-light">Build bold.</span>
            <span className="hero-line hero-line-accent">Ship clean.</span>
           </h1>
<p className="mt-7 max-w-2xl text-base sm:text-lg text-center lg:text-left mx-auto">            {profile.headline} I work across frontend, backend, UI thinking, and problem solving, and I am actively looking for
            internships and entry-level SDE opportunities.
          </p>

<div className="mt-9 flex flex-col gap-4 sm:flex-row justify-center lg:justify-start items-center">            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
              Download Resume
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v10m0 0 4-4m-4 4-4-4M5 19h14" />
              </svg>
            </a>
            <a href="#projects" className="btn secondary">
              View Featured Work
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0-7-7m7 7V3" />
              </svg>
            </a>
          </div>

<div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">           {heroMetrics.map((metric) => (
              <div key={metric.label} data-tilt className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

<div className="relative mt-10 lg:mt-0">          <div data-tilt className="showcase-panel hero-panel">
            <span className="section-kicker">Current positioning</span>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Resume-backed profile with product, community, and engineering depth.</h2>
            <p className="section-copy mt-4">
              This version is being shaped to showcase your strongest signals clearly: internship experience, developer community
              leadership, full-stack builds, and a cleaner professional narrative.
            </p>

            <div className="mt-8 grid gap-4">
              {quickHighlights.map((item) => (
                <div key={item.label} className="showcase-chip">
                  <span className="showcase-chip-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-shell">
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
