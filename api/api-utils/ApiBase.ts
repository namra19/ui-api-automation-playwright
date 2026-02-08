import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class ApiBase {
    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async validateSuccess(response: APIResponse) {
        expect(response.ok()).toBeTruthy();
    }

    async validateStatus(response: APIResponse, status: number) {
        expect(response.status()).toBe(status);
    }
    async getSafeBody(response: any) {
        const contentType = response.headers()['content-type'] || '';

        if (contentType.includes('application/json')) {
            return response.json();
        }

        return response.text();
    }

}
