# Hướng Dẫn Sử Dụng Minimalist Web Framework 2026

## 🛠️ Kiến Trúc Mô-đun Hóa
Dự án được cấu trúc thành các module rõ ràng:

1. **HTML Components (`components/`)**:
   - `header.html`: Thanh điều hướng và menu cài đặt
   - `footer.html`: Chân trang hệ thống
   - `customizer.html`: Bộ tùy biến giao diện live

2. **CSS Modules (`css/`)**:
   - `components/`: Định kiểu chi tiết từng thành phần (buttons, header, footer, customizer, cards)
   - `pages/`: Định kiểu trang (landing.css, admin.css)

3. **JS Feature Modules (`js/modules/`)**:
   - `component-loader.js`: Nạp tự động header, footer, customizer vào DOM
   - `theme.js`: Quản lý Light/Dark theme
   - `store-switcher.js`: Quản lý Preset phong cách cửa hàng
   - `customizer.js`: Điều khiển widget tùy biến style trực tiếp

4. **Mock API Services (`js/api/`)**:
   - `user-api.js`, `product-api.js`, `order-api.js`: Chuẩn bị giao tiếp API Backend.
