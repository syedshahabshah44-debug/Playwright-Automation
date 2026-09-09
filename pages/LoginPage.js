// login functionality script
const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        
        // Locators
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    // Actions
    async navigateToLogin() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    
    async verifyLoginButtonVisible() {
        await expect(this.loginButton).toBeVisible();
    }


}

module.exports = { LoginPage };