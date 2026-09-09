const { test, expect } = require('@playwright/test');
const { HomePageTabLinks } = require('../pages/homepagetablinks');

test.describe('Home Page Navigation Tests', () => {

    test('Verify home page tab links and sign up navigation', async ({ page }) => {
        const homePage = new HomePageTabLinks(page);

        // 1. Open Website
        await homePage.openPage();
        await expect(page).toHaveURL('https://sauce-demo.myshopify.com/');

        // 2. Click First Tab
        await homePage.clickFirstTab();
        // Option: Add assertion for page URL or title after click
        
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