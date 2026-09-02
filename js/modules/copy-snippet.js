/* ==========================================
   INTERACTIVE CODE SNIPPET COPY DEMO MODULE
   ========================================== */

export function initCopySnippet() {
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

  // Layout Framework Block Filter
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
}
