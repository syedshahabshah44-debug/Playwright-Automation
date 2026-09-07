const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homepage.js');
const { ProductPage } = require('../pages/productpage.js');

test.describe('Add to Cart Automation Flow', () => {

  test('User home page se grey jacket select karke cart me add kar sake', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    // Step 1: Home page visit karo
    await homePage.navigate();

    // Step 2: Product card par click karo
    await homePage.selectGreyJacket();

    // Step 3: Product Page par URL verify karo
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/collections/frontpage/products/grey-jacket");

    // Step 4: Add to Cart button par click karo
    await productPage.addToCart();
  });

});