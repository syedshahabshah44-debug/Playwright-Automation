class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator("#add");
  }

  async addToCart() {
     await this.addToCartBtn.waitFor({ state: 'visible' });
    await this.addToCartBtn.click();
  }
}

module.exports = { ProductPage };