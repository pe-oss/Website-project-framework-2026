/* ==========================================
   FRAMEWORK STYLE SWITCHER MODULE (Style 1 - Style 4)
   ========================================== */

const storeBrandingMap = {
  style1: 'STYLE 1 (CORPORATE)',
  style2: 'STYLE 2 (PORTFOLIO)',
  style3: 'STYLE 3 (SAAS TECH)',
  style4: 'STYLE 4 (E-COMMERCE)',
  coffee: 'STYLE 1 (CORPORATE)',
  bakery: 'STYLE 2 (PORTFOLIO)',
  grocery: 'STYLE 3 (SAAS TECH)',
  general: 'STYLE 4 (E-COMMERCE)'
};

const storeAliasMap = {
  coffee: 'style1',
  bakery: 'style2',
  grocery: 'style3',
  general: 'style4',
  style1: 'coffee',
  style2: 'bakery',
  style3: 'grocery',
  style4: 'general'
};

export function initStoreSwitcher() {
  const storeBtns = document.querySelectorAll('.store-btn, .store-setting-btn');
  const styleCatalogCards = document.querySelectorAll('.style-catalog-card');
  const savedStoreStyle = localStorage.getItem('storeStyle') || 'style1';

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

  const normalizedStore = store;
  const aliasStore = storeAliasMap[store] || store;

  document.documentElement.setAttribute('data-store-style', normalizedStore);
  document.documentElement.style.removeProperty('--color-accent');

  if (logoBadge && storeBrandingMap[normalizedStore]) {
    logoBadge.textContent = storeBrandingMap[normalizedStore];
  }

  storeBtns.forEach(btn => {
    const val = btn.getAttribute('data-store');
    if (val === normalizedStore || val === aliasStore) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  styleCatalogCards.forEach(card => {
    const val = card.getAttribute('data-style-preset');
    if (val === normalizedStore || val === aliasStore) {
      card.classList.add('active-style');
    } else {
      card.classList.remove('active-style');
    }
  });

  storePresetContainers.forEach(container => {
    const val = container.getAttribute('data-store-preset');
    if (val === normalizedStore || val === aliasStore) {
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

  localStorage.setItem('storeStyle', normalizedStore);
}
