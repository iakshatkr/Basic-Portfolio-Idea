import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Connect from './components/Connect';
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

    // Section animations with IntersectionObserver
    const sections = document.querySelectorAll('.section');
    if (sections.length > 0 && 'IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate');
            }, 100);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      sections.forEach((section, index) => {
        // Add different animation classes based on position
        if (index % 3 === 0) {
          section.classList.add('fade-in');
        } else if (index % 3 === 1) {
          section.classList.add('slide-in-left');
        } else {
          section.classList.add('slide-in-right');
        }
        sectionObserver.observe(section);
      });

      // Cleanup observer
      return () => {
        sectionObserver.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }

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
        <Education />
        <Skills />
        <Experience />
        <Connect />
        <Contact />
        {/* Projects section placeholder */}
        <section id="projects" className="section fade-in">
          <div className="container">
            <h2>Production-Ready Applications & System Designs</h2>
            <p className="subtitle">Full-stack applications, algorithmic solutions, and scalable system architectures. Coming soon with interactive demos and technical deep-dives.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
