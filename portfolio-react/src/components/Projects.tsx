import React from 'react';
import { projects } from '../content/site';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal mb-12 max-w-3xl">
          <span className="section-kicker">Selected work</span>
          <h2 className="section-title mt-5">Projects that reflect product thinking, not just code output.</h2>
          <p className="section-copy mt-5">
            The flagship work now maps directly to the resume: two product-oriented full-stack builds and the portfolio platform itself
            as a demonstration of engineering presentation.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card card reveal">
              <div className="project-grid">
                <div>
                  <div className="project-meta">
                    <span className="project-index">0{index + 1}</span>
                    <span className="pill">{project.category}</span>
                    <span className="pill">{project.status}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-white">{project.title}</h3>
                  <p className="section-copy mt-4">{project.description}</p>
                </div>

                <div className="glass-subcard p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">What stands out</p>
                  <ul className="mt-5 space-y-3 text-sm text-white/72">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#b5ff7d]"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {(project.codeUrl || project.liveUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn secondary">
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn primary">
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
