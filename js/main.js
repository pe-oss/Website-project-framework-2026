/* ==========================================
   MAIN.JS - ES6 Master Application Module Entry Point
   Xử lý khởi tạo hệ thống và kết nối các module giao diện
   ========================================== */

import { loadComponents, updateActiveNav } from './modules/component-loader.js?v=3';
import { initTheme } from './modules/theme.js';
import { initViewMode } from './modules/view-mode.js';
import { initStoreSwitcher } from './modules/store-switcher.js';
import { initCustomizer } from './modules/customizer.js';
import { initPsychology } from './modules/psychology.js';
import { initAnimations } from './modules/animations.js';
import { initCopySnippet } from './modules/copy-snippet.js';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Tải tự động các thành phần giao diện tái sử dụng (Header, Footer, Customizer) nếu có
  await loadComponents();

  // 2. Khởi tạo các module tính năng
  updateActiveNav();
  initSettingsDropdown();
  initTheme();
  initViewMode();
  initStoreSwitcher();
  initCustomizer();
  initPsychology();
  initCopySnippet();
  initAnimations();

  console.log('🚀 Minimalist Framework 2026 initialized cleanly with ES6 Modules!');
});

function initSettingsDropdown() {
  const settingsToggleBtn = document.getElementById('settingsToggleBtn');
  const settingsDropdownMenu = document.getElementById('settingsDropdownMenu');
  const settingsCloseBtn = document.getElementById('settingsCloseBtn');

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

    document.addEventListener('click', (e) => {
      if (!settingsDropdownMenu.contains(e.target) && !settingsToggleBtn.contains(e.target)) {
        settingsDropdownMenu.classList.remove('show');
        settingsToggleBtn.classList.remove('active');
        settingsToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const menuToggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
    });
  }
}
