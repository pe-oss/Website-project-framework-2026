/* ==========================================
   COMPONENT LOADER MODULE
   Tải động các thành phần HTML tái sử dụng (Header, Footer, Customizer)
   ========================================== */

export async function loadComponents() {
  const components = [
    { id: 'header-component', path: 'components/header.html' },
    { id: 'footer-component', path: 'components/footer.html' },
    { id: 'customizer-component', path: 'components/customizer.html' }
  ];

  for (const comp of components) {
    const targetElem = document.getElementById(comp.id);
    if (targetElem) {
      try {
        const response = await fetch(`${comp.path}?_t=${Date.now()}`, { cache: 'no-cache' });
        if (response.ok) {
          const html = await response.text();
          targetElem.innerHTML = html;
          if (comp.id === 'header-component') {
            updateActiveNav();
          }
        }
      } catch (err) {
        console.warn(`Could not load component from ${comp.path}:`, err);
      }
    }
  }
}

export function updateActiveNav() {
  const pathParts = window.location.pathname.split('/');
  let currentPage = pathParts[pathParts.length - 1] || 'index.html';
  if (!currentPage || currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }

  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  navLinks.forEach(link => {
    if (link.classList.contains('nav-dropdown-trigger')) return;
    const href = link.getAttribute('href');
    if (!href) return;
    const targetPage = href.split('/').pop().split('#')[0];

    if (targetPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
