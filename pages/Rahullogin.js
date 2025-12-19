class RahulLoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.locator('#userPassword');
        this.loginBtn = page.locator('#login');
       
    }

    async open() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await this.page.waitForLoadState("networkidle");
    }

    async login(email, password) {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }   
   
}

module.exports = RahulLoginPage;