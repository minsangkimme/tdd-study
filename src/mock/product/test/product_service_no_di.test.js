const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');

jest.mock('../product_client');

describe('ProductService', () => {
    let productService;
    const fetchItems = jest.fn(async () => [
        {item: '🥛', available: true},
        {item: '🍓', available: false},
    ]);

    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        }
    });

    beforeEach(() => {
        productService = new ProductService();
        // fetchItems.mockClear();
        // ProductClient.mockClear();
    });

    it('should filter out only available items', async () => {
        const item = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
        expect(item).toEqual([{item: '🥛', available: true}]);
    });

    it('test', async () => {
        const item = await productService.fetchAvailableItems();
        expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});