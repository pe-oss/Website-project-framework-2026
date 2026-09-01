/* ==========================================
   MAIN.JS - Vanilla JavaScript Application Logic
   Xử lý tương tác giao diện, Dark Mode, Mode Switcher (Landing vs Admin)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Kho lưu trữ DOM elements
  // Settings Dropdown Elements
  const settingsToggleBtn = document.getElementById('settingsToggleBtn');
  const settingsDropdownMenu = document.getElementById('settingsDropdownMenu');
  const settingsCloseBtn = document.getElementById('settingsCloseBtn');
  const themeLightBtn = document.getElementById('themeLightBtn');
  const themeDarkBtn = document.getElementById('themeDarkBtn');

  // Mode Switcher Elements (Landing Page vs Admin Dashboard)
  const btnLandingMode = document.getElementById('btnLandingMode');
  const btnAdminMode = document.getElementById('btnAdminMode');
  const landingView = document.getElementById('landingView');
  const adminView = document.getElementById('adminView');

  /* -----------------------------------
     0. Xử lý Bảng Cài Đặt (Function Setting Dropdown)
     ----------------------------------- */
  if (settingsToggleBtn && settingsDropdownMenu) {
    settingsToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = settingsDropdownMenu.classList.toggle('show');
      settingsToggleBtn.classList.toggle('active', isOpen);
      settingsToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    if (settingsCloseBtn) {
      settingsCloseBtn.addEventListener('click', () => {
        settingsDropdownMenu.classList.remove('show');
        settingsToggleBtn.classList.remove('active');
        settingsToggleBtn.setAttribute('aria-expanded', 'false');
      });
    }

    // Đóng dropdown khi click ra ngoài
    document.addEventListener('click', (e) => {
      if (!settingsDropdownMenu.contains(e.target) && !settingsToggleBtn.contains(e.target)) {
        settingsDropdownMenu.classList.remove('show');
        settingsToggleBtn.classList.remove('active');
        settingsToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

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
    const landingNavLinks = document.querySelectorAll('a[href="#landingView"]');
    const adminNavLinks = document.querySelectorAll('a[href="#adminView"]');

    if (mode === 'admin') {
      if (adminView) adminView.classList.add('active');
      if (landingView) landingView.classList.remove('active');
      if (btnAdminMode) btnAdminMode.classList.add('active');
      if (btnLandingMode) btnLandingMode.classList.remove('active');

      adminNavLinks.forEach(link => link.classList.add('active'));
      landingNavLinks.forEach(link => link.classList.remove('active'));

      localStorage.setItem('viewMode', 'admin');
    } else {
      if (landingView) landingView.classList.add('active');
      if (adminView) adminView.classList.remove('active');
      if (btnLandingMode) btnLandingMode.classList.add('active');
      if (btnAdminMode) btnAdminMode.classList.remove('active');

      landingNavLinks.forEach(link => link.classList.add('active'));
      adminNavLinks.forEach(link => link.classList.remove('active'));

      localStorage.setItem('viewMode', 'landing');
    }
  }

  /* -----------------------------------
     2. Xử lý Dark / Light Theme Switcher (Cài Đặt Giao Diện)
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

  if (themeLightBtn) {
    themeLightBtn.addEventListener('click', () => setTheme('light'));
  }

  if (themeDarkBtn) {
    themeDarkBtn.addEventListener('click', () => setTheme('dark'));
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeDarkBtn) themeDarkBtn.classList.add('active');
      if (themeLightBtn) themeLightBtn.classList.remove('active');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeLightBtn) themeLightBtn.classList.add('active');
      if (themeDarkBtn) themeDarkBtn.classList.remove('active');
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
     4. Smooth Scrolling & Active State with View Mode Handling
     ----------------------------------- */
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();

        // Tự động kích hoạt View Mode tương ứng khi bấm trên Nav Header
        if (targetId === '#adminView') {
          setViewMode('admin');
        } else if (targetId === '#landingView' || document.querySelector(`#landingView ${targetId}`)) {
          setViewMode('landing');
        }

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
  const storeBtns = document.querySelectorAll('.store-btn, .store-setting-btn');
  const storePresetContainers = document.querySelectorAll('.store-preset-container');
  const logoBadge = document.querySelector('.logo-badge');
  const savedStoreStyle = localStorage.getItem('storeStyle') || 'coffee';

  const storeBrandingMap = {
    coffee: 'COFFEE STORE',
    bakery: 'BAKERY SHOP',
    grocery: 'FRESH FOOD',
    general: 'GENERAL STORE'
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

    // 3. Cập nhật trạng thái Active trên nút chọn phong cách (Cả Body và Menu Cài Đặt)
    storeBtns.forEach(btn => {
      if (btn.getAttribute('data-store') === store) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Cập nhật trạng thái Active trên danh sách các Thẻ Phong Cách Thiết Kế (Style Catalog Cards)
    const styleCatalogCards = document.querySelectorAll('.style-catalog-card');
    styleCatalogCards.forEach(card => {
      if (card.getAttribute('data-style-preset') === store) {
        card.classList.add('active-style');
      } else {
        card.classList.remove('active-style');
      }
    });

    // 5. Hiển thị khối nội dung giao diện tương ứng với loại cửa hàng & Animation GSAP
    storePresetContainers.forEach(container => {
      if (container.getAttribute('data-store-preset') === store) {
        container.classList.add('active');
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(container, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
          );
        }
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
  const psychToggleBtns = document.querySelectorAll('#psychToggleBtn, .psych-setting-btn');
  const psychToggleTexts = document.querySelectorAll('#psychToggleText');
  let isPsychologyActive = localStorage.getItem('showPsychology') === 'true';

  updatePsychologyState(isPsychologyActive);

  psychToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      isPsychologyActive = !isPsychologyActive;
      updatePsychologyState(isPsychologyActive);
    });
  });

  function updatePsychologyState(show) {
    const psychCards = document.querySelectorAll('.psych-note-card');
    psychCards.forEach(card => {
      if (show) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });

    psychToggleTexts.forEach(textElem => {
      textElem.textContent = show
        ? 'Ẩn Phân Tích Tâm Lý Khách Hàng'
        : 'Bật Phân Tích Tâm Lý Khách Hàng';
    });

    psychToggleBtns.forEach(btn => {
      if (show) {
        btn.style.backgroundColor = 'var(--psych-purple)';
        btn.style.color = '#fff';
      } else {
        btn.style.backgroundColor = 'var(--psych-bg-soft)';
        btn.style.color = 'var(--psych-purple)';
      }
    });

    localStorage.setItem('showPsychology', show ? 'true' : 'false');
  }

  /* -----------------------------------
     9. GSAP Animations & Interactive Playground
     ----------------------------------- */
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Header Entrance Animation
    gsap.from('.site-header', {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Side Flanks Entrance Animations
    gsap.from('.flank-left', {
      x: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.flank-right', {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    });

    // ScrollTrigger Animation for Framework Blocks
    if (typeof ScrollTrigger !== 'undefined') {
      const blocks = document.querySelectorAll('.block');
      blocks.forEach(block => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });
      });
    }

    // GSAP Test Button 1: gsap.from()
    const btnTestGsap1 = document.getElementById('btnTestGsap1');
    if (btnTestGsap1) {
      btnTestGsap1.addEventListener('click', () => {
        gsap.from('#gsapCard1', {
          scale: 0.85,
          opacity: 0,
          duration: 0.6,
          ease: 'back.out(1.7)'
        });
      });
    }

    // GSAP Test Button 2: gsap.timeline()
    const btnTestGsap2 = document.getElementById('btnTestGsap2');
    if (btnTestGsap2) {
      btnTestGsap2.addEventListener('click', () => {
        const tl = gsap.timeline();
        tl.to('#gsapCard2', { y: -15, duration: 0.2, ease: 'power1.out' })
          .to('#gsapCard2', { y: 0, duration: 0.4, ease: 'bounce.out' })
          .to('#gsapCard2', { backgroundColor: 'var(--color-block-badge)', duration: 0.3 })
          .to('#gsapCard2', { backgroundColor: 'var(--color-card-bg)', duration: 0.3 });
      });
    }

    // GSAP Test Button 3: Re-trigger Scroll
    const btnTestGsap3 = document.getElementById('btnTestGsap3');
    if (btnTestGsap3) {
      btnTestGsap3.addEventListener('click', () => {
        gsap.from('#gsapCard3', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    }

    console.log('⚡ GSAP 3 & ScrollTrigger Animations initialized successfully!');
  }

  console.log('🚀 Store Styles, Layout Frameworks & GSAP Animations ready!');
});

