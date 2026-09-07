class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator("#add");
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}

module.exports = { ProductPage };