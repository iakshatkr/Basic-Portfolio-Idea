import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('light', initialTheme === 'light');

    // Initialize year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }

    // Scroll effects
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      const header = document.querySelector('header');
      const scrollProgressBar = document.querySelector('.scroll-progress-bar') as HTMLElement;

      if (header) {
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      if (scrollProgressBar) {
        scrollProgressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Theme change listener
    const themeListener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('light', newTheme === 'light');
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeListener);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeListener);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Scroll Progress Indicator */}
      <div id="scrollProgress" className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar"></div>
      </div>

      <Header onThemeToggle={toggleTheme} isLight={theme === 'light'} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Contact />
        {/* Projects section placeholder */}
        <section id="projects" className="section fade-in">
          <div className="container">
            <h2>Featured Projects</h2>
            <p className="subtitle">Coming soon! Projects will be showcased here with interactive cards, live demos, and GitHub links.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
