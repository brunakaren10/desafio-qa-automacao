import { expect, Page } from '@playwright/test';
export class InventoryPage {
    constructor(private page) {}
  
    async isOnPage() {
      await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
  
    async itemCountGreaterThan(count: number) {
      const items = await this.page.locator('.inventory_item').count();
      expect(items).toBeGreaterThan(count);
    }
  
    async addFirstItemToCart() {
      await this.page.click('text=Add to cart');
    }
  
    async goToCart() {
      await this.page.click('.shopping_cart_link');
    }
  }