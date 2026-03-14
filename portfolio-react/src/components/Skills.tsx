import React from 'react';
import { profile, skillGroups } from '../content/site';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <span className="section-kicker">Technical stack</span>
          <h2 className="section-title mt-5">Less “look at my percentages,” more “here’s how I actually work.”</h2>
          <p className="section-copy mt-5">
            I’m optimizing this portfolio to read like an engineering brand: what I build, how I ship, and where I’m strongest right
            now.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="card reveal p-6">
                <span className="section-kicker">{group.title}</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="card reveal flex flex-col justify-between p-7">
            <div>
              <span className="section-kicker">Signals that matter</span>
              <h3 className="mt-4 text-3xl font-semibold text-white">Competitive programming stays part of the story.</h3>
              <p className="section-copy mt-4">
                It sharpens the way I think about tradeoffs, complexity, and implementation details. That discipline shows up in how I
                build products too.
              </p>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#b5ff7d]/20 bg-[#b5ff7d]/8 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[#b5ff7d]/80">Profile</p>
              <p className="mt-2 text-xl font-semibold text-white">LeetCode / Algorithm practice</p>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-sm font-medium text-[#d6ffb3] transition-colors duration-300 hover:text-white"
              >
                View profile
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;
