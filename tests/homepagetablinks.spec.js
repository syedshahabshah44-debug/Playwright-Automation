const { test, expect } = require('@playwright/test');
const { HomePageTabLinks } = require('../pages/homepagetablinks');

// TC 1: Verify the tablink of homepage
test.describe('Home Page Navigation Tests', () => {
    test('Verify home page tab links and sign up navigation', async ({ page }) => {
        /*class instance:Jab aap ek Class banate hain (jaise HomePageTabLinks), toh woh sirf ek Blueprint (Naksha) hoti hai.
        Woh khud kuch nahi karti aur na hi memory me jagah leti hai.  Lekin jab aap 'new' keyword use karke use kisi variable 
        me save karte hain Toh homePage us class ka Instance (ek live object) ban jata hai.
         Ab aap is homePage ke zariye us class ke sabhi buttons, links aur forms ko access kar sakte hain. ye neechy jo mene
         lika ha ye class instance ha*/
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
        // this is Page object Model instance
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

         const shoppingcartPage = await homePage.shoppingcartbyShopifytablink();
        await expect(shoppingcartPage).toHaveURL(/.*shopify\.com\/pk\/payments.*/);
        await shoppingcartPage.close();

        await homePage.WIFIiconlink();
        



    });
});