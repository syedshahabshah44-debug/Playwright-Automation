class HomePage {
  constructor(page) {
    this.page = page;
    this.productCard = page.locator("img[alt='Grey jacket']");
  }

  async navigate() {
    await this.page.goto("https://sauce-demo.myshopify.com/");
  }

  async selectGreyJacket() {
    await this.productCard.click();
  }
}

module.exports = { HomePage };