class HomePageTabLinks {
    constructor(page) {
        this.page = page;

        /* centralization to define locators:
        ---------------------------------------
        Centralization (Maintainability): Agar kal ko Shopify application ka UI design change hota hai 
         toh aapko test files me change karne ki zaroorat nahi padegi. Aapko sirf is constructor me aakar
         selector update karna hoga.
        */
        this.firstTab = page.locator("div.seven.columns.offset-by-one.desktop a").nth(0);
        this.secondTab = page.locator("div.seven.columns.offset-by-one.desktop a").nth(1);
        this.fourthTab = page.locator("div.seven.columns.offset-by-one.desktop a").nth(3);
        this.signUp = page.getByRole("link", { name: "Sign up" });
        this.cart = page.locator(".toggle-drawer.cart.desktop");
        this.checkout = page.locator(".checkout");
        this.Homemenue = page.locator("li:nth-child(1) a:nth-child(1)");
        this.Catalogmenue = page.locator("a[href='/collections/all']");
        this.Blogmenue = page.locator("a[href='/blogs/news']");
        this.AboutUsmenue = page.locator("li:nth-child(4) a:nth-child(1)");
        this.Wishlistmenue = page.locator("a[href='#sauce-show-wish-list']");
        this.Referafriendmenue = page.locator("a[href='#sauce-show-refer-friend']");
        this.facebookiconlink = page.locator("a[href*='facebook.com']");
        this.twittericonlink = page.locator("a[href*='twitter.com']");
        this.instagramiconlink = page.locator("a[href*='instagram.com']");
        this.wifiiconlink = page.locator("a[href$='.atom']");
    }

    //2. Direct Action Methods (Simple Click Functions)
    async openPage() {
        await this.page.goto("https://sauce-demo.myshopify.com/");
    }
    async clickFirstTab() { await this.firstTab.click(); }
    async clickSecondTab() { await this.secondTab.click(); }
    async clickFourthTab() { await this.fourthTab.click(); }
    async clickSignUp() { await this.signUp.click({ force: true }); }
    async clickCart() { await this.cart.click(); }
    async clickCheckout() { await this.checkout.click(); }
    async homemenue() { await this.Homemenue.click(); }
    async catalogmenue() { await this.Catalogmenue.click(); }
    async blogmenue() { await this.Blogmenue.click(); }
    async aboutusmenue() { await this.AboutUsmenue.click(); }
    async wishlistmenue() { await this.Wishlistmenue.click(); }
    async referafriendmenue() { await this.Referafriendmenue.click(); }

/*
3. Asynchronous / Event Handling Methods (Social Links)
Kya ho raha hai: Naye browser tab me khulne wale external links (Facebook, Twitter, Instagram)
 ko handle kiya ja raha hai.
Kaun sa problem solve ho raha hai:
Multi-Tab Race Condition / Hanging Issue: External links clickable hote hi naye window tab me khulte hain. 
Agar Playwright sirf click kar de, toh naye page context ke ready hone tak execution hang ya timeout ho sakti hai.
*/
    async Facebooktablink() {
        await this.facebookiconlink.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.facebookiconlink.click({ force: true })
        ]);
        return newPage;
    }

    async Twittericonlink() {
        await this.twittericonlink.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.twittericonlink.click({ force: true })
        ]);
        return newPage;
    }

    async INSTAGRAMiconlink() {
        await this.instagramiconlink.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.instagramiconlink.click({ force: true })
        ]);
        return newPage;
    }

    async WIFIiconlink() {
        await this.wifiiconlink.scrollIntoViewIfNeeded();
        await this.wifiiconlink.click({ force: true });
    }
}

module.exports = { HomePageTabLinks };