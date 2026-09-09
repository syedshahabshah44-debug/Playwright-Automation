const { test, expect } = require('@playwright/test');
const { HomePageTabLinks } = require('../pages/homepagetablinks');

// TC 1: Verify the tablink of homepage
test.describe('Home Page Navigation Tests', () => {
    test('Verify home page tab links and sign up navigation', async ({ page }) => {
        const homePage = new HomePageTabLinks(page);
        
        await homePage.openPage();
        await expect(page).toHaveURL('https://sauce-demo.myshopify.com/');
        
        await homePage.clickFirstTab();
        await homePage.clickSecondTab();
        await homePage.clickFourthTab();
        await homePage.clickSignUp();
        await expect(page).toHaveURL(/.*\/account\/register/);
        
        await homePage.clickCart();
        await homePage.clickCheckout();
        await homePage.homemenue();
        await homePage.catalogmenue();
        await homePage.blogmenue();
        await homePage.aboutusmenue();
        await homePage.wishlistmenue();
        await homePage.referafriendmenue();
    });
});

// TC 2: Verify the icon link of home page
test.describe('Home Page icon links Test', () => {
    test('Verify home page icon links when click', async ({ page }) => {
        const homePage = new HomePageTabLinks(page);
        
        // 🔹 FIX 1: Page open karna zaroori tha
        await homePage.openPage();

        // 🔹 FIX 2: Naye tabs check karne ke liye handles capture karein
        const fbPage = await homePage.Facebooktablink();
        await expect(fbPage).toHaveURL(/facebook.com/);
        await fbPage.close(); // Naya tab close karein takay clean testing ho

        const twitterPage = await homePage.Twittericonlink();
        await expect(twitterPage).toHaveURL(/twitter.com|x.com/);
        await twitterPage.close();

        const instaPage = await homePage.INSTAGRAMiconlink();
        await expect(instaPage).toHaveURL(/instagram.com/);
        await instaPage.close();

        await homePage.WIFIiconlink();
    });
});