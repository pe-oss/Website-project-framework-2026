/* ==========================================
   BACKEND MOCK API: PRODUCT CATALOG SERVICE
   ========================================== */

export const ProductAPI = {
  async getProducts(category = 'all') {
    const products = [
      { id: 'SP-101', name: 'Cà Phê Cold Brew Signature', category: 'coffee', price: 55000, oldPrice: 65000, status: 'active' },
      { id: 'SP-102', name: 'Bánh Croissant Bơ Tươi', category: 'bakery', price: 42000, status: 'active' },
      { id: 'SP-103', name: 'Trái Cây Organic VietGAP', category: 'grocery', price: 120000, status: 'pending' },
      { id: 'SP-104', name: 'Combo Phụ Kiện Minimalist', category: 'general', price: 299000, status: 'inactive' }
    ];

    if (category === 'all') return products;
    return products.filter(p => p.category === category);
  },

  async addProduct(productData) {
    console.log('[ProductAPI] Adding product:', productData);
    return { success: true, id: `SP-${Date.now()}` };
  }
};
