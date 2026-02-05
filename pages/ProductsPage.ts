import { Page } from '@playwright/test';
import { productsLocators } from '../locators/productLocators'

export class ProductsPage {
    constructor(private page: Page) { }

    async addProductsToCart() {
        await this.page.click(productsLocators.addTshirtBtn);
        await this.page.click(productsLocators.addJacketBtn);
    }

    async goToCart() {
        await this.page.click(productsLocators.cartIcon);
    }
}
