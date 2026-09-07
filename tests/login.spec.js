// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Functionality', () => {
    
    test('Successful login with valid credentials', async ({ page }) => {
        // Step 1: Page Object initialize karo
        const loginPage = new LoginPage(page);

        // Step 2: URL visit karo
        await loginPage.navigateToLogin();

        // Step 3: Verify page loaded (optional but best practice)
        await loginPage.verifyLoginButtonVisible();

        // Step 4: Credentials enter karo
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');

        // Step 5: Login button click karo
        await loginPage.clickLoginButton();

        // Step 6: Verify successful login (dashboard pe redirect hua)
        await expect(page).toHaveURL(/.*inventory.html/);
        
        // Ya title verify karo
        await expect(page.locator('.title')).toHaveText('Products');
    });

});