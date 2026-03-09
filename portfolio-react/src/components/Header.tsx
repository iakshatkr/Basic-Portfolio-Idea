import React from 'react';

interface HeaderProps {
  onThemeToggle: () => void;
  isLight: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, isLight }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container nav">
        <div className="brand" aria-label="Akshat Kumar">
          <span className="dot" aria-hidden="true"></span>
          <div>
            <span>Akshat Kumar</span>
            <span className="brand-subtitle">Full-Stack Developer</span>
          </div>
        </div>

        <nav aria-label="Primary">
          <button 
            className="menu-btn" 
            aria-expanded={menuOpen} 
            aria-controls="mobileMenu" 
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
            <span className="sr-only">Menu</span>
          </button>
          <div className="nav-links" id="desktopNav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#connect">Connect</a>
            <a href="#contact">Contact</a>
            <button 
              className="btn secondary" 
              aria-pressed={isLight} 
              title="Toggle theme"
              onClick={onThemeToggle}
            >
              <span className="icon">{isLight ? '☀️' : '🌙'}</span>
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </nav>
      </div>
      <div id="mobileMenu" className={`container ${menuOpen ? 'open' : ''}`} role="region" aria-label="Mobile menu">
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button 
          className="btn secondary" 
          aria-pressed={isLight} 
          title="Toggle theme"
          onClick={onThemeToggle}
        >
          <span className="icon">{isLight ? '☀️' : '🌙'}</span>
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </header>
  );
};

export default Header;