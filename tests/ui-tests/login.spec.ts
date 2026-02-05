import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test.describe('SauceDemo Login', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await expect(page).toHaveURL(/inventory.html/);
    });

});
