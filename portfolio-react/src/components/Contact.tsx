import React from 'react';
import { profile, socialLinks } from '../content/site';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-panel reveal">
          <div>
            <span className="section-kicker">Contact / Opportunities</span>
            <h2 className="section-title mt-5 max-w-3xl">Let’s turn this portfolio into something that makes recruiters pause.</h2>
            <p className="section-copy mt-5 max-w-2xl">
              I’m available for internships, early-career SDE roles, and strong project collaborations. If you’re hiring, building,
              or want to connect, email is the fastest way in.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Email {profile.name.split(' ')[0]}
            </a>
            <a className="btn secondary" href={`mailto:${profile.email}?subject=Resume Request`}>
              Request Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="social-tile">
                <span className="section-kicker">{link.label}</span>
                <strong className="mt-3 block text-xl text-white">{link.label}</strong>
                <span className="mt-2 block text-sm text-white/60">Open profile</span>
              </a>
            ))}
            <div className="social-tile">
              <span className="section-kicker">Email</span>
              <strong className="mt-3 block break-all text-xl text-white">{profile.email}</strong>
              <span className="mt-2 block text-sm text-white/60">Primary contact</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
