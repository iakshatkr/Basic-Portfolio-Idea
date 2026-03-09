import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

const Connect: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/iakshatkr/',
      icon: 'LC',
      description: 'Solving DSA problems daily',
      color: '#FFA116'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: 'GH',
      description: 'Open source contributions & projects',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      icon: 'IN',
      description: 'Professional network & opportunities',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: 'TW',
      description: 'Tech discussions & updates',
      color: '#1DA1F2'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/',
      icon: 'DC',
      description: 'Developer communities & networking',
      color: '#5865F2'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/',
      icon: 'CC',
      description: 'Competitive programming contests',
      color: '#5B4638'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/',
      icon: 'HR',
      description: 'Coding challenges & certifications',
      color: '#00EA64'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/',
      icon: 'GFG',
      description: 'Learning & problem solving',
      color: '#0F9D58'
    }
  ];

  return (
    <section id="connect" className="section fade-in">
      <div className="container">
        <h2>Let's Connect & Collaborate</h2>
        <p className="subtitle">Find me across platforms where I share knowledge, solve problems, and connect with fellow developers.</p>

        <div className="grid" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: '1.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: `2px solid ${link.color}20`,
                background: `linear-gradient(135deg, ${link.color}05, ${link.color}10)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${link.color}30`;
                e.currentTarget.style.borderColor = link.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow)';
                e.currentTarget.style.borderColor = `${link.color}20`;
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{
                  fontSize: '1.2rem',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${link.color}20, ${link.color}30)`,
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  color: link.color,
                  border: `2px solid ${link.color}40`
                }}>
                  {link.icon}
                </div>
                <div>
                  <h3 style={{
                    margin: '0 0 0.25rem 0',
                    fontSize: '1.1rem',
                    color: 'var(--text)'
                  }}>
                    {link.name}
                  </h3>
                  <p style={{
                    margin: '0',
                    fontSize: '0.9rem',
                    color: 'var(--muted)'
                  }}>
                    {link.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'var(--card)',
          borderRadius: 'var(--radius)',
          border: '1px solid rgba(139,149,103,.1)'
        }}>
          <h3 style={{marginBottom: '1rem'}}>Open for Opportunities</h3>
          <p style={{color: 'var(--muted)', marginBottom: '1.5rem'}}>
            Currently seeking SDE internships and full-time positions. Let's discuss how we can work together!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <span className="pill">🚀 Open to Remote Work</span>
            <span className="pill">💻 Full-Stack Development</span>
            <span className="pill">🎯 Competitive Programming</span>
            <span className="pill">📚 Always Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;