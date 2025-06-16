import { expect } from '@playwright/test';
export class CartPage {
    constructor(private page) {}
  
    async isOnPage() {
      await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
    }
  
    async checkout() {
      await this.page.click('#checkout');
    }
  }