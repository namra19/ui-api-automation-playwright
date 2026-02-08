import { test, expect } from '@playwright/test';
import { ProductsApi } from '../../api/api-pages/ProductsApi';

test.describe('API | Products | Negative', () => {
    test('Get product returns empty response for invalid product ID', async ({ request }) => {
        const productsApi = new ProductsApi(request);

        const response = await productsApi.getProductByInvalidId(9999);

        // FakeStore quirk: still returns 200
        expect(response.status()).toBe(200);

        const bodyText = await response.text();

        // Negative validation: no product returned
        expect(bodyText).toBe('');
    });
});
