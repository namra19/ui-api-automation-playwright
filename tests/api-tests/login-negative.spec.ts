import { test, expect } from '@playwright/test';
import { AuthApi } from '../../api/api-pages/AuthApi';

test.describe('API | Auth | Negative', () => {
    test('Login fails with invalid credentials', async ({ request }) => {
        const authApi = new AuthApi(request);

        const response = await authApi.loginWithInvalidCredentials(
            'invalid_user',
            'wrong_password'
        );

        expect(response.status()).toBe(401);

        const bodyText = await response.text();

        expect(bodyText.toLowerCase()).toContain('username');
    });
});
