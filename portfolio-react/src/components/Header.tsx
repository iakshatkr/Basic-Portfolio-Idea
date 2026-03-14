import React from 'react';
import { profile } from '../content/site';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((value) => !value);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[rgba(10,12,11,0.88)] shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              AK
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/50">{profile.role}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-sm font-medium text-white/68 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#b5ff7d]/40 hover:bg-white/10"
            >
              Start a conversation
            </button>
          </nav>

          <button
            className="rounded-xl border border-white/12 bg-white/6 p-2 text-white transition-colors duration-300 hover:bg-white/12 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`mt-4 transition-all duration-300 md:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
          <nav className="rounded-3xl border border-white/10 bg-[rgba(15,17,16,0.92)] p-4 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="block w-full rounded-2xl px-3 py-3 text-left text-sm font-medium text-white/72 transition-colors duration-300 hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </button>
            ))}

            <div className="mt-4 border-t border-white/10 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white"
              >
                Email {profile.name.split(' ')[0]}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
