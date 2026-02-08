import { ApiBase } from '../api-utils/ApiBase';
import { APIRequestContext, expect } from '@playwright/test';

export class AuthApi extends ApiBase {
    private loginEndpoint = '/auth/login';

    constructor(request: APIRequestContext) {
        super(request);
    }

    async login(username: string, password: string) {
        return await this.request.post(this.loginEndpoint, {
            data: { username, password },
        });
    }

    async loginSuccessfully(username: string, password: string) {
        const response = await this.login(username, password);

        await this.validateSuccess(response);

        const body = await response.json();
        expect(body.token).toBeTruthy();

        return body.token;
    }

    async loginWithInvalidCredentials(username: string, password: string) {
        return await this.request.post('/auth/login', {
            data: {
                username,
                password,
            },
        });
    }

}
