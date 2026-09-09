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
        this.Homemenue  = page.locator("li:nth-child(1) a:nth-child(1)");
        this.Catalogmenue=page.locator("a[href='/collections/all']");
        this.Blogmenue=page.locator("a[href='/blogs/news']");
        this.AboutUsmenue=page.locator("li:nth-child(4) a:nth-child(1)");
        this.Wishlistmenue=page.locator("a[href='#sauce-show-wish-list']");
        this.Referafriendmenue=page.locator("a[href='#sauce-show-refer-friend']");
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
    async homemenue() {
        await this.Homemenue.click();
    }
     async catalogmenue() {
        await this.Catalogmenue.click();
    }
    async blogmenue() {
        await this.Blogmenue.click();
    }
    async aboutusmenue(){
        await this.AboutUsmenue.click();
    }
    async wishlistmenue(){
        await this.Wishlistmenue.click();

    }
    async referafriendmenue(){
        await this.Referafriendmenue.click();
    }
}

module.exports = { HomePageTabLinks };