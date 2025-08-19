  // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });

    // Theme toggle (light/dark) using CSS variables
    const root = document.documentElement;
    const themeToggles = [
      document.getElementById('themeToggle'),
      document.getElementById('themeToggleMobile')
    ].filter(Boolean);

    function setTheme(mode) {
      if (mode === 'light') root.classList.add('light');
      else root.classList.remove('light');
      localStorage.setItem('theme', mode);
      themeToggles.forEach(btn => btn.setAttribute('aria-pressed', mode === 'light'));
    }

    // Initialize theme from localStorage or prefers-color-scheme
    const saved = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(saved || (prefersLight ? 'light' : 'dark'));

    themeToggles.forEach(btn => btn.addEventListener('click', () => {
      const isLight = root.classList.contains('light');
      setTheme(isLight ? 'dark' : 'light');
    }));

    // Optional: basic client-side form guard to avoid accidental empty mailto
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
      const form = e.target;
      const data = new FormData(form);
      for (const [k,v] of data.entries()) {
        if (!String(v).trim()) { alert('Please fill all fields.'); e.preventDefault(); return; }
      }
    });
