/* ==========================================
   VIEW MODE MODULE (Landing Page vs Admin Dashboard Switcher)
   ========================================== */

export function initViewMode() {
  const landingView = document.getElementById('landingView');
  const adminView = document.getElementById('adminView');

  const savedViewMode = localStorage.getItem('viewMode') || 'landing';
  setViewMode(savedViewMode);

  const landingTriggers = document.querySelectorAll('a[href="#landingView"], #btnLandingMode');
  const adminTriggers = document.querySelectorAll('a[href="#adminView"], #btnAdminMode');

  landingTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (document.getElementById('landingView')) {
        e.preventDefault();
        setViewMode('landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  adminTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (document.getElementById('adminView')) {
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
  const landingNavLinks = document.querySelectorAll('a[href="#landingView"], a[href="index.html"]');
  const adminNavLinks = document.querySelectorAll('a[href="#adminView"], a[href="admin.html"]');
  const modeBtns = document.querySelectorAll('#btnLandingMode, #btnAdminMode, .mode-btn');

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

    modeBtns.forEach(btn => {
      if (btn.id === 'btnAdminMode' || btn.getAttribute('data-mode') === 'admin') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    adminNavLinks.forEach(link => link.classList.add('active'));
    landingNavLinks.forEach(link => link.classList.remove('active'));

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

    modeBtns.forEach(btn => {
      if (btn.id === 'btnLandingMode' || btn.getAttribute('data-mode') === 'landing') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    landingNavLinks.forEach(link => link.classList.add('active'));
    adminNavLinks.forEach(link => link.classList.remove('active'));

    localStorage.setItem('viewMode', 'landing');
  }
}
