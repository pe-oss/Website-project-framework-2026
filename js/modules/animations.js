/* ==========================================
   GSAP ANIMATIONS & INTERACTIVE PLAYGROUND MODULE
   ========================================== */

export function initAnimations() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Header Entrance Animation
  gsap.from('.site-header', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Side Flanks Entrance Animations
  gsap.from('.flank-left', {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.flank-right', {
    x: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
  });

  // ScrollTrigger Animation for Framework Blocks
  if (typeof ScrollTrigger !== 'undefined') {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  }

  // GSAP Test Button 1: gsap.from()
  const btnTestGsap1 = document.getElementById('btnTestGsap1');
  if (btnTestGsap1) {
    btnTestGsap1.addEventListener('click', () => {
      gsap.from('#gsapCard1', {
        scale: 0.85,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    });
  }

  // GSAP Test Button 2: gsap.timeline()
  const btnTestGsap2 = document.getElementById('btnTestGsap2');
  if (btnTestGsap2) {
    btnTestGsap2.addEventListener('click', () => {
      const tl = gsap.timeline();
      tl.to('#gsapCard2', { y: -15, duration: 0.2, ease: 'power1.out' })
        .to('#gsapCard2', { y: 0, duration: 0.4, ease: 'bounce.out' })
        .to('#gsapCard2', { backgroundColor: 'var(--color-block-badge)', duration: 0.3 })
        .to('#gsapCard2', { backgroundColor: 'var(--color-card-bg)', duration: 0.3 });
    });
  }

  // GSAP Test Button 3: Re-trigger Scroll
  const btnTestGsap3 = document.getElementById('btnTestGsap3');
  if (btnTestGsap3) {
    btnTestGsap3.addEventListener('click', () => {
      gsap.from('#gsapCard3', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  }
}
