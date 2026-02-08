import { ApiBase } from '../api-utils/ApiBase';
import { APIRequestContext, expect } from '@playwright/test';

export class ProductsApi extends ApiBase {
    private productsEndpoint = '/products';

    constructor(request: APIRequestContext) {
        super(request);
    }

    async getProductById(productId: number) {
        return await this.request.get(`${this.productsEndpoint}/${productId}`);
    }

    async getProductAndValidate(productId: number) {
        const response = await this.getProductById(productId);

        // Validate status (FakeStore returns 200 here)
        await this.validateStatus(response, 200);

        const body = await response.json();

        // Content validation
        expect(body.id).toBe(productId);
        expect(body.title).toBeTruthy();
        expect(body.price).toBeGreaterThan(0);
        expect(body.description).toBeTruthy();
        expect(body.category).toBeTruthy();
        expect(body.image).toBeTruthy();

        return body;
    }

    async getProductByInvalidId(productId: number) {
        return await this.request.get(`/products/${productId}`);
    }

}
