import { Page, expect } from '@playwright/test';
import { cartLocators } from '../locators/cartLocators';

export class CartPage {
    constructor(private page: Page) { }

    async verifyItems(expectedCount: number) {
        await expect(this.page.locator(cartLocators.cartItem))
            .toHaveCount(expectedCount);

        const quantities = await this.page.locator(cartLocators.itemQty).allTextContents();
        quantities.forEach(qty => expect(qty).toBe('1'));
    }

    async checkout() {
        await this.page.click(cartLocators.checkoutBtn);
    }
}
