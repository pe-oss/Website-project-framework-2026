/* ==========================================
   FRAMEWORK STYLE SWITCHER MODULE (Style 1 - Style 4)
   Đồng bộ toàn diện nội dung Style và Header 2 tầng (Top Bar & Main Bar)
   ========================================== */

const headerStylesConfig = {
  style1: {
    name: 'STYLE 1 (DOANH NGHIỆP)',
    hotline: '(028) 3822 9999',
    hotlineTel: '02838229999',
    email: 'corporate@nexuscorp.vn',
    address: '3A Tôn Đức Thắng, Quận 1, TP.HCM',
    portalText: 'Cổng Khách Hàng / Portal ↗',
    portalHref: '#corp-audit',
    logoMark: '🏢',
    logoTitle: 'NEXUS CORP',
    logoBadge: 'STYLE 1 • DOANH NGHIỆP',
    servicesLabel: 'Giải Pháp B2B',
    servicesHref: '#corp-seo-pillars',
    subItems: [
      { title: '1. Technical SEO', desc: 'Core Web Vitals, Schema & Lập chỉ mục', icon: '⚙️', href: '#corp-seo-pillars' },
      { title: '2. On-page SEO', desc: 'Topic Cluster, Thẻ Meta & Search Intent', icon: '📑', href: '#corp-seo-pillars' },
      { title: '3. Content SEO E-E-A-T', desc: 'Whitepapers, Case Studies & Phễu B2B', icon: '✍️', href: '#corp-seo-pillars' },
      { title: '4. Off-page & Local', desc: 'Domain Authority, Báo chí & Bản đồ', icon: '🌐', href: '#corp-seo-pillars' }
    ],
    caseStudiesText: 'Hồ Sơ Năng Lực',
    caseStudiesHref: '#corp-profile',
    searchPlaceholder: 'Tìm giải pháp B2B, SEO, Whitepaper...',
    quickTags: ['Technical SEO', 'Core Web Vitals', 'E-E-A-T', 'Schema', 'Audit Kỹ Thuật'],
    ctaIcon: '🏢',
    ctaText: 'Đăng Ký Tư Vấn 1:1',
    ctaHref: '#corp-audit'
  },
  style2: {
    name: 'STYLE 2 (PORTFOLIO)',
    hotline: '0909 888 123',
    hotlineTel: '0909888123',
    email: 'hello@lumenstudio.design',
    address: 'Studio: 24 Pasteur, Q.1, TP.HCM & Shibuya, Tokyo',
    portalText: 'Client Proofing Room ↗',
    portalHref: '#lumen-booking',
    logoMark: '🎨',
    logoTitle: 'LUMEN STUDIO',
    logoBadge: 'STYLE 2 • PORTFOLIO',
    servicesLabel: 'Dịch Vụ Sáng Tạo',
    servicesHref: '#lumen-works',
    subItems: [
      { title: '1. Brand Identity Design', desc: 'Hệ thống nhận diện & Typography độc bản', icon: '✨', href: '#lumen-works' },
      { title: '2. Art Direction & 3D', desc: 'Chỉ đạo nghệ thuật & Visual Motion đồ họa', icon: '📽️', href: '#lumen-works' },
      { title: '3. Editorial & Spatial', desc: 'Ấn phẩm cao cấp & Thiết kế không gian triển lãm', icon: '🏛️', href: '#lumen-works' },
      { title: '4. Digital Experience', desc: 'Giao diện tương tác nghệ thuật & Portfolio', icon: '💻', href: '#lumen-works' }
    ],
    caseStudiesText: 'Tác Phẩm Tiêu Biểu',
    caseStudiesHref: '#lumen-awards',
    searchPlaceholder: 'Tìm kiếm dự án, ấn phẩm, tác phẩm...',
    quickTags: ['Brand Identity', 'Art Direction', 'Triển Lãm', 'Typography', 'Book Studio'],
    ctaIcon: '🎨',
    ctaText: 'Book Dự Án Ngay',
    ctaHref: '#lumen-booking'
  },
  style3: {
    name: 'STYLE 3 (SAAS CÔNG NGHỆ)',
    hotline: '1900 8899 (24/7)',
    hotlineTel: '19008899',
    email: 'support@cloudsphere.ai',
    address: 'Cloud Region: VN-Central & SG-East Data Center',
    portalText: 'Cloud Console / Login ↗',
    portalHref: '#saas-earlybird',
    logoMark: '⚡',
    logoTitle: 'CLOUDSPHERE AI',
    logoBadge: 'STYLE 3 • SAAS & TECH',
    servicesLabel: 'Tính Năng Nền Tảng',
    servicesHref: '#saas-modules',
    subItems: [
      { title: '1. Unified Data Pipeline', desc: 'Kết nối tự động 100+ nguồn dữ liệu & ETL', icon: '🔄', href: '#saas-modules' },
      { title: '2. Autonomous Predictive AI', desc: 'Dự báo xu hướng & Phát hiện dị biệt thời gian thực', icon: '🧠', href: '#saas-modules' },
      { title: '3. High-Throughput Engine', desc: 'Xử lý 1.2M sự kiện/giây với độ trễ < 5ms', icon: '⚡', href: '#saas-modules' },
      { title: '4. Enterprise Security SSO', desc: 'Chuẩn SOC2, HIPAA, GDPR & Nhật ký bất biến', icon: '🛡️', href: '#saas-modules' }
    ],
    caseStudiesText: 'Chứng Nhận & Bảng Giá',
    caseStudiesHref: '#saas-compliance',
    searchPlaceholder: 'Tìm tính năng, tài liệu API docs...',
    quickTags: ['Predictive AI', 'Pipeline ETL', 'Throughput', 'SOC2 Security', 'Dùng Thử'],
    ctaIcon: '⚡',
    ctaText: 'Dùng Thử Miễn Phí',
    ctaHref: '#saas-earlybird'
  },
  style4: {
    name: 'STYLE 4 (E-COMMERCE)',
    hotline: '1800 6868 (Miễn phí)',
    hotlineTel: '18006868',
    email: 'cskh@novatech.vn',
    address: 'Hệ Thống 12 Showroom Trải Nghiệm Toàn Quốc',
    portalText: 'Tra Cứu Đơn Hàng ↗',
    portalHref: '#nova-flashsale',
    logoMark: '🛒',
    logoTitle: 'NOVA TECH',
    logoBadge: 'STYLE 4 • E-COMMERCE',
    servicesLabel: 'Danh Mục Sản Phẩm',
    servicesHref: '#nova-products',
    subItems: [
      { title: '1. Laptop & Gaming Gear', desc: 'Màn hình OLED 240Hz, Core i9 & Tản nhiệt buồng hơi', icon: '💻', href: '#nova-products' },
      { title: '2. Âm Thanh & Audio Hi-Fi', desc: 'Tai nghe ANC chống ồn chủ động 45dB & DAC rời', icon: '🎧', href: '#nova-products' },
      { title: '3. Smarthome & AI Camera', desc: 'Camera an ninh 4K AI & Trung tâm điều khiển Matter', icon: '🏠', href: '#nova-products' },
      { title: '4. Phụ Kiện Sạc GaN 140W', desc: 'Củ sạc siêu nhanh 3 cổng, Hub Type-C Thunderbolt', icon: '⚡', href: '#nova-products' }
    ],
    caseStudiesText: 'Chính Sách & Cam Kết',
    caseStudiesHref: '#nova-reviews',
    searchPlaceholder: 'Tìm kiếm sản phẩm, thiết bị, deal hot...',
    quickTags: ['Laptop OLED', 'Tai Nghe ANC', 'Smarthome 4K', 'Flash Sale', 'Showroom'],
    ctaIcon: '🛒',
    ctaText: 'Giỏ Hàng / Mua Ngay',
    ctaHref: '#nova-flashsale'
  }
};

