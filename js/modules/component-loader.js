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
        const response = await fetch(comp.path);
        if (response.ok) {
          const html = await response.text();
          targetElem.innerHTML = html;
        }
      } catch (err) {
        console.warn(`Could not load component from ${comp.path}:`, err);
      }
    }
  }
}
