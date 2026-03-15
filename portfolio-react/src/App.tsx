import React, { useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
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
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Scroll Progress Indicator */}
      <div id="scrollProgress" className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar"></div>
      </div>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
