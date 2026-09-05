# 🌐 Framework Thiết Lập Website & Tài Liệu Hướng Dẫn Hệ Thống

Tài liệu này được biên soạn nhằm hệ thống hóa toàn bộ 
**công nghệ, phần mềm, công cụ và khái niệm cốt lõi** cần nắm vững để xây dựng một website hoàn chỉnh ở mức 
**Frontend cơ bản (HTML5, Modern CSS3, JavaScript Vanilla)**. 

Đồng thời, đây là bộ **Framework (Boilerplate mẫu)** chuẩn hóa giúp bạn khởi tạo các dự án website mới một cách nhanh chóng, nhất quán và chuyên nghiệp.

---

## 📋 Mục Lục

1. [Quy Trình Phát Triển Một Website Hoàn Chỉnh](#1-quy-trình-phát-triển-một-website-hoàn-chỉnh)
2. [Các Công Nghệ Cốt Lõi (Core Technologies)](#2-các-công-nghệ-cốt-lõi-core-technologies)
   - [HTML5 (Cấu Trúc)](#21-html5---hypertext-markup-language)
   - [CSS3 & Modern Vanilla CSS (Giao Diện & Thẩm Mỹ)](#22-css3--modern-vanilla-css)
   - [JavaScript Vanilla (Tương Tác & Tác Vụ)](#23-javascript-vanilla-es6)

3. [Phần Mềm & Công Cụ Cần Thiết (Software & Tools)](#3-phần-mềm--công-cụ-cần-thiết-software--tools)
   - [Trình Soạn Thảo Code (Code Editor)](#31-code-editor---visual-studio-code)
   - [Công Cụ Kiểm Thử Trình Duyệt (Browser DevTools)](#32-browser-devtools)
   - [Quản Lý Phiên Bản (Git & GitHub)](#33-git--github)
   - [Công Cụ Thiết Kế UI/UX (Figma)](#34-figma)

4. [Các Khái Niệm Quan Trọng Cần Nắm Rõ (Key Concepts)](#4-các-khái-niệm-quan-trọng-cần-nắm-rõ-key-concepts)
   - [CSS Box Model](#41-css-box-model)
   - [CSS Positioning](#42-css-positioning)
   - [Bố Cục Layout: Flexbox & CSS Grid](#43-bố-cục-layout-flexbox--css-grid)
   - [Responsive Web Design & Đơn Vị Đo Lường](#44-responsive-web-design--đơn-vị-đo-lường)
   - [Semantic HTML & SEO Cơ Bản](#45-semantic-html--seo-cơ-bản)
   - [Modern Aesthetics: Design Tokens, Dark Mode & Micro-animations](#46-modern-aesthetics)
   
5. [Cấu Trúc Thư Mục & Hướng Dẫn Sử Dụng Framework](#5-cấu-trúc-thư-mục--hướng-dẫn-sử-dụng-framework)

---

## 1. Quy Trình Phát Triển Một Website Hoàn Chỉnh

Xây dựng website là một chuỗi các bước phối hợp từ ý tưởng đến sản phẩm thực tế:

```text
1. Ý tưởng & Wireframe  -->  2. Thiết kế UI/UX (Figma)  
-->  3. Lập trình HTML/CSS/JS  -->  4. Kiểm thử & Responsive  -->  5. Deploy Hosting
```

1. **Lập kế hoạch & Khảo sát:** Xác định mục tiêu website, đối tượng người dùng, tính năng chính và luồng trải nghiệm (Wireframe).

2. **Thiết kế UI/UX (Figma):** Xây dựng giao diện trực quan, bảng màu, typography, khoảng cách và thành phần (Components).

3. **Lập trình Frontend (HTML/CSS/JS):** 
   - Dựng khung xương tài liệu chuẩn Semantic với HTML5.
   - Trang trí giao diện, responsive layout và tạo hiệu ứng với CSS3.
   - Thêm tương tác người dùng, xử lý sự kiện với JavaScript.

4. **Kiểm thử (Testing):** Kiểm tra hiển thị đa trình duyệt (Chrome, Safari, Firefox), đa thiết bị (Desktop, Tablet, Mobile) và tốc độ tải trang.

5. **Triển khai (Deployment):** Đưa trang web lên môi trường Internet sử dụng các dịch vụ hosting/deployment miễn phí/trả phí (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

---

## 2. Các Công Nghệ Cốt Lõi (Core Technologies)

### 2.1 HTML5 - HyperText Markup Language
* **Vai trò:** Là ngôn ngữ đánh dấu siêu văn bản, đóng vai trò tạo nên **khung xương và cấu trúc** cho nội dung website.
* **Semantic Tags (Thẻ ngữ nghĩa):** Thay vì lạm dụng thẻ `<div>`, HTML5 cung cấp các thẻ giúp trình duyệt và công cụ tìm kiếm (Search Engines) hiểu rõ ý nghĩa của nội dung:
  - `<header>`: Phần đầu trang (logo, navigation, tiêu đề chính).
  - `<nav>`: Thanh điều hướng (menu).
  - `<main>`: Nội dung chính của trang (chỉ có 1 thẻ `<main>` duy nhất trên mỗi trang).
  - `<section>`: Phân đoạn nội dung có cùng chủ đề.
  - `<article>`: Bài viết hoặc nội dung độc lập có thể tái sử dụng.
  - `<aside>`: Nội dung phụ, thanh bên (sidebar).
  - `<footer>`: Phần chân trang (bản quyền, liên hệ, links phụ).
* **Meta Tags:** Thẻ nằm trong `<head>` cung cấp thông tin cấu hình cho trình duyệt & SEO:
  - `<meta charset="UTF-8">`: Bảng mã ký tự tiếng Việt và quốc tế.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Đảm bảo co giãn đúng tỉ lệ màn hình di động.
  - `<meta name="description" content="...">`: Mô tả trang web trên kết quả tìm kiếm Google.

### 2.2 CSS3 & Modern Vanilla CSS
* **Vai trò:** Định style, trang trí màu sắc, phông chữ, bố cục và hiệu ứng hình ảnh cho website.
* **Modern Vanilla CSS:** Sử dụng CSS nguyên bản nâng cao mà không phụ thuộc vào thư viện ngoài (như Bootstrap hay Tailwind), giúp code nhẹ, chạy nhanh và dễ kiểm soát hoàn toàn:
  - **CSS Custom Properties (Variables):** Quản lý màu sắc, font chữ, shadow tập trung tại một nơi (`variables.css`).
  - **Flexbox & Grid:** Hai hệ thống dàn trang mạnh mẽ nhất hiện nay.
  - **Transitions & Keyframe Animations:** Tạo hiệu ứng mượt mà khi hover, click hay load trang.

### 2.3 JavaScript Vanilla (ES6+)
* **Vai trò:** Ngôn ngữ lập trình giúp trang web **sống động và có khả năng tương tác** với người dùng.
* **Các tác vụ cơ bản:**
  - **DOM Manipulation:** Truy vấn (`document.querySelector`) và thay đổi nội dung, thuộc tính, class của các thẻ HTML.
  - **Event Handling:** Lắng nghe hành vi người dùng (click, scroll, submit form, toggle menu).
  - **LocalStorage:** Lưu giữ thông tin phía người dùng (ví dụ: lưu trạng thái Dark Mode hay danh sách giỏ hàng đơn giản).

---

## 3. Phần Mềm & Công Cụ Cần Thiết (Software & Tools)

### 3.1 Code Editor - Visual Studio Code (VS Code)
Trình soạn thảo mã nguồn phổ biến nhất thế giới hiện nay cho Web Developer.
* **Extensions khuyên dùng:**
  1. **Live Server** (by Ritwick Dey): Tạo Local Web Server tự động reload trình duyệt ngay khi bạn lưu file (`Ctrl + S`).
  2. **Prettier - Code formatter**: Tự động căn chỉnh format code HTML, CSS, JS sạch đẹp, đúng chuẩn.
  3. **Auto Rename Tag**: Tự động đổi tên thẻ đóng khi bạn sửa thẻ mở HTML.
  4. **Code Spell Checker**: Kiểm tra lỗi chính tả từ vựng tiếng Anh trong tên class, biến.

### 3.2 Browser DevTools
Công cụ tích hợp sẵn trong trình duyệt (Chrome, Edge, Firefox) bằng cách bấm `F12` hoặc phím phải chọn `Inspect` (Kiểm tra).
* **Elements Tab:** Xem và chỉnh sửa trực tiếp HTML/CSS realtime để test giao diện.
* **Console Tab:** Xem thông báo lỗi JavaScript, kiểm tra log dữ liệu với `console.log()`.
* **Network Tab:** Kiểm tra tốc độ và trạng thái tải các file tài nguyên (ảnh, CSS, JS).
* **Toggle Device Toolbar (`Ctrl + Shift + M`):** Giả lập màn hình các thiết bị di động (iPhone, iPad, Android).

### 3.3 Git & GitHub
* **Git:** Hệ thống quản lý phiên bản (Version Control System) giúp lưu lại lịch sử thay đổi code, khôi phục khi gặp lỗi và làm việc nhóm.
* **GitHub:** Nền tảng lưu trữ dự án Git trên đám mây, cho phép chia sẻ code và deploy trang web miễn phí với GitHub Pages.

### 3.4 Figma
* Công cụ thiết kế giao diện UI/UX tiêu chuẩn ngành web.
* Lập trình viên sử dụng Figma để: đo khoảng cách (`padding`, `margin`), lấy mã màu (HEX/HSL/RGB), xem thông số font chữ (`font-size`, `line-height`) và xuất ảnh (`export PNG/SVG`).

---

## 4. Các Khái Niệm Quan Trọng Cần Nắm Rõ (Key Concepts)

### 4.1 CSS Box Model
Mọi phần tử HTML trên trang web đều được trình duyệt coi là một hình hộp chữ nhật bao gồm 4 lớp từ trong ra ngoài:

```text
+-----------------------------------+
|              MARGIN               | (Khoảng cách với phần tử bên ngoài)
|  +-----------------------------+  |
|  |           BORDER            |  | (Đường viền của phần tử)
|  |  +-----------------------+  |  |
|  |  |        PADDING        |  |  | (Khoảng cách từ viền vào nội dung)
|  |  |  +-----------------+  |  |  |
|  |  |  |     CONTENT     |  |  |  | (Nội dung chữ, ảnh, icon...)
|  |  |  +-----------------+  |  |  |
|  |  +-----------------------+  |  |
|  +-----------------------------+  |
+-----------------------------------+
```

* **`box-sizing: border-box` (BẮT BUỘC NÊN DÙNG):** Đảm bảo kích thước `width` và `height` của phần tử đã bao gồm cả `padding` và `border`, giúp việc tính toán kích thước giao diện chính xác tuyệt đối.

### 4.2 CSS Positioning
Thuộc tính `position` xác định vị trí của phần tử trên trang web:
* `static` (Mặc định): Đi theo luồng hiển thị tự nhiên của tài liệu.
* `relative`: Định vị tương đối so với vị trí ban đầu của chính nó. Dùng làm mốc tọa độ cho phần tử con chứa `position: absolute`.
* `absolute`: Định vị tuyệt đối theo phần tử cha gần nhất có `position` khác `static`. Phần tử sẽ thoát khỏi luồng tài liệu tự nhiên.
* `fixed`: Định vị cố định so với cửa sổ trình duyệt (Viewport). Không bị trượt khi cuộn trang (thường dùng cho Menu top, nút Back-to-Top).
* `sticky`: Kết hợp giữa `relative` và `fixed`. Bình thường nằm trong luồng trang, nhưng khi cuộn tới vị trí quy định (như `top: 0`) nó sẽ dính lại ở đỉnh màn hình.

### 4.3 Bố Cục Layout: Flexbox & CSS Grid
* **Flexbox (`display: flex`):** Thích hợp cho bố cục **1 chiều** (hàng ngang hoặc cột dọc). Rất mạnh trong việc căn chỉnh các phần tử con (`justify-content`, `align-items`, `gap`).
* **CSS Grid (`display: grid`):** Thích hợp cho bố cục **2 chiều** (cả hàng và cột cùng lúc). Dễ dàng tạo lưới danh sách thẻ (Cards Grid), bố cục trang web phức tạp với `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.

### 4.4 Responsive Web Design & Đơn Vị Đo Lường
Đảm bảo website hiển thị đẹp mắt trên mọi thiết bị màn hình từ nhỏ đến lớn:
* **Tư duy Mobile-First:** Viết CSS cho màn hình di động trước, sau đó dùng `@media (min-width: ...)` để bổ sung style cho Tablet và Desktop.
* **Đơn vị đo lường linh hoạt:**
  - `px`: Đơn vị tuyệt đối (dùng cho đường viền `border: 1px solid`, bóng `box-shadow`).
  - `rem`: Đơn vị tương đối dựa theo `font-size` của thẻ `<html>` (mặc định 1rem = 16px). Dùng cho `font-size`, `padding`, `margin` để hỗ trợ phóng to/thu nhỏ giao diện theo cài đặt trình duyệt.
  - `%`, `vw`, `vh`: Đơn vị phần trăm theo chiều rộng/chiều cao cửa sổ màn hình.

### 4.5 Semantic HTML & SEO Cơ Bản
* Dùng duy nhất **1 thẻ `<h1>`** trên mỗi trang chứa từ khóa tiêu đề chính.
* Mọi thẻ hình ảnh `<img>` phải có thuộc tính `alt="Mô tả hình ảnh"` phục vụ SEO và trình đọc màn hình (Screen Readers).
* Sử dụng thẻ liên kết `<a>` có nghĩa và tiêu đề rõ ràng.

### 4.6 Modern Aesthetics: Design Tokens, Dark Mode & Micro-animations
* **Design Tokens (CSS Variables):** Định nghĩa toàn bộ hệ thống màu sắc, khoảng cách, bo góc tại `variables.css`. Khi cần đổi màu thương hiệu, bạn chỉ cần chỉnh sửa 1 vị trí duy nhất.
* **Dark Mode Support:** Sử dụng thuộc tính `data-theme="dark"` trên thẻ `<html>` hoặc `<body>` kết hợp với CSS Variables để chuyển đổi giao diện sáng/tối dễ dàng.
* **Micro-interactions:** Các hiệu ứng chuyển động nhỏ như nút bấm đổi màu mượt mà khi hover (`transition: all 0.3s ease`), thẻ bài nổi nhẹ khi di chuột (`transform: translateY(-4px)`).

### 4.7 Mô Hình Bố Cục Minimalist & Dual Mode (Landing Page vs Admin Dashboard)
Framework phân chia bố cục giao diện trực quan thành các khối chính và hỗ trợ chuyển đổi 2 chế độ ngay trên `<header>`:
- **Chế độ 1: Landing Page Mode (`#landingView`)**: Dành cho các trang giới thiệu sản phẩm/dịch vụ, bao gồm khối Hero Banner, Bài viết cốt lõi, Grid tính năng, Sidebar phụ và Footer.
- **Chế độ 2: Admin Dashboard Mode (`#adminView`)**: Dành cho hệ thống quản trị, bao gồm Bảng chỉ số thống kê (Stats Metrics Cards), Bảng quản lý dữ liệu người dùng (Data Table), Tác vụ quản trị nhanh và Nhật ký hoạt động.

Bộ chuyển đổi chế độ (`.mode-switcher`) nằm trực tiếp tại thẻ `<header>` giúp bạn linh hoạt phát triển hoặc kiểm thử cả 2 dạng giao diện trên cùng một bộ khung.

### 4.8 Đa Dạng Phong Cách Cửa Hàng, Khung Bố Cục Block & Tâm Lý Khách Hàng (Customer Psychology)
Framework 2026 mở rộng khả năng trình bày đa dạng 4 mô hình cửa hàng thực tế kèm phân tích chiều sâu về **Tâm lý học hành vi người tiêu dùng**:

1. **4 Phong Cách Cửa Hàng Chuyên Biệt (Store Presets):**
   - **☕ Quán Cà Phê (Coffee Shop):** Tone màu Espresso & Kem trầm ấm, tối ưu câu chuyện nguồn gốc hạt (Authenticity) và danh mục đồ uống Signature.
   - **🍰 Tiệm Bánh (Bakery):** Tone vàng nướng & hồng pastel kích thích vị giác trực giác (Sensory Craving), kết hợp ưu đãi theo đợt bánh nóng hổi trong ngày.
   - **🥬 Thực Phẩm Clean (Grocery):** Tone xanh lá Emerald bảo chứng sức khỏe (Health Framing), đóng gói Combo giảm ma sát suy nghĩ của bà nội trợ.
   - **🛍️ Cửa Hàng Tổng Hợp (General Store):** Tone Indigo & Đỏ rực rỡ hướng tới tỷ lệ chuyển đổi cao, đếm ngược Flash Sale và bằng chứng xã hội số lượng lớn.

2. **Các Mẫu Khung Bố Cục Trình Bày Block (Layout Frameworks):**
   - **Split Hero & Story:** Phân đôi hình ảnh & thông điệp cốt lõi, phù hợp truyền tải giá trị thương hiệu.
   - **Grid Showcase & Menu:** Dàn trang dạng lưới tối ưu thị giác, tránh nghịch lý quá tải lựa chọn (Paradox of Choice).
   - **Urgency Offer (FOMO):** Khối khuyến mãi gấp gắn đếm ngược và thông báo số lượng có hạn.
   - **Trust & Social Proof:** Khối đánh giá khách hàng, chỉ số uy tín và cam kết đổi trả rủi ro bằng 0.
   - **Store Space & Location:** Khối mô phỏng không gian thực tế (Bếp mở, góc chill window view, quầy phun sương, bàn live demo) kết hợp bản đồ chỉ đường & quảng cáo sản phẩm đi kèm bối cảnh.

3. **Nguyên Lý Tâm Lý Khách Hàng Được Áp Dụng (Customer Psychology Callouts):**
   - 👁️ **Thị giác F/Z Pattern:** Dẫn dắt ánh mắt người dùng mượt mà đến nút bấm đặt hàng (CTA).
   - 🎨 **Tâm lý học Màu sắc (Color Priming):** Tác động đến xúc cảm tiềm thức theo từng loại hình sản phẩm.
   - ⚓ **Hiệu ứng Mỏ neo Giá (Anchoring Effect):** Đặt giá gốc gạch ngang làm nổi bật số tiền tiết kiệm được.
   - ⏳ **Tâm lý né tránh mất mát (Loss Aversion):** Thúc đẩy hành động mua ngay nhờ tính khan hiếm.
   - 🛡️ **Triệt tiêu rủi ro (Risk Reversal):** Cam kết đổi trả & bảo hành giúp loại bỏ e ngại chốt đơn.
   - 🏡 **Mô phỏng kịch bản thực tế (Mental Simulation & Spatial Trust):** Mô tả chi tiết trải nghiệm tại chỗ và minh bạch bếp mở/showroom dùng thử giúp biến mong muốn trải nghiệm thành quyết định mua sắm thực tế.

4. **🚀 Lộ Trình Mở Rộng Mã Nguồn Mở Nâng Cao (Open-Source UX Roadmap):**
   - Trong các phiên bản phát triển tiếp theo, framework sẽ tích hợp các thư viện mở hàng đầu thế giới (**Swiper JS** cho slider mượt, **Lucide Icons** cho biểu tượng vector, **Framer Motion/Alpine JS** cho hiệu ứng vi chuyển động micro-interactions) nhằm đem lại trải nghiệm UX làm thỏa mãn người dùng ở mức tối đa.

---

## 5. Cấu Trúc Thư Mục & Hướng Dẫn Sử Dụng Framework

### 5.1 Cấu Trúc Thư Mục Chuẩn

```text
Website-project-framework-2026/
├── README.md               # Tài liệu hướng dẫn & hệ thống kiến thức (File này)
├── index.html              # Trang chủ mẫu chuẩn SEO & Semantic HTML5 (Tích hợp 4 Store Presets & Psych Callouts)
├── css/
│   ├── reset.css           # Đưa style các trình duyệt về chuẩn thống nhất
│   ├── variables.css       # Khai báo hệ thống Design Tokens (Màu HSL, Store Themes, Psych Tokens)
│   └── style.css           # Stylesheet chính (Layout Split, Grid Showcase, Store Themes, Psychology UI)
├── js/
│   └── main.js             # Logic Vanilla JS (Theme Switcher, Store Switcher, Layout Filter, Psych Toggle)
└── assets/
    ├── images/             # Thư mục chứa tài nguyên hình ảnh
    └── fonts/              # Thư mục chứa fonts tùy chỉnh
```

### 5.2 Hướng Dẫn Sử Dụng Cho Dự Án Mới

1. **Sao chép thư mục:** Copy toàn bộ thư mục framework này đặt tên thành dự án mới của bạn (ví dụ: `My-New-Website`).
2. **Khai báo thông tin dự án:** Mở file `index.html`, thay đổi các thẻ `<title>`, `<meta name="description">` phù hợp với dự án mới.
3. **Tùy chỉnh Bảng màu & Design System:** Mở `css/variables.css`, chỉnh sửa các tham số mã màu HSL (`--color-primary`, `--color-accent`, `--coffee-accent`, `--bakery-accent`, v.v.) để khớp với bộ nhận diện thương hiệu của bạn.
4. **Phát triển thành phần UI mới:** Thêm mã HTML vào `index.html` và viết style tương ứng vào `css/style.css`. Dùng sẵn các Utility Classes đã cung cấp (như `.container`, `.btn`, `.card`, `.grid`, `.store-btn`, `.psych-badge`).
5. **Xem trực tiếp:** Nhấp chuột phải vào file `index.html` trong VS Code và chọn **Open with Live Server** để bắt đầu lập trình!

---

*Framework được biên soạn & tối ưu hóa theo tiêu chuẩn phát triển Web chuyên nghiệp 2026.*

