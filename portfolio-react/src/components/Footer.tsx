import React from 'react';
import { profile, socialLinks } from '../content/site';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container flex flex-col gap-5 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-white/72">{profile.name}</p>
          <small>&copy; {new Date().getFullYear()} All rights reserved.</small>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            Resume
          </a>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="footer-link">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
