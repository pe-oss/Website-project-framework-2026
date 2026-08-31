/* ==========================================
   MAIN.JS - Vanilla JavaScript Application Logic
   Xử lý tương tác giao diện, Dark Mode & Navigation
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Kho lưu trữ DOM elements
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const menuToggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  /* -----------------------------------
     1. Xử lý Dark / Light Theme Switcher
     ----------------------------------- */
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Áp dụng theme ban đầu
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
     2. Responsive Mobile Navigation Menu
     ----------------------------------- */
  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
      const isExpanded = navMenu.classList.contains('is-active');
      menuToggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Đóng menu di động khi nhấp ra ngoài hoặc chọn link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        if (menuToggleBtn) menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -----------------------------------
     3. Smooth Scrolling & Active State
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

          // Cập nhật trạng thái active
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });

  /* -----------------------------------
     4. Interactive Code Snippet Copy Demo
     ----------------------------------- */
  const copyBtn = document.getElementById('copyCodeBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeSnippet = document.getElementById('codeSnippetText');
      if (codeSnippet) {
        navigator.clipboard.writeText(codeSnippet.innerText).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = '✓ Đã Copy!';
          copyBtn.style.background = 'var(--gradient-primary)';
          copyBtn.style.color = '#fff';
          setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.background = '';
            copyBtn.style.color = '';
          }, 2000);
        });
      }
    });
  }

  console.log('🚀 Website Framework 2026 initialized successfully!');
});
