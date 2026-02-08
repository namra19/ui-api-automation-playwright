import { ApiBase } from '../api-utils/ApiBase';
import { APIRequestContext, expect } from '@playwright/test';

export class CartsApi extends ApiBase {
    private cartsEndpoint = '/carts';

    constructor(request: APIRequestContext) {
        super(request);
    }

    async createCart(
        userId: number,
        productId: number,
        quantity: number
    ) {
        return await this.request.post(this.cartsEndpoint, {
            data: {
                userId,
                date: new Date().toISOString().split('T')[0],
                products: [
                    {
                        productId,
                        quantity,
                    },
                ],
            },
        });
    }

    async createCartAndValidate(
        userId: number,
        productId: number,
        quantity: number
    ) {
        const response = await this.createCart(userId, productId, quantity);

        // FakeStore returns 201
        await this.validateStatus(response, 201);

        const body = await response.json();

        // Content validation
        expect(body.id).toBeTruthy();
        expect(body.userId).toBe(userId);
        expect(body.products[0].productId).toBe(productId);
        expect(body.products[0].quantity).toBe(quantity);

        return body;
    }
}
