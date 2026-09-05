# Chính Sách Bảo Mật & Điều Khoản Sử Dụng Framework

## 1. Giới Thiệu
Tài liệu này quy định các chính sách về bảo mật thông tin và an toàn dữ liệu đối với người dùng khi triển khai dự án dựa trên **Minimalist Web Framework 2026**.

## 2. Dữ Liệu Thu Thập & Lưu Trữ Cục Bộ
Framework hoạt động 100% Client-Side với Vanilla JavaScript. Các tùy chỉnh cá nhân hóa của người dùng bao gồm:
- **Chế độ giao diện (View Mode)**: Lưu trong `localStorage.getItem('viewMode')`
- **Giao diện sáng/tối (Theme Mode)**: Lưu trong `localStorage.getItem('theme')`
- **Phong cách cửa hàng (Store Style)**: Lưu trong `localStorage.getItem('storeStyle')`
- **Phân tích tâm lý khách hàng**: Lưu trong `localStorage.getItem('showPsychology')`

Không có dữ liệu cá nhân nào bị truyền ra ngoài khi không có sự đồng ý của người dùng.

## 3. Quyền Riêng Tư & An Toàn Mã Nguồn
- Mọi thành phần HTML/CSS/JS đều tuân thủ tiêu chuẩn mã nguồn mở HTML5/CSS3.
- Không chứa các đoạn mã theo dõi (trackers) hoặc quảng cáo ngầm từ bên thứ 3.
