import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: string;
  percentage: number;
  link?: string;
}

const Skills: React.FC = () => {
  const [animatedBars, setAnimatedBars] = useState<Set<number>>(new Set());

  const skills: Skill[] = [
    { name: 'HTML & CSS', level: 'Advanced', percentage: 90 },
    { name: 'JavaScript (ES6+)', level: 'Advanced', percentage: 85 },
    { name: 'React.js', level: 'Intermediate', percentage: 75 },
    { name: 'Node.js & Express', level: 'Intermediate', percentage: 70 },
    { name: 'MongoDB', level: 'Intermediate', percentage: 65 },
    { name: 'TypeScript', level: 'Intermediate', percentage: 60 },
    { name: 'DSA & Algorithms', level: 'Growing', percentage: 70, link: 'https://leetcode.com/u/iakshatkr/' },
    { name: 'Git & Version Control', level: 'Advanced', percentage: 80 }
  ];

  useEffect(() => {
    // Animate bars when component comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatedBars(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all skill bars
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('.skill-bar').forEach((bar) => {
        observer.observe(bar);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="section slide-in-right" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills & Technologies</h2>
        <div className="grid skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="card skill">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <strong>{skill.name}</strong>
                <span className="pill">{skill.level}</span>
              </div>
              <div className="meter" aria-hidden="true">
                <div
                  className={`bar skill-bar ${animatedBars.has(index) ? 'animate' : ''}`}
                  data-index={index}
                  style={{
                    width: animatedBars.has(index) ? `${skill.percentage}%` : '0%',
                    transition: 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                ></div>
              </div>
              {skill.link && (
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-link"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-2)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
                >
                  View Profile →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;