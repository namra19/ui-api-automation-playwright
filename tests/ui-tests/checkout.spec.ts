import { test } from '@playwright/test';
import { checkoutData } from '../../test-data/checkoutData';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { OverviewPage } from '../../pages/OverviewPage';
import { users } from '../../test-data/users';

test('Complete checkout flow with two items and validate final price', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const overviewPage = new OverviewPage(page);

    await loginPage.goto();

    // 1. Login
    await loginPage.login(
        users.standardUser.username,
        users.standardUser.password
    );

    // 2. Add products
    await productsPage.addProductsToCart();

    // 3. Cart
    await productsPage.goToCart();

    // 4. Verify products & qty
    await cartPage.verifyItems(2);

    // 5. Checkout
    await cartPage.checkout();

    // 6. User details & continue
    await checkoutPage.fillUserDetails(
        checkoutData.customer.firstName,
        checkoutData.customer.lastName,
        checkoutData.customer.postalCode
    );

    // 7. Validate final price
    const expectedTotal =
        checkoutData.products.tshirtPrice +
        checkoutData.products.jacketPrice;

    await overviewPage.validateFinalPrice(expectedTotal);

    // 8. Finish & verify
    await overviewPage.finishCheckout();
});
