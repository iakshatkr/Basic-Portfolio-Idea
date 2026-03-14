import React, { Suspense, lazy } from 'react';
import { heroMetrics, profile, tickerItems } from '../content/site';

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

      <div className="container relative z-10 grid gap-12 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="reveal">
          <span className="section-kicker">Portfolio 2026 / React Edition</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            Build bold.
            <span className="block text-[#b5ff7d]">Ship clean.</span>
            <span className="block text-white/70">Stay memorable.</span>
          </h1>
          <p className="section-copy mt-7 max-w-2xl text-base sm:text-lg">
            {profile.headline} I care about product feel, system thinking, and the kind of polish that makes a portfolio feel like a
            launch, not a template.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="btn primary">
              Email Me
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </a>
            <a href="#projects" className="btn secondary">
              View Featured Work
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="showcase-panel">
            <span className="section-kicker">Now positioning for</span>
            <h2 className="mt-4 text-3xl font-bold text-white">Resume-ready, recruiter-friendly, and social-card polished.</h2>
            <p className="section-copy mt-4">
              Built to present your work like a product launch: premium visuals, strong technical signals, and cleaner story-telling
              for hiring managers and founders.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="showcase-chip">
                <span className="showcase-chip-label">Focus</span>
                <strong>Frontend polish + backend depth</strong>
              </div>
              <div className="showcase-chip">
                <span className="showcase-chip-label">Goal</span>
                <strong>Stand out without looking overdesigned</strong>
              </div>
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
