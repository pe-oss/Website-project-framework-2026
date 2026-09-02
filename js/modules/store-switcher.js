/* ==========================================
   STORE STYLE SWITCHER MODULE (Coffee, Bakery, Grocery, General Store)
   ========================================== */

const storeBrandingMap = {
  coffee: 'COFFEE STORE',
  bakery: 'BAKERY SHOP',
  grocery: 'FRESH FOOD',
  general: 'GENERAL STORE'
};

export function initStoreSwitcher() {
  const storeBtns = document.querySelectorAll('.store-btn, .store-setting-btn');
  const styleCatalogCards = document.querySelectorAll('.style-catalog-card');
  const savedStoreStyle = localStorage.getItem('storeStyle') || 'coffee';

  setStoreStyle(savedStoreStyle, false);

  storeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const selectedStore = btn.getAttribute('data-store');
      setStoreStyle(selectedStore, true);
    });
  });

  styleCatalogCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedStore = card.getAttribute('data-style-preset');
      setStoreStyle(selectedStore, true);
    });
  });
}

export function setStoreStyle(store, shouldScroll = false) {
  const storeBtns = document.querySelectorAll('.store-btn, .store-setting-btn');
  const storePresetContainers = document.querySelectorAll('.store-preset-container');
  const styleCatalogCards = document.querySelectorAll('.style-catalog-card');
  const logoBadge = document.querySelector('.logo-badge');

  document.documentElement.setAttribute('data-store-style', store);
  document.documentElement.style.removeProperty('--color-accent');

  if (logoBadge && storeBrandingMap[store]) {
    logoBadge.textContent = storeBrandingMap[store];
  }

  storeBtns.forEach(btn => {
    if (btn.getAttribute('data-store') === store) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  styleCatalogCards.forEach(card => {
    if (card.getAttribute('data-style-preset') === store) {
      card.classList.add('active-style');
    } else {
      card.classList.remove('active-style');
    }
  });

  storePresetContainers.forEach(container => {
    if (container.getAttribute('data-store-preset') === store) {
      container.classList.add('active');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(container, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
      if (shouldScroll) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      container.classList.remove('active');
    }
  });

  localStorage.setItem('storeStyle', store);
}
