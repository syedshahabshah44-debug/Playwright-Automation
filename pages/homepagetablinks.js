class HomePageTabLinks {
    constructor(page) {
        this.page = page;

        // User Playwright recommended locators (getByRole / getByText)
        this.firstTab = page.locator("div.seven.columns.offset-by-one.desktop a").nth(0);
        this.secondTab = page.locator("div.seven.columns.offset-by-one.desktop a").nth(1);
        this.fourthTab = page.locator("div.seven.columns.offset-by-one.desktop a").nth(3);
        
        // Sign Up Link (Recommended Best Practice: User-facing role/text)
        this.signUp = page.getByRole("link", { name: "Sign up" });

        this.cart = page.locator(".toggle-drawer.cart.desktop");
        this.checkout = page.locator(".checkout");
    }

    async openPage() {
        await this.page.goto("https://sauce-demo.myshopify.com/");
    }

    async clickFirstTab() {
        await this.firstTab.click();
    }

    async clickSecondTab() {
        await this.secondTab.click();
    }

    async clickFourthTab() {
        // Direct click with built-in auto-waiting (removed manual .waitFor)
        await this.fourthTab.click();
    }

    async clickSignUp() {
        // Force click if element is in DOM but hidden behind a CSS layout/drawer
        await this.signUp.click({ force: true });
    }

    async clickCart() {
        await this.cart.click();
    }

    async clickCheckout() {
        await this.checkout.click();
    }
}

module.exports = { HomePageTabLinks };