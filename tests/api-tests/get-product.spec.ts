import { test } from '@playwright/test';
import { ProductsApi } from '../../api/api-pages/ProductsApi';

test.describe('API | Products', () => {
    test('Get a product and validate its content', async ({ request }) => {
        const productsApi = new ProductsApi(request);

        const product = await productsApi.getProductAndValidate(1);

        console.log('Product:', product);
    });
});
