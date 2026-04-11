import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealVariant = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';

const revealSettings: Record<RevealVariant, gsap.TweenVars> = {
  fade: {
    opacity: 0,
    y: 0,
    scale: 1,
  },
  'slide-up': {
    opacity: 0,
    y: 56,
    scale: 1,
  },
  'slide-left': {
    opacity: 0,
    x: -72,
    scale: 1,
  },
  'slide-right': {
    opacity: 0,
    x: 72,
    scale: 1,
  },
  scale: {
    opacity: 0,
    y: 24,
    scale: 0.92,
  },
};

export const usePortfolioMotion = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTimeline
        .set('.hero-section', { '--hero-ready': 1 } as gsap.TweenVars)
        .fromTo(
          '.hero-kicker, .hero-title, .hero-description, .hero-actions, .hero-metrics',
          { autoAlpha: 0, y: 38 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
          }
        )
        .fromTo(
          '.hero-panel',
          { autoAlpha: 0, x: 46, rotateX: 8, transformOrigin: 'top center' },
          {
            autoAlpha: 1,
            x: 0,
            rotateX: 0,
            duration: 1,
          },
          '-=0.55'
        )
        .fromTo(
          '.metric-card',
          { autoAlpha: 0, y: 26, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
          },
          '-=0.55'
        )
        .fromTo(
          '.marquee-shell',
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          '-=0.35'
        );

      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
        const variant = (element.dataset.reveal as RevealVariant | undefined) ?? 'slide-up';
        const delay = Number(element.dataset.revealDelay ?? 0);
        const duration = Number(element.dataset.revealDuration ?? 0.85);

        gsap.set(element, revealSettings[variant]);

        gsap.to(element, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            once: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
