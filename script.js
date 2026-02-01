  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getUTCFullYear();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      // ensure initial aria-hidden state
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuBtn.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(open));
        mobileMenu.setAttribute('aria-hidden', String(!open));
        const icon = menuBtn.querySelector('span[aria-hidden="true"]');
        if (icon) icon.textContent = open ? '✕' : '☰';
      });
    }

    // Theme toggle (light/dark)
    const root = document.documentElement;
    const themeToggles = [
      document.getElementById('themeToggle'),
      document.getElementById('themeToggleMobile')
    ].filter(Boolean);

    function setTheme(mode) {
      if (mode === 'light') root.classList.add('light');
      else root.classList.remove('light');
      localStorage.setItem('theme', mode);
      themeToggles.forEach(btn => {
        btn.setAttribute('aria-pressed', String(mode === 'light'));
        const icon = btn.querySelector('.icon');
        if (icon) icon.textContent = mode === 'light' ? '☀️' : '🌙';
      });
    }

    // Initialize theme from localStorage or prefers-color-scheme
    const saved = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(saved || (prefersLight ? 'light' : 'dark'));

    themeToggles.forEach(btn => btn.addEventListener('click', () => {
      const isLight = root.classList.contains('light');
      setTheme(isLight ? 'dark' : 'light');
    }));

    // Basic client-side form guard to avoid accidental empty mailto and show inline error
    const contactForm = document.getElementById('contactForm');
    const formError = document.getElementById('formError');
    contactForm?.addEventListener('submit', (e) => {
      const form = e.target;
      const data = new FormData(form);
      for (const [k,v] of data.entries()) {
        if (!String(v).trim()) {
          e.preventDefault();
          if (formError) {
            formError.textContent = 'Please fill all fields before sending.';
            formError.style.display = 'block';
          } else {
            alert('Please fill all fields.');
          }
          return;
        }
      }
      if (formError) formError.style.display = 'none';
    });

    // Respect reduced motion preference for animations
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.slide-in').forEach(el => el.style.animation = 'none');
    }