import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
  technologies?: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Your University Name',
      year: '2022 - 2026',
      description: 'Specializing in Data Structures, Algorithms, System Design, and Software Engineering. Active in competitive programming and open-source contributions.',
      technologies: ['C++', 'Java', 'Python', 'Data Structures', 'Algorithms', 'System Design']
    },
    {
      degree: 'Higher Secondary Certificate (12th)',
      institution: 'Your School Name',
      year: '2020 - 2022',
      description: 'Mathematics, Physics, Chemistry with Computer Science. Achieved excellent grades and developed foundation in programming.',
      technologies: ['C', 'Python', 'Mathematics', 'Physics']
    }
  ];

  return (
    <section id="education" className="section slide-in-right">
      <div className="container">
        <h2>Academic Journey & Technical Foundation</h2>
        <p className="subtitle">Building strong fundamentals in computer science and mathematics to tackle complex engineering challenges.</p>

        <div className="grid" style={{gap: '2rem'}}>
          {educationData.map((edu, index) => (
            <div key={index} className="card" style={{padding: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                <div>
                  <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.25rem'}}>{edu.degree}</h3>
                  <p style={{margin: '0', color: 'var(--primary)', fontWeight: '500'}}>{edu.institution}</p>
                </div>
                <span className="pill" style={{fontSize: '0.8rem'}}>{edu.year}</span>
              </div>

              <p style={{margin: '1rem 0', color: 'var(--text)'}}>{edu.description}</p>

              {edu.technologies && (
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem'}}>
                  {edu.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="pill" style={{fontSize: '0.75rem', padding: '0.25rem 0.5rem'}}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;