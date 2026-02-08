import { test } from '@playwright/test';
import { ProductsApi } from '../../api/api-pages/ProductsApi';
import { CartsApi } from '../../api/api-pages/CartsApi';

test.describe('API | Carts', () => {
    test('Create a new cart with an existing product', async ({ request }) => {
        // Ensure product exists
        const productsApi = new ProductsApi(request);
        const product = await productsApi.getProductAndValidate(1);

        // Create cart with that product
        const cartsApi = new CartsApi(request);
        const cart = await cartsApi.createCartAndValidate(
            1,           // userId
            product.id,  // productId
            2            // quantity
        );

        console.log('Created cart:', cart);
    });
});
