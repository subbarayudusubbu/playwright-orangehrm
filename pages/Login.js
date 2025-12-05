class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = 'input[name="username"]';
        this.passwordField = 'input[name="password"]';
        this.loginBtn = 'button[type="submit"]';
       
    }

    async open() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/");
        await this.page.waitForLoadState("networkidle");
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginBtn);
    }

   
}

module.exports = LoginPage;
