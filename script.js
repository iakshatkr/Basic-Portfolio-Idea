'use strict';

/**
 * Portfolio Application
 * Main entry point for client-side functionality
 */

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Safe DOM element retrieval
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} DOM element or null
 */
const getElement = (id) => {
  try {
    return document.getElementById(id);
  } catch (error) {
    console.warn(`Failed to get element: ${id}`, error);
    return null;
  }
};

/**
 * Log utility for easier debugging
 */
const log = {
  info: (msg, data) => console.log(`[INFO] ${msg}`, data || ''),
  warn: (msg, data) => console.warn(`[WARN] ${msg}`, data || ''),
  error: (msg, data) => console.error(`[ERROR] ${msg}`, data || ''),
};

/**
 * Debounce function to limit frequency of function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// ============================================================================
// Initialize when DOM is ready
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  log.info('Portfolio initialized');
  
  initializeYear();
  initializeMobileMenu();
  initializeThemeToggle();
  initializeFormValidation();
  initializeAccessibility();
  initializeSmoothScroll();
  initializeScrollToTop();
});

// ============================================================================
// Year Display
// ============================================================================

/**
 * Update year in footer
 */
function initializeYear() {
  const yearEl = getElement('year');
  if (yearEl) {
    yearEl.textContent = new Date().getUTCFullYear();
  }
}

// ============================================================================
// Mobile Menu Toggle
// ============================================================================

/**
 * Initialize mobile menu functionality
 */
function initializeMobileMenu() {
  const menuBtn = getElement('menuBtn');
  const mobileMenu = getElement('mobileMenu');
  
  if (!menuBtn || !mobileMenu) return;

  // Set initial ARIA state
  mobileMenu.setAttribute('aria-hidden', 'true');
  
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    updateMenuState(menuBtn, mobileMenu, isOpen);
  });

  // Close menu when escape key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      updateMenuState(menuBtn, mobileMenu, false);
    }
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      updateMenuState(menuBtn, mobileMenu, false);
    });
  });
}

/**
 * Update menu button and menu ARIA attributes
 */
function updateMenuState(btn, menu, isOpen) {
  btn.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
  
  const icon = btn.querySelector('span[aria-hidden="true"]');
  if (icon) {
    icon.textContent = isOpen ? '✕' : '☰';
  }
}

// ============================================================================
// Theme Toggle (Light/Dark Mode)
// ============================================================================

/**
 * Initialize theme toggle functionality
 */
function initializeThemeToggle() {
  const root = document.documentElement;
  const themeToggles = [
    getElement('themeToggle'),
    getElement('themeToggleMobile')
  ].filter(Boolean);

  if (themeToggles.length === 0) return;

  const setTheme = (mode) => {
    if (mode === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', mode);
    
    themeToggles.forEach(btn => {
      btn.setAttribute('aria-pressed', String(mode === 'light'));
      const icon = btn.querySelector('.icon');
      if (icon) {
        icon.textContent = mode === 'light' ? '☀️' : '🌙';
      }
    });
    
    log.info(`Theme changed to: ${mode}`);
  };

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  setTheme(initialTheme);

  // Listen to theme toggle buttons
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = root.classList.contains('light');
      setTheme(isLight ? 'dark' : 'light');
    });
  });

  // Listen to system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// ============================================================================
// Form Validation
// ============================================================================

/**
 * Initialize form validation
 */
function initializeFormValidation() {
  const contactForm = getElement('contactForm');
  const formError = getElement('formError');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    if (!validateForm(e.target)) {
      e.preventDefault();
      showFormError(formError, 'Please fill all fields before sending.');
    } else {
      clearFormError(formError);
    }
  });

  // Clear error on input
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      clearFormError(formError);
    });
  });
}

/**
 * Validate form fields
 */
function validateForm(form) {
  const formData = new FormData(form);
  
  for (const [key, value] of formData.entries()) {
    if (!String(value).trim()) {
      log.warn(`Form validation failed: ${key} is empty`);
      return false;
    }
  }
  
  return true;
}

/**
 * Display form error message
 */
function showFormError(errorEl, message) {
  if (!errorEl) {
    alert(message);
    return;
  }
  
  errorEl.textContent = message;
  errorEl.style.display = 'block';
  errorEl.setAttribute('role', 'alert');
}

/**
 * Clear form error message
 */
function clearFormError(errorEl) {
  if (errorEl) {
    errorEl.style.display = 'none';
    errorEl.textContent = '';
  }
}

// ============================================================================
// Accessibility
// ============================================================================

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
  // Respect prefers-reduced-motion for animations
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('.slide-in, [class*="animate"]').forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
    });
    log.info('Reduced motion preferences applied');
  }

  // Ensure keyboard navigation is accessible
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      const target = e.target;
      if (target.tagName === 'BUTTON' && !target.closest('form')) {
        target.click();
      }
    }
  });
}

// ============================================================================
// Smooth Scroll
// ============================================================================

/**
 * Initialize smooth scrolling for navigation links
 */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = getElement(href.substring(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================================================
// Scroll to Top Button
// ============================================================================

/**
 * Initialize scroll-to-top button functionality
 */
function initializeScrollToTop() {
  const scrollBtn = getElement('scrollToTop');
  if (!scrollBtn) return;

  const toggleScrollBtn = debounce(() => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
      scrollBtn.setAttribute('aria-hidden', 'false');
    } else {
      scrollBtn.classList.remove('visible');
      scrollBtn.setAttribute('aria-hidden', 'true');
    }
  }, 100);

  window.addEventListener('scroll', toggleScrollBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  scrollBtn.setAttribute('aria-hidden', 'true');
}
    