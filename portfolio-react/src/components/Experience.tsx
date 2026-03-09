import React from 'react';

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
  category: string;
}

const Experience: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'LeetCode Problem Solver',
      description: 'Solved 500+ algorithmic problems across various difficulty levels. Specializing in dynamic programming, graph algorithms, and system design.',
      date: '2023 - Present',
      icon: 'DSA',
      category: 'Competitive Programming'
    },
    {
      title: 'Full-Stack Web Applications',
      description: 'Built 15+ production-ready applications using MERN stack, Next.js, and modern web technologies. Deployed on AWS, Vercel, and Heroku.',
      date: '2023 - Present',
      icon: 'WEB',
      category: 'Development'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to various open-source projects. Improved documentation, fixed bugs, and added new features to popular repositories.',
      date: '2023 - Present',
      icon: 'OSS',
      category: 'Open Source'
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Mastered advanced DSA concepts including trees, graphs, dynamic programming, and optimization techniques. Regular practice on multiple platforms.',
      date: '2022 - Present',
      icon: 'ALGO',
      category: 'Learning'
    },
    {
      title: 'System Design & Architecture',
      description: 'Designed scalable systems handling thousands of users. Experience with microservices, databases, caching, and cloud infrastructure.',
      date: '2024 - Present',
      icon: 'ARCH',
      category: 'Architecture'
    },
    {
      title: 'Technical Content Creator',
      description: 'Created educational content about programming concepts, algorithms, and best practices. Helped 1000+ developers through tutorials and articles.',
      date: '2023 - Present',
      icon: 'BLOG',
      category: 'Education'
    }
  ];

  const categories = Array.from(new Set(achievements.map(a => a.category)));

  return (
    <section id="experience" className="section slide-in-left">
      <div className="container">
        <h2>Technical Journey & Achievements</h2>
        <p className="subtitle">Continuous learning and growth in software development, competitive programming, and system design.</p>

        {categories.map((category, categoryIndex) => (
          <div key={category} style={{marginBottom: '3rem'}}>
            <h3 style={{
              color: 'var(--primary)',
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{fontSize: '1.2rem', fontWeight: 'bold'}}>⚡</span>
              {category}
            </h3>

            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {achievements
                .filter(achievement => achievement.category === category)
                .map((achievement, index) => (
                  <div key={index} className="card" style={{padding: '1.5rem'}}>
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                      <div style={{
                        fontSize: '0.9rem',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--primary)',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        color: 'white',
                        flexShrink: 0
                      }}>
                        {achievement.icon}
                      </div>
                      <div style={{flex: 1}}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '0.5rem'
                        }}>
                          <h4 style={{
                            margin: '0',
                            fontSize: '1.1rem',
                            color: 'var(--text)'
                          }}>
                            {achievement.title}
                          </h4>
                          <span className="pill" style={{fontSize: '0.75rem'}}>
                            {achievement.date}
                          </span>
                        </div>
                        <p style={{
                          margin: '0',
                          color: 'var(--muted)',
                          lineHeight: '1.5'
                        }}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-2) 100%)',
          borderRadius: 'var(--radius)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{marginBottom: '1rem'}}>🚀 Currently Learning & Exploring</h3>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <span className="pill" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Distributed Systems</span>
            <span className="pill" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Machine Learning</span>
            <span className="pill" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Cloud Architecture</span>
            <span className="pill" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>DevOps & CI/CD</span>
            <span className="pill" style={{background: 'rgba(255,255,255,0.2)', color: 'white'}}>Blockchain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;