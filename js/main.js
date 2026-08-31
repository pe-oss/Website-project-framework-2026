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

  /* -----------------------------------
     6. Store Style Switcher (Thay Đổi Toàn Trang: Cà phê, Tiệm Bánh, Thực Phẩm, General Store)
     ----------------------------------- */
  const storeBtns = document.querySelectorAll('.store-btn');
  const storePresetContainers = document.querySelectorAll('.store-preset-container');
  const logoBadge = document.querySelector('.logo-badge');
  const savedStoreStyle = localStorage.getItem('storeStyle') || 'coffee';

  const storeBrandingMap = {
    coffee: '☕ COFFEE STORE',
    bakery: '🍰 BAKERY SHOP',
    grocery: '🥬 FRESH FOOD',
    general: '🛍️ GENERAL STORE'
  };

  setStoreStyle(savedStoreStyle);

  storeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedStore = btn.getAttribute('data-store');
      setStoreStyle(selectedStore);
    });
  });

  function setStoreStyle(store) {
    // 1. Chuyển đổi theme màu sắc toàn trang (Full-page global theme)
    document.documentElement.setAttribute('data-store-style', store);

    // 2. Cập nhật nhãn Logo Branding toàn hệ thống ở Header
    if (logoBadge && storeBrandingMap[store]) {
      logoBadge.textContent = storeBrandingMap[store];
    }

    // 3. Cập nhật trạng thái Active trên nút chọn phong cách
    storeBtns.forEach(btn => {
      if (btn.getAttribute('data-store') === store) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Hiển thị khối nội dung giao diện tương ứng với loại cửa hàng
    storePresetContainers.forEach(container => {
      if (container.getAttribute('data-store-preset') === store) {
        container.classList.add('active');
      } else {
        container.classList.remove('active');
      }
    });

    localStorage.setItem('storeStyle', store);
  }


  /* -----------------------------------
     7. Layout Framework Block Filter
     ----------------------------------- */
  const layoutBtns = document.querySelectorAll('.layout-btn');

  layoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-layout');

      layoutBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const activeContainer = document.querySelector('.store-preset-container.active');
      if (!activeContainer) return;

      const layoutBlocks = activeContainer.querySelectorAll('.layout-block');
      layoutBlocks.forEach(block => {
        if (filter === 'all' || block.getAttribute('data-layout-type') === filter) {
          block.style.display = 'block';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  /* -----------------------------------
     8. Customer Psychology Insights Toggle
     ----------------------------------- */
  const psychToggleBtn = document.getElementById('psychToggleBtn');
  const psychToggleText = document.getElementById('psychToggleText');
  let isPsychologyActive = localStorage.getItem('showPsychology') === 'true';

  updatePsychologyState(isPsychologyActive);

  if (psychToggleBtn) {
    psychToggleBtn.addEventListener('click', () => {
      isPsychologyActive = !isPsychologyActive;
      updatePsychologyState(isPsychologyActive);
    });
  }

  function updatePsychologyState(show) {
    const psychCards = document.querySelectorAll('.psych-note-card');
    psychCards.forEach(card => {
      if (show) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });

    if (psychToggleText) {
      psychToggleText.textContent = show
        ? 'Ẩn Phân Tích Tâm Lý Khách Hàng'
        : 'Bật Phân Tích Tâm Lý Khách Hàng';
    }

    if (psychToggleBtn) {
      if (show) {
        psychToggleBtn.style.backgroundColor = 'var(--psych-purple)';
        psychToggleBtn.style.color = '#fff';
      } else {
        psychToggleBtn.style.backgroundColor = 'var(--psych-bg-soft)';
        psychToggleBtn.style.color = 'var(--psych-purple)';
      }
    }

    localStorage.setItem('showPsychology', show ? 'true' : 'false');
  }

  console.log('🚀 Store Styles, Layout Frameworks & Customer Psychology initialized successfully!');
});

