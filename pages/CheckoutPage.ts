import { Page } from '@playwright/test';
import { checkoutLocators } from '../locators/checkoutLocators';

export class CheckoutPage {
    constructor(private page: Page) { }

    async fillUserDetails(first: string, last: string, zip: string) {
        await this.page.fill(checkoutLocators.firstName, first);
        await this.page.fill(checkoutLocators.lastName, last);
        await this.page.fill(checkoutLocators.postalCode, zip);
        await this.page.click(checkoutLocators.continueBtn);
    }
}
