const { test, expect } = require('@playwright/test');
const { HomePageTabLinks } = require('../pages/homepagetablinks');


//TC 1:verify the tablink of homepage
test.describe('Home Page Navigation Tests', () => {
    test('Verify home page tab links and sign up navigation', async ({ page }) => {
        const homePage = new HomePageTabLinks(page);
        // 1. Open Website
        await homePage.openPage();
        await expect(page).toHaveURL('https://sauce-demo.myshopify.com/');
        // 2. Click First Tab
        await homePage.clickFirstTab();
        // 3. Click Second Tab
        await homePage.clickSecondTab();
        // 4. Click Fourth Tab
        await homePage.clickFourthTab();
        // 5. Click Sign Up Link
        await homePage.clickSignUp();
        // Verify user navigated to Register page
        await expect(page).toHaveURL(/.*\/account\/register/);
        // 6. Click Cart Icon
        await homePage.clickCart();
        await homePage.clickCheckout();
        await homePage. homemenue();
        await homePage. catalogmenue();
        await homePage. blogmenue();
        await homePage.aboutusmenue();
        await homePage.wishlistmenue();
        await homePage.referafriendmenue();
    });
});




/* TC 2: verigy the icon link of home page
test.describe('Home Page icon links Test', () => {
    test('Verify home page icon links when click', async ({ page }) => {
        const homePage = new HomePageTabLinks(page);

       
         

    });

});*/