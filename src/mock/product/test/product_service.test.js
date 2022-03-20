const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');


describe('ProductService - stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should filter out only available items', async () => {
    const item = await productService.fetchAvailableItems();
    expect(item.length).toBe(1);
    expect(item).toEqual([{item: '🥛', available: true}]);
  });
});