import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight';

export const useScrollAnimation = (elementRef: React.RefObject<HTMLElement>, animationType: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' = 'fadeIn') => {
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    let animation: gsap.core.Tween;
    switch (animationType) {
      case 'slideUp':
        animation = gsap.from(element, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
        });
        break;
      case 'slideInLeft':
        animation = gsap.from(element, {
          opacity: 0,
          x: -80,
          duration: 1,
          ease: 'power3.out',
        });
        break;
      case 'slideInRight':
        animation = gsap.from(element, {
          opacity: 0,
          x: 80,
          duration: 1,
          ease: 'power3.out',
        });
        break;
      default:
        animation = gsap.from(element, {
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });
    }

    ScrollTrigger.create({
      trigger: element,
      start: 'top 75%',
      onEnter: () => animation.play(),
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [elementRef, animationType]);
};

export const animateOnScroll = (selector: string, animationType: AnimationType = 'fadeIn') => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    let animation: gsap.core.Tween;
    switch (animationType) {
      case 'slideUp':
        animation = gsap.from(element, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power3.out',
        });
        break;
      case 'slideInLeft':
        animation = gsap.from(element, {
          opacity: 0,
          x: -80,
          duration: 0.8,
          ease: 'power3.out',
        });
        break;
      case 'slideInRight':
        animation = gsap.from(element, {
          opacity: 0,
          x: 80,
          duration: 0.8,
          ease: 'power3.out',
        });
        break;
      default:
        animation = gsap.from(element, {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
    }

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => animation.play(),
    });
  });
};
