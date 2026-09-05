/* ==========================================
   CONSOLIDATED INTERACTIVE STYLE CUSTOMIZER MODULE
   Lắng nghe toàn bộ tùy chỉnh trong Menu Cài Đặt ở Header
   ========================================== */

export function initCustomizer() {
  const floatingCustomizerBtn = document.getElementById('floatingCustomizerBtn');
  const settingsToggleBtn = document.getElementById('settingsToggleBtn');

  // Bấm vào nút floating ở góc phải sẽ mở Menu Cài Đặt trên Header
  if (floatingCustomizerBtn && settingsToggleBtn) {
    floatingCustomizerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsToggleBtn.click();
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