const storeAliasMap = {
  coffee: 'style1',
  bakery: 'style2',
  grocery: 'style3',
  general: 'style4',
  corporate: 'style1',
  portfolio: 'style2',
  saas: 'style3',
  ecommerce: 'style4',
  style1: 'style1',
  style2: 'style2',
  style3: 'style3',
  style4: 'style4'
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

  initHeaderInteractions();
}

export function setStoreStyle(store, shouldScroll = false) {
  const storeBtns = document.querySelectorAll('.store-btn, .store-setting-btn');
  const storePresetContainers = document.querySelectorAll('.store-preset-container');
  const styleCatalogCards = document.querySelectorAll('.style-catalog-card');

  const normalizedStore = storeAliasMap[store] || store || 'style1';
  const config = headerStylesConfig[normalizedStore] || headerStylesConfig.style1;

  document.documentElement.setAttribute('data-store-style', normalizedStore);
  document.documentElement.style.removeProperty('--color-accent');

  // 1. Cập nhật thông tin trên Header 2 tầng (Top Bar & Main Bar)
  updateHeaderContent(config);

  // 2. Active buttons & catalog cards
  storeBtns.forEach(btn => {
    const val = btn.getAttribute('data-store');
    const mapped = storeAliasMap[val] || val;
    if (mapped === normalizedStore) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  styleCatalogCards.forEach(card => {
    const val = card.getAttribute('data-style-preset');
    const mapped = storeAliasMap[val] || val;
    if (mapped === normalizedStore) {
      card.classList.add('active-style');
    } else {
      card.classList.remove('active-style');
    }
  });

  // 3. Kích hoạt container nội dung trang tương ứng
  storePresetContainers.forEach(container => {
    const val = container.getAttribute('data-store-preset');
    const mapped = storeAliasMap[val] || val;
    if (mapped === normalizedStore) {
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

function updateHeaderContent(cfg) {
  // Topbar items
  const hotlineVal = document.getElementById('topbarHotlineVal');
  if (hotlineVal) {
    hotlineVal.textContent = cfg.hotline;
    hotlineVal.setAttribute('href', `tel:${cfg.hotlineTel}`);
  }

  const emailVal = document.getElementById('topbarEmailVal');
  if (emailVal) {
    emailVal.textContent = cfg.email;
    emailVal.setAttribute('href', `mailto:${cfg.email}`);
  }

  const addressVal = document.getElementById('topbarAddressVal');
  if (addressVal) {
    addressVal.textContent = cfg.address;
  }

  const portalText = document.getElementById('topbarPortalText');
  const portalLink = document.getElementById('topbarPortalLink');
  if (portalText && portalLink) {
    portalText.textContent = cfg.portalText;
    portalLink.setAttribute('href', cfg.portalHref);
  }

  // Logo & Brand
  const logoMark = document.getElementById('logoMark');
  if (logoMark) logoMark.textContent = cfg.logoMark;

  const logoTitle = document.getElementById('logoTitle');
  if (logoTitle) logoTitle.textContent = cfg.logoTitle;

  const logoBadge = document.getElementById('logoBadge');
  if (logoBadge) logoBadge.textContent = cfg.logoBadge;

  // Nav menu
  const navServicesLabel = document.getElementById('navServicesLabel');
  const navServicesTrigger = document.getElementById('navServicesTrigger');
  if (navServicesLabel && navServicesTrigger) {
    navServicesLabel.textContent = cfg.servicesLabel;
    navServicesTrigger.setAttribute('href', cfg.servicesHref);
  }

  if (cfg.subItems && cfg.subItems.length >= 4) {
    for (let i = 1; i <= 4; i++) {
      const item = cfg.subItems[i - 1];
      const subLink = document.getElementById(`subItem${i}`);
      const subTitle = document.getElementById(`subItem${i}Title`);
      const subDesc = document.getElementById(`subItem${i}Desc`);
      if (subLink) subLink.setAttribute('href', item.href);
      if (subTitle) subTitle.textContent = item.title;
      if (subDesc) subDesc.textContent = item.desc;
    }
  }

  const navCaseStudiesLink = document.getElementById('navCaseStudiesLink');
  if (navCaseStudiesLink) {
    navCaseStudiesLink.textContent = cfg.caseStudiesText;
    navCaseStudiesLink.setAttribute('href', cfg.caseStudiesHref);
  }

  // Search Placeholder & Quick Tags
  const headerSearchInput = document.getElementById('headerSearchInput');
  if (headerSearchInput) {
    headerSearchInput.setAttribute('placeholder', cfg.searchPlaceholder);
  }

  const searchDropdownResults = document.getElementById('searchDropdownResults');
  if (searchDropdownResults && cfg.quickTags) {
    const quickTagContainer = searchDropdownResults.querySelector('.search-quick-tags');
    if (quickTagContainer) {
      quickTagContainer.innerHTML = cfg.quickTags
        .map(tag => `<button type="button" class="quick-tag-btn" data-search-target="${cfg.servicesHref}">${tag}</button>`)
        .join('');
      
      // Bind click event to quick tags
      quickTagContainer.querySelectorAll('.quick-tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetSelector = btn.getAttribute('data-search-target');
          const targetElem = document.querySelector(targetSelector);
          if (targetElem) {
            targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (headerSearchInput) headerSearchInput.value = btn.textContent;
          }
        });
      });
    }
  }

  // CTA Button
  const headerCtaBtn = document.getElementById('headerCtaBtn');
  const headerCtaIcon = document.getElementById('headerCtaIcon');
  const headerCtaText = document.getElementById('headerCtaText');
  if (headerCtaBtn && headerCtaIcon && headerCtaText) {
    headerCtaIcon.textContent = cfg.ctaIcon;
    headerCtaText.textContent = cfg.ctaText;
    headerCtaBtn.setAttribute('href', cfg.ctaHref);
  }
}

function initHeaderInteractions() {
  // 1. Phím tắt ⌘K / Ctrl+K kích hoạt ô tìm kiếm
  const searchInput = document.getElementById('headerSearchInput');
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // 2. Chuyển đổi ngôn ngữ VI / EN
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('siteLanguage', lang);
    });
  });

  // 3. Xử lý Enter khi tìm kiếm
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (query) {
          // Tìm khối chứa từ khóa trên trang
          const activeContainer = document.querySelector('.store-preset-container.active');
          if (activeContainer) {
            const sections = activeContainer.querySelectorAll('section');
            let found = false;
            for (const sec of sections) {
              if (sec.textContent.toLowerCase().includes(query)) {
                sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
                sec.style.outline = '2px solid var(--color-accent)';
                setTimeout(() => sec.style.outline = '', 2000);
                found = true;
                break;
              }
            }
            if (!found) {
              activeContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      }
    });
  }
}
