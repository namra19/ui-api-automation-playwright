import { test } from '@playwright/test';
import { UsersApi } from '../../api/api-pages/UsersApi';

test.describe('API | Users', () => {
    test('Delete a user', async ({ request }) => {
        const usersApi = new UsersApi(request);

        const deletedUser = await usersApi.deleteUserAndValidate(1);
        console.log('Deleted user:', deletedUser);
    });
});
