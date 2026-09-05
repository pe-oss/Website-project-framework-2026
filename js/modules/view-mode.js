/* ==========================================
   VIEW MODE MODULE (Landing Page vs Admin Dashboard Switcher)
   ========================================== */

export function initViewMode() {
  const landingView = document.getElementById('landingView');
  const adminView = document.getElementById('adminView');

  // Nhận biết trang hiện tại qua pathname
  const path = window.location.pathname.toLowerCase();
  const isDedicatedAdminPage = path.endsWith('admin.html');
  const isDedicatedLandingPage = path.endsWith('index.html') || path.endsWith('/') || path === '';

  if (isDedicatedAdminPage && adminView) {
    // Đang ở trang admin.html -> luôn hiển thị adminView
    adminView.classList.add('active');
    if (landingView) landingView.classList.remove('active');
    updateNavButtons('admin');
    localStorage.setItem('viewMode', 'admin');
  } else if (isDedicatedLandingPage && landingView) {
    const savedViewMode = localStorage.getItem('viewMode') || 'landing';
    if (savedViewMode === 'admin' && adminView) {
      setViewMode('admin');
    } else {
      setViewMode('landing');
    }
  } else {
    if (adminView) adminView.classList.add('active');
    if (landingView) landingView.classList.add('active');
  }

  // Sự kiện nút chuyển chế độ Landing Page
  const landingTriggers = document.querySelectorAll('a[href="#landingView"], a[href="index.html"], #btnLandingMode');
  landingTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (document.getElementById('landingView')) {
        e.preventDefault();
        setViewMode('landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = 'index.html';
      }
    });
  });

  // Sự kiện nút chuyển chế độ Admin Dashboard
  const adminTriggers = document.querySelectorAll('a[href="#adminView"], a[href="admin.html"], #btnAdminMode');
  adminTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (document.getElementById('adminView') && document.getElementById('landingView')) {
        e.preventDefault();
        setViewMode('admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = 'admin.html';
      }
    });
  });
}

export function setViewMode(mode) {
  const landingView = document.getElementById('landingView');
  const adminView = document.getElementById('adminView');

  if (mode === 'admin') {
    if (adminView) {
      adminView.classList.add('active');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(adminView, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
    if (landingView) landingView.classList.remove('active');

    updateNavButtons('admin');
    localStorage.setItem('viewMode', 'admin');
  } else {
    if (landingView) {
      landingView.classList.add('active');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(landingView, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }
    if (adminView) adminView.classList.remove('active');

    updateNavButtons('landing');
    localStorage.setItem('viewMode', 'landing');
  }
}

function updateNavButtons(mode) {
  const landingNavLinks = document.querySelectorAll('a[href="#landingView"], a[href="index.html"]');
  const adminNavLinks = document.querySelectorAll('a[href="#adminView"], a[href="admin.html"]');
  const modeBtns = document.querySelectorAll('#btnLandingMode, #btnAdminMode, .mode-btn');

  modeBtns.forEach(btn => {
    if ((mode === 'admin' && (btn.id === 'btnAdminMode' || btn.getAttribute('data-mode') === 'admin')) ||
        (mode === 'landing' && (btn.id === 'btnLandingMode' || btn.getAttribute('data-mode') === 'landing'))) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (mode === 'admin') {
    adminNavLinks.forEach(link => link.classList.add('active'));
    landingNavLinks.forEach(link => link.classList.remove('active'));
  } else {
    landingNavLinks.forEach(link => link.classList.add('active'));
    adminNavLinks.forEach(link => link.classList.remove('active'));
  }
}
