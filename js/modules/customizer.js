/* ==========================================
   FLOATING INTERACTIVE STYLE CUSTOMIZER MODULE
   ========================================== */

export function initCustomizer() {
  const floatingCustomizerBtn = document.getElementById('floatingCustomizerBtn');
  const floatingCustomizerPanel = document.getElementById('floatingCustomizerPanel');
  const customizerCloseBtn = document.getElementById('customizerCloseBtn');

  if (floatingCustomizerBtn && floatingCustomizerPanel) {
    floatingCustomizerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingCustomizerPanel.classList.toggle('show');
      if (typeof gsap !== 'undefined' && floatingCustomizerPanel.classList.contains('show')) {
        gsap.from('.customizer-group', {
          y: 15,
          opacity: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: 'power2.out'
        });
      }
    });

    if (customizerCloseBtn) {
      customizerCloseBtn.addEventListener('click', () => {
        floatingCustomizerPanel.classList.remove('show');
      });
    }

    document.addEventListener('click', (e) => {
      if (!floatingCustomizerPanel.contains(e.target) && !floatingCustomizerBtn.contains(e.target)) {
        floatingCustomizerPanel.classList.remove('show');
      }
    });
  }

  // Live Accent Color Swatches Selection
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      e.stopPropagation();
      const color = swatch.getAttribute('data-color');
      document.documentElement.style.setProperty('--color-accent', color);

      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      if (typeof gsap !== 'undefined') {
        gsap.from(swatch, { scale: 0.8, duration: 0.2, ease: 'back.out(2)' });
      }
    });
  });

  // Live Border Radius Selection
  const radiusOptBtns = document.querySelectorAll('.radius-opt-btn');
  radiusOptBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const radius = btn.getAttribute('data-radius');
      document.documentElement.style.setProperty('--radius-md', radius);
      document.documentElement.style.setProperty('--radius-lg', `calc(${radius} * 1.5)`);

      radiusOptBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
