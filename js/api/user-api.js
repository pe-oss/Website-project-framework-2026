/* ==========================================
   BACKEND MOCK API: USER MANAGEMENT & AUTH SERVICE
   ========================================== */

export const UserAPI = {
  async login(username, password) {
    console.log(`[UserAPI] Logging in user: ${username}`);
    return { success: true, token: 'mock-jwt-token-2026', user: { id: 101, username, role: 'admin' } };
  },

  async getCurrentUser() {
    return { id: 101, username: 'admin', name: 'Antigravity Administrator', role: 'admin' };
  },

  async getUsers() {
    return [
      { id: 1001, name: 'Nguyễn Văn A', email: 'a@example.com', role: 'Customer' },
      { id: 1002, name: 'Trần Thị B', email: 'b@example.com', role: 'Admin' }
    ];
  }
};
