class HomePage {
  constructor(page) {
    this.page = page;
    this.productCard = page.locator("img[alt='Grey jacket']");
    // Cart drawer toggle button selector
    this.cartDrawerBtn = page.locator(".toggle-drawer.cart.desktop");
  }

  async navigate() {
    await this.page.goto("https://sauce-demo.myshopify.com/");
  }

  async selectGreyJacket() {
    await this.productCard.click();
  }

  // Naya method drawer click ke liye
  async openCartDrawer() {
    await this.cartDrawerBtn.click();
  }
  
}

module.exports = { HomePage };