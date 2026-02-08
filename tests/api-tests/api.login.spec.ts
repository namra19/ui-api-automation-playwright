import { test } from '@playwright/test';
import { AuthApi } from '../../api/api-pages/AuthApi';
import { users } from '../../test-data/users';

test.describe('API | Auth', () => {
    test('Perform a successful login', async ({ request }) => {
        const authApi = new AuthApi(request);

        const { username, password } = users.validAPIUser;
        await authApi.loginSuccessfully(username, password);
    });
});
