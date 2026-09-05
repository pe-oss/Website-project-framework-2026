/* ==========================================
   BACKEND MOCK API: ORDER & CHECKOUT SERVICE
   ========================================== */

export const OrderAPI = {
  async createOrder(orderData) {
    console.log('[OrderAPI] Creating new order:', orderData);
    return { success: true, orderId: `ORD-${Date.now()}`, total: orderData.total || 0 };
  },

  async getRecentOrders() {
    return [
      { orderId: 'ORD-901', customer: 'Nguyễn Văn A', total: 155000, status: 'Completed' },
      { orderId: 'ORD-902', customer: 'Lê Thị C', total: 420000, status: 'Processing' }
    ];
  }
};
