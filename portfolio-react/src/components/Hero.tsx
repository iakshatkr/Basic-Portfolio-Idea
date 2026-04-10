import React, { Suspense, lazy } from 'react';
import { heroMetrics, profile, quickHighlights, tickerItems } from '../content/site';

const ThreeScene = lazy(() => import('./ThreeScene'));

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative isolate flex min-h-screen items-center overflow-hidden">
      <div className="hero-noise" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-a" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-b" aria-hidden="true"></div>

      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>

      <div className="container hero-layout relative z-10 grid gap-8 py-20 sm:gap-10 sm:py-24 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="reveal hero-copy">
          <span className="section-kicker">Portfolio 2026 / Full-stack engineering</span>
          <h1 className="hero-title mt-6">
            <span className="hero-line hero-line-light">Build bold.</span>
            <span className="hero-line hero-line-accent">Ship clean.</span>
           </h1>
          <p className="section-copy mt-7 max-w-2xl text-base sm:text-lg">
            {profile.headline} I work across frontend, backend, UI thinking, and problem solving, and I am actively looking for
            internships and entry-level SDE opportunities.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
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

          <div className="hero-metrics mt-10 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative hero-panel-wrap">
          <div className="showcase-panel hero-panel">
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
