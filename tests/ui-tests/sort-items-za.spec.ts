import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { sortData } from '../../test-data/sortData';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test.describe('Inventory sorting', () => {

    test('Sort items by Name (Z-A) and validate order', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.goto();
        // Login (already implemented & working)
        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        // Apply Z-A sorting
        await productsPage.sortBy(sortData.sortOptionZA);

        // Get item names from UI
        const actualItemNames = await productsPage.getItemNames();

        // Create expected sorted list
        const expectedItemNames = [...actualItemNames].sort((a, b) =>
            b.localeCompare(a)
        );

        // Assertion
        expect(actualItemNames).toEqual(expectedItemNames);
    });

});
