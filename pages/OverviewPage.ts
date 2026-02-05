import { Page, expect } from '@playwright/test';
import { overviewLocators } from '../locators/overviewLocators';

export class OverviewPage {
    constructor(private page: Page) { }

    async validateFinalPrice(expectedTotal: number) {
        const prices = await this.page.locator(overviewLocators.itemPrices).allTextContents();

        const sum = prices
            .map(p => Number(p.replace('$', '')))
            .reduce((a, b) => a + b, 0);

        expect(sum).toBeCloseTo(expectedTotal, 2);
    }

    async finishCheckout() {
        await this.page.click(overviewLocators.finishBtn);
        await expect(this.page.locator(overviewLocators.thankYouHeader))
            .toHaveText('Thank you for your order!');
        await this.page.click(overviewLocators.backHomeBtn);
    }
}
