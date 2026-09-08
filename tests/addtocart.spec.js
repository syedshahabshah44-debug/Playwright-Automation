const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homepage.js');
const { ProductPage } = require('../pages/productpage.js');

test.describe('Add to Cart Automation Flow', () => {

  test('User home page se grey jacket select karke cart me add kar sake', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    // Step 1: Home page visit
    await homePage.navigate();

    // Step 2: (Optional) Cart drawer open karna ho agar
    await homePage.openCartDrawer();
    
    // Step 3: Product select karna
    await homePage.selectGreyJacket();

    // Step 4: Product page verification & Add to Cart
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/collections/frontpage/products/grey-jacket");
    await productPage.addToCart();
    
  });

});