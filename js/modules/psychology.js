/* ==========================================
   CUSTOMER PSYCHOLOGY INSIGHTS TOGGLE MODULE
   ========================================== */

export function initPsychology() {
  const psychToggleBtns = document.querySelectorAll('#psychToggleBtn, .psych-setting-btn');
  let isPsychologyActive = localStorage.getItem('showPsychology') === 'true';

  updatePsychologyState(isPsychologyActive);

  psychToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      isPsychologyActive = !isPsychologyActive;
      updatePsychologyState(isPsychologyActive);
    });
  });
}

function updatePsychologyState(show) {
  const psychToggleBtns = document.querySelectorAll('#psychToggleBtn, .psych-setting-btn');
  const psychToggleTexts = document.querySelectorAll('#psychToggleText');
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
