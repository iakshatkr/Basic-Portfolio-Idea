import React from 'react';
import { heroMetrics, skillGroups } from '../content/site';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <span className="section-kicker">Technical stack</span>
          <h2 className="section-title mt-5">Tools, stack, and capability areas grounded in the resume.</h2>
          <p className="section-copy mt-5">
            Instead of generic skill bars, this section now reflects the actual languages, frameworks, tooling, and product-oriented
            strengths you are bringing into hiring conversations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
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
              <h3 className="mt-4 text-3xl font-semibold text-white">The story is not just tools. It is consistency and range.</h3>
              <p className="section-copy mt-4">
                Problem solving, design awareness, and developer community work all strengthen the way you present yourself beyond a
                simple stack list.
              </p>
            </div>

            <div className="glass-subcard mt-8 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[#b5ff7d]/80">Quick snapshot</p>
              <div className="mt-4 grid gap-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="glass-row flex items-center justify-between gap-4 rounded-2xl px-4 py-3">
                    <span className="text-sm text-white/65">{metric.label}</span>
                    <strong className="text-lg text-white">{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Skills;
