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
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/8 bg-[rgba(5,5,5,0.82)] shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              AK
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">{profile.role}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-2 py-2 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-all duration-300 hover:bg-white/6 hover:text-white hover:backdrop-blur-md"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center rounded-full border border-white/10 bg-[#f3efe5] px-4 py-2 text-sm font-medium text-[#050505] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              View Resume
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
          <nav className="rounded-3xl border border-white/10 bg-[rgba(10,10,10,0.92)] p-4 backdrop-blur-xl">
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
                onClick={() => window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer')}
                className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white"
              >
                Open Resume
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
