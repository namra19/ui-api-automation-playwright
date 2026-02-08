import { ApiBase } from '../api-utils/ApiBase';
import { APIRequestContext, expect } from '@playwright/test';

export class UsersApi extends ApiBase {
    private usersEndpoint = '/users';

    constructor(request: APIRequestContext) {
        super(request);
    }

    async deleteUser(userId: number) {
        return await this.request.delete(`${this.usersEndpoint}/${userId}`);
    }

    async deleteUserAndValidate(userId: number) {
        const response = await this.deleteUser(userId);

        await this.validateStatus(response, 200);

        const body = await response.json();
        expect(body.id).toBe(userId);

        return body;
    }
}
