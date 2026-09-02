/* ==========================================
   THEME MODULE (Dark / Light Mode Switcher)
   ========================================== */

export function initTheme() {
  const themeLightBtn = document.getElementById('themeLightBtn');
  const themeDarkBtn = document.getElementById('themeDarkBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');

  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  if (themeLightBtn) {
    themeLightBtn.addEventListener('click', () => setTheme('light'));
  }

  if (themeDarkBtn) {
    themeDarkBtn.addEventListener('click', () => setTheme('dark'));
  }
}

export function setTheme(theme) {
  const activeThemeIcon = document.querySelector('.theme-icon') || document.getElementById('themeIcon');
  const themeLightBtn = document.getElementById('themeLightBtn');
  const themeDarkBtn = document.getElementById('themeDarkBtn');

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (activeThemeIcon) activeThemeIcon.textContent = '☀️';
    if (themeDarkBtn) themeDarkBtn.classList.add('active');
    if (themeLightBtn) themeLightBtn.classList.remove('active');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (activeThemeIcon) activeThemeIcon.textContent = '🌙';
    if (themeLightBtn) themeLightBtn.classList.add('active');
    if (themeDarkBtn) themeDarkBtn.classList.remove('active');
    localStorage.setItem('theme', 'light');
  }
}
