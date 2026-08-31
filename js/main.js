/* ==========================================
   MAIN.JS - Vanilla JavaScript Application Logic
   Xử lý tương tác giao diện, Dark Mode, Mode Switcher (Landing vs Admin)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Kho lưu trữ DOM elements
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const menuToggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mode Switcher Elements (Landing Page vs Admin Dashboard)
  const btnLandingMode = document.getElementById('btnLandingMode');
  const btnAdminMode = document.getElementById('btnAdminMode');
  const landingView = document.getElementById('landingView');
  const adminView = document.getElementById('adminView');

  /* -----------------------------------
     1. Xử lý Chế Độ Hiển Thị (Landing Page vs Admin Dashboard)
     ----------------------------------- */
  const savedViewMode = localStorage.getItem('viewMode') || 'landing';
  setViewMode(savedViewMode);

  if (btnLandingMode) {
    btnLandingMode.addEventListener('click', () => setViewMode('landing'));
  }

  if (btnAdminMode) {
    btnAdminMode.addEventListener('click', () => setViewMode('admin'));
  }

  function setViewMode(mode) {
    if (mode === 'admin') {
      if (adminView) adminView.classList.add('active');
      if (landingView) landingView.classList.remove('active');
      if (btnAdminMode) btnAdminMode.classList.add('active');
      if (btnLandingMode) btnLandingMode.classList.remove('active');
      localStorage.setItem('viewMode', 'admin');
    } else {
      if (landingView) landingView.classList.add('active');
      if (adminView) adminView.classList.remove('active');
      if (btnLandingMode) btnLandingMode.classList.add('active');
      if (btnAdminMode) btnAdminMode.classList.remove('active');
      localStorage.setItem('viewMode', 'landing');
    }
  }

  /* -----------------------------------
     2. Xử lý Dark / Light Theme Switcher
     ----------------------------------- */
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

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  }

  /* -----------------------------------
     3. Responsive Mobile Navigation Menu
     ----------------------------------- */
  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
      const isExpanded = navMenu.classList.contains('is-active');
      menuToggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------
     4. Smooth Scrolling & Active State
     ----------------------------------- */
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.site-header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });

  /* -----------------------------------
     5. Interactive Code Snippet Copy Demo
     ----------------------------------- */
  const copyBtn = document.getElementById('copyCodeBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeSnippet = document.getElementById('codeSnippetText');
      if (codeSnippet) {
        navigator.clipboard.writeText(codeSnippet.innerText).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = '✓ Đã Copy!';
          setTimeout(() => {
            copyBtn.innerText = originalText;
          }, 2000);
        });
      }
    });
  }

  console.log('🚀 Minimalist Web Framework 2026 initialized successfully!');
});
